function initializeCopyFBox0fbb44526b21a49() {
    CopyFBox0fbb44526b21a49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": false,
        "height": "100%",
        "id": "CopyFBox0fbb44526b21a49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    CopyFBox0fbb44526b21a49.setDefaultUnit(kony.flex.DP);
    var imgNews = new kony.ui.Image2({
        "height": "100%",
        "id": "imgNews",
        "imageWhileDownloading": "loadingimage.png",
        "isVisible": true,
        "skin": "slImage0g4d75e54832a40",
        "src": "imagedrag.png",
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
    CopyFBox0fbb44526b21a49.add(imgNews);
}