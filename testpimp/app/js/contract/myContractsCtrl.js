
angular.module('testpimp').controller('myContractsCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, $modal, $log) {
	console.log("load myContractsCtrl");

	
	$scope.pastEmployeeContracts = [];
	$scope.pastEmployerContracts = [];
	$scope.employeeContracts = [];
	$scope.employerContracts = [];
	
	requestService.getContracts("applicant", $scope.user.id, "previous").then(
			function(success) {
				employeeContractList = success.data;
				console.log("employee jobs: " + JSON.stringify(success.data));
				if(employeeContractList.length > 0){
					$scope.employeeContracts = [];
					angular.forEach(employeeContractList, function(contractInfo){
						requestService.getJobDetailsForApplicant(contractInfo.job_posterID, contractInfo.jobID).then(
							function(success){
								var contract = {};
								contract["contractInfo"] = contractInfo;
								contract["contractInfo"]["postingInfo"] = success.data[0];
								requestService.getApplicationDetail(contractInfo.applicationID).then(
										function(success) {
											console.log("contract[contractInfo][applicationInfo]=" + success.data);
											contract["contractInfo"]["applicationInfo"] = success.data;
											console.log("contract[contractInfo][applicationInfo]=" + success.data);
										},
									     function(error){
											console.log("contract[contractInfo][applicationInfo] error");
									    }
								);
								
								console.log("contractInfo: " + JSON.stringify(contract));
								$scope.employeeContracts.push(contract);
							},
							function(error){
							})
					});
				}
			},
		     function(error){
		    }
	);

	requestService.getContracts("applicant", $scope.user.id, "current").then(
			function(success) {
				pastEmployeeContractList = success.data;
				console.log("past employee jobs: " + JSON.stringify(success.data));
				if(pastEmployeeContractList.length > 0){
					angular.forEach(pastEmployeeContractList, function(pastContractInfo){
						requestService.getJobDetailsForApplicant(pastContractInfo.job_posterID, pastContractInfo.jobID).then(
							function(success){
								var contract = {};
								contract["contractInfo"] = pastContractInfo;
								contract["contractInfo"]["postingInfo"] = success.data[0];
								var applicationInfo = {};
								requestService.getApplicationDetail(pastContractInfo.applicationID).then(
										function(success) {
											console.log("get application info response: " + JSON.stringify(success.data));
											applicationInfo = success.data;
											console.log("past employee applicationInfo: " + JSON.stringify(applicationInfo));
											contract["contractInfo"]["applicationInfo"] = success.data;
											console.log("past employee applicationInfo pushed: " + JSON.stringify(contract["contractInfo"]["applicationInfo"]));
											console.log("past employee contractInfo: " + JSON.stringify(contract));
											$scope.pastEmployeeContracts.push(contract);
										},
									     function(error){
									    }
								);
								console.log("var applicationInfo: " + JSON.stringify(applicationInfo));
							},
							function(error){
							})
					});
				}
			},
		     function(error){
		    }
	);
	
	requestService.getContracts("poster", $scope.user.id, "previous").then(
			function(success) {
				employerContractList = success.data;
				console.log("employer jobs: " + JSON.stringify(success.data));
				if(employerContractList.length > 0){
					$scope.employerContracts = [];
					angular.forEach(employerContractList, function(contractInfo){
						requestService.getJobDetailsForApplicant(contractInfo.job_posterID, contractInfo.jobID).then(
							function(success){
								var contract = {};
								contract["contractInfo"] = contractInfo;
								contract["contractInfo"]["postingInfo"] = success.data[0];
								requestService.getApplicationDetail(contractInfo.applicationID).then(
										function(success) {
											contract["contractInfo"]["applicationInfo"] = success.data;
										},
									     function(error){
									    }
								);
								console.log("contractInfo: " + JSON.stringify(contract));
								$scope.employerContracts.push(contract);
							},
							function(error){
							})
					});
				}
			},
		     function(error){
		    }
	);
	
	
	$scope.open = function (employerContract) {
//		shareDataService.setJobToEdit(employerContract);
		 var modalInstance = $modal.open({
//		  animation: true,
	      templateUrl: 'paymentpage.html',
	      controller: 'paymentpageCtrl',
	      size: 'lg',
	      resolve: {
	    	  myContract: function () {
	    	  	console.log("Testing 123",employerContract.id);
	          return employerContract;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	      }, function () {
	        $log.info('Modal dismissed at: ' + new Date());
	      });
	};
	
	$scope.fire = function (employerContract) {
		var modalInstance = $modal.open({
			templateUrl: 'firepage.html',
			controller: 'firepageCtrl',
			size: 'lg',
			resolve: {
				myContract: function(){
					return employerContract;
				}
			}
		});
	};
    
    $scope.quit = function (employeeContract) {
        console.log("I QUIT");
        console.log(employeeContract);
        console.log("");
        var postPostingPayload = {};
        postPostingPayload ["id"] = employeeContract.contractInfo.postingInfo["id"];
// console.log(employeeContract["id"]);
postPostingPayload ["userID"] = employeeContract.contractInfo.postingInfo["userID"];
postPostingPayload ["title"] = employeeContract.contractInfo.postingInfo["title"];
postPostingPayload ["description"] = employeeContract.contractInfo.postingInfo["description"];
postPostingPayload ["categories"] = employeeContract.contractInfo["categories"];
postPostingPayload ["date"] = employeeContract.contractInfo.postingInfo["date"];
postPostingPayload ["duration"] = employeeContract.contractInfo.postingInfo["duration"];
postPostingPayload ["timeUnit"] = employeeContract.contractInfo.postingInfo["timeUnit"];
postPostingPayload ["location"] = employeeContract.contractInfo.postingInfo["location"];
postPostingPayload ["lowerBound"] = employeeContract.contractInfo.postingInfo["lowerBound"];
postPostingPayload ["upperBound"] = employeeContract.contractInfo.postingInfo["upperBound"];
postPostingPayload ["price"] = employeeContract.contractInfo.postingInfo["price"];
postPostingPayload ["status"] = 'Active';
console.log(postPostingPayload);
requestService.updateJob(postPostingPayload).then(
function(success) {
$scope.posting = success.data;
alert("Contract Terminated");	
}, 
function(error){	       
alert("Contract Termination failed");
}	
);
// var application = {};
// application["id"] = 
// application["jobID"] = 
// application["application_posterID"] = 
// application["applicantID"] = 
// application["providerprofileID"] = 
// application["price"] = 
// application["status"] = 
// requestService.updateApplication().then(
// function(success) {
// alert("Application updated");
// },
// function(error) {
// alert("Application Update failed");
// }
// );

};

     
});

