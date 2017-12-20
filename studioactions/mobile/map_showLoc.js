function map_showLoc(eventobject) {
    return AS_Map_d9ad4bb379704dd8ba5823859fa83e5b(eventobject);
}

function AS_Map_d9ad4bb379704dd8ba5823859fa83e5b(eventobject) {
    alert(locCharity);
    frmMap.txtFrom.text = locCharity;
    geocode(locCharity);
}