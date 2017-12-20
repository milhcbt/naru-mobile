//Type your code here

var locNews="";
var statusLoc="";
var locCharEvent="";
var locCharTelkom="";
var locCharity="";

function getMapListNews(){
  var obj = flxNewsEvent.sgmHotNews.selectedItems;
  locNews=obj[0].location;
  statusLoc="fromList";
  frmMap.mapOri.clear();
  frmMap.show();
}

function getMapListCharityEvent(){
  var obj = flxNewsEvent.sgmCharityEvent.selectedItems;
  locCharEvent=obj[0].location;
  statusLoc="fromListEvent";
  frmMap.show();
}

function getMapListCharityTelkom(){
  var obj = flxNewsEvent.sgmCharity.selectedItems;
  locCharTelkom=obj[0].location;
  statusLoc="fromListTelkom";
  frmMap.show();
}

function getLocMap(){
  locCharity = frmDetailNews.rtxLokasi.text;
  statusLoc="fromDesc";
  frmMap.mapOri.clear();
  frmMap.show();
}