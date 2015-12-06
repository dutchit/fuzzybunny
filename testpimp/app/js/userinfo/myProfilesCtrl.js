angular.module('testpimp').controller('myProfilesCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	
	// console.log("user: " + JSON.stringify($scope.mainUserProfileInformation));
	
	requestService.getMyProviderProfiles($scope.user.id).then(
			function(success) {
				$scope.myProviderProfiles = success.data;
			}, 
		     function(error){	
		     console.log(error);	        
		    }
	);

	requestService.getUserInformationForProfile($scope.user.id).then(
			function(success) {
				$scope.mainUserProfileInformation = success.data;
				console.log(success.data);
			}, 
		     function(error){	
		     console.log(error);	        
		    }
	);

	$scope.showEditProviderProfile = false;
	$scope.showEditMainProfile = false;
	
	$scope.deleteProviderProfile = function (providerProfile) {
		if(confirm("Delete: " + providerProfile.profileTitle + "?")){
			requestService.deleteProvider(providerProfile.id, $scope.user.id);
		}
	}
	$scope.editMainProfile = function(){
		if($scope.showEditMainProfile){
			$scope.showEditMainProfile = false;
		}else{
			$scope.showEditMainProfile = true;
		};
	}

	$scope.validMainProfileEdit = function(){
		return true;
	}

	$scope.confirmEditMainProfile = function(mp){
		console.log("Gets 1");
		if($scope.validMainProfileEdit()){
			console.log("Gets 2");
			var postEditMainProfilePayload = {};
			postEditMainProfilePayload ["id"] = $scope.user.id;
			postEditMainProfilePayload ["username"] = $scope.mainProfile.userName;
			postEditMainProfilePayload ["profileTitle"] = $scope.mainProfile.profileTitle;
			postEditMainProfilePayload ["description"] = $scope.mainProfile.description;
			postEditMainProfilePayload ["contactEmail"] = $scope.mainProfile.contactEmail;
			postEditMainProfilePayload ["displayName"] = $scope.mainProfile.displayName;
			postEditMainProfilePayload ["location"] = $scope.mainProfile.location;
			requestService.updateMainProfile(postEditMainProfilePayload, $scope.user.id).then(
				function(success){
					console.log("here: " + success.data.profileTitle);
					mp.profileTitle = success.data.profileTitle;
					mp.description = success.data.description;
					mp.displayName = success.data.displayName;
				},
				function(error){

				});
			$scope.showEditMainProfile = false;
		}
	}
	$scope.cancelEditMainProfile = function(){
		$scope.showEditMainProfile = false;
	}

	$scope.editProviderProfile = function(provider){
		provider.showEditProviderProfile = true;
		provider.showProviderProfileDetails = false;
	}

	$scope.validProviderEdit = function(provider) {
		var validTitle = false;
		var validDescription = false;
		var validLocation = false;

		if(provider.title && provider.title.length > 0){
			validTitle = true;
		} else {
			provider.editProfileTitleError = true;
			provider.editProfileErrorMsg = "Title is required."
		}
		if(provider.location && provider.location.length > 0){
			validLocation = true;
		} else{
			provider.editProfileLocationError = true;
			provider.editProfileLocationErrorMsg = "Location is required."
		}
		if(provider.description && provider.description.length > 0){
			validDescription = true
		} else{
			provider.editProfileDescriptionError = true;
			provider.editProfileDescriptionErrorMsg = "Description is required."
		}
		return editProfileFormValid = validTitle && validLocation && validDescription;
	}

	$scope.confirmEditProfile = function(provider, pID, d, s){
		if($scope.validProviderEdit(provider)){
			var postEditProviderPayload = {};
			postEditProviderPayload ["profileTitle"] = provider.title;
			postEditProviderPayload ["userID"] = $scope.user.id;
			postEditProviderPayload ["description"] = provider.description;
			postEditProviderPayload ["id"] = pID;
			postEditProviderPayload ["location"] = provider.location;
			requestService.updateProviderProfile(postEditProviderPayload, $scope.user.id, pID).then(
				function(success){
					console.log(success.data);
					//$scope.updatedProviderProfile = success.data;
					s.profileTitle = success.data.profileTitle;
					s.location = success.data.location;
					s.description = success.data.description;
					
				}, 
				function(error){

				 });
					d.showEditProviderProfile = false;
					//$scope.showProviderProfileDetails = true;
		}
	}

	$scope.cancelEditProfile = function(provider){
		provider.showEditProviderProfile = false;
		provider.showProviderProfileDetails = true;
	}
});