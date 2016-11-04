angular.module('assessment').controller('product-detailsCtrl', function($scope, mainService, $stateParams){

  console.log($stateParams);

  $scope.getDetail = function($stateParams){
    console.log($stateParams);
    mainService.getDetail($stateParams).then(function(response){
      $scope.detail = response;
      console.log($scope.detail);
    });
  };

$scope.getDetail($stateParams);

});
