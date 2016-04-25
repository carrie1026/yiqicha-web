define(['./mod'], function (mod) {
    'use strict';
mod.controller('SearchpeopleCtrl', ['$scope','$location', 'SearchpeopleService','$rootScope','ShareholderService','dishonestyService', function($scope, $location, SearchpeopleService,$rootScope,ShareholderService,dishonestyService) {
    // 企业信息
    var page = 1;
    var rows = 4;
    SearchpeopleService.Searchpeople(page,rows).then(function(data){
        $scope.Searchpeople = data.data;
   //     console.log($scope.Searchpeople);
    })
    // 股东信息
    var page = 1;
    var rows = 4;
    ShareholderService.Shareholder(page,rows).then(function(data){
        $scope.Shareholder = data.data;
//        console.log($scope.Shareholder);
    })
    // 失信信息
    var iname = "顾海林";
    dishonestyService.dishonesty(iname).then(function(data){
        $scope.dishonesty = data.data;
        console.log($scope.dishonesty);
    })

    var search = $location.search();
    switch (search.type) {
        case 'qiye':
            $('.searcharea_con ul li:eq(0)').click();
            break;
        case 'faren':
            $('.searcharea_con ul li:eq(1)').click();
            break;
        case 'shixin':
            $('.searcharea_con ul li:eq(2)').click();
            break;
        default:
    }
 }])
});
