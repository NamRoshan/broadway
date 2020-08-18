$(document).ready(function(){

	 if($("#mob_hidden").css('display') == 'none'){
	      $('#slider').flexslider({
		    animation: "slide",
		    animationLoop: true,		   
		    itemMargin: 5,
		    minItems: 1,
		    maxItems: 1,
		    controlNav:true,
		    slideshow: false,
	        start: function(slider){
	          $('body').removeClass('loading');
	          $('#slider').resize();
	        }
	      });
       }
      $('#slider').flexslider({
	    animation: "slide",
	    animationLoop: true,
	    itemWidth: 210,
	    itemMargin: 30,
	    minItems: 1,
	    maxItems: 4,
	    controlNav:true,
	    slideshow: false,
        start: function(slider){
          $('body').removeClass('loading');
          $('#slider').resize();
        }
      });



});