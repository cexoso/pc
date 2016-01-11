angular.module('controller').controller('postedCtrl',['$scope','$rootScope','mPhoneOrder',function(s,$rootScope,mPhoneOrder){
    s.mPhoneOrder=mPhoneOrder;
}]);