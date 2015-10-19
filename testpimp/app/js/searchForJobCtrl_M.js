angular.module('testpimp').controller('searchForJobCtrl_M', function ($rootScope, $scope,getConstants,shareDataService,requestService_M, $modal, $confirm, $filter) {



requestService_M.getCategories().then(
            function(success) {
                
                $scope.jobCategories = success.data; 
                console.log("Cats:" + success.data);


            }, 
             function(error){   
                $scope.jobCategories = error.data;
            }
    );

$scope.changeNuggetJobs = function() {        
        requestService_M.getAllJobs().then(
            function(success) {
                $scope.jobs = []
                for(var obj in success.data){
                   if (success.data[obj]["category"] == $scope.jobCats) {
                    $scope.jobs.push(success.data[obj])
                   } 
                 }
//                 if ($scope.jobCats ==  success.data["category"]) {
//                     $scope.jobs = success.data;
//                 }
                
// //              console.log("jobs: " + success.data);
            },
             function(error){

            }
    );

    } 
});