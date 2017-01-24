'use strict';

/**
 * @ngdoc service
 * @name lukevpoelgithubioApp.capstone
 * @description
 * # capstone
 * Factory in the lukevpoelgithubioApp.
 */
angular.module('lukevpoelgithubioApp')
  .factory('capstone', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
