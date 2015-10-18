
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
			token : "", 
			user: {}
		});
		shareDataService.setUser($scope.$storage.user);
		shareDataService.setToken(getConstants.letterA());
		
		//examine token, default login if token is empty, index.html if token is not empty
		var token = $scope.$storage.token;
		if (token.length > 0) {
			console.log("function: load app partials");
<<<<<<< HEAD
			$scope.showHeader = true;
			$scope.showFooter = true;
=======
>>>>>>> SamBranch
			$scope.viewUrl = 'partials/dashboard/userDashboard.html';
			$scope.header = 'partials/dashboard/loggedInHeader.html';
			
			Idle.watch();
			console.log("idle watch start");
		} else {
			$scope.viewUrl = 'partials/login.html';
			$scope.header = 'templates/header.html';
			$scope.showHeader = false;
			$scope.showFooter = false;
			console.log('login');
		}


		// logout
		$scope.logout = function() {
			$localStorage.$reset({
				token : "", 
				user: {}
			});
			$scope.viewUrl = 'partials/login.html';
			$scope.header = 'templates/header.html';
			$scope.showHeader = false;
			$scope.showFooter = false;
			console.log('logout user: ' + shareDataService.getUser().name);
		}

		
		// login
		
		$scope.login = function(username, password) {
			$scope.loginFailMsg = "";
			console.log("username: " + username);
			console.log("password: " + password);
			var validLoginName = false;
			if (username && username.length > 0) {
				validLoginName = true;
			}
			console.log("validLoginName: " + validLoginName);
			var validLoginPassword = false;
			if (password && password.length > 0) {
				validLoginPassword = true;
			}
			console.log("validLoginPassword: " + validLoginPassword);
			var validCredential = validLoginName && validLoginPassword;
			console.log("validCredential: " + validCredential);
			if (!validLoginName) {
				$scope.loginFail = true;
				$scope.loginFailMsg = " Username is required. "
			}
			if (!validLoginPassword) {
				$scope.loginFail = true;
				$scope.loginFailMsg = $scope.loginFailMsg + " Password is required. "
			}
			if (validCredential) {
				var credential = {};
				credential ["username"] = username;
				credential ["password"] = password;
				requestService.login(credential).then(
						function(success) {
							$scope.$storage.user = success.data;
							$scope.$storage.token = 'logged in';
							shareDataService.setUser($scope.$storage.user);
							shareDataService.setToken($scope.$storage.token);							
							$scope.viewUrl = 'partials/dashboard/userDashboard.html';
							$scope.header = 'partials/dashboard/loggedInHeader.html';
<<<<<<< HEAD
							$scope.showHeader = true;
							$scope.showFooter = true;
=======
>>>>>>> SamBranch
						}, 
					      function(error){
					        console.log("Django: " + error.data);
					        $scope.loginFail = true;
							$scope.loginFailMsg = " Authentication failed. " + error.data;
					    }
				);				
			}
		}

		$scope.registerNewUser = function (newUsername, newPassword, repeatPassword, displayName, contactEmail) {
			$scope.regitrationFailMsg = "";
			var validRegName = false;
			if (newUsername && newUsername.length > 0) {
				validRegName = true;
			} else {
				$scope.regitrationFailMsg = $scope.regitrationFailMsg + "Username is required. \n";
			}
			var validRegPassword = false;
			if (newPassword && newUsername && newUsername.length > 0 && repeatPassword && newPassword == repeatPassword) {
				validRegPassword = true;
			} else {
				$scope.regitrationFailMsg = $scope.regitrationFailMsg + "Password is required and correctly repeated. \n";
			}
			var validRegEmail = false;
			if (contactEmail && contactEmail.length > 0) {
				validRegEmail = true;
			} else {
				$scope.regitrationFailMsg = $scope.regitrationFailMsg + "Valid contact email is required. \n";
			}
			
			var validRegInfo = validRegName && validRegPassword && validRegEmail;
			console.log (validRegName + validRegPassword + validRegEmail);
			console.log("validation: " + validRegInfo);
			if (!validRegInfo) {
				$scope.registrationFail = true;
			} else {
				var regPostPayload = {};
				regPostPayload ["username"] = newUsername;
				regPostPayload ["password"] = newPassword;
				regPostPayload ["contactEmail"] = contactEmail;
				regPostPayload ["displayName"] = displayName;
				
				requestService.register(regPostPayload).then(
						function(success) {
							console.log("success: " + success.data);
							$scope.$storage.user = success.data;
							$scope.$storage.token = 'logged in';
							shareDataService.setUser($scope.$storage.user);
							shareDataService.setToken($scope.$storage.token);
							
							console.log("success: " + JSON.stringify(shareDataService.getUser()));
							$scope.viewUrl = 'partials/dashboard/userDashboard.html';
							$scope.header = 'partials/dashboard/loggedInHeader.html';
						}, 
					      function(error){
					        console.log("fail: " + error.msg);
					        $scope.registrationFail = true;
					        $scope.regitrationFailMsg = error.msg;
					    }
				);
			}
		}
		
		$scope.changeRegInput = function() {
			$scope.registrationFail = false;
			$scope.regitrationFailMsg = "";
		}
		
		$scope.changeInput = function () {
			$scope.loginFail = false;
			$scope.loginFailMsg = "";
			
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

