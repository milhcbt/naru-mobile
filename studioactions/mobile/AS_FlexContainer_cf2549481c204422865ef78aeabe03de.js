function AS_FlexContainer_cf2549481c204422865ef78aeabe03de(eventobject, x, y) {
    function MOVE_ACTION____cc01dbde0b854203b4b97b20ea4cff75_Callback() {}
    flxNewsEvent.flxMain.animate(kony.ui.createAnimation({
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
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____cc01dbde0b854203b4b97b20ea4cff75_Callback
    });
}