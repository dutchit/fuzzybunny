angular.module('testpimp').controller('applyToJobCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, $modal, $confirm, $filter) {
	
	$scope.job = shareDataService.getJob();
	requestService.getMyProviderProfiles($scope.user.id).then(
			function(success) {
				$scope.myProviderProfiles = success.data;
			}, 
		     function(error){		        
		    }
	);
	
	
	/*
		 * data = {
					"jobID": Job ID number,
					"application_posterID": Application Poster ID number,
					"applicantID": Applicant ID number,
					"providerprofileID": Provider Profile ID Number,
					"price": A price,
					"status": "A status"
					}
	 */
	
	
	
});

