angular.module('testpimp').factory('requestService',['$http', 'RESTfulAPI', function($http, RESTfulAPI){
  
	var service = {};
	var somedata = {'username': 'rhonrado', 'password': 'aaaaaa', 'displayName': 'Ryan Honrado'};
	var mytestdata = {"username":"unique", "password": "password", "displayName":"You Nique"};

	service.test = function() {
		var response = $http({
			url : 'http://localhost:8000/appAdmin/',
			method : 'POST',
			headers: {
		        'Content-type': 'application/json'
		    },
			data: somedata,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
				return response;
			};
  

  return service;

}]);