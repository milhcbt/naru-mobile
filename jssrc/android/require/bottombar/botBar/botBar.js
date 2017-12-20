define(function() {
    return function(controller) {
        var botBar = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "botBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        botBar.setDefaultUnit(kony.flex.DP);
        var flxBotBar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8%",
            "id": "flxBotBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyslFbox0dd326f1175fb44",
            "top": "92%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBotBar.setDefaultUnit(kony.flex.DP);
        var imgHome = new kony.ui.Image2({
            "height": "100%",
            "id": "imgHome",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "home.png",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgPantau = new kony.ui.Image2({
            "height": "100%",
            "id": "imgPantau",
            "isVisible": true,
            "left": "25%",
            "skin": "slImage",
            "src": "pantauan.png",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgPencarian = new kony.ui.Image2({
            "height": "100%",
            "id": "imgPencarian",
            "isVisible": true,
            "left": "50%",
            "skin": "slImage",
            "src": "pencarian.png",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgLain = new kony.ui.Image2({
            "height": "100%",
            "id": "imgLain",
            "isVisible": true,
            "left": "75%",
            "skin": "slImage",
            "src": "lainnya.png",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgHomeFocus = new kony.ui.Image2({
            "height": "100%",
            "id": "imgHomeFocus",
            "isVisible": true,
            "left": 0,
            "skin": "slImage",
            "src": "homefocus.png",
            "top": 0,
            "width": "25%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgPantauFocus = new kony.ui.Image2({
            "height": "100%",
            "id": "imgPantauFocus",
            "isVisible": false,
            "left": "25%",
            "skin": "slImage",
            "src": "pantauanfocus.png",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgPencarianFocus = new kony.ui.Image2({
            "height": "100%",
            "id": "imgPencarianFocus",
            "isVisible": false,
            "left": "75%",
            "skin": "slImage",
            "src": "lainnyafocus.png",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgLainFocus = new kony.ui.Image2({
            "height": "100%",
            "id": "imgLainFocus",
            "isVisible": false,
            "left": "50%",
            "skin": "slImage",
            "src": "pencarianfocus.png",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBotBar.add(imgHome, imgPantau, imgPencarian, imgLain, imgHomeFocus, imgPantauFocus, imgPencarianFocus, imgLainFocus);
        botBar.add(flxBotBar);
        return botBar;
    }
})