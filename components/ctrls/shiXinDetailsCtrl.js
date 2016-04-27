/**
 * 失信详情
 *
 * @author zhanghua on 4/26/16
 */
define(['./mod'], function(mod) {
    'use strict';
    mod.controller('ShiXinDetailsCtrl', ['$location', '$scope', 'SearchPeopleService',
        function($location, $scope, SearchPeopleService) {
            var iname = $location.search().iname;
            SearchPeopleService.findOccupationList('', '', false, iname).then(function(data) {
                if (data.rows.length > 0) {
                    $scope.occ = data.rows[0];
                }
            });
        }
    ]);
});
