/*
 * @Author: luciano 
 * @Date: 2021-02-03 12:18:19 
 * @Last Modified by: luciano
 * @Last Modified time: 2021-02-04 16:31:59
 *  Echarts 各图设置
 */

import Echarts from 'echarts'

//饼形图 title
function circleOption(data,title) {
	var datas = [], legendData = [];
	for (var i = 0; i < data.length; i++) {
		datas.push({
			value: data[i].value,
			name: data[i].name,
			itemStyle: {
				color: data[i].color
			}
		});
		legendData.push({
			name: data[i].name,
			textStyle: {
				color: data[i].color
			}
		});
	}

	var option = {
		title,  //标题
		tooltip: {
			trigger: 'item',
			// formatter: '{a} <br/>{b} : {c} <br/> {d}%'
		},
		// grid: {
		// 	left: '1%',
		// 	right: '1%',
		// 	bottom: '1%',
		// 	top: '1%',
		// },
		//饼状图颜色
		//color:['red','pink','blue'],
		// title: {
		// 	textStyle: {
		// 		color: '#fff',
		// 		fontWeight: 'normal',
		// 	},
		// 	subtextStyle: {
		// 		color: '#fff',
		// 		fontWeight: 'normal',
		// 		fontSize: 18
		// 	},
		// 	left: 'center',
		// 	top: '30%',
		// },
		//图例
		// legend: {
		// 	type: 'scroll',
		// 	width: '90%',
		// 	bottom: '10%',
		// 	left: 'center',
		// 	data: legendData,
		// 	formatter: function (name) {
		// 		for (var i = 0; i < data.length; i++) {
		// 			if (data[i].name == name) {
		// 				var value = data[i].value;
		// 				return name + "(" + value + ")";
		// 			}
		// 		}
		// 	},
		// 	pageIconColor: '#ACA9AF',
		// 	pageIconInactiveColor: '#2E4057',
		// },
		series: [{
			name: '',
			type: 'pie',
			radius: ['0%', '50%'], //左右位置调整
			center: ['50%', '50%'], //上下位置调整
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: true,
					//position: 'center'
				},
			},
			itemStyle: {
				normal: {
					// 设置扇形的阴影
					shadowBlur: 10,
					shadowColor: '#009CFF',
					shadowOffsetX: 0,
					shadowOffsetY: 0
				}
			},
			//指引线条
			labelLine: {
				normal: {
					show: true
				}
			},
			data: datas,
			animation: true,
			animationType: 'expansion',
			animationEasing: 'linear',
			animationDuration: 3000,
		}]
	};
	return option;
}

//环形图
function createPic(data, title, percent, height, legendType) {
	var datas = [], legendData = [];
	for (var i = 0; i < data.length; i++) {
		datas.push({
			value: data[i].value,
			name: data[i].name,
			itemStyle: {
				color: data[i].color
			}
		});
		legendData.push({
			name: data[i].name,
			textStyle: {
				color: '#fff',
				fontSize: 15,
			}
		});
	}

	var top = height * 0.4 - 30;
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} <br/> {d}%'
		},
		grid: {
			left: '1%',
			right: '1%',
			bottom: '1%',
			top: '1%',
		},
		title: {
			show: true,
			text: title,
			subtext: percent,
			textStyle: {
				color: '#fff',
				fontWeight: 'normal',
			},
			subtextStyle: {
				color: '#fff',
				fontWeight: 'normal',
				fontSize: 18
			},
			left: 'center',
			top: top + 'px',
		},
		legend: {
			show: legendType,
			type: 'scroll',
			width: '90%',
			bottom: '10%',
			itemWidth: 15,
			itemHeight: 8,
			left: 'center',
			data: legendData,
			formatter: function (name) {
				for (var i = 0; i < data.length; i++) {
					if (data[i].name == name) {
						var value = data[i].value;
						return name + "(" + value + ")";
					}
				}
			},
			pageIconColor: '#ACA9AF',
			pageIconInactiveColor: '#2E4057',
		},
		series: [{
			name: '',
			type: 'pie',
			radius: legendType == false ? ['65%', '80%'] : ['48%', '60%'],
			center: ['50%', '40%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
			},
			itemStyle: {
				normal: {
					// 设置扇形的阴影
					shadowBlur: 10,
					shadowColor: '#009CFF',
					shadowOffsetX: 0,
					shadowOffsetY: 0
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: datas,
			animation: true,
			animationType: 'expansion',
			animationEasing: 'linear',
			animationDuration: 3000,
		}]
	};
	return option;
}

