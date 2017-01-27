'use strict';

/**
 * @ngdoc overview
 * @name lukevpoelgithubioApp
 * @description
 * # lukevpoelgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('lukevpoelgithubioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'sticky',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/analytics', {
        templateUrl: 'views/analytics.html',
        controller: 'AnalyticsCtrl',
        controllerAs: 'analytics'
      })
      .when('/capstone', {
        templateUrl: 'views/capstone.html',
        controller: 'CapstoneCtrl',
        controllerAs: 'capstone'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/flickrapi', {
        templateUrl: 'views/flickrapi.html',
        controller: 'FlickrapiCtrl',
        controllerAs: 'flickrapi'
      })
      .when('/vball', {
        templateUrl: 'views/vball.html',
        controller: 'VballCtrl',
        controllerAs: 'vball'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
