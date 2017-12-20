function addWidgetsfrmSKDonasi() {
    frmSKDonasi.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
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
        "layoutType": kony.flex.FREE_FORM,
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
        "onClick": AS_FlexContainer_d375aad7459041ada537a914e5288b2f,
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
    var flxTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTitle.setDefaultUnit(kony.flex.DP);
    var Label0b9b0bddc575248 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50.00%",
        "id": "Label0b9b0bddc575248",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0b35f94cca72447",
        "text": "Syarat dan Ketentuan",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxTitle.add(Label0b9b0bddc575248);
    flxHeader.add(flxBack, flxTitle);
    var flxContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "92%",
        "id": "flxContent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "CopyslFbox0a64702365c8d4b",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContent.setDefaultUnit(kony.flex.DP);
    var lblDonasi = new kony.ui.Label({
        "id": "lblDonasi",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0df64d13bee4849",
        "text": "SYARAT & KETENTUAN DONASI",
        "top": "4%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblNamaTragedy = new kony.ui.Label({
        "id": "lblNamaTragedy",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0j3d8c11efbca4d",
        "text": "Tragedi Siklon Tropis Cempaka",
        "top": "1%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var rtxIsiSyarat = new kony.ui.RichText({
        "id": "rtxIsiSyarat",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslRichText0f2337116288a46",
        "text": "1. Pastikan data yang dimasukkan telah sesuai\n\n<br><br>\n2. Dana yang terkumpul akan diberikan kepada instansi yang telah ditunjuk untuk \nditeruskan kepada yang membutuhkan\n<br><br>\n3. Tujuan pemberian donasi akan diberikan untuk event yang dipilih, namun tidak menutup kesempatan diarahkan kepada event lain yang lebih membutuhkan sesuai ketentuan instansi.\n\n<br><br> \n4. Fitur ini dibuat sebagai sarana untuk memudahkan anda dalam beramal.",
        "top": "4%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnSetuju = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "btnSetuju",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "onClick": AS_FlexContainer_ecbb4623b9fc4ae1a91586659e01e5d6,
        "skin": "CopyslFbox0i4062493e7d940",
        "top": "4%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    btnSetuju.setDefaultUnit(kony.flex.DP);
    var Label0i8af8a7e5c6443 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0i8af8a7e5c6443",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0g0b7637df97941",
        "text": "Setuju",
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    btnSetuju.add(Label0i8af8a7e5c6443);
    flxContent.add(lblDonasi, lblNamaTragedy, rtxIsiSyarat, btnSetuju);
    flxMain.add(flxHeader, flxContent);
    frmSKDonasi.add(flxMain);
};

function frmSKDonasiGlobals() {
    frmSKDonasi = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSKDonasi,
        "enabledForIdleTimeout": false,
        "id": "frmSKDonasi",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_e5bbdeed520c4d24b81b308f8c24beeb,
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