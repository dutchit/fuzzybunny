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
  return service;

}]);