angular.module('services').service("author", ['strRandom','secret','md5','$filter',function(strRandom,secret,md5,$filter) {
    var author={
        appid:"patica",
        noncestr:null,
        timestamp:null,
        signature:null
    }    
    function encode(headers){
        author.noncestr=strRandom();
        author.timestamp=Date.now();
        author.signature=md5("appid="+author.appid+"&noncestr"+author.noncestr+"&timestamp"+author.timestamp+"&secret"+author.secret);
        var a=$filter('json')(author);        
        headers.author=a.replace(/\s+/igm,"");
    }
    var interceptor = {
      'request': function (config) {
        var headers = config.headers;
        var url=config.url;        
        if (url.match(/api\/|mvc\//ig)) {
            encode(headers);
        }
        return config;      
      }    
    };
    return interceptor;
}]);