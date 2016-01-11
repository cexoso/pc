angular.module('controller').controller("navPoint",['$scope','$timeout',function(s,$timeout){
   var color=[
    '#993333','#CC9966','#FF0033','#333399','#003399','#993333'
   ];
   s.$watch('current',function(n){
        if(!n){
            return null;
        }else{
            $timeout(function(){
                var ele=document.querySelector('[component="navigator"].container span.current');
                s.backgroundColor=color[Math.floor(Math.random()*color.length)];
                var offsetWidth=ele.offsetWidth;
                var offsetLeft=ele.offsetLeft;
                s.left=offsetLeft+offsetWidth*0.1+"px";
                s.width=offsetWidth*0.75+"px";                
            },0);        
        }
    });
}]);