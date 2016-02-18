angular.module('services').service("mColorfulNav",['$http','$q',function($http,$q){
    var obj=[
        {
            "name":"换壳方式",
            "view":"component/colorful_module/method/method.html",
        },
        {
            "name":"个人信息填写",
            "view":"component/colorful_module/colorful_userInfo/info.html",
        },
        {
            "name":"订单提交",
            "view":"component/colorful_module/pay/pay.html",
        },
        {
            "name":"换壳",
            "view":"component/repair_module/posted/posted.html",
        },
        {
            "name":"扫码支付",
            "view":"component/repair_module/onDoor/onDoor.html",
        }
    ];
    obj.active=obj[0];
    return obj;
}]);
