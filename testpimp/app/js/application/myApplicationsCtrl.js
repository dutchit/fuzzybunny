angular.module('testpimp').controller('myApplicationsCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, $modal, $confirm, $filter) {
	
	requestService.getMyPostings($scope.user.id).then(
			function(success) {
				$scope.myPostedJobs = success.data;
				console.log("jobs: " + JSON.stringify(success.data));
			},
		     function(error){

		    }
	);
	
	
});

