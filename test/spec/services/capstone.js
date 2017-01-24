'use strict';

describe('Service: capstone', function () {

  // load the service's module
  beforeEach(module('lukevpoelgithubioApp'));

  // instantiate service
  var capstone;
  beforeEach(inject(function (_capstone_) {
    capstone = _capstone_;
  }));

  it('should do something', function () {
    expect(!!capstone).toBe(true);
  });

});
