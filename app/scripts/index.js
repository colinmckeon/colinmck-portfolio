var $ = window.jQuery = window.$ = require('jquery');
var Backbone = require('backbone');


//waits for DOM to be ready
$(function(){
  //triggers router
  Backbone.history.start();
});
