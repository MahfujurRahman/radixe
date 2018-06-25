(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('.isotope-filter li').on( 'click', function() {

            $('.isotope-filter li').removeClass('active')
    		$(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $(".product-list").isotope({ 
                filter: selector,
                resizable: true,
                percentPosition: true,
                itemSelector: '.mobil-size',
             });
            });

        


        });


    jQuery(window).load(function(){

        jQuery(".product-list").isotope();

        
});



}(jQuery));	