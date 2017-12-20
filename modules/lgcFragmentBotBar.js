//Type your code here

function fragmentPantau(){

  flxNewsEvent.flxPantau.setVisibility(true);
  flxNewsEvent.flxMain.setVisibility(false);
  flxNewsEvent.flxLain.setVisibility(false);
  flxNewsEvent.flxCarian.setVisibility(false);
  
  flxNewsEvent.frgHome.setVisibility(true);
  flxNewsEvent.frgLain.setVisibility(true);
  flxNewsEvent.frgCari.setVisibility(true);
  flxNewsEvent.frgPantau.setVisibility(false);
  
  flxNewsEvent.frgHomeFocus.setVisibility(false);
  flxNewsEvent.frgPantauFocus.setVisibility(true);
  flxNewsEvent.frgLainFocus.setVisibility(false);
  flxNewsEvent.frgCariFocus.setVisibility(false);
}

function fragmentHome(){
  flxNewsEvent.flxPantau.setVisibility(false);
  flxNewsEvent.flxMain.setVisibility(true);
  flxNewsEvent.flxLain.setVisibility(false);
  flxNewsEvent.flxCarian.setVisibility(false);
  
  flxNewsEvent.frgHome.setVisibility(false);
  flxNewsEvent.frgPantau.setVisibility(true);
  flxNewsEvent.frgLain.setVisibility(true);
  flxNewsEvent.frgCari.setVisibility(true);
  
  flxNewsEvent.frgHomeFocus.setVisibility(true);
  flxNewsEvent.frgPantauFocus.setVisibility(false);
  flxNewsEvent.frgLainFocus.setVisibility(false);
  flxNewsEvent.frgCariFocus.setVisibility(false);
}

function fragmentPencarian(){
  	
	flxNewsEvent.flxPantau.setVisibility(false);
    flxNewsEvent.flxMain.setVisibility(false);
    flxNewsEvent.flxLain.setVisibility(true);
    flxNewsEvent.flxCarian.setVisibility(false);

    flxNewsEvent.frgHome.setVisibility(true);
    flxNewsEvent.frgPantau.setVisibility(true);
    flxNewsEvent.frgLain.setVisibility(true);
    flxNewsEvent.frgCari.setVisibility(false);

    flxNewsEvent.frgHomeFocus.setVisibility(false);
    flxNewsEvent.frgPantauFocus.setVisibility(false);
    flxNewsEvent.frgLainFocus.setVisibility(false);
    flxNewsEvent.frgCariFocus.setVisibility(true);
}

function fragmentLain(){
  
  flxNewsEvent.lblTitleKategori.text = "Kategori Berita";
  flxNewsEvent.sgmSearch.removeAll();
  flxNewsEvent.sgmCategory.setVisibility(true);
  flxNewsEvent.txtSearch.text="";
  flxNewsEvent.flxPantau.setVisibility(false);
  flxNewsEvent.flxMain.setVisibility(false);
  flxNewsEvent.flxLain.setVisibility(false);
  flxNewsEvent.flxCarian.setVisibility(true);
  
  flxNewsEvent.frgHome.setVisibility(true);
  flxNewsEvent.frgPantau.setVisibility(true);
  flxNewsEvent.frgLain.setVisibility(false);
  flxNewsEvent.frgCari.setVisibility(true);
  
  flxNewsEvent.frgHomeFocus.setVisibility(false);
  flxNewsEvent.frgPantauFocus.setVisibility(false);
  flxNewsEvent.frgLainFocus.setVisibility(true);
  flxNewsEvent.frgCariFocus.setVisibility(false);
}