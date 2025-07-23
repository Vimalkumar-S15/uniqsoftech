/*
Name:           Demo Creative Agency 1
Written by:     Okler Themes - (http://www.okler.net)
Theme Version:  10.0.0
*/

(function( $ ) {
	
	'use strict';

	// Disable Scroll to Top
	theme.PluginScrollToTop.initialize = function() {};

	if (typeof LocomotiveScroll !== 'undefined') {

		window.scrollTo(0,0);

		setTimeout(function() {

			/*
			Horizontal Scroll
			*/
			let scroller;

			let initLocoScroll = function() {

				window.scrollTo(0,0);

				scroller = new LocomotiveScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true,
                    direction: (window.innerWidth > 1199 ? "horizontal" : "vertical"),
                    disableLerp: true,
                    multiplier: 0.9,
                    easing: [0.00, 0.0, 1.00, 1.0],
					scrollFromAnywhere: true,
					multiplier: 1,
					getDirection: true,
					reloadOnContextChange: true,
					touchMultiplier: 2.5,
					smoothMobile: true,
                    smartphone: {
                        smooth: true,
                        disableLerp: true,
                        easing: [0.00, 0.0, 1.00, 1.0],
                        direction: (window.innerWidth > 1199 ? "horizontal" : "vertical")
                    },
                    tablet: {
                        smooth: true,
                        disableLerp: true,
                        easing: [0.00, 0.0, 1.00, 1.0],
                        direction: (window.innerWidth > 1199 ? "horizontal" : "vertical")
                    }
                });

				scroller.on("scroll", function() {
					ScrollTrigger.update();
				});
			}

			initLocoScroll();

			$('[data-hash]').off().on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				const anchor = $($(this).attr('href')).get(0);
				$('.mobile-menu-toggle').removeClass('open');
				$('.mobile-nav-wrap').removeClass('openMenu');
				scroller.scrollTo(anchor);
			});

			$(window).afterResize(function() {
				scroller.destroy();
				initLocoScroll();
			});

		}, 100);

		window.onbeforeunload = function () {
		    window.scrollTo(0,0);
		};

	} else {

		theme.fn.showErrorMessage('Failed to Load File', 'Failed to load: Locomotive Scroll - Include the following file(s): (vendor/locomotive-scroll/locomotive-scroll.min.js)');

	}

}).apply( this, [ jQuery ]);
