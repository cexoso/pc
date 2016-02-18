angular.module('services').service("colorBrands",['$http','$q','$timeout','config',function($http,$q,$timeout,config){
    var defer=$q.defer();
    var obj=Object.create(angular.extend({
        get:get
    },defer,true));
    function get(o){
        var _self=this;
        var d=$q.defer();
        var url=config.mock?'config/mock/colorBrands.json':'api/sale/getGoods?goodsType=1005';
        if(config.mock){
            $http.get(url,{
                cache:true
            }).success(function(data){
                d.resolve(data.data);
            }).error(function(data){
                d.reject(data);
            });
        }else{
            $http.get(url,{
                params:o,
                cache:true
            }).success(function(data){
                d.resolve(data.data);
            }).error(function(data){
                d.reject(data);
            });
        }
        d.promise.then(function(d){
            _self.data=d;
            obj.resolve(d);
        });
        return d.promise;
    }
    get.call(obj).then(function(){});
    return obj;
}]);
