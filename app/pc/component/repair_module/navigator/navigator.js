angular.module('controller').controller('reapairNavigatorCtrl',['$scope','$rootScope','$state','$timeout','mRepariNav',function(s,$rootScope,state,$timeout,mRepariNav){
    s.mRepariNav=mRepariNav;
    setActive(mRepariNav[0]);
    s.clickHandle=function(nav){
        setActive(nav);
    }
    function setActive(nav){
        s.active=nav;
        $rootScope.$broadcast('repair_view_change',s.active);
    }
}]);