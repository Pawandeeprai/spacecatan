var AppDispatcher = require('../dispatcher/dispatcher');

var VertexActions = {
  generateNewVertices: function(){
    AppDispatcher.dispatch({
      actionType: "NEW_VERTICES"
    });
  }
};


module.exports = VertexActions;
