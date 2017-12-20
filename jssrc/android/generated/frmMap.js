function addWidgetsfrmMap() {
    frmMap.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var mapOri = new kony.ui.Map({
        "calloutWidth": 80,
        "defaultPinImage": "pinb.png",
        "height": "84.50%",
        "id": "mapOri",
        "isVisible": true,
        "left": "0dp",
        "onMapLoaded": AS_Map_g5a7bcd0d14c46d08422e9abe321f6b1,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "top": "15.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showZoomControl": true,
        "zoomLevel": 4
    });
    var CopyflxHeader0e88ed0543f8746 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "CopyflxHeader0e88ed0543f8746",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0jece1f52aaf349",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxHeader0e88ed0543f8746.setDefaultUnit(kony.flex.DP);
    var flxDest = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flxDest",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0e499958296b74a",
        "top": "50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDest.setDefaultUnit(kony.flex.DP);
    var flxImgDest = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxImgDest",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "slFbox0e499958296b74a",
        "width": "13%",
        "zIndex": 1
    }, {}, {});
    flxImgDest.setDefaultUnit(kony.flex.DP);
    var Image0f7db33eb53ab40 = new kony.ui.Image2({
        "centerX": "50.00%",
        "centerY": "50%",
        "height": "50%",
        "id": "Image0f7db33eb53ab40",
        "isVisible": true,
        "skin": "slImage0e53f3d2bc61d43",
        "src": "shape_copy.png",
        "width": "60%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImgDest.add(Image0f7db33eb53ab40);
    var flxTxtTujuan = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxTxtTujuan",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0e499958296b74a",
        "top": "0%",
        "width": "87%",
        "zIndex": 1
    }, {}, {});
    flxTxtTujuan.setDefaultUnit(kony.flex.DP);
    var txtTujuan = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "70%",
        "id": "txtTujuan",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "onDone": AS_TextField_e49f7e9c4ebe4144b4a83f7de3e8e657,
        "placeholder": "To",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0be469f809f5e49",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "87%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "jgh",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxTxtTujuan.add(txtTujuan);
    flxDest.add(flxImgDest, flxTxtTujuan);
    var flxFrom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flxFrom",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0e499958296b74a",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxFrom.setDefaultUnit(kony.flex.DP);
    var CopyflxImgDest0id3d91e55e9e4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxImgDest0id3d91e55e9e4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "slFbox0e499958296b74a",
        "top": "0",
        "width": "13%",
        "zIndex": 1
    }, {}, {});
    CopyflxImgDest0id3d91e55e9e4d.setDefaultUnit(kony.flex.DP);
    var CopyImage0hc405ab2acdb46 = new kony.ui.Image2({
        "centerX": "50.00%",
        "centerY": "50%",
        "height": "50%",
        "id": "CopyImage0hc405ab2acdb46",
        "isVisible": true,
        "skin": "slImage0e53f3d2bc61d43",
        "src": "from.png",
        "width": "60%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflxImgDest0id3d91e55e9e4d.add(CopyImage0hc405ab2acdb46);
    var flxTxtFrom = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxTxtFrom",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0e499958296b74a",
        "top": "0%",
        "width": "87%",
        "zIndex": 1
    }, {}, {});
    flxTxtFrom.setDefaultUnit(kony.flex.DP);
    var txtFrom = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "70%",
        "id": "txtFrom",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "onTouchEnd": AS_TextField_e3f0134bb7d34eecbf090604c63a2e0f,
        "placeholder": "From",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0be469f809f5e49",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "width": "87%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "jgh",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    flxTxtFrom.add(txtFrom);
    flxFrom.add(CopyflxImgDest0id3d91e55e9e4d, flxTxtFrom);
    CopyflxHeader0e88ed0543f8746.add(flxDest, flxFrom);
    var flxHeaderLain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHeaderLain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0c5dc82e703ea46",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeaderLain.setDefaultUnit(kony.flex.DP);
    var flxBack = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBack",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_d5479dffdf12446bb2ae443c86d14fae,
        "skin": "slFbox",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxBack.setDefaultUnit(kony.flex.DP);
    var btnBack = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40%",
        "id": "btnBack",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "ic_back.png",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [4, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBack.add(btnBack);
    var CopyflxTitlePencarian0d6842bac1de145 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxTitlePencarian0d6842bac1de145",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxTitlePencarian0d6842bac1de145.setDefaultUnit(kony.flex.DP);
    var CopylblTitlePencarian0ecc56968a30e49 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopylblTitlePencarian0ecc56968a30e49",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0eaf561aebcc345",
        "text": "Peta Berita",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxTitlePencarian0d6842bac1de145.add(CopylblTitlePencarian0ecc56968a30e49);
    flxHeaderLain.add(flxBack, CopyflxTitlePencarian0d6842bac1de145);
    var flxInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "-20%",
        "clipBounds": true,
        "height": "20%",
        "id": "flxInfo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0fde4118d6c4a43",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxInfo.setDefaultUnit(kony.flex.DP);
    var btnInformasi = new kony.ui.Button({
        "bottom": "10%",
        "focusSkin": "CopyslButtonGlossRed0j9fb7adf25474f",
        "height": "40%",
        "id": "btnInformasi",
        "isVisible": true,
        "left": "5%",
        "onTouchEnd": AS_Button_f4aa3aca0aa84300beacfc3647c93034,
        "skin": "CopyslButtonGlossBlue0e85beeae13ad4c",
        "text": "Informasi",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnHubungi = new kony.ui.Button({
        "bottom": "10.00%",
        "focusSkin": "CopyslButtonGlossRed0g1c83f1abc6641",
        "height": "40%",
        "id": "btnHubungi",
        "isVisible": true,
        "onTouchEnd": AS_Button_ga3e4b905b454b0faa2b5976f9a0abbc,
        "right": "5%",
        "skin": "CopyslButtonGlossBlue0e85beeae13ad4c",
        "text": "Hubungi",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtNamaPlace = new kony.ui.RichText({
        "centerX": "50%",
        "height": "41dp",
        "id": "txtNamaPlace",
        "isVisible": true,
        "skin": "CopyslRichText0b59fe968fd8c40",
        "text": "RichText",
        "top": "10%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxInfo.add(btnInformasi, btnHubungi, txtNamaPlace);
    var flxHide = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHide",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "onClick": AS_FlexContainer_e86d947c917f404fb1d874fd44aaf138,
        "skin": "CopyslFbox0dd7c0d14763145",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxHide.setDefaultUnit(kony.flex.DP);
    var flxPopUp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "30%",
        "id": "flxPopUp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0e04988f54ffd46",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxPopUp.setDefaultUnit(kony.flex.DP);
    var txtDescPopup = new kony.ui.RichText({
        "centerX": "50%",
        "height": "30%",
        "id": "txtDescPopup",
        "isVisible": true,
        "skin": "CopyslRichText0eb5dd5267c0744",
        "text": "RichText",
        "top": "40%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCallPopup = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "CopyslButtonGlossRed0c643f58aba8945",
        "height": "20%",
        "id": "btnCallPopup",
        "isVisible": true,
        "onTouchEnd": AS_Button_b8e4e17d959244fe8f61064081c30587,
        "skin": "CopyslButtonGlossBlue0b5fc48a7b7d040",
        "text": "Hubungi Sekarang",
        "top": "75%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtTitlePopup = new kony.ui.RichText({
        "centerX": "50%",
        "height": "30%",
        "id": "txtTitlePopup",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslRichText0jd81c9d03d054d",
        "top": "5%",
        "width": "90%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPopUp.add(txtDescPopup, btnCallPopup, txtTitlePopup);
    flxHide.add(flxPopUp);
    flxMain.add(mapOri, CopyflxHeader0e88ed0543f8746, flxHeaderLain, flxInfo, flxHide);
    frmMap.add(flxMain);
};

function frmMapGlobals() {
    frmMap = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMap,
        "enabledForIdleTimeout": false,
        "id": "frmMap",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0ca99cfe240ed46"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};