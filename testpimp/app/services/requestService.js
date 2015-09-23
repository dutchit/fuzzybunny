angular.module('testpimp').factory('requestService',['$http', 'RESTfulAPI', function($http, RESTfulAPI){
  
	var service = {};
	var somedata = {"username": "testuser2", "password": "aaaaaa", "displayName": "A Test Display", "contactEmail": "test@test.com"};
	var mytestdata = {"username":"unique", "password": "password", "displayName":"You Nique"};

	service.test = function() {
		console.log("service.test()");
		var response = $http({
			url : 'http://127.0.0.1:8000/api/userprofiles/',
			method : 'POST',
			headers: {
		        'Content-type': 'application/json'
		    },
			data: somedata,
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					console.log("error: " + data);
					return data;
				});
				return response;
			};
  

  return service;

}]);