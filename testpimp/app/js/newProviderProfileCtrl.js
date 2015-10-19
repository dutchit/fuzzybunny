angular.module('testpimp').controller('providerProfileCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	$scope.showEditProviderProfile = true;
	$scope.showPreviewNewProviderProfile = false;

	$scope.previewNewProviderProfile = function() {
		$scope.showEditProviderProfile = false;
		$scope.showPreviewNewProviderProfile = true;
	}

	$scope.resetPreviewNewProviderProfile = function() {
		$scope.newProvider.Title = "";
		$scope.newProvider.Location = "";
		$scope.newProvider.Description = "";
	}

	$scope.editNewProviderProfile = function() {
		$scope.showEditProviderProfile = true;
		$scope.showPreviewNewProviderProfile = false;
	}

	$scope.validateNewProviderProfile = function() {
		var validTitle = false;
		var validDescription = false;
		var validLocation = false;
		if($scope.newProvider.Title && $scope.newProvider.Title.length > 0){
			validTitle = true;
		} else {
			$scope.newProviderTitleError = true;
			$scope.newProviderTitleErrorMsg = "Title is required."
		}
		if($scope.newProvider.Location && $scope.newProvider.Location.length > 0){
			validLocation = true;
		} else{
			$scope.newProviderLocationError = true;
			$scope.newProviderLocationErrorMsg = "Location is required."
		}
		if($scope.newProvider.Description && $scope.newProvider.Description.length > 0){
			validDescription = true
		} else{
			$scope.newProviderDescriptionError = true;
			$scope.newProviderDescriptionErrorMsg = "Description is required."
		}
		return newProviderFormValid = validTitle && validLocation && validDescription;
	}

	$scope.postNewProviderProfile = function() {
		if($scope.validateNewProviderProfile()){
			var postNewProviderPayload = {};
			postNewProviderPayload ["userID"] = $scope.user.id;
			postNewProviderPayload ["profileTitle"] = $scope.newProvider.Title;
			postNewProviderPayload ["description"] = $scope.newProvider.Description;
			postNewProviderPayload ["location"] = $scope.newProvider.Location;

			requestService.postNewProvider(postNewProviderPayload).then(
				function(success){
					$scope.myProviderProfiles = success.data;
					console.log(success.data);
				}, 
				function(error){
					
				 });
		}
	}


});