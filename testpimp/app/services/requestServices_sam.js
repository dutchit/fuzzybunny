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

	service.getJobDetailsForApplicant = function(userID, jobID){
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