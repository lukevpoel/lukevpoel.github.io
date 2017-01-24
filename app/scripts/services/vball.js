'use strict';

/**
 * @ngdoc service
 * @name lukevpoelgithubioApp.vball
 * @description
 * # vball
 * Factory in the lukevpoelgithubioApp.
 */
angular.module('lukevpoelgithubioApp')
  .factory('vball', function () {
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
