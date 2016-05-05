define(['./mod'], function(mod) {
    'use strict';
    mod.controller('ErrorCtrl', ['$scope', '$location', 'ErrorService', '$rootScope', function($scope, $location, ErrorService, $rootScope) {
        // init registerFormData
        $scope.ErrorFormData = {};
        $scope.errlist = [];
        var key = 'er_defect_management';
        ErrorService.Errortype(key).then(function(data) {
            $scope.Errortype = data.data;
//            console.log($scope.Errortype);
        })

//        $scope.subError = function(dictName) {
//            $scope.ErrorFormData.errorParts = dictName;
//            console.log($scope.ErrorFormData.errorParts);
//
//        }
       $scope.subError = function(dictName) {
            for (var i = 0; i < $scope.Errortype.length; i++){
               var Errortype = $scope.Errortype[i];
               console.log(Errortype.dictName);
               if(Errortype.dictName == dictName){
                    if(!Errortype.isSelected){
                      Errortype.isSelected = true; 
                      $scope.errlist.push(dictName);
                    }
                    break;
               }    
            }
            console.log($scope.errlist);
        }
        $scope.submitBtn = function() {
            if (!$scope.errlist) {
                layer.open({
                    content: '请选择信息有误的部分',
                    time: 2
                });
                return;
            }
            if (!$scope.ErrorFormData.mobileEmailQqNo) {
                layer.open({
                    content: '手机号码不能为空',
                    time: 2
                });
                return;
            }
            if (!/^1\d{10}$/.test($scope.ErrorFormData.mobileEmailQqNo)) {
                layer.open({
                    content: '手机号不符合规则',
                    time: 2
                });
                return;
            }
            $scope.ErrorFormData.errorParts = angular.toJson($scope.errlist);
            console.log($scope.errlist);
            console.log($scope.ErrorFormData.errorParts);    
            var promise = ErrorService.Error($scope.ErrorFormData);
            console.log($scope.ErrorFormData);
            promise.then(function(data) {
                layer.open({
                    content: '提交成功, 感谢您的反馈',
                    time: 2
                });
//                history.back(-1);
            }, function(data) {
                layer.open({
                    content: '系统异常'
                });
            });
        };
    }])
});
