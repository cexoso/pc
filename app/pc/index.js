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
    $urlRouterProvider.otherwise('/characteristics/colorful/process');
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
    })
    .state('indexContainer.repair',{
        url:'/repair',
        templateUrl:"router/repair/repair.html",
        controller:'repairCtrl'
    }).state('indexContainer.query',{
        url:'/query',
        templateUrl:"router/query/query.html",
        controller:'queryCtrl'
    }).state('indexContainer.colorful',{
        url:'/characteristics/colorful/process',
        templateUrl:"router/colorful/colorful.html",
        controller:'colorfulCtrl'
    }).state('indexContainer.colorfulIndex',{
        url:'/characteristics/colorful/index',
        templateUrl:"router/colorfulIndex/index.html",
        controller:'colorfulIndexCtrl'
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
angular.module('services').service("config",['$http',function($http){
    var config={
        "last-update":"2015-12-27",
        "mock":false
        // "mock":true
    };
    // $http.get("config/all.json").success(function(d){
    //     angular.extend(config,d);
    // });
    return config;
}]);
angular.module('templates', []);



(function(src,debug){
    if(!debug){
        return;
    }
    var s=document.querySelector(".body_view").style;
    s.opacity=0.8;
    s.position="relative";
    s.zIndex=100;
    var container = document.createElement("div");
    document.querySelector("body").appendChild(container);
    var style=container.style;
    style.position="absolute";
    // style.top="-113px";
    style.top=0;
    style.right=0;
    style.left=0;
    style.zIndex=1;
    style.opacity="1";
    style.pointerEvents="none";
    var img=new Image();
    img.src=src;
    container.appendChild(img);
    style=img.style;
    style.margin="0 auto";
    style.display="block";
    style.width="75%";
})("../colorfulp/info.jpg",false);
