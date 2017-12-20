//Type your code here
function shareTwitter(title) {
    var site = "http://twitter.com/intent/tweet?text=" + title + "&amp;hashtags=TemanBerbagi";
    kony.application.openURL(site);
}

function shareFacebook(id) {
    var site = "http://www.facebook.com/share.php?u=https://naru-app.herokuapp.com/news_event_share/" + id;
    kony.application.openURL(site);
}

function shareGoogle(id) {
    var site = "https://plus.google.com/share?url=https://naru-app.herokuapp.com/news_event_share/" + id;
    kony.application.openURL(site);
}
/////////////////////////// PROMO ////////////////////////////////////
function shareTwitterPromo(title) {
    var site = "http://twitter.com/intent/tweet?text=" + title + "&amp;hashtags=TemanBerbagi";
    kony.application.openURL(site);
}

function shareFacebookPromo(id) {
    var site = "http://www.facebook.com/share.php?u=http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/promos_share/" + id;
    kony.application.openURL(site);
}

function shareGooglePromo(id) {
    var site = "https://plus.google.com/share?url=http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/promos_share/" + id;
    kony.application.openURL(site);
}
/////////////////////////// PROMO DETAIL ////////////////////////////////////
function shareTwitterPromoDetail(title) {
    var site = "http://twitter.com/intent/tweet?text=" + title + "&amp;hashtags=TemanBerbagi";
    kony.application.openURL(site);
}

function shareFacebookPromoDetail(id) {
    var site = "http://www.facebook.com/share.php?u=http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/listpromos_share/" + id;
    kony.application.openURL(site);
}

function shareGooglePromoDetail(id) {
    var site = "https://plus.google.com/share?url=http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/listpromos_share/" + id;
    kony.application.openURL(site);
}

function getTitle() {
    var titleJudulNama = frmDetailNews.lblTitle.text + " #TemanBerbagi";
    shareTwitter(titleJudulNama);
}

function shareTwit() {
    var titleJudulNama = frmEvent.lblNamaEvent.text + " #TemanBerbagi";
    shareTwitter(titleJudulNama);
}
//// SHARE SUKARELAWAM /////
function shareSukarelawan() {
    var saya = "Saya mendaftarkan diri menjadi relawan pada event ";
    var event = frmSukarelawan.lblNamaTragedy.text;
    var teman = " TemanBerbagi";
    var share = saya + event + teman;
    shareTwitter(share);
}

function shareFacebook(id) {
    var site = "http://www.facebook.com/share.php?u=https://naru-app.herokuapp.com/news_event_share/" + id;
    kony.application.openURL(site);
}

function shareGoogle(id) {
    var site = "https://plus.google.com/share?url=https://naru-app.herokuapp.com/news_event_share/" + id;
    kony.application.openURL(site);
}