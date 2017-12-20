function formData(waktu, nilai){
  	 return ({
          "rowNames": {
              "values": waktu
          },
          "columnNames": {
              "values": ["CurahHujan"]
          },
          "data": {
              "CurahHujan": nilai
          }
      });
}

function getLastValue(arrTemp){
  	if(arrTemp.length>1){
      	return arrTemp[(arrTemp.length-1)];
    }else{
     	return false; 
    }
}

function setTime(){
	var d = new Date();
  	var tanggal = d.getDate();
    var bulan = d.getMonth();
    var tahun = d.getFullYear();
    var jam = d.getHours();
    var menit = d.getMinutes();
    var detik = d.getSeconds();
  	return (tanggal+"/"+(bulan+1)+"/"+tahun+" ("+(jam-1)+":"+menit+" - "+jam+":"+menit+")");
}

function formChart(value){
  	return new kony.ui.Chart2D3D({
      "id": "chartid1",
      "isVisible": true
       }, {
      "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "containerWeight": 100
      },
    value);
}

//creating chart object with chart properties and chart data...
function kdv_createChartJSObject(chartData)
{
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 100,
            "layerArea": {
                "background": {
                    "color": ["0xffffffff"]
                }
            },
            "axis": {
                "type": ["xAxis", "yAxis", "secondaryYAxis"],
                "xAxis": {
                    "axisLine": {
                        "crossOtherAxisAt": "value",
                        "value": 0,
                        "line": {
                            "color": ["0x00000ff"]
                        }
                    },
                    "labels": {
                        "visible": false,
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "minor": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "placement": "atLabels"
                    }
                },
                "yAxis": {
                    "scale": {
                        "type": "log10",
                        "offset": {
                            "value": [0, 0],
                            "type": "pixels"
                        }
                    },
                    "labels": {
                        "visible": false
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "minor": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "placement": "atLabels"
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "line": {
                        "color": ["0x8b7fc0ff"]
                    }
                },
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0xbc7b82ff"]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "areaChart"],
            "areaChart": {
                "columnId": [0],
                "lineType": "smooth",
                "area": {
                    "fillType": ["color"],
                    "transparency": [0],
                    "colorAboveXAxis": ["#a3c858"]
                },
                "line": {
                    "color": ["0x5c5ddc32", "0x6845aeff", "0xc15760b4"],
                    "width": [2],
                    "transparency": [30, 30, 30]
                },
                "plotPoints": {
                    "visible": false
                }
            }
        },
        "chartData": chartData
    };
    return chartInfo;   
}

function getData(){
  	var httpclient = new kony.net.HttpRequest();
  	httpclient.onReadyStateChange=callbackHandlerChartAll;
    httpclient.open(constants.HTTP_METHOD_GET, "http://ec2-54-255-205-124.ap-southeast-1.compute.amazonaws.com:3000/sensordata" );
    httpclient.setRequestHeader("Content-Type", "application/json");
	httpclient.send();
}

