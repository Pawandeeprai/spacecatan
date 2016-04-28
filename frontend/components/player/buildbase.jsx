var React = require('react');

var PlayerStore = require('../../stores/player.js');

module.exports = React.createClass({
  getInitialState: function(){
    var currentPlayer = PlayerStore.currentPlayer();
    return {currentPlayer: currentPlayer};
  },
  componentWillMount: function(){
    this.listener = PlayerStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },
  _onChange: function(){
    this.setState({
      currentPlayer: PlayerStore.currentPlayer()
    });
  },
  checkForResources: function(){
    if (this.state.currentPlayer.resources.plasma < 1){
      return false;
    }
    if (this.state.currentPlayer.resources.elZero < 1){
      return false;
    }
    if (this.state.currentPlayer.resources.oxygen < 1){
      return false;
    }
    if (this.state.currentPlayer.resources.hydrogen < 1){
      return false;
    }
    return true;
  },
  render: function () {
    if (this.checkForResources()){
      return (
        <input
          type="submit"
          value="Build Base"
          className="button"></input>
      );
    } else {
      return (
        <input
          type="submit"
          value="Build Base"
          className="button disable"></input>
      );
    }
  }
});
