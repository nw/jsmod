var $ = require('jquery')
  , math = require('../lib/math');

$(function(){



  var x = $('#x')
    , y = $('#y')
    , total = $('#total')
    , addbtn = $('#addbtn');

  addbtn.on('click', function(evt){
    total.text(math.add(x.val(), y.val()));
  });

  var array = $('#array')
    , sum = $('#sum')
    , sumbtn = $('#sumbtn');

  sumbtn.on('click', function(evt){
    sum.text(math.sum(array.val().split(/[ ,]+/)));
  });


});
