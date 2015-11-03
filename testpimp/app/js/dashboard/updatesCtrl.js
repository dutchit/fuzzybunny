
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
	
	
	

	
});

