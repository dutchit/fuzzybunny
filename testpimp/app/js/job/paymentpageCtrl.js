angular.module('testpimp').controller('paymentpageCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, myContract, $modalInstance) {
    $scope.myContract = myContract;
    var contract = myContract;
    console.log("pay myContract: " + $scope.myContract);
    
      $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
            
          };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
    
    $scope.cc_payment = function (ccAmount){
        var cc_info = {}
        cc_info["amount"] = ccAmount;
        cc_info["contractID"] = myContract.id;
        cc_info["employerID"] = $scope.myContract.employerID;
        cc_info["employeeID"] = $scope.myContract.employeeID;

        console.log("---------------------------------------------------------------------------")
        console.log("Amount: "+ contract.id);
        console.log("Employer: "+ $scope.myContract.employerID);
        console.log("Employee: "+ $scope.myContract.employeeID);
        requestService.sendPayment(cc_info).then(
            function(success){
                console.log(success.data);
            }
        );
     };

});

