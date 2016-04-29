var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');

var TileStore = new Store(AppDispatcher);

var VertexStore = require('./vertex.js');


var _tiles = [];
var rollTiles = {};
// create a tile object
function Tile(type, diceValue){ //TODO add the vertex array for connections
  this.type = type;
  this.connections = [];
  this.diceValue = diceValue;
}

Tile.prototype.sendResource = function () {

};

var generateNewMap = function(){
  var types = ["plasma","plasma", "plasma",
               "plat", "plat", "plat", "plat",
               "oxy", "oxy", "oxy", "oxy",
               "water", "water", "water","water",
               "food", "food", "food", "food"];
  var values = [6,5,9,4,3,8,10,6,5,null,9,12,3,2,10,11,11,4,8];
  // 4 of each tile with a sun in the middle (except plasma gets 3)
  //  3 plasma (brick)
  //  plat (stone)
  //  Oxygen (wheat)
  //  water (wood)
  //  carbon (wheat)
  var i = 0;
  while (types.length > 0){
    var random = Math.floor(Math.random() * types.length);
    _tiles.push(new Tile(types[random], values[i]) );
    types.splice(random, 1);
    i++;
  }
  _tiles[9] = new Tile("sun");

  _tiles.forEach(function(tile){
    if (rollTiles[tile.diceValue]){
      rollTiles[tile.diceValue].push(tile);
    } else {
      rollTiles[tile.diceValue] = [tile];
    }
  });
};

var generateConnections = function(){
  var allVert = VertexStore.all();
  var row1 = _tiles.slice(0,3);
  var row2 = _tiles.slice(3,7);
  var row3 = _tiles.slice(7,12);
  var row4 = _tiles.slice(12,16);
  var row5 = _tiles.slice(16,19);

  // build connections for row 1
  var i = 0;
  row1.forEach(function(tile){
    for (var j = i; j < i + 3; j ++){
      tile.connections.push([0,j]);
      tile.connections.push([1,j + 1]);
    }
    i += 2 ;
  });
  row2.forEach(function(tile){
    for (var j = i; j < i + 3; j ++){
      tile.connections.push([1,j]);
      tile.connections.push([2,j + 1]);
    }
    i += 2 ;
  });
  row3.forEach(function(tile){
    for (var j = i; j < i + 3; j ++){
      tile.connections.push([2,j]);
      tile.connections.push([3,j + 1]);
    }
    i += 2 ;
  });
  row4.forEach(function(tile){
    for (var j = i; j < i + 3; j ++){
      tile.connections.push([3,j]);
      tile.connections.push([4,j + 1]);
    }
    i += 2 ;
  });
  row5.forEach(function(tile){
    for (var j = i; j < i + 3; j ++){
      tile.connections.push([4,j]);
      tile.connections.push([5,j + 1]);
    }
    i += 2 ;
  });
};

var sendResource = function(dieRoll){
  rollTiles[dieRoll].forEach(function(tile){
    tile.sendResource();
  });
};

TileStore.all = function(){
  return _tiles;
};

TileStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "NEW_MAP":
      generateNewMap();
      TileStore.__emitChange();
      break;
    case "DICE_ROLL":
      sendResource(payload.dieRoll);
      TileStore.__emitChange();
      break;
    case "GENERATE_CONNECTIONS":
      generateConnections();
      TileStore.__emitChange();
      break;
  }
};
module.exports = TileStore;
