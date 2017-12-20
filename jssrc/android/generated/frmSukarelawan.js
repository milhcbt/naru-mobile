function addWidgetsfrmSukarelawan() {
    frmSukarelawan.setDefaultUnit(kony.flex.DP);
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
        "onClick": AS_FlexContainer_hc8b499ee50b4eee810187b55677712d,
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
        "text": "Sukarelawan",
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
    var lblSukarelawan = new kony.ui.Label({
        "id": "lblSukarelawan",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0df64d13bee4849",
        "text": "DAFTAR JADI SUKARELAWAN",
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
    var lblNamaTragedy = new kony.ui.RichText({
        "id": "lblNamaTragedy",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslRichText0c74d7b92df724f",
        "top": "1%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblOptIdentitas = new kony.ui.Label({
        "id": "lblOptIdentitas",
        "isVisible": true,
        "left": "5.390000000000001%",
        "skin": "CopyslLabel0f448ed857c3f43",
        "text": "Harap memasukan identitas anda",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "4%",
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
        "onTouchEnd": AS_Image_ae8d6596d1074d4ba39abf20da1b592b,
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
        "skin": "CopyslTextBox0i76324a38eb148",
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
        "placeholderSkin": "CopyslTextBox0ce982e899f2849",
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
        "skin": "CopyslTextBox0i76324a38eb148",
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
        "placeholderSkin": "CopyslTextBox0eea7215a0b9b48",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    Copyflxbtn0b09047eb94954d.add(txtNama, txtAlamat);
    var lblKet1 = new kony.ui.Label({
        "id": "lblKet1",
        "isVisible": true,
        "left": "5.39%",
        "skin": "CopyslLabel0f448ed857c3f43",
        "text": "Dan nomor ponsel anda untuk menerima SMS",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3.00%",
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
        "text": "Status sukarelawan :",
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
        "skin": "CopyslTextBox0je00608bce9143",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "2.00%",
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
        "placeholderSkin": "CopyslTextBox0ja5ce1a7ea0642",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopylblKet0e390f2c81b6140 = new kony.ui.Label({
        "id": "CopylblKet0e390f2c81b6140",
        "isVisible": true,
        "left": "5.390000000000001%",
        "skin": "CopyslLabel0f448ed857c3f43",
        "text": "Instansi Pengelola",
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
    var Image0gefb3e96d1af4e = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0gefb3e96d1af4e",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_duafa.png",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxInstansi.add(Image0gefb3e96d1af4e);
    var flxSK = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3%",
        "id": "flxSK",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "3%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSK.setDefaultUnit(kony.flex.DP);
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
        "width": "5%",
        "zIndex": 1
    }, {}, {});
    flxChecked.setDefaultUnit(kony.flex.DP);
    var uncheckedSK = new kony.ui.Image2({
        "height": "100%",
        "id": "uncheckedSK",
        "isVisible": true,
        "left": 0,
        "onTouchEnd": AS_Image_bd96b76536de48bb8db7f8ba5ebe1600,
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
        "onTouchEnd": AS_Image_f2ad957af1ff4988a93bad12ff87cdd2,
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
        "onTouchEnd": AS_Label_bbec841e67e041cbb88ad14947cde131,
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
    flxSK.add(flxChecked, CopyLabel0bb80e279ffa543, CopyLabel0a5f0c7072dd644);
    var flxSK2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3%",
        "id": "flxSK2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "13%",
        "skin": "slFbox",
        "top": 0,
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    flxSK2.setDefaultUnit(kony.flex.DP);
    var CopyLabel0a3fdfd82687943 = new kony.ui.Label({
        "id": "CopyLabel0a3fdfd82687943",
        "isVisible": true,
        "left": 0,
        "onTouchEnd": AS_Label_h22cd1d8ce3940a2b38beb049f6bb685,
        "skin": "CopyslLabel0i38dc35336ca47",
        "text": "Relawan",
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
    flxSK2.add(CopyLabel0a3fdfd82687943, CopyLabel0c941a05695ec4b);
    var btnTf = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "btnTf",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "onClick": AS_FlexContainer_a3fde87dcb914bcfb9d81ccb91a28211,
        "skin": "CopyslFbox0d728fcd76c8146",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    btnTf.setDefaultUnit(kony.flex.DP);
    var Label0f2e784ed9c994e = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0f2e784ed9c994e",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0h8034d84c8dc48",
        "text": "Daftar Sekarang",
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
    btnTf.add(Label0f2e784ed9c994e);
    var FlexContainer0d4b5cfc7582049 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "FlexContainer0d4b5cfc7582049",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0d4b5cfc7582049.setDefaultUnit(kony.flex.DP);
    FlexContainer0d4b5cfc7582049.add();
    flxBody.add(lblSukarelawan, lblNamaTragedy, lblOptIdentitas, flxbtn, lblOr, Copyflxbtn0b09047eb94954d, lblKet1, lblKet2, txtPonsel, CopylblKet0e390f2c81b6140, flxInstansi, flxSK, flxSK2, btnTf, FlexContainer0d4b5cfc7582049);
    flxMain.add(flxHeader, flxBody);
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
        "text": "Proses Mendaftar",
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
    var flxThanks = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxThanks",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0i625acfce0c849",
        "top": "0dp",
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
        "height": "7%",
        "id": "FlexContainer0c1a04e5e5c1f47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": "8%",
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
        "height": "55%",
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
    var rtxTerimakasihVolunteer = new kony.ui.RichText({
        "height": "30%",
        "id": "rtxTerimakasihVolunteer",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslRichText0j19e6a62751943",
        "text": "Permintaan anda kami teruskan ke ______ untuk menjadi sukarelawan.",
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
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0aed7a7f1a0474e.add(rtxTerimakasihVolunteer, RichText0c585d8a076ae45);
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
        "top": "5%",
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
        "onClick": AS_FlexContainer_b285f5ea28ea45ce886a2302be77eb6a,
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
        "onClick": AS_FlexContainer_h1fee981b6294d248cc7ef408952a592,
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
        "onClick": AS_FlexContainer_i49405ac260446b0a2a0ea00909b3e9e,
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
        "onClick": AS_FlexContainer_ccd145c5e55f4d5e9896c22b90446df7,
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
    frmSukarelawan.add(flxMain, flxProgress, flxThanks, flxShare);
};

function frmSukarelawanGlobals() {
    frmSukarelawan = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSukarelawan,
        "enabledForIdleTimeout": false,
        "id": "frmSukarelawan",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_h3687ccab6424af4ad27e9aefe887399,
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