'use strict';

/**
 * @ngdoc service
 * @name lukevpoelgithubioApp.weather
 * @description
 * # weather
 * Factory in the lukevpoelgithubioApp.
 */
angular.module('lukevpoelgithubioApp')
  .factory('weather', function () {
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
