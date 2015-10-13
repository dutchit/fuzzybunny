angular.module('testpimp').controller('searchForJobCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService) {
    
    
   
    $scope.mySearchForJobCats = getConstants.getSearchForJobCats(); 
    
    

    $scope.changeNuggetJobs = function() {        
        console.log("NuggetJobs: " + $scope.searchCategory);
    }


    
});