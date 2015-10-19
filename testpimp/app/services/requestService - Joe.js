angular.module('testpimp').factory('requestService',['$http', function($http, RESTfulAPI, searchForJobCtrl){

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
		
	service.getMyProviderProfiles = function(userId) {
		var response = $http({
			url : restServer + 'api/providerprofiles' + userId,
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
			url : restServer + 'api/jobs/' + putPayload.userID + "/" + putPayload.id ,
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

	service.getMyPostings = function(userId) {
		var response = $http({
			url : restServer + 'api/jobs/' + userId ,
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

	service.getApplicants = function(){
		var response = $http({
			// Add '/applicants' if possible to make job easier
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
	
  return service;

}]);