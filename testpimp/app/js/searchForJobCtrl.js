angular.module('testpimp').controller('searchForJobCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	
	// $scope.categoryOptions = ["Escorts", "Dealings", "blah"];

	requestService.getJobs().then(
			function(success) {
				console.log(success.length);
				$scope.jobFullList = success.data;
			}, 
			function(error){
				console.log(error);
			}
		);


	// $scope.showJobs = function() {

	// 	//TODO add category into param

	// 	requestService.getJobs().then(
	// 		function(success) {
	// 			console.log(success);
	// 			$scope.jobList = success;
	// 		}, 
	// 		function(error){
	// 			console.log(error);
	// 		}
	// 	);
	// } 
});