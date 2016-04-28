define(['./mod'], function (mod) {
    'use strict';

    mod.controller('businessMapCtrl',['$scope', '$location' ,'BusinessMapService',function($scope, $location, BusinessMapService){
    	var businessMap = echarts.init(document.getElementById('businessMap'));
    	var requestParam = $location.search();
    	var companyId = requestParam.companyId;
    	var companyName = requestParam.companyName;
    	BusinessMapService.queryBusinessMap(companyId).then(function(data) {
    		console.log(data);
    		var AbroadInvestment = data.data.AbroadInvestment;
    		var LawsuitMsg = data.data.LawsuitMsg;
    		var StockMsg = data.data.StockMsg;
    		var abroadInvestmentString = '对外投资';
    		var stockString = '股东';
    		var lawsuitString = '诉讼信息';
    		var nodesArray = [
					    		{category:0, name: companyName, value : 20, label: companyName},
					            {category:1, name: abroadInvestmentString,value : 10},
					            {category:1, name: stockString,value : 10},
					            {category:1, name: lawsuitString,value : 10}
					         ];
			var linkArray = [
								{source : companyName, target : abroadInvestmentString, weight : 10},
				                {source : companyName, target : stockString, weight : 10},
				                {source : companyName, target : lawsuitString, weight : 10}
				            ];
			$.each(AbroadInvestment,function(index,value){
				nodesArray.push({category:2, name:value.companyName, value: 1});
				linkArray.push({source : abroadInvestmentString, target : value.companyName, weight : 1});
			});
			$.each(LawsuitMsg,function(index,value){
				nodesArray.push({category:2, name:value.registrineTime, value: 1});
				linkArray.push({source : lawsuitString, target : value.registrineTime, weight : 1});
			});
			$.each(StockMsg,function(index,value){
				nodesArray.push({category:2, name:value.name, value: 1});
				linkArray.push({source : stockString, target : value.name, weight : 1});
			});


    		var getBusinessMapData = function(){
	    		return {
				    tooltip : {
				        trigger: 'item',
				        formatter: '{a} : {b}'
				    },
		
				    series : [
				        {
				            type:'force',
				            name : "企业图谱",
				            ribbonType: false,
				            categories : [
				                {
				                    name: '总公司'
				                },
				                {
				                    name: abroadInvestmentString
				                },
				                {
				                    name: stockString
				                },
				                {
				                    name: lawsuitString
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
				            nodes:nodesArray,
				            links : linkArray
				        }
				    ]
				};
	    	};
	    	businessMap.setOption(getBusinessMapData());
    	});
    }]);
});