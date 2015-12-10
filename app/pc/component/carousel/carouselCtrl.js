angular.module('controller').controller('carouselCtrl',['$scope','mCarousel','$interval','$timeout',function(s,carousel,$interval,$timeout){
    s.carousel=carousel;
    s.active=0;
    s.last=s.active;
    var t=10000;
    var interval=null;
    //********************************************
    var iv=(function(){
        var arr=[];
        var isRun=false;
        var arg=null;
        return function (func,time){
            function execNext(){
                var o=arr.pop();                
                o.func.apply({},o.arg);
                isRun=true;            
                check();
            }
            function check(){
                $timeout(function(){
                    if(arr.length>0){
                        execNext();
                    }else{
                        isRun=false;
                    }
                },time);
            }
            return function(){                
                if(!isRun){
                    func.apply({},arguments);
                    isRun=true;
                    check();
                }else{
                    if(arr.length<=0){
                        arr.push({
                            func:func,
                            arg:arguments
                        });
                    }
                }
            }
        }
    })();
    
    function _next(){
        s.last=s.active;
        s.active=(s.active+1)%s.carousel.length;
    }    
    function _pre(){
        s.last=s.active;
        s.active=(s.active+s.carousel.length-1)%s.carousel.length;
    }
    function _current(i){        
        s.last=s.active;
        s.active=i;
    }
    var animateTime=1000;
    var next=iv(_next,animateTime);
    var pre=iv(_pre,animateTime);
    var current=iv(_current,animateTime);    
    //********************************************
    function start(){
        stop();
        interval=$interval(function(){
            next();
        },t);
    }
    function stop(){
        if(interval){
            $interval.cancel(interval);
        }
    }
    s.enter=function(){        
        stop();
    }
    s.leave=function(){
        start();
    }
    s.next=function(){
        start();
        next();
    }
    s.pre=function(){
        start();
        pre();   
    }
    s.current=current;
    start();
    /**
     * controller 
     */
    var controll=s.controll={};
    controll.clickImg=function(d){
        console.log(d);        
    }
}]);