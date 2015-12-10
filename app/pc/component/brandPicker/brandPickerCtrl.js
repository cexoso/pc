angular.module('controller').controller('brandPickerCtrl',['$scope','mBrand','mOrder',function(s,mBrand,mOrder){
    s.brands=mBrand; 
       
    s.mOrder=mOrder;
}]);