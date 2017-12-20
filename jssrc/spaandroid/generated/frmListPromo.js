function addWidgetsfrmListPromo() {
    frmListPromo.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "CopyslFbox0b6fc8547031149",
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
        "onClick": AS_FlexContainer_e3ee2a18999a474c866985efb74d06b3,
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
    var CopylblTitleHeader0da769da7726444 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "CopylblTitleHeader0da769da7726444",
        "isVisible": true,
        "left": 0,
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0ccc1bc837f7a48",
        "text": "Promo",
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxTt.add(CopylblTitleHeader0da769da7726444);
    flxHeader.add(flxBack, flxTt);
    var flxSearchLoc = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxSearchLoc",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "skinPencar",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSearchLoc.setDefaultUnit(kony.flex.DP);
    var mainContainer = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "mainContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "subHeaderMainContainer0f7551270076645",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    mainContainer.setDefaultUnit(kony.flex.DP);
    var subHeaderSearchBar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "65%",
        "id": "subHeaderSearchBar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_USERWIDGET,
        "skin": "subHeaderSearchBackground0a79ea67695df4d",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    subHeaderSearchBar.setDefaultUnit(kony.flex.DP);
    var searchDummy = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "subHeaderSearchTextBoxFocus0a79e7a81d95346",
        "height": "100%",
        "id": "searchDummy",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "onTouchEnd": AS_TextField_d99f2d4724f144cba85c504509ba8a76,
        "placeholder": "Cari Promo",
        "secureTextEntry": false,
        "skin": "skinSearchTxt",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [10, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var txtSearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "subHeaderSearchTextBoxFocus0a79e7a81d95346",
        "height": "100%",
        "id": "txtSearch",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "onDone": AS_TextField_beeb53c3ee314b77b107d0346bd0f68c,
        "placeholder": "Cari Promo",
        "secureTextEntry": false,
        "skin": "skinSearchTxt",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [10, 0, 5, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var btnClose = new kony.ui.Label({
        "centerX": "90%",
        "centerY": "50.00%",
        "height": "100%",
        "id": "btnClose",
        "isVisible": false,
        "left": "0%",
        "onTouchEnd": AS_Label_i3aa2482f37a4ba3940cd134675220ee,
        "right": "0%",
        "skin": "searchbarSearchIcon0c4c6bd45cf9c47",
        "text": "tutup",
        "top": "0%",
        "width": "12%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var imgSearch = new kony.ui.Image2({
        "centerX": "5%",
        "centerY": "50%",
        "height": "50%",
        "id": "imgSearch",
        "isVisible": false,
        "left": "0%",
        "skin": "slImage0ca4c2b4f719c4b",
        "src": "magnifier_tool.png",
        "top": "0%",
        "width": "7%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgDummy = new kony.ui.Image2({
        "centerX": "38%",
        "centerY": "50%",
        "height": "50%",
        "id": "imgDummy",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage0ca4c2b4f719c4b",
        "src": "magnifier_tool.png",
        "top": "0%",
        "width": "7%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    subHeaderSearchBar.add(searchDummy, txtSearch, btnClose, imgSearch, imgDummy);
    mainContainer.add(subHeaderSearchBar);
    flxSearchLoc.add(mainContainer);
    var flxContentNews = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "80%",
        "horizontalScrollIndicator": true,
        "id": "flxContentNews",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFbox0i959a2f3839f47",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxContentNews.setDefaultUnit(kony.flex.DP);
    var sgmListPromo = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "CopynewsPromoImage0id643dab009e47": "imagedrag.png",
            "newsPromoDescription": "RichText",
            "newsPromoImage": "ggagung.jpg",
            "newsPromoName": "Label"
        }, {
            "CopynewsPromoImage0id643dab009e47": "imagedrag.png",
            "newsPromoDescription": "RichText",
            "newsPromoImage": "image_5d1e65f93f20a1e5d51f2ae1036a18f2.jpg",
            "newsPromoName": "Label"
        }, {
            "CopynewsPromoImage0id643dab009e47": "imagedrag.png",
            "newsPromoDescription": "RichText",
            "newsPromoImage": "ggagung.jpg",
            "newsPromoName": "Label"
        }],
        "groupCells": false,
        "id": "sgmListPromo",
        "isVisible": false,
        "left": "5%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_ed2144c1555c409f8ccc4d87ca6f815d,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "right": "5%",
        "rowFocusSkin": "seg0g8d0f3c729e24d",
        "rowSkin": "Copyseg0d305e7399b154e",
        "rowTemplate": CopyFBox0bdda76b1a1ae4c,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader0i38a1aecbc364d",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "f8f8f800",
        "separatorRequired": true,
        "separatorThickness": 10,
        "showScrollbars": false,
        "top": "5%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer0jc9fa0b5b7d041": "FlexContainer0jc9fa0b5b7d041",
            "flxPromo": "flxPromo",
            "newsPromoDescription": "newsPromoDescription",
            "newsPromoImage": "newsPromoImage",
            "newsPromoName": "newsPromoName"
        },
        "width": "90%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxContentNews.add(sgmListPromo);
    flxMain.add(flxHeader, flxSearchLoc, flxContentNews);
    frmListPromo.add(flxMain);
};

function frmListPromoGlobals() {
    frmListPromo = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmListPromo,
        "enabledForIdleTimeout": false,
        "id": "frmListPromo",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_cd80c9cae1054e1db5331b7511c502b6,
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