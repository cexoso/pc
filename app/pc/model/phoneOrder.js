angular.module('services').service("mPhoneOrder",['$http','$q','$timeout','config',function($http,$q,$timeout,config){    
    var obj={};    
    obj.save=function(){

    }
    obj.init=function(){
        this.o={};
        this.data={
            customerAddress:{},
            orderHead:{},
            modelColor:null,
            orderBody:[]
        }  
    }
    obj.init();
    return obj;
}]);