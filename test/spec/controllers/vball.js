'use strict';

describe('Controller: VballCtrl', function () {

  // load the controller's module
  beforeEach(module('lukevpoelgithubioApp'));

  var VballCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VballCtrl = $controller('VballCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VballCtrl.awesomeThings.length).toBe(3);
  });
});
