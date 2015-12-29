angular.module('controller').controller('dateInfoCtrl',['$scope','$rootScope','$timeout',function(s,$rootScope,$timeout){
    s.date=[];
    s.time=[];
    function init(c){
        var D=new Date();
        var y=D.getYear();
        var m=D.getMonth();
        var d=D.getDate();
        for(var i=0;i<c;i++){
            s.date.push(new Date(1900+y,m,d+i+1));
        }
        s.time=[
            {
                name:"10:00—11:00",
                value:"10:00—11:00"
            },
            {
                name:"11:00—12:00",
                value:"11:00—12:00"
            },
            {
                name:"12:00—13:00",
                value:"12:00—13:00"
            },
            {
                name:"13:00—14:00",
                value:"13:00—14:00"
            },
            {
                name:"14:00—15:00",
                value:"14:00—15:00"
            }
        ];
    }
    init(4);
}]);