var React = require('react');
var Tile = require('./tile');
var Road = require('./road');

var TileStore = require('../../stores/tile.js');
var RoadStore = require('../../stores/road.js');

module.exports = React.createClass({
  generateTiles: function(){
    // we can have a tiles per row store which keeps track of where all the tiles are (store it on the backend too)
    var tiles = [];
    var allRoads = RoadStore.all();
    var roadsRowNum = this.props.roads;
    var mapTiles = TileStore.all().slice(this.props.tiles[0], this.props.tiles[1] + 1);
    for (var i = 0; i < mapTiles.length; i++){
      tiles.push(<Road road={allRoads[roadsRowNum][i]}/>);
      tiles.push(<Tile key={i} tile={mapTiles[i]} tiletype="water"/>);
    }
    tiles.push(<Road road={allRoads[roadsRowNum][allRoads[roadsRowNum].length - 1]}/>);
    return tiles;
  },
  render: function () {
    var display = this.generateTiles();
    return (
      <div className={this.props.rownum}>
        {display}
      </div>
    );
  }
});
