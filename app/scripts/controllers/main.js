'use strict';

/**
 * @ngdoc function
 * @name todolistClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todolistClientApp
 */
angular.module('todolistClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todolist = [];

    $scope.addTodo = function() {
      $scope.todolist.unshift($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function($index) {
      $scope.todolist.splice($index, 1);
    };
  });
