//Type your code here
function gestureBrowserPromo() {
    frmDetailPromo.flxBrowserPromo.animate(kony.ui.createAnimation({
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

function gestureBackLogin() {
    frmDonasi.flxBrowserLogin.animate(kony.ui.createAnimation({
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
}

function gestureBackPromo() {
    frmDetailPromo.flxBrowserPromo.animate(kony.ui.createAnimation({
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
}