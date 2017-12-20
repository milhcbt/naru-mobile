var instansi = "DOMPET DHUAFA";

function sendSukarelawan() {
    var nama = frmSukarelawan.txtNama.text;
    var email = frmSukarelawan.txtAlamat.text;
    var ponsel = frmSukarelawan.txtPonsel.text;
    if (nama !== null && email !== null && ponsel !== null) {
        if ((frmSukarelawan.checkedSK.isVisible === true)) {
            var httpclient = new kony.net.HttpRequest();
            httpclient.onReadyStateChange = callbackHandlerSuka;
            httpclient.open(constants.HTTP_METHOD_POST, "http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/volunteer");
            httpclient.setRequestHeader("Content-Type", "application/json");
            var postdata = {
                "username": nama,
                "email": email,
                "phoneNumber": ponsel,
                "event_id": instansi,
                "token": "v"
            };
            var jsonStr1 = JSON.stringify(postdata);
            httpclient.send(jsonStr1);
        } else {
            alert("Mohon baca dan setujui S&K Sukarelawan");
        }
    } else {
        alert("Mohon lengkapi data...");
    }
}

function checkSkSuka() {
    frmSukarelawan.checkedSK.setVisibility(true);
    frmSukarelawan.uncheckedSK.setVisibility(false);
}

function uncheckSkSuka() {
    frmSukarelawan.checkedSK.setVisibility(false);
    frmSukarelawan.uncheckedSK.setVisibility(true);
}

function callbackHandlerSuka() {
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
        frmSukarelawan.flxThanks.setVisibility(true);
        frmSukarelawan.rtxTerimakasihVolunteer.text = "Permintaan anda kami teruskan ke Dompet Dhuafa untuk menjadi sukarelawan.";
    }
    kony.application.dismissLoadingScreen();
}

function hideThanks() {
    frmSukarelawan.flxThanks.setVisibility(false);
    flxNewsEvent.show();
    frmSukarelawan.txtNama.text = "";
    frmSukarelawan.txtAlamat.text = "";
    frmSukarelawan.txtPonsel.text = "";
}

function SKRelawan() {
    frmSK.lblNamaTragedy.text = frmDetailNews.lblTitle;
}