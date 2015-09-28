
/**
 * Main AngularJS Web Application
 */

/**
 * ng-include routing
 */
angular.module('testpimp').controller('userDashboardCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	
	console.log("userDashboardCtrl: " + JSON.stringify(shareDataService.getUser()));
	$scope.user = shareDataService.getUser();
	console.log("after assignment " + JSON.stringify($scope.user));
	
	$scope.sidebarUrl = 'partials/sidebar.html';
	$scope.contentUrl = 'partials/updates.html';
	
	

	$scope.test2 = function () {
	getConstants.getRegistrationResponse();
	/*	requestService.test2().then(
				function(success) {
					var msg = success.data;
					console.log("success: " + msg);
					$scope.viewUrl = 'partials/userDashboard.html';
				}, 
			      function(error){
			        console.log("fail: " + error.msg);
			    }
		);
	*/	
	
	}
	$scope.dashboard = function() {
		$scope.contentUrl = 'partials/updates.html';
	}
	
	$scope.postNewJob = function () {
		$scope.contentUrl = 'partials/postNewJob.html';
	}
	
	$scope.searchForJob = function () {
		$scope.contentUrl = 'partials/searchForJob.html';
	}
	
	$scope.myProfiles = function() {
		$scope.contentUrl = 'partials/myProfiles.html';
<<<<<<< HEAD
=======
	/*	requestService.getMyProviderProfiles().then(
				function(success) {
					var myProviderProfiles = success.data;
					shareDataService.setProviderProfiles(myProviderProfiles);
					$scope.contentUrl = 'partials/myProfiles.html';
				}, 
			     function(error){
			        
			    }
		);
*/
>>>>>>> feature-elisa
	}
	
	$scope.accountSettings = function() {
		$scope.contentUrl = 'partials/accountSettings.html';
	}
	
});

