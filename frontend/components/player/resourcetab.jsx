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
            Plasma: {this.state.resources.plasma}</h3>
          <h3><div className="resource-color zero"></div>
            Element Zero: {this.state.resources.elZero}</h3>
          <h3><div className="resource-color oxygen"></div>
            Oxygen: {this.state.resources.oxygen}</h3>
          <h3><div className="resource-color hydrogen"></div>
            Hydrogen: {this.state.resources.hydrogen}</h3>
          <h3><div className="resource-color carbon"></div>
            Carbon: {this.state.resources.carbon}</h3>
          </div>
        );
  }
});
