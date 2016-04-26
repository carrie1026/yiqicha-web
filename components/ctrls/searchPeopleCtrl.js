// define(['./mod'], function(mod) {
//     'use strict';
//     mod.controller('SearchpeopleCtrl', ['$scope', '$location', 'SearchPeopleService',
//         function($scope, $location, SearchPeopleService) {
//             $scope.searchStr = '';
//             var enterpriseCurrentPage = 1;
//             var stockMsgPage = 1;
//             var rows = 5;
//
//             var loadEnterpriseInfo = function(isPush) {
//                 SearchPeopleService.findEnterpriseInfo(enterpriseCurrentPage, rows, isPush)
//                     .then(function(data) {
//                         $scope.enterpriseList = data;
//                         console.log($scope.enterpriseList);
//                     });
//             };
//             //
//             // var loadStockMsg = function(isPush) {
//             //     SearchPeopleService.findStockMsg(stockMsgPage, rows, isPush)
//             //         .then(function(data) {
//             //             $scope.stockMsgList = data;
//             //         });
//             // };
//
//             var loadStockMsgByName = function(name) {
//                 SearchPeopleService.findStockMsgByName(name).then(function(data) {
//                     $scope.stockMsgList = data;
//                 });
//             };
//
//             var loadOccupation = function(iname) {
//                 SearchPeopleService.findOccupationList(iname)
//                     .then(function(data) {
//                         $scope.occupationList = data;
//                     });
//             };
//
//             $scope.enterpriseLoadMore = function() {
//                 enterpriseCurrentPage++;
//                 loadEnterpriseInfo(true);
//             };
//
//             // $scope.stockMsgLoadMore = function() {
//             //     stockMsgPage++;
//             //     loadStockMsg(true);
//             // };
//
//             loadEnterpriseInfo(false);
//             // loadStockMsg(false);
//             loadOccupation();
//
//             var search = $location.search();
//             $scope.type = search.type;
//             switch (search.type) {
//                 case 'qiye':
//                     $('.searcharea_con ul li:eq(0)').click();
//                     break;
//                 case 'faren':
//                     $('.searcharea_con ul li:eq(1)').click();
//                     break;
//                 case 'shixin':
//                     $('.searcharea_con ul li:eq(2)').click();
//                     break;
//                 default:
//             }
//         }
//     ])
// });
/**
 * 查询
 *
 * @author zhanghua on 4/26/16
 */
define(['./mod'], function(mod) {
    mod.controller('SearchpeopleCtrl', ['$scope', '$location', 'SearchPeopleService',
        function($scope, $location, SearchPeopleService) {
            // init type
            $scope.type = $location.search().type;

            // init page
            var qiyePage, farenPage, shixinList;
            qiyePage = farenPage = shixinList = 1;
            var rows = 5;

            // load data
            var loadQiyeList = function(isPush) {
                SearchPeopleService.findEnterpriseInfo(qiyePage, rows, isPush).then(function(data) {
                    $scope.qiyeList = data;
                });
            };

            var loadFarenList = function(isPush) {

            };

            var loadShixinList = function(isPush) {

            };

            // watch search box
            $scope.$watch('searchBox', function(newValue, oldValue) {

            });

            // load more btn
            $scope.qiyeLoadMore = function() {
                qiyePage++;
                loadQiyeList(true);
            };
            $scope.farenLoadMore = function() {
                farenPage++;
                loadFarenList(true);
            };
            $scope.shixinLoadMore = function() {
                shixinList++;
                loadShixinList(true);
            };

            // load qiye list
            loadQiyeList(false);
        }
    ]);
})
