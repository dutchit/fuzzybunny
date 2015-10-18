<<<<<<< HEAD
angular.module('testpimp').controller('postNewJobCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, $modal, $confirm, $filter) {
	
	console.log("user: " + $scope.user.displayName);
	$scope.timeUnitOptions = ["minutes","hours","days","weeks","years"];
	$scope.paymentOptions = [{"option":"Amount", "value":"set"},{"option":"Range", "value":"range"}];
=======
angular.module('testpimp').controller('postNewJobCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	
	console.log("user: " + $scope.user.displayName);
	$scope.timeUnitOptions = ["minutes","hours","days","weeks","years"];
	$scope.paymentOptions = ["Amount","Range"];
>>>>>>> SamBranch
	$scope.showRange = false;
	$scope.showSet = true;
	$scope.showEditNewJob = true;
	$scope.showPreviewNewJob = false;
	var newJobFormValid = false;
<<<<<<< HEAD
	$scope.date = new Date();

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
=======
//	$scope.newjob.compensation = "$ " + $scope.newjob.setPrice;

>>>>>>> SamBranch

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
		
<<<<<<< HEAD
		if ($scope.newjob.price.option == $scope.paymentOptions[0].option) {
			$scope.showRange = false;
			$scope.showSet = true;
		} else if ($scope.newjob.price.option == $scope.paymentOptions[1].option) {
=======
		if ($scope.newjob.price == $scope.paymentOptions[0]) {
			$scope.showRange = false;
			$scope.showSet = true;
		} else if ($scope.newjob.price == $scope.paymentOptions[1]) {
>>>>>>> SamBranch
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
<<<<<<< HEAD
		$scope.validateNewJobForm();
		if (newJobFormValid) {
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
=======
		$scope.showEditNewJob = false;
		$scope.showPreviewNewJob = true;
		if ($scope.newjob.price == $scope.paymentOptions[0]) {
			$scope.newjob.compensation = "$" + $scope.newjob.setPrice;
		} else if ($scope.newjob.price == $scope.paymentOptions[1]) {
			$scope.newjob.compensation = "From $" + $scope.newjob.lowerbound + " to $" + $scope.newjob.upperbound;
		}
		console.log("showPreviewNewJob: " + $scope.showPreviewNewJob);
		console.log("showEditNewJob: " + $scope.showEditNewJob);
>>>>>>> SamBranch
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
<<<<<<< HEAD
		var validCat = false;
=======
>>>>>>> SamBranch
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
<<<<<<< HEAD
		if ($scope.newjob.price.option == $scope.paymentOptions[0].option) {
=======
		if ($scope.newjob.price == $scope.paymentOptions[0]) {
>>>>>>> SamBranch
			if ($scope.newjob.setPrice >= 0 && $scope.newjob.setPrice != null) {
				validPrice = true;
			} else {
				$scope.newJobPriceError = true;
				$scope.newJobPriceErrorMsg = "Price needs to be a possitive number.";
			} 
<<<<<<< HEAD
		} else if ($scope.newjob.price.option == $scope.paymentOptions[1].option) {
=======
		} else if ($scope.newjob.price == $scope.paymentOptions[1]) {
>>>>>>> SamBranch
			if ($scope.newjob.lowerbound && $scope.newjob.upperbound && $scope.newjob.lowerbound > 0 && $scope.newjob.lowerbound <= $scope.newjob.upperbound) {
				validPrice = true;
			} else {
				$scope.newJobPriceError = true;
				$scope.newJobPriceErrorMsg = "Price range is incorrect.";
			} 
		}
<<<<<<< HEAD
		if ($scope.date) {
			validDate = true;
			var datePickerString = $scope.date;
			var date = new Date(datePickerString);
			$scope.newjob.formattedDate = $filter('date')(date, 'yyyy-MM-dd');
=======
		if ($scope.newjob.date) {
			validDate = true;
>>>>>>> SamBranch
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
<<<<<<< HEAD
		if ($scope.newjob.oldCat && $scope.newjob.oldCat != "Other") {
			validCat = true;
			$scope.newjob.category = $scope.newjob.oldCat;
		} else if ($scope.newjob.oldCat == "Other" && $scope.newjob.newCat.length && $scope.newjob.newCat.length > 0){
			validCat = true;
			$scope.newjob.category = $scope.newjob.newCat;
		} else {
			$scope.newJobCategoryError = true;
			$scope.newJobCategoryErrorMsg = "Category is required."
		}
		newJobFormValid = validTitle && validLocation && validDescription && validPrice && validDate && validDuration && validCat;
=======
		newJobFormValid = validTitle && validLocation && validDescription && validPrice && validDate && validDuration;
>>>>>>> SamBranch
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
<<<<<<< HEAD
		if ($scope.newjob.price.option == $scope.paymentOptions[0].option) {
			$scope.newjob.setPrice = 0;
		} 
		if ($scope.newjob.price.option == $scope.paymentOptions[1].option) {
=======
		if ($scope.newjob.price == $scope.paymentOptions[0]) {
			$scope.newjob.setPrice = 0;
		} 
		if ($scope.newjob.price == $scope.paymentOptions[1]) {
>>>>>>> SamBranch
			$scope.newjob.lowerbound = 0;
			$scope.newjob.upperbound = 0;
		}
	}
	$scope.postNewJob = function() {
<<<<<<< HEAD
=======
		console.log()
>>>>>>> SamBranch
		$scope.validateNewJobForm();
		console.log("postNewJob form validation: " + newJobFormValid);
		if(newJobFormValid) {
			var postNewJobPayload = {};
<<<<<<< HEAD
			postNewJobPayload ["userID"] = $scope.user.id;
			postNewJobPayload ["title"] = $scope.newjob.title;
			postNewJobPayload ["description"] = $scope.newjob.description;
			if ($scope.newjob.newCat != "Other") {
				postNewJobPayload ["categories"] = $scope.newjob.category;
			} else {
				postNewJobPayload ["categories"] = $scope.newjob.newCat;
			} 
			postNewJobPayload ["category"] = $scope.newjob.category;
			postNewJobPayload ["date"] = $scope.newjob.formattedDate;
			postNewJobPayload ["duration"] = $scope.newjob.duration;
			postNewJobPayload ["timeUnit"] = $scope.newjob.timeUnit;
			postNewJobPayload ["location"] = $scope.newjob.location;
=======
			postNewJobPayload ["title"] = $scope.newjob.title;
			postNewJobPayload ["description"] = $scope.newjob.description;
			postNewJobPayload ["date"] = $scope.newjob.date;
			postNewJobPayload ["duration"] = $scope.newjob.duration;
			postNewJobPayload ["timeUnit"] = $scope.newjob.timeUnit;
			postNewJobPayload ["username"] = $scope.user.username;
>>>>>>> SamBranch
			if ($scope.newjob.price == $scope.paymentOptions[0]) {
				postNewJobPayload ["lowerBound"] = $scope.newjob.setPrice;
				postNewJobPayload ["upperBound"] = $scope.newjob.setPrice;
			} else if ($scope.newjob.price == $scope.paymentOptions[1]) {
				postNewJobPayload ["lowerBound"] = $scope.newjob.lowerbound;
				postNewJobPayload ["upperBound"] = $scope.newjob.upperbound;
			}
<<<<<<< HEAD
			postNewJobPayload ["price"] = $scope.newjob.price.value;
			requestService.postNewJob(postNewJobPayload).then(
					function(success) {
						$scope.newjob = success.data;
						alert("Job posted");
				        $scope.dashboard();							
=======
			postNewJobPayload ["price"] = $scope.newjob.price;
			
			service.postNewJob(postNewJobPayload).then(
					function(success) {
						$scope.myProviderProfiles = success.data;
>>>>>>> SamBranch
					}, 
				     function(error){		        
				    }
			);
		}
	}
	
});

