function addWidgetsfrmEvent() {
    frmEvent.setDefaultUnit(kony.flex.DP);
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
        "onClick": AS_FlexContainer_a8644bc79faa4821ab63a37914a8d92a,
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
    var flxTitl = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxTitl",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": 0,
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    flxTitl.setDefaultUnit(kony.flex.DP);
    var lblTitleHeader = new kony.ui.Label({
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
    flxTitl.add(lblTitleHeader);
    var flxBtnShare = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxBtnShare",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "onClick": AS_FlexContainer_e7788274a10243e0b42880760fa852bc,
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
    flxHeader.add(flxBack, flxTitl, flxBtnShare);
    var FlexContainer0d48b9407f9ca4f = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "92%",
        "horizontalScrollIndicator": true,
        "id": "FlexContainer0d48b9407f9ca4f",
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
    FlexContainer0d48b9407f9ca4f.setDefaultUnit(kony.flex.DP);
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
        "rowTemplate": FBox0f116278cf13840,
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
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel0je9f1563511140",
        "text": "Keterangan",
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
    var flxControl = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxControl",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5%",
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "onClick": AS_FlexContainer_ga7f7c93ce5947448eff0813a8b5ce42,
        "skin": "slFbox0ibbf00b592c446",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxControl.setDefaultUnit(kony.flex.DP);
    var btnPetaL = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "btnPetaL",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0d4bfb973636741",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    btnPetaL.setDefaultUnit(kony.flex.DP);
    var lblpetaa = new kony.ui.Label({
        "centerX": "50.00%",
        "centerY": "49.98%",
        "id": "lblpetaa",
        "isVisible": true,
        "left": "7%",
        "skin": "CopyslLabel0f49f6f81449a48",
        "text": "Lihat Promo",
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
    btnPetaL.add(lblpetaa);
    flxControl.add(btnPetaL);
    var FlexContainer0d2828cd505354e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
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
    FlexContainer0d48b9407f9ca4f.add(flxTitle, sgmImgEvent, flxKet, flxControl, FlexContainer0d2828cd505354e);
    flxMain.add(flxHeader, FlexContainer0d48b9407f9ca4f);
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
        "onClick": AS_FlexContainer_eca0b40a72124cfeaf8a855a2576986f,
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
        "onClick": AS_FlexContainer_if756542232342bc8464e42e8ecc4e4d,
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
        "onClick": AS_FlexContainer_d83e514da55942e6b3f75e62892a9d43,
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
        "onClick": AS_FlexContainer_affd8bbeae6540889dc2edd6f0f5e18d,
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
    frmEvent.add(flxMain, flxShare);
};

function frmEventGlobals() {
    frmEvent = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEvent,
        "enabledForIdleTimeout": false,
        "id": "frmEvent",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_bc1febdc77bf4d8090fe8dd6ab4efb91,
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
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};