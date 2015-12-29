angular.module('controller').controller('hotsCtrl',['$scope','mHots',function(s,mHots){    
    s.hots=mHots;
}]);