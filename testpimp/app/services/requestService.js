angular.module('testpimp').factory('requestService',['$http', function($http, RESTfulAPI){
  
	var service = {};
	
//	var restServer = 'http://localhost:8000/';
	var restServer = 'http://rhonrado.pythonanywhere.com/';
	
//	var somedata = {'username': 'rhonrado', 'password': 'aaaaaa', 'displayName': 'Ryan Honrado'};
//	var mytestdata = {"username":"unique", "password": "password", "displayName":"You Nique"};

	service.register = function(postPayload) {
		var response = $http({
			url : restServer + 'api/userprofiles',
			method : 'POST',
			headers: {
		        'Content-type': 'application/json',
		    },
			data: postPayload,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
				return response;
	};
	
	service.login = function(credential) {
		var response = $http({
			url : restServer + 'api/userprofiles',
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
			params: credential,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
				return response;
	};
	
	service.forgotPassword = function(emailEntry){
        var response = $http({
            url:restServer + 'api/email',
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            data: emailEntry,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
				return response;

    };
	
	service.getMyProviderProfiles = function(userId) {
		var response = $http({
			url : restServer + 'api/providerprofiles/' + userId,
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
				return response;
	};

	//updates provider profile
	service.updateProviderProfile = function(updateProviderProfilePayload, userID, ID){
		var response = $http({
			url : restServer + 'api/providerprofiles/' + userID + '/' + ID,
			method : 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			data: updateProviderProfilePayload,
		}).success(function(data, status, headers, config){
			return data;
		}).error(function(data, status, headers, config){
			return data;
		});
		return response;
	};
	//adds newprovider profile
	service.postNewProvider = function(postProviderPayload){
		var response = $http({
			url : restServer + 'api/providerprofiles',
			method : 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			data: postProviderPayload,
		}).success(function(data, status, headers, config){
			return data;
		}).error(function(data, status, headers, config){
			return data;
		});
		return response;
	};
	//deletes provider profile
	service.deleteProvider = function(ID, userID){
		var response = $http({
			url : restServer + 'api/providerprofiles/' + userID + '/' + ID,
			method : 'DELETE',
			headers : {
				'Content-type' : 'application/json'
			},
		}).success(function(data, status, headers, config){
			return data;
		}).error(function(data, status, headers, config){
			console.log(data)
			return data;
		});
		return response;
	}
	
	service.postNewJob = function(postPayload) {
		var response = $http({
			url : restServer + 'api/jobs',
			method : 'POST',
			headers: {
		        'Content-type': 'application/json'
		    },
			data: postPayload,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
				return response;
	};
	
	service.updateJob = function(putPayload) {
		var response = $http({
			url : restServer + 'api/jobs/' + putPayload.userID + "/" + putPayload.id,
			method : 'PUT',
			headers: {
		        'Content-type': 'application/json'
		    },
			data: putPayload,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
				return response;
	};
	
	service.deleteJob = function(userId, id) {
		var response = $http({
			url : restServer + 'api/jobs/' + userId + "/" + id,
			method : 'DELETE',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
				return response;
	};

	service.getMyPostings = function(userId) {
		var response = $http({
			url : restServer + 'api/jobs/' + userId,
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
				return response;
	};
	
	service.getCategories = function() {
		var response = $http({
			url : restServer + 'api/jobs/categories',
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.getAllJobs = function() {
		var response = $http({
			url : restServer + 'api/jobs/current',
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	
	service.applyToAJob = function(applicationPayload) {
		console.log("applicationPayload: " + JSON.stringify(applicationPayload));
		var response = $http({
			url : restServer + 'api/jobs/applications',
			method : 'POST',
			headers: {
		        'Content-type': 'application/json'
		    },
		    data : applicationPayload,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.getApplicants = function(jobId) {
		var response = $http({
			url : restServer + 'api/jobs/' + jobId + '/applicants',
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.updateApplication = function(application) {
		var response = $http({
			url : restServer + 'api/jobs/applications/' + application.id,
			method : 'PUT',
			headers: {
		        'Content-type': 'application/json'
		    },
		    data : application,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.getProviderProfile = function(applicantID, providerprofileID) {
		var response = $http({
			url : restServer + 'api/providerprofiles/' + applicantID + '/'+ providerprofileID,
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.getApplicantInformation = function(applicantId) {
		var response = $http({
			url : restServer + 'api/userprofiles/' + applicantId,
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.getUserInformationForProfile = function(userID){
		var response = $http({
			url : restServer + 'api/userprofiles/' + userID,
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.updateMainProfile = function(payload, userID){
		var response = $http({
			url : restServer + 'api/userprofiles/' + userID,
			method : 'PUT',
			headers: {
		        'Content-type': 'application/json'
		    },
		    data: payload,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}

	service.getJobsAppliedTo = function(){
		console.log("service.getJobsAppliedTo");
		var response = $http({
			url : restServer + 'api/jobs/applications',
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.getApplicationDetail = function(applicationId){
		console.log("service.getApplicationDetail " + applicationId);
		var response = $http({
			url : restServer + 'api/jobs/applications/' + applicationId,
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					console.log("service.getApplicationDetail: " + JSON.stringify(data));
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}

	service.getJobDetailsForApplicant = function(userID, jobID){
		console.log("service.getJobDetailsForApplicant jobId: " + jobID);
		var response = $http({
			url : restServer + 'api/jobs/' + userID + '/' + jobID,
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.createContract = function(createContractPayload) {
		console.log("createContractPayload: " + JSON.stringify(createContractPayload));
		var response = $http({
			url : restServer + '/api/jobs/applications/' + createContractPayload.id + '/accepted',			
			method : 'POST',
			headers: {
		        'Content-type': 'application/json'
		    },
		    data : createContractPayload,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}

	service.sendPayment = function(payload) {
		console.log("sendPaymentPayload: " + JSON.stringify(payload));
		var response = $http({
			url : restServer + 'api/jobs/payments',			
			method : 'POST',
			headers: {
		        'Content-type': 'application/json'
		    },
		    data : payload,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.declineJobOffer = function(applicantInfo) {
		console.log("decline applicantId: " + JSON.stringify(applicantInfo));
		var response = $http({
			url : restServer + '/api/jobs/applications/' + applicantInfo.id + '/declined',			
			method : 'POST',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.getContracts = function(role, id, contractStatus) {
		console.log("requestService.getContracts " + role + " " + contractStatus);
//		url(r'^api/jobs/contracts/poster/(?P<pk>[0-9]+)/previous$', job.poster_previous_contracts),
//	    url(r'^api/jobs/contracts/applicant/(?P<pk>[0-9]+)/previous$', job.applicant_previous_contracts),
		// role == poster or applicant
	    var response = $http({
			url : restServer + 'api/jobs/contracts/' + role + '/' + id,
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.chooseAnApplicant = function(applicantId) {
		console.log("createContractPayload: " + applicantId);
		var response = $http({
			url : restServer + '/api/jobs/applications/' + applicantId + '/chosen',			
			method : 'POST',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
	
	service.getContractsById = function(role, id, contractStatus) {
		console.log("requestService.getContracts " + role + " " + contractStatus);
//		url(r'^api/jobs/contracts/poster/(?P<pk>[0-9]+)/previous$', job.poster_previous_contracts),
//	    url(r'^api/jobs/contracts/applicant/(?P<pk>[0-9]+)/previous$', job.applicant_previous_contracts),
		// role == poster or applicant
	    var response = $http({
			url : restServer + 'api/jobs/contracts/' + role + '/' + id,
			method : 'GET',
			headers: {
		        'Content-type': 'application/json'
		    },
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
		return response;
	}
    //jo's added function
    service.getJobs = function() {
var response = $http({
url : restServer + 'api/jobs',
method : 'GET',
headers: {
       'Content-type': 'application/json'
   },
}).success(function(data, status, headers, config) {
return data;
}).error(function(data, status, headers, config) {
return data;
});
return response;
};

service.updateContracts = function(role, id, payload) {
console.log("requestService.getContracts " + role);
//	url(r'^api/jobs/contracts/poster/(?P<pk>[0-9]+)/previous$', job.poster_previous_contracts),
//	   url(r'^api/jobs/contracts/applicant/(?P<pk>[0-9]+)/previous$', job.applicant_previous_contracts),
// role == poster or applicant
   var response = $http({
url : restServer + 'api/jobs/contracts/' + role + '/' + id,
method : 'PUT',
headers: {
       'Content-type': 'application/json'
   },
   data : payload, 
}).success(function(data, status, headers, config) {
return data;
}).error(function(data, status, headers, config) {
return data;
});
return response;
}
    
  return service;
    

}]);