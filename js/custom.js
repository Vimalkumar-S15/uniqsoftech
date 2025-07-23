
$(document).ready(function () {
    $('.js-toggle-menu').click(function(e){
      e.preventDefault();
      $(this).toggleClass('open');
      $('.mobile-nav-wrap').toggleClass('openMenu');
    });

    $('.mobile-header-nav li a').click(function(e){
      e.preventDefault();
      $('.mobile-menu-toggle').removeClass('open');
      $('.mobile-nav-wrap').removeClass('openMenu');
    });
    // Check the screen width
    if ($(window).width() < 1200) {
      // Initialize Slick slider
      $('.logo-slide').slick({
        // Add your Slick slider settings here
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase:'linear',
        loop: true,
        infinite: true
        // Add more settings as needed
      });
    }
  });

  // Reinitialize the slider on window resize
  $(window).resize(function () {
    var logoSlide = $('.logo-slide');
  
    // Check if the slider is initialized
    if (logoSlide.hasClass('slick-initialized')) {
      // Destroy the existing slider (if any)
      logoSlide.slick('unslick');
    }
  
    if ($(window).width() < 1200) {
      // Reinitialize Slick slider for smaller screens
      logoSlide.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: 'linear',
        infinite: true
        // Add more settings as needed
      });
    }
  });


  