function addWidgetsfrmPantauPage() {
    frmPantauPage.setDefaultUnit(kony.flex.DP);
    var flxPantau = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxPantau",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f9dc2f06fb634d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPantau.setDefaultUnit(kony.flex.DP);
    var flxHeaderPantau = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHeaderPantau",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "CopyslFbox0c5dc82e703ea46",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeaderPantau.setDefaultUnit(kony.flex.DP);
    var flxBack = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBack",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_e1af1317f52e41a79d1edac5508b74af,
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
    var flxnama = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxnama",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "slFbox",
        "top": 0,
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxnama.setDefaultUnit(kony.flex.DP);
    var lblPantau = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPantau",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0ee90a0e9a5eb48",
        "text": "Pantauan Gunung Agung Bali",
        "top": 00,
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
    flxnama.add(lblPantau);
    var flxBtnShare = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBtnShare",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "onClick": AS_FlexContainer_a7ee35f1a03844c08d03f8244bf147d2,
        "skin": "slFbox",
        "top": 0,
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxBtnShare.setDefaultUnit(kony.flex.DP);
    var btnShare = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40%",
        "id": "btnShare",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "ic_shar.png",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBtnShare.add(btnShare);
    flxHeaderPantau.add(flxBack, flxnama, flxBtnShare);
    var flxPantauVideo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxPantauVideo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0h789962c995246",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPantauVideo.setDefaultUnit(kony.flex.DP);
    var browser = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "height": "100%",
        "id": "browser",
        "isVisible": true,
        "left": "0dp",
        "requestURLConfig": {
            "URL": "",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    var browser2 = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "height": "100%",
        "id": "browser2",
        "isVisible": true,
        "left": "100%",
        "requestURLConfig": {
            "URL": "",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    var flxDummyBrowser = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "flxDummyBrowser",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxDummyBrowser.setDefaultUnit(kony.flex.DP);
    var back1 = new kony.ui.Image2({
        "height": "10%",
        "id": "back1",
        "isVisible": false,
        "left": "5%",
        "skin": "slImage",
        "src": "backv.png",
        "top": "90%",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblvid2 = new kony.ui.Label({
        "id": "lblvid2",
        "isVisible": false,
        "left": 0,
        "onTouchEnd": AS_Label_e0d3576f4da64bb38d3cc18190843b72,
        "skin": "CopyslLabel0if8cc86e12c64f",
        "text": "Video lain",
        "top": "90%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxDummyBrowser.add(back1, lblvid2);
    var flxDummy2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80%",
        "id": "flxDummy2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "60%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxDummy2.setDefaultUnit(kony.flex.DP);
    var lblVid1 = new kony.ui.Label({
        "id": "lblVid1",
        "isVisible": true,
        "left": 0,
        "onTouchEnd": AS_Label_b0fd7691a0ac445ca5a06860d026043e,
        "skin": "CopyslLabel0if8cc86e12c64f",
        "text": "Video lain",
        "top": "90%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var next1 = new kony.ui.Image2({
        "height": "10%",
        "id": "next1",
        "isVisible": true,
        "left": "75%",
        "skin": "slImage",
        "src": "nextv.png",
        "top": "90%",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lok1 = new kony.ui.Label({
        "id": "lok1",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0if8cc86e12c64f",
        "text": "Video lain",
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "26.05%",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lok2 = new kony.ui.Label({
        "id": "lok2",
        "isVisible": false,
        "left": 0,
        "skin": "CopyslLabel0if8cc86e12c64f",
        "text": "Video lain",
        "top": "26.05%",
        "width": "85%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxDummy2.add(lblVid1, next1, lok1, lok2);
    var CopyFlexContainer0h697f6aca61c4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "CopyFlexContainer0h697f6aca61c4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "82%",
        "skin": "CopyslFbox0h5cbbb0aefd940",
        "top": "10%",
        "width": "12%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0h697f6aca61c4d.setDefaultUnit(kony.flex.DP);
    var CopyLabel0h8525479220844 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel0h8525479220844",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0e22f0146036f4b",
        "text": "LIVE",
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
    CopyFlexContainer0h697f6aca61c4d.add(CopyLabel0h8525479220844);
    flxPantauVideo.add(browser, browser2, flxDummyBrowser, flxDummy2, CopyFlexContainer0h697f6aca61c4d);
    var flxPantauContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "54%",
        "id": "flxPantauContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "38%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPantauContent.setDefaultUnit(kony.flex.DP);
    var flxBtnPosko = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17%",
        "id": "flxBtnPosko",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "CopyslFbox0c059603ee2aa4b",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBtnPosko.setDefaultUnit(kony.flex.DP);
    var flxControl = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flxControl",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxControl.setDefaultUnit(kony.flex.DP);
    var btnCamp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "btnCamp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_e9cbc4bb5bbe4313af8a8cc7c9f08f91,
        "skin": "CopyslFbox0f9a2cfc752ad42",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    btnCamp.setDefaultUnit(kony.flex.DP);
    var CopyLabel0d17583db4c654f = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel0d17583db4c654f",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0i165d432f9744b",
        "text": "Camp Pengungsian",
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
    btnCamp.add(CopyLabel0d17583db4c654f);
    var btnPosko = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "btnPosko",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "onClick": AS_FlexContainer_a24c8d6522e74776b4169e37b6a687a4,
        "skin": "CopyslFbox0adc6904e092a43",
        "top": 0,
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    btnPosko.setDefaultUnit(kony.flex.DP);
    var CopyLabel0e6f965040c2f49 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopyLabel0e6f965040c2f49",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0i165d432f9744b",
        "text": "Posko",
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
    btnPosko.add(CopyLabel0e6f965040c2f49);
    flxControl.add(btnCamp, btnPosko);
    flxBtnPosko.add(flxControl);
    var sgmGrafik = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "CopyLabel0e6f965040c2f49": "Posko",
            "Label0i6d09f79b8ab4f": "Camp Pegungsian",
            "So": "SO",
            "So2": "2",
            "celsius": "C",
            "co": "CO",
            "co2": "2",
            "derajat": "o",
            "grafikAman": "grafikaman.png",
            "grafikBahaya": "grafikbahay.png",
            "grafikWaspada": "grafikwaspada.png",
            "jumlahBahaya": "2.000",
            "jumlahWaspada": "0.080",
            "lblAman": "AMAN",
            "lblBahaya": "BAHAYA",
            "lblSuhu": "27",
            "lblSuhuAman": "Suhu",
            "lblWasapada": "WASPADA",
            "namaDaerah": "Kondisi Karangasem",
            "ppm": "ppm",
            "ppmWaspada": "ppm"
        }],
        "groupCells": false,
        "height": "80%",
        "id": "sgmGrafik",
        "isVisible": false,
        "left": "5%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0ad9814cf8a2d4b",
        "rowTemplate": CopyFBox0g25744ef9e854e,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "f8f8f800",
        "separatorRequired": true,
        "separatorThickness": 10,
        "showScrollbars": false,
        "top": "23%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "So": "So",
            "So2": "So2",
            "celsius": "celsius",
            "co": "co",
            "co2": "co2",
            "derajat": "derajat",
            "flxAman": "flxAman",
            "flxBahaya": "flxBahaya",
            "flxContentGrafik": "flxContentGrafik",
            "flxIsi": "flxIsi",
            "flxIsiWaspada": "flxIsiWaspada",
            "flxLabel": "flxLabel",
            "flxLabelBahaya": "flxLabelBahaya",
            "flxLabelWaspada": "flxLabelWaspada",
            "flxLine": "flxLine",
            "flxLine2": "flxLine2",
            "flxWaspada": "flxWaspada",
            "grafikAman": "grafikAman",
            "grafikBahaya": "grafikBahaya",
            "grafikWaspada": "grafikWaspada",
            "jumlahBahaya": "jumlahBahaya",
            "jumlahWaspada": "jumlahWaspada",
            "lblAman": "lblAman",
            "lblBahaya": "lblBahaya",
            "lblIsiBahaya": "lblIsiBahaya",
            "lblSuhu": "lblSuhu",
            "lblSuhuAman": "lblSuhuAman",
            "lblWasapada": "lblWasapada",
            "namaDaerah": "namaDaerah",
            "ppm": "ppm",
            "ppmWaspada": "ppmWaspada"
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FlexScrollContainer0df9f9209ba4845 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "97%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0df9f9209ba4845",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox0h7ed95d5ade347",
        "top": "18%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0df9f9209ba4845.setDefaultUnit(kony.flex.DP);
    var FlexContainer0h91a712bb5504c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "60%",
        "id": "FlexContainer0h91a712bb5504c",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0c304e4f049fd48",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0h91a712bb5504c.setDefaultUnit(kony.flex.DP);
    var lblTitik1 = new kony.ui.Label({
        "id": "lblTitik1",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0ce26280bf27c49",
        "text": "Bedamben",
        "top": "2%",
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
    var FlexContainer0feddb908fe064e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "FlexContainer0feddb908fe064e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0feddb908fe064e.setDefaultUnit(kony.flex.DP);
    var Label0hc18a36e417d4c = new kony.ui.Label({
        "id": "Label0hc18a36e417d4c",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Suhu",
        "top": "5%",
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
    var chart1Point1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart1Point1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart1Point1.setDefaultUnit(kony.flex.DP);
    chart1Point1.add();
    var FlexContainer0ce5949f38ed949 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "FlexContainer0ce5949f38ed949",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    FlexContainer0ce5949f38ed949.setDefaultUnit(kony.flex.DP);
    var lblSuhu1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSuhu1",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "27",
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
    var Label0h596102d3ff64f = new kony.ui.Label({
        "id": "Label0h596102d3ff64f",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0c2cd1bc6c93642",
        "text": "O",
        "top": "0%",
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
    var Label0hbe6992df7594b = new kony.ui.Label({
        "id": "Label0hbe6992df7594b",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "C",
        "top": "0%",
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
    FlexContainer0ce5949f38ed949.add(lblSuhu1, Label0h596102d3ff64f, Label0hbe6992df7594b);
    FlexContainer0feddb908fe064e.add(Label0hc18a36e417d4c, chart1Point1, FlexContainer0ce5949f38ed949);
    var CopyFlexContainer0f623899b78e54a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0f623899b78e54a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "34%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0f623899b78e54a.setDefaultUnit(kony.flex.DP);
    var CopyLabel0c1a113876f4645 = new kony.ui.Label({
        "id": "CopyLabel0c1a113876f4645",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "CO2",
        "top": "5%",
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
    var chart1Point2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart1Point2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart1Point2.setDefaultUnit(kony.flex.DP);
    chart1Point2.add();
    var CopyFlexContainer0eb7352bed12641 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0eb7352bed12641",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0eb7352bed12641.setDefaultUnit(kony.flex.DP);
    var lblCO21 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblCO21",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "2000",
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
    var CopyLabel0i351c8c7f44643 = new kony.ui.Label({
        "id": "CopyLabel0i351c8c7f44643",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "ppm",
        "top": "0%",
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
    CopyFlexContainer0eb7352bed12641.add(lblCO21, CopyLabel0i351c8c7f44643);
    CopyFlexContainer0f623899b78e54a.add(CopyLabel0c1a113876f4645, chart1Point2, CopyFlexContainer0eb7352bed12641);
    var CopyFlexContainer0fcdbc45db6824e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0fcdbc45db6824e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "66%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0fcdbc45db6824e.setDefaultUnit(kony.flex.DP);
    var CopyLabel0d1ae4212d1144f = new kony.ui.Label({
        "id": "CopyLabel0d1ae4212d1144f",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Kelembapan",
        "top": "5%",
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
    var chart1Point3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart1Point3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart1Point3.setDefaultUnit(kony.flex.DP);
    chart1Point3.add();
    var CopyFlexContainer0gad31cfaf6b640 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0gad31cfaf6b640",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0gad31cfaf6b640.setDefaultUnit(kony.flex.DP);
    var lblKelembapan1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblKelembapan1",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "0.080",
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
    var CopyLabel0efb4699184f94c = new kony.ui.Label({
        "id": "CopyLabel0efb4699184f94c",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "%",
        "top": "0%",
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
    CopyFlexContainer0gad31cfaf6b640.add(lblKelembapan1, CopyLabel0efb4699184f94c);
    CopyFlexContainer0fcdbc45db6824e.add(CopyLabel0d1ae4212d1144f, chart1Point3, CopyFlexContainer0gad31cfaf6b640);
    var CopyFlexContainer0ja483d42941a43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0ja483d42941a43",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "66%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "55%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0ja483d42941a43.setDefaultUnit(kony.flex.DP);
    var CopyLabel0f85729292d3d4f = new kony.ui.Label({
        "id": "CopyLabel0f85729292d3d4f",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Kecepatan Angin",
        "top": "5%",
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
    var chart1Point5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart1Point5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart1Point5.setDefaultUnit(kony.flex.DP);
    chart1Point5.add();
    var CopyFlexContainer0e2d3838ded1241 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0e2d3838ded1241",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0e2d3838ded1241.setDefaultUnit(kony.flex.DP);
    var lblAngin1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblAngin1",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "5",
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
    var CopyLabel0d157c39ad29c44 = new kony.ui.Label({
        "id": "CopyLabel0d157c39ad29c44",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "km/jam",
        "top": "0%",
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
    CopyFlexContainer0e2d3838ded1241.add(lblAngin1, CopyLabel0d157c39ad29c44);
    CopyFlexContainer0ja483d42941a43.add(CopyLabel0f85729292d3d4f, chart1Point5, CopyFlexContainer0e2d3838ded1241);
    var CopyFlexContainer0i73ad4ed58e042 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0i73ad4ed58e042",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "34%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "55%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0i73ad4ed58e042.setDefaultUnit(kony.flex.DP);
    var Label0b2bda3f805cb4c = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0b2bda3f805cb4c",
        "isVisible": true,
        "skin": "CopyslLabel0e5a7be4db95144",
        "text": "Arah Angin",
        "top": "5%",
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
    var Label0ab7158cc5f1646 = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0ab7158cc5f1646",
        "isVisible": true,
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "U",
        "top": "20%",
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
    var CopyLabel0g2ca2924257149 = new kony.ui.Label({
        "id": "CopyLabel0g2ca2924257149",
        "isVisible": true,
        "left": "20%",
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "B",
        "top": "50%",
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
    var CopyLabel0gd73da1e498a45 = new kony.ui.Label({
        "id": "CopyLabel0gd73da1e498a45",
        "isVisible": true,
        "right": "20%",
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "T",
        "top": "50%",
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
    var CopyLabel0g265767b05694b = new kony.ui.Label({
        "bottom": "0%",
        "centerX": "50%",
        "id": "CopyLabel0g265767b05694b",
        "isVisible": true,
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "S",
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
    var imgCompas = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "60%",
        "height": "35dp",
        "id": "imgCompas",
        "isVisible": true,
        "skin": "slImage0af1a915a257449",
        "src": "shape.png",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0i73ad4ed58e042.add(Label0b2bda3f805cb4c, Label0ab7158cc5f1646, CopyLabel0g2ca2924257149, CopyLabel0gd73da1e498a45, CopyLabel0g265767b05694b, imgCompas);
    var CopyFlexContainer0gb87fe6a560145 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0gb87fe6a560145",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "55%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0gb87fe6a560145.setDefaultUnit(kony.flex.DP);
    var CopyLabel0iff8e9582bbd42 = new kony.ui.Label({
        "id": "CopyLabel0iff8e9582bbd42",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Curah Hujan",
        "top": "5%",
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
    var chart1Point4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart1Point4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart1Point4.setDefaultUnit(kony.flex.DP);
    chart1Point4.add();
    var CopyFlexContainer0a4f56e8250f643 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0a4f56e8250f643",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0a4f56e8250f643.setDefaultUnit(kony.flex.DP);
    var lblHujan1 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblHujan1",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "5",
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
    var CopyLabel0cf9a29b0e3f844 = new kony.ui.Label({
        "id": "CopyLabel0cf9a29b0e3f844",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "mm/10 min",
        "top": "0%",
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
    CopyFlexContainer0a4f56e8250f643.add(lblHujan1, CopyLabel0cf9a29b0e3f844);
    CopyFlexContainer0gb87fe6a560145.add(CopyLabel0iff8e9582bbd42, chart1Point4, CopyFlexContainer0a4f56e8250f643);
    var lblUpdate = new kony.ui.Label({
        "id": "lblUpdate",
        "isVisible": true,
        "right": "3%",
        "skin": "CopyslLabel0a39fb705501b42",
        "text": "waktu",
        "top": "3%",
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
    FlexContainer0h91a712bb5504c.add(lblTitik1, FlexContainer0feddb908fe064e, CopyFlexContainer0f623899b78e54a, CopyFlexContainer0fcdbc45db6824e, CopyFlexContainer0ja483d42941a43, CopyFlexContainer0i73ad4ed58e042, CopyFlexContainer0gb87fe6a560145, lblUpdate);
    var CopyFlexContainer0gdfc5a8a1c724a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75%",
        "id": "CopyFlexContainer0gdfc5a8a1c724a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0c304e4f049fd48",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0gdfc5a8a1c724a.setDefaultUnit(kony.flex.DP);
    var lblTitik2 = new kony.ui.Label({
        "id": "lblTitik2",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0ce26280bf27c49",
        "text": "Bebandem",
        "top": "2%",
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
    var CopyFlexContainer0f8e0df53f1da4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0f8e0df53f1da4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0f8e0df53f1da4d.setDefaultUnit(kony.flex.DP);
    var CopyLabel0c2c83e5cff094d = new kony.ui.Label({
        "id": "CopyLabel0c2c83e5cff094d",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Suhu",
        "top": "5%",
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
    var chart2Point1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart2Point1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart2Point1.setDefaultUnit(kony.flex.DP);
    chart2Point1.add();
    var CopyFlexContainer0d85abcce00f449 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0d85abcce00f449",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0d85abcce00f449.setDefaultUnit(kony.flex.DP);
    var lblSuhu2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSuhu2",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "27",
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
    var CopyLabel0ffd2f8cf68904f = new kony.ui.Label({
        "id": "CopyLabel0ffd2f8cf68904f",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0c2cd1bc6c93642",
        "text": "O",
        "top": "0%",
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
    var CopyLabel0c0dfaf1c7c504c = new kony.ui.Label({
        "id": "CopyLabel0c0dfaf1c7c504c",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "C",
        "top": "0%",
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
    CopyFlexContainer0d85abcce00f449.add(lblSuhu2, CopyLabel0ffd2f8cf68904f, CopyLabel0c0dfaf1c7c504c);
    CopyFlexContainer0f8e0df53f1da4d.add(CopyLabel0c2c83e5cff094d, chart2Point1, CopyFlexContainer0d85abcce00f449);
    var CopyFlexContainer0d02ef91574634f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0d02ef91574634f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "34%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0d02ef91574634f.setDefaultUnit(kony.flex.DP);
    var CopyLabel0i1c07249f5d842 = new kony.ui.Label({
        "id": "CopyLabel0i1c07249f5d842",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "CO2",
        "top": "5%",
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
    var chart2Point2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart2Point2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart2Point2.setDefaultUnit(kony.flex.DP);
    chart2Point2.add();
    var CopyFlexContainer0d32ca2a3d25a41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0d32ca2a3d25a41",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0d32ca2a3d25a41.setDefaultUnit(kony.flex.DP);
    var lblCO22 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblCO22",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "2000",
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
    var CopyLabel0a520a739dd3342 = new kony.ui.Label({
        "id": "CopyLabel0a520a739dd3342",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "ppm",
        "top": "0%",
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
    CopyFlexContainer0d32ca2a3d25a41.add(lblCO22, CopyLabel0a520a739dd3342);
    CopyFlexContainer0d02ef91574634f.add(CopyLabel0i1c07249f5d842, chart2Point2, CopyFlexContainer0d32ca2a3d25a41);
    var CopyFlexContainer0a91aebe392ab49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0a91aebe392ab49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "66%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0a91aebe392ab49.setDefaultUnit(kony.flex.DP);
    var CopyLabel0fbd8afb09b5341 = new kony.ui.Label({
        "id": "CopyLabel0fbd8afb09b5341",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Kelembapan",
        "top": "5%",
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
    var chart2Point3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart2Point3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart2Point3.setDefaultUnit(kony.flex.DP);
    chart2Point3.add();
    var CopyFlexContainer0gfc5bb879f6749 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0gfc5bb879f6749",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0gfc5bb879f6749.setDefaultUnit(kony.flex.DP);
    var lblKelembapan2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblKelembapan2",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "0.080",
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
    var CopyLabel0dff104d3fe5f4b = new kony.ui.Label({
        "id": "CopyLabel0dff104d3fe5f4b",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "%",
        "top": "0%",
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
    CopyFlexContainer0gfc5bb879f6749.add(lblKelembapan2, CopyLabel0dff104d3fe5f4b);
    CopyFlexContainer0a91aebe392ab49.add(CopyLabel0fbd8afb09b5341, chart2Point3, CopyFlexContainer0gfc5bb879f6749);
    var CopyFlexContainer0b407de5c3f2c40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0b407de5c3f2c40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "66%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "55%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0b407de5c3f2c40.setDefaultUnit(kony.flex.DP);
    var CopyLabel0bec31cef1aa548 = new kony.ui.Label({
        "id": "CopyLabel0bec31cef1aa548",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Kecepatan Angin",
        "top": "5%",
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
    var chart2Point5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart2Point5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart2Point5.setDefaultUnit(kony.flex.DP);
    chart2Point5.add();
    var CopyFlexContainer0j3e664a9c59b4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0j3e664a9c59b4d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0j3e664a9c59b4d.setDefaultUnit(kony.flex.DP);
    var lblAngin2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblAngin2",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "5",
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
    var CopyLabel0df5aac638ccf4d = new kony.ui.Label({
        "id": "CopyLabel0df5aac638ccf4d",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "km/jam",
        "top": "0%",
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
    CopyFlexContainer0j3e664a9c59b4d.add(lblAngin2, CopyLabel0df5aac638ccf4d);
    CopyFlexContainer0b407de5c3f2c40.add(CopyLabel0bec31cef1aa548, chart2Point5, CopyFlexContainer0j3e664a9c59b4d);
    var CopyFlexContainer0icf6f8ef72f246 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0icf6f8ef72f246",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "34%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "55%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0icf6f8ef72f246.setDefaultUnit(kony.flex.DP);
    var CopyLabel0f10b473eb21645 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0f10b473eb21645",
        "isVisible": true,
        "skin": "CopyslLabel0e5a7be4db95144",
        "text": "Arah Angin",
        "top": "5%",
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
    var CopyLabel0h2849a5f3c3e4f = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0h2849a5f3c3e4f",
        "isVisible": true,
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "U",
        "top": "20%",
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
    var CopyLabel0fb47258f70a646 = new kony.ui.Label({
        "id": "CopyLabel0fb47258f70a646",
        "isVisible": true,
        "left": "20%",
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "B",
        "top": "50%",
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
    var CopyLabel0gbf64faa3a3e40 = new kony.ui.Label({
        "id": "CopyLabel0gbf64faa3a3e40",
        "isVisible": true,
        "right": "20%",
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "T",
        "top": "50%",
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
    var CopyLabel0g72464858f0a4d = new kony.ui.Label({
        "bottom": "0%",
        "centerX": "50%",
        "id": "CopyLabel0g72464858f0a4d",
        "isVisible": true,
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "S",
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
    var imgCompas2 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "60%",
        "height": "35dp",
        "id": "imgCompas2",
        "isVisible": true,
        "skin": "slImage0af1a915a257449",
        "src": "shape.png",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0icf6f8ef72f246.add(CopyLabel0f10b473eb21645, CopyLabel0h2849a5f3c3e4f, CopyLabel0fb47258f70a646, CopyLabel0gbf64faa3a3e40, CopyLabel0g72464858f0a4d, imgCompas2);
    var CopyFlexContainer0da2e31b4ef4b4b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0da2e31b4ef4b4b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "55%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0da2e31b4ef4b4b.setDefaultUnit(kony.flex.DP);
    var CopyLabel0g8ee0197dfd84d = new kony.ui.Label({
        "id": "CopyLabel0g8ee0197dfd84d",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Curah Hujan",
        "top": "5%",
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
    var chart2Point4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart2Point4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart2Point4.setDefaultUnit(kony.flex.DP);
    chart2Point4.add();
    var CopyFlexContainer0db96236a08c648 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0db96236a08c648",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0db96236a08c648.setDefaultUnit(kony.flex.DP);
    var lblHujan2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblHujan2",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "5",
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
    var CopyLabel0a641d8fe91e14d = new kony.ui.Label({
        "id": "CopyLabel0a641d8fe91e14d",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "mm/10 min",
        "top": "0%",
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
    CopyFlexContainer0db96236a08c648.add(lblHujan2, CopyLabel0a641d8fe91e14d);
    CopyFlexContainer0da2e31b4ef4b4b.add(CopyLabel0g8ee0197dfd84d, chart2Point4, CopyFlexContainer0db96236a08c648);
    var lblUpdate2 = new kony.ui.Label({
        "id": "lblUpdate2",
        "isVisible": true,
        "right": "3%",
        "skin": "CopyslLabel0a39fb705501b42",
        "text": "waktu",
        "top": "3%",
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
    CopyFlexContainer0gdfc5a8a1c724a.add(lblTitik2, CopyFlexContainer0f8e0df53f1da4d, CopyFlexContainer0d02ef91574634f, CopyFlexContainer0a91aebe392ab49, CopyFlexContainer0b407de5c3f2c40, CopyFlexContainer0icf6f8ef72f246, CopyFlexContainer0da2e31b4ef4b4b, lblUpdate2);
    var CopyFlexContainer0j8f81494359c4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75%",
        "id": "CopyFlexContainer0j8f81494359c4e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0c304e4f049fd48",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0j8f81494359c4e.setDefaultUnit(kony.flex.DP);
    var lblTitik3 = new kony.ui.Label({
        "id": "lblTitik3",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0ce26280bf27c49",
        "text": "Tulamben",
        "top": "2%",
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
    var CopyFlexContainer0b6159f770ca846 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0b6159f770ca846",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0b6159f770ca846.setDefaultUnit(kony.flex.DP);
    var CopyLabel0h8b87aaccf2548 = new kony.ui.Label({
        "id": "CopyLabel0h8b87aaccf2548",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Suhu",
        "top": "5%",
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
    var chart3Point1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart3Point1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart3Point1.setDefaultUnit(kony.flex.DP);
    chart3Point1.add();
    var CopyFlexContainer0a9bdb515c40247 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0a9bdb515c40247",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0a9bdb515c40247.setDefaultUnit(kony.flex.DP);
    var lblSuhu3 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblSuhu3",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "27",
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
    var CopyLabel0f04f7ba3dbf541 = new kony.ui.Label({
        "id": "CopyLabel0f04f7ba3dbf541",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0c2cd1bc6c93642",
        "text": "O",
        "top": "0%",
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
    var CopyLabel0c985f29d450a47 = new kony.ui.Label({
        "id": "CopyLabel0c985f29d450a47",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "C",
        "top": "0%",
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
    CopyFlexContainer0a9bdb515c40247.add(lblSuhu3, CopyLabel0f04f7ba3dbf541, CopyLabel0c985f29d450a47);
    CopyFlexContainer0b6159f770ca846.add(CopyLabel0h8b87aaccf2548, chart3Point1, CopyFlexContainer0a9bdb515c40247);
    var CopyFlexContainer0ad913a39781f4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0ad913a39781f4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "34%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0ad913a39781f4d.setDefaultUnit(kony.flex.DP);
    var CopyLabel0f9956431a7a046 = new kony.ui.Label({
        "id": "CopyLabel0f9956431a7a046",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "CO2",
        "top": "5%",
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
    var chart3Point2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart3Point2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart3Point2.setDefaultUnit(kony.flex.DP);
    chart3Point2.add();
    var CopyFlexContainer0g18447c9d14640 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0g18447c9d14640",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0g18447c9d14640.setDefaultUnit(kony.flex.DP);
    var lblCO23 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblCO23",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "2000",
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
    var CopyLabel0a8597eeae7084b = new kony.ui.Label({
        "id": "CopyLabel0a8597eeae7084b",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "ppm",
        "top": "0%",
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
    CopyFlexContainer0g18447c9d14640.add(lblCO23, CopyLabel0a8597eeae7084b);
    CopyFlexContainer0ad913a39781f4d.add(CopyLabel0f9956431a7a046, chart3Point2, CopyFlexContainer0g18447c9d14640);
    var CopyFlexContainer0f383189fe6074d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0f383189fe6074d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "66%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "12%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0f383189fe6074d.setDefaultUnit(kony.flex.DP);
    var CopyLabel0g1babed2cfab4d = new kony.ui.Label({
        "id": "CopyLabel0g1babed2cfab4d",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Kelembapan",
        "top": "5%",
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
    var chart3Point3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart3Point3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart3Point3.setDefaultUnit(kony.flex.DP);
    chart3Point3.add();
    var CopyFlexContainer0deb161b0e35245 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0deb161b0e35245",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0deb161b0e35245.setDefaultUnit(kony.flex.DP);
    var lblKelembapan3 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblKelembapan3",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "0.080",
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
    var CopyLabel0b16ca2e21d3948 = new kony.ui.Label({
        "id": "CopyLabel0b16ca2e21d3948",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "%",
        "top": "0%",
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
    CopyFlexContainer0deb161b0e35245.add(lblKelembapan3, CopyLabel0b16ca2e21d3948);
    CopyFlexContainer0f383189fe6074d.add(CopyLabel0g1babed2cfab4d, chart3Point3, CopyFlexContainer0deb161b0e35245);
    var CopyFlexContainer0g9a2f90aedea41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0g9a2f90aedea41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "66%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "55%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0g9a2f90aedea41.setDefaultUnit(kony.flex.DP);
    var CopyLabel0c3d0e6b6dbae4c = new kony.ui.Label({
        "id": "CopyLabel0c3d0e6b6dbae4c",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Kecepatan Angin",
        "top": "5%",
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
    var chart3Point5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart3Point5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart3Point5.setDefaultUnit(kony.flex.DP);
    chart3Point5.add();
    var CopyFlexContainer0ide31239b55248 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0ide31239b55248",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0ide31239b55248.setDefaultUnit(kony.flex.DP);
    var lblAngin3 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblAngin3",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "5",
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
    var CopyLabel0g983a920f5ac4e = new kony.ui.Label({
        "id": "CopyLabel0g983a920f5ac4e",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "km/jam",
        "top": "0%",
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
    CopyFlexContainer0ide31239b55248.add(lblAngin3, CopyLabel0g983a920f5ac4e);
    CopyFlexContainer0g9a2f90aedea41.add(CopyLabel0c3d0e6b6dbae4c, chart3Point5, CopyFlexContainer0ide31239b55248);
    var CopyFlexContainer0b521f958e33a40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0b521f958e33a40",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "34%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "55%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0b521f958e33a40.setDefaultUnit(kony.flex.DP);
    var CopyLabel0ibe051afc65e46 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0ibe051afc65e46",
        "isVisible": true,
        "skin": "CopyslLabel0e5a7be4db95144",
        "text": "Arah Angin",
        "top": "5%",
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
    var CopyLabel0ef5342f01fbd4a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0ef5342f01fbd4a",
        "isVisible": true,
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "U",
        "top": "20%",
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
    var CopyLabel0h3983ff954e64f = new kony.ui.Label({
        "id": "CopyLabel0h3983ff954e64f",
        "isVisible": true,
        "left": "20%",
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "B",
        "top": "50%",
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
    var CopyLabel0g3d8e947b7814a = new kony.ui.Label({
        "id": "CopyLabel0g3d8e947b7814a",
        "isVisible": true,
        "right": "20%",
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "T",
        "top": "50%",
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
    var CopyLabel0i6abee3f268148 = new kony.ui.Label({
        "bottom": "0%",
        "centerX": "50%",
        "id": "CopyLabel0i6abee3f268148",
        "isVisible": true,
        "skin": "CopyslLabel0f0bdd99f0f634e",
        "text": "S",
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
    var imgCompas3 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "60%",
        "height": "35dp",
        "id": "imgCompas3",
        "isVisible": true,
        "skin": "slImage0af1a915a257449",
        "src": "shape.png",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0b521f958e33a40.add(CopyLabel0ibe051afc65e46, CopyLabel0ef5342f01fbd4a, CopyLabel0h3983ff954e64f, CopyLabel0g3d8e947b7814a, CopyLabel0i6abee3f268148, imgCompas3);
    var CopyFlexContainer0b12875406dad44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "CopyFlexContainer0b12875406dad44",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "CopyslFbox0d84322b017d942",
        "top": "55%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0b12875406dad44.setDefaultUnit(kony.flex.DP);
    var CopyLabel0i73b1fceccb446 = new kony.ui.Label({
        "id": "CopyLabel0i73b1fceccb446",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0a1d8a8a1e59e41",
        "text": "Curah Hujan",
        "top": "5%",
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
    var chart3Point4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "chart3Point4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "52%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    chart3Point4.setDefaultUnit(kony.flex.DP);
    chart3Point4.add();
    var CopyFlexContainer0gdfc7aa841674d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "CopyFlexContainer0gdfc7aa841674d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "skin": "slFbox0f0d772774b2c47",
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0gdfc7aa841674d.setDefaultUnit(kony.flex.DP);
    var lblHujan3 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblHujan3",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0fc141d1bc22541",
        "text": "5",
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
    var CopyLabel0abda1ee726064d = new kony.ui.Label({
        "id": "CopyLabel0abda1ee726064d",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0gced06a06fb54f",
        "text": "mm/10 min",
        "top": "0%",
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
    CopyFlexContainer0gdfc7aa841674d.add(lblHujan3, CopyLabel0abda1ee726064d);
    CopyFlexContainer0b12875406dad44.add(CopyLabel0i73b1fceccb446, chart3Point4, CopyFlexContainer0gdfc7aa841674d);
    var lblUpdate3 = new kony.ui.Label({
        "id": "lblUpdate3",
        "isVisible": true,
        "right": "3%",
        "skin": "CopyslLabel0a39fb705501b42",
        "text": "waktu",
        "top": "3%",
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
    CopyFlexContainer0j8f81494359c4e.add(lblTitik3, CopyFlexContainer0b6159f770ca846, CopyFlexContainer0ad913a39781f4d, CopyFlexContainer0f383189fe6074d, CopyFlexContainer0g9a2f90aedea41, CopyFlexContainer0b521f958e33a40, CopyFlexContainer0b12875406dad44, lblUpdate3);
    FlexScrollContainer0df9f9209ba4845.add(FlexContainer0h91a712bb5504c, CopyFlexContainer0gdfc5a8a1c724a, CopyFlexContainer0j8f81494359c4e);
    flxPantauContent.add(flxBtnPosko, sgmGrafik, FlexScrollContainer0df9f9209ba4845);
    flxPantau.add(flxHeaderPantau, flxPantauVideo, flxPantauContent);
    frmPantauPage.add(flxPantau);
};

function frmPantauPageGlobals() {
    frmPantauPage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPantauPage,
        "enabledForIdleTimeout": false,
        "id": "frmPantauPage",
        "init": AS_Form_g16d1e74000e43c196b365460d35f754,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_aeba2a3961ff4ff0a10c866c8fbec8ec,
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