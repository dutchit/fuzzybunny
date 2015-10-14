angular.module('testpimp').controller('searchForJobCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
	
	// $scope.categoryOptions = ["Escorts", "Dealings", "blah"];

	$scope.showCategories = function(category) {

				// 	requestService.login(credential).then(
				// 		function(success) {
				// 			$scope.$storage.user = success.data;
				// 			$scope.$storage.token = 'logged in';
				// 			shareDataService.setUser($scope.$storage.user);
				// 			shareDataService.setToken($scope.$storage.token);							
				// 			$scope.viewUrl = 'partials/dashboard/userDashboard.html';
				// 			$scope.header = 'partials/dashboard/loggedInHeader.html';
				// 		}, 
				// 	      function(error){
				// 	        console.log("Django: " + error.data);
				// 	        $scope.loginFail = true;
				// 			$scope.loginFailMsg = " Authentication failed. " + error.data;
				// 	    }
				// );

		//TODO add category into param

		requestService.requestForJobs().then(
			function(success) {
				$scope.job.title = success.title;
				$scope.job.description = success.description;
				$scope.job.location = success.location;
				$scope.job.date = success.date;
				$scope.job.duration = success.duration;
				$scope.job.timeunit = success.timeunit;
				$scope.job.lowerBound = success.lowerBound;
				$scope.job.upperBound = success.upperBound;
			}, 
			function(error){
				console.log(error);
			}
		);
		return requestService.requestForJobs;
	} 
});


				// var results = document.getElementById("results")
				// var table = document.createElement('TABLE')
				// var tableBody = document.createElement('TBODY')

				// table.border = '1'
				// table.appendChild(tableBody);

				// // column
				// var heading = new Array();
				// heading[0] = "Title"
				// heading[1] = "Description"
				// heading[2] = "Location"
				// heading[3] = "Date"
				// heading[4] = "Duration"
				// heading[5] = "Price"
				// heading[6] = ""

		  //       // row
		  //       // var stock = new Array()
		  //       // stock[0] = new Array("title", "description", "date", "duration and timeunit", "price or range", "accept?")



		  //       //TABLE COLUMNS
		  //       var tr = document.createElement('TR');
		  //       tableBody.appendChild(tr);
		  //       for (i = 0; i < heading.length; i++) {
		  //       	var th = document.createElement('TH')
		  //       	th.width = '100';
		  //       	th.appendChild(document.createTextNode(heading[i]));
		  //       	tr.appendChild(th);
		  //       }

			 //    //TABLE ROWS
			 //    for (i = 0; i < stock.length; i++) {
			 //    	var tr = document.createElement('TR');
			 //    	for (j = 0; j < stock[i].length; j++) {
			 //    		var td = document.createElement('TD')
			 //    		td.appendChild(document.createTextNode(stock[i][j]));
			 //    		tr.appendChild(td)
			 //    	}
			 //    	tableBody.appendChild(tr);
			 //    }  
			 //    results.appendChild(table)