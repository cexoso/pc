angular.module('services').service("mVersion",['$http','$q','$timeout','config','progressBar',function($http,$q,$timeout,config,progressBar){
    var defer=$q.defer();
    var obj=Object.create(angular.extend({
        reset:reset,
        get:get
    },defer,true));
    function reset(){
        this.data=null;
    }
    function get(o){
        var _self=this;
        var d=$q.defer();
        var url=config.mock?'config/mock/version.json':'api/repair/getRepairModel';
        if(config.mock){
            progressBar.push($http.get(url,{cache:true}).success(function(data){
                d.resolve(data.data);
            }).error(function(data){
                d.reject(data);
            }));
        }else{
            progressBar.push($http.get(url,{params:o,cache:true}).success(function(data){
                d.resolve(data.data);
            }).error(function(data){
                d.reject(data);
            }));
        }
        
        d.promise.then(function(d){               
            _self.data=d;
            obj.resolve(d);
        });
        return d.promise;
    }    
    return obj;
}]);