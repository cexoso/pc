angular.module('controller').controller('brandPickerCtrl',['$scope','$state','$rootScope','$timeout',function(s,state,$rootScope,$timeout){
    s.$on('qqq',function(a){
        console.log(a);
    });
    
}]);