angular.module('services').service("mTrouble",['$http','$q','$timeout','config',function($http,$q,$timeout,config){
    function preHandle(data){
        function find(troubleBody,o){
            for(var i in troubleBody){
                var _this=troubleBody[i];
                if(_this.categoryCode==o.parentCode){
                    return _this;
                }
            }            
        }
        
        function filter(o_data){
            var d_data=[];
            for(var o in o_data){
                var _this=o_data[o];
                if(_this.parentCode){  
                    var tmp=find(o_data,_this);
                    if(!tmp){
                        continue;
                    }

                    tmp.child=tmp.child||[];
                    tmp.child.push(_this);              
                }else{
                    d_data.push(_this);
                }
            }
            return d_data;
        }
        
        var obj={
            troubleBody:filter(data.data.troubleBody),
            troubleHead:filter(data.data.troubleHead)
        };
        return obj
    }
    var defer=$q.defer();
    var obj=Object.create(angular.extend({
        get:get
    },defer,true));
    function get(){
        var _self=this;
        var d=$q.defer();
        var url=config.mock?'config/mock/trouble.json':'api/repair/getTroubleTemplate';
        $http.get(url).success(function(data){                    
            var o=preHandle(data);
            console.log(o)
            d.resolve(o);
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