angular.module('controller').controller('infoCtrl',['$scope','$rootScope','$timeout',function(s,$rootScope,$timeout){
    s.next=function(){
        $rootScope.$broadcast('repair_view:next');
    }
}]);