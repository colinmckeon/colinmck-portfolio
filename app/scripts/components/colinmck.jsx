var React = require('react');
var Backbone = require('backbone');

var NavBar = React.createClass({
  render: function(){
    return(
      <div>
        <h1>NAVBAR</h1>
      </div>
    );
  }
});

var Template = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar />
      </div>
    );
  }
});

module.exports = {
  Template: Template
}