//横向柱状图 eg: category 类目 data type:类型 name:名称 ,title 标题设置,backgroundStyle 背景色设置
function createCrossBar(category, data, type, name,title) {
	var option = {
	    title //标题
		,
		tooltip: {
			formatter: '{b} : {c} '
		},
		color:['#54c672','#6154c6','#c65494'],
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			min:0,
			max:12000,
			type: 'value',
			// show: false,
			name: name,
			axisLine: {
				lineStyle: {
					color: '#0c2f4e'
				}
			},
			axisTick: {
				show:true
			},
			//刻度线设置
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0c2f4e'
				}
			}
		},
		yAxis:{
			type:'category',
			data: category,
			axisLabel:{
				rotate:30, //旋转30度
			}
		},
		series: [{
			data: data,
			type: 'bar',
			//柱状图宽度
			barWidth:type == 1 ? '20':'40',
			label: {
				show: true,
				position: 'right',
				distance: 4,
				color: '#7b7b7b',
				fontSize: 12,
			},
			showBackground:true,
			//背景颜色设置
			backgroundStyle:{
			   color:'rgba(238,238,238)'
			},
			// smooth: true,
			itemStyle: {
				shadowColor: 'rgba(0, 0, 0, 0.5)',
				shadowBlur: 10,
				// emphasis: {
				//   barBorderRadius: 80
				// },
				normal: {
					//柱形图圆角，初始化效果
					// barBorderRadius:[10, 10, 10, 10],
					color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						//设置柱状图颜色
						color: type == 1 ? '#5470c6' : '#91cc75',
					}, {
						offset: 1,
						//设置柱状图颜色
						color: type == 1 ? '#0474E9' : '#91cc75',
					}]),
				}
			},
			animation: true,
			animationEasing: 'linear',
			animationDuration: 3000,
		}]
	}
	return option;
}
// 竖向柱状图
function createVerticalBar(category, data, type, name) {
	var option = {
		tooltip: {
			formatter: '{b} : {c} '
		},
		grid: {
			left: '10%',
			right: '10%',
			bottom: '10%',
			top: '15%',
		},

		xAxis: {
			type: 'category',
			data: category,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0c2f4e'
				}
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				color: '#fff',
				fontSize: 13
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0c2f4e'
				}
			}
		},
		yAxis: {
			type: 'value',
			name: name,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0c2f4e'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#0c2f4e'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 13
			},
			nameTextStyle: {
				color: '#fff'
			}
		},
		series: [{
			data: data,
			type: 'bar',
			barWidth: 23,
			// smooth: true,
			itemStyle: {
				shadowColor: 'rgba(0, 0, 0, 0.5)',
				shadowBlur: 10,
				// emphasis: {
				//   barBorderRadius: 80
				// },
				normal: {
					//柱形图圆角，初始化效果
					// barBorderRadius:[10, 10, 10, 10],
					color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: type == 1 ? '#009CFF' : '#00CD82',
					}, {
						offset: 1,
						color: type == 1 ? '#0077FF' : '#02B2C9',
					}]),
				}
			},
			animation: true,
			animationEasing: 'linear',
			animationDuration: 3000,
		}]
	}
	return option;
}

