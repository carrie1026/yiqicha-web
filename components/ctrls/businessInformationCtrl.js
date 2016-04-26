define(['./mod'], function (mod) {
    'use strict';
mod.controller('businessInformationCtrl', ['$scope','$location', 'businessInformationService','$rootScope', function($scope, $location, businessInformationService,$rootScope) {
    var companyId = $location.search().companyId;
    businessInformationService.businessInformation(companyId).then(function(data){
        $scope.industryInfo = data.data;
    })
 }])
});
