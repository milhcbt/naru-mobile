function initializeFBox0bd32515fa35648() {
    FBox0bd32515fa35648 = new kony.ui.FlexContainer({
        "clipBounds": false,
        "height": "40dp",
        "id": "FBox0bd32515fa35648",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0bd32515fa35648.setDefaultUnit(kony.flex.DP);
    var flxInstansiSgm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxInstansiSgm",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0b8917e9ba10d4e",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxInstansiSgm.setDefaultUnit(kony.flex.DP);
    var lblDonasi = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblDonasi",
        "isVisible": true,
        "left": "5%",
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0bccfaeb6d7de44",
        "text": "Baznas Zakat",
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": 0,
        "width": "80%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxInstansiSgm.add(lblDonasi);
    FBox0bd32515fa35648.add(flxInstansiSgm);
}