function callbackHandlerChartAll(){
  	var valSuhu = [];
  	var timeSuhu = [];
  	var valKelembapan = [];
  	var timeKelembapan = [];
  	var valco2 = [];
  	var timeco2 = [];
  	var valKecang = [];
  	var timeKecang = [];
  	var valCuJan = [];
  	var timeCuJan = [];
  	
  	var valSuhu2 = [];
  	var timeSuhu2 = [];
  	var valKelembapan2 = [];
  	var timeKelembapan2 = [];
  	var valco22 = [];
  	var timeco22 = [];
  	var valKecang2 = [];
  	var timeKecang2 = [];
  	var valCuJan2 = [];
  	var timeCuJan2 = [];
  
  	var valSuhu3 = [];
  	var timeSuhu3 = [];
  	var valKelembapan3 = [];
  	var timeKelembapan3 = [];
  	var valco23 = [];
  	var timeco23 = [];
  	var valKecang3 = [];
  	var timeKecang3 = [];
  	var valCuJan3 = [];
  	var timeCuJan3 = [];
  	
    if(this.readyState == constants.HTTP_READY_STATE_DONE){
      	var lastArah=false;
      	var lastArah2=false;
      	var lastArah3=false;
      	
      	for (var i=0; i<this.response.length;i++){
          	if(this.response[i].sensorId==1){
            	valSuhu.push(this.response[i].value);
  				timeSuhu.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==2){
              	valKelembapan.push(this.response[i].value);
      			timeKelembapan.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==3){
              	valco2.push(this.response[i].value);
                timeco2.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==4){
              	lastArah = this.response[i].value;
            }else if(this.response[i].sensorId==5){
              	valKecang.push(this.response[i].value);
  				timeKecang.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==6){
              	valCuJan.push(this.response[i].value);
      			timeCuJan.push(this.response[i].timestamp);
			}else if(this.response[i].sensorId==7){
            	valSuhu2.push(this.response[i].value);
  				timeSuhu2.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==8){
              	valKelembapan2.push(this.response[i].value);
      			timeKelembapan2.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==9){
              	valco22.push(this.response[i].value);
                timeco22.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==10){
              	lastArah2 = this.response[i].value;
            }else if(this.response[i].sensorId==11){
              	valKecang2.push(this.response[i].value);
  				timeKecang2.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==12){
              	valCuJan2.push(this.response[i].value);
      			timeCuJan2.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==13){
            	valSuhu3.push(this.response[i].value);
  				timeSuhu3.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==14){
              	valKelembapan3.push(this.response[i].value);
      			timeKelembapan3.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==15){
              	valco23.push(this.response[i].value);
                timeco23.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==16){
              	lastArah3 = this.response[i].value;
            }else if(this.response[i].sensorId==17){
              	valKecang3.push(this.response[i].value);
  				timeKecang3.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==18){
              	valCuJan3.push(this.response[i].value);
      			timeCuJan3.push(this.response[i].timestamp);
            }
        }
      	
      	var lastSuhu = getLastValue(valSuhu);
      	if(lastSuhu !== false){
        	flxNewsEvent.lblSuhu1.text = lastSuhu.toFixed(2);  
          	var chartSuhu = formData(timeSuhu, valSuhu);
      		var suhu = kdv_createChartJSObject(chartSuhu);
          	var chartWidget1 = formChart(suhu);
          	flxNewsEvent.chart1Point1.add(chartWidget1);
        }
      
      	var lasKelembapan = getLastValue(valKelembapan);
      	if(lasKelembapan !== false){
        	flxNewsEvent.lblKelembapan1.text = lasKelembapan.toFixed(2);  
          	var chartKelembapan = formData(timeKelembapan, valKelembapan);
      		var kelembapan = kdv_createChartJSObject(chartKelembapan);
          	var chartWidget2 = formChart(kelembapan);
          	flxNewsEvent.chart1Point3.add(chartWidget2);
        }
      
        var lastCo2 = getLastValue(valco2);
        if(lastCo2 !== false){
          	flxNewsEvent.lblCO21.text = lastCo2.toFixed(2);
          	var chartCO2 = formData(timeco2, valco2);
      		var CO2 = kdv_createChartJSObject(chartCO2);
          	var chartWidget3 = formChart(CO2);
          	flxNewsEvent.chart1Point2.add(chartWidget3);
        }
      
      	var lastAngin = getLastValue(valKecang);
      	if(lastAngin !== false){
        	flxNewsEvent.lblAngin1.text = lastAngin.toFixed(2);  
          	var chartAngin = formData(timeKecang, valKecang);
      		var angin = kdv_createChartJSObject(chartAngin);
          	var chartWidget4 = formChart(angin);
          	flxNewsEvent.chart1Point5.add(chartWidget4);
        }  
      
      	var lastHujan = getLastValue(valCuJan);
      	if(lastHujan !== false){
        	flxNewsEvent.lblHujan1.text = lastHujan.toFixed(2);  
          	var chartHujan = formData(timeCuJan, valCuJan);
      		var hujan = kdv_createChartJSObject(chartHujan);
          	var chartWidget5 = formChart(hujan);
          	flxNewsEvent.chart1Point4.add(chartWidget5);
        }
      	
      	if(lastArah !== false){
        	var trans100 = kony.ui.makeAffineTransform();
            trans100.rotate(lastArah);
            flxNewsEvent.imgCompas.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "transform": trans100
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": function(){}
            });  
        }
      	flxNewsEvent.lblUpdate.text = setTime();
      
      // chart dua
      var lastSuhu2 = getLastValue(valSuhu2);
      	if(lastSuhu2 !== false){
        	flxNewsEvent.lblSuhu2.text = lastSuhu2.toFixed(2);  
          	var chartSuhu2 = formData(timeSuhu2, valSuhu2);
      		var suhu2 = kdv_createChartJSObject(chartSuhu2);
          	var chartWidget6 = formChart(suhu2);
          	flxNewsEvent.chart2Point1.add(chartWidget6);
        }
      
      	var lasKelembapan2 = getLastValue(valKelembapan2);
      	if(lasKelembapan2 !== false){
        	flxNewsEvent.lblKelembapan2.text = lasKelembapan2.toFixed(2);  
          	var chartKelembapan2 = formData(timeKelembapan2, valKelembapan2);
      		var kelembapan2 = kdv_createChartJSObject(chartKelembapan2);
          	var chartWidget7 = formChart(kelembapan2);
          	flxNewsEvent.chart2Point3.add(chartWidget7);
        }
      
        var lastCo22 = getLastValue(valco22);
        if(lastCo22 !== false){
          	flxNewsEvent.lblCO22.text = lastCo22.toFixed(2);
          	var chartCO22 = formData(timeco22, valco22);
      		var CO22 = kdv_createChartJSObject(chartCO22);
          	var chartWidget8 = formChart(CO22);
          	flxNewsEvent.chart2Point2.add(chartWidget8);
        }
      
      	var lastAngin2 = getLastValue(valKecang2);
      	if(lastAngin2 !== false){
        	flxNewsEvent.lblAngin2.text = lastAngin2.toFixed(2);  
          	var chartAngin2 = formData(timeKecang2, valKecang2);
      		var angin2 = kdv_createChartJSObject(chartAngin2);
          	var chartWidget9 = formChart(angin2);
          	flxNewsEvent.chart2Point5.add(chartWidget9);
        }  
      
      	var lastHujan2 = getLastValue(valCuJan2);
      	if(lastHujan2 !== false){
        	flxNewsEvent.lblHujan2.text = lastHujan2.toFixed(2);  
          	var chartHujan2 = formData(timeCuJan2, valCuJan2);
      		var hujan2 = kdv_createChartJSObject(chartHujan2);
          	var chartWidget10 = formChart(hujan2);
          	flxNewsEvent.chart2Point4.add(chartWidget10);
        }
      	
      	if(lastArah2 !== false){
        	var trans1002 = kony.ui.makeAffineTransform();
            trans1002.rotate(lastArah2);
            flxNewsEvent.imgCompas2.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "transform": trans1002
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": function(){}
            });  
        }
      	flxNewsEvent.lblUpdate2.text = setTime();
      
      //chart tiga
      var lastSuhu3 = getLastValue(valSuhu3);
      	if(lastSuhu3 !== false){
        	flxNewsEvent.lblSuhu3.text = lastSuhu3.toFixed(2);  
          	var chartSuhu3 = formData(timeSuhu3, valSuhu3);
      		var suhu3 = kdv_createChartJSObject(chartSuhu3);
          	var chartWidget11 = formChart(suhu3);
          	flxNewsEvent.chart3Point1.add(chartWidget11);
        }
      
      	var lasKelembapan3 = getLastValue(valKelembapan3);
      	if(lasKelembapan3 !== false){
        	flxNewsEvent.lblKelembapan3.text = lasKelembapan3.toFixed(2);  
          	var chartKelembapan3 = formData(timeKelembapan3, valKelembapan3);
      		var kelembapan3 = kdv_createChartJSObject(chartKelembapan3);
          	var chartWidget12 = formChart(kelembapan3);
          	flxNewsEvent.chart3Point3.add(chartWidget12);
        }
      
        var lastCo23 = getLastValue(valco23);
        if(lastCo23 !== false){
          	flxNewsEvent.lblCO23.text = lastCo23.toFixed(2);
          	var chartCO23 = formData(timeco23, valco23);
      		var CO23 = kdv_createChartJSObject(chartCO23);
          	var chartWidget13 = formChart(CO23);
          	flxNewsEvent.chart3Point2.add(chartWidget13);
        }
      
      	var lastAngin3 = getLastValue(valKecang3);
      	if(lastAngin3 !== false){
        	flxNewsEvent.lblAngin3.text = lastAngin3.toFixed(2);  
          	var chartAngin3 = formData(timeKecang3, valKecang3);
      		var angin3 = kdv_createChartJSObject(chartAngin3);
          	var chartWidget14 = formChart(angin3);
          	flxNewsEvent.chart3Point5.add(chartWidget14);
        }  
      
      	var lastHujan3 = getLastValue(valCuJan3);
      	if(lastHujan3 !== false){
        	flxNewsEvent.lblHujan3.text = lastHujan3.toFixed(2);  
          	var chartHujan3 = formData(timeCuJan3, valCuJan3);
      		var hujan3 = kdv_createChartJSObject(chartHujan3);
          	var chartWidget15 = formChart(hujan3);
          	flxNewsEvent.chart3Point4.add(chartWidget15);
        }
      
      	if(lastArah3 !== false){
        	var trans1003 = kony.ui.makeAffineTransform();
            trans1003.rotate(lastArah3);
            flxNewsEvent.imgCompas3.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "transform": trans1003
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": function(){}
            });  
        }
      	flxNewsEvent.lblUpdate3.text = setTime();
	}  
}

