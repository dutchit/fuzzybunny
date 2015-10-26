angular.module('testpimp').controller('myPostedJobsCtrl', function ($rootScope, $scope,getConstants,shareDataService,requestService, $modal, $confirm, $filter) {

    requestService.getMyPostings($scope.user.id).then(
            function(success) {
                
                $scope.myPostedJobs = success.data;
                console.log("jobs: " + success.data);

            },
             function(error){

            }
    );


});