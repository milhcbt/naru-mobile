define(function() {
    var controller = require("bottombar/botBar/userbotBarController");
    var actions = require("bottombar/botBar/botBarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});