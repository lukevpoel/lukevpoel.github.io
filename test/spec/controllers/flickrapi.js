'use strict';

describe('Controller: FlickrapiCtrl', function () {

  // load the controller's module
  beforeEach(module('lukevpoelgithubioApp'));

  var FlickrapiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlickrapiCtrl = $controller('FlickrapiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FlickrapiCtrl.awesomeThings.length).toBe(3);
  });
});
