angular.module('testpimp').factory('requestService',['$http', 'RESTfulAPI', function($http, RESTfulAPI){
  
	var service = {};
  

	service.test = function() {
		var response = $http({
			url : RESTfulAPI.test(),
			method : 'POST',
			data: {"username":"unique", "password": "password", "displayName":"You Nique"},
			dataType: 'json'
				}).success(function(data, status, headers, config) {
					return data;
				}).error(function(data, status, headers, config) {
					return data;
				});
				return response;
			};
  

  return service;

}]);