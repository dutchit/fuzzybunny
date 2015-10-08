angular.module('testpimp').factory('requestService',['$http', function($http, RESTfulAPI){

	var service = {};
	
	var restServer = 'http://localhost:8000/';
	
//	var somedata = {'username': 'rhonrado', 'password': 'aaaaaa', 'displayName': 'Ryan Honrado'};
//	var mytestdata = {"username":"unique", "password": "password", "displayName":"You Nique"};

service.register = function(postPayload) {
	var response = $http({
		url : restServer + 'api/userprofiles/',
		method : 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		data: postPayload,
	}).success(function(data, status, headers, config) {
		return data;
	}).error(function(data, status, headers, config) {
		return data;
	});
	return response;
};

service.login = function(credential) {
	var response = $http({
		url : restServer + 'api/userprofiles/',
		method : 'GET',
		headers: {
			'Content-type': 'application/json'
		},
		params: credential,
	}).success(function(data, status, headers, config) {
		return data;
	}).error(function(data, status, headers, config) {
		return data;
	});
	return response;
};

service.getMyProviderProfiles = function(userId) {
	var response = $http({
		url : restServer + 'api/providerprofiles/' + userId,
		method : 'GET',
		headers: {
			'Content-type': 'application/json'
		},
	}).success(function(data, status, headers, config) {
		return data;
	}).error(function(data, status, headers, config) {
		return data;
	});
	return response;
};

	//TODO

	service.requestForJobs = function() {
		service.register = function(postPayload) {
			console.log("postPayload: " + JSON.stringify(postPayload));
			var response = $http({
				url : restServer + 'api/userprofiles/',
				method : 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				data: postPayload,
			}).success(function(data, status, headers, config) {
				return data;
			}).error(function(data, status, headers, config) {
				console.log("reg api post failed.")
				return data;
			});
			return response;
		};

		service.login = function (credential) {
			return 'sure';
		}
		return service;
	}

	service.getJobList = function(id) {
		// Future Param: category

		var job = getConstants.provideJobs;

		var myTableDiv = document.getElementById("table")
		var table = document.createElement('TABLE')
		var tableBody = document.createElement('TBODY')

		table.border = '1'
		table.appendChild(tableBody);

		var heading = new Array(); // columns
        heading[0] = "Requests"

        var stock = new Array() // rows
        // stock[0] = new Array("Cars", "88.625", "85.50", "85.81", "987")
        // stock[1] = new Array("Veggies", "88.625", "85.50", "85.81", "988")
        // stock[2] = new Array("Colors", "88.625", "85.50", "85.81", "989")
        stock[0] = job.provider
        stock[1] = job.title
        stock[2] = job.description
        stock[3] = job.location
        stock[4] = job.price

        //TABLE COLUMNS
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (i = 0; i < heading.length; i++) {
          	var th = document.createElement('TH')
            th.width = '75';
            th.appendChild(document.createTextNode(heading[i]));
            tr.appendChild(th);

        }

        //TABLE ROWS
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (i = 0; i < stock.length; i++) {
          	for (j = 0; j < stock[i].length; j++) {
           		var td = document.createElement('TD')
           		td.appendChild(document.createTextNode(stock[i][j]));
           		td.appendChild(td)
           	}
        }

        myTableDiv.appendChild(table)}
	}
	]
);