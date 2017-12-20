function initializeCopyFBox0c14f8e0c94cc47() {
    CopyFBox0c14f8e0c94cc47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "100%",
        "id": "CopyFBox0c14f8e0c94cc47",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0c14f8e0c94cc47.setDefaultUnit(kony.flex.DP);
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
    CopyFBox0c14f8e0c94cc47.add(newsPromoImage);
}