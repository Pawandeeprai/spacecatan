var React = require('react');

var PlayerActions = require('../../actions/player.js');
var TileActions = require('../../actions/tile.js');


module.exports = React.createClass({
  getInitialState: function(){
    return {
      rolled: false,
    };
  },

  roll: function(){
    var dice1 = Math.floor(Math.random() * 5) + 1;
    var dice2 = Math.floor(Math.random() * 5) + 1;
    TileActions.roll(dice1 + dice2);
  },

  rotatePlayers: function(e){
    e.preventDefault();
    PlayerActions.rotatePlayers();
  },
  
  render: function () {
    return(
      <div className="end-turn">
        <input
          type="submit"
          value="Roll"
          onClick={this.roll}
          className="button"></input>
          <input
            type="submit"
            value="Build Road"
            onClick={this.rotatePlayers}
            className="button"></input>
            <input
              type="submit"
              value="Build Base"
              onClick={this.rotatePlayers}
              className="button"></input>
        <input
          type="submit"
          value="End Turn"
          onClick={this.rotatePlayers}
          className="button"></input>
      </div>
    );
  }
});
