define(['./mod'], function (mod) {
    'use strict';

    mod.controller('businessMapCtrl',['$scope',function($scope){
    	var businessMap = echarts.init(document.getElementById('businessMap'));
    	var getBusinessMapData = function(){
    		return {
			    title : {
			        text: '企业图谱',
			        x:'center',
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: '{a} : {b}'
			    },
	
			    series : [
			        {
			            type:'force',
			            name : "公司关系",
			            ribbonType: false,
			            categories : [
			                {
			                    name: '总公司'
			                },
			                {
			                    name: '分公司'
			                }
			            ],
			            itemStyle: {
			                normal: {
			                    label: {
			                        show: true,
			                        textStyle: {
			                            color: '#333'
			                        }
			                    },
			                    nodeStyle : {
			                        brushType : 'both',
			                        borderColor : 'rgba(255,215,0,0.4)',
			                        borderWidth : 1
			                    },
			                    linkStyle: {
			                        type: 'line'
			                    }
			                },
			                emphasis: {
			                    label: {
			                       show: false
			                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
			                    },
			                    nodeStyle : {
			                        //r: 30
			                    },
			                    linkStyle : {}
			                }
			            },
			            useWorker: false,
			            minRadius : 15,
			            maxRadius : 25,
			            gravity: 1.1,
			            scaling: 1.1,
			            roam: 'move',
			            nodes:[
			                {category:0, name: '联想集团有限公司', value : 10, label: '联想集团有限公司'},
			                {category:1, name: '联想',value : 5},
			                {category:1, name: '联想翱龙',value : 5}
			            ],
			            links : [
			                {source : '联想集团有限公司', target : '联想', weight : 1},
			                {source : '联想集团有限公司', target : '联想翱龙', weight : 1}
			            ]
			        }
			    ]
			};
    	};
    	businessMap.setOption(getBusinessMapData());
    }]);
});