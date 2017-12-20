function initializeCopyFBox0h59ce7dd3c074b() {
    CopyFBox0h59ce7dd3c074b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "25%",
        "id": "CopyFBox0h59ce7dd3c074b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0h59ce7dd3c074b.setDefaultUnit(kony.flex.DP);
    var newsImage = new kony.ui.Image2({
        "bottom": "2%",
        "height": "96%",
        "id": "newsImage",
        "imageWhileDownloading": "loadingpage.png",
        "isVisible": true,
        "left": "0.60%",
        "skin": "slImage0ca4c2b4f719c4b",
        "src": "imagedrag.png",
        "top": "2%",
        "width": "37%",
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
    var flxPromo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxPromo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox0d2631b71606744",
        "top": 0,
        "width": "63%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    flxPromo.setDefaultUnit(kony.flex.DP);
    var FlexContainer0jc9fa0b5b7d041 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "FlexContainer0jc9fa0b5b7d041",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox0d2631b71606744",
        "top": "0%",
        "width": "95%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    FlexContainer0jc9fa0b5b7d041.setDefaultUnit(kony.flex.DP);
    var newsTitle = new kony.ui.Label({
        "centerY": "50%",
        "id": "newsTitle",
        "isVisible": true,
        "left": "5%",
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0b18f704cbc9540",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "width": "72%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    FlexContainer0jc9fa0b5b7d041.add(newsTitle);
    var newsDescription = new kony.ui.Label({
        "height": "45%",
        "id": "newsDescription",
        "isVisible": true,
        "left": "5%",
        "maxNumberOfLines": 3,
        "maxWidth": "40%",
        "skin": "CopyslLabel0acd6cf11f2ec4b",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": 0,
        "width": "87%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var author = new kony.ui.Label({
        "id": "author",
        "isVisible": true,
        "left": "5%",
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0a59b672b38d54c",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5%",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    flxPromo.add(FlexContainer0jc9fa0b5b7d041, newsDescription, author);
    CopyFBox0h59ce7dd3c074b.add(newsImage, flxPromo);
}