angular.module('testpimp').controller('jobDetailsCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, $modal, $confirm, $filter, $log) {
	console.log("load jobDetailsCtrl");
	$scope.jobSelectStatus = "Submitted";
	$scope.test = "test";

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
						if(applicantsObj.status == 'Chosen') {
							$scope.jobSelectStatus = applicantsObj.status;
							$scope.myPosting.jobSelectStatus = applicantsObj.status;
						}
						console.log("$scope.jobSelectStatus: " + $scope.jobSelectStatus);
						console.log("applicantsObj.status: " + applicantsObj.status);
						
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

	}
	

	$scope.open = function (applicant) {
		shareDataService.setJobToEdit($scope.myPosting);
		 var modalInstance = $modal.open({
//		  animation: true,
	      templateUrl: 'viewApplicantProfile.html',
	      controller: 'ModalInstanceCtrl',
	      size: 'lg',
	      resolve: {
	        provider: function () {
	          return applicant;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	      }, function () {
	        $log.info('Modal dismissed at: ' + new Date());
	      });
	};
});

