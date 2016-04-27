/**
 * 高德地图
 * keyName: QiyePlus-map
 * Key: 559a63df9cf7d477d6060368fef71875
 * bindService: Web Service API
 * @author zhanghua on 4/27/16
 */
define(['./mod'], function(mod) {'use strict';

    mod.controller('AMapCtrl', ['$scope', '$location',
        function($scope, $location) {
            var amap = getAMap('amap-container');
            var option = $location.search();
            setAMapOption(amap, option);
        }
    ]);

    var getAMap = function(containerId) {
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

    var getInfoWindow = function(title, desc) {
        var content = $string(
            '<h5>{0}</h5><div>{1}</div>',
            title,
            desc
        );
        return new AMap.InfoWindow({
            content: content,
            offset: new AMap.Pixel(0, -30),
            size: new AMap.Size(230, 0)
        });
    };

    var getMarker = function(longitude, latitude) {
        return new AMap.Marker({
            position: [longitude, latitude]
        });
    };

    var setAMapOption = function(amap, o) {
        var zoom = 12;

        // set center
        amap.setCenter([o.longitude, o.latitude]);
        // set zoom
        amap.setZoom(zoom);

        var marker = getMarker(o.longitude, o.latitude);
        marker.setMap(amap);

        var infoWindow = getInfoWindow(o.companyName, o.companyAddress);
        infoWindow.open(amap, new AMap.LngLat(o.longitude, o.latitude));

        // add event listener
        var clickHandle = AMap.event.addListener(marker, 'click', function() {
            infoWindow.open(amap, marker.getPosition())
        });
    };
});
