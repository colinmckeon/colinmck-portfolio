var $ = window.jQuery = window.$ = require('jquery');
var Backbone = require('backbone');

window.Tether = require('tether');
require('bootstrap');

require('./router');

//waits for DOM to be ready
$(function(){
  //triggers router
  Backbone.history.start();
});
