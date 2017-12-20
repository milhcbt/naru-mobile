//Type your code here
var globeUrlPromo;
var globeIdPromo="";
var globePromoTitle="";

var globeDetaiIDPromo="";
var globeTileDetailPromo="";

function klikPromoTelkom(){
  frmEvent.show();
}

function getListPromo(){
   headers={
     
   };
    data= {
		
    };
  
  var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("hotNews");
  kony.application.showLoadingScreen("loadskin","",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "706970"});
    
  getAdd.invokeOperation("indukPromo", headers, data, operationSuccess, 
                         operationFailure);
    
    function operationSuccess(response){
      if(response.opstatus === 0){       
        var arrNewsTelkom=[];
        for(var i=0;i<response.length;i++){
          var tempNews={
            idPromo:response[i]._id,
            tglMulai:response[i].startDate,
            tglKeluar:response[i].outDate,
            author:"Telkom Indonesia"+" / "+response[i].startDate.substr(0,10),
            kategori:response[i].newsCategory,
            newsPromoName:response[i].newsPromoName,
            newsPromoDescription:response[i].newsPromoDescription,
            newsPromoImage:response[i].newsPromoImage[0],
            lblSelengkapnya:"Selengkapnya..."
            };
          arrNewsTelkom.push(tempNews);
        }      
        flxNewsEvent.sgmPromo.setVisibility(true);
        flxNewsEvent.sgmPromo.removeAll();
        flxNewsEvent.sgmPromo.addAll(arrNewsTelkom);
      }
      kony.application.dismissLoadingScreen();  
    }
  
    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}


function getPromoDetail(){
   var obj = flxNewsEvent.sgmPromo.selectedItems;
   var idPromo = obj[0].idPromo;
   var title = obj[0].newsPromoName; 
   globeIdPromo = idPromo;
   globePromoTitle = title;
   headers={};
    data= {
		"id":idPromo
    };
  
  var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("hotNews");
  kony.application.showLoadingScreen("loadskin","",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "706970"});
    
  getAdd.invokeOperation("detailInduk", headers, data, operationSuccess, 
                         operationFailure);
    
    function operationSuccess(response){
      
      if(response.opstatus === 0 ){
        frmEvent.sgmImgEvent.setVisibility(true);
        frmEvent.flxKet.setVisibility(true);
        frmEvent.flxControl.setVisibility(true);
        
  		frmEvent.lblNamaEvent.text = response.message.newsPromoName;
        globTitle = response.message.newsPromoName;
        frmEvent.lblKategoriEvent.text = "Promotional Event";
        frmEvent.lblIsiKet.text = response.message.newsPromoDescription;
        
        frmEvent.sgmImgEvent.removeAll(); 
        var dataImg=[];  
        for (var i=0;i<response.message.newsPromoImage.length;i++){
        	var tempdata={newsPromoImage:response.message.newsPromoImage[i]};
          dataImg.push(tempdata);
        }

        frmEvent.sgmImgEvent.addAll(dataImg);
        frmEvent.lblKet.text = "Keterangan";
        frmEvent.lblKet.setVisibility(true);
        frmEvent.btnPetaL.setVisibility(true);
      }
      kony.application.dismissLoadingScreen();  
    }
  
    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}

function getAnakPromo(){
   var obj = flxNewsEvent.sgmPromo.selectedItems;
   var idPromo = obj[0].idPromo;
   var title = obj[0].newsPromoName; 
   headers={ 
   };
    data= {
		"id":idPromo
    };
  
 var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("hotNews");
  kony.application.showLoadingScreen("loadskin","",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "706970"});
    
  getAdd.invokeOperation("listPromo", headers, data, operationSuccess, 
                         operationFailure);
    
    function operationSuccess(response){
      if(response.opstatus === 0){
        var arrNewsTelkom=[];
        for(var i=0;i<response.length;i++){
          var tempNews={
            idPromo:response[i]._id,
            tglMulai:response[i].liststartDate,
            tglKeluar:response[i].listoutDate,
            kategori:response[i].listNewsCategory,
            newsPromoName:response[i].listNewsPromoName,
            newsPromoDescription:response[i].listNewsPromoDescription,
            newsPromoImage:response[i].listNewsPromoImage[0],
            };
          arrNewsTelkom.push(tempNews);
        }      

        frmListPromo.sgmListPromo.setVisibility(true);
        frmListPromo.sgmListPromo.removeAll();
        frmListPromo.sgmListPromo.addAll(arrNewsTelkom);
      }
      kony.application.dismissLoadingScreen();  
    }
  
    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}

function getAnakPromoDetail(){
   var obj = frmListPromo.sgmListPromo.selectedItems;
   var idPromo = obj[0].idPromo;
   var title = obj[0].newsPromoName; 
  
   globeDetaiIDPromo= idPromo;
   globeTileDetailPromo=title;
   
   headers={};
    data= {
		"id":idPromo
    };
  
  var getAdd = kony.sdk.getCurrentInstance().getIntegrationService("hotNews");
  kony.application.showLoadingScreen("loadskin","",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "706970"});
    
  getAdd.invokeOperation("detailListPromo", headers, data, operationSuccess, 
                         operationFailure);
    
    function operationSuccess(response){
      
      if(response.opstatus === 0 ){
        
  		frmDetailPromo.lblNamaEvent.text = response.listNewsPromoName;
        globTitle = response.listNewsPromoName;
        frmDetailPromo.lblKategoriEvent.text = "Promotional Event";
        frmDetailPromo.lblIsiKet.text = response.listNewsPromoDescription;
        globeUrlPromo = response.listNewsPromoUrl;
        frmDetailPromo.sgmImgEvent.removeAll(); 
        var dataImg=[];  
        for (var i=0;i<response.listNewsPromoCdn.length;i++){
        	var tempdata={newsPromoImage:response.listNewsPromoCdn[i]};
          dataImg.push(tempdata);
        }
        frmDetailPromo.sgmImgEvent.addAll(dataImg);
        frmDetailPromo.lblKet.text = "Keterangan";
        frmDetailPromo.flxUrl.setVisibility(true);
      }
      kony.application.dismissLoadingScreen();  
    }
  
    function operationFailure(error) {
        kony.application.dismissLoadingScreen();
    }
}

function menujuHalPromo(){
  kony.application.openURL(globeUrlPromo);
}

function klikAnakPromo(){
  frmDetailPromo.show();
}

function openPromoPage(){
  frmDetailPromo.flxBrowserPromo.setVisibility(true);
	var urlConf = {
	URL: globeUrlPromo, 
	requestMethod:constants.BROWSER_REQUEST_METHOD_GET
	};
  frmDetailPromo.browserPromo.requestURLConfig = urlConf;
}