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
<<<<<<< HEAD
=======
	 };
	 
	 var providerProfiles;
	 
	 var setProviderProfiles = function (data) {
		 providerProfiles = data;
	 };
	 
	 var getProviderProfiles = function () {
	  return providerProfiles;
>>>>>>> feature-elisa
	 };
	 
	 return {
		 setUser: setUser,
		 getUser: getUser,
		 setToken: setToken,
		 getToken: getToken,
<<<<<<< HEAD
=======
		 setProviderProfiles: setProviderProfiles,
		 getProviderProfiles: getProviderProfiles,
>>>>>>> feature-elisa
	 }
	 
});
