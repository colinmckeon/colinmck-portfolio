var React = require('react');
var Backbone = require('backbone');

var NavBar = React.createClass({
  render: function(){
    return(
      <div>

        <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <h1>NAVBAR</h1>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          <i className="fa fa-github" aria-hidden="true"></i>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <i className="fa fa-phone-square" aria-hidden="true"></i>
        </div>


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
