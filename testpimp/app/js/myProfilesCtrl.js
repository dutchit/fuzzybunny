
angular.module('testpimp').controller('myProfilesCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	
	console.log("user: " + JSON.stringify($scope.user));
	
	requestService.getMyProviderProfiles($scope.user.id).then(
			function(success) {
				$scope.myProviderProfiles = success.data;
			}, 
		     function(error){		        
		    }
	);

<<<<<<< HEAD
	$scope.myProviderProfiles = getConstants.getUpdateProviderProfileResponse();
//	$scope.myProviderProfiles = shareDataService.getProviderProfiles();
=======
	$scope.showEditProviderProfile = false;
	$scope.showEditMainProfile = false;
>>>>>>> SamBranch
	
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

	$scope.confirmEditProfile = function(provider, pID){//needs fixing
		//console.log("Confirm Clicked 1.")
		//console.log(provider);
		if($scope.validProviderEdit(provider)){
			//console.log("Confirm Clicked 2.")
			var postEditProviderPayload = {};
			postEditProviderPayload ["profileTitle"] = provider.title;
			postEditProviderPayload ["userID"] = $scope.user.id;
			postEditProviderPayload ["description"] = provider.description;
			postEditProviderPayload ["id"] = pID;
			postEditProviderPayload ["location"] = provider.location;
			//console.log(postEditProviderPayload);
			requestService.updateProviderProfile(postEditProviderPayload, $scope.user.id, pID).then(
				function(success){
					$scope.updatedProviderProfile = success.data;

				}, 
				function(error){

				 });
			provider.showEditProviderProfile = false;
			provider.showProviderProfileDetails = true;
		}
	}

	$scope.cancelEditProfile = function(provider){
		provider.showEditProviderProfile = false;
		provider.showProviderProfileDetails = true;
	}
});

