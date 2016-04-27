/**
 * 高德地图
 * keyName: QiyePlus-map
 * Key: 559a63df9cf7d477d6060368fef71875
 * bindService: Web Service API
 * @author zhanghua on 4/27/16
 */
define(['./mod'], function(mod) {
    mod.controller('AMapCtrl', ['$scope', '$location',
        function($scope, $location) {
            var createAMap = function(containerId) {
                var container = document.getElementById(containerId);
                // get screen width and height
                var height = window.screen.height;
                var width = window.screen.width;

                var headerHeight = 40;
                // minus header height
                height -= headerHeight;

                // set height & width
                container.style.height = height + 'px';
                container.style.width = width + 'px';

                // create
                return new AMap.Map(containerId);
            };

            var setAMapOption = function(amap, option) {

            };

            var amap = createAMap('amap-container');
            var option = $location.search();
            setAMapOption(amap, option);
        }
    ]);
});
