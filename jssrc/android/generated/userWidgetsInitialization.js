function initializeUserWidgets() {
    kony.mvc.registry.add("bottombar.botBar", "botBar", "botBarController");
    kony.application.registerMaster({
        "namespace": "bottombar",
        "classname": "botBar",
        "name": "bottombar.botBar"
    });
}