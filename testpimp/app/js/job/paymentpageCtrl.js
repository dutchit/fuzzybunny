angular.module('testpimp').controller('paymentpageCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, myContract, $modalInstance) {
	$scope.myContract = myContract;
	console.log("pay myContract: " + $scope.myContract);
	
	  $scope.ok = function () {
		    $modalInstance.close($scope.selected.item);
		  };

		  $scope.cancel = function () {
		    $modalInstance.dismiss('cancel');
		  };
		  
});

