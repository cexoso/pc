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
    s.navs.promise.then(function(d){
        function find(){        
            for(var i=0;i<d.length;i++){
                var k=d[i];
                if(k.sref&&k.sref==$state.current.name){
                    return k;
                }
            }
        }
        s.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            s.current=find();
        });
        s.current=find();
    });    
}]);