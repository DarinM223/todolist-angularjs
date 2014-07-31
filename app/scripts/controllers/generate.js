angular.module('todolistClientApp')
  .controller('GenCtrl', function ($scope, Todolist) {
    $scope.todolist = Todolist;
  });
