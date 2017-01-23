'use strict';

/**
 * @ngdoc overview
 * @name portfolioProjectApp
 * @description
 * # portfolioProjectApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/capstone', {
        templateUrl: 'views/capstone.html',
        controller: 'CapstoneCtrl',
        controllerAs: 'capstone'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      })
      .when('/vball', {
        templateUrl: 'views/vball.html',
        controller: 'VballCtrl',
        controllerAs: 'vball'
      })
      .when('/analytics', {
        templateUrl: 'views/analytics.html',
        controller: 'AnalyticsCtrl',
        controllerAs: 'analytics'
      })
      .when('/flickrapi', {
        templateUrl: 'views/flickrapi.html',
        controller: 'FlickrapiCtrl',
        controllerAs: 'flickrapi'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
