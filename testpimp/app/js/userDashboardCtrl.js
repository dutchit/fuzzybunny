
/**
 * Main AngularJS Web Application
 */

/**
 * ng-include routing
 */
angular.module('testpimp').controller('userDashboardCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	
	$scope.user = shareDataService.getUser();
<<<<<<< HEAD
	$scope.paymentOptions = [{"option":"Amount", "value":"set"},{"option":"Range", "value":"Range"}];
=======
>>>>>>> SamBranch
	
	$scope.sidebarUrl = 'partials/dashboard/sidebar.html';
	$scope.contentUrl = 'partials/dashboard/updates.html';
	

	$scope.dashboard = function() {
		$scope.contentUrl = 'partials/dashboard/updates.html';
	}
	
	$scope.postNewJob = function () {
		$scope.contentUrl = 'partials/job/postNewJob.html';
<<<<<<< HEAD
	}
	$scope.editPostingDetails = function (posting) {
		shareDataService.setJobToEdit(posting);
		$scope.contentUrl = 'partials/job/editJob.html';
=======
>>>>>>> SamBranch
	}
	
	$scope.searchForJob = function () {
		$scope.contentUrl = 'partials/job/searchForJob.html';
	}
	
<<<<<<< HEAD
=======
	$scope.createProviderProfile = function() {
		$scope.contentUrl = 'partials/userinfo/newProviderProfile.html';
	}

>>>>>>> SamBranch
	$scope.myProfiles = function() {
		$scope.contentUrl = 'partials/userinfo/myProfiles.html';
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
	}

	$scope.accountSettings = function() {
		$scope.contentUrl = 'partials/userinfo/accountSettings.html';
	}
	
});

