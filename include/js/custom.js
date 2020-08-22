$(document).ready(function(){
  $("#employee").click(function(){

    // console.log('click');
    $('.employee-form').addClass('active');
    $('.jobseeker-form').removeClass('active');
    $(this).addClass('active');
    $('#jobseeker').removeClass('active');

  });
    $("#jobseeker").click(function(){

    // console.log('click');
    $('.employee-form').removeClass('active');
    $('.jobseeker-form').addClass('active');

    $(this).addClass('active');
    $("#employee").removeClass('active');
  });

    // ******************login click show hide******************
    $(".login").click(function(){
    	
      $('.drop-login').addClass('show');
      $('.nav-top').addClass('z-index-big')
    });

    // ##########################   outsite click work 
	   $(window).click(function() {
		//Hide the menus if visible
		 $('.drop-login').removeClass('show');
     $('.nav-top').removeClass('z-index-big')
		});

		$('.drop-login').click(function(event){
		    event.stopPropagation();
		});
    	  $('.login').click(function(event){
		       if ($(".drop-register").hasClass("show")) {
		 
		  	       event.stopPropagation();
		           $('.drop-register').removeClass("show");
		   		 }
			     else{

			        event.stopPropagation();
			     }
		   }); 
	// ##############end outsite click work	





// ___________________Register click code __________________________________

  $("#reg-employee").click(function(){
    
    // console.log('click');
    $('.reg-employee').addClass('active');
    $('.reg-jobseeker').removeClass('active');
    $(this).addClass('active');
    $('#reg-jobseeker').removeClass('active');

  });
    $("#reg-jobseeker").click(function(){

    // console.log('click');
    $('.reg-employee').removeClass('active');
    $('.reg-jobseeker').addClass('active');

    $(this).addClass('active');
    $("#reg-employee").removeClass('active');
  });

       // ******************reg click show hide******************
    $(".reg-register").click(function(){
    	 $('.nav-top').addClass('z-index-big')
      $('.drop-register').addClass('show');
    });

    // ##########################   outsite click work 
	   $(window).click(function() {
		//Hide the menus if visible
		 $('.drop-register').removeClass('show');
      $('.nav-top').removeClass('z-index-big')

		});

		$('.drop-register').click(function(event){
		    event.stopPropagation();
		});

    	  $('.reg-register').click(function(event){
		       if ($(".drop-login").hasClass("show")) {
		           event.stopPropagation();
		           $('.drop-login').removeClass("show");
		   		 }
	            else{
                  event.stopPropagation();
	            }
		   }); 





// ######################################Navbar toogle ###############################################
$('.navbar-toggler').click(function(event){
    $('#navbar').toggleClass('show');
});

$('.dropdown-toggle').click(function(event){
    $('.dropdown-menu').addClass('show');
});
$('.cd-close').click(function(event){
    $('.dropdown-menu').removeClass('show');
});
$('.dropdown-submenu').click(function(event){
	$(this).addClass('moveon')
   $('.moveon .dropdown-menu-child').addClass('shows');
});

$('.go-back').click(function(event){
     event.stopImmediatePropagation();
	 $('.dropdown-submenu').removeClass('moveon');
	 $('.dropdown-menu-child').removeClass('shows');
 
    // $('.moveon .dropdown-menu-child').removeClass('show');
    // $('.moveon .dropdown-menu-child').addClass('check');
});







// #################################################For toogle jquery###############################
    $('.card-training .course-objective').readmore({
      speed: 500,
        moreLink: '<a href="#" class="see_more">See More</a>',
        lessLink: '<a href="#" class="see_less">See Less</a>',
        collapsedHeight: 245,
        heightMargin: 16,
    });
// #########################################end Navbar toogle#####################################


$( "#accordion" ).accordion({
 active:1, 
 collapsible: true,
 header: ".panel-heading",


});
$("#expand-all").click(function(){
  $(".ui-accordion-content").show();
  $('#collapse-all').addClass('show');
  $('#collapse-all').removeClass('hide');
  $(this).addClass('hide');
  $('.panel-heading').removeClass('ui-accordion-header-collapsed');
});
$("#collapse-all").click(function(){
  $(".ui-accordion-content").hide();
  $('#expand-all').addClass('show');
  $(this).addClass('hide');
  $('#expand-all').removeClass('hide');
  $('.panel-heading').addClass('ui-accordion-header-collapsed');
});
});