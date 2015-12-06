
angular.module('testpimp').directive('myAlert', function($modal,$log) {
      return {
        restrict: 'E',
        scope: {
          mode: '@',
          boldTextTitle: '@',
          textAlert : '@'
        },
        link: function(scope, elm, attrs) {

       scope.data= {
                mode:scope.mode,
                boldTextTitle:scope.boldTextTitle,
                textAlert:scope.textAlert
              }

       var ModalInstanceCtrl = function ($scope, $modalInstance, data) {

           console.log(data);

           scope.data= {
              mode:scope.mode || 'info',
              boldTextTitle:scope.boldTextTitle || 'title',
              textAlert:scope.textAlert || 'text'
          }
        };

        elm.parent().bind("click", function(e){
           scope.open();
       });

     scope.open = function () {

        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: ModalInstanceCtrl,
          backdrop: true,
          keyboard: true,
          backdropClick: true,
          size: 'lg',
          resolve: {
            data: function () {
              return scope.data;
            }
          }
        });


        modalInstance.result.then(function (selectedItem) {
          scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
    }
  }
  };
})