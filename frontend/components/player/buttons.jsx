var React = require('react');

var PlayerActions = require('../../actions/player.js');
var TileActions = require('../../actions/tile.js');

var BuildBase = require('./buildbase.jsx');


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
    this.setState({
      rolled: true
    });
  },

  rotatePlayers: function(e){
    e.preventDefault();
    PlayerActions.rotatePlayers();
    this.setState({
      rolled: false
    });
  },

  render: function () {
    if (this.state.rolled){
      return(
        <div className="end-turn">

          <input
            type="submit"
            value="Build Road"
            onClick={this.rotatePlayers}
            className="button"></input>
          <BuildBase/>
          <input
            type="submit"
            value="End Turn"
            onClick={this.rotatePlayers}
            className="button"></input>
        </div>
      );
    } else {
      return (
      <div className="end-turn">
        <input
          type="submit"
          value="Roll"
          onClick={this.roll}
          className="button"></input>
      </div>
    );
    }
  }
});
