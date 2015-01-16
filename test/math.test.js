
var math = require('../lib/math');

describe('Math', function(){

  it('should add', function(){

    math.add(3,4).should.eql(7);
    math.add("3", "4").should.eql(7);

  });


  it('should sum arrays', function(){

    math.sum([1,2,3,4,5]).should.eql(15);
    math.sum(["1",2,"3",4,"5"]).should.eql(15);

  })


})
