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
                s.left=ele.offsetLeft+"px";
                s.width=ele.offsetWidth+"px";                
            },0);        
        }
    });
}]);