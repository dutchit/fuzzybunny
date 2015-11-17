
angular.module('testpimp').controller('myContractsCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	$scope.pastEmployeeContracts = [];
	
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
											contract["contractInfo"]["applicationInfo"] = success.data[0];
										},
									     function(error){
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
	
});

