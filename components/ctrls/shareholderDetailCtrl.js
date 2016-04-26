/**
 * 股东信息详情
 *
 * @author zhanghua on 4/26/16
 */
define(['./mod'], function(mod) {
    'use strict';
    mod.controller('ShareholderDetailCtrl', ['$scope', '$location',
        function($scope, $location) {
            $scope.holder = $location.search();
        }
    ])
});
