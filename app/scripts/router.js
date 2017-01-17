var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var Template = require('./components/colinmck.jsx').Template;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function(){
    ReactDOM.render(
      React.createElement(Template),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
