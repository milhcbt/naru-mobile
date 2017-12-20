function addWidgetsfrmDetailPromo() {
    frmDetailPromo.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "CopyslFbox0a40b6f3d1e1845",
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
        "onClick": AS_FlexContainer_j65374ac098f499b945fc699e53d7070,
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
        "centerY": "50%",
        "id": "lblTitleHeader",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0ccc1bc837f7a48",
        "text": "Detail Promo",
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
        "onClick": AS_FlexContainer_a7ef27c673f04bc2b2853868c6b04b37,
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
    var flxBrowserPromo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBrowserPromo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "100%",
        "skin": "CopyslFbox0da8444a8a4c54a",
        "top": 0,
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxBrowserPromo.setDefaultUnit(kony.flex.DP);
    var flxHeaderBrowserPromo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxHeaderBrowserPromo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "CopyslFbox0c5dc82e703ea46",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxHeaderBrowserPromo.setDefaultUnit(kony.flex.DP);
    var flxBacktoPromo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBacktoPromo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_efeed207b4e44add8be0cd896ee41683,
        "skin": "slFbox",
        "top": "0%",
        "width": "15%",
        "zIndex": 1
    }, {}, {});
    flxBacktoPromo.setDefaultUnit(kony.flex.DP);
    var CopybtnBack0h2e193ea3cd941 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40%",
        "id": "CopybtnBack0h2e193ea3cd941",
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
    flxBacktoPromo.add(CopybtnBack0h2e193ea3cd941);
    var CopyflxTt0cfa6b51dddd847 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyflxTt0cfa6b51dddd847",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    CopyflxTt0cfa6b51dddd847.setDefaultUnit(kony.flex.DP);
    var CopylblTitleHeader0f8d718789df345 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopylblTitleHeader0f8d718789df345",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0ccc1bc837f7a48",
        "text": "Halaman Promo",
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
    CopyflxTt0cfa6b51dddd847.add(CopylblTitleHeader0f8d718789df345);
    flxHeaderBrowserPromo.add(flxBacktoPromo, CopyflxTt0cfa6b51dddd847);
    var browserPromo = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "height": "100%",
        "htmlString": "Browser",
        "id": "browserPromo",
        "isVisible": true,
        "left": "0dp",
        "top": "8%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBrowserPromo.add(flxHeaderBrowserPromo, browserPromo);
    var FlexContainer0ac19b55dc3f349 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "92%",
        "horizontalScrollIndicator": true,
        "id": "FlexContainer0ac19b55dc3f349",
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
    FlexContainer0ac19b55dc3f349.setDefaultUnit(kony.flex.DP);
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
    var lblNamaEvent = new kony.ui.RichText({
        "id": "lblNamaEvent",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslRichText0ad47fddfe26c45",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblKategoriEvent = new kony.ui.Label({
        "id": "lblKategoriEvent",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0i8fa0c50926d45",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": 3,
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxTitle.add(lblNamaEvent, lblKategoriEvent);
    var sgmImgEvent = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "data": [{}, {}, {}],
        "groupCells": false,
        "height": "30%",
        "id": "sgmImgEvent",
        "isVisible": true,
        "needPageIndicator": false,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFBox0c14f8e0c94cc47,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "4%",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "newsPromoImage": "newsPromoImage"
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxKet = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxKet",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "4%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxKet.setDefaultUnit(kony.flex.DP);
    var lblKet = new kony.ui.Label({
        "id": "lblKet",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0je9f1563511140",
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
    var lblIsiKet = new kony.ui.RichText({
        "id": "lblIsiKet",
        "isVisible": true,
        "left": "0%",
        "skin": "CopyslRichText0d6df4e61356540",
        "top": "7dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxKet.add(lblKet, lblIsiKet);
    var flxUrl = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxUrl",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5%",
        "skin": "slFbox",
        "top": "2%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxUrl.setDefaultUnit(kony.flex.DP);
    var flxBtnMenujuPromo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "flxBtnMenujuPromo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "onClick": AS_FlexContainer_j481031d90e2426cb80be9f23d918eff,
        "skin": "CopyslFbox0ba3539b804a541",
        "top": "15%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBtnMenujuPromo.setDefaultUnit(kony.flex.DP);
    var Label0f84c1c3b6ab849 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0f84c1c3b6ab849",
        "isVisible": true,
        "left": 0,
        "skin": "CopyslLabel0d10899a9234a4d",
        "text": "Menuju Halaman promo",
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
    flxBtnMenujuPromo.add(Label0f84c1c3b6ab849);
    flxUrl.add(flxBtnMenujuPromo);
    var FlexContainer0d2828cd505354e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "5%",
        "id": "FlexContainer0d2828cd505354e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0d2828cd505354e.setDefaultUnit(kony.flex.DP);
    FlexContainer0d2828cd505354e.add();
    FlexContainer0ac19b55dc3f349.add(flxTitle, sgmImgEvent, flxKet, flxUrl, FlexContainer0d2828cd505354e);
    flxMain.add(flxHeader, flxBrowserPromo, FlexContainer0ac19b55dc3f349);
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
        "onClick": AS_FlexContainer_ia54ec165d4d47fdaa6b00c835d03c34,
        "skin": "CopyslFbox0gd231e5665e049",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBlack.setDefaultUnit(kony.flex.DP);
    var flxRectShare = new kony.ui.FlexContainer({
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
        "onClick": AS_FlexContainer_b9a224c23a1a4b5fbdf95f3682506e78,
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
        "left": "0",
        "onClick": AS_FlexContainer_ee7701aeb64d4025b265ec49ffe32542,
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
        "skin": "slImage",
        "src": "twit.png",
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
        "onClick": AS_FlexContainer_f164956297d4442eb5e5b1659eef1653,
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
    frmDetailPromo.add(flxMain, flxShare);
};

function frmDetailPromoGlobals() {
    frmDetailPromo = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDetailPromo,
        "enabledForIdleTimeout": false,
        "id": "frmDetailPromo",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_h9f2dd533819448da230b811f6beb247,
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