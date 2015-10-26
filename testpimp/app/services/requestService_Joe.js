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
		var applicants = [];
		var response = $http({ 
		url : restServer +'api/jobs/' + id + '/applicants', 
		method : 'GET', 
		headers: {'Content-type': 'application/json'     
	}, }).success(function(data,status, headers, config) { 
		// for (var i = 0; i < data.length; i++)
		// {
		// 	applicants.push(service.getApplicantsHelper(data[i].applicantID, data[i].providerprofileID));
		// }
		// console.log(applicants);		
		// console.log(applicants[0].$$state);
		// return applicants;
		return data;
	}).error(function(data, status,headers, config) { 
		return data; 
	}); 
	return response; }; 	

	service.getApplicantsHelper = function(applicantID, providerID){
		var response = $http({ 
		url : restServer +'api/providerprofiles/' + applicantID + '/' + providerID, 
		method : 'GET', 
		headers: {'Content-type': 'application/json'     
	}, }).success(function(data,status, headers, config) { 
		return data[0];
	}).error(function(data, status,headers, config) { 
		return data; 
	}); 
	return response; }; 
	
	return service;

}]);