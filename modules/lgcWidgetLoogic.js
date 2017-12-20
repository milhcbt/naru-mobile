//Type your code here

function changeTabNews(){
  flxNewsEvent.btnTabCharity.setVisibility(false);
  flxNewsEvent.btnTabNews.setVisibility(true);
  flxNewsEvent.flxContentNews.setVisibility(true);
  flxNewsEvent.flxContentCharity.setVisibility(false);
}

function changeTabCharity(){
  flxNewsEvent.btnTabCharity.setVisibility(true);
  flxNewsEvent.btnTabNews.setVisibility(false);
  flxNewsEvent.flxContentNews.setVisibility(false);
  flxNewsEvent.flxContentCharity.setVisibility(true);
}

function search(){  
  flxNewsEvent.txtSearch.setVisibility(true);
  flxNewsEvent.searchDummy.setVisibility(false);
  flxNewsEvent.imgDummy.setVisibility(false);
  flxNewsEvent.imgSearch.setVisibility(true);
  flxNewsEvent.btnClose.setVisibility(true);
  flxNewsEvent.txtSearch.setFocus(true);
}

function tutupSearch(){
  flxNewsEvent.txtSearch.setVisibility(false);
  flxNewsEvent.searchDummy.setVisibility(true);
  flxNewsEvent.imgDummy.setVisibility(true);
  flxNewsEvent.imgSearch.setVisibility(false);
  flxNewsEvent.btnClose.setVisibility(false);
  flxNewsEvent.txtSearch.setFocus(false);
}

function searchPromo(){  
  frmListPromo.txtSearch.setVisibility(true);
  frmListPromo.searchDummy.setVisibility(false);
  frmListPromo.imgDummy.setVisibility(false);
  frmListPromo.imgSearch.setVisibility(true);
  frmListPromo.btnClose.setVisibility(true);
  frmListPromo.txtSearch.setFocus(true); 
}

function tutupSearchPromo(){
  frmListPromo.txtSearch.setVisibility(false);
  frmListPromo.searchDummy.setVisibility(true);
  frmListPromo.imgDummy.setVisibility(true);
  frmListPromo.imgSearch.setVisibility(false);
  frmListPromo.btnClose.setVisibility(false);
  frmListPromo.txtSearch.setFocus(false);
  frmListPromo.subHeaderSearchBar.setFocus(false);
}