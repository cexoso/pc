angular.module('controller').controller('troubleCtrl',['$scope','$rootScope','mPhoneOrder','mTrouble',function(s,$rootScope,mPhoneOrder,mTrouble){
    s.mTrouble=mTrouble;
    console.log(mTrouble)
    var arr=mPhoneOrder.o.orderBody=mPhoneOrder.o.orderBody||[];
    console.log(arr);
    s.arr=arr;
    s.clickHandle=function(b){        
        var i=arr.indexOf(b);
        if(i>-1){
            arr.splice(i,1);
        }else{
            arr.push(b);
        }
    }
    s.check=function(item){
        var child=item.child;
        if(child){
            for(var i=0;i<child.length;i++){
                var _this=child[i];
                if(arr.indexOf(_this)>-1){
                    return true;
                }
            }
        }
        return arr.indexOf(item)>-1
    }
    s.listFclickHandle=function(item){
        s.items=item;
        if(item.child){
        }else{
            var i=arr.indexOf(item);
            if(i>-1){
                arr.splice(i,1);
            }else{
                arr.push(item);
            }
        }
    }
    s.listSclickHandle=function(item){
        var i=arr.indexOf(item);
            if(i>-1){
                arr.splice(i,1);
            }else{
                arr.push(item);
            }
        }
}]);