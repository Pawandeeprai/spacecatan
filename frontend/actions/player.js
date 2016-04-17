var AppDispatcher = require('../dispatcher/dispatcher');

var PlayerActions = {
  generateNewPlayers: function(players){
    AppDispatcher.dispatch({
      actionType: "NEW_PLAYERS",
      players: players
    });
  },
  rotatePlayers: function(){
    AppDispatcher.dispatch({
      actionType: "ROTATE"
    });
  }
};


module.exports = PlayerActions;
