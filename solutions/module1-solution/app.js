(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController );
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.name="";
  $scope.calculate = function () {
    $scope.message = "";
    var item = $scope.name;
    $scope.nameValue = item.length;
    var res = item.split(",");
    var itemCount= res.length;
  if(  $scope.name == null || $scope.name == ""  ){
    $scope.message = "Please enter data first ";
      $scope.colorValue = "Red";
    }else if (itemCount <=3) {
      $scope.message = "Enjoy!";
      $scope.colorValue ="green";
    }else {
       $scope.message = "Too much!";
       $scope.colorValue ="green";
    };

  };

}

})();
