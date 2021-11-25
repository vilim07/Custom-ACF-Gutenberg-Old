
 jQuery(document).ready(function () {
    var mySwiper = new Swiper(".hero-vertical-swiper", {
        direction: "vertical",
        effect: "fade",
        allowTouchMove: false,

        speed: 2000,
        autoplay: {
            delay: 5000,
          },
        loop: true,
    
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  })
