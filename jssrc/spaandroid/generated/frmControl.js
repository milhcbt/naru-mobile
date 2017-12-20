function addWidgetsfrmControl() {
    frmControl.setDefaultUnit(kony.flex.DP);
    var FlexContainer0b12c3a6f80c445 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0b12c3a6f80c445",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e3fbc277aef446",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0b12c3a6f80c445.setDefaultUnit(kony.flex.DP);
    FlexContainer0b12c3a6f80c445.add();
    var Image0c416ccf4ac694e = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50%",
        "id": "Image0c416ccf4ac694e",
        "isVisible": true,
        "skin": "slImage",
        "src": "iconteman.png",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmControl.add(FlexContainer0b12c3a6f80c445, Image0c416ccf4ac694e);
};

function frmControlGlobals() {
    frmControl = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmControl,
        "enabledForIdleTimeout": false,
        "id": "frmControl",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_b64d421c79d74f76bf87af893a9fd472,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};