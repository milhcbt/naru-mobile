// // function getPositionMudik(){
// //   	frmMudik.mainMap.zoomLevel=15;
// //     var positionoptions = {timeout: 15000}; // 15 secs 
// //     kony.location.getCurrentPosition(successcallbackMudik, errorcallbackMudik, positionoptions);
// // } 
// function getLocationMudik(){
//   	var httpclient = new kony.net.HttpRequest();
//     httpclient.onReadyStateChange=callbackHandlerGoogle;
//     httpclient.open(constants.HTTP_METHOD_GET, "http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/jalurmudik" );
//     httpclient.setRequestHeader("Content-Type", "application/json");
// 	httpclient.send();	
//     function callbackHandlerGoogle(){
//         if(this.readyState == constants.HTTP_READY_STATE_DONE){
//           var arrPolyline = [];
//           var kode_jalur="";
//           for(var i =0;i<(this.response.length-1);i++){
//             kode_jalur = this.response[i].kode_jalur;
//             if(this.response[i].kode_jalur != this.response[i+1].kode_jalur){
//               	var tempArrPolyline = {
//                     lat : this.response[i].from,
//                     lon : this.response[i].to
//                 }
//                 arrPolyline.push(tempArrPolyline);
//               	flxNewsEvent.mainMap.addPolyline ({
//                   id: kode_jalur,
//                   locations:arrPolyline,
//                   polylineConfig:{lineColor:"0x00A9A9A9", lineWidth:"2"}
//                 });
//               	arrPolyline = [];
//             }else{
//               	var tempArrPolyline = {
//                     lat : this.response[i].from,
//                     lon : this.response[i].to
//                 }
//                 arrPolyline.push(tempArrPolyline);
//             }
//           }
//           kode_jalur = this.response[this.response.length-1].kode_jalur; 
//           var tempArrPolyline = {
//               lat : this.response[this.response.length-1].from,
//               lon : this.response[this.response.length-1].to
//           }
//           arrPolyline.push(tempArrPolyline);
//           flxNewsEvent.mainMap.addPolyline ({
//               id: kode_jalur,
//               locations:arrPolyline,
//               polylineConfig:{lineColor:"0x00A9A9A9", lineWidth:"2"}
//           });
//         }
//     }
// }
// // function successcallbackMudik(position){
// //   lat = position.coords.latitude;
// //   lng = position.coords.longitude;
// //   getLocationMudik(lat,lng);
// // }
// // function errorcallbackMudik(positionerror){
// //     var errorMesg ;
// //     errorMesg =" Error Conection";
// //     alert(errorMesg);
// // }
// // function tujuanMudik(){
// //   var awal = frmMudik.txtFrom.text;
// //   var tujuan = frmMudik.txtTujuan.text;
// //   if((awal.length>=0)&&(tujuan.length>=0)){
// //     makeDirectionMudik(awal,tujuan);
// //   }else{
// //     alert("isi lokasi asal dan tujuan");
// //   }
// // }
// // function makeDirectionMudik(awal,tujuan){
// //   	frmMudik.mainMap.clear();
// //  	var httpclient = new kony.net.HttpRequest();
// //     httpclient.onReadyStateChange=callbackHandlerAlur;
// //     httpclient.open(constants.HTTP_METHOD_GET, "https://maps.googleapis.com/maps/api/directions/json?origin="+awal+"&destination="+tujuan+"&key=AIzaSyDhwhk9qWFi_tSuTvwovJCx2YgHmPBo9eE" );	
// //  	httpclient.setRequestHeader("Content-Type", "application/json");
// // 	httpclient.send();	
// //     function callbackHandlerAlur(){
// //         if(this.readyState == constants.HTTP_READY_STATE_DONE){
// //           var langkah = this.response.routes[0].legs[0].steps.length;
// //           var locationAwal = {
// //                lat: this.response.routes[0].legs[0].start_location.lat, 
// //                lon : this.response.routes[0].legs[0].start_location.lng,
// //                image : "from.png",
// //                desc: this.response.routes[0].legs[0].start_address,
// //           };
// //           var locationTujuan = {
// //                lat: this.response.routes[0].legs[0].end_location.lat, 
// //                lon : this.response.routes[0].legs[0].end_location.lng,
// //                image : "shape_copy.png",
// //                desc: this.response.routes[0].legs[0].end_address,
// //           };
// //           var arrPolyline = [];
// //           for(var i=0;i<langkah;i++){
// //             var tempArrPolyline = {
// //               lat : this.response.routes[0].legs[0].steps[i].start_location.lat,
// //               lon : this.response.routes[0].legs[0].steps[i].start_location.lng
// //             };
// //             arrPolyline.push(tempArrPolyline);
// //           }
// //           var tempArrPolyline = {
// //               lat : this.response.routes[0].legs[0].steps[langkah-1].start_location.lat,
// //               lon : this.response.routes[0].legs[0].steps[langkah-1].start_location.lng
// //           }
// //           arrPolyline.push(tempArrPolyline);
// //           frmMudik.mainMap.addPolyline ({
// //         	id: "polyid1",
// //         	startLocation:locationAwal,
// //         	endLocation:locationTujuan,
// //         	locations:arrPolyline,
// //         	polylineConfig:{lineColor:"0x0000ffff", lineWidth:"2"}
// //      	  });
// //         }
// //     }
// // }
function getViewMudik() {
    var urlConf = {
        URL: "http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/jalurmudik",
        requestMethod: constants.BROWSER_REQUEST_METHOD_GET
    };
    flxNewsEvent.browserMap.requestURLConfig = urlConf;
}