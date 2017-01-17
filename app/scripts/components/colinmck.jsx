var React = require('react');
var Backbone = require('backbone');

var NavBar = React.createClass({
  render: function(){
    return(
      <div>
        <h1>NAVBAR</h1>
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        <i className="fa fa-github" aria-hidden="true"></i>
        <i className="fa fa-envelope" aria-hidden="true"></i>
        <i className="fa fa-phone-square" aria-hidden="true"></i>
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
