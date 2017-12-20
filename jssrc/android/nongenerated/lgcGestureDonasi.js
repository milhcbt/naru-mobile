//Type your code here
function gestureDonasilanjut() {
    frmDonasi.flxContenPopup.animate(kony.ui.createAnimation({
        "100": {
            "left": "-105%",
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
    frmDonasi.flxCancel.animate(kony.ui.createAnimation({
        "100": {
            "left": "-105%",
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
    frmDonasi.flxTransfer.animate(kony.ui.createAnimation({
        "100": {
            "left": "5%",
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
    frmDonasi.flxCancelTf.animate(kony.ui.createAnimation({
        "100": {
            "left": "85%",
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
    frmDonasi.flxBackDonasi.animate(kony.ui.createAnimation({
        "100": {
            "left": "5%",
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
///////////////////////////////////////// BCAK DONASI ///////////////////////////////////////////////////
function gestureBackDonasi() {
    frmDonasi.flxContenPopup.animate(kony.ui.createAnimation({
        "100": {
            "left": "5%",
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
    frmDonasi.flxCancel.animate(kony.ui.createAnimation({
        "100": {
            "left": "85%",
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
    frmDonasi.flxTransfer.animate(kony.ui.createAnimation({
        "100": {
            "left": "105%",
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
    frmDonasi.flxCancelTf.animate(kony.ui.createAnimation({
        "100": {
            "left": "185%",
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
    frmDonasi.flxBackDonasi.animate(kony.ui.createAnimation({
        "100": {
            "left": "105%",
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