/**
 * 查询企业，法人/股东，失信
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
            var loadQiyeList = function(isPush, name, address) {
                SearchPeopleService.findEnterpriseInfo(qiyePage, rows, isPush, name, address).then(function(data) {
                    $scope.qiyeList = data;
                });
            };

            var loadFarenList = function(isPush, name, address) {

            };

            var loadShixinList = function(isPush, name, address) {

            };

            // on search
            var search = function(name, address) {
                switch ($scope.type) {
                    case 'qiye':
                        qiyePage = 1;
                        loadQiyeList(false, name, address)
                        break;
                    case 'faren':
                        farenPage = 1;
                        loadFarenList(false, name, address);
                        break;
                    case 'shixin':
                        shixinPage = 1;
                        loadShixinList(false, name, address);
                        break;
                    default:
                        console.error('We not have this type:', $scope.type);
                }
            };

            // watch search box
            $scope.$watch('searchBox', function(newValue, oldValue) {
                if (!newValue || newValue.length < 2)
                    return;

                search(newValue, $scope.address);
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
