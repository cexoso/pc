angular.module('controller').controller('indexCtrl',['$scope','$q','mOrder','progressBar',function(s,$q,mOrder,progressBar){
    s.mOrder=mOrder;      
    // var defer=$q.defer();
    // var promise=defer.promise;
    // progressBar.push(promise);
    // promise.then(function(d){
    //     console.log(d);
    // },function(d){
    //     console.log(d);
    // });

    // setTimeout(function(){
    //     defer.reject('ok');    
    // }, 2000);
}]);