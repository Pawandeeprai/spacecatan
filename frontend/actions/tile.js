var AppDispatcher = require('../dispatcher/dispatcher');

var TileActions = {
  roll: function(dieRoll){
    AppDispatcher.dispatch({
      actionType: "DICE_ROLL",
      dieRoll: dieRoll
    });
  }
};

module.exports = TileActions;
