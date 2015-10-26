angular.module('testpimp').controller('getApplicantsCtrl', function ($rootScope, $scope,shareDataService, requestService, requestService_Joe) {

	// requestService_Joe.getApplicants($scope.jobID).then(
	// 		function(success) {
	// 			$scope.applicants = success.data;
	// 			console.log(success.data);
	// 			// for (var i in success.data){
	// 			// 	$scope.applicants.push(requestService_Joe.getApplicationHelper(success.data[i][applicantID], success.data[i][providerID]));
	// 			// }
	// 			// $scope.applicants = success.data;
	// 		}, 
	// 		function(error){
	// 			console.log(error);
	// 		}
	// 	);

	$scope.goToProfile = function(applicant){
		// go to app.userID
	}

	//$scope.getApplicantProfiles = function(){
		requestService_Joe.getApplicants($scope.jobID).then(
			function(success) {
				$scope.applicants = success.data;
			}, 
			function(error){
				console.log(error);
			}
		);

		$scope.applicantProfiles = [];
		for (var i in $scope.applicants){
			requestService_Joe.getApplicationHelper($scope.applicants[i].applicantID, $scope.applicants[i].providerID).then(
				function(success){
					$scope.applicantProfiles.push(success.data);
				},
				function(error){
					console.log(error);
				});
		}
	//}


	$scope.showDescription = false;

});