define(['angular'], function (angular) {
    'use strict';
    return angular.module('app.route', []).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/foo', {
                templateUrl: '/templates/foo.html'
            })
            .when('/mycenter_home', {
                templateUrl: '/templates/mycenter/mycenter_home.html'
            })
             .when('/questions', {
                templateUrl: '/templates/mycenter/questions.html'
            })
             .when('/settings', {
                templateUrl: '/templates/mycenter/settings.html'
            })
             .when('/ideas', {
                templateUrl: '/templates/mycenter/ideas.html'
            })
             .when('/system_info', {
                templateUrl: '/templates/mycenter/system_info.html'
            })
             .when('/job', {
                templateUrl: '/templates/mycenter/job.html'
            })
             .when('/job_2', {
                templateUrl: '/templates/mycenter/job_2.html'
            })
              .when('/myfocus', {
                templateUrl: '/templates/mycenter/myfocus.html'
            })
              .when('/xiugai_info', {
                templateUrl: '/templates/mycenter/xiugai_info.html'
            })
            // 默认路由-首页
            .otherwise({
                redirectTo: '/home'
            });
    }]);
});
