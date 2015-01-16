
var $ = require('jquery')
  , marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

$(function(){

  var input = $('#input')
    , output = $('#output');

  input
    .css({'width': '50%', height: '300px'})
    .on('keyup', function(evt){
      output.html( marked(input.val()) );
    });

})
