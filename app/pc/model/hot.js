angular.module('services').service("mHots",['$http','$q',function($http,$q){
    var defer=$q.defer();
    var obj=Object.create(angular.extend({
        get:get
    },defer,true));    
    function get(){
        var _self=this;
        var d=$q.defer();
        $http.get('config/hots.json').success(function(data){
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
    get.call(obj).then(function(){        
    });
    return obj;
}]);