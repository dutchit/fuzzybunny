
/**
 * Main AngularJS Web Application
 */

/**
 * ng-include routing
 */
angular.module('testpimp').controller('userDashboardCtrl', function ($scope,getConstants,shareDataService,requestService) {
	$scope.user = getConstants.mockUserInfo();
	
	$scope.sidebarUrl = 'partials/sidebar.html';
	$scope.contentUrl = 'partials/testContent.html';

	$scope.test2 = function () {
	requestService.test2().then(
			function(success) {
				var msg = success.data;
				console.log("success: " + msg);
				$scope.viewUrl = 'partials/userDashboard.html';
			}, 
		      function(error){
		        console.log("fail: " + error.msg);
		    }
	);
}
});

