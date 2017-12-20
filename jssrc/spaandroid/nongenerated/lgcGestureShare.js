//Type your code here
function gestureOpenShare() {
    frmDetailNews.flxShare.setVisibility(true);
    frmDetailNews.flxRectShare.animate(kony.ui.createAnimation({
        "100": {
            "top": "6%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.00
    }, {
        "animationEnd": function() {}
    });
}

function gestureCloseShare() {
    frmDetailNews.flxRectShare.animate(kony.ui.createAnimation({
        "100": {
            "top": "-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.00
    }, {
        "animationEnd": function() {}
    });
    frmDetailNews.flxShare.setVisibility(false);
}
////////////////////////////// FORM DETAIL PROMO //////////////////////////////////////////
function gestureOpenShareDetailpromo() {
    frmDetailPromo.flxShare.setVisibility(true);
    frmDetailPromo.flxRectShare.animate(kony.ui.createAnimation({
        "100": {
            "top": "6%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.00
    }, {
        "animationEnd": function() {}
    });
}

function gestureCloseShareDetailpromo() {
    frmDetailPromo.flxRectShare.animate(kony.ui.createAnimation({
        "100": {
            "top": "-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.00
    }, {
        "animationEnd": function() {}
    });
    frmDetailPromo.flxShare.setVisibility(false);
}
////////////////////////////// FORM EVENT //////////////////////////////////////////
function gestureOpenShareEvent() {
    frmEvent.flxShare.setVisibility(true);
    frmEvent.flxRectShare.animate(kony.ui.createAnimation({
        "100": {
            "top": "6%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.00
    }, {
        "animationEnd": function() {}
    });
}

function gestureCloseShareEvent() {
    frmEvent.flxRectShare.animate(kony.ui.createAnimation({
        "100": {
            "top": "-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.00
    }, {
        "animationEnd": function() {}
    });
    frmEvent.flxShare.setVisibility(false);
}
////////////////////////////// FORM SUKARELAWAN  //////////////////////////////////////////
function gestureOpenShareSukarelawan() {
    frmSukarelawan.flxShare.setVisibility(true);
    frmSukarelawan.flxRectShare.animate(kony.ui.createAnimation({
        "100": {
            "top": "6%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.00
    }, {
        "animationEnd": function() {}
    });
}

function gestureCloseShareSukarelawan() {
    frmSukarelawan.flxRectShare.animate(kony.ui.createAnimation({
        "100": {
            "top": "-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.00
    }, {
        "animationEnd": function() {}
    });
    frmSukarelawan.flxShare.setVisibility(false);
}
////////////////////////////// FORM SUKARELAWAN  //////////////////////////////////////////
function gestureOpenShareDonasi() {
    frmDonasi.flxShare.setVisibility(true);
    frmDonasi.flxRectShare.animate(kony.ui.createAnimation({
        "100": {
            "top": "6%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.00
    }, {
        "animationEnd": function() {}
    });
}

function gestureCloseShareDonasi() {
    frmDonasi.flxRectShare.animate(kony.ui.createAnimation({
        "100": {
            "top": "-50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1.00
    }, {
        "animationEnd": function() {}
    });
    frmDonasi.flxShare.setVisibility(false);
}