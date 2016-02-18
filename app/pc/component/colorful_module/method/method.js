angular.module('controller').controller('methodCtrl',['$scope','$rootScope','mPhoneOrder',function(s,$rootScope,mPhoneOrder){
    s.mPhoneOrder=mPhoneOrder;    
}]);
