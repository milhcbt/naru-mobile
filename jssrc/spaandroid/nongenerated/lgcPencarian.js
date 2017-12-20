//Type your code here
var responseMessage;
var choice;

function getCategory() {
    headers = {};
    data = {};
    var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("hotNews");
    kony.application.showLoadingScreen("loadskin", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "706970"
    });
    getAdd.invokeOperation("kategori", headers, data, operationSuccess, operationFailure);

    function operationSuccess(response) {
        if (response.opstatus === 0) {
            var arrCategory = [];
            for (var i = 0; i < response.length; i++) {
                var tempCategory = {
                    typeCat: response[i].typeCat
                };
                arrCategory.push(tempCategory);
            }
            flxNewsEvent.sgmCategory.setVisibility(true);
            flxNewsEvent.sgmCategory.removeAll();
            flxNewsEvent.sgmCategory.addAll(arrCategory);
            flxNewsEvent.lblTitleKategori.setVisibility(true);
        } else {}
        kony.application.dismissLoadingScreen();
    }

    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}

function pencarianNews() {
    choice = flxNewsEvent.txtSearch.text;
    var httpclient = new kony.net.HttpRequest();
    httpclient.onReadyStateChange = callbackHandlerPencarian;
    httpclient.open(constants.HTTP_METHOD_POST, "http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/search_event/" + choice);
    var form = new kony.net.FormData();
    form.append("choice", choice);
    httpclient.send(form);
}

function callbackHandlerPencarian() {
    if (this.readyState == constants.HTTP_READY_STATE_DONE) {
        if (this.response.code === 0) {
            var arrPencarian = [];
            for (var i = 0; i < this.response.result.length; i++) {
                var tempNews = {
                    idNews: this.response.result[i]._id,
                    updated: this.response.result[i].updatedAt,
                    created: this.response.result[i].createdAt,
                    author: this.response.result[i].newsAuthor + " / " + this.response.result[i].createdAt.substr(0, 10),
                    dampak: this.response.result[i].newsDisasterImpact,
                    telp: this.response.result[i].phoneNumber,
                    newsImage: this.response.result[i].newsImage,
                    newsTitle: this.response.result[i].newsTitle,
                    newsDescription: this.response.result[i].newsDescription,
                    location: this.response.result[i].newsLocation
                };
                arrPencarian.push(tempNews);
            }
            flxNewsEvent.sgmSearch.setVisibility(true);
            flxNewsEvent.sgmSearch.removeAll();
            flxNewsEvent.sgmSearch.addAll(arrPencarian);
            flxNewsEvent.sgmCategory.setVisibility(false);
            flxNewsEvent.lblTitleKategori.text = "Berita " + choice;
        } else {
            alert("Maaf, Berita tidak ditemukan");
            flxNewsEvent.sgmSearch.removeAll();
            flxNewsEvent.lblTitleKategori.text = "Kategori Berita";
            getCategory();
        }
    }
    kony.application.dismissLoadingScreen();
}

function pencarianNewsKateogri() {
    var obj = flxNewsEvent.sgmCategory.selectedItems;
    choice = obj[0].typeCat;
    var httpclient = new kony.net.HttpRequest();
    httpclient.onReadyStateChange = callbackHandlerPencarian;
    httpclient.open(constants.HTTP_METHOD_POST, "http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/search_event/" + choice);
    var form = new kony.net.FormData();
    form.append("choice", choice);
    httpclient.send(form);
}

function klikRowNewsPencarian() {
    var obj = flxNewsEvent.sgmSearch.selectedItems;
    var loc = obj[0].location;
    frmDetailNews.show();
    flxNewsEvent.txtSearch.text = "";
    flxNewsEvent.sgmSearch.setVisibility(true);
    flxNewsEvent.sgmCategory.setVisibility(true);
    status = "news";
    from = "pencarian";
}