angular.module('controller').controller('colorfulProcessCtrl',['$scope','$rootScope','$timeout','mColorfulNav',function(s,$rootScope,$timeout,mColorfulNav){
    console.log(mColorfulNav)
    s.mColorfulNav=mColorfulNav;
}]);
