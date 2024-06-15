(function ($) {
	"use strict";

 // div slide show by click function 
    
    
    $(window).on("load", function() {
   $(".slide-out").animate({ "left": "-260px" }, "slow" );
   let slideOutVisible = true;
   
   $(".slide-out-tab").click(() => { 
    if (slideOutVisible) {
        $(".slide-out").animate({ "left": "0px" }, "slow" );
        
    } else {
        $(".slide-out").animate({ "left": "-260px" }, "slow" );
    }
    slideOutVisible = !slideOutVisible;
  }); 
});
    

  
}(jQuery));
