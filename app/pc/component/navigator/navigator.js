angular.module('controller').controller('navigatorCtrl',['$scope','mNavs','$state',function(s,mNavs,$state){
    s.navs=mNavs;
    s.active=null;
    s.menuClickHandle=function(nav){
        if(angular.equals(s.active,nav)){
            s.active=null;    
        }else{
            s.active=nav;            
        }
    }
    
    s.currentName=$state.current.name;
}]);