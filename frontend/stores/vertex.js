var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');

var VertexStore = new Store(AppDispatcher);

var vertices_ = [];

function Vertex(){
  this.neibhors = [];
  this.canBuild = true;
  this.colorBuild = [];
  this.base = null; // will eventually be the color of the person who owns the base here
  this.city = false;
}
