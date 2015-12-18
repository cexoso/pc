angular.module('controller').controller('reapairNavigatorCtrl',['$scope','$rootScope','$state','$timeout','mRepariNav',function(s,$rootScope,state,$timeout,mRepariNav){
    s.mRepariNav=mRepariNav;
    console.log(mRepariNav)
    s.$on('qqq',function(a,e){
        console.log(a);
        console.log(e)
    });

    $timeout(function(){
        // $rootScope.$broadcast('qqq',{
        //     b:321
        // });
        console.log(123);
    },1000);
}]);