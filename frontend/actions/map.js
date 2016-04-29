var AppDispatcher = require('../dispatcher/dispatcher');

var MapActions = {
  generateNewMap: function(){
    AppDispatcher.dispatch({
      actionType: "NEW_MAP"
    });
  },
  generateConnections: function(){
    AppDispatcher.dispatch({
      actionType: "GENERATE_CONNECTIONS"
    });
  }
};


module.exports = MapActions;
