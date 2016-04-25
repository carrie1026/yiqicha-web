define(['./mod'], function (mod) {
    'use strict';
    mod.controller('ErrorCtrl', ['$scope', '$location', 'ErrorService','$rootScope', function($scope, $location, ErrorService,$rootScope) {
        // init registerFormData
            $scope.ErrorFormData = {};
            var errorPartss = [];
            $scope.subError = function(errorParts){
              console.log(errorParts);
               if(errorPartss.lenght==0){
                  errorPartss[0]=errorParts;
               }else{
                   errorPartss[errorPartss.lenght]=errorParts;
               }
            }
            $scope.submitBtn = function() {
                $scope.ErrorFormData.errorPartss=errorPartss;
                console.log($scope.ErrorFormData);
                var promise = ErrorService.Error($scope.ErrorFormData);
                promise.then(function(data) {
                    alert('提交成功');
                }, function(data) {
                     alert('系统异常');
                });
            };
            var key = 'er_defect_management';
            ErrorService.Errortype(key).then(function(data){
                $scope.Errortype = data.data;
                console.log($scope.Errortype);
            })
           
      }])
});
