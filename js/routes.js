angular.module('assessment').directive('directive',function(){
  return {
    restrict: 'E',
    scope: {
    info: '=products'
    },
    link: function(scope, element, attr){

    }
  };
});
