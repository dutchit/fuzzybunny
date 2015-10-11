angular.module('testpimp').controller('editJobCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, $modal, $confirm, $filter) {
	
	console.log("user: " + $scope.user.displayName);
	$scope.timeUnitOptions = ["minutes","hours","days","weeks","years"];
	$scope.paymentOptions = [{"option":"Amount", "value":"set"},{"option":"Range", "value":"Range"}];
	$scope.showRange = false;
	$scope.showSet = true;
	$scope.showEditNewJob = true;
	$scope.showPreviewNewJob = false;
	var newJobFormValid = false;
	$scope.jobCategories = getConstants.jobCategories();
//	$scope.newjob.compensation = "$ " + $scope.newjob.setPrice;


	$scope.changeNewJobTitle = function() {
		$scope.newJobTitleError = false;
		$scope.newJobTitleErrorMsg = "";
	}
	$scope.changeNewJobDescription = function() {
		$scope.newJobDescriptionError = false;
		$scope.newJobDescriptionErrorMsg = "";
	}
	$scope.changeNewJobLocation = function() {
		$scope.newJobLocationError = false;
		$scope.newJobLocationErrorMsg = "";
	}
	$scope.changePriceMode = function() {
		console.log("set at: " + $scope.newjob.price.option);
		
		if ($scope.newjob.price.option == $scope.paymentOptions[0].option) {
			$scope.showRange = false;
			$scope.showSet = true;
		} else if ($scope.newjob.price.option == $scope.paymentOptions[1].option) {
			$scope.showRange = true;
			$scope.showSet = false;
		}	
		console.log("ng-show range-" + $scope.showRange + " set-" + $scope.showSet);
	}
	$scope.changePriceInput = function() {
		$scope.newJobPriceError = false;
		$scope.newJobPriceErrorMsg = "";
	}
	$scope.postNewJobPreview = function() {
		$scope.showEditNewJob = false;
		$scope.showPreviewNewJob = true;
		if ($scope.newjob.price.option == $scope.paymentOptions[0].option) {
			$scope.newjob.compensation = "$" + $scope.newjob.setPrice;
		} else if ($scope.newjob.price.option == $scope.paymentOptions[1].option) {
			$scope.newjob.compensation = "From $" + $scope.newjob.lowerbound + " to $" + $scope.newjob.upperbound;
		}
		console.log("showPreviewNewJob: " + $scope.showPreviewNewJob);
		console.log("showEditNewJob: " + $scope.showEditNewJob);
	}
	$scope.postNewJobEdit = function() {
		$scope.showEditNewJob = true;
		$scope.showPreviewNewJob = false;
		console.log("showPreviewNewJob: " + $scope.showPreviewNewJob);
		console.log("showEditNewJob: " + $scope.showEditNewJob);
	}
	$scope.validateNewJobForm = function() {
		var validTitle = false;
		var validLocation = false;
		var validDescription = false;
		var validPrice = false;
		var validDate = false;
		var validDuration = false;
		if ($scope.newjob.title && $scope.newjob.title.length >0) {
			validTitle = true;
		} else {
			$scope.newJobTitleError = true;
			$scope.newJobTitleErrorMsg = "Title is required."
		}
		if ($scope.newjob.description && $scope.newjob.description.length >0) {
			validDescription = true;
		} else {
			$scope.newJobDescriptionError = true;
			$scope.newJobDescriptionErrorMsg = "Description is required."
		}
		if ($scope.newjob.location && $scope.newjob.location.length >0) {
			validLocation = true;
		} else {
			$scope.newJobLocationError = true;
			$scope.newJobLocationErrorMsg = "Location is required."
		}
		if ($scope.newjob.price.option == $scope.paymentOptions[0].option) {
			if ($scope.newjob.setPrice >= 0 && $scope.newjob.setPrice != null) {
				validPrice = true;
			} else {
				$scope.newJobPriceError = true;
				$scope.newJobPriceErrorMsg = "Price needs to be a possitive number.";
			} 
		} else if ($scope.newjob.price.option == $scope.paymentOptions[1].option) {
			if ($scope.newjob.lowerbound && $scope.newjob.upperbound && $scope.newjob.lowerbound > 0 && $scope.newjob.lowerbound <= $scope.newjob.upperbound) {
				validPrice = true;
			} else {
				$scope.newJobPriceError = true;
				$scope.newJobPriceErrorMsg = "Price range is incorrect.";
			} 
		}
		if ($scope.newjob.date) {
			validDate = true;
		} else {
			$scope.newJobDateTimeError = true;
			$scope.newJobDateTimeErrorMsg = "Date is required."
		}
		if ($scope.newjob.duration >= 0 && $scope.newjob.duration != null) {
			validDuration = true;
		} else {
			$scope.newJobDateTimeError = true;
			$scope.newJobDateTimeErrorMsg = "Estimated duration of the job is required."
		}
		newJobFormValid = validTitle && validLocation && validDescription && validPrice && validDate && validDuration;
		console.log("$scope.validateNewJobForm(): " + validTitle+validLocation+validDescription+newJobFormValid);
	}
	$scope.resetNewJobForm = function() {
		if ($scope.newjob.title && $scope.newjob.title.length >0) {
			$scope.newjob.title = "";
		} 
		if ($scope.newjob.description && $scope.newjob.description.length >0) {
			$scope.newjob.description = "";
		} 
		if ($scope.newjob.location && $scope.newjob.location.length >0) {
			$scope.newjob.location = "";
		} 
		if ($scope.newjob.price.option == $scope.paymentOptions[0].option) {
			$scope.newjob.setPrice = 0;
		} 
		if ($scope.newjob.price.option == $scope.paymentOptions[1].option) {
			$scope.newjob.lowerbound = 0;
			$scope.newjob.upperbound = 0;
		}
	}
	$scope.postNewJob = function() {
		console.log()
		$scope.validateNewJobForm();
		console.log("postNewJob form validation: " + newJobFormValid);
		if(newJobFormValid) {
			var postNewJobPayload = {};
			postNewJobPayload ["userID"] = $scope.user.id;
			postNewJobPayload ["title"] = $scope.newjob.title;
			postNewJobPayload ["description"] = $scope.newjob.description;
			postNewJobPayload ["categories"] = $scope.newjob.category;
			var date = $scope.newjob.date;
			$scope.newjob.date = new Date($scope.newjob.date);
			var dateString = $filter('date')($scope.newjob.date, 'yyyy-MM-dd');
			console.log("dateString: " + dateString);
			postNewJobPayload ["date"] = dateString;
			postNewJobPayload ["duration"] = $scope.newjob.duration;
			postNewJobPayload ["timeUnit"] = $scope.newjob.timeUnit;
			postNewJobPayload ["location"] = $scope.user.location;
			if ($scope.newjob.price == $scope.paymentOptions[0]) {
				postNewJobPayload ["lowerBound"] = $scope.newjob.setPrice;
				postNewJobPayload ["upperBound"] = $scope.newjob.setPrice;
			} else if ($scope.newjob.price == $scope.paymentOptions[1]) {
				postNewJobPayload ["lowerBound"] = $scope.newjob.lowerbound;
				postNewJobPayload ["upperBound"] = $scope.newjob.upperbound;
			}
			postNewJobPayload ["price"] = $scope.newjob.price.value;
			requestService.postNewJob(postNewJobPayload).then(
					function(success) {
						$scope.newjob = success.data;
						alert("Job posted");
				        $scope.dashboard();							
					}, 
				     function(error){		        
				    }
			);
		}
	}
	
});

