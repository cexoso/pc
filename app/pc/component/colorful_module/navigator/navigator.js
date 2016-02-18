angular.module('controller').controller('colorfulNavigatorCtrl',['$scope','$rootScope','$state','$timeout','mColorfulNav',function(s,$rootScope,state,$timeout,mColorfulNav){
  console.log(mColorfulNav)
    s.mColorfulNav=mColorfulNav;
    setActive(mColorfulNav[0]);
    s.clickHandle=function(nav){
        setActive(nav);
    }
    function setActive(nav){
        s.active=nav;
        s.mColorfulNav.active=nav;
    }
    s.$on("colorful_view:next",function(){
        var i=mColorfulNav.indexOf(mColorfulNav.active);
        setActive(mColorfulNav[(i+1)%mColorfulNav.length]);
    })
}]);
