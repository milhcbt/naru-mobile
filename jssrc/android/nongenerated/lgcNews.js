var globIdNews = "";
var globTitle = "";
var globLoc = "";
var status = "";
var globeTitleDonasi = "";
var from = "";
// SEGMENT NEWS BENCANA
function getNewsAsd() {
    headers = {};
    data = {};
    var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("hotNews");
    kony.application.showLoadingScreen("loadskin", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "706970"
    });
    getAdd.invokeOperation("news", headers, data, operationSuccess, operationFailure);

    function operationSuccess(response) {
        if (response.opstatus === 0) {
            var arrCharityEvent = [];
            for (var i = 0; i < response.length; i++) {
                var tempNews = {
                    idNews: response[i]._id,
                    updated: response[i].updatedAt,
                    created: response[i].createdAt,
                    author: response[i].newsAuthor + " / " + response[i].createdAt.substr(0, 10),
                    dampak: response[i].newsDisasterImpact,
                    telp: response[i].phoneNumber,
                    newsImage: response[i].newsImage,
                    newsTitle: response[i].newsTitle,
                    newsDescription: response[i].newsDescription,
                    btnPeta: 'btnlokasi1.png',
                    location: response[i].newsLocation,
                    lblSelengkapnya: "Selengkapnya..."
                };
                arrCharityEvent.push(tempNews);
            }
            flxNewsEvent.sgmHotNews.setVisibility(true);
            flxNewsEvent.sgmHotNews.removeAll();
            flxNewsEvent.sgmHotNews.addAll(arrCharityEvent);
        }
        kony.application.dismissLoadingScreen();
    }

    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}

function klikRowCharity() {
    frmDetailNews.show();
    status = "cariti";
}

function klikRowNews() {
    var obj = flxNewsEvent.sgmHotNews.selectedItems;
    var loc = obj[0].location;
    frmDetailNews.show();
    status = "news";
    from = "beranda";
}

function klikCharityEvent() {
    frmDetailNews.show();
    status = "charityEvent";
}

function cekNews() {
    if (status == "cariti") {
        getDetailCharity();
    } else if (status == "news") {
        if (from == "pencarian") {
            getDetailNewsFromPencarian();
        } else if (from == "beranda") {
            getDetailNews();
        }
    } else if (status == "charityEvent") {
        getDetailCharityEvent();
    }
}

function getNewsTitle() {
    if (status == "news") {
        if (from == "beranda") {
            var objNews = flxNewsEvent.sgmHotNews.selectedItems;
            globeTitleDonasi = objNews[0].newsTitle;
        } else if (from == "pencarian") {
            var objPencarian = flxNewsEvent.sgmSearch.selectedItems;
            globeTitleDonasi = objPencarian[0].newsTitle;
        }
    } else if (status == "cariti") {
        var objCariti = flxNewsEvent.sgmCharity.selectedItems;
        globeTitleDonasi = objCariti[0].newsTitle;
    } else if (status == "charityEvent") {
        var objCaritiEvent = flxNewsEvent.sgmCharityEvent.selectedItems;
        globeTitleDonasi = objCaritiEvent[0].newsTitle;
    }
}

function getCharityEvent() {
    headers = {};
    data = {};
    var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("hotNews");
    kony.application.showLoadingScreen("loadskin", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "706970"
    });
    getAdd.invokeOperation("charity", headers, data, operationSuccess, operationFailure);

    function operationSuccess(response) {
        if (response.opstatus === 0) {
            var arrCharityEvent = [];
            for (var i = 0; i < response.length; i++) {
                var tempNews = {
                    idCharity: response[i]._id,
                    updated: response[i].updatedAt,
                    dibuat: response[i].createdAt,
                    author: response[i].newsAuthor + " / " + response[i].createdAt.substr(0, 10),
                    location: response[i].newsLocation,
                    kategori: response[i].newsCategory,
                    durasiAwal: response[i].newsStartDate,
                    durasiAkhir: response[i].newsEndDate,
                    dampak: response[i].newsDisasterImpact,
                    telp: response[i].phoneNumber,
                    newsImage: response[i].newsImage,
                    newsTitle: response[i].newsTitle,
                    newsDescription: response[i].newsDescription,
                    btnPeta: 'btnlokasi1.png',
                    lblSelengkapnya: "Selengkapnya..."
                };
                arrCharityEvent.push(tempNews);
            }
            flxNewsEvent.sgmCharityEvent.setVisibility(true);
            flxNewsEvent.sgmCharityEvent.removeAll();
            flxNewsEvent.sgmCharityEvent.addAll(arrCharityEvent);
        }
        kony.application.dismissLoadingScreen();
    }

    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}

