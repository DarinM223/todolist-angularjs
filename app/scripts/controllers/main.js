'use strict';

/**
 * @ngdoc function
 * @name todolistClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todolistClientApp
 */
angular.module('todolistClientApp')
  .controller('MainCtrl', function ($scope, Todolist) {
    $scope.todolist = Todolist;
    console.log($scope.todolist);

    $scope.addTodo = function() {
      $scope.todolist.unshift($scope.todo);
      //$scope.todolist.add($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function($index) {
      //$scope.todolist.remove($index);
      $scope.todolist.splice($index, 1);
    };
  });
