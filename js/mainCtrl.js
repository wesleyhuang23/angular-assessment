angular.module('assessment').controller('mainCtrl', function($scope, mainService){

  $scope.getProducts = function(){
    mainService.getProducts().then(function(response){
      console.log(response);
      $scope.products = response;
    });
  };


  $scope.getProducts();

});
