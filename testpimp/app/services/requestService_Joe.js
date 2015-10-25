angular.module('testpimp').factory('requestService_Joe',['$http', function($http, RESTfulAPI, searchForJobCtrl){

	var service = {};
	
//	var restServer = 'http://localhost:8000/';
	var restServer = 'http://rhonrado.pythonanywhere.com/';
	
	// =======================================================================================================

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

	service.getApplicants = function(id){
		var response = $http({
			// Add '/applicants' if possible to make job easier
			url : restServer + 'api/jobs/' + id + '/applicants',
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