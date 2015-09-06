 angular.module('testpimp').factory('shareDataService', function() {

	 var user;	 
	 var setUser = function (data) {
		 user = data;
	 };
	 
	 var getUser = function () {
	  return user;
	 };

	 var blah;	 
	 var setBlah = function (data) {
		 blah = data;
	 };
	 
	 var getBlah = function () {
	  return blah;
	 };
	 
	 return {
		 setUser: setUser,
		 getUser: getUser,
		 setBlah: setBlah,
		 getBlah: getBlah,
	 }
	 
});
