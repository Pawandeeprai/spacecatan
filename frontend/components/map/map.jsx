var React = require('react');
var VertexRow = require('./row.jsx');
var TileRow = require('./tile_row.jsx');

var CurrentPlayer = require('../player/currentplayername.jsx');
var GameButtons = require('../player/buttons.jsx');
var ResourceTab = require('../player/resourcetab.jsx');
var BuildingCards = require('../player/buildingcards.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <CurrentPlayer/>
        <GameButtons/>
        <ResourceTab/>
        <div className="map">
          <VertexRow vertices={0} roads={0} start="low" rownum="row1"/>
          <VertexRow vertices={1} roads={2} start="low" rownum="row2"/>
          <VertexRow vertices={2} roads={4} start="low" rownum="row3"/>
          <VertexRow vertices={3} roads={6} start="high" rownum="row4"/>
          <VertexRow vertices={4} roads={8} start="high" rownum="row5"/>
          <VertexRow vertices={5} roads={10} start="high" rownum="row6"/>
          <TileRow tiles={[0,2]} roads={1} rownum="tilerow1"/>
          <TileRow tiles={[3,6]} roads={3} rownum="tilerow2"/>
          <TileRow tiles={[7,11]} roads={5} rownum="tilerow3"/>
          <TileRow tiles={[12,15]} roads={7} rownum="tilerow4"/>
          <TileRow tiles={[16, 18]} roads={9} rownum="tilerow5"/>
        </div>
        <BuildingCards/>
      </div>
    );
  }
});
