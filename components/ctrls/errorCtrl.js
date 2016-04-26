define(['./mod'], function (mod) {
    'use strict';
    mod.controller('ErrorCtrl', ['$scope', '$location', 'ErrorService','$rootScope', function($scope, $location, ErrorService,$rootScope) {
        // init registerFormData
            $scope.ErrorFormData = {};     
            var key = 'er_defect_management';
            ErrorService.Errortype(key).then(function(data){
                $scope.Errortype = data.data;
                console.log($scope.Errortype);
                console.log($scope.Errortype[0].dictName);
            })
            
            $scope.subError = function(){ 
                $scope.ErrorFormData.errorParts = $scope.Errortype[0].dictName;
                console.log( $scope.ErrorFormData.errorParts);
            }
       
            $scope.submitBtn = function() {
                console.log($scope.ErrorFormData);
                var promise = ErrorService.Error($scope.ErrorFormData);
                promise.then(function(data) {
                    alert('提交成功');
                }, function(data) {
                     alert('系统异常');
                });
            };
      }])
});
