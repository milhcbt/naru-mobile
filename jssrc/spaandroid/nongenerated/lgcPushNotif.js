function initMobileFabric() {
    var appkey = "7e9169af0d4788a1dcd79e9e1ecc1932";
    var appsecret = "7d01db66322e491ad0da48b8a47c2bcb";
    var service_url = "https://kony.dimma.id/authService/100000002/appconfig";
    client = new kony.sdk();
    client.init(appkey, appsecret, service_url, function(response) {}, function(error) {});
}
//page 2
function registerPush() {
    var email = frmPush.tbxEmail.text;
    if (email !== null && email !== "") {
        var senderID = "66108368507";
        var configInfo = {
            senderid: senderID
        };
        kony.push.register(configInfo);
    }
}

function deregisterPush() {
    var configInfo = {};
    kony.push.deRegister(configInfo);
}

function setupPushCallbacks() {
    var callbacks = {
        onsuccessfulregistration: regSuccess,
        onfailureregistration: regFail,
        onlinenotification: gotOnlinePushMessage,
        offlinenotification: gotOfflinePushMessage,
        onsuccessfulderegistration: deregSuccess,
        onfailurederegistration: deregFail
    };
    kony.push.setCallbacks(callbacks);
}

function regSuccess(regId) {
    subscribeMFMessaging(regId, "android");
}

function regFail(error) {}

function deregSuccess() {
    unsubscribeMFMessaging();
}

function deregFail(error) {}

function gotOnlinePushMessage(pushMsg) {}

function gotOfflinePushMessage(pushMsg) {}
//page 3
var messagingClient;

function subscribeMFMessaging(regId, ostype) {
    var deviceID = kony.os.deviceInfo().deviceid;
    var ufID = frmPush.tbxEmail.text;
    try {
        messagingClient = client.getMessagingService();
    } catch (exception) {}
    messagingClient.register("androidgcm", deviceID, regId, ufID, function(response) {}, function(error) {});
}

function unsubscribeMFMessaging() {
    try {
        messagingClient = client.getMessagingService();
    } catch (exception) {}
    messagingClient.unregister(function(response) {}, function(error) {});
}