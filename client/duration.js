
var $ = require('jquery')
 , moment = require('moment')
 , ts = Date.now();

$(function(){

  var duration = $('#duration');

  setInterval(function(){
    duration.text( moment(ts).fromNow()  + ' - (' + (Date.now() - ts) + ')');
  }, 1000);

})
