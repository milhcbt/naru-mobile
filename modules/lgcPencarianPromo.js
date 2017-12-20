//Type your code here
function callbackHandlerPencarianPromo(){
  if(this.readyState == constants.HTTP_READY_STATE_DONE){
    if(this.response.code===0){
      var arrNewsTelkom=[];
        for(var i=0;i<this.response.result.length;i++){
          var tempNews={
            idPromo:this.response.result[i]._id,
            tglMulai:this.response.result[i].liststartDate,
            tglKeluar:this.response.result[i].listoutDate,
            kategori:this.response.result[i].listNewsCategory,
            newsPromoName:this.response.result[i].listNewsPromoName,
            newsPromoDescription:this.response.result[i].listNewsPromoDescription,
            newsPromoImage:this.response.result[i].listNewsPromoImage[0],
            };
          arrNewsTelkom.push(tempNews);
        }
      	frmListPromo.sgmListPromo.setVisibility(true);
        frmListPromo.sgmListPromo.removeAll();
        frmListPromo.sgmListPromo.addAll(arrNewsTelkom); 

    }else{
      alert("Maaf, Promo tidak ditemukan");
    }
    }
	kony.application.dismissLoadingScreen();  
}

function pencarianPromo(){
  
  	var choice = frmListPromo.txtSearch.text;
  
    var httpclient = new kony.net.HttpRequest();
    httpclient.onReadyStateChange=callbackHandlerPencarianPromo;
    httpclient.open(constants.HTTP_METHOD_POST, "http://ec2-13-229-200-215.ap-southeast-1.compute.amazonaws.com:5000/search_list_promo/"+choice);
    
 	var form= new kony.net.FormData();
    form.append("choice", choice);
    httpclient.send(form);
}