'use strict';

/**
 * @ngdoc service
 * @name lukevpoelgithubioApp.flickrapi
 * @description
 * # flickrapi
 * Factory in the lukevpoelgithubioApp.
 */
angular.module('lukevpoelgithubioApp')
  .factory('flickrapi', function () {
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
