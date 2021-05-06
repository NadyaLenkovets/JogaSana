$(function () {

   /* Slider slick  #introSlider
      =============================*/

      $('#intro-slider').slick({
         infinite: true,
         autoplay: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true,
         dots: false,
         fade: true,
      });


      /* Slider slick  #testimonials-slider
      =============================*/

      $('#testimonials-slider').slick({
         infinite: true,
         autoplay: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         fade: false,
         responsive: [
               {
                  breakpoint: 1199,
                  settings: {
                     slidesToShow: 2,
                  }
               }, {
                  breakpoint: 767,
                  settings: {
                     slidesToShow: 1,
                  }
               }
            ]
      });




      /* burger-menu
      =============================*/

      $('.header__burger').click(function (event) {
         $('.header__burger, .header-menu').toggleClass('active');
         $('body').toggleClass('lock');
         if ($('.header-menu').hasClass('active')) {
            $('.header-menu__link').click(function (event) {
               $('.header__burger,.header-menu').removeClass('active');
               $('body').removeClass('lock');
            });  
         }
      });




      
});













