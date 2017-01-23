'use strict';

describe('Service: flickrAPI', function () {

  // load the service's module
  beforeEach(module('lukevpoelgithubioApp'));

  // instantiate service
  var flickrAPI;
  beforeEach(inject(function (_flickrAPI_) {
    flickrAPI = _flickrAPI_;
  }));

  it('should do something', function () {
    expect(!!flickrAPI).toBe(true);
  });

});
