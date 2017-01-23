'use strict';

/**
 * @ngdoc service
 * @name lukevpoelgithubioApp.analytics
 * @description
 * # analytics
 * Factory in the lukevpoelgithubioApp.
 */
angular.module('lukevpoelgithubioApp')
  .factory('analytics', function () {
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
