var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');

var RoadStore = new Store(AppDispatcher);

var _roads = [];


function Road(pos){
  this.connections = []; //will be vertexes
  this.neibhors = []; // will be roads
  this.pos = pos;
  this.canBuild = true;
  this.color = null; //will eventually be a player color (the one who owns the road)
}

var generateRoads = function(){

};

module.exports = RoadStore;
