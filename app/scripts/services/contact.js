'use strict';

/**
 * @ngdoc service
 * @name lukevpoelgithubioApp.contact
 * @description
 * # contact
 * Factory in the lukevpoelgithubioApp.
 */
angular.module('lukevpoelgithubioApp')
  .factory('contact', function () {
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