///////////////////  FOR PANTAU PAGE ///////////////////////////////

function getDataGraphPage(){
  	var httpclient = new kony.net.HttpRequest();
  	httpclient.onReadyStateChange=callbackHandlerChartAllPage;
    httpclient.open(constants.HTTP_METHOD_GET, "http://ec2-54-255-205-124.ap-southeast-1.compute.amazonaws.com:3000/sensordata" );
    httpclient.setRequestHeader("Content-Type", "application/json");
	httpclient.send();
}

function callbackHandlerChartAllPage(){
  	var valSuhu = [];
    var timeSuhu = [];
    var valKelembapan = [];
    var timeKelembapan = [];
    var valco2 = [];
    var timeco2 = [];
    var valKecang = [];
    var timeKecang = [];
    var valCuJan = [];
    var timeCuJan = [];
    
    var valSuhu2 = [];
    var timeSuhu2 = [];
    var valKelembapan2 = [];
    var timeKelembapan2 = [];
    var valco22 = [];
    var timeco22 = [];
    var valKecang2 = [];
    var timeKecang2 = [];
    var valCuJan2 = [];
    var timeCuJan2 = [];
  
    var valSuhu3 = [];
    var timeSuhu3 = [];
    var valKelembapan3 = [];
    var timeKelembapan3 = [];
    var valco23 = [];
    var timeco23 = [];
    var valKecang3 = [];
    var timeKecang3 = [];
    var valCuJan3 = [];
    var timeCuJan3 = [];
    
    if(this.readyState == constants.HTTP_READY_STATE_DONE){
        var lastArah=false;
        var lastArah2=false;
        var lastArah3=false;
        
        for (var i=0; i<this.response.length;i++){
            if(this.response[i].sensorId==1){
              valSuhu.push(this.response[i].value);
          timeSuhu.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==2){
                valKelembapan.push(this.response[i].value);
            timeKelembapan.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==3){
                valco2.push(this.response[i].value);
                timeco2.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==4){
                lastArah = this.response[i].value;
            }else if(this.response[i].sensorId==5){
                valKecang.push(this.response[i].value);
          timeKecang.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==6){
                valCuJan.push(this.response[i].value);
            timeCuJan.push(this.response[i].timestamp);
      }else if(this.response[i].sensorId==7){
              valSuhu2.push(this.response[i].value);
          timeSuhu2.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==8){
                valKelembapan2.push(this.response[i].value);
            timeKelembapan2.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==9){
                valco22.push(this.response[i].value);
                timeco22.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==10){
                lastArah2 = this.response[i].value;
            }else if(this.response[i].sensorId==11){
                valKecang2.push(this.response[i].value);
          timeKecang2.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==12){
                valCuJan2.push(this.response[i].value);
            timeCuJan2.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==13){
              valSuhu3.push(this.response[i].value);
          timeSuhu3.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==14){
                valKelembapan3.push(this.response[i].value);
            timeKelembapan3.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==15){
                valco23.push(this.response[i].value);
                timeco23.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==16){
                lastArah3 = this.response[i].value;
            }else if(this.response[i].sensorId==17){
                valKecang3.push(this.response[i].value);
          timeKecang3.push(this.response[i].timestamp);
            }else if(this.response[i].sensorId==18){
                valCuJan3.push(this.response[i].value);
            timeCuJan3.push(this.response[i].timestamp);
            }
        }
        
        var lastSuhu = getLastValue(valSuhu);
        if(lastSuhu !== false){
          frmPantauPage.lblSuhu1.text = lastSuhu.toFixed(2);  
            var chartSuhu = formData(timeSuhu, valSuhu);
          var suhu = kdv_createChartJSObject(chartSuhu);
            var chartWidget1 = formChart(suhu);
            frmPantauPage.chart1Point1.add(chartWidget1);
        }
      
        var lasKelembapan = getLastValue(valKelembapan);
        if(lasKelembapan !== false){
          frmPantauPage.lblKelembapan1.text = lasKelembapan.toFixed(2);  
            var chartKelembapan = formData(timeKelembapan, valKelembapan);
          var kelembapan = kdv_createChartJSObject(chartKelembapan);
            var chartWidget2 = formChart(kelembapan);
            frmPantauPage.chart1Point3.add(chartWidget2);
        }
      
        var lastCo2 = getLastValue(valco2);
        if(lastCo2 !== false){
            frmPantauPage.lblCO21.text = lastCo2.toFixed(2);
            var chartCO2 = formData(timeco2, valco2);
          var CO2 = kdv_createChartJSObject(chartCO2);
            var chartWidget3 = formChart(CO2);
            frmPantauPage.chart1Point2.add(chartWidget3);
        }
      
        var lastAngin = getLastValue(valKecang);
        if(lastAngin !== false){
          frmPantauPage.lblAngin1.text = lastAngin.toFixed(2);  
            var chartAngin = formData(timeKecang, valKecang);
          var angin = kdv_createChartJSObject(chartAngin);
            var chartWidget4 = formChart(angin);
            frmPantauPage.chart1Point5.add(chartWidget4);
        }  
      
        var lastHujan = getLastValue(valCuJan);
        if(lastHujan !== false){
          frmPantauPage.lblHujan1.text = lastHujan.toFixed(2);  
            var chartHujan = formData(timeCuJan, valCuJan);
          var hujan = kdv_createChartJSObject(chartHujan);
            var chartWidget5 = formChart(hujan);
            frmPantauPage.chart1Point4.add(chartWidget5);
        }
        
        if(lastArah !== false){
          var trans100 = kony.ui.makeAffineTransform();
            trans100.rotate(lastArah);
            frmPantauPage.imgCompas.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "transform": trans100
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": function(){}
            });  
        }
        frmPantauPage.lblUpdate.text = setTime();
      
      // chart dua
      var lastSuhu2 = getLastValue(valSuhu2);
        if(lastSuhu2 !== false){
          frmPantauPage.lblSuhu2.text = lastSuhu2.toFixed(2);  
            var chartSuhu2 = formData(timeSuhu2, valSuhu2);
          var suhu2 = kdv_createChartJSObject(chartSuhu2);
            var chartWidget6 = formChart(suhu2);
            frmPantauPage.chart2Point1.add(chartWidget6);
        }
      
        var lasKelembapan2 = getLastValue(valKelembapan2);
        if(lasKelembapan2 !== false){
          frmPantauPage.lblKelembapan2.text = lasKelembapan2.toFixed(2);  
            var chartKelembapan2 = formData(timeKelembapan2, valKelembapan2);
          var kelembapan2 = kdv_createChartJSObject(chartKelembapan2);
            var chartWidget7 = formChart(kelembapan2);
            frmPantauPage.chart2Point3.add(chartWidget7);
        }
      
        var lastCo22 = getLastValue(valco22);
        if(lastCo22 !== false){
            frmPantauPage.lblCO22.text = lastCo22.toFixed(2);
            var chartCO22 = formData(timeco22, valco22);
          var CO22 = kdv_createChartJSObject(chartCO22);
            var chartWidget8 = formChart(CO22);
            frmPantauPage.chart2Point2.add(chartWidget8);
        }
      
        var lastAngin2 = getLastValue(valKecang2);
        if(lastAngin2 !== false){
          frmPantauPage.lblAngin2.text = lastAngin2.toFixed(2);  
            var chartAngin2 = formData(timeKecang2, valKecang2);
          var angin2 = kdv_createChartJSObject(chartAngin2);
            var chartWidget9 = formChart(angin2);
            frmPantauPage.chart2Point5.add(chartWidget9);
        }  
      
        var lastHujan2 = getLastValue(valCuJan2);
        if(lastHujan2 !== false){
          frmPantauPage.lblHujan2.text = lastHujan2.toFixed(2);  
            var chartHujan2 = formData(timeCuJan2, valCuJan2);
          var hujan2 = kdv_createChartJSObject(chartHujan2);
            var chartWidget10 = formChart(hujan2);
            frmPantauPage.chart2Point4.add(chartWidget10);
        }
        
        if(lastArah2 !== false){
          var trans1002 = kony.ui.makeAffineTransform();
            trans1002.rotate(lastArah2);
            frmPantauPage.imgCompas2.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "transform": trans1002
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": function(){}
            });  
        }
        frmPantauPage.lblUpdate2.text = setTime();
      
      //chart tiga
      var lastSuhu3 = getLastValue(valSuhu3);
        if(lastSuhu3 !== false){
          frmPantauPage.lblSuhu3.text = lastSuhu3.toFixed(2);  
            var chartSuhu3 = formData(timeSuhu3, valSuhu3);
          var suhu3 = kdv_createChartJSObject(chartSuhu3);
            var chartWidget11 = formChart(suhu3);
            frmPantauPage.chart3Point1.add(chartWidget11);
        }
      
        var lasKelembapan3 = getLastValue(valKelembapan3);
        if(lasKelembapan3 !== false){
          frmPantauPage.lblKelembapan3.text = lasKelembapan3.toFixed(2);  
            var chartKelembapan3 = formData(timeKelembapan3, valKelembapan3);
          var kelembapan3 = kdv_createChartJSObject(chartKelembapan3);
            var chartWidget12 = formChart(kelembapan3);
            frmPantauPage.chart3Point3.add(chartWidget12);
        }
      
        var lastCo23 = getLastValue(valco23);
        if(lastCo23 !== false){
            frmPantauPage.lblCO23.text = lastCo23.toFixed(2);
            var chartCO23 = formData(timeco23, valco23);
          var CO23 = kdv_createChartJSObject(chartCO23);
            var chartWidget13 = formChart(CO23);
            frmPantauPage.chart3Point2.add(chartWidget13);
        }
      
        var lastAngin3 = getLastValue(valKecang3);
        if(lastAngin3 !== false){
          frmPantauPage.lblAngin3.text = lastAngin3.toFixed(2);  
            var chartAngin3 = formData(timeKecang3, valKecang3);
          var angin3 = kdv_createChartJSObject(chartAngin3);
            var chartWidget14 = formChart(angin3);
            frmPantauPage.chart3Point5.add(chartWidget14);
        }  
      
        var lastHujan3 = getLastValue(valCuJan3);
        if(lastHujan3 !== false){
          frmPantauPage.lblHujan3.text = lastHujan3.toFixed(2);  
            var chartHujan3 = formData(timeCuJan3, valCuJan3);
          var hujan3 = kdv_createChartJSObject(chartHujan3);
            var chartWidget15 = formChart(hujan3);
            frmPantauPage.chart3Point4.add(chartWidget15);
        }
      
        if(lastArah3 !== false){
          var trans1003 = kony.ui.makeAffineTransform();
            trans1003.rotate(lastArah3);
            frmPantauPage.imgCompas3.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "transform": trans1003
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
            }, {
                "animationEnd": function(){}
            });  
        }
        frmPantauPage.lblUpdate3.text = setTime();
  }  
}

