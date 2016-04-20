var React = require('react');
var VertexRow = require('./row.jsx');
var TileRow = require('./tile_row.jsx');

var CurrentPlayer = require('../player/currentplayername.jsx');
var EndTurn = require('../player/endturn.jsx');
var ResourceTab = require('../player/resourcetab.jsx');
var BuildingCards = require('../player/buildingcards.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <CurrentPlayer/>
        <EndTurn/>
        <ResourceTab/>
        <div className="map">
          <VertexRow vertices={0} start="low" rownum="row1"/>
          <VertexRow vertices={1} start="low" rownum="row2"/>
          <VertexRow vertices={2} start="low" rownum="row3"/>
          <VertexRow vertices={3} start="high" rownum="row4"/>
          <VertexRow vertices={4} start="high" rownum="row5"/>
          <VertexRow vertices={5} start="high" rownum="row6"/>
          <TileRow tiles={[0,2]} rownum="tilerow1"/>
          <TileRow tiles={[3,6]} rownum="tilerow2"/>
          <TileRow tiles={[7,11]} rownum="tilerow3"/>
          <TileRow tiles={[12,15]} rownum="tilerow4"/>
          <TileRow tiles={[16, 18]} rownum="tilerow5"/>
        </div>
        <BuildingCards/>
      </div>
    );
  }
});
