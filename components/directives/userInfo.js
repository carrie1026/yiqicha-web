define(['./mod'], function(mod){

	'use strict';

	mod.directive('ngUserImage', ['$window', function($window) {

		var helper = {
            support: !!($window.FileReader && $window.CanvasRenderingContext2D),
            isFile: function(item) {
                return angular.isObject(item) && item instanceof $window.File;
            },
            isImage: function(file) {
                var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
				console.log("type:" + type);
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };

        return {
            restrict: 'E',
            template: '<canvas/>',
            link: function(scope, element, attributes) {

                if (!helper.support) return;   

                $('#file').on('change', function (e) {
                    var file = e.target.files[0];
                    if (!helper.isFile(file)) return;
                    if (!helper.isImage(file)) return;
                    console.log(file);

                    var canvas = element.find('canvas');
                    var reader = new FileReader();

                    reader.onloadend = onLoadFile;
                    reader.readAsDataURL(file);

                    function onLoadFile(event) {
                        var img = new Image();
                        img.src = event.target.result;
                        img.onload = function(){
                            var maxWidth = 200;
                            var maxHeight = 200;
                            var width = img.width;
                            var height = img.height;
                            var shouldResize = (width > maxWidth) || (height > maxHeight);

                            console.log("shouldResize:" + shouldResize);

                            var newWidth = 100;
                            var newHeight = 100;
                            
                            if(shouldResize){

                                if (width > height) {
                                    newHeight = height * (maxWidth / width);
                                    newWidth = maxWidth;
                                } else {
                                    newWidth = width * (maxHeight / height);
                                    newHeight = maxHeight;
                                }
                            }else{
                                newWidth = width;
                                newHeight = height;
                            }
                            
                            console.log("width:"+newWidth+"   "+"height:"+newHeight);
                            canvas.attr({ width: newWidth, height: newHeight });
                            canvas[0].getContext('2d').drawImage(this, 0, 0, newWidth, newHeight);
                        };
                        
                        console.log("image path:" + event.target.result);
                    }
                });
            }
        };
	}]);
});