define(['./mod'], function(mod) {
    'use strict';
    mod.controller('ErrorCtrl', ['$scope', '$location', 'ErrorService', '$rootScope', function($scope, $location, ErrorService, $rootScope) {
        // init registerFormData
        $scope.ErrorFormData = {};
        //            $scope.selected = {};
        var key = 'er_defect_management';
        ErrorService.Errortype(key).then(function(data) {
            $scope.Errortype = data.data;
            console.log($scope.Errortype);
            $scope.ErrorFormData.errorParts = $scope.selected;
        })

        $scope.subError = function(dictName) {
            $scope.ErrorFormData.errorParts = dictName;
            console.log($scope.ErrorFormData.errorParts);

        }
        $scope.submitBtn = function() {
            console.log($scope.ErrorFormData.errorParts);
            console.log($scope.ErrorFormData);
            var promise = ErrorService.Error($scope.ErrorFormData);
            promise.then(function(data) {
                layer.open({
                    content: '提交成功, 感谢您的反馈',
                    style: 'background-color:#fff; color:#999; border:none;',
                    time: 2
                });
                history.back(-1);
            }, function(data) {
                alert('系统异常');
            });
        };
    }])
});
