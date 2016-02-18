angular.module('services').service("mRepariNav",['$http','$q',function($http,$q){
    var obj=[
        {
            "name":"机型故障选择",
            "view":"component/repair_module/p/p.html",
        },
        {
            "name":"预约信息填写",
            "view":"component/repair_module/repair_userInfo/info.html",
        },
        {
            "name":"付款",
            "view":"component/repair_module/pay/pay.html",
        },
        {
            "name":"订单提交",
            "view":"component/repair_module/posted/posted.html",
        },
        {
            "name":"上门维修",
            "view":"component/repair_module/onDoor/onDoor.html",
        }
    ];
    obj.active=obj[0];
    return obj;
}]);
