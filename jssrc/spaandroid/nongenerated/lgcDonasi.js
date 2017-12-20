//Type your code here
var emailDonasi = "";
var namaUserDonasi = "";
var noHpUserDonasi = "";
var jumlahDonasi = "";
var melaluiDonasi = "";
var tujuan = "";
var idTujuanDonasi = "";

function pilihTmoney() {
    var nama = frmDonasi.txtNama.text;
    var email = frmDonasi.txtAlamat.text;
    var ponsel = frmDonasi.txtPonsel.text;
    var jumlah = frmDonasi.txtJumlahDonasi.text;
    if (nama !== null && email !== null && ponsel !== null && jumlah !== null) {
        frmDonasi.flxBtnDuafa.setVisibility(true);
        frmDonasi.flxBtnPmi.setVisibility(false);
        frmDonasi.flxPopupInstansi.setVisibility(true);
        frmDonasi.flxMain.setEnabled(false);
    } else {
        alert("Mohon isi data terlebih dahulu");
    }
}

function getNamaTragedi() {
    frmDonasi.lblNamaTragedy.text = globeTitleDonasi;
}

function pilihCredit() {
    frmDonasi.flxBtnPmi.setVisibility(true);
    frmDonasi.flxBtnDuafa.setVisibility(false);
    gestureBrowserCC();
}

function tutupDonasi() {
    frmDonasi.flxPopupInstansi.setVisibility(false);
    frmDonasi.flxMain.setEnabled(true);
    frmDonasi.flxBtnDuafa.setVisibility(false);
    frmDonasi.flxBtnPmi.setVisibility(false);
    gestureBackDonasi();
}

function checkedSK() {
    frmDonasi.checkedSK.setVisibility(true);
    frmDonasi.uncheckedSK.setVisibility(false);
}

function uncheckedSK() {
    frmDonasi.checkedSK.setVisibility(false);
    frmDonasi.uncheckedSK.setVisibility(true);
}
/////////////////// INTEGRATION //////////////////////////////////
function getListInstansi() {
    headers = {};
    data = {};
    var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("listDonasi");
    kony.application.showLoadingScreen("loadskin", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "706970"
    });
    getAdd.invokeOperation("instansi", headers, data, operationSuccess, operationFailure);

    function operationSuccess(response) {
        if (response.opstatus === 0) {
            var arrInstansi = [];
            for (var i = 0; i < response.product.length; i++) {
                if (response.product[i].type == "DONATION" && response.product[i].name == "Dompet Dhuafa Kemanusiaan") {
                    var tempInstansi = {
                        code: response.product[i].code,
                        lblDonasi: response.product[i].name
                    };
                    arrInstansi.push(tempInstansi);
                }
            }
            frmDonasi.sgmInstansiDonasi.setVisibility(true);
            frmDonasi.sgmInstansiDonasi.removeAll();
            frmDonasi.sgmInstansiDonasi.addAll(arrInstansi);
        } else {}
        kony.application.dismissLoadingScreen();
    }

    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}

function pilihInstansi() {
    var obj = frmDonasi.sgmInstansiDonasi.selectedItems;
    var code = obj[0].code;
    var namaInstansi = obj[0].lblDonasi;
    frmDonasi.txtNamaDonasi.text = frmDonasi.txtNama.text;
    frmDonasi.txtEmailUserDonasi.text = frmDonasi.txtAlamat.text;
    frmDonasi.txtNoUserDonasi.text = frmDonasi.txtPonsel.text;
    frmDonasi.txtJumlah.text = frmDonasi.txtJumlahDonasi.text;
    frmDonasi.txtMelalui.text = namaInstansi;
    emailDonasi = frmDonasi.txtEmailUserDonasi.text;
    namaUserDonasi = frmDonasi.txtNamaDonasi.text;
    noHpUserDonasi = frmDonasi.txtNoUserDonasi.text;
    tujuan = code;
    idTujuanDonasi = globIdNews;
    jumlahDonasi = frmDonasi.txtJumlah.text;
}

