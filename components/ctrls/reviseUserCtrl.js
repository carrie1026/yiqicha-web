define(['./mod'], function(mod) {
    'use strict';
    mod.controller('reviseUserCtrl', ['$scope', '$location', 'reviseUserService', '$rootScope', 'UserService', 'JobService', 'Upload',
        function($scope, $location, reviseUserService, $rootScope, UserService, JobService, Upload) {
            // init registerFormData
            $scope.reviseUserFormData = {};
            UserService.findUserInfo().then(function(data) {
                if(data.icon == null || data.icon == ""){
                    $scope.userImage = "/images/default-2@3x.png"
                }else{
                    $scope.userImage = '/yiqicha/' + data.icon;
                }
                $scope.reviseUserFormData = data;
                $scope.loadSubJob(data.fId);
            });

            $scope.loadJob = function() {
                JobService.jobList().then(function(data) {
                    $scope.jobList = data;
                })
            };

            $scope.loadSubJob = function(id) {
                JobService.jobList(id).then(function(data) {
                    $scope.subJobList = data;
                })
            };

            $scope.submitBtn = function() {
                if (!$scope.reviseUserFormData.name || $scope.reviseUserFormData.name.length == 0) {
                    alert('内容为空!');
                    return;
                }
                var promise = reviseUserService.reviseUser($scope.reviseUserFormData);
                promise.then(function(data) {
                    alert('修改成功');
                    $location.path('/mycenter_home');
                }, function(data) {

                });
            };

            $scope.loadJob();

            $scope.changeImg = function(){
                $('#file').click();
            };

            $('#file').on('change', function (e) {
                $('#changeImgDiv').css('height', (window.innerHeight -50));
                $('#imgCropDiv').css('height', (window.innerHeight -50)/2);
                $('#changeImgDiv').css('display','block');

                var file = e.target.files[0];
                console.log(file);
            });

            $scope.fileSelected = function($files, $event, b){
                $('#imgCropDiv').css('height', (window.innerHeight -50)/2);
                $('#changeImgDiv').css('display','block');
            }

            $scope.cancel = function(){
                $('#changeImgDiv').css('display','none');
            }

            $scope.upload = function (dataUrl, name) {
                console.log(dataUrl);
                Upload.upload({
                    method: 'POST',
                    url: '/yiqicha/manager/login/modifyUserIcon.do',
                    data: {
                        file: Upload.dataUrltoBlob(dataUrl, name)
                    },
                }).then(function(response){
                    $('#changeImgDiv').css('display','none');
                    $scope.userImage = '/yiqicha/' + response.data.data.iconFilePath;
                }, function(response){
                    $('#changeImgDiv').css('display','none');
                    alert(response.data.message);
                }, function(event){

                });
            }
        }
    ])
});
