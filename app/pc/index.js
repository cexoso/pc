'use strict';
angular.module('patica', [  
  'ui.router',  
  'controller',
  'directive',
  'services',
  'templates'
]).config(['$stateProvider',
'$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('index');
    $stateProvider.state('view',{
        url:"view/*url?:params",
        templateUrl:function(p){            
            var url="pages/"+p.url+"/"+p.url+".html";
            return url;
        },
        resolve:{
            ctrl:['$http','$stateParams','$q',function(http,p,q){
                var defer=q.defer();
                var url="pages/"+p.url+"/"+p.url+"Ctrl.js";                
                http.get(url).success(function(d){
                    var arr=d.match(/\.controller[\s\S]*$/igm);
                    var body=(arr!=null?arr[0]:".controller(function()[])");
                    Function("angular.module('patica').register"+body)();                    
                }).finally(function(){
                    defer.resolve('OK');
                });
                return defer.promise;
            }]
        }
    }).state('indexContainer',{
        abstract:true,
        templateUrl:"component/navigator/navigator.html",
        controller:'navigatorCtrl'
    })
    .state('indexContainer.index',{
        url:'/index',
        templateUrl:"router/index/index.html",
        controller:'indexCtrl'
    });
}]).config(["$controllerProvider", "$compileProvider", "$filterProvider", "$provide",function($controllerProvider, $compileProvider, $filterProvider, $provide){
    angular.module('patica').register = {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
    };
}]);
angular.module('patica').config(['$httpProvider',function ($httpProvider) {   
   $httpProvider.interceptors.push('author');
}]);
angular.module('controller', []);
angular.module('directive', []);
angular.module('services', []);
angular.module('templates', []);
