function initializeCopyFBox0f94de298832946() {
    CopyFBox0f94de298832946 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": false,
        "height": "preferred",
        "id": "CopyFBox0f94de298832946",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0f94de298832946.setDefaultUnit(kony.flex.DP);
    var flxImgNews = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "150dp",
        "id": "flxImgNews",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "CopyslFbox0b9514df151144e",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxImgNews.setDefaultUnit(kony.flex.DP);
    var newsImage = new kony.ui.Image2({
        "height": "100%",
        "id": "newsImage",
        "imageWhileDownloading": "loadingimage.png",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    flxImgNews.add(newsImage);
    var flxContentHot = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxContentHot",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "slFbox",
        "top": "150dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxContentHot.setDefaultUnit(kony.flex.DP);
    var FlexContainer0a15ff256c2ca40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0a15ff256c2ca40",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": 0,
        "skin": "slFbox",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    FlexContainer0a15ff256c2ca40.setDefaultUnit(kony.flex.DP);
    var author = new kony.ui.Label({
        "id": "author",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0ffaab3dded3743",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 3, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var newsTitle = new kony.ui.Label({
        "id": "newsTitle",
        "isVisible": true,
        "left": "5%",
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0ee54d5d3d48049",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "5dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 2, 0, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var newsDescription = new kony.ui.Label({
        "id": "newsDescription",
        "isVisible": true,
        "left": "5%",
        "maxNumberOfLines": 2,
        "skin": "CopyslLabel0d578be1c046343",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "0dp",
        "width": "85%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lblSelengkapnya = new kony.ui.Label({
        "id": "lblSelengkapnya",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0c302cef4519748",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 5],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    FlexContainer0a15ff256c2ca40.add(author, newsTitle, newsDescription, lblSelengkapnya);
    flxContentHot.add(FlexContainer0a15ff256c2ca40);
    var flxBtnPeta = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxBtnPeta",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "75%",
        "onClick": AS_FlexContainer_ff8d98981cce4ae8ba87f503695a0e7d,
        "skin": "slFbox",
        "top": "125dp",
        "width": "18%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxBtnPeta.setDefaultUnit(kony.flex.DP);
    var btnPeta = new kony.ui.Image2({
        "id": "btnPeta",
        "isVisible": true,
        "left": "0",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    flxBtnPeta.add(btnPeta);
    CopyFBox0f94de298832946.add(flxImgNews, flxContentHot, flxBtnPeta);
}