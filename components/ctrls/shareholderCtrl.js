/**
 * 股东信息
 *
 * @author zhanghua on 4/26/16
 */
define(['./mod'], function(mod) {
    'use strict';
    mod.controller('ShareholderCtrl', ['$scope', '$location', 'SearchPeopleService',
        function($scope, $location, SearchPeopleService) {
            var companyId = $location.search().compnayId;

            SearchPeopleService.findStockMsg(-1, -1, false, companyId).then(function(data) {
                $scope.holders = data;
            });

            // var Shareholdered = $location.search();
            // var id =Shareholdered.id;
            // // 股东信息
            // var page = 1;
            // var rows = 4;
            // ShareholderService.Shareholder(page,rows).then(function(data){
            //     $scope.Shareholder = data.data;
            //     console.log($scope.Shareholder);
            // })
        }
    ])
});
