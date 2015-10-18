
/**
 * Main AngularJS Web Application
 */

/**
 * ng-include routing
 */
angular.module('testpimp').controller('searchForJobCtr', function ($rootScope, $scope,getConstants,shareDataService,requestService) {

	
	requestService.getAllJobs().then(
			function(success) {
				$scope.jobs = success.data;
//				console.log("jobs: " + success.data);
			},
		     function(error){

		    }
	);
	
	
	
});

