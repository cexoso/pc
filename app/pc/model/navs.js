angular.module('services').service("mNavs",['$http','$q','$timeout',function($http,$q,$timeout){
    var defer=$q.defer();
    var obj=Object.create(angular.extend({
        get:get
    },defer,true));
    function get(){        
        var _self=this;
        var d=$q.defer();
        $http.get('config/navs.json').success(function(data){
            d.resolve(data);
        }).error(function(data){
            d.reject(data);
        });
        d.promise.then(function(d){               
            _self.data=d;
            obj.resolve(d);
        });
        return d.promise;
    }
    $timeout(function(){
        get.call(obj).then(function(){        
        });
    },2000);
    
    return obj;
}]);