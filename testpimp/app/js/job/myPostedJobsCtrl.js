angular.module('testpimp').controller('myPostedJobsCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, $modal, $confirm, $filter) {
	
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
	
	
});

