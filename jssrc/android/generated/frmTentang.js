function addWidgetsfrmTentang() {
    frmTentang.setDefaultUnit(kony.flex.DP);
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
    var flxHeader = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHeader",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "CopyslFbox0c5dc82e703ea46",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeader.setDefaultUnit(kony.flex.DP);
    var flxBack = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBack",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_a768ee32023249388116513e524f24c0,
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
    var flxTt = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxTt",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    flxTt.setDefaultUnit(kony.flex.DP);
    var lblTitleHeader = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTitleHeader",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0ccc1bc837f7a48",
        "text": "Tentang Kami",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxTt.add(lblTitleHeader);
    flxHeader.add(flxBack, flxTt);
    var flxContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0j3ba63eba80b48",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContent.setDefaultUnit(kony.flex.DP);
    var flxTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxTitle",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTitle.setDefaultUnit(kony.flex.DP);
    var Label0c9c30e9817914d = new kony.ui.Label({
        "id": "Label0c9c30e9817914d",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0g4c1c2ef468f48",
        "text": "Tentang Teman Berbagi ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label0a8acad8ee2204b = new kony.ui.Label({
        "id": "Label0a8acad8ee2204b",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0e9dcb83299df45",
        "text": "Teman Berbagi",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxTitle.add(Label0c9c30e9817914d, Label0a8acad8ee2204b);
    var flxIsi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "87%",
        "id": "flxIsi",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "13%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxIsi.setDefaultUnit(kony.flex.DP);
    var RichText0b2c71ff94aec49 = new kony.ui.RichText({
        "id": "RichText0b2c71ff94aec49",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslRichText0i277464427cd40",
        "text": "<p align=\"justify\"> \n\nTeman Berbagi, Aplikasi berbagi informasi, jalur, donasi, relawan dan lainnya. \n<br><br>\nAplikasi Teman berbagi informasi terkini terkait bencana alam, kecelakaan, kebakaran, dan lainnya dari berbagai portal berita juga social media. \n<br><br>\nMelalui aplikasi Teman Berbagi, masyarakat berbagai kalangan dapat saling berbagi dan berpartisipasi dengan sesama dalam situasi bencana. \n\n<br><br>\nBaik berbagi melalui bantuan donasi maupun sebagai relawan. Menyediakan peta jalur mudik yang aman dan disertai informasi lokasi penting.\n\n</p>\n",
        "top": 0,
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxIsi.add(RichText0b2c71ff94aec49);
    flxContent.add(flxTitle, flxIsi);
    flxMain.add(flxHeader, flxContent);
    frmTentang.add(flxMain);
};

function frmTentangGlobals() {
    frmTentang = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTentang,
        "enabledForIdleTimeout": false,
        "id": "frmTentang",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
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