
/**
 * Main AngularJS Web Application
 */

/**
 * ng-include routing
 */
angular.module('testpimp').controller('updatesCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	$scope.myApplications = [];
		
	requestService.getContracts("applicant", user.id, "current").then(
			function(success) {
				$scope.employeeContracts = success.data;
				console.log("jobs: " + success.data);
			},
		     function(error){
		    }
	);
	
	requestService.getContracts("poster", user.id, "current").then(
			function(success) {
				$scope.employerContracts = success.data;
				console.log("jobs: " + success.data);
			},
		     function(error){
		    }
	);
	
	requestService.getMyPostings($scope.user.id).then(
			function(success) {
				$scope.myPostings = success.data;
				console.log("jobs: " + success.data);
//				shareDataService.setProviderProfiles(myProviderProfiles);
/*                    if ($scope.newjob.price.option == $scope.paymentOptions[0].option) {
		            $scope.newjob.compensation = "$" + $scope.newjob.setPrice;
	            } else if ($scope.newjob.price.option == $scope.paymentOptions[1].option) {
		            $scope.newjob.compensation = "From $" + $scope.newjob.lowerbound + " to $" + $scope.newjob.upperbound;
	            }
				$scope.contentUrl = 'partials/myProfiles.html';
*/				},
		     function(error){

		    }
	);
	
	$scope.getMyPostedJobs = function() {
		requestService.getMyPostings($scope.user.id).then(
				function(success) {
					$scope.myPostings = success.data;
					console.log("jobs: " + success.data);
//					shareDataService.setProviderProfiles(myProviderProfiles);
/*                    if ($scope.newjob.price.option == $scope.paymentOptions[0].option) {
			            $scope.newjob.compensation = "$" + $scope.newjob.setPrice;
		            } else if ($scope.newjob.price.option == $scope.paymentOptions[1].option) {
			            $scope.newjob.compensation = "From $" + $scope.newjob.lowerbound + " to $" + $scope.newjob.upperbound;
		            }
					$scope.contentUrl = 'partials/myProfiles.html';
*/				},
			     function(error){

			    }
		);
	}
	
	requestService.getJobsAppliedTo().then(
			function(success){
				var jobsApplied = success.data;
				//console.log("jobsApplied: " + JSON.stringify(jobsApplied));
				if(jobsApplied.length > 0){
					angular.forEach(jobsApplied, function(jobsAppliedTo){
						if(jobsAppliedTo.applicantID === $scope.user.id){
						requestService.getJobDetailsForApplicant(jobsAppliedTo.applicantID, jobsAppliedTo.jobID).then(
							function(success){
								var job = {};
								job["jobsAppliedInfo"] = success.data[0];
								job["jobsAppliedInfo"]["appInfo"] = jobsAppliedTo;
								//console.log("jobsAppliedInfo: " + JSON.stringify(success.data));
								$scope.appliedTo.push(job);
							},
							function(error){
							})
						}
					});
				}
			},
			function(error){
			}
	);
		
		

//	url(r'^api/jobs/contracts/poster/(?P<pk>[0-9]+)/previous$', job.poster_previous_contracts),
//    url(r'^api/jobs/contracts/applicant/(?P<pk>[0-9]+)/previous$', job.applicant_previous_contracts),
	$scope.acceptJobOffer = function(jobOffer) {
/*		var newContractPayload = {};
		newContractPayload["id"] = jobOffer.jobsAppliedInfo.appInfo.id;
		newContractPayload["jobID"] = jobOffer.jobsAppliedInfo.appInfo.id;
		newContractPayload["application_posterID"] = jobOffer.jobsAppliedInfo.appInfo.id;
		newContractPayload["applicantID"] = jobOffer.jobsAppliedInfo.appInfo.id;
		newContractPayload["providerprofileID"] = jobOffer.jobsAppliedInfo.appInfo.id;
		newContractPayload["price"] = jobOffer.jobsAppliedInfo.appInfo.id;
		newContractPayload["status"] = jobOffer.jobsAppliedInfo.appInfo.id;
*/
		requestService.createContract(jobOffer.jobsAppliedInfo.appInfo).then(
			function(success){
				alert("Contract created \n" + success.data);
				requestService.getJobsAppliedTo().then(
						function(success){
							var jobsApplied = success.data;
							//console.log("jobsApplied: " + JSON.stringify(jobsApplied));
							if(jobsApplied.length > 0){
								angular.forEach(jobsApplied, function(jobsAppliedTo){
									if(jobsAppliedTo.applicantID === $scope.user.id){
									requestService.getJobDetailsForApplicant(jobsAppliedTo.applicantID, jobsAppliedTo.jobID).then(
										function(success){
											var job = {};
											job["jobsAppliedInfo"] = success.data[0];
											job["jobsAppliedInfo"]["appInfo"] = jobsAppliedTo;
											//console.log("jobsAppliedInfo: " + JSON.stringify(success.data));
											$scope.appliedTo.push(job);
										},
										function(error){
										})
									}
								});
							}
						},
						function(error){
						}
				);
			},
			function(error){

			}
		);
	}
//id','jobID', 'application_posterID', 'applicantID', 'providerprofileID', 'price', 'status'
	$scope.declineJobOffer = function(jobOffer) {
		/*		var newContractPayload = {};
				newContractPayload["id"] = jobOffer.jobsAppliedInfo.appInfo.id;
				newContractPayload["jobID"] = jobOffer.jobsAppliedInfo.appInfo.id;
				newContractPayload["application_posterID"] = jobOffer.jobsAppliedInfo.appInfo.id;
				newContractPayload["applicantID"] = jobOffer.jobsAppliedInfo.appInfo.id;
				newContractPayload["providerprofileID"] = jobOffer.jobsAppliedInfo.appInfo.id;
				newContractPayload["price"] = jobOffer.jobsAppliedInfo.appInfo.id;
		*/		
		jobOffer.jobsAppliedInfo.appInfo.status = "Declined";
			requestService.createContract(jobOffer.jobsAppliedInfo.appInfo).then(
				function(success){
					alert("Contract created \n" + success.data);
					requestService.getJobsAppliedTo().then(
							function(success){
								var jobsApplied = success.data;
								//console.log("jobsApplied: " + JSON.stringify(jobsApplied));
								if(jobsApplied.length > 0){
									angular.forEach(jobsApplied, function(jobsAppliedTo){
										if(jobsAppliedTo.applicantID === $scope.user.id){
										requestService.getJobDetailsForApplicant(jobsAppliedTo.applicantID, jobsAppliedTo.jobID).then(
											function(success){
												var job = {};
												job["jobsAppliedInfo"] = success.data[0];
												job["jobsAppliedInfo"]["appInfo"] = jobsAppliedTo;
												//console.log("jobsAppliedInfo: " + JSON.stringify(success.data));
												$scope.appliedTo.push(job);
											},
											function(error){
											})
										}
									});
								}
							},
							function(error){
							}
					);
				},
				function(error){

				}
			);
		}
});

