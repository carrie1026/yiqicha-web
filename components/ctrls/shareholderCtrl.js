/**
 * 股东信息
 *
 * @author zhanghua on 4/26/16
 */
define(['./mod'], function(mod) {
    'use strict';
    mod.controller('ShareholderCtrl', ['$scope', '$location', 'SearchPeopleService',
        function($scope, $location, SearchPeopleService) {
            var companyId = $location.search().companyId;

            SearchPeopleService.findStockMsg(-1, -1, false, companyId).then(function(data) {
                $scope.holders = data;
            });
        }
    ])
});
