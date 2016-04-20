var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');

var VertexStore = new Store(AppDispatcher);

var vertices_ = [];

function Vertex(pos){
  this.neibhors = [];
  this.canBuild = true;
  this.colorBuild = [];
  this.base = null; // will eventually be the color of the person who owns the base here
  this.city = false;
  this.pos = pos;
}

var generateVertices = function(){
  var rows = [7,9,11,11,9,7];
  var grid = [];
  for (var i = 0; i < rows.length; i++){
    var row = [];
    for (var j = 0; j < rows[i]; j++){
      row.push(new Vertex([i,j])); //passing the position gives us constant look up to update the store
    }
    grid.push(row);
  }
  vertices_ = grid;
};

VertexStore.all = function(){
  return vertices_;
};

VertexStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "NEW_MAP":
      generateVertices();
      VertexStore.__emitChange();
      break;

  }
};

module.exports = VertexStore;
