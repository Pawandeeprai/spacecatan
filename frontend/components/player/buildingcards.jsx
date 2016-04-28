var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      clicked: false
    };
  },
  clicked: function(){
    if (this.state.clicked){
      this.setState({clicked: false});
    } else {
      this.setState({clicked: true});
    }
  },
  render: function () {
    if (this.state.clicked){
      return (
        <div className="build-tab">
          <div className="building-tab" id="road">
            <h2>Road</h2>

            <h3><div className="resource-color plasma"></div>Plasma: 1</h3>
            <h3><div className="resource-color zero"></div>El Zero: 1</h3>
            <h3 className="blank"><div className="resource-color"></div>c</h3>
            <h3 className="blank"><div className="resource-color"></div>c</h3>

          </div>
          <div className="building-tab" id="base">
            <h2>Base</h2>
            <h3><div className="resource-color plasma"></div>Plasma: 1</h3>
            <h3><div className="resource-color zero"></div>El Zero: 1</h3>
            <h3><div className="resource-color oxygen"></div>Oxygen: 1</h3>
            <h3><div className="resource-color hydrogen"></div>Hydrogen: 1</h3>
          </div>
          <div className="building-tab" id="city">
            <h2>City</h2>
            <h3><div className="resource-color hydrogen"></div>Hydrogen: 2</h3>
            <h3><div className="resource-color carbon"></div>Carbon: 3</h3>
            <h3 className="blank"><div className="resource-color"></div>c</h3>
            <h3 className="blank"><div className="resource-color"></div>c</h3>
          </div>
          <div className="building-tab" id="devcard">
            <h2>Card <span onClick={this.clicked} className="close-tab">X</span></h2>
            <h3><div className="resource-color hydrogen"></div>Hydrogen: 1</h3>
            <h3><div className="resource-color oxygen"></div>Oxygen: 1</h3>
            <h3><div className="resource-color carbon"></div>Carbon: 1</h3>
            <h3 className="blank"><div className="resource-color"></div>c</h3>
          </div>
        </div>
      );
    } else {
      return <input onClick={this.clicked} className="button open-building-tab" value="^^    Open Building Tab    ^^"></input>;
    }
  }
});
