angular.module('controller').controller('colorCtrl',['$scope','$rootScope','mPhoneOrder','mColor',function(s,$rootScope,mPhoneOrder,mColor){
    s.mColor=mColor;
    s.o=mPhoneOrder.o;
    s.clickHandle=function(b){        
        mPhoneOrder.o['color']=b;
    }
}]);