angular.module('testpimp').controller('ModalInstanceCtrl', function ($scope, shareDataService, requestService, $modalInstance, provider, $modal) {

	$scope.applicant = provider;
	$scope.myPosting = shareDataService.getJobToEdit();
//	requestService.getProviderProfile
	console.log("modal job: " + JSON.stringify($scope.myPosting));
/*	  $scope.selected = {
	    item: $scope.items[0]
	  };
*/
	  $scope.ok = function () {
	    $modalInstance.close($scope.selected.item);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	  
	  $scope.chooseApplicant = function(applicant) {
		  
			requestService.chooseAnApplicant(applicant.id).then(
					function(success) {
						//alert("success, " + success.data);
						$scope.cancel();
					    $scope.data = {
					    	      boldTextTitle: "Success",
					    	      textAlert : "Provider selected",
					    	     mode : 'success'
					    }  
					    $scope.open('success');
					},
				     function(error){
						$scope.data = {
					    	      boldTextTitle: "Error",
					    	      textAlert : "Provider is not selected",
					    	     mode : 'danger'
					    }  
					    $scope.open('success');
				    }
			);

		}
	  
	  $scope.open = function (mode) {
			$scope.data.mode = mode;
			
			var modalInstance = $modal.open({
			  templateUrl: 'partials/modals/myAlertModal.html',
			  controller: ModalInstanceCtrl,
			  backdrop: true,
			  keyboard: true,
			  backdropClick: true,
			  size: 'lg',
			  resolve: {
			    data: function () {
			      return $scope.data;
			    }
			  }
			});
			
			modalInstance.result.then(function (selectedItem) {
			  $scope.selected = selectedItem;
			    //alert( $scope.selected);
			}, function () {
			  $log.info('Modal dismissed at: ' + new Date());
			});
	  }
});

var ModalInstanceCtrl = function ($scope, $modalInstance, data) {
	  $scope.data = data;
	  $scope.close = function(/*result*/){
	    $modalInstance.close($scope.data);
	  };
	};
