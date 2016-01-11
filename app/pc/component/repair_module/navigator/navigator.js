angular.module('controller').controller('reapairNavigatorCtrl',['$scope','$rootScope','$state','$timeout','mRepariNav',function(s,$rootScope,state,$timeout,mRepariNav){
    s.mRepariNav=mRepariNav;
    setActive(mRepariNav[3]);
    s.clickHandle=function(nav){
        setActive(nav);
    }
    function setActive(nav){
        s.active=nav;
        s.mRepariNav.active=nav;
    }
    s.$on("repair_view:next",function(){
        var i=mRepariNav.indexOf(mRepariNav.active);
        setActive(mRepariNav[(i+1)%mRepariNav.length]);
    })
}]);