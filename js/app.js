// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$( document ).ready(function() {
    $('.nav-open').on("click", function(e) {
	  e.preventDefault();
	  
	  $(this).toggleClass('nav-close');
	});

});
	
