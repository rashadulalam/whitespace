
// testimonial area carousel
$(document).ready(function () {

    $('.all-testimoniaals').owlCarousel({
      autoplay:true,
      loop:true,
      dots: true,
      nav: false,
      margin:20,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          991:{
              items:3,
              nav:true,
              loop:false
          }
      }
    });

    // pricing list carousel
    $('.all-pricing').owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
                nav:false,
                dots: true
            },
            600:{
                items:3,
                nav:false,
                dots: true,
            },
            991:{
                items:3,
                nav:true,
                loop:true,
                mouseDrag: false,

            }
        }
    });


  });

