function AS_FlexScrollContainer_i8d9cc6f58c04b16b6d7a39a3a1ba5f1(eventobject) {
    function MOVE_ACTION____db3e0c69568f472889bfd865c2486bfe_Callback() {}
    flxNewsEvent.flxMain.animate(kony.ui.createAnimation({
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
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____db3e0c69568f472889bfd865c2486bfe_Callback
    });
}