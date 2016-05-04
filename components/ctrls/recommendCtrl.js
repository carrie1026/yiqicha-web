define(['./mod'], function (mod) {
    'use strict';
mod.controller('RecommendCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.recommend = function(){
       layer.open({
            type: 1,
            content: '<div style="height:40px;"><div class="jiathis_style_m"><div class="jiathis_style_32x32"><span class="jiathis_txt">分享到：</span><a class="jiathis_button_qzone"  title="分享到QQ空间"><span class="jiathis_txt jtico jtico_qzone"></span></a><a class="jiathis_button_tsina"  title="分享到新浪微博"><span class="jiathis_txt jtico jtico_tsina"></span></a><a class="jiathis_button_tqq"  title="分享到腾讯微博"><span class="jiathis_txt jtico jtico_tqq"></span></a><a class="jiathis_button_renren"  title="分享到人人网"><span class="jiathis_txt jtico jtico_renren"></span></a><a href="http://www.jiathis.com/share?url=http%3A%2F%2Flocalhost%2Fsets&amp;title=&amp;uid=1626433" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a></div></div><script type="text/javascript" src="http://v3.jiathis.com/code/jiathis_m.js" charset="utf-8" style="font-size:14px;"></script></div><p onclick="layer.closeAll();history.back(-1)" style="cursor:pointer;width:100%;border-top:1px solid #ccc;height:40px;line-height:40px;text-align:center;">关闭</p>',
            anim: 0,
            style: 'position:fixed; bottom:0; left:0; width:100%;border:none;height:80px;'
        });

  }
}])
});
