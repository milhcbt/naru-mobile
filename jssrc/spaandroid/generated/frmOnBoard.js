function addWidgetsfrmOnBoard() {
    frmOnBoard.setDefaultUnit(kony.flex.DP);
    var FlexContainer0fe844eae89c14f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0fe844eae89c14f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0fe844eae89c14f.setDefaultUnit(kony.flex.DP);
    var sgmOnBoard = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "CopyLabel0dce7e8df3e0846": "Lanjutkan",
            "Image0e00c9392546c4c": "indicator.png",
            "Image0i7efd03987a146": "obb1p.png",
            "Label0gf2050f7063145": "Lewati",
            "Label0iccfcb935fce41": "Berbagi informasi Penting",
            "RichText0abed7bfd0e7f4c": "Aplikasi TemanBerbagi memudahkan Anda berbagi informasi kepada sesama yang memerlukan bantuan"
        }, {
            "CopyLabel0dce7e8df3e0846": "Lanjutkan",
            "Image0e00c9392546c4c": "indicator2.png",
            "Image0i7efd03987a146": "obb1.png",
            "Label0gf2050f7063145": "Lewati",
            "Label0iccfcb935fce41": "Berbagi Donasi",
            "RichText0abed7bfd0e7f4c": "Aplikasi TemanBerbagi memudahkan Anda berbagi informasi dan melakukan donasi kepada sesama yang memerlukan bantuan"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "sgmOnBoard",
        "isVisible": true,
        "left": "0px",
        "needPageIndicator": false,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox0c65f81f1db3a42,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "CopyFlexContainer0c78403e6ae7847": "CopyFlexContainer0c78403e6ae7847",
            "CopyFlexContainer0e666cffa462e41": "CopyFlexContainer0e666cffa462e41",
            "CopyFlexContainer0e83978e32e4d46": "CopyFlexContainer0e83978e32e4d46",
            "CopyLabel0dce7e8df3e0846": "CopyLabel0dce7e8df3e0846",
            "FlexContainer0a1ad8f873bc542": "FlexContainer0a1ad8f873bc542",
            "FlexContainer0f8f41d6ec39247": "FlexContainer0f8f41d6ec39247",
            "FlexContainer0gd81ea46e56447": "FlexContainer0gd81ea46e56447",
            "Image0e00c9392546c4c": "Image0e00c9392546c4c",
            "Image0i7efd03987a146": "Image0i7efd03987a146",
            "Label0gf2050f7063145": "Label0gf2050f7063145",
            "Label0iccfcb935fce41": "Label0iccfcb935fce41",
            "RichText0abed7bfd0e7f4c": "RichText0abed7bfd0e7f4c",
            "flxMain": "flxMain",
            "lanjut": "lanjut",
            "lewati": "lewati"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0fe844eae89c14f.add(sgmOnBoard);
    frmOnBoard.add(FlexContainer0fe844eae89c14f);
};

function frmOnBoardGlobals() {
    frmOnBoard = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmOnBoard,
        "enabledForIdleTimeout": false,
        "id": "frmOnBoard",
        "init": AS_Form_e85511a472ee4dd1bff64d1e121c7170,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
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