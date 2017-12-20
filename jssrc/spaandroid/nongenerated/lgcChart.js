// function getData(){
//   	var httpclient = new kony.net.HttpRequest();
//   	httpclient.onReadyStateChange=callbackHandlerChartAll;
//     httpclient.open(constants.HTTP_METHOD_GET, "http://ec2-54-255-205-124.ap-southeast-1.compute.amazonaws.com:3000/sensordata" );
//     httpclient.setRequestHeader("Content-Type", "application/json");
// 	httpclient.send();
// }
// function callbackHandlerChartAll(){
// //   	var valSuhu = [];
// //   	var timeSuhu = [];
// //   	var valKelembapan = [];
// //   	var timeKelembapan = [];
// //   	var valco2 = [];
// //   	var timeco2 = [];
// //   	var valKecang = [];
// //   	var timeKecang = [];
// //   	var valCuJan = [];
// //   	var timeCuJan = [];
//   	var valSuhu2 = [];
//   	var timeSuhu2 = [];
//   	var valKelembapan2 = [];
//   	var timeKelembapan2 = [];
//   	var valco22 = [];
//   	var timeco22 = [];
//   	var valKecang2 = [];
//   	var timeKecang2 = [];
//   	var valCuJan2 = [];
//   	var timeCuJan2 = [];
//   	var valSuhu3 = [];
//   	var timeSuhu3 = [];
//   	var valKelembapan3 = [];
//   	var timeKelembapan3 = [];
//   	var valco23 = [];
//   	var timeco23 = [];
//   	var valKecang3 = [];
//   	var timeKecang3 = [];
//   	var valCuJan3 = [];
//   	var timeCuJan3 = [];
//     if(this.readyState == constants.HTTP_READY_STATE_DONE){
//       	//var lastArah="";
//       	var lastArah2="";
//       	var lastArah3="";
//       	for (var i=0; i<this.response.length;i++){
// //           	if(this.response[i].sensorId==1){
// //             	valSuhu.push(this.response[i].value);
// //   				timeSuhu.push(this.response[i].timestamp);
// //             }else if(this.response[i].sensorId==2){
// //               	valKelembapan.push(this.response[i].value);
// //       			timeKelembapan.push(this.response[i].timestamp);
// //             }else if(this.response[i].sensorId==3){
// //               	valco2.push(this.response[i].value);
// //                 timeco2.push(this.response[i].timestamp);
// //             }else if(this.response[i].sensorId==4){
// //               	lastArah = this.response[i].value;
// //             }else if(this.response[i].sensorId==5){
// //               	valKecang.push(this.response[i].value);
// //   				timeKecang.push(this.response[i].timestamp);
// //             }else if(this.response[i].sensorId==6){
// //               	valCuJan.push(this.response[i].value);
// //       			timeCuJan.push(this.response[i].timestamp);
// //             }else 
//           	if(this.response[i].sensorId==7){
//             	valSuhu2.push(this.response[i].value);
//   				timeSuhu2.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==8){
//               	valKelembapan2.push(this.response[i].value);
//       			timeKelembapan2.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==9){
//               	valco22.push(this.response[i].value);
//                 timeco22.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==10){
//               	lastArah2 = this.response[i].value;
//             }else if(this.response[i].sensorId==11){
//               	valKecang2.push(this.response[i].value);
//   				timeKecang2.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==12){
//               	valCuJan2.push(this.response[i].value);
//       			timeCuJan2.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==13){
//             	valSuhu3.push(this.response[i].value);
//   				timeSuhu3.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==14){
//               	valKelembapan3.push(this.response[i].value);
//       			timeKelembapan3.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==15){
//               	valco23.push(this.response[i].value);
//                 timeco23.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==16){
//               	lastArah3 = this.response[i].value;
//             }else if(this.response[i].sensorId==17){
//               	valKecang3.push(this.response[i].value);
//   				timeKecang3.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==18){
//               	valCuJan3.push(this.response[i].value);
//       			timeCuJan3.push(this.response[i].timestamp);
//             }
//         }
// //       	var lastSuhu = valSuhu[(valSuhu.length-1)];
// //       	var lasKelembapan = valKelembapan[(valKelembapan.length-1)];
// //         var lastCo2 = valco2[(valco2.length-1)];
// //         var lastAngin = valKecang[(valKecang.length-1)];
// //         var lastHujan = valCuJan[(valCuJan.length-1)];
// //       	var trans100 = kony.ui.makeAffineTransform();
// //         trans100.rotate(lastArah);
// //         flxNewsEvent.imgCompas.animate(
// //         kony.ui.createAnimation({
// //             "100": {
// //                 "stepConfig": {
// //                     "timingFunction": kony.anim.EASE
// //                 },
// //                 "transform": trans100
// //             }
// //         }), {
// //             "delay": 0,
// //             "iterationCount": 1,
// //             "fillMode": kony.anim.FILL_MODE_FORWARDS,
// //             "duration": 0.5
// //         }, {
// //             "animationEnd": function(){}
// //         });
//       	var lastSuhu2 = valSuhu2[(valSuhu2.length-1)];
//       	var lasKelembapan2 = valKelembapan2[(valKelembapan2.length-1)];
//         var lastCo22 = valco22[(valco22.length-1)];
//         var lastAngin2 = valKecang2[(valKecang2.length-1)];
//         var lastHujan2 = valCuJan2[(valCuJan2.length-1)];
//       	var trans1002 = kony.ui.makeAffineTransform();
//         trans1002.rotate(lastArah2);
//         flxNewsEvent.imgCompas2.animate(
//         kony.ui.createAnimation({
//             "100": {
//                 "stepConfig": {
//                     "timingFunction": kony.anim.EASE
//                 },
//                 "transform": trans1002
//             }
//         }), {
//             "delay": 0,
//             "iterationCount": 1,
//             "fillMode": kony.anim.FILL_MODE_FORWARDS,
//             "duration": 0.5
//         }, {
//             "animationEnd": function(){}
//         });
//       	var lastSuhu3 = valSuhu3[(valSuhu3.length-1)];
//       	var lasKelembapan3 = valKelembapan3[(valKelembapan3.length-1)];
//         var lastCo23 = valco23[(valco23.length-1)];
//         var lastAngin3 = valKecang3[(valKecang3.length-1)];
//         var lastHujan3 = valCuJan3[(valCuJan3.length-1)];
//       	var trans1003 = kony.ui.makeAffineTransform();
//         trans1003.rotate(lastArah3);
//         flxNewsEvent.imgCompas3.animate(
//         kony.ui.createAnimation({
//             "100": {
//                 "stepConfig": {
//                     "timingFunction": kony.anim.EASE
//                 },
//                 "transform": trans1003
//             }
//         }), {
//             "delay": 0,
//             "iterationCount": 1,
//             "fillMode": kony.anim.FILL_MODE_FORWARDS,
//             "duration": 0.5
//         }, {
//             "animationEnd": function(){}
//         });
// //       	flxNewsEvent.lblSuhu1.text = lastSuhu.toFixed(2);
// //       	flxNewsEvent.lblCO21.text = lastCo2.toFixed(2);
// //         flxNewsEvent.lblKelembapan1.text = lasKelembapan.toFixed(2);
// //         flxNewsEvent.lblAngin1.text = lastAngin.toFixed(2);
// //         flxNewsEvent.lblHujan1.text = lastHujan.toFixed(2);
//       	flxNewsEvent.lblSuhu2.text = lastSuhu2.toFixed(2);
//       	flxNewsEvent.lblCO22.text = lastCo22.toFixed(2);
//         flxNewsEvent.lblKelembapan2.text = lasKelembapan2.toFixed(2);
//         flxNewsEvent.lblAngin2.text = lastAngin2.toFixed(2);
//         flxNewsEvent.lblHujan2.text = lastHujan2.toFixed(2);
//       	flxNewsEvent.lblSuhu3.text = lastSuhu3.toFixed(2);
//       	flxNewsEvent.lblCO23.text = lastCo23.toFixed(2);
//         flxNewsEvent.lblKelembapan3.text = lasKelembapan3.toFixed(2);
//         flxNewsEvent.lblAngin3.text = lastAngin3.toFixed(2);
//         flxNewsEvent.lblHujan3.text = lastHujan3.toFixed(2);
// //     	var chartSuhu = {
// //             "rowNames": {
// //                 "values": timeSuhu
// //             },
// //             "columnNames": {
// //                 "values": ["suhu"]
// //             },
// //             "data": {
// //                 "suhu": valSuhu
// //             }
// //         };
// //         var chartKelembapan = {
// //             "rowNames": {
// //                 "values": timeKelembapan
// //             },
// //             "columnNames": {
// //                 "values": ["Kelembapan"]
// //             },
// //             "data": {
// //                 "Kelembapan": valKelembapan
// //             }
// //         };
// //         var chartCO2 = {
// //             "rowNames": {
// //                 "values": timeco2
// //             },
// //             "columnNames": {
// //                 "values": ["CO2"]
// //             },
// //             "data": {
// //                 "CO2": valco2
// //             }
// //         };
// //         var chartKecepatanAngin = {
// //             "rowNames": {
// //                 "values": timeKecang
// //             },
// //             "columnNames": {
// //                 "values": ["KecepatanAngin"]
// //             },
// //             "data": {
// //                 "KecepatanAngin": valKecang
// //             }
// //         };
// //         var chartCurahHujan = {
// //             "rowNames": {
// //                 "values": timeCuJan
// //             },
// //             "columnNames": {
// //                 "values": ["CurahHujan"]
// //             },
// //             "data": {
// //                 "CurahHujan": valCuJan
// //             }
// //         };  
// //       	var suhu = kdv_createChartJSObject(chartSuhu);
// //       	var kelembapan= kdv_createChartJSObject(chartKelembapan);
// //       	var co2 = kdv_createChartJSObject(chartCO2);
// //       	var kecepatanAngin = kdv_createChartJSObject(chartKecepatanAngin);
// //       	var curahHujan = kdv_createChartJSObject(chartCurahHujan);
//       	var chartSuhu2 = {
//             "rowNames": {
//                 "values": timeSuhu2
//             },
//             "columnNames": {
//                 "values": ["suhu"]
//             },
//             "data": {
//                 "suhu": valSuhu2
//             }
//         };
//         var chartKelembapan2 = {
//             "rowNames": {
//                 "values": timeKelembapan2
//             },
//             "columnNames": {
//                 "values": ["Kelembapan"]
//             },
//             "data": {
//                 "Kelembapan": valKelembapan2
//             }
//         };
//         var chartCO22 = {
//             "rowNames": {
//                 "values": timeco22
//             },
//             "columnNames": {
//                 "values": ["CO2"]
//             },
//             "data": {
//                 "CO2": valco22
//             }
//         };
//         var chartKecepatanAngin2 = {
//             "rowNames": {
//                 "values": timeKecang2
//             },
//             "columnNames": {
//                 "values": ["KecepatanAngin"]
//             },
//             "data": {
//                 "KecepatanAngin": valKecang2
//             }
//         };
//         var chartCurahHujan2 = {
//             "rowNames": {
//                 "values": timeCuJan2
//             },
//             "columnNames": {
//                 "values": ["CurahHujan"]
//             },
//             "data": {
//                 "CurahHujan": valCuJan2
//             }
//         };  
//       	var suhu2 = kdv_createChartJSObject(chartSuhu2);
//       	var kelembapan2= kdv_createChartJSObject(chartKelembapan2);
//       	var co22 = kdv_createChartJSObject(chartCO22);
//       	var kecepatanAngin2 = kdv_createChartJSObject(chartKecepatanAngin2);
//       	var curahHujan2 = kdv_createChartJSObject(chartCurahHujan2);
//       	var chartSuhu3 = {
//             "rowNames": {
//                 "values": timeSuhu3
//             },
//             "columnNames": {
//                 "values": ["suhu"]
//             },
//             "data": {
//                 "suhu": valSuhu3
//             }
//         };
//         var chartKelembapan3 = {
//             "rowNames": {
//                 "values": timeKelembapan3
//             },
//             "columnNames": {
//                 "values": ["Kelembapan"]
//             },
//             "data": {
//                 "Kelembapan": valKelembapan3
//             }
//         };
//         var chartCO23 = {
//             "rowNames": {
//                 "values": timeco23
//             },
//             "columnNames": {
//                 "values": ["CO2"]
//             },
//             "data": {
//                 "CO2": valco23
//             }
//         };
//         var chartKecepatanAngin3 = {
//             "rowNames": {
//                 "values": timeKecang3
//             },
//             "columnNames": {
//                 "values": ["KecepatanAngin"]
//             },
//             "data": {
//                 "KecepatanAngin": valKecang3
//             }
//         };
//         var chartCurahHujan3 = {
//             "rowNames": {
//                 "values": timeCuJan3
//             },
//             "columnNames": {
//                 "values": ["CurahHujan"]
//             },
//             "data": {
//                 "CurahHujan": valCuJan3
//             }
//         };  
//       	var suhu3 = kdv_createChartJSObject(chartSuhu3);
//       	var kelembapan3= kdv_createChartJSObject(chartKelembapan3);
//       	var co23 = kdv_createChartJSObject(chartCO23);
//       	var kecepatanAngin3 = kdv_createChartJSObject(chartKecepatanAngin3);
//       	var curahHujan3 = kdv_createChartJSObject(chartCurahHujan3);
// //       	var chartWidget1 = new kony.ui.Chart2D3D({
// //         "id": "chartid1",
// //         "isVisible": true
// //          }, {
// //         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
// //         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
// //         "containerWeight": 100
// //         },
// //         suhu);
// //       	var chartWidget2 = new kony.ui.Chart2D3D({
// //         "id": "chartid2",
// //         "isVisible": true
// //          }, {
// //         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
// //         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
// //         "containerWeight": 100
// //         },
// //         kelembapan);
// //       	var chartWidget3 = new kony.ui.Chart2D3D({
// //         "id": "chartid3",
// //         "isVisible": true
// //          }, {
// //         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
// //         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
// //         "containerWeight": 100
// //         },
// //         co2);
// //       	var chartWidget4 = new kony.ui.Chart2D3D({
// //         "id": "chartid4",
// //         "isVisible": true
// //          }, {
// //         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
// //         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
// //         "containerWeight": 100
// //         },
// //         kecepatanAngin);
// //       	var chartWidget5 = new kony.ui.Chart2D3D({
// //         "id": "chartid5",
// //         "isVisible": true
// //          }, {
// //         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
// //         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
// //         "containerWeight": 100
// //         },
// //         curahHujan);
//       	var chartWidget6 = new kony.ui.Chart2D3D({
//         "id": "chartid6",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         suhu2);
//       	var chartWidget7 = new kony.ui.Chart2D3D({
//         "id": "chartid7",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         kelembapan2);
//       	var chartWidget8 = new kony.ui.Chart2D3D({
//         "id": "chartid8",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         co22);
//       	var chartWidget9 = new kony.ui.Chart2D3D({
//         "id": "chartid9",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         kecepatanAngin2);
//       	var chartWidget10 = new kony.ui.Chart2D3D({
//         "id": "chartid10",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         curahHujan2);
//         var chartWidget11 = new kony.ui.Chart2D3D({
//         "id": "chartid11",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         suhu3);
//       	var chartWidget12 = new kony.ui.Chart2D3D({
//         "id": "chartid12",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         kelembapan3);
//       	var chartWidget13 = new kony.ui.Chart2D3D({
//         "id": "chartid13",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         co23);
//       	var chartWidget14 = new kony.ui.Chart2D3D({
//         "id": "chartid14",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         kecepatanAngin3);
//       	var chartWidget15 = new kony.ui.Chart2D3D({
//         "id": "chartid15",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         curahHujan3);
// //       	flxNewsEvent.chart1Point1.add(chartWidget1);
// //       	flxNewsEvent.chart1Point3.add(chartWidget2);
// //   		flxNewsEvent.chart1Point2.add(chartWidget3);
// //       	flxNewsEvent.chart1Point5.add(chartWidget4);
// //       	flxNewsEvent.chart1Point4.add(chartWidget5);
//       	flxNewsEvent.chart2Point1.add(chartWidget6);
//       	flxNewsEvent.chart2Point3.add(chartWidget7);
//   		flxNewsEvent.chart2Point2.add(chartWidget8);
//       	flxNewsEvent.chart2Point5.add(chartWidget9);
//       	flxNewsEvent.chart2Point4.add(chartWidget10);
//       	flxNewsEvent.chart3Point1.add(chartWidget11);
//       	flxNewsEvent.chart3Point3.add(chartWidget12);
//   		flxNewsEvent.chart3Point2.add(chartWidget13);
//       	flxNewsEvent.chart3Point5.add(chartWidget14);
//       	flxNewsEvent.chart3Point4.add(chartWidget15);
//       	var d = new Date();
//       	var tanggal = d.getDate();
//         var bulan = d.getMonth();
//         var tahun = d.getFullYear();
// 		var jam = d.getHours();
//         var menit = d.getMinutes();
//         var detik = d.getSeconds();
//       	//flxNewsEvent.lblUpdate.text = tanggal+"/"+(bulan+1)+"/"+tahun+" ("+(jam-1)+":"+menit+" - "+jam+":"+menit+")";
//       	flxNewsEvent.lblUpdate2.text = tanggal+"/"+(bulan+1)+"/"+tahun+" ("+(jam-1)+":"+menit+" - "+jam+":"+menit+")";
//       	flxNewsEvent.lblUpdate3.text = tanggal+"/"+(bulan+1)+"/"+tahun+" ("+(jam-1)+":"+menit+" - "+jam+":"+menit+")";
// 	}  
// }
// //creating chart object with chart properties and chart data...
// function kdv_createChartJSObject(chartData)
// {
//     var chartInfo = {
//         "chartProperties": {
//             "chartHeight": 100,
//             "layerArea": {
//                 "background": {
//                     "color": ["0xffffffff"]
//                 }
//             },
//             "axis": {
//                 "type": ["xAxis", "yAxis", "secondaryYAxis"],
//                 "xAxis": {
//                     "axisLine": {
//                         "crossOtherAxisAt": "value",
//                         "value": 0,
//                         "line": {
//                             "color": ["0x00000ff"]
//                         }
//                     },
//                     "labels": {
//                         "visible": false,
//                     },
//                     "intervalMarks": {
//                         "major": {
//                             "line": {
//                                 "color": ["0x00000ff"]
//                             }
//                         },
//                         "minor": {
//                             "line": {
//                                 "color": ["0x00000ff"]
//                             }
//                         },
//                         "placement": "atLabels"
//                     }
//                 },
//                 "yAxis": {
//                     "scale": {
//                         "type": "log10",
//                         "offset": {
//                             "value": [0, 0],
//                             "type": "pixels"
//                         }
//                     },
//                     "labels": {
//                         "visible": false
//                     },
//                     "intervalMarks": {
//                         "major": {
//                             "line": {
//                                 "color": ["0x00000ff"]
//                             }
//                         },
//                         "minor": {
//                             "line": {
//                                 "color": ["0x00000ff"]
//                             }
//                         },
//                         "placement": "atLabels"
//                     }
//                 }
//             },
//             "grid": {
//                 "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
//                 "xAxisMajorGrid": {
//                     "line": {
//                         "color": ["0x8b7fc0ff"]
//                     }
//                 },
//                 "yAxisMajorGrid": {
//                     "line": {
//                         "color": ["0xbc7b82ff"]
//                     }
//                 }
//             },
//             "drawEntities": ["axis", "grid", "areaChart"],
//             "areaChart": {
//                 "columnId": [0],
//                 "lineType": "smooth",
//                 "area": {
//                     "fillType": ["color"],
//                     "transparency": [0],
//                     "colorAboveXAxis": ["#a3c858"]
//                 },
//                 "line": {
//                     "color": ["0x5c5ddc32", "0x6845aeff", "0xc15760b4"],
//                     "width": [2],
//                     "transparency": [30, 30, 30]
//                 },
//                 "plotPoints": {
//                     "visible": false
//                 }
//             }
//         },
//         "chartData": chartData
//     };
//     return chartInfo;   
// }
// ///////////////////  FOR PANTAU PAGE ///////////////////////////////
// function getDataGraphPage(){
//   	var httpclient = new kony.net.HttpRequest();
//   	httpclient.onReadyStateChange=callbackHandlerChartAllPage;
//     httpclient.open(constants.HTTP_METHOD_GET, "http://ec2-54-255-205-124.ap-southeast-1.compute.amazonaws.com:3000/sensordata" );
//     httpclient.setRequestHeader("Content-Type", "application/json");
// 	httpclient.send();
// }
// function callbackHandlerChartAllPage(){
// //   	var valSuhu = [];
// //   	var timeSuhu = [];
// //   	var valKelembapan = [];
// //   	var timeKelembapan = [];
// //   	var valco2 = [];
// //   	var timeco2 = [];
// //   	var valKecang = [];
// //   	var timeKecang = [];
// //   	var valCuJan = [];
// //   	var timeCuJan = [];
//   	var valSuhu2 = [];
//   	var timeSuhu2 = [];
//   	var valKelembapan2 = [];
//   	var timeKelembapan2 = [];
//   	var valco22 = [];
//   	var timeco22 = [];
//   	var valKecang2 = [];
//   	var timeKecang2 = [];
//   	var valCuJan2 = [];
//   	var timeCuJan2 = [];
//   	var valSuhu3 = [];
//   	var timeSuhu3 = [];
//   	var valKelembapan3 = [];
//   	var timeKelembapan3 = [];
//   	var valco23 = [];
//   	var timeco23 = [];
//   	var valKecang3 = [];
//   	var timeKecang3 = [];
//   	var valCuJan3 = [];
//   	var timeCuJan3 = [];
//     if(this.readyState == constants.HTTP_READY_STATE_DONE){
//       	//var lastArah="";
//       	var lastArah2="";
//       	var lastArah3="";
//       	for (var i=0; i<this.response.length;i++){
// //           	if(this.response[i].sensorId==1){
// //             	valSuhu.push(this.response[i].value);
// //   				timeSuhu.push(this.response[i].timestamp);
// //             }else if(this.response[i].sensorId==2){
// //               	valKelembapan.push(this.response[i].value);
// //       			timeKelembapan.push(this.response[i].timestamp);
// //             }else if(this.response[i].sensorId==3){
// //               	valco2.push(this.response[i].value);
// //                 timeco2.push(this.response[i].timestamp);
// //             }else if(this.response[i].sensorId==4){
// //               	lastArah = this.response[i].value;
// //             }else if(this.response[i].sensorId==5){
// //               	valKecang.push(this.response[i].value);
// //   				timeKecang.push(this.response[i].timestamp);
// //             }else if(this.response[i].sensorId==6){
// //               	valCuJan.push(this.response[i].value);
// //       			timeCuJan.push(this.response[i].timestamp);
// //             }else 
//           	if(this.response[i].sensorId==7){
//             	valSuhu2.push(this.response[i].value);
//   				timeSuhu2.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==8){
//               	valKelembapan2.push(this.response[i].value);
//       			timeKelembapan2.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==9){
//               	valco22.push(this.response[i].value);
//                 timeco22.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==10){
//               	lastArah2 = this.response[i].value;
//             }else if(this.response[i].sensorId==11){
//               	valKecang2.push(this.response[i].value);
//   				timeKecang2.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==12){
//               	valCuJan2.push(this.response[i].value);
//       			timeCuJan2.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==13){
//             	valSuhu3.push(this.response[i].value);
//   				timeSuhu3.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==14){
//               	valKelembapan3.push(this.response[i].value);
//       			timeKelembapan3.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==15){
//               	valco23.push(this.response[i].value);
//                 timeco23.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==16){
//               	lastArah3 = this.response[i].value;
//             }else if(this.response[i].sensorId==17){
//               	valKecang3.push(this.response[i].value);
//   				timeKecang3.push(this.response[i].timestamp);
//             }else if(this.response[i].sensorId==18){
//               	valCuJan3.push(this.response[i].value);
//       			timeCuJan3.push(this.response[i].timestamp);
//             }
//         }
// //       	var lastSuhu = valSuhu[(valSuhu.length-1)];
// //       	var lasKelembapan = valKelembapan[(valKelembapan.length-1)];
// //         var lastCo2 = valco2[(valco2.length-1)];
// //         var lastAngin = valKecang[(valKecang.length-1)];
// //         var lastHujan = valCuJan[(valCuJan.length-1)];
// //       	var trans100 = kony.ui.makeAffineTransform();
// //         trans100.rotate(lastArah);
// //         frmPantauPage.imgCompas.animate(
// //         kony.ui.createAnimation({
// //             "100": {
// //                 "stepConfig": {
// //                     "timingFunction": kony.anim.EASE
// //                 },
// //                 "transform": trans100
// //             }
// //         }), {
// //             "delay": 0,
// //             "iterationCount": 1,
// //             "fillMode": kony.anim.FILL_MODE_FORWARDS,
// //             "duration": 0.5
// //         }, {
// //             "animationEnd": function(){}
// //         });
//       	var lastSuhu2 = valSuhu2[(valSuhu2.length-1)];
//       	var lasKelembapan2 = valKelembapan2[(valKelembapan2.length-1)];
//         var lastCo22 = valco22[(valco22.length-1)];
//         var lastAngin2 = valKecang2[(valKecang2.length-1)];
//         var lastHujan2 = valCuJan2[(valCuJan2.length-1)];
//       	var trans1002 = kony.ui.makeAffineTransform();
//         trans1002.rotate(lastArah2);
//         frmPantauPage.imgCompas2.animate(
//         kony.ui.createAnimation({
//             "100": {
//                 "stepConfig": {
//                     "timingFunction": kony.anim.EASE
//                 },
//                 "transform": trans1002
//             }
//         }), {
//             "delay": 0,
//             "iterationCount": 1,
//             "fillMode": kony.anim.FILL_MODE_FORWARDS,
//             "duration": 0.5
//         }, {
//             "animationEnd": function(){}
//         });
//       	var lastSuhu3 = valSuhu3[(valSuhu3.length-1)];
//       	var lasKelembapan3 = valKelembapan3[(valKelembapan3.length-1)];
//         var lastCo23 = valco23[(valco23.length-1)];
//         var lastAngin3 = valKecang3[(valKecang3.length-1)];
//         var lastHujan3 = valCuJan3[(valCuJan3.length-1)];
//       	var trans1003 = kony.ui.makeAffineTransform();
//         trans1003.rotate(lastArah3);
//         frmPantauPage.imgCompas3.animate(
//         kony.ui.createAnimation({
//             "100": {
//                 "stepConfig": {
//                     "timingFunction": kony.anim.EASE
//                 },
//                 "transform": trans1003
//             }
//         }), {
//             "delay": 0,
//             "iterationCount": 1,
//             "fillMode": kony.anim.FILL_MODE_FORWARDS,
//             "duration": 0.5
//         }, {
//             "animationEnd": function(){}
//         });
// //       	frmPantauPage.lblSuhu1.text = lastSuhu.toFixed(2);
// //       	frmPantauPage.lblCO21.text = lastCo2.toFixed(2);
// //         frmPantauPage.lblKelembapan1.text = lasKelembapan.toFixed(2);
// //         frmPantauPage.lblAngin1.text = lastAngin.toFixed(2);
// //         frmPantauPage.lblHujan1.text = lastHujan.toFixed(2);
//       	frmPantauPage.lblSuhu2.text = lastSuhu2.toFixed(2);
//       	frmPantauPage.lblCO22.text = lastCo22.toFixed(2);
//         frmPantauPage.lblKelembapan2.text = lasKelembapan2.toFixed(2);
//         frmPantauPage.lblAngin2.text = lastAngin2.toFixed(2);
//         frmPantauPage.lblHujan2.text = lastHujan2.toFixed(2);
//       	frmPantauPage.lblSuhu3.text = lastSuhu3.toFixed(2);
//       	frmPantauPage.lblCO23.text = lastCo23.toFixed(2);
//         frmPantauPage.lblKelembapan3.text = lasKelembapan3.toFixed(2);
//         frmPantauPage.lblAngin3.text = lastAngin3.toFixed(2);
//         frmPantauPage.lblHujan3.text = lastHujan3.toFixed(2);
// //     	var chartSuhu = {
// //             "rowNames": {
// //                 "values": timeSuhu
// //             },
// //             "columnNames": {
// //                 "values": ["suhu"]
// //             },
// //             "data": {
// //                 "suhu": valSuhu
// //             }
// //         };
// //         var chartKelembapan = {
// //             "rowNames": {
// //                 "values": timeKelembapan
// //             },
// //             "columnNames": {
// //                 "values": ["Kelembapan"]
// //             },
// //             "data": {
// //                 "Kelembapan": valKelembapan
// //             }
// //         };
// //         var chartCO2 = {
// //             "rowNames": {
// //                 "values": timeco2
// //             },
// //             "columnNames": {
// //                 "values": ["CO2"]
// //             },
// //             "data": {
// //                 "CO2": valco2
// //             }
// //         };
// //         var chartKecepatanAngin = {
// //             "rowNames": {
// //                 "values": timeKecang
// //             },
// //             "columnNames": {
// //                 "values": ["KecepatanAngin"]
// //             },
// //             "data": {
// //                 "KecepatanAngin": valKecang
// //             }
// //         };
// //         var chartCurahHujan = {
// //             "rowNames": {
// //                 "values": timeCuJan
// //             },
// //             "columnNames": {
// //                 "values": ["CurahHujan"]
// //             },
// //             "data": {
// //                 "CurahHujan": valCuJan
// //             }
// //         };  
// //       	var suhu = kdv_createChartJSObject(chartSuhu);
// //       	var kelembapan= kdv_createChartJSObject(chartKelembapan);
// //       	var co2 = kdv_createChartJSObject(chartCO2);
// //       	var kecepatanAngin = kdv_createChartJSObject(chartKecepatanAngin);
// //       	var curahHujan = kdv_createChartJSObject(chartCurahHujan);
//       	var chartSuhu2 = {
//             "rowNames": {
//                 "values": timeSuhu2
//             },
//             "columnNames": {
//                 "values": ["suhu"]
//             },
//             "data": {
//                 "suhu": valSuhu2
//             }
//         };
//         var chartKelembapan2 = {
//             "rowNames": {
//                 "values": timeKelembapan2
//             },
//             "columnNames": {
//                 "values": ["Kelembapan"]
//             },
//             "data": {
//                 "Kelembapan": valKelembapan2
//             }
//         };
//         var chartCO22 = {
//             "rowNames": {
//                 "values": timeco22
//             },
//             "columnNames": {
//                 "values": ["CO2"]
//             },
//             "data": {
//                 "CO2": valco22
//             }
//         };
//         var chartKecepatanAngin2 = {
//             "rowNames": {
//                 "values": timeKecang2
//             },
//             "columnNames": {
//                 "values": ["KecepatanAngin"]
//             },
//             "data": {
//                 "KecepatanAngin": valKecang2
//             }
//         };
//         var chartCurahHujan2 = {
//             "rowNames": {
//                 "values": timeCuJan2
//             },
//             "columnNames": {
//                 "values": ["CurahHujan"]
//             },
//             "data": {
//                 "CurahHujan": valCuJan2
//             }
//         };  
//       	var suhu2 = kdv_createChartJSObject(chartSuhu2);
//       	var kelembapan2= kdv_createChartJSObject(chartKelembapan2);
//       	var co22 = kdv_createChartJSObject(chartCO22);
//       	var kecepatanAngin2 = kdv_createChartJSObject(chartKecepatanAngin2);
//       	var curahHujan2 = kdv_createChartJSObject(chartCurahHujan2);
//       	var chartSuhu3 = {
//             "rowNames": {
//                 "values": timeSuhu3
//             },
//             "columnNames": {
//                 "values": ["suhu"]
//             },
//             "data": {
//                 "suhu": valSuhu3
//             }
//         };
//         var chartKelembapan3 = {
//             "rowNames": {
//                 "values": timeKelembapan3
//             },
//             "columnNames": {
//                 "values": ["Kelembapan"]
//             },
//             "data": {
//                 "Kelembapan": valKelembapan3
//             }
//         };
//         var chartCO23 = {
//             "rowNames": {
//                 "values": timeco23
//             },
//             "columnNames": {
//                 "values": ["CO2"]
//             },
//             "data": {
//                 "CO2": valco23
//             }
//         };
//         var chartKecepatanAngin3 = {
//             "rowNames": {
//                 "values": timeKecang3
//             },
//             "columnNames": {
//                 "values": ["KecepatanAngin"]
//             },
//             "data": {
//                 "KecepatanAngin": valKecang3
//             }
//         };
//         var chartCurahHujan3 = {
//             "rowNames": {
//                 "values": timeCuJan3
//             },
//             "columnNames": {
//                 "values": ["CurahHujan"]
//             },
//             "data": {
//                 "CurahHujan": valCuJan3
//             }
//         };  
//       	var suhu3 = kdv_createChartJSObject(chartSuhu3);
//       	var kelembapan3= kdv_createChartJSObject(chartKelembapan3);
//       	var co23 = kdv_createChartJSObject(chartCO23);
//       	var kecepatanAngin3 = kdv_createChartJSObject(chartKecepatanAngin3);
//       	var curahHujan3 = kdv_createChartJSObject(chartCurahHujan3);
// //       	var chartWidget1 = new kony.ui.Chart2D3D({
// //         "id": "chartid1",
// //         "isVisible": true
// //          }, {
// //         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
// //         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
// //         "containerWeight": 100
// //         },
// //         suhu);
// //       	var chartWidget2 = new kony.ui.Chart2D3D({
// //         "id": "chartid2",
// //         "isVisible": true
// //          }, {
// //         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
// //         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
// //         "containerWeight": 100
// //         },
// //         kelembapan);
// //       	var chartWidget3 = new kony.ui.Chart2D3D({
// //         "id": "chartid3",
// //         "isVisible": true
// //          }, {
// //         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
// //         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
// //         "containerWeight": 100
// //         },
// //         co2);
// //       	var chartWidget4 = new kony.ui.Chart2D3D({
// //         "id": "chartid4",
// //         "isVisible": true
// //          }, {
// //         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
// //         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
// //         "containerWeight": 100
// //         },
// //         kecepatanAngin);
// //       	var chartWidget5 = new kony.ui.Chart2D3D({
// //         "id": "chartid5",
// //         "isVisible": true
// //          }, {
// //         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
// //         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
// //         "containerWeight": 100
// //         },
// //         curahHujan);
//       	var chartWidget6 = new kony.ui.Chart2D3D({
//         "id": "chartid6",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         suhu2);
//       	var chartWidget7 = new kony.ui.Chart2D3D({
//         "id": "chartid7",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         kelembapan2);
//       	var chartWidget8 = new kony.ui.Chart2D3D({
//         "id": "chartid8",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         co22);
//       	var chartWidget9 = new kony.ui.Chart2D3D({
//         "id": "chartid9",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         kecepatanAngin2);
//       	var chartWidget10 = new kony.ui.Chart2D3D({
//         "id": "chartid10",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         curahHujan2);
//         var chartWidget11 = new kony.ui.Chart2D3D({
//         "id": "chartid11",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         suhu3);
//       	var chartWidget12 = new kony.ui.Chart2D3D({
//         "id": "chartid12",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         kelembapan3);
//       	var chartWidget13 = new kony.ui.Chart2D3D({
//         "id": "chartid13",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         co23);
//       	var chartWidget14 = new kony.ui.Chart2D3D({
//         "id": "chartid14",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         kecepatanAngin3);
//       	var chartWidget15 = new kony.ui.Chart2D3D({
//         "id": "chartid15",
//         "isVisible": true
//          }, {
//         "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
//         "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
//         "containerWeight": 100
//         },
//         curahHujan3);
// //       	frmPantauPage.chart1Point1.add(chartWidget1);
// //       	frmPantauPage.chart1Point3.add(chartWidget2);
// //   		frmPantauPage.chart1Point2.add(chartWidget3);
// //       	frmPantauPage.chart1Point5.add(chartWidget4);
// //       	frmPantauPage.chart1Point4.add(chartWidget5);
//       	frmPantauPage.chart2Point1.add(chartWidget6);
//       	frmPantauPage.chart2Point3.add(chartWidget7);
//   		frmPantauPage.chart2Point2.add(chartWidget8);
//       	frmPantauPage.chart2Point5.add(chartWidget9);
//       	frmPantauPage.chart2Point4.add(chartWidget10);
//       	frmPantauPage.chart3Point1.add(chartWidget11);
//       	frmPantauPage.chart3Point3.add(chartWidget12);
//   		frmPantauPage.chart3Point2.add(chartWidget13);
//       	frmPantauPage.chart3Point5.add(chartWidget14);
//       	frmPantauPage.chart3Point4.add(chartWidget15);
//       	var d = new Date();
//       	var tanggal = d.getDate();
//         var bulan = d.getMonth();
//         var tahun = d.getFullYear();
// 		var jam = d.getHours();
//         var menit = d.getMinutes();
//         var detik = d.getSeconds();
//       	//frmPantauPage.lblUpdate.text = tanggal+"/"+(bulan+1)+"/"+tahun+" ("+(jam-1)+":"+menit+" - "+jam+":"+menit+")";
//       	frmPantauPage.lblUpdate2.text = tanggal+"/"+(bulan+1)+"/"+tahun+" ("+(jam-1)+":"+menit+" - "+jam+":"+menit+")";
//       	frmPantauPage.lblUpdate3.text = tanggal+"/"+(bulan+1)+"/"+tahun+" ("+(jam-1)+":"+menit+" - "+jam+":"+menit+")";
// 	}  
// }