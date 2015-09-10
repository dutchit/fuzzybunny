
/**
 * Main AngularJS Web Application
 */

/**
 * ng-include routing
 */
angular.module('testpimp').controller('mainCtrl', function ($scope,getConstants,shareDataService,requestService, $log, $window, $location, $localStorage, $compile, Idle, Keepalive, $modal/*, $http */) {


	  	$scope.loginFail = false;
	  	//initialize token for local storage
		$scope.$storage = $localStorage.$default({
			someValue : "", 
			user: {}
		});
		
	
		//examine token, default login if token is empty, index.html if token is not empty
		$scope.someValue = $scope.$storage.someValue;
		if ($scope.someValue.length > 0) {
			console.log("function: load app partials");
			$scope.viewUrl = 'partials/userDashboard.html';
			
			Idle.watch();
			console.log("idle watch start");
		} else {
			$scope.viewUrl = 'partials/login.html';
			console.log('login');
		}


		// other REST calls to logout?
		$scope.logout = function() {
			//$scope.$storage.token = "";
			$localStorage.$reset({
				someValue : "", 
				user: {}
			});

			console.log('logout user: ' + shareDataService.getUser().name);
		}

		// temporary login.
		$scope.login = function() {
			$scope.$storage.user = getConstants.mockUserInfo();
			shareDataService.setUser($scope.$storage.user);
			shareDataService.setBlah(getConstants.letterA());
			$scope.user = shareDataService.getUser();
			requestService.test().then(
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

		// idle logout functions
		function closeModals() {
			if ($scope.warning) {
				$scope.warning.close();
				$scope.warning = null;
			}
			if ($scope.timedout) {
				$scope.timedout.close();
				$scope.timedout = null;
			}
		}
		$scope.$on('IdleStart', function() {
			closeModals();
			/*
			 * $scope.warning = $modal.open({ templateUrl :
			 * 'warning-dialog.html', windowClass : 'modal-danger'
			 * });
			 */
		});
		$scope.$on('IdleEnd', function() {
			closeModals();
		});
		$scope.$on('IdleTimeout', function() {
			console.log("idle timeout");
			closeModals();
			$scope.logout();
			$scope.timedout = $modal.open({
				templateUrl : 'timedout-dialog.html',
				windowClass : 'modal-danger'
			});
		});
		//end idle logout functions

   
});

