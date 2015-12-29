angular.module('controller').controller('pCtrl',['$scope','$rootScope','mPhoneOrder','$http','progressBar',function(s,$rootScope,mPhoneOrder,$http,progressBar){
    s.mPhoneOrder=mPhoneOrder;
    s.$watch('mPhoneOrder.o.orderBody',query,true);
    s.$watch('mPhoneOrder.o.version',query,true);
    function query(n){
        if(!n){
            return;
        }else{
            var p={orderInfo:[]};
            var a=mPhoneOrder.o.orderBody;
            var v=mPhoneOrder.o.version; 
            if(!v){
                return;
            }
            if(a&&a.length){
                for(var i=0;i<a.length;i++){
                    var _this=a[i];
                    var o={
                        goodsCode:v.goodsCode,
                        itemCode:_this.categoryCode
                    }
                    p.orderInfo.push(o);
                }
                progressBar.push($http.post('api/repair/calcuTotlePrice',p).success(function(d){
                    if(d.code!=200){
                        alert(d.msg);
                    }else{
                        mPhoneOrder.o.quote=d.data;    
                    }
                }));
            }
        }
    }
    s.query=function(){
        s.tips="";
        var p={orderInfo:[]};
        var a=mPhoneOrder.o.orderBody;
        var v=mPhoneOrder.o.version;
        if(!v){
            s.tips="选择型号";
            return;
        }
        if(a&&a.length){
            for(var i=0;i<a.length;i++){
                var _this=a[i];
                var o={
                    goodsCode:v.goodsCode,
                    itemCode:_this.categoryCode
                }
                p.orderInfo.push(o);
            }
            $http.post('api/repair/calcuTotlePrice',p).success(function(d){
                if(d.code!=200){
                    alert(d.msg);
                }else{
                    mPhoneOrder.o.quote=d.data;    
                }
            });
        }else{
            s.tips="请选择故障类型";
        }
    }
    s.next=function(){
        if(valid()){
            $rootScope.$broadcast('repair_view:next');
        }else{
        }
    }
    function valid(){
        var o=s.o=mPhoneOrder.o;
        s.check=true;
        if(o.color&&o.version&&o.orderBody){
            return true;
        }
        return false;
    }
}]);
angular.module('patica').filter("price",['$filter',function($filter){
    var c=$filter('currency');
    return function(k){
        if(k==0){
            return "检测后报价"    
        }else if(k==-1){
            return "检测后报价"
        }else{
            return c(k,"￥");
        }        
    }
}]);