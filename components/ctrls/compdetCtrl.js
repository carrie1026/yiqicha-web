define(['./mod'], function(mod) {
    'use strict';
    mod.controller('compdetCtrl', ['$scope', '$location', 'compdetService', '$rootScope', 'UserService', 'CompanyService',
        function($scope, $location, compdetService, $rootScope, UserService, CompanyService) {

            UserService.findUserInfo().then(function(data) { // logined
                $rootScope.userInfo = data;
            });

            $scope.isAlreadyFocus = false;
            // 股东信息
            var compdeted = $location.search();
            var id = compdeted.id;
            var companyId = compdeted.id || compdeted.companyId;
            $scope.companyId = id;

            compdetService.compdet(id).then(function(data) {
                $scope.compdet = data.data;
                console.log($scope.compdet);
                $scope.industry = data.data.industry;
            });

            // 添加关注
            $scope.addMyAttention = function() {
                if ($rootScope.userInfo) {
                    compdetService.addMyAttention(companyId).then(function(data) {
                        $scope.compdet.sts = 1;
                        $scope.compdet.focus++;
                    });
                } else {
                    var path = $location.path();
                    var search = $location.search();
                    $.extend(search, {
                        success_redirect: path
                    });
                    $location.path('/login').search(search);
                }
            };

            // 取消关注
            $scope.removeMyAttention = function() {
                compdetService.removeMyAttention(companyId).then(function(data) {
                    $scope.compdet.sts = 0;
                    $scope.compdet.focus--;
                });
            };

            CompanyService.btnStatus(id).then(function (data) {
                $scope.bs = data;
            });
            //分享
            $scope.recommend = function(){
                   layer.open({
                        type: 1,
                        content: '<div style="height:40px;padding-left:10px;"><div class="jiathis_style_m"><div class="jiathis_style_32x32"><span class="jiathis_txt">分享到：</span><a class="jiathis_button_qzone"  title="分享到QQ空间"><span class="jiathis_txt jtico jtico_qzone"></span></a><a class="jiathis_button_tsina"  title="分享到新浪微博"><span class="jiathis_txt jtico jtico_tsina"></span></a><a class="jiathis_button_tqq"  title="分享到腾讯微博"><span class="jiathis_txt jtico jtico_tqq"></span></a><a class="jiathis_button_renren"  title="分享到人人网"><span class="jiathis_txt jtico jtico_renren"></span></a><a href="http://www.jiathis.com/share?url=http%3A%2F%2Flocalhost%2Fsets&amp;title=&amp;uid=1626433" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a></div></div><script type="text/javascript" src="http://v3.jiathis.com/code/jiathis_m.js" charset="utf-8" style="font-size:14px;"></script></div><p onclick="layer.closeAll()" style="cursor:pointer;width:100%;border-top:1px solid #ccc;height:40px;line-height:40px;text-align:center;">关闭</p>',
                        anim: 0,
                        style: 'position:fixed; bottom:0; left:0; width:100%;border:none;height:90px;padding-top:10px;'
                    });

              }
        }
    ])
});
