angular.module('controller').controller('brandPickerCtrl',['$scope','$state','$rootScope','$timeout','mBrand','mPhoneOrder',function(s,state,$rootScope,$timeout,mBrand,mPhoneOrder){
    s.mBrand=mBrand;
    s.o=mPhoneOrder.o;
    s.clickHandle=function(b){        
        mPhoneOrder.o['brand']=b;
    }
}]);