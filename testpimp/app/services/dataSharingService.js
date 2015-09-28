 angular.module('testpimp').factory('shareDataService', function() {

	 var user;	 
	 var setUser = function (data) {
		 user = data;
	 };
	 
	 var getUser = function () {
	  return user;
	 };

	 var token;	 
	 var setToken = function (data) {
		 token = data;
	 };
	 
	 var getToken = function () {
	  return token;
	 };
	 
	 return {
		 setUser: setUser,
		 getUser: getUser,
		 setToken: setToken,
		 getToken: getToken,
	 }
	 
});
