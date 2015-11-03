angular.module('testpimp').controller('editJobCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, $modal, $confirm, $filter) {
	
	console.log("user: " + $scope.user.displayName);
	$scope.timeUnitOptions = ["minutes","hours","days","weeks","years"];
	$scope.paymentOptions = [{"option":"Amount", "value":"set"},{"option":"Range", "value":"range"}];
	$scope.showRange = false;
	$scope.showSet = true;
	$scope.showEditPosting = true;
	$scope.showPreviewPosting = false;
	var postingFormValid = false;
	$scope.posting = shareDataService.getJobToEdit();
	console.log("job from shareDataSerivce: " + JSON.stringify($scope.posting));
	if ($scope.posting.price == $scope.paymentOptions[0].value) {
		$scope.posting.priceMode = $scope.paymentOptions[0];
	} else if ($scope.posting.price == $scope.paymentOptions[1].value) {
		$scope.posting.priceMode = $scope.paymentOptions[1];
	}
	$scope.date = new Date($scope.posting.date);
	console.log("posting date: " + $scope.date);
	requestService.getCategories().then(
			function(success) {
				var cat = success.data;
				cat.push("Other");
				console.log("cat: " + cat);
				$scope.jobCategories = cat;	
			}, 
		     function(error){	
				$scope.jobCategories = ["Other"];
		    }
	);

	$scope.changePostingTitle = function() {
		$scope.postingTitleError = false;
		$scope.postingTitleErrorMsg = "";
	}
	$scope.changePostingDescription = function() {
		$scope.postingDescriptionError = false;
		$scope.postingDescriptionErrorMsg = "";
	}
	$scope.changePostingLocation = function() {
		$scope.postingLocationError = false;
		$scope.postingLocationErrorMsg = "";
	}
	
	$scope.changePriceInput = function() {
		$scope.postingPriceError = false;
		$scope.postingPriceErrorMsg = "";
	}
	$scope.postPostingPreview = function() {
		$scope.validatePostingForm();
		$scope.showEditPosting = false;
		$scope.showPreviewPosting = true;
		console.log("showPreviewPosting: " + $scope.showPreviewPosting);
		console.log("showEditPosting: " + $scope.showEditPosting);
	}
	$scope.updatePostingEdit = function() {
		$scope.showEditPosting = true;
		$scope.showPreviewPosting = false;
		console.log("showPreviewPosting: " + $scope.showPreviewPosting);
		console.log("showEditPosting: " + $scope.showEditPosting);
	}
	$scope.validatePostingForm = function() {
		var validTitle = false;
		var validLocation = false;
		var validDescription = false;
		var validPrice = false;
		var validDate = false;
		var validDuration = false;
		if ($scope.posting.title && $scope.posting.title.length >0) {
			validTitle = true;
		} else {
			$scope.postingTitleError = true;
			$scope.postingTitleErrorMsg = "Title is required."
		}
		if ($scope.posting.description && $scope.posting.description.length >0) {
			validDescription = true;
		} else {
			$scope.postingDescriptionError = true;
			$scope.postingDescriptionErrorMsg = "Description is required."
		}
		if ($scope.posting.location && $scope.posting.location.length >0) {
			validLocation = true;
		} else {
			$scope.postingLocationError = true;
			$scope.postingLocationErrorMsg = "Location is required."
		}
		if ($scope.posting.priceMode.option == $scope.paymentOptions[0].option) {
			if ($scope.posting.setPrice >= 0 && $scope.posting.setPrice != null) {
				validPrice = true;
			} else {
				$scope.postingPriceError = true;
				$scope.postingPriceErrorMsg = "Price needs to be a possitive number.";
			} 
		} else if ($scope.posting.priceMode.option == $scope.paymentOptions[1].option) {
			if ($scope.posting.lowerbound && $scope.posting.upperbound && $scope.posting.lowerbound > 0 && $scope.posting.lowerbound <= $scope.posting.upperbound) {
				validPrice = true;
			} else {
				$scope.postingPriceError = true;
				$scope.postingPriceErrorMsg = "Price range is incorrect.";
			} 
		}
		if ($scope.date) {
			validDate = true;
			var datePickerString = $scope.date;
			console.log("new date: " + $scope.date);
			var date = new Date(datePickerString);
			console.log("date: " + date);
			$scope.posting.date = $filter('date')(date, 'yyyy-MM-dd');
			console.log("new posting date: " + $scope.posting.date);
		} else {
			$scope.postingDateTimeError = true;
			$scope.postingDateTimeErrorMsg = "Date is required."
		}
		if ($scope.posting.duration >= 0 && $scope.posting.duration != null) {
			validDuration = true;
		} else {
			$scope.postingDateTimeError = true;
			$scope.postingDateTimeErrorMsg = "Estimated duration of the job is required."
		}
		postingFormValid = validTitle && validLocation && validDescription && validPrice && validDate && validDuration;
		console.log("$scope.validatePostingForm(): " + validTitle+validLocation+validDescription+postingFormValid);
	}
	$scope.newDate = function () {
		console.log("change date: " + $scope.date);
	}
	$scope.resetPostingForm = function() {
		if ($scope.posting.title && $scope.posting.title.length >0) {
			$scope.posting.title = "";
		} 
		if ($scope.posting.description && $scope.posting.description.length >0) {
			$scope.posting.description = "";
		} 
		if ($scope.posting.location && $scope.posting.location.length >0) {
			$scope.posting.location = "";
		} 
		if ($scope.posting.price.option == $scope.paymentOptions[0].option) {
			$scope.posting.setPrice = 0;
		} 
		if ($scope.posting.price.option == $scope.paymentOptions[1].option) {
			$scope.posting.lowerbound = 0;
			$scope.posting.upperbound = 0;
		}
	}
	$scope.updatePosting = function() {
		$scope.validatePostingForm();
		console.log("postPosting form validation: " + postingFormValid);
		if(postingFormValid) {
			var postPostingPayload = {};
			postPostingPayload ["id"] = $scope.posting.id;
			postPostingPayload ["userID"] = $scope.user.id;
			postPostingPayload ["title"] = $scope.posting.title;
			postPostingPayload ["description"] = $scope.posting.description;
			postPostingPayload ["categories"] = $scope.posting.category;
			postPostingPayload ["date"] = $scope.posting.date;
			postPostingPayload ["duration"] = $scope.posting.duration;
			postPostingPayload ["timeUnit"] = $scope.posting.timeUnit;
			postPostingPayload ["location"] = $scope.user.location;
			if ($scope.posting.price == $scope.paymentOptions[0]) {
				postPostingPayload ["lowerBound"] = $scope.posting.setPrice;
				postPostingPayload ["upperBound"] = $scope.posting.setPrice;
			} else if ($scope.posting.price == $scope.paymentOptions[1]) {
				postPostingPayload ["lowerBound"] = $scope.posting.lowerbound;
				postPostingPayload ["upperBound"] = $scope.posting.upperbound;
			}
			postPostingPayload ["price"] = $scope.posting.priceMode.value;
			requestService.updateJob(postPostingPayload).then(
					function(success) {
						$scope.posting = success.data;
						alert("Job updated");
				        $scope.jobDetails($scope.posting);							
					}, 
				     function(error){		        
				    }
			);
		}
	}
	
});

