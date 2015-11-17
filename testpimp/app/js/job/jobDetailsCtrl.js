angular.module('testpimp').controller('jobDetailsCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, $modal, $confirm, $filter) {
	
	$scope.myPosting = shareDataService.getJobToEdit();
	console.log("job id: " + $scope.myPosting.id);
	$scope.showApplicants = false;
	$scope.applicants=[];
	requestService.getApplicants($scope.myPosting.id).then(
			function(success) {
				var applicantsObjs = success.data;
				if (applicantsObjs.length > 0) {
					$scope.hasApplicants = false;
					
					var values = {name: 'misko', gender: 'male'};
					var log = [];
					angular.forEach(applicantsObjs, function(applicantsObj) {
						requestService.getProviderProfile(applicantsObj.applicantID, applicantsObj.providerprofileID).then(
								function(success) {
									applicantsObj["profileInfo"] = success.data[0];
									requestService.getApplicantInformation(applicantsObj.applicantID).then(
											function(success) {
												applicantsObj["applicantInfo"] = success.data;
												$scope.applicants.push(applicantsObj);
												$scope.showApplicants = $scope.applicants.length > 0;
												console.log("showApplicants: " + $scope.showApplicants);
												console.log("applicant id: " + JSON.stringify(applicantsObj));
											},
										     function(error){
										    }
									);
								},
							     function(error){
							    }
						);
					})
				} else {
					$scope.hasApplicants = true;
				}
				console.log("applicants: " + JSON.stringify($scope.applicants));
			},
		     function(error){
		    }
	)
			
	$scope.deletePosting = function(posting) {
		requestService.deleteJob($scope.user.id, posting.id).then(
				function(success) {
					$scope.myPostedJobs();
				},
			     function(error){

			    }
		);
	}
	
	$scope.editPostingDetails = function () {
		shareDataService.setJobToEdit($scope.myPosting);
		$scope.gotoEditPosting();
	}
	
	
	$scope.getApplicants = function() {
		$scope.showApplicants = ! $scope.showApplicants;
	}
	
	$scope.chooseApplicant = function(applicant) {
		requestService.chooseAnApplicant(applicant.id).then(
				function(success) {
					alert("success, " + success.data);
				},
			     function(error){

			    }
		);
		
		/*"applicationID": "Application ID number",
"jobID": "Job ID number",
"status": "Incomplete or Completed",
"job_posterID": "Job Poster ID number",
"job_poster_rating": "Job Poster Rating",
"job_applicantID": "Job Applicant ID number",
"job_applicant_rating": "Job Applicant Rating",
*/
	}
});

