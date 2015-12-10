angular.module('services').service("mCarousel",['$http','$q',function($http,$q){
    var obj=Object.create([
        '/pc/resource/img/shouye.png',
        '/pc/resource/img/shouye1.png'
        // ,
        // '//placekitten.com/602/300',
        // '//placekitten.com/603/300',
        // '//placekitten.com/604/300'
    ]);
    return obj;
}]);