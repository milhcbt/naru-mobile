function addWidgetsfrmDetailNews() {
    frmDetailNews.setDefaultUnit(kony.flex.DP);
    var flxmain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxmain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxmain.setDefaultUnit(kony.flex.DP);
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
        "onClick": AS_FlexContainer_aed123e2f4fb43b58a996e753c78074b,
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
        "text": "Detail Berita",
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
    var flxBtnShare = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBtnShare",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "onClick": AS_FlexContainer_c131567ff21e43eb9e347046ce6fbb39,
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
    flxHeader.add(flxBack, flxTt, flxBtnShare);
    var flxContent = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "92%",
        "horizontalScrollIndicator": true,
        "id": "flxContent",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "8%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContent.setDefaultUnit(kony.flex.DP);
    var flxTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxTitle",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "4%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxTitle.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.RichText({
        "id": "lblTitle",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslRichText0i58a83fb4dfe43",
        "text": "News",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTypeNews = new kony.ui.Label({
        "id": "lblTypeNews",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0c2724f91832949",
        "text": "-",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": 8,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxTitle.add(lblTitle, lblTypeNews);
    var sgmImage = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{}, {}, {}],
        "groupCells": false,
        "height": "30%",
        "id": "sgmImage",
        "isVisible": true,
        "left": "5%",
        "needPageIndicator": false,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg0a54decdef0ff4e",
        "rowSkin": "seg0ae17c6f6cea148",
        "rowTemplate": CopyFBox0fbb44526b21a49,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader0j98ae6c5477c40",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": true,
        "showScrollbars": false,
        "top": "3%",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "imgNews": "imgNews"
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxBtnMap = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxBtnMap",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "75%",
        "onClick": AS_FlexContainer_dfe5d463a4314f54b110243468229acb,
        "skin": "slFbox",
        "top": "-5%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxBtnMap.setDefaultUnit(kony.flex.DP);
    var Image0b7c1b3eed86d4c = new kony.ui.Image2({
        "id": "Image0b7c1b3eed86d4c",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "btnlokasi1.png",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBtnMap.add(Image0b7c1b3eed86d4c);
    var flxKetNews = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxKetNews",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "0%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxKetNews.setDefaultUnit(kony.flex.DP);
    var lblKeter = new kony.ui.Label({
        "id": "lblKeter",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0da1ad491bdc14c",
        "text": "Keterangan",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0px",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var rtxKet = new kony.ui.RichText({
        "id": "rtxKet",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslRichText0g35949f77e244c",
        "text": "-",
        "top": "7dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxKetNews.add(lblKeter, rtxKet);
    var flxLokasi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxLokasi",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxLokasi.setDefaultUnit(kony.flex.DP);
    var lblLokasi = new kony.ui.Label({
        "id": "lblLokasi",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0g8a695e595554a",
        "text": "Lokasi",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 5,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var rtxLokasi = new kony.ui.RichText({
        "id": "rtxLokasi",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslRichText0dce5ea8b36fe42",
        "text": "-",
        "top": "7dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLokasi.add(lblLokasi, rtxLokasi);
    var flxDampak = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxDampak",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxDampak.setDefaultUnit(kony.flex.DP);
    var lblDampak = new kony.ui.Label({
        "id": "lblDampak",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0g8a695e595554a",
        "text": "Dampak bencana",
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
    var rtxDampak = new kony.ui.RichText({
        "id": "rtxDampak",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslRichText0c7e2b28832a24e",
        "text": "-",
        "top": "7dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDampak.add(lblDampak, rtxDampak);
    var flxControl = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "flxControl",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "slFbox0cca31873ecb64e",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxControl.setDefaultUnit(kony.flex.DP);
    var btnDonasiEvent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "btnDonasiEvent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.00%",
        "onClick": AS_FlexContainer_ab64bc030f864846b81a59d73d3e3485,
        "skin": "CopyslFbox0c3ed86af2ea549",
        "top": "0.00%",
        "width": "47.50%",
        "zIndex": 1
    }, {}, {});
    btnDonasiEvent.setDefaultUnit(kony.flex.DP);
    var lblDonasi = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblDonasi",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0f90560ad111945",
        "text": "Donasi",
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
    btnDonasiEvent.add(lblDonasi);
    var btnSukarelawan = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "btnSukarelawan",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "4%",
        "onClick": AS_FlexContainer_b3dffb3d4c924776911582e143d743ae,
        "skin": "CopyslFbox0c4b396e6206943",
        "width": "47.50%",
        "zIndex": 1
    }, {}, {});
    btnSukarelawan.setDefaultUnit(kony.flex.DP);
    var Label0ffce2e3b7d8d44 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0ffce2e3b7d8d44",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslLabel0d77ee7f776e447",
        "text": "Sukarelawan",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    btnSukarelawan.add(Label0ffce2e3b7d8d44);
    flxControl.add(btnDonasiEvent, btnSukarelawan);
    var FlexContainer0j3f70c49f79f49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "FlexContainer0j3f70c49f79f49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0j3f70c49f79f49.setDefaultUnit(kony.flex.DP);
    FlexContainer0j3f70c49f79f49.add();
    flxContent.add(flxTitle, sgmImage, flxBtnMap, flxKetNews, flxLokasi, flxDampak, flxControl, FlexContainer0j3f70c49f79f49);
    flxmain.add(flxHeader, flxContent);
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
        "onClick": AS_FlexContainer_h8b4df1b9d734277b9fe1cd975a6f0cc,
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
        "onClick": AS_FlexContainer_ca631e42023446d89c3736a112b5f777,
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
        "onClick": AS_FlexContainer_h9903e31c48a4474b2721fc6d7e8c59f,
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
        "onClick": AS_FlexContainer_e441afc578b84b7c8cb33be205a88722,
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
    frmDetailNews.add(flxmain, flxShare);
};

function frmDetailNewsGlobals() {
    frmDetailNews = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDetailNews,
        "enabledForIdleTimeout": false,
        "id": "frmDetailNews",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_h51b632e90734c29bbaf9dae9416fa25,
        "skin": "CopyslForm0ae353c79d7374a"
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