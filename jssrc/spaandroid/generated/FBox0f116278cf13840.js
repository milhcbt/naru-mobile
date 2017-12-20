function initializeFBox0f116278cf13840() {
    FBox0f116278cf13840 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "100%",
        "id": "FBox0f116278cf13840",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0f116278cf13840.setDefaultUnit(kony.flex.DP);
    var newsPromoImage = new kony.ui.Image2({
        "height": "100%",
        "id": "newsPromoImage",
        "imageWhileDownloading": "loadingimage.png",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": 0,
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
    FBox0f116278cf13840.add(newsPromoImage);
}