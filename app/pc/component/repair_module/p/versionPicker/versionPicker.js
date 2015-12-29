angular.module('controller').controller('versionPickerCtrl',['$scope','$state','$rootScope','$timeout','mVersion','mPhoneOrder',function(s,state,$rootScope,$timeout,mVersion,mPhoneOrder){
    mVersion.reset();
    s.mVersion=mVersion;
    s.mPhoneOrder=mPhoneOrder;
    s.$watch("mPhoneOrder.o.brand",function(n){
        if(!n){
            return;
        }
        mVersion.get({
            goodsBrand:n.categoryCode,
            goodsType:n.goodsType
        });
    });
    s.clickHandle=function(b){        
        s.active=b;
        mPhoneOrder.o['version']=b;
    }
}]);