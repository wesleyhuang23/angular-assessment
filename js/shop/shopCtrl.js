angular.module('assessment').controller('shopCtrl', function($scope, mainService){

  $scope.checked = function(show){
    if(show){
      return !show;
    }
    else if(!show){
      return show;
    }
  };

});
