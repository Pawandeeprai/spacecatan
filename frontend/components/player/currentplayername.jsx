var React = require('react');

var PlayerStore = require('../../stores/player.js');

module.exports = React.createClass({
  getInitialState: function(){
    return {currentPlayer: PlayerStore.currentPlayer() };
  },
  componentDidMount: function(){
    this.listener = PlayerStore.addListener(this._onChange);

  },
  _onChange: function(){
    this.setState({
      currentPlayer: PlayerStore.currentPlayer()
    });
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },
  render: function () {
    return (
      <div className="current-player-name">
        <h1>{this.state.currentPlayer.name + "'s turn"}</h1>
      </div>
    );
  }
});
