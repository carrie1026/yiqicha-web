define(['./mod'], function(mod) {
    'use strict';
    mod.controller('reviseUserCtrl', ['$scope', '$location', 'reviseUserService', '$rootScope', 'UserService','Upload',
        function($scope, $location, reviseUserService, $rootScope, UserService,Upload) {
            // init registerFormData
            $scope.picFile = '';
            $scope.resImgData = '';
            $scope.croppedDataUrl = '';
            $scope.reviseUserFormData = {};
            UserService.findUserInfo().then(function(data) {
                if(data.icon == null || data.icon == ""){
                    $scope.userImage = "/images/default-2@3x.png"
                }else{
                    $scope.userImage = '/yiqicha/' + data.icon;
                }
                $scope.reviseUserFormData.name = data.name;
                $scope.reviseUserFormData.companyName = data.companyName;
                $scope.reviseUserFormData.job = data.job;
//                $scope.loadSubJob(data.fId);
            });

//            $scope.loadJob = function() {
//                JobService.jobList().then(function(data) {
//                    $scope.jobList = data;
//                })
//            };
//
//            $scope.loadSubJob = function(id) {
//                JobService.jobList(id).then(function(data) {
//                    $scope.subJobList = data;
//                })
//            };

            $scope.submitBtn = function() {
                if (!$scope.reviseUserFormData.name || $scope.reviseUserFormData.name.length == 0) {
                    alert('内容为空!');
                    return;
                }
                var promise = reviseUserService.reviseUser($scope.reviseUserFormData);
                promise.then(function(data) {
                    layer.open({
                    content: '修改成功',
                    style: 'background-color:#fff; color:#000; border:none;',
                    time: 2
                    });
                    $location.path('/mycenter_home');
                }, function(data) {

                });
            };

//            $scope.loadJob();

            $scope.changeImg = function(){
                $('#file').click();
            };

            $('#file').on('change', function (evt) {
                var file = evt.currentTarget.files[0];
                if (file.size > (1024 * 500)) {
                    layer.open({content: '上传的图片不能大于500k！'});
                    return;
                }
                // console.log(file);
                var reader = new FileReader();
                reader.onload = function (evt) {
                    $scope.$apply(function($scope){
                        $scope.resImgData=evt.target.result;
                    });
                };
                reader.readAsDataURL(file);

                $('#changeImgDiv').css('height', (window.innerHeight -50));
                $('#imgCropDiv').css('height', (window.innerHeight -50)/2);
                $('#changeImgDiv').css('display','block');
            });

            $scope.fileSelected = function($files, $event, b){
                $('#imgCropDiv').css('height', (window.innerHeight -50)/2);
                $('#changeImgDiv').css('display','block');
            }

            $scope.cancel = function(){
                $('#changeImgDiv').css('display','none');
            }

            $scope.upload = function (dataUrl, name) {
                // console.log(dataUrl);
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
