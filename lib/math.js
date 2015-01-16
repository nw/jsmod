

exports.add = function add (x, y) {

  return parseFloat(x) + parseFloat(y);

}

exports.sum = function sum (array) {

  return array.reduce(function(prev, cur){
    return exports.add(prev, cur)
  }, 0);

}
