//startup.js file
var appConfig = {
    appId: "TemanBerbagi",
    appName: "Teman Berbagi",
    appVersion: "1.0.1",
    platformVersion: null,
    serverIp: "192.168.88.174",
    serverPort: "80",
    secureServerPort: "443",
    isturlbase: "https://kony.dimma.id:443/services",
    isMFApp: true,
    appKey: "1960efac510aa6fb5ffa1c4a2c12eac9",
    appSecret: "e41acf25da0bc0088998d2529d14b802",
    serviceUrl: "https://kony.dimma.id/authService/100000002/appconfig",
    svcDoc: {
        "appId": "39370245-c05b-4140-88c9-f901c1ac9cd7",
        "baseId": "a52ab160-8259-4851-8527-e09aa0f298df",
        "name": "PromoNaru",
        "selflink": "https://kony.dimma.id/authService/100000002/appconfig",
        "login": [{
            "type": "oauth2",
            "prov": "oauthGoogle",
            "url": "https://kony.dimma.id/authService/100000002",
            "alias": "oauthGoogle"
        }, {
            "type": "oauth2",
            "prov": "oauthFacebook",
            "url": "https://kony.dimma.id/authService/100000002",
            "alias": "oauthFacebook"
        }],
        "messagingsvc": {
            "appId": "39370245-c05b-4140-88c9-f901c1ac9cd7",
            "url": "https://kony.dimma.id:443/kpns/api/v1"
        },
        "integsvc": {
            "google": "https://kony.dimma.id:443/services/google",
            "hotNews": "https://kony.dimma.id:443/services/hotNews",
            "pointer": "https://kony.dimma.id:443/services/pointer",
            "pushNotif": "https://kony.dimma.id:443/services/pushNotif",
            "listDonasi": "https://kony.dimma.id:443/services/listDonasi",
            "mapGoogleApi": "https://kony.dimma.id:443/services/mapGoogleApi"
        },
        "reportingsvc": {
            "custom": "https://kony.dimma.id:443/services/CMS",
            "session": "https://kony.dimma.id:443/services/IST"
        },
        "services_meta": {
            "google": {
                "version": "1.0",
                "url": "https://kony.dimma.id:443/services/google",
                "type": "integsvc"
            },
            "hotNews": {
                "version": "1.0",
                "url": "https://kony.dimma.id:443/services/hotNews",
                "type": "integsvc"
            },
            "pointer": {
                "version": "1.0",
                "url": "https://kony.dimma.id:443/services/pointer",
                "type": "integsvc"
            },
            "pushNotif": {
                "version": "1.0",
                "url": "https://kony.dimma.id:443/services/pushNotif",
                "type": "integsvc"
            },
            "listDonasi": {
                "version": "1.0",
                "url": "https://kony.dimma.id:443/services/listDonasi",
                "type": "integsvc"
            },
            "mapGoogleApi": {
                "version": "1.0",
                "url": "https://kony.dimma.id:443/services/mapGoogleApi",
                "type": "integsvc"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://kony.dimma.id:443/admin/TemanBerbagi/MWServlet",
    secureurl: "https://kony.dimma.id:443/admin/TemanBerbagi/MWServlet",
    middlewareContext: "TemanBerbagi"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeCopyFBox0abbf84ae3b8140();
    initializeCopyFBox0ad709b2ae1b742();
    initializeCopyFBox0bdda76b1a1ae4c();
    initializeCopyFBox0c14f8e0c94cc47();
    initializeCopyFBox0f94de298832946();
    initializeCopyFBox0fbb44526b21a49();
    initializeCopyFBox0g25744ef9e854e();
    initializeCopyFBox0h59ce7dd3c074b();
    initializeFBox0bd32515fa35648();
    initializeFBox0c65f81f1db3a42();
    initializeFBox0f116278cf13840();
    initializeFBox0id6e6f7a7e5b4b();
    initializeFBox0j652cf4d7c5641();
    initializeTemp0ac72121c2a3c48();
    flxNewsEventGlobals();
    frmCampNPoskoGlobals();
    frmControlGlobals();
    frmDetailNewsGlobals();
    frmDetailPromoGlobals();
    frmDonasiGlobals();
    frmEventGlobals();
    frmListPromoGlobals();
    frmMapGlobals();
    frmOnBoardGlobals();
    frmPantauPageGlobals();
    frmSKGlobals();
    frmSKDonasiGlobals();
    frmSukarelawanGlobals();
    frmTentangGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: "spaandroid/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        kony.application.setApplicationInitializationEvents({
            init: appInit,
            showstartupform: function() {
                flxNewsEvent.show();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "serviceUrl": appConfig.serviceUrl,
        eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"]
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
kony.print = function() {
    return;
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								