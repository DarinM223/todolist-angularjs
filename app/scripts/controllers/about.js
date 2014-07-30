'use strict';

/**
 * @ngdoc function
 * @name todolistClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todolistClientApp
 */
angular.module('todolistClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
