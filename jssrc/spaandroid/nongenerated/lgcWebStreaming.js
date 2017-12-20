//Type your code here
var y_url1 = "";
var y_url2 = "";
var y_lok1 = "";
var y_lok2 = "";
var y_title = "";
var y_desc = "";

function getStream() {
    headers = {};
    data = {};
    var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("hotNews");
    kony.application.showLoadingScreen("loadskin", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "706970"
    });
    getAdd.invokeOperation("stream", headers, data, operationSuccess, operationFailure);

    function operationSuccess(response) {
        if (response.opstatus === 0) {
            for (var i = 0; i < response.length; i++) {
                y_title = response[i].y_title;
                y_desc = response[i].y_desc;
                for (var j = 0; j < response[i].y_url.length; j++) {
                    y_url1 = response[i].y_url[0];
                    y_url2 = response[i].y_url[1];
                }
                for (var k = 0; k < response[i].y_lokasi.length; k++) {
                    y_lok1 = response[i].y_lokasi[0];
                    y_lok2 = response[i].y_lokasi[1];
                }
            }
            var urlConf = {
                URL: y_url1,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            flxNewsEvent.flxStreaming.setVisibility(true);
            flxNewsEvent.listStreaming.requestURLConfig = urlConf;
            flxNewsEvent.streamTitle.text = y_title;
            flxNewsEvent.streamDesc.text = y_desc;
            flxNewsEvent.lblTonton.text = "Lihat Pantauan ...";
            flxNewsEvent.browser.requestURLConfig = urlConf;
            flxNewsEvent.lok1.text = y_lok1;
            flxNewsEvent.lok2.text = y_lok2;
            var urlConfPantau2 = {
                URL: y_url2,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            flxNewsEvent.browser2.requestURLConfig = urlConfPantau2;
        } else {}
        kony.application.dismissLoadingScreen();
    }

    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}

function getStreamPage() {
    headers = {};
    data = {};
    var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("hotNews");
    kony.application.showLoadingScreen("loadskin", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "706970"
    });
    getAdd.invokeOperation("stream", headers, data, operationSuccess, operationFailure);

    function operationSuccess(response) {
        if (response.opstatus === 0) {
            for (var i = 0; i < response.length; i++) {
                y_title = response[i].y_title;
                y_desc = response[i].y_desc;
                for (var j = 0; j < response[i].y_url.length; j++) {
                    y_url1 = response[i].y_url[0];
                    y_url2 = response[i].y_url[1];
                }
                for (var k = 0; k < response[i].y_lokasi.length; k++) {
                    y_lok1 = response[i].y_lokasi[0];
                    y_lok2 = response[i].y_lokasi[1];
                }
            }
            frmPantauPage.lok1.text = y_lok1;
            frmPantauPage.lok2.text = y_lok2;
            var urlConf = {
                URL: y_url1,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            frmPantauPage.browser.requestURLConfig = urlConf;
            var urlConf2 = {
                URL: y_url2,
                requestMethod: constants.BROWSER_REQUEST_METHOD_GET
            };
            frmPantauPage.browser2.requestURLConfig = urlConf2;
        } else {}
        kony.application.dismissLoadingScreen();
    }

    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}