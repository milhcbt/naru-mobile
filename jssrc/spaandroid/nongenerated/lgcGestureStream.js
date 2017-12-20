function gestureFunc(widgetID, gestureInfo) {
    if (kony.os.toNumber(gestureInfo.gestureType) == 2) {
        h = gestureInfo.swipeDirection;
        if (h == 1) {
            swipeGestureLeftPage();
        } else if (h == 2) {
            swipeGestureRightPage();
        }
    }
}

function gestureFuncHome(widgetID, gestureInfo) {
    if (kony.os.toNumber(gestureInfo.gestureType) == 2) {
        h = gestureInfo.swipeDirection;
        if (h == 1) {
            swipeGestureLeft();
        } else if (h == 2) {
            swipeGestureRight();
        }
    }
}

function geserBrowserPage() {
    frmPantauPage.flxDummyBrowser.setGestureRecognizer(2, {
        fingers: 1
    }, gestureFunc);
    frmPantauPage.flxDummy2.setGestureRecognizer(2, {
        fingers: 1
    }, gestureFunc);
}

function geserBrowser() {
    flxNewsEvent.flxDummyBrowser.setGestureRecognizer(2, {
        fingers: 1
    }, gestureFuncHome);
    flxNewsEvent.flxDummy2.setGestureRecognizer(2, {
        fingers: 1
    }, gestureFuncHome);
}

function swipeGestureLeft() {
    flxNewsEvent.lblVid1.setVisibility(false);
    flxNewsEvent.next1.setVisibility(false);
    flxNewsEvent.lblvid2.setVisibility(true);
    flxNewsEvent.back1.setVisibility(true);
    flxNewsEvent.lok1.setVisibility(false);
    flxNewsEvent.lok2.setVisibility(true);
    flxNewsEvent.browser2.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
    flxNewsEvent.browser.animate(kony.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
}

function swipeGestureRight() {
    flxNewsEvent.lblVid1.setVisibility(true);
    flxNewsEvent.next1.setVisibility(true);
    flxNewsEvent.lblvid2.setVisibility(false);
    flxNewsEvent.back1.setVisibility(false);
    flxNewsEvent.lok1.setVisibility(true);
    flxNewsEvent.lok2.setVisibility(false);
    flxNewsEvent.browser2.animate(kony.ui.createAnimation({
        "100": {
            "left": "100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
    flxNewsEvent.browser.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
}
////////////////////// PAGE /////////////////////
function swipeGestureLeftPage() {
    frmPantauPage.lblVid1.setVisibility(false);
    frmPantauPage.next1.setVisibility(false);
    frmPantauPage.lblvid2.setVisibility(true);
    frmPantauPage.back1.setVisibility(true);
    frmPantauPage.lok1.setVisibility(false);
    frmPantauPage.lok2.setVisibility(true);
    frmPantauPage.browser2.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
    frmPantauPage.browser.animate(kony.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
}

function swipeGestureRightPage() {
    frmPantauPage.lblVid1.setVisibility(true);
    frmPantauPage.next1.setVisibility(true);
    frmPantauPage.lblvid2.setVisibility(false);
    frmPantauPage.back1.setVisibility(false);
    frmPantauPage.lok1.setVisibility(true);
    frmPantauPage.lok2.setVisibility(false);
    frmPantauPage.browser2.animate(kony.ui.createAnimation({
        "100": {
            "left": "100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
    frmPantauPage.browser.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.50
    }, {
        "animationEnd": function() {}
    });
}