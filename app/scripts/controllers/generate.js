angular.module('todolistClientApp')
  .controller('GenCtrl', function ($scope, Todolist) {
    $scope.todolist = Todolist;
    if ($scope.todolist.length > 0) {
      var pdf = new jsPDF('p', 'pt', 'letter');

      pdf.setFontSize(40);
      pdf.text(30, 40, 'My TODO list: ');
      pdf.setFontSize(20);
      //pdf.text(30, 30, 'My TODO list: ');

      var y = 80;
      for (var i = 0; i < $scope.todolist.length; i++) {
        var lines = pdf.splitTextToSize($scope.todolist[i], 500);
        for (var j = 0; j < lines.length; j++) {
          var line = '';
          if (j === 0) {
            line += '[ ]      ';
          }
          line += lines[j];
          pdf.text(30, y,  line);
          y += 20;
        }
        y += 20;
      }
      
      var data = pdf.output('dataurlstring', {});
      $('#pdf').html("<iframe src='" + data + "' style='width: 700px; height: 400px;'></iframe>");
    }
  });
