'use strict';

/**
 * @ngdoc overview
 * @name todolistClientApp
 * @description
 * # todolistClientApp
 *
 * Main module of the application.
 */
angular
  .module('todolistClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    // AngularJS sort divs by dragging them around
    'ui.sortable',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/generate', {
        templateUrl: 'views/generate.html',
        controller: 'GenCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
