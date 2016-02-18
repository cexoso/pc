angular.module('controller').controller('colorfulIndexCtrl',['$scope','colorBrands',function(s,colorBrands){
  s.colorBrands=colorBrands;  
}]);
