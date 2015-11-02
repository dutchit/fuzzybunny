
/**
 * Main AngularJS Web Application
 */

/**
 * ng-include routing
 */
angular.module('testpimp').controller('updatesCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
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
	
	$scope.deletePosting = function(posting) {
		requestService.deleteJob($scope.user.id, posting.id).then(
				function(success) {
					$scope.getMyPostedJobs();
				},
			     function(error){

			    }
		);
	}
	
	// put in separate file before push


	$scope.appliedTo=[];
	requestService.getJobsAppliedTo().then(
		function(success){
			var jobsApplied = success.data;
			//console.log("jobsApplied: " + JSON.stringify(jobsApplied));
			if(jobsApplied.length > 0){
				angular.forEach(jobsApplied, function(jobsAppliedTo){
					if(jobsAppliedTo.applicantID === $scope.user.id){
					requestService.getJobDetailsForApplicant(jobsAppliedTo.applicantID, jobsAppliedTo.jobID).then(
						function(success){
							jobsApplied["jobsAppliedInfo"] = success.data[0];
							jobsApplied["jobsAppliedInfo"]["appInfo"] = jobsAppliedTo;
							//console.log("jobsAppliedInfo: " + JSON.stringify(success.data));
							$scope.appliedTo.push(jobsApplied);
						},
						function(error){

						})
					}
				});
			}
		},
		function(error){

		});
	

});

