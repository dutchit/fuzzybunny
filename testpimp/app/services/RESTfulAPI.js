angular.module('testpimp').factory('RESTfulAPI',[function($http){
  
	var api = {};
	var djangoServer = "http://localhost:8000/";
	
	
	api.test = function(){
		return "http://localhost:8000/appAdmin/";
	};
	
	
	return api;

}]);