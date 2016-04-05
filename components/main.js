// fis3: define()

require.config({
    paths: {
        angular: 'lib/angular/angular.min',
        angularRoute: 'lib/angular/angular-route.min',
        ngFileUpload: 'lib/ng-file-upload/ng-file-upload',
        jquery: 'lib/jquery/jquery.min',
        layer: 'lib/layer/layer.min',
        twitterBootstrap: 'lib/bootstrap/bootstrap.min',
        mobileAngularUi:'lib/angular/mobile-angular-ui.min',
        highcharts:'lib/highcharts/highcharts',
        highchartsng:'lib/highcharts/highcharts-ng'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        angularRoute: ['angular'],
        ngFileUpload: ['angular'],
        mobileAngularUi: ['angular'],
        layer: {
            deps: ['jquery'],
            exports: 'layer'
        },
        twitterBootstrap: ['jquery'],
        highcharts: {
          exports: "Highcharts",
          deps: ["jquery"]
        },
        highchartsng: ["angular"]
    }
});

require(['layer'], function (layer) {
    layer.config({
        path: '/lib/layer/', //layer.js所在的目录，可以是绝对目录，也可以是相对目录
        extend: 'extend/layer.ext.js'
    });
});

require(['bootstrap']);
