angular.module('services').service("mBrand",['$http','$q','$timeout',function($http,$q,$timeout){
    var defer=$q.defer();
    var obj=Object.create(angular.extend({
        get:get
    },defer,true));    
    function get(){
        var _self=this;
        var d=$q.defer();        
        $http.get('api/repair/getPhoneBrand').success(function(data){                    
            d.resolve(data.data);
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