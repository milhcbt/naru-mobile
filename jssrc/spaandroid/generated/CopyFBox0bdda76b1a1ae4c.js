function initializeCopyFBox0bdda76b1a1ae4c() {
    CopyFBox0bdda76b1a1ae4c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "15%",
        "id": "CopyFBox0bdda76b1a1ae4c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0bdda76b1a1ae4c.setDefaultUnit(kony.flex.DP);
    var newsPromoImage = new kony.ui.Image2({
        "bottom": "2%",
        "height": "96%",
        "id": "newsPromoImage",
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
        "left": "0dp",
        "skin": "slFbox0d2631b71606744",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerWeight": 100
    }, {});
    FlexContainer0jc9fa0b5b7d041.setDefaultUnit(kony.flex.DP);
    var newsPromoName = new kony.ui.Label({
        "centerY": "50%",
        "id": "newsPromoName",
        "isVisible": true,
        "left": "5%",
        "maxNumberOfLines": 1,
        "skin": "CopyslLabel0b18f704cbc9540",
        "text": "Label",
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
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FlexContainer0jc9fa0b5b7d041.add(newsPromoName);
    var newsPromoDescription = new kony.ui.RichText({
        "height": "50%",
        "id": "newsPromoDescription",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslRichText0g7d5d7bcc76f45",
        "text": "RichText",
        "top": "3%",
        "width": "85%",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    flxPromo.add(FlexContainer0jc9fa0b5b7d041, newsPromoDescription);
    CopyFBox0bdda76b1a1ae4c.add(newsPromoImage, flxPromo);
}