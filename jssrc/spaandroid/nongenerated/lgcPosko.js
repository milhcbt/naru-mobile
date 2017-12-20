//Type your code here
var pilihan = "";

function callbackHandlerCamp() {
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
        for (var i = 0; i < this.response.length; i++) {
            getTitik(this.response[i].location, "camp");
        }
    } else {}
    kony.application.dismissLoadingScreen();
}

function getCampp() {
    var request = new kony.net.HttpRequest();
    request.onReadyStateChange = callbackHandlerCamp;
    request.open(constants.HTTP_METHOD_GET, "http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/important-data/camp");
    request.send();
}

function getPoskos() {
    var request = new kony.net.HttpRequest();
    request.onReadyStateChange = callbackHandlerPosko;
    request.open(constants.HTTP_METHOD_GET, "http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/important-data/posko");
    request.send();
}

function callbackHandlerPosko() {
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
        for (var i = 0; i < this.response.length; i++) {
            getTitik(this.response[i].location, "posko");
        }
    } else {}
    kony.application.dismissLoadingScreen();
}

function getTitik(atrib, status) {
    headers = {};
    data = {
        address: atrib
    };
    var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("mapGoogleApi");
    getAdd.invokeOperation("geocode", headers, data, operationSuccess, operationFailure);

    function operationSuccess(response) {
        frmCampNPosko.mapPosko.clear();
        if (response.opstatus === 0) {
            var locationData = "";
            if (status == "posko") {
                locationData = {
                    lat: response.results[0].geometry.location.lat,
                    lon: response.results[0].geometry.location.lng,
                    image: "poskob.png",
                    desc: response.results[0].formatted_address
                };
            } else {
                locationData = {
                    lat: response.results[0].geometry.location.lat,
                    lon: response.results[0].geometry.location.lng,
                    image: "camppen.png",
                    desc: response.results[0].formatted_address
                };
            }
            frmCampNPosko.mapPosko.addPin(locationData);
            frmCampNPosko.mapPosko.navigateToLocation(locationData, false, false);
        }
    }

    function operationFailure(error) {
        alert("Koneksi Buruk");
    }
}

function klikPosko() {
    pilihan = 'posko';
    frmCampNPosko.show();
}

function klikCamp() {
    pilihan = 'camp';
    frmCampNPosko.show();
}

function cekPosko() {
    frmCampNPosko.mapPosko.zoomLevel = 12;
    if (pilihan == "posko") {
        getPoskos();
    } else if (pilihan == "camp") {
        getCampp();
    }
}