// fis3: define()

require.config({
    paths: {
        angular: 'lib/angular/angular.min',
        angularRoute: 'lib/angular/angular-route.min',
        ngFileUpload: 'lib/ng-file-upload/ng-file-upload',
        jquery: 'lib/jquery/jquery.min',
        layer: 'lib/layer/layer',
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
        highchartsng: ["angular"],
        layer: {
            deps: ['jquery'],
            exports: 'layer'
        }
    }
});

require(['bootstrap']);
