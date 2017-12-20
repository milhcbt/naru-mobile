var googleSite="";
function authGoogle(){
    googleSite = "http://ec2-13-250-53-217.ap-southeast-1.compute.amazonaws.com:8080/auth/google";
    kony.application.openURL(googleSite);
    kony.timer.schedule("mytimer12",timerFunc, 5, true);
}

function timerFunc(){
    var httpclient = new kony.net.HttpRequest();
    httpclient.onReadyStateChange=callbackHandlerAuthGoogle;
    httpclient.open(constants.HTTP_METHOD_GET, "http://ec2-13-250-53-217.ap-southeast-1.compute.amazonaws.com:8080/dataMedsos");
    httpclient.setRequestHeader("Content-Type", "application/json");
  	httpclient.send();
}

function callbackHandlerAuthGoogle(){
    if(this.readyState == constants.HTTP_READY_STATE_DONE){
      	if((this.response.message+"a") == "a"){
      	}else{
          	var email = this.response.message[0].google.email;
            var name = this.response.message[0].google.name;
            alert("anda masuk sebagai "+name);
            var httpclient = new kony.net.HttpRequest();
            httpclient.onReadyStateChange = function(){};
            httpclient.open(constants.HTTP_METHOD_GET, "http://ec2-13-250-53-217.ap-southeast-1.compute.amazonaws.com:8080/logout" );
            httpclient.setRequestHeader("Content-Type", "application/json");
            httpclient.send();
            kony.timer.cancel("mytimer12");
          	frmDonasi.txtNama.text = name;
          	frmDonasi.txtAlamat.text = email;
        }
  }  
}


function timerFuncSuka(){
    var httpclient = new kony.net.HttpRequest();
    httpclient.onReadyStateChange=callbackHandlerAuthGoogleSuka;
    httpclient.open(constants.HTTP_METHOD_GET, "http://ec2-13-250-53-217.ap-southeast-1.compute.amazonaws.com:8080/dataMedsos" );
    httpclient.setRequestHeader("Content-Type", "application/json");
  	httpclient.send();
}


function authGoogleSuka(){
    googleSite = "http://ec2-13-250-53-217.ap-southeast-1.compute.amazonaws.com:8080/auth/google";
    kony.application.openURL(googleSite);
    kony.timer.schedule("mytimer12",timerFuncSuka, 5, true);
}

function callbackHandlerAuthGoogleSuka(){
    if(this.readyState == constants.HTTP_READY_STATE_DONE){
      if((this.response.message+"a") == "a"){
      }else{
      		var email = this.response.message[0].google.email;
            var name = this.response.message[0].google.name;
            alert("anda masuk sebagai "+name);
            var httpclient = new kony.net.HttpRequest();
            httpclient.onReadyStateChange = function(){};
            httpclient.open(constants.HTTP_METHOD_GET, "http://ec2-13-250-53-217.ap-southeast-1.compute.amazonaws.com:8080/logout" );
            httpclient.setRequestHeader("Content-Type", "application/json");
            httpclient.send();
            kony.timer.cancel("mytimer12");
          	frmSukarelawan.txtNama.text = name;
          	frmSukarelawan.txtAlamat.text = email;
      }
  }  
}