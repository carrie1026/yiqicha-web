/**
 * 我的关注列表
 */
define(['./mod'], function(mod) {
    'use strict';

    var page = 1;
    var rows = 5;

    mod.controller('myfocusCtrl', ['$scope', '$location', 'myfocusService' ,
        function($scope, $location, myfocusService) {
            var loadMyfocusList = function (isPush) {
                myfocusService.myfocus(page, rows, isPush).then(function(data) {
                    $scope.myfocus = data;
                    // console.log($scope.myfocus);
                });
            };

            $scope.loadMore = function () {
                page++;
                loadMyfocusList(true);
            };

            loadMyfocusList(false);
        }
    ])
});
