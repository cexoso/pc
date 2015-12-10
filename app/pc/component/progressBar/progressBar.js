angular.module('services').service("progressBar",['$q',function($q){
    var div=angular.element(document.createElement("div"));
    div.addClass("progress-bar");
    var body=angular.element(document.getElementsByTagName("body")[0]);
    body.append(div);
    var arr=[];
    function push(promise){        
        arr.push(promise);
        check();
        promise.finally(function(){
            done(promise);            
        });
    }
    function done(promise){
        var i=arr.indexOf(promise);
        if(i>-1){
            arr.splice(i,1);
            check();
        }
    }
    var check=(function(){
            var start_time=null,end_time=null;
            var t=null;
            var min_time=750;
            return function(){
                if(arr.length>0&&!div.hasClass('active')){
                    start_time=Date.now();
                    div.addClass('active');
                }else if(arr.length==0&&div.hasClass('active')){
                    var delte=Date.now()-start_time;
                    t&&clearTimeout(t);
                    setTimeout(function(){
                        div.removeClass('active');
                    }, min_time-delte);                    
                }
            }    
    })();
    
    var obj={
        push:push
    };

    return obj;
}]);