function getDetailCharity() {
    var obj = flxNewsEvent.sgmCharity.selectedItems;
    if (obj[0] !== null) {
        var idNews = obj[0].idCharityTelkom;
        var judul = obj[0].newsTitle;
        var newsDesc = obj[0].newsDescription;
        var newsImg = obj[0].newsImage;
        var author = obj[0].newsAuthor;
        var datePublish = obj[0].newsStartDate;
        var location = obj[0].location;
        var dampak = obj[0].dampak;
        globIdNews = idNews;
        globTitle = judul;
        frmDetailNews.lblTitle.text = judul;
        frmDetailNews.rtxKet.text = newsDesc;
        frmDetailNews.lblTypeNews.text = "Telkom Charity Event";
        frmDetailNews.rtxLokasi.text = location;
        frmDetailNews.sgmImage.removeAll();
        frmDetailNews.sgmImage.addAll([{
            imgNews: newsImg
        }]);
    }
}

function getDetailNews() {
    var obj = flxNewsEvent.sgmHotNews.selectedItems;
    if (obj[0] !== null) {
        var idNews = obj[0].idNews;
        var judul = obj[0].newsTitle;
        var newsDesc = obj[0].newsDescription;
        var newsImg = obj[0].newsImage;
        var author = obj[0].newsAuthor;
        var datePublish = obj[0].newsPublishAt;
        var location = obj[0].location;
        var dampak = obj[0].dampak;
        globIdNews = idNews;
        globTitle = judul;
        frmDetailNews.lblTitle.text = judul;
        frmDetailNews.rtxKet.text = newsDesc;
        frmDetailNews.lblTypeNews.text = "Hot News";
        frmDetailNews.rtxLokasi.text = location;
        frmDetailNews.sgmImage.removeAll();
        frmDetailNews.sgmImage.addAll([{
            imgNews: newsImg
        }]);
    }
}

function getDetailNewsFromPencarian() {
    var obj = flxNewsEvent.sgmSearch.selectedItems;
    if (obj[0] !== null) {
        var idNews = obj[0].idNews;
        var judul = obj[0].newsTitle;
        var newsDesc = obj[0].newsDescription;
        var newsImg = obj[0].newsImage;
        var author = obj[0].newsAuthor;
        var datePublish = obj[0].newsPublishAt;
        var location = obj[0].location;
        var dampak = obj[0].dampak;
        globIdNews = idNews;
        globTitle = judul;
        frmDetailNews.lblTitle.text = judul;
        frmDetailNews.rtxKet.text = newsDesc;
        frmDetailNews.lblTypeNews.text = "Hot News";
        frmDetailNews.rtxLokasi.text = location;
        frmDetailNews.sgmImage.removeAll();
        frmDetailNews.sgmImage.addAll([{
            imgNews: newsImg
        }]);
    }
}

function getDetailCharityEvent() {
    var obj = flxNewsEvent.sgmCharityEvent.selectedItems;
    if (obj[0] !== null) {
        var idNews = obj[0].idCharity;
        var judul = obj[0].newsTitle;
        var newsDesc = obj[0].newsDescription;
        var newsImg = obj[0].newsImage;
        var author = obj[0].newsAuthor;
        var datePublish = obj[0].newsPublishAt;
        var location = obj[0].location;
        var dampak = obj[0].dampak;
        globIdNews = idNews;
        globTitle = judul;
        frmDetailNews.lblTitle.text = judul;
        frmDetailNews.rtxKet.text = newsDesc;
        frmDetailNews.lblTypeNews.text = "Charity Event";
        frmDetailNews.rtxLokasi.text = location;
        frmDetailNews.sgmImage.removeAll();
        frmDetailNews.sgmImage.addAll([{
            imgNews: newsImg
        }]);
    }
}
//Type your code here
function getCharityTelkom() {
    headers = {};
    data = {};
    var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("hotNews");
    kony.application.showLoadingScreen("loadskin", "", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "706970"
    });
    getAdd.invokeOperation("charitiTelkom", headers, data, operationSuccess, operationFailure);

    function operationSuccess(response) {
        if (response.opstatus === 0) {
            var arrCharityTelkom = [];
            for (var i = 0; i < response.length; i++) {
                var tempNews = {
                    idCharityTelkom: response[i]._id,
                    updated: response[i].updatedAt,
                    dibuat: response[i].createdAt,
                    author: response[i].newsAuthor + " / " + response[i].createdAt.substr(0, 10),
                    location: response[i].newsLocation,
                    kategori: response[i].newsCategory,
                    durasiAwal: response[i].newsStartDate,
                    durasiAkhir: response[i].newsEndDate,
                    dampak: response[i].newsDisasterImpact,
                    telp: response[i].phoneNumber,
                    newsImage: response[i].newsImage,
                    newsTitle: response[i].newsTitle,
                    newsDescription: response[i].newsDescription,
                    btnPeta: 'btnlokasi1.png',
                    lblSelengkapnya: "Selengkapnya..."
                };
                arrCharityTelkom.push(tempNews);
            }
            flxNewsEvent.sgmCharity.setVisibility(true);
            flxNewsEvent.sgmCharity.removeAll();
            flxNewsEvent.sgmCharity.addAll(arrCharityTelkom);
        }
        kony.application.dismissLoadingScreen();
    }

    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}