function addWidgetsfrmDonasi() {
    frmDonasi.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0gf6ce28bf52142",
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
        "onClick": AS_FlexContainer_hc8bdf66aeb64b18b6f36b8087322b11,
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
        "text": "Donasi",
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
    var flxBody = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "92%",
        "horizontalScrollIndicator": true,
        "id": "flxBody",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFbox0ad82ef6106ac44",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBody.setDefaultUnit(kony.flex.DP);
    var lblDonasi = new kony.ui.Label({
        "id": "lblDonasi",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0df64d13bee4849",
        "text": "DONASI",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblNamaTragedy = new kony.ui.Label({
        "id": "lblNamaTragedy",
        "isVisible": true,
        "left": "5%",
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0j3d8c11efbca4d",
        "text": "Tragedi Siklon Tropis Cempaka",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "1%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtJumlahDonasi = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7.30%",
        "id": "txtJumlahDonasi",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5.06%",
        "placeholder": "Rp. 0",
        "secureTextEntry": false,
        "skin": "jgh",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "3%",
        "width": "89.50%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0ce478979c76d40",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var lblOptIdentitas = new kony.ui.Label({
        "id": "lblOptIdentitas",
        "isVisible": true,
        "left": "4.98%",
        "skin": "CopyslLabel0f448ed857c3f43",
        "text": "Harap memasukan identitas anda",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "4.00%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxbtn = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "flxbtn",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxbtn.setDefaultUnit(kony.flex.DP);
    var btnFb = new kony.ui.Image2({
        "height": "100%",
        "id": "btnFb",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "fb.png",
        "top": "0dp",
        "width": "47.50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnGogle = new kony.ui.Image2({
        "height": "100%",
        "id": "btnGogle",
        "isVisible": true,
        "left": "5%",
        "onTouchEnd": AS_Image_eb276cd09861483e8d25446df33508dd,
        "skin": "slImage",
        "src": "gugel.png",
        "top": "0dp",
        "width": "47.50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxbtn.add(btnFb, btnGogle);
    var lblOr = new kony.ui.Label({
        "id": "lblOr",
        "isVisible": true,
        "left": "5.390000000000001%",
        "skin": "CopyslLabel0f448ed857c3f43",
        "text": "Atau",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Copyflxbtn0b09047eb94954d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "Copyflxbtn0b09047eb94954d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    Copyflxbtn0b09047eb94954d.setDefaultUnit(kony.flex.DP);
    var txtNama = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "txtNama",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0%",
        "placeholder": "Nama lengkap",
        "secureTextEntry": false,
        "skin": "jgh",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "47.50%",
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
    var txtAlamat = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "100%",
        "id": "txtAlamat",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5%",
        "placeholder": "Alamat email",
        "secureTextEntry": false,
        "skin": "jgh",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "47.50%",
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
    Copyflxbtn0b09047eb94954d.add(txtNama, txtAlamat);
    var lblKet1 = new kony.ui.Label({
        "id": "lblKet1",
        "isVisible": true,
        "left": "5.390000000000001%",
        "skin": "CopyslLabel0f448ed857c3f43",
        "text": "Dan nomor ponsel anda untuk menerima SMS",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblKet2 = new kony.ui.Label({
        "id": "lblKet2",
        "isVisible": true,
        "left": "5.390000000000001%",
        "skin": "CopyslLabel0f448ed857c3f43",
        "text": "Status donasi :",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "1%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtPonsel = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7.30%",
        "id": "txtPonsel",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "5.12%",
        "placeholder": "081xxx atau 62xxx (angka saja)",
        "secureTextEntry": false,
        "skin": "jgh",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "2%",
        "width": "89.50%",
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
    var CopylblKet0e390f2c81b6140 = new kony.ui.Label({
        "id": "CopylblKet0e390f2c81b6140",
        "isVisible": true,
        "left": "5.390000000000001%",
        "skin": "CopyslLabel0f448ed857c3f43",
        "text": "Metode Donasi",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxInstansi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "flxInstansi",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "CopyslFbox0gf7d75f8aa354a",
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxInstansi.setDefaultUnit(kony.flex.DP);
    var btnTmoney = new kony.ui.Image2({
        "height": "100%",
        "id": "btnTmoney",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Image_f614cd2385a74cdf9b4bc00db36f9693,
        "skin": "slImage",
        "src": "tmoney.png",
        "top": "0%",
        "width": "47.50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxBtnDuafa = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBtnDuafa",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e71c1628596b40",
        "top": "0dp",
        "width": "47.50%",
        "zIndex": 1
    }, {}, {});
    flxBtnDuafa.setDefaultUnit(kony.flex.DP);
    flxBtnDuafa.add();
    var flxBtnPmi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBtnPmi",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "52%",
        "skin": "CopyslFbox0e71c1628596b40",
        "top": "0dp",
        "width": "47.50%",
        "zIndex": 1
    }, {}, {});
    flxBtnPmi.setDefaultUnit(kony.flex.DP);
    flxBtnPmi.add();
    var btnCredit = new kony.ui.Image2({
        "height": "100%",
        "id": "btnCredit",
        "isVisible": true,
        "left": "52.50%",
        "skin": "slImage",
        "src": "kredit.png",
        "top": 0,
        "width": "47.50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxInstansi.add(btnTmoney, flxBtnDuafa, flxBtnPmi, btnCredit);
    flxBody.add(lblDonasi, lblNamaTragedy, txtJumlahDonasi, lblOptIdentitas, flxbtn, lblOr, Copyflxbtn0b09047eb94954d, lblKet1, lblKet2, txtPonsel, CopylblKet0e390f2c81b6140, flxInstansi);
    flxMain.add(flxHeader, flxBody);
    var flxPopupInstansi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxPopupInstansi",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0iba1255390964f",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPopupInstansi.setDefaultUnit(kony.flex.DP);
    var flxCancel = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "flxCancel",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "85%",
        "onClick": AS_FlexContainer_c8b73b7aeeae4b69a62efa2e4408a69b,
        "skin": "slFbox",
        "top": "14%",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flxCancel.setDefaultUnit(kony.flex.DP);
    var cancelDonasi = new kony.ui.Image2({
        "height": "100%",
        "id": "cancelDonasi",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "cancel_button.png",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxCancel.add(cancelDonasi);
    var flxContenPopup = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flxContenPopup",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "CopyslFbox0e95b95c6233846",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxContenPopup.setDefaultUnit(kony.flex.DP);
    var donasiLewat = new kony.ui.Label({
        "id": "donasiLewat",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0d00f9473990e44",
        "text": "Donasi Melalui",
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
    var flxInstansiDonasi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "flxInstansiDonasi",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxInstansiDonasi.setDefaultUnit(kony.flex.DP);
    var sgmInstansiDonasi = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblDonasi": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "sgmInstansiDonasi",
        "isVisible": false,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_j9183097dac24fe09a6572b35f51daba,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0bd32515fa35648,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "ffffff00",
        "separatorRequired": true,
        "separatorThickness": 15,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxInstansiSgm": "flxInstansiSgm",
            "lblDonasi": "lblDonasi"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxInstansiDonasi.add(sgmInstansiDonasi);
    flxContenPopup.add(donasiLewat, flxInstansiDonasi);
    var flxTransfer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50.00%",
        "clipBounds": true,
        "height": "75%",
        "id": "flxTransfer",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "105%",
        "skin": "CopyslFbox0e95b95c6233846",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxTransfer.setDefaultUnit(kony.flex.DP);
    var lblRincianDonasi = new kony.ui.Label({
        "id": "lblRincianDonasi",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0d00f9473990e44",
        "text": "Rincian Donasi",
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
    var FlxNamaUserDonasi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "FlxNamaUserDonasi",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    FlxNamaUserDonasi.setDefaultUnit(kony.flex.DP);
    var lblNamaUserDonasi = new kony.ui.Label({
        "id": "lblNamaUserDonasi",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0f4c87820159842",
        "text": "Nama",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtNamaDonasi = new kony.ui.Label({
        "id": "txtNamaDonasi",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0e7d532d023d74c",
        "text": "Reza Alamsyah",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlxNamaUserDonasi.add(lblNamaUserDonasi, txtNamaDonasi);
    var flxEmail = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxEmail",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "skin": "slFbox",
        "top": 0,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxEmail.setDefaultUnit(kony.flex.DP);
    var lblEmailUserDonasi = new kony.ui.Label({
        "id": "lblEmailUserDonasi",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0f4c87820159842",
        "text": "Email",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtEmailUserDonasi = new kony.ui.Label({
        "id": "txtEmailUserDonasi",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0e7d532d023d74c",
        "text": "alreza.business@gmail.com",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxEmail.add(lblEmailUserDonasi, txtEmailUserDonasi);
    var flxNoHp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxNoHp",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "skin": "slFbox",
        "top": 0,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxNoHp.setDefaultUnit(kony.flex.DP);
    var lblNoUserDonasi = new kony.ui.Label({
        "id": "lblNoUserDonasi",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0f4c87820159842",
        "text": "No. HP",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtNoUserDonasi = new kony.ui.Label({
        "id": "txtNoUserDonasi",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0e7d532d023d74c",
        "text": "08572382673",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxNoHp.add(lblNoUserDonasi, txtNoUserDonasi);
    var flxJumlah = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxJumlah",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "skin": "slFbox",
        "top": 0,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxJumlah.setDefaultUnit(kony.flex.DP);
    var lblJumlah = new kony.ui.Label({
        "id": "lblJumlah",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0f4c87820159842",
        "text": "Jumlah",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtJumlah = new kony.ui.Label({
        "id": "txtJumlah",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0e7d532d023d74c",
        "text": "Rp. 2.000.00",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxJumlah.add(lblJumlah, txtJumlah);
    var flxMelalui = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxMelalui",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "skin": "slFbox",
        "top": 0,
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxMelalui.setDefaultUnit(kony.flex.DP);
    var lblMelalui = new kony.ui.Label({
        "id": "lblMelalui",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0f4c87820159842",
        "text": "Melalui",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 0,
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtMelalui = new kony.ui.Label({
        "id": "txtMelalui",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0e7d532d023d74c",
        "text": "Baznas",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxMelalui.add(lblMelalui, txtMelalui);
    var flxLineRincian = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "0.50%",
        "id": "flxLineRincian",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "CopyslFbox0b2937f7487cf4e",
        "top": "0%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxLineRincian.setDefaultUnit(kony.flex.DP);
    flxLineRincian.add();
    var flxAkunTmoney = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "37%",
        "id": "flxAkunTmoney",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxAkunTmoney.setDefaultUnit(kony.flex.DP);
    var Label0f263ffeb84774f = new kony.ui.Label({
        "id": "Label0f263ffeb84774f",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0iaff126a8ee94d",
        "text": "Akun T-Money",
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
    var tbPassTmoney = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "22%",
        "id": "tbPassTmoney",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": 0,
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0e6c1b0f8564943",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0e535bac3b7634d",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxLineTb = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "0.50%",
        "id": "flxLineTb",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "skinSubPencarian",
        "top": 3,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLineTb.setDefaultUnit(kony.flex.DP);
    flxLineTb.add();
    var tbPinTmoney = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "22%",
        "id": "tbPinTmoney",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": 0,
        "placeholder": "Pin",
        "secureTextEntry": true,
        "skin": "CopyslTextBox0e6c1b0f8564943",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox0e535bac3b7634d",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxLineTb2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "0.50%",
        "id": "flxLineTb2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "skinSubPencarian",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLineTb2.setDefaultUnit(kony.flex.DP);
    flxLineTb2.add();
    var CopyflxSk0e520b0bf5c0744 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflxSk0e520b0bf5c0744",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": 0,
        "skin": "slFbox",
        "top": "16%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyflxSk0e520b0bf5c0744.setDefaultUnit(kony.flex.DP);
    var flxChecked = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxChecked",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": 0,
        "width": "7%",
        "zIndex": 1
    }, {}, {});
    flxChecked.setDefaultUnit(kony.flex.DP);
    var uncheckedSK = new kony.ui.Image2({
        "height": "100%",
        "id": "uncheckedSK",
        "isVisible": true,
        "left": 0,
        "onTouchEnd": AS_Image_f0eaac5b96b449269da58413d86cc23d,
        "skin": "slImage",
        "src": "ikotak.png",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var checkedSK = new kony.ui.Image2({
        "height": "100%",
        "id": "checkedSK",
        "isVisible": false,
        "left": 0,
        "onTouchEnd": AS_Image_bc82d45b124e4633b06fa144df43f5fd,
        "skin": "slImage",
        "src": "check_sign_in_a_rounded_black_square.png",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxChecked.add(uncheckedSK, checkedSK);
    var CopyLabel0bb80e279ffa543 = new kony.ui.Label({
        "id": "CopyLabel0bb80e279ffa543",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0eb5cacc653014a",
        "text": "Saya setuju dengan",
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
    var CopyLabel0a5f0c7072dd644 = new kony.ui.Label({
        "id": "CopyLabel0a5f0c7072dd644",
        "isVisible": true,
        "left": "2%",
        "onTouchEnd": AS_Label_da8749246c094d15846fbd1753350f6e,
        "skin": "CopyslLabel0i38dc35336ca47",
        "text": "Syarat & Ketentuan",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyflxSk0e520b0bf5c0744.add(flxChecked, CopyLabel0bb80e279ffa543, CopyLabel0a5f0c7072dd644);
    var CopyflxSK0ddcce707353f49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "CopyflxSK0ddcce707353f49",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "10%",
        "skin": "slFbox",
        "top": 0,
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    CopyflxSK0ddcce707353f49.setDefaultUnit(kony.flex.DP);
    var CopyLabel0a3fdfd82687943 = new kony.ui.Label({
        "id": "CopyLabel0a3fdfd82687943",
        "isVisible": true,
        "left": 0,
        "onTouchEnd": AS_Label_e30732b62bca4f3280c684cf8ef7c3ff,
        "skin": "CopyslLabel0i38dc35336ca47",
        "text": "Donasi",
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
    var CopyLabel0c941a05695ec4b = new kony.ui.Label({
        "id": "CopyLabel0c941a05695ec4b",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0eb5cacc653014a",
        "text": "dalam aplikasi ini",
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
    CopyflxSK0ddcce707353f49.add(CopyLabel0a3fdfd82687943, CopyLabel0c941a05695ec4b);
    flxAkunTmoney.add(Label0f263ffeb84774f, tbPassTmoney, flxLineTb, tbPinTmoney, flxLineTb2, CopyflxSk0e520b0bf5c0744, CopyflxSK0ddcce707353f49);
    var btnTransferDonasi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "9%",
        "id": "btnTransferDonasi",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "onClick": AS_FlexContainer_i196e1d75de44f619818620041dc70d1,
        "skin": "CopyslFbox0d728fcd76c8146",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    btnTransferDonasi.setDefaultUnit(kony.flex.DP);
    var CopyLabel0b33747311a5c4d = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel0b33747311a5c4d",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0h8034d84c8dc48",
        "text": "Transfer Sekarang",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    btnTransferDonasi.add(CopyLabel0b33747311a5c4d);
    flxTransfer.add(lblRincianDonasi, FlxNamaUserDonasi, flxEmail, flxNoHp, flxJumlah, flxMelalui, flxLineRincian, flxAkunTmoney, btnTransferDonasi);
    var flxBackDonasi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "flxBackDonasi",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "105%",
        "onClick": AS_FlexContainer_e9d5087985b545ce9f0c791923d5ee8f,
        "skin": "slFbox",
        "top": "6%",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flxBackDonasi.setDefaultUnit(kony.flex.DP);
    var backDonasi = new kony.ui.Image2({
        "height": "100%",
        "id": "backDonasi",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "backdonasi.png",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBackDonasi.add(backDonasi);
    var flxCancelTf = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "flxCancelTf",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "185%",
        "onClick": AS_FlexContainer_c28ce2e2f1604781aa9e6950b53c8713,
        "skin": "slFbox",
        "top": "6%",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flxCancelTf.setDefaultUnit(kony.flex.DP);
    var CopycancelDonasi0cacdf166bb6143 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopycancelDonasi0cacdf166bb6143",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "cancel_button.png",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxCancelTf.add(CopycancelDonasi0cacdf166bb6143);
    flxPopupInstansi.add(flxCancel, flxContenPopup, flxTransfer, flxBackDonasi, flxCancelTf);
    var flxBrowserCC = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBrowserCC",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "100%",
        "skin": "slFbox",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBrowserCC.setDefaultUnit(kony.flex.DP);
    var flxHeaderBrowserCC = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHeaderBrowserCC",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "CopyslFbox0c5dc82e703ea46",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeaderBrowserCC.setDefaultUnit(kony.flex.DP);
    var CopyflxBack0d8f90592387d47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxBack0d8f90592387d47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_eb54daa805e74361bc3d62bebb0eb373,
        "skin": "slFbox",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    CopyflxBack0d8f90592387d47.setDefaultUnit(kony.flex.DP);
    var CopybtnBack0b43c8663973e4a = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40%",
        "id": "CopybtnBack0b43c8663973e4a",
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
    CopyflxBack0d8f90592387d47.add(CopybtnBack0b43c8663973e4a);
    var CopyflxTt0baff4ec5d5d349 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxTt0baff4ec5d5d349",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    CopyflxTt0baff4ec5d5d349.setDefaultUnit(kony.flex.DP);
    var CopylblTitleHeader0a046bb78232f43 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopylblTitleHeader0a046bb78232f43",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0ccc1bc837f7a48",
        "text": "Donasi Kartu Kredit",
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
    CopyflxTt0baff4ec5d5d349.add(CopylblTitleHeader0a046bb78232f43);
    flxHeaderBrowserCC.add(CopyflxBack0d8f90592387d47, CopyflxTt0baff4ec5d5d349);
    var browserCC = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "height": "92%",
        "id": "browserCC",
        "isVisible": true,
        "left": "0dp",
        "requestURLConfig": {
            "URL": "",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBrowserCC.add(flxHeaderBrowserCC, browserCC);
    var flxShare = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxShare",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxShare.setDefaultUnit(kony.flex.DP);
    var flxBlack = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBlack",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "onClick": AS_FlexContainer_b5342c4d37b742a1a58504d7cf841407,
        "skin": "CopyslFbox0gd231e5665e049",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBlack.setDefaultUnit(kony.flex.DP);
    var flxRectShare = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxRectShare",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "48%",
        "skin": "slFbox",
        "top": "-50%",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxRectShare.setDefaultUnit(kony.flex.DP);
    var imgRectShare = new kony.ui.Image2({
        "height": "100%",
        "id": "imgRectShare",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "sharerec.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxShare1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flxShare1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxShare1.setDefaultUnit(kony.flex.DP);
    var shareFb = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "75%",
        "id": "shareFb",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "onClick": AS_FlexContainer_a569bde523774e0f9b3794ff338adf0a,
        "skin": "slFbox",
        "top": 0,
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    shareFb.setDefaultUnit(kony.flex.DP);
    var imgFb = new kony.ui.Image2({
        "height": "100%",
        "id": "imgFb",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "efbi.png",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    shareFb.add(imgFb);
    var shareTwit = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "75%",
        "id": "shareTwit",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "onClick": AS_FlexContainer_b0a3e968399c4fa7a141995262a452eb,
        "skin": "slFbox",
        "top": 0,
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    shareTwit.setDefaultUnit(kony.flex.DP);
    var CopyimgFb0j47dffac14154e = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyimgFb0j47dffac14154e",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "twit.png",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    shareTwit.add(CopyimgFb0j47dffac14154e);
    var shareGoogle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "75%",
        "id": "shareGoogle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "onClick": AS_FlexContainer_fc5d50a7b6254cc7b99935264208d0ab,
        "skin": "slFbox",
        "top": 0,
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    shareGoogle.setDefaultUnit(kony.flex.DP);
    var CopyimgFb0a28023142ab847 = new kony.ui.Image2({
        "height": "70%",
        "id": "CopyimgFb0a28023142ab847",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "google_plus.png",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label0e0e4b669b7a440 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0e0e4b669b7a440",
        "isVisible": true,
        "skin": "CopyslLabel0d448286d764b4a",
        "text": "Google+",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "80%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    shareGoogle.add(CopyimgFb0a28023142ab847, Label0e0e4b669b7a440);
    flxShare1.add(shareFb, shareTwit, shareGoogle);
    flxRectShare.add(imgRectShare, flxShare1);
    flxBlack.add(flxRectShare);
    flxShare.add(flxBlack);
    var flxThanks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxThanks",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0i625acfce0c849",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxThanks.setDefaultUnit(kony.flex.DP);
    var flxPopup = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "50%",
        "id": "flxPopup",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "CopyslFbox0f2a5b421517142",
        "top": "0%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxPopup.setDefaultUnit(kony.flex.DP);
    var FlexContainer0c1a04e5e5c1f47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexContainer0c1a04e5e5c1f47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0c1a04e5e5c1f47.setDefaultUnit(kony.flex.DP);
    var lblTerimakasih = new kony.ui.Label({
        "id": "lblTerimakasih",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0i99182891e284e",
        "text": "Terimakasih ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0c1a04e5e5c1f47.add(lblTerimakasih);
    var CopyFlexContainer0aed7a7f1a0474e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "57%",
        "id": "CopyFlexContainer0aed7a7f1a0474e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "0%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0aed7a7f1a0474e.setDefaultUnit(kony.flex.DP);
    var rtxTerimakasihDonasi = new kony.ui.RichText({
        "height": "30%",
        "id": "rtxTerimakasihDonasi",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslRichText0j19e6a62751943",
        "text": "Donasi anda telah kami teruskan ke PMI untuk penggalangan dana Tragedi Siklon Tropis Cempaka.",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var RichText0c585d8a076ae45 = new kony.ui.RichText({
        "height": "70%",
        "id": "RichText0c585d8a076ae45",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslRichText0cac844cd833b4a",
        "text": "Anda akan mendapatkan notifikasi melalui email atau sms dari instansi terkait.\n<br>\n<br>\nJangan lupa untuk mengajak teman-teman Anda dengan menyebarkan pesan kebaikan ini.",
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0aed7a7f1a0474e.add(rtxTerimakasihDonasi, RichText0c585d8a076ae45);
    var CopyflxShare0fb885a6dc0db4b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "14%",
        "id": "CopyflxShare0fb885a6dc0db4b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0e1f855efd32f4f",
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyflxShare0fb885a6dc0db4b.setDefaultUnit(kony.flex.DP);
    var CopybtnFacebook0i81c7651f0b249 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "80%",
        "id": "CopybtnFacebook0i81c7651f0b249",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Image_c072a7b830654eb687edb0e198d78652,
        "skin": "slImage",
        "src": "pesbuk.png",
        "top": "0%",
        "width": "30%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopybtnTwitter0jb2f908ec47047 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "80%",
        "id": "CopybtnTwitter0jb2f908ec47047",
        "isVisible": true,
        "left": "34%",
        "onTouchEnd": AS_NamedActions_d24aa93810734e2390b13b09dcd9dc5b,
        "skin": "slImage0gd294868ee3b47",
        "src": "tw.png",
        "width": "30%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopybtnGoogle0dd85fa4bc90b4a = new kony.ui.Image2({
        "centerY": "50.01%",
        "height": "80%",
        "id": "CopybtnGoogle0dd85fa4bc90b4a",
        "isVisible": true,
        "left": "68%",
        "onTouchEnd": AS_Image_d7711b89c18947daa76edfd39bf29d5f,
        "skin": "slImage0gd294868ee3b47",
        "src": "g.png",
        "width": "30%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyflxShare0fb885a6dc0db4b.add(CopybtnFacebook0i81c7651f0b249, CopybtnTwitter0jb2f908ec47047, CopybtnGoogle0dd85fa4bc90b4a);
    var lblOk = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblOk",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Label_b5e61f5401ed44c292c8637585682024,
        "skin": "CopyslLabel0fd4f98ea51964a",
        "text": "Ok",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxPopup.add(FlexContainer0c1a04e5e5c1f47, CopyFlexContainer0aed7a7f1a0474e, CopyflxShare0fb885a6dc0db4b, lblOk);
    flxThanks.add(flxPopup);
    var flxProgress = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "flxProgress",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "CopyslFbox0ebaf26bf45c24d",
        "top": 0,
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxProgress.setDefaultUnit(kony.flex.DP);
    var slider = new kony.ui.Slider({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20%",
        "id": "slider",
        "isVisible": true,
        "left": "0%",
        "leftSkin": "slSliderLeftBlue",
        "max": 100,
        "min": 0,
        "rightSkin": "slSliderRightBlue",
        "selectedValue": 40,
        "step": 4,
        "thumbImage": "slider_android.png",
        "top": "0%",
        "width": "80%",
        "zIndex": 1
    }, {}, {
        "thickness": 15
    });
    var lblProses = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblProses",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0befe8c8b5d2742",
        "text": "Memproses  donasi anda..",
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
    flxProgress.add(slider, lblProses);
    frmDonasi.add(flxMain, flxPopupInstansi, flxBrowserCC, flxShare, flxThanks, flxProgress);
};

function frmDonasiGlobals() {
    frmDonasi = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDonasi,
        "enabledForIdleTimeout": false,
        "id": "frmDonasi",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_b0e24ccddf9541d4bf782715d44ecf38,
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