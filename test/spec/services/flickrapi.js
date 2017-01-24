'use strict';

describe('Service: flickrapi', function () {

  // load the service's module
  beforeEach(module('lukevpoelgithubioApp'));

  // instantiate service
  var flickrapi;
  beforeEach(inject(function (_flickrapi_) {
    flickrapi = _flickrapi_;
  }));

  it('should do something', function () {
    expect(!!flickrapi).toBe(true);
  });

});
