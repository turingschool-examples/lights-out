const assert = require('chai').assert;
const Light = require('../lib/light');

describe('Light', function () {

  it('should construct an object', function () {
    assert(new Light());
  });

  it('should start out inactive', function () {
    const light = new Light();
    assert.equal(light.active, false);
  });

  it('should switch to active when we call switch()', function () {
    const light = new Light();
    light.switch();
    assert.equal(light.active, true);
  });

  it('should be inactive if we call switch() twice', function () {
    const light = new Light();
    light.switch().switch();
    assert.equal(light.active, false);
  });

});
