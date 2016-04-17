var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');

var PlayerStore = new Store(AppDispatcher);

var players_ = [];

function Player(name, color){
  this.name = name;
  this.color = color;
  this.resources = {
    wood: 0,
    brick: 0,
    sheep: 0,
    wheat: 0,
    stone: 0
  };
}

var generatePlayer = function(name, color){
  players_.push(new Player(name,color));
};

var rotatePlayers = function(){
  var last = players_.shift();
  players_.push(last);
};

PlayerStore.all = function(){
  return players_;
};

PlayerStore.currentPlayer = function(){
  return players_[0];
};


PlayerStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "NEW_PLAYERS":
      payload.players.forEach(function(player){
        generatePlayer(player.name,player.color);
      });
      PlayerStore.__emitChange();
      break;
    case "ROTATE":
      rotatePlayers();
      PlayerStore.__emitChange();
      break;
  }
};

module.exports = PlayerStore;
