var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');

var RoadStore = new Store(AppDispatcher);

var roads_ = [];


function Road(pos){
  this.connections = []; //will be vertexes
  this.neibhors = []; // will be roads
  this.pos = pos;
  this.canBuild = true;
  this.color = null; //will eventually be a player color (the one who owns the road)
}

var generateNewRoads = function(){
  var rows = [6,4,8,5,10,6,10,5,8,4,6];
  var grid = [];
  for (var i = 0; i < rows.length; i ++){
    var row = [];
    for (var j = 0; j < rows[i]; j++){
      row.push(new Road([i,j]));
    }
    grid.push(row);
  }
  console.log(grid);
};

RoadStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "NEW_ROADS":
      generateNewRoads();
      RoadStore.__emitChange();
      break;

  }
};

module.exports = RoadStore;
