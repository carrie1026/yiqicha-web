// fis3: define()

require.config({
    paths: {
        angular: 'lib/angular/angular.min',
        angularRoute: 'lib/angular/angular-route.min',
        ngFileUpload: 'lib/ng-file-upload/ng-file-upload',
        jquery: 'lib/jquery/jquery.min',
        jquerySlide: 'lib/lunbo/jquery.SuperSlide.2.1.1',
        layer: 'lib/layer/layer',
        twitterBootstrap: 'lib/bootstrap/bootstrap.min',
        mobileAngularUi:'lib/angular/mobile-angular-ui.min'
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
        jquerySlide: ['jquery'],
        layer: {
            deps: ['jquery'],
            exports: 'layer'
        },
        twitterBootstrap: ['jquery'],
        layer: {
            deps: ['jquery'],
            exports: 'layer'
        }
    }
});

require(['bootstrap']);
