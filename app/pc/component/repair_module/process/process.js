angular.module('controller').controller('reapairProcessCtrl',['$scope','$rootScope','$timeout',function(s,$rootScope,state,$timeout){
    console.log(123);
    s.$on('repair_view_change',function(a,e){
        console.log(a);
        console.log(e)
    });
}]);