// 多柱状图
function createMultipleBar(category, data1, data2, name, legendData) {
	var option = {
		tooltip: {
			formatter: '{b} : {c} '
		},
		grid: {
			left: '10%',
			right: '10%',
			bottom: '10%',
			top: '15%',
		},
		legend: {
			show: true,
			left: 'center',
			data: legendData,
			textStyle: {
				color: '#fff'
			}
		},
		xAxis: {
			type: 'category',
			data: category,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0c2f4e'
				}
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				color: '#fff',
				fontSize: 13
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0c2f4e'
				}
			}
		},
		yAxis: {
			type: 'value',
			name: name,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0c2f4e'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#0c2f4e'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 13
			},
			nameTextStyle: {
				color: '#fff'
			}
		},
		series: [{
			data: data1,
			name: legendData[0],
			type: 'bar',
			barGap: 0,
			barWidth: 23,
			// smooth: true,
			itemStyle: {
				shadowColor: 'rgba(0, 0, 0, 0.5)',
				shadowBlur: 10,
				// emphasis: {
				//   barBorderRadius: 80
				// },
				normal: {
					//柱形图圆角，初始化效果
					// barBorderRadius:[10, 10, 10, 10],
					color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#009CFF',
					}, {
						offset: 1,
						color: '#0077FF',
					}]),
				}
			},
			animation: true,
			animationEasing: 'linear',
			animationDuration: 3000,
		},
		{
			data: data2,
			type: 'bar',
			barWidth: 23,
			name: legendData[1],
			// smooth: true,
			itemStyle: {
				shadowColor: 'rgba(0, 0, 0, 0.5)',
				shadowBlur: 10,
				// emphasis: {
				//   barBorderRadius: 80
				// },
				normal: {
					//柱形图圆角，初始化效果
					// barBorderRadius:[10, 10, 10, 10],
					color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#00CD82',
					}, {
						offset: 1,
						color: '#02B2C9',
					}]),
				}
			},
			animation: true,
			animationEasing: 'linear',
			animationDuration: 3000,
		}]
	}
	return option;
}
// 多环形图
function createMultiplePie(data, height, colors, category, percent) {
	var series = [];
	var dataStyle = {
		normal: {
			label: {
				show: false
			},
			labelLine: {
				show: false
			},
			shadowBlur: 40,
			borderWidth: 10,
			shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
		}
	};
	var placeHolderStyle = {
		normal: {
			color: '#122B48',
			label: {
				show: false
			},
			labelLine: {
				show: false
			}
		},
		// emphasis: {
		//   color: '#F6F6F6'
		// }
	};
	for (var i = 0; i < data.length; i++) {
		var linearColor = i == 1 ? '#02B2C9' : '#0E94FB';
		series.push({
			type: 'pie',
			clockWise: false,
			radius: [67 - i * 15 + '%', 75 - i * 15 + '%'],
			center: ['50%', '50%'],
			itemStyle: dataStyle,
			hoverAnimation: false,
			startAngle: i == 0 ? 60 : (i == 1 ? 120 : (i == 3 ? 80 : 70)),
			label: {
				borderRadius: '10',
			},
			animation: true,
			roundCap: true,
			data: [{
				value: data[i].value,
				name: data[i].name,
				itemStyle: {
					normal: {
						color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: colors[i]
						}, {
							offset: 1,
							color: linearColor,
						}])
					}
				}
			},
			{
				value: 45.4,
				name: '',
				tooltip: {
					show: false
				},
				itemStyle: placeHolderStyle
			},
			]
		})
	}
	var top = height * 0.5 - 30;
	var option = {
		tooltip: {
			trigger: 'item',
			show: true,
			formatter: "{b} : <br/>{d}%",
			backgroundColor: 'rgba(0,0,0,0.7)', // 背景
			padding: [8, 10], //内边距
			extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
		},
		title: {
			show: true,
			text: percent != undefined ? percent + '%' : data[1].value,
			subtext: percent != undefined ? '在线率' : '人员总数',
			textStyle: {
				color: '#fff',
				fontWeight: 'normal',
				fontSize: 19
			},
			subtextStyle: {
				color: '#fff',
				fontWeight: 'normal',
				fontSize: 18
			},
			left: 'center',
			top: top + 'px',
		},
		series: series,
		legend: {
			orient: 'vertical',
			// icon: 'circle',
			right: 'center',
			bottom: '10',
			itemWidth: 15,
			itemHeight: 8,
			data: category,
			textStyle: {
				color: '#fff',
				fontSize: 15,
			},
			formatter: function (name) {
				var index = 0;
				var clientlabels = data;
				var clientcounts = data;
				clientlabels.forEach(function (value, i) {
					if (value.name == name) {
						index = i;
					}
				});
				return name + "  " + clientcounts[index].value;
			}
		},
	}
	return option
}

var ChartUtil = {
	//饼图 //title
	createCircle: function (elem, data,title) {// 饼图
		var chartObj = Echarts.init(elem);
		var option = circleOption(data,title);
		chartObj.setOption(option);
	},
	createPic: function (elem, data, title, legendType) {//环形图
		var chartObj = Echarts.init(elem);
		var total = data[0].value + data[1].value;
		var percent = (data[0].value / total * 100).toFixed(1);
		var option = createPic(data, title, percent + "%", elem.offsetHeight, legendType);
		chartObj.setOption(option);
	},
	createCrossBar: function (elem, category, data, type, name,title) { // 横向柱状图
		var chartObj = Echarts.init(elem);
		var option = createCrossBar(category, data, type, name,title);
		chartObj.setOption(option);
	},
	createVerticalBar(elem, category, data, type, name) {
		var chartObj = Echarts.init(elem);
		var option = createVerticalBar(category, data, type, name);
		chartObj.setOption(option);
	},
	createMultipleBar(elem, category, data1, data2, name, legendData) {
		var chartObj = Echarts.init(elem);
		var option = createMultipleBar(category, data1, data2, name, legendData);
		chartObj.setOption(option);
	},
	createMultiplePie(elem, data, colors, category) {
		var chartObj = Echarts.init(elem);
		var total = data[0].value + data[1].value;
		var percent = (data[1].value / data[0].value * 100).toFixed(1);
		var option = createMultiplePie(data, elem.offsetHeight, colors, category, percent);
		chartObj.setOption(option);
	}
}

export default ChartUtil
