var React = require('react');
var Vertex = require('./vertex.jsx');
var Road = require('./road.jsx');

var VertexStore = require('../../stores/vertex.js');

module.exports = React.createClass({
  getInitialState: function(){
    return({
      height: this.props.start
    });
  },
  generateVertex: function(){
    // we can have a vertex row store then it'll be easy to keep things in place
    var vertArray = [];
    var roadArray = [];
    var allVert = VertexStore.all();
    var rowNum = this.props.vertices;
    for(var i = 0; i < allVert[rowNum].length; i++){
      vertArray.push(
        <Vertex vertex={allVert[rowNum][i]} height={this.state.height} key={i}/>
      );
      roadArray.push(<Road height={this.state.height}/>);
      if (this.state.height === "low"){
        this.state.height = "high";
      } else {
        this.state.height = "low";
      }
    }
    return [vertArray, roadArray.slice(0, -1)];
  },
  render: function () {
    var verticies = this.generateVertex();
    return (
      <div className="row" id={this.props.rownum}>
        {verticies}
      </div>
    );
  }
});
