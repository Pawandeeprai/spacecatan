var AppDispatcher = require('../dispatcher/dispatcher');

var RoadActions = {
  generateNewRoads: function(){
    AppDispatcher.dispatch({
      actionType: "NEW_ROADS"
    });
  }
};

module.exports = RoadActions;
