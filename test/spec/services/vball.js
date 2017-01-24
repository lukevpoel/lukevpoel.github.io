'use strict';

describe('Service: vball', function () {

  // load the service's module
  beforeEach(module('lukevpoelgithubioApp'));

  // instantiate service
  var vball;
  beforeEach(inject(function (_vball_) {
    vball = _vball_;
  }));

  it('should do something', function () {
    expect(!!vball).toBe(true);
  });

});
