var React = require('react');

var PlayerStore = require('../../stores/player.js');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      resources : PlayerStore.currentPlayer().resources
    };
  },
  componentWillMount: function(){
    this.listener = PlayerStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },
  _onChange: function(){
    this.setState({
      resources : PlayerStore.currentPlayer().resources
    });
  },
  render: function () {
    return (
      <div className="resource-tab">
        <h1>Resources</h1>
        <h3><div className="resource-color plasma"></div>
        Plasma: {this.state.resources.wood}</h3>
        <h3><div className="resource-color zero"></div>
        Element Zero: {this.state.resources.brick}</h3>
        <h3><div className="resource-color oxygen"></div>
        Oxygen: {this.state.resources.sheep}</h3>
        <h3><div className="resource-color hydrogen"></div>
        Hydrogen: {this.state.resources.wheat}</h3>
        <h3><div className="resource-color carbon"></div>
        Carbon: {this.state.resources.stone}</h3>
      </div>
    );
  }
});
