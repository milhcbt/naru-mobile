//Type your code here
var statusPreference="";
var cek="";
function goLewati(){
  flxNewsEvent.show();
}

function cekPreferenceInstall(){
  cek = kony.store.getItem("key_status");
  if(cek==="1"){
    flxNewsEvent.show();
    
  }else{
    frmOnBoard.show();
  }
}

function setStatus(){
      kony.store.setItem("key_status", "1");	
}

function geserOnBoard(){
  var obj = frmOnBoard.sgmOnBoard.selectedIndex;
  	var geser = obj+1;
    frmOnBoard.sgmOnBoard.selectedRowIndex = [0,geser];
    
    var next = frmOnBoard.sgmOnBoard.selectedRowIndex;

    if(next[1]===1){
    flxNewsEvent.show();
  }
}