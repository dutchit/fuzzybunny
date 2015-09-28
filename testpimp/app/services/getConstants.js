angular.module('testpimp').factory('getConstants',[function($http){
  
	var constants = {};
	
	var registrationResponse = {"username":"secretagent",
				"displayName":"James Bond",
				"contactEmail":"awesome@blahblah.com"};

	
	var userProfileResponse = {"user":{"name":"bob", 
		"contactEmail":"bob@blahblah.com",
		"userProfile":{"profileTitle":"Builder", 
			"location":"everywhere", 
			"description":"I build anything!"}, 
		"providerProfiles":[{"id":"007", 
			"profileTitle":"Spy",
			"location":"unknown",
			"description":"I'm english"}, {"id":"808",
				"profileTitle":"James Bonds Lesser Known Cousin",
				"location":"known",
				"description":"I'm english as well."}]}};
	
	var updateUserProfileResponse = {"user":{"name":"Bobbob",
		"contactEmail":"bob@blahblah.com",
		"userProfile":{"profileTitle":"Builder",
			"displayName":"Bob",
			"location":"Near you",
			"description": "I build things"},
		"providerProfiles":[{"id":"007", 
			"profileTitle":"Spy",
			"location":"unknown",
			"description":"I'm english"}, {"id":"808",
				"profileTitle":"James Bonds Lesser Known Cousin",
				"location":"known",
				"description":"I'm english as well."}]}};
	
	var loginResponse = {"token":"xxxx",
			"user":{"name":"Bobbob",
				"contactEmail":"bob@blahblah.com",
				"userProfile":{"profileTitle":"Builder",
					"displayName":"Bob",
					"location":"Near you",
					"description": "I build things"},
				"providerProfiles":[{"id":"007", 
					"profileTitle":"Spy",
					"location":"unknown",
					"description":"I'm english"}, {"id":"808",
						"profileTitle":"James Bonds Lesser Known Cousin",
						"location":"known",
						"description":"I'm english as well."}]}};
	
	var addProviderProfileReponse = {"user":{
		"name":"Bob",
		"contactEmail":"bob@blahblah.com",
		"userProfile":{"profileTitle":"Builder",
			"location":"near you",
			"description":"I build stuff"},
		"providerProfiles":[{
		                    "id":"770",
		                    "profileTitle":"Not a Spy",
		                    "location":"nowhere",
		                    "description":"James Bonds rip off"}]	
	}};
	
<<<<<<< HEAD
	var updateProviderProfileResponse = {"user":{"name":"Bobbob",
		"contactEmail":"bob@blahblah.com",
		"userProfile":{"profileTitle":"Builder",
			"displayName":"Bob",
			"location":"Near you",
			"description": "I build things"},
		"providerProfiles":[{"id":"007", 
			"profileTitle":"Spy",
			"location":"unknown",
			"description":"I'm english"}, {
				"id":"808",
				"profileTitle":"James Bonds Lesser Known Cousin",
				"location":"known",
				"description":"I'm english as well."},{
                    "id":"770",
                    "profileTitle":"Not a Spy",
                    "location":"nowhere",
                    "description":"James Bonds rip off"}]}};
=======
	var updateProviderProfileResponse = [{"username":"007", 
											"profileTitle":"Spy",
											"location":"unknown",
											"description":"I'm english"},
											{"username":"808",
											"profileTitle":"James Bonds Lesser Known Cousin",
											"location":"known",
											"description":"I'm english as well."},
											{
												"username":"770",
												"profileTitle":"Not a Spy",
												"location":"nowhere",
												"description":"James Bonds rip off"}];
>>>>>>> feature-elisa
	
	constants.someValue = function(){
		return "some value";
	};

	constants.letterA = function() {
		return "a";
	}
	
	constants.getRegistrationResponse = function () {
		return registrationResponse;
	}
	
	constants.getUserProfileResponse = function () {
		return userProfileResponse;
	}
	
	constants.getUpdateUserProfileResponse = function () {
		return updateUserProfileResponse;
	}
	
	constants.getLoginResponse = function () {
		return loginResponse;
	}
	
	constants.getAddProviderProfileReponse = function () {
		return addProviderProfileReponse;
	}
	
	constants.getUpdateProviderProfileResponse = function () {
		return updateProviderProfileResponse;
	}
	
	return constants;

}]);