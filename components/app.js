define([
    'angular',
    'angularRoute',
    'twitterBootstrap',
    'ngFileUpload',
    'common/route',
    'common/api',
    'constants/_base',
    'ctrls/_base',
    'directives/_base',
    'filters/_base',
    'services/_base',
    'mobileAngularUi',
    'layer',
    'jquerySlide',
    'ngImgCrop'
], function(angular) {
    'use strict';
    return angular.module('MyApp', ['ngRoute', 'mobile-angular-ui', 'ngFileUpload', 'app.route', 'app.api', 'app.constants', 'app.ctrls', 'app.directives', 'app.filters', 'app.services','ngImgCrop'])

    .config(['$httpProvider', '$routeProvider', '$locationProvider', function($httpProvider, $routeProvider, $locationProvider) {
        // 设置Http拦截器
        $httpProvider.interceptors.push('HttpInjector');
        $locationProvider.html5Mode(true);
    }])

    .run(['$rootScope', 'AuthService', '$location', function($rootScope, AuthService, $location) {
        // 路由改变监听
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            // 判断权限是否跳转
            AuthService.doAuth(next, current).then(function(data) {
                // 通过
                $rootScope.userInfo = data;
            }, function() {
                // 不通过
                event.preventDefault(); // 取消默认跳转行为
                $location.path('/login').search({success_redirect: next.$$route.originalPath});
                // 将当前请求保存到$rootScope上
                $rootScope.savedRequest = next;
            });
        });
    }])
});
