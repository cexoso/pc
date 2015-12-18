angular.module('services').service("mRepariNav",['$http','$q',function($http,$q){
    var obj=[
        {
            "name":"机型故障选择",
            "view":"",
        },
        {
            "name":"预约信息填写",
            "view":"",
        },
        {
            "name":"付款",
            "view":"",
        },
        {
            "name":"订单完成",
            "view":"",
        },
        {
            "name":"上门维修",
            "view":"",
        }
    ];
    return obj;
}]);