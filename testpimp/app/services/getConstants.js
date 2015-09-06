angular.module('testpimp').factory('getConstants',[function($http){
  
	var constants = {};
	
	var mockUser = {"name":"bob"}
	
	constants.someValue = function(){
		return "some value";
	};

	constants.letterA = function() {
		return "a";
	}
	
	constants.mockUserInfo = function () {
		return mockUser;
	}
	return constants;

}]);