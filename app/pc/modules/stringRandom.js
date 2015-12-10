angular.module('services').service("strRandom", [function() {
    var arr=[];
    for(var i=0;i<10;i++){
        arr.push(i+"");
    }
    for(var i=0;i<26;i++){
        arr.push(String.fromCharCode(i+97));
    }
    var l=arr.length;    
    function random(len){
        len=len||32;
        var str="";
        for(var i=0;i<len;i++){
            str+=arr[Math.floor(Math.random()*l)];
        }
        return str;
    }
    return random;
}]);