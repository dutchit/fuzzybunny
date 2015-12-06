angular.module('testpimp').controller('searchForJobCtr', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	$scope.showSearchView = true;
	$scope.application={};
	
/*	requestService.getAllJobs().then(
			function(success) {
				$scope.jobs = success.data;
			},
		     function(error){
		    }
	);
*/
	
	requestService.getCategories().then(
            function(success) {                
                $scope.jobCategories = success.data; 
                $scope.jobCategories.splice(0, 0, "All jobs");
                $scope.jobCats = $scope.jobCategories[0];
                console.log("Cats:" + success.data);
            }, 
             function(error){   
                $scope.jobCategories = error.data;
            }
    );

	/*$scope.changeNuggetJobs = function() {        
        requestService.getAllJobs().then(
            function(success) {
            	if($scope.jobCats == "All jobs") {
                    $scope.jobs = success.data;
                    console.log("jobs:" + success.data);
                } 
                else {
                     $scope.jobs = [];                
                     for(var obj in success.data){                   
                        if (success.data[obj]["category"] == $scope.jobCats) {                    
                            $scope.jobs.push(success.data[obj])                  
                        }                 
                    }
                }

            },
             function(error){

            }
    );

    }*/


    $scope.changeNuggetJobs = function() {   
       requestService.getJobs().then(
           function(success) {
           	console.log(success.data);
           	if($scope.jobCats == "All jobs") {
                   $scope.jobs = []; 
                   for(var obj in success.data){       
console.log(success.data);                 
                       if (success.data[obj]["status"] == "Active") {                    
                           $scope.jobs.push(success.data[obj])                  
                       }                 
                   }
               } 
               else {
                    $scope.jobs = [];                
                    for(var obj in success.data){       
console.log(success.data);                 
                       if (success.data[obj]["category"] == $scope.jobCats && success.data[obj]["status"] == "Active") {                    
                           $scope.jobs.push(success.data[obj])                  
                       }                 
                   }
               }

           },
            function(error){

           }
   );
   } 
	
	requestService.getMyProviderProfiles($scope.user.id).then(
			function(success) {
				$scope.myProviderProfiles = success.data;
				$scope.application.providerProfile = $scope.myProviderProfiles[0];
			}, 
		     function(error){		        
		    }
	);
	
	
	$scope.chooseJob = function(job) {
//		shareDataService.setJob(job);
//		$scope.gotoApplyJob();
		$scope.showSearchView = false;
		$scope.selectedJob = job;
		$scope.application.bidPrice=$scope.selectedJob.lowerBound;		
	}
	
	$scope.cancelApplying = function() {
		$scope.showSearchView =! $scope.showSearchView;
	}
	
	$scope.submitApplication = function () {

		var validApplication = false;
		var validProfile = false;
		var validBidPrice = false;
		if ($scope.application.providerProfile) {
			validProfile = true;
		} else {
			$scope.chooseProviderProfileError = true;
			$scope.chooseProviderProfileErrorMsg = "A valid provider profile is required."
		}
		if ($scope.application.bidPrice >= 0) {
			console.log("$scope.application.bidPrice >= 0 " + $scope.application.bidPrice >= 0);
			validBidPrice = true;
		} else {
			$scope.applicationPriceError = true;
			$scope.applicationPriceErrorMsg = "A valid price is required."
		}
		validApplication = validProfile && validBidPrice;
		if (validApplication) {
			var newApplicationPayload = {};
			newApplicationPayload ["jobID"] = $scope.selectedJob.id;
			newApplicationPayload ["application_posterID"] = $scope.selectedJob.userID;
			newApplicationPayload ["applicantID"] = $scope.user.id;
			newApplicationPayload ["providerprofileID"] = $scope.application.providerProfile.id;
			newApplicationPayload ["price"] = $scope.application.bidPrice;
			newApplicationPayload ["status"] = "Submitted";
			console.log("application: " + JSON.stringify(newApplicationPayload));
			requestService.applyToAJob(newApplicationPayload).then(
					function(success) {						
						alert("Application successful. \n" + JSON.stringify(success.data));
						$scope.showSearchView =! $scope.showSearchView;
					},
				     function(error){
						alert("Application failed.")
				    }
			);
		}
		
		/*
		 * data = {
					"jobID": Job ID number,
					"application_posterID": Application Poster ID number,
					"applicantID": Applicant ID number,
					"providerprofileID": Provider Profile ID Number,
					"price": A price,
					"status": "A status"
					}
	 */
	}
	

	
	
});

