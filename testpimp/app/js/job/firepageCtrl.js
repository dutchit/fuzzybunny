angular.module('testpimp').controller('firepageCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, myContract, $modalInstance) {
    $scope.myContract = myContract;
    console.log("Fire Employee " + $scope.myContract);
    
      $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
          
});

