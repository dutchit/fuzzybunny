 angular.module('testpimp').factory('modalService', function($scope, shareDataService, $modalInstance, provider, $modal) {

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
	 
	 var job;
	 var setJob = function (data) {
		 job = data;
	 };
	 
	 var getJob = function () {
	  return job;
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
		 setJob: setJob,
		 getJob: getJob,
	 }
	 
});
