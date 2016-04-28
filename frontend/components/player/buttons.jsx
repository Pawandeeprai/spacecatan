var React = require('react');

var PlayerActions = require('../../actions/player.js');


module.exports = React.createClass({
  getInitialState: function(){
    return {
      rolled: false,
    };
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
          onClick={this.rotatePlayers}
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
