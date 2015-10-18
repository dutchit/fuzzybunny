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
	 
	 var providerProfiles;
	 
	 var setProviderProfiles = function (data) {
		 providerProfiles = data;
	 };
	 
	 var getProviderProfiles = function () {
	  return providerProfiles;
	 };
	 
	 var posting;
	 var setJobToEdit = function (data) {
		 posting = data;
	 };
	 
	 var getJobToEdit = function () {
	  return posting;
	 };
	 
	 return {
		 setUser: setUser,
		 getUser: getUser,
		 setToken: setToken,
		 getToken: getToken,
		 setProviderProfiles: setProviderProfiles,
		 getProviderProfiles: getProviderProfiles,
		 setJobToEdit: setJobToEdit,
		 getJobToEdit: getJobToEdit,
	 }
	 
});
