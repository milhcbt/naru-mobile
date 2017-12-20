function AS_Map_g5a7bcd0d14c46d08422e9abe321f6b1(eventobject) {
    frmMap.txtTujuan.text = "";
    frmMap.txtFrom.text = "";
    if (statusLoc === "fromList") {
        frmMap.txtFrom.text = "";
        frmMap.txtFrom.text = locNews;
        geocode(locNews);
    } else if (statusLoc === "fromDesc") {
        frmMap.txtFrom.text = "";
        frmMap.txtFrom.text = locCharity;
        geocode(locCharity);
    } else if (statusLoc === "fromListEvent") {
        frmMap.txtFrom.text = "";
        frmMap.txtFrom.text = locCharEvent;
        geocode(locCharEvent);
    } else if (statusLoc === "fromListTelkom") {
        frmMap.txtFrom.text = "";
        frmMap.txtFrom.text = locCharTelkom;
        geocode(locCharTelkom);
    }
}