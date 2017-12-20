//Type your code here
var pinClick = "";
var locCharity="";
//function when click pin
function onPinClickCallBck(mapid, locationdata)
{
    pinClick = locationdata;
    frmMap.txtNamaPlace.text = locationdata.name;
    openFooter();
}

function onClickCallBck(map)
{
    closeFooter();
}

//function call in map
function callPlace(){
  	var id = pinClick.id;
    headers={};
    data= {
      "placeid":id
    };
  
   	var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("mapGoogleApi");
    getAdd.invokeOperation("detailPlace", headers, data, operationSuccess, operationFailure);
  
    function operationSuccess(response){
      if(response.opstatus === 0 ){
        if(response.status === "OK"){
          kony.phone.dial(response.result.formatted_phone_number);
        }else{
          alert("Sorry We haven't number for this place yet..");
        }
      }
    }
  
    function operationFailure(error) {
      	alert("Error Connection..");
    }
}

//get police
function getPoliceByLatLng(lat,lng){
  	var latlng = lat+","+lng;    
  	headers={};
    data= {
      "location":latlng
    };
  
   	var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("mapGoogleApi");
    getAdd.invokeOperation("policeBylatlng", headers, data, operationSuccess, operationFailure);
  
    function operationSuccess(response){
      if(response.opstatus === 0 ){
        if(response.status === "OK"){
          var pinPolice=[];
          for(var i=0;i<response.results.length;i++){
            var tempPolice = {
              	 id: response.results[i].place_id, 
              	 lat: response.results[i].geometry.location.lat, 
                 lon : response.results[i].geometry.location.lng,
                 image : "polisi.png",
                 desc: response.results[i].vicinity,
                 showcallout: false,
                 name: response.results[i].name
            };
            pinPolice.push(tempPolice);
          }
          frmMap.mapOri.addPins(pinPolice);
        }
      }
    }
  
    function operationFailure(error) {
    }
}

//get hospital
function getHospitalByLatlng(lat,lng){
  	var latlng = lat+","+lng;    
  	headers={};
    data= {
      "location":latlng
    };
  
   	var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("mapGoogleApi");
    getAdd.invokeOperation("hospitalByLatlng", headers, data, operationSuccess, operationFailure);
  
    function operationSuccess(response){
      if(response.opstatus === 0 ){
        if(response.status === "OK"){
          var pinPolice=[];
          for(var i=0;i<response.results.length;i++){
            var tempPolice = {
              	 id: response.results[i].place_id, 
              	 lat: response.results[i].geometry.location.lat, 
                 lon : response.results[i].geometry.location.lng,
                 image : "rs.png",
                 desc: response.results[i].vicinity,
                 showcallout: false,
                 name: response.results[i].name
            };
            pinPolice.push(tempPolice);
          }
          frmMap.mapOri.addPins(pinPolice);
        }
      }
    }
  
    function operationFailure(error) {
    }
}

//get fire department
function getAirportByLatLng(lat,lng){
  	var latlng = lat+","+lng;    
  	headers={};
    data= {
      "location":latlng
    };
  
   	var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("mapGoogleApi");
    getAdd.invokeOperation("airportByLatlng", headers, data, operationSuccess, operationFailure);
  
    function operationSuccess(response){
      if(response.opstatus === 0 ){
        if(response.status === "OK"){
          var pinPolice=[];
          for(var i=0;i<response.results.length;i++){
            var tempPolice = {
              	 id: response.results[i].place_id, 
              	 lat: response.results[i].geometry.location.lat, 
                 lon : response.results[i].geometry.location.lng,
                 image : "airport.png",
                 desc: response.results[i].vicinity,
                 showcallout: false,
                 name: response.results[i].name
            };
            pinPolice.push(tempPolice);
          }
          frmMap.mapOri.addPins(pinPolice);
        }
      }
    }
  
    function operationFailure(error) {
    }
}

//get fire department
function getAtmByLatlng(lat,lng){
  	var latlng = lat+","+lng;    
  	headers={};
    data= {
      "location":latlng
    };
  
   	var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("mapGoogleApi");
    getAdd.invokeOperation("ATMByLatlng", headers, data, operationSuccess, operationFailure);
  
    function operationSuccess(response){
      if(response.opstatus === 0 ){
        if(response.status === "OK"){
          var pinPolice=[];
          for(var i=0;i<response.results.length;i++){
            var tempPolice = {
              	 id: response.results[i].place_id, 
              	 lat: response.results[i].geometry.location.lat, 
                 lon : response.results[i].geometry.location.lng,
                 image : "atm.png",
                 desc: response.results[i].vicinity,
                 showcallout: false,
                 name: response.results[i].name
            };
            pinPolice.push(tempPolice);
          }
          frmMap.mapOri.addPins(pinPolice);
        }
      }
    }
  
    function operationFailure(error) {
    }
}

//fungsi untuk mencari point berdasarkan pencarian from
function geocode(param){
    headers={};
    data= {
      "address":param
    };
  
   	var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("mapGoogleApi");
    kony.application.showLoadingScreen("loadskin","",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "706970"});
    getAdd.invokeOperation("geocode", headers, data, operationSuccess, operationFailure);
  
    function operationSuccess(response){

      if(response.opstatus === 0 ){
        if(response.status === "OK"){
          frmMap.mapOri.zoomLevel=15;
          var id = response.results[0].address_components[0].long_name;
          var lokasi = response.results[0].formatted_address;
          var lat = response.results[0].geometry.location.lat;
          var long = response.results[0].geometry.location.lng;
          var locationData = [{
                   lat: lat, 
                   lon : long,
                   image : "from.png",
                   desc: lokasi,
                   name: id,
            	   showcallout: false
                }];
          frmMap.mapOri.locationData = locationData;
          getPoliceByLatLng(lat,long);
          getAirportByLatLng(lat, long);
          getAtmByLatlng(lat, long);
          getHospitalByLatlng(lat, long);
          frmMap.mapOri.onPinClick=onPinClickCallBck;
          frmMap.mapOri.onClick=onClickCallBck;
        }else{
          alert(" Gagal Menemukan Lokasi... ");
        }
      }else{
        alert("Koneksi Buruk..");
      }
      kony.application.dismissLoadingScreen();
    }
  
    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
        alert("Kesalahan server");
    }
}

//get number from id
function getNumber(id){  
  	headers={};
    data= {
      "placeid":id
    };
  
   	var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("mapGoogleApi");
    getAdd.invokeOperation("detailPlace", headers, data, operationSuccess, operationFailure);
  
    function operationSuccess(response){
      if(response.opstatus === 0 ){
        if(response.status === "OK"){
          alert(response.result.formatted_phone_number);
        }
      }
    }
  
    function operationFailure(error) {
    }
}

function openFooter(){
    frmMap.flxInfo.animate(
    kony.ui.createAnimation({
        "100": {
            "bottom": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": function(){}
    });
}

function closeFooter(){
  	frmMap.flxInfo.animate(
    kony.ui.createAnimation({
        "100": {
            "bottom": "-20%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": function(){}
    });
}

function cari(){
  frmMap.mapOri.clear();
  var awal = frmMap.txtFrom.text;
  var akhir = frmMap.txtTujuan.text;
  if(awal.length!==0){
    geocode(awal);
  }
  if(akhir.length!==0){
    geocode(akhir);
  }
}

function showPopup(){
  	frmMap.txtTitlePopup.text = pinClick.name;
    frmMap.txtDescPopup.text = pinClick.desc;
  	frmMap.flxHide.isVisible=true;  
}

function hidePopup(){
  	frmMap.flxHide.isVisible=false;
}