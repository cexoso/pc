angular.module('controller').controller('hotsCtrl',['$scope','mHots',function(s,mHots){    
    console.log(mHots);
    s.hots=mHots;
}]);