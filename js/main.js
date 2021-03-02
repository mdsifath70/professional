(function($) {
	$(document).ready(function() {

		//nav bar, menu
		// $('.navbar-nav li, .port-menu-link ul li').click(function() {
		// 	$(this).addClass('active').siblings().removeClass('active');
		// });

		$('.navbar-toggler.contact').click(function() {
			$('.navbar-toggler.contact ~ .con-collapse').toggle();
		});

		//menubar
		  var $navi = $(".navbar"), scrollTop = 0;
		  $(window).scroll(function () {
		    var y = $(this).scrollTop(), speed = 0.05, pos = y * speed, maxPos = 100;
		    if (y > scrollTop) {
		      pos = maxPos;
		    } else {
		      pos = 0;
		    }
		    scrollTop = y;
		    $navi.css({
		      "-webkit-transform": "translateY(-" + pos + "%)",
		      "-moz-transform": "translateY(-" + pos + "%)",
		      "-o-transform": "translateY(-" + pos + "%)",
		      "transform": "translateY(-" + pos + "%)"
		    });
		  });

		//menu add class
		$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();
		    if (scroll >= 100) {
		        $("nav").addClass("navnewclass", 2000);
		    } else {
		    	$("nav").removeClass("navnewclass", 2000);
		    }
		});

		//scrolling page
		$('#nav').onePageNav();

		//typed js
		var typed = new Typed('#typed', {
		    stringsElement: '#typedElement',
		    loop: true,
			loopCount: Infinity,
			typeSpeed: 50,
			backSpeed: 50,
			backDelay: 1800
		});


		//slick slider
		$('#recentSlide').slick({
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnFocus: false,
			prevArrow: '.recent .slider-arrow .before-arrow',
			nextArrow: '.recent .slider-arrow .after-arrow',
		});

		//wow animation
		new WOW().init();

		//scroll to top
		  $('.go-top').goTop({
		    // top offset
		    scrollTop: 200,
		    // scroll speed in milliseconds
		    scrollSpeed: 500,
		    // fade in/out speed in milliseconds
		    fadeInSpeed: 700,
		    fadeOutSpeed: 200
		    
		  });

		//mixitup filtering
		var all_item = $('.mixitup-container') ;
		var mixer = mixitup(all_item, {
			animation: {
		        duration: 300
		    }
		});

	});
})(jQuery);