'use strict';
var angular = require("angular");
var uiRouter= require("angular-ui-router");
var app=angular.module('app', [
  'ui.router',
  'controller',
  'directive',
  'services',
  'templates'
]).config(['$stateProvider',
'$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state('index',{
        url:'/index',
        templateUrl:"pages/router/index/index.html"
    });
}]);
angular.module('controller', []);
angular.module('directive', []);
angular.module('services', []);
angular.module('templates', []);
