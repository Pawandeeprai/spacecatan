var React = require('react');

var PlayerActions = require('../../actions/player.js');

module.exports = React.createClass({
  rotatePlayers: function(e){
    e.preventDefault();
    PlayerActions.rotatePlayers();
  },
  render: function () {
    return(
      <input
        type="submit"
        value="End Turn"
        onClick={this.rotatePlayers}
        className="button end-turn"></input>
    );
  }
});
