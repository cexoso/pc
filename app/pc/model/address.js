angular.module('services').service("mAddress",['$http','$q','$timeout','config',function($http,$q,$timeout,config){    
    var defer=$q.defer();
    var obj=Object.create({
        getCity:getCity,
        getArea:getArea,
        getProvince:getProvince,
        province:Object.create($q.defer()),
        city:Object.create($q.defer()),
        area:Object.create($q.defer())
    });
    function get(parentCode){
        var _self=this;
        var d=$q.defer();
        var url=config.mock?'config/mock/address.json':'api/config/getAddress';
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
                params:{
                    parentCode:parentCode
                },
                cache:true
            }).success(function(data){                    
                d.resolve(data.data);
            }).error(function(data){
                d.reject(data);
            });    
        }
        return d.promise;
    }
    function getProvince(){
        var _self=this.province;
        var a=get("root");
        return a.then(function(d){
            _self.data=d;
            _self.resolve(d);
            return d;
        });
    }
    function getCity(code){
        var _self=this.city;
        var a=get(code);
        return a.then(function(d){
            _self.data=d;
            _self.resolve(d);
            return d;
        });
    }
    function getArea(code){
        var _self=this.area;
        var a=get(code);
        return a.then(function(d){
            _self.data=d;
            _self.resolve(d);
            return d;
        });
    }    
    return obj;
}]);