function gestureBrowserCC() {
    frmDonasi.flxBrowserCC.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
}

function gestureCloseBrowserCC() {
    frmDonasi.flxBtnPmi.setVisibility(false);
    frmDonasi.flxBrowserCC.animate(kony.ui.createAnimation({
        "100": {
            "left": "100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
}

function initBrowserCC() {
    frmDonasi.flxBtnPmi.setVisibility(false);
    frmDonasi.flxBtnDuafa.setVisibility(false);
    frmDonasi.txtJumlahDonasi.text = "";
    frmDonasi.txtNama.text = "";
    frmDonasi.txtAlamat.text = "";
    frmDonasi.txtPonsel.text = "";
    var nama = frmDonasi.txtNama.text;
    var email = frmDonasi.txtAlamat.text;
    var ponsel = frmDonasi.txtPonsel.text;
    var jumlah = frmDonasi.txtJumlahDonasi.text;
    if (nama !== null && email !== null && ponsel !== null && jumlah !== null) {
        frmDonasi.flxBtnDuafa.setVisibility(true);
        frmDonasi.flxBtnPmi.setVisibility(false);
        frmDonasi.flxPopupInstansi.setVisibility(true);
        frmDonasi.flxMain.setEnabled(false);
    } else {
        alert("Mohon isi data terlebih dahulu");
    }
    frmDonasi.flxBrowserCC.animate(kony.ui.createAnimation({
        "100": {
            "left": "100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.00
    }, {
        "animationEnd": function() {}
    });
}

function postDonasi() {
    var pass = frmDonasi.tbPassTmoney.text;
    var pin = frmDonasi.tbPinTmoney.text;
    if (pass !== null && pin !== null) {
        if ((frmDonasi.checkedSK.isVisible === true)) {
            var httpclient = new kony.net.HttpRequest();
            httpclient.open(constants.HTTP_METHOD_POST, "http://ec2-54-255-179-65.ap-southeast-1.compute.amazonaws.com:9000/api/tmoney/donation");
            //     httpclient.setRequestHeader("Content-Type","multipart/form-data");
            httpclient.setRequestHeader("Authorization", "Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ==");
            httpclient.onReadyStateChange = callbackHandlerPostDonasi;
            var form = new kony.net.FormData();
            form.append("email", emailDonasi);
            form.append("password", pass);
            form.append("pin", pin);
            form.append("amount", jumlahDonasi);
            form.append("nama_lengkap", namaUserDonasi);
            form.append("no_hp", noHpUserDonasi);
            form.append("tujuan", tujuan);
            form.append("idNews", idTujuanDonasi);
            httpclient.send(form);
            frmDonasi.flxProgress.setVisibility(true);
        } else {
            alert("Mohon baca dan setujui S&K ketentuan Donasi");
        }
    } else {
        alert("Mohon lengkapi data..");
    }
}

function callbackHandlerPostDonasi() {
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
        if (this.response.data.resultCode === 0) {
            frmDonasi.flxProgress.setVisibility(false);
            frmDonasi.flxThanks.setVisibility(true);
            frmDonasi.rtxTerimakasihDonasi.text = "Donasi anda telah kami teruskan ke instansi terkait untuk penggalangan dana bencana tersebut";
        } else {
            frmDonasi.flxProgress.setVisibility(false);
            alert(this.response.data.resultDesc);
        }
    }
    kony.application.dismissLoadingScreen();
}

function hideThanksDonasi() {
    frmDonasi.flxThanks.setVisibility(false);
    flxNewsEvent.show();
    frmDonasi.txtNama.text = "";
    frmDonasi.txtAlamat.text = "";
    frmDonasi.txtPonsel.text = "";
}

function SKDonasi() {
    frmSKDonasi.lblNamaTragedy.text = frmDetailNews.lblTitle.text;
}