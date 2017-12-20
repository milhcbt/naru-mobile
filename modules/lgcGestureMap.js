//Type your code here
function gestureMudik(){ 
    flxNewsEvent.mainMap.animate(
    kony.ui.createAnimation({
        "100": {
            "top": "23%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.75
    }, {
        "animationEnd": function(){}
    });
  
  flxNewsEvent.flxDest.animate(
    kony.ui.createAnimation({
        "100": {
            "top": "50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.75
    }, {
        "animationEnd": function(){}
    });
}

function gestureCloseDest(){ 
flxNewsEvent.flxDest.animate(
    kony.ui.createAnimation({
        "100": {
            "top": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.0
    }, {
        "animationEnd": function(){}
    });
  
  flxNewsEvent.mainMap.animate(
    kony.ui.createAnimation({
        "100": {
            "top": "15.5%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.0
    }, {
        "animationEnd": function(){}
    });
}