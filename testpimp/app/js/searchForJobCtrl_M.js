angular.module('testpimp').controller('searchForJobCtrl_M', function ($rootScope, $scope,getConstants,shareDataService,requestService_M, $modal, $confirm, $filter) {



requestService_M.getCategories().then(
            function(success) {
                var cats = [];
                cats.push("All Jobs");
                for(var objs in success.data){
                    console.log(success.data[objs]);

                    cats.push(success.data[objs]);
                }
                $scope.jobCategories = cats; 
                console.log("Cats:" + success.data);


            }, 
             function(error){   
                $scope.jobCategories = error.data;
            }
    );

requestService_M.getAllJobs().then(

    function(success) {
        $scope.jobs = success.data;
    },
    function(error) {

    }

    );

$scope.changeNuggetJobs = function() {        
        requestService_M.getAllJobs().then(
            function(success) {

                if($scope.jobCats == "All Jobs") {
                    $scope.jobs = success.data;
                } 
                else {
                     $scope.jobs = [];                
                     for(var obj in success.data){                   
                        if (success.data[obj]["category"] == $scope.jobCats) {                    
                            $scope.jobs.push(success.data[obj])                   
                        }                 
                    }
                }
               
            },
             function(error){

            }
    );

    } 
});