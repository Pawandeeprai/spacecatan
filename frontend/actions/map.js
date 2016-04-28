var AppDispatcher = require('../dispatcher/dispatcher');

var MapActions = {
  generateNewMap: function(){
    AppDispatcher.dispatch({
      actionType: "NEW_MAP"
    });
  },
  createConnections: function(){
    AppDispatcher.dispatch({
      actionType: "CREATE_CONNECTIONS"
    });
  }
};


module.exports = MapActions;
