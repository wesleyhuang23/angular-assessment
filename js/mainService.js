angular.module('assessment').service('mainService', function($http,  $stateParams){

  this.getProducts = function(){
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products'
    }).then(function(response){
      console.log(response.data);
      return response.data;
    });
  };

  this.getDetail = function($stateParams){
    console.log($stateParams.id);
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products/' + $stateParams.id
    }).then(function(response){
      console.log(response.data);
      return response.data;
    });
  };

});
