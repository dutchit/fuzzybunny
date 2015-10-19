angular.module('testpimp').controller('getApplicantsCtrl', function ($rootScope, $scope,shareDataService) {

	requestService.getApplicants().then(
			function(success) {
				console.log(success.length);
				$scope.applicants = success.data;
			}, 
			function(error){
				console.log(error);
			}
		);

	$scope.goToProfile = function(applicant){
		// go to app.userID
	}

	$scope.showDescription = false;

});