define(['./mod'], function (mod) {
    'use strict';
mod.controller('businessInformationCtrl', ['$scope','$location', 'businessInformationService','$rootScope', function($scope, $location, businessInformationService,$rootScope) {
    // 企业咨询
    var companyId = 2;   
    businessInformationService.businessInformation(companyId).then(function(data){
         console.log(123);
        $scope.businessInformation = data.data;
        console.log($scope.businessInformation);
    })
 }])
});
