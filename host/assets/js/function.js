
(function ($) {
  "use strict";  

  $(document).ready(function () {  
/*==== header Section Start here =====*/
document.querySelector(".bar i").addEventListener("click", function () {
  let bar = document.querySelector(".bar i");
  bar.classList.toggle("fa-times");
  let target = document.querySelector(".target");
  target.classList.toggle("open");
});

 /*==== header Section Start here =====*/
 $("ul>li>ul").parent("li").addClass("menu-item-has-children");
 // drop down menu width overflow problem fix
 $('ul').parent('li').on('hover', function () {
     var menu = $(this).find("ul");
     var menupos = $(menu).offset();
     if (menupos.left + menu.width() > $(window).width()) {
         var newpos = -$(menu).width();
         menu.css({
             left: newpos
         });
     }
 });
 $('.header__nav li a').on('click', function (e) {
     var element = $(this).parent('li');
     if (screen.width < 1200) {
         if (element.hasClass('open')) {
             element.removeClass('open');
             element.find('li').removeClass('open');
             element.find('ul').slideUp(300, "swing");
         } else {
             element.addClass('open');
             element.children('ul').slideDown(300, "swing");
             element.siblings('li').children('ul').slideUp(300, "swing");
             element.siblings('li').removeClass('open');
             element.siblings('li').find('li').removeClass('open');
             element.siblings('li').find('ul').slideUp(300, "swing");
         }
     }
 })
    
 //Header    
var fixed_top = $(".header__bottom");
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        fixed_top.addClass("header-fixed animated fadeInDown");
    } else {
        fixed_top.removeClass("header-fixed animated fadeInDown");
    }
});

//Header ellipsis   
var fixed_top = $(".header__bottom");
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
        fixed_top.addClass("ellepsis animated fadeInDown");
    } else {
        fixed_top.removeClass("ellepsis animated fadeInDown");
    }
});   
    
// banner host
  var swiper = new Swiper(".hostbanner", {
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    pagination: {
      el: ".banner__pagination",
      clickable: true,
    },
    autoplay: {
      delay: 6000,
    },
  });  
    

//Odometer host
$(".odometer").each(function () {
  $(this).isInViewport(function (status) {
    if (status === "entered") {
      for (
        var i = 0; i < document.querySelectorAll(".odometer").length; i++
      ) {
        var el = document.querySelectorAll(".odometer")[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }
  });
});

// ellepsis host
$('.ellepsis').on('click', function (e) {
  var element = $('.header__top');
  if (element.hasClass('open')) {
      element.removeClass('open');
      element.slideUp(100, "swing");
      $('.overlayTwo').removeClass('active');
  } else {
      element.addClass('open');
      element.slideDown(300, "swing");
      $('.overlayTwo').addClass('active');
  }
});


// testmonial  host
var swiper = new Swiper(".testmonial2__slider", {
  spaceBetween: 24,
  loop: true,  
  freeMode: true,
  watchSlidesProgress: true,  
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      1200: {
      slidesPerView: 4,
      },
      992: {
      slidesPerView: 3,
      }, 
      768: {
      slidesPerView: 2,
      },
  },
  autoplay: {
      delay: 5000,
  },
});
    
 // partner host
var partner = new Swiper(".partnerslider", {
  loop: true,
  spaceBetween: 15,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});


  // testmonial  host
var swiper = new Swiper(".testmonial__slider", {
    spaceBetween: 24,
    loop: true,  
    freeMode: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    },
        breakpoints: {
        1024: {
            slidesPerView: 2,
            
        },
        0: {
            slidesPerView: 1,
            height:  360,
        },   
    },
}); 
  


 // Search option start here
 $(document).on("click", ".searchbtn, .closer", function () {
  $(".orginalsearch").toggleClass("active");
});

// scroll up start here

  $(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".scrollToTop").css({
          bottom: "2%",
          opacity: "1",
          transition: "all .5s ease",
        });
      } else {
        $(".scrollToTop").css({
          bottom: "-30%",
          opacity: "0",
          transition: "all .5s ease",
        });
      }
    });
    //Click event to scroll to top
    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
  });
});
       
 
//contact form js
 $(function () {
      var form = $('#contact-form');
      var formMessages = $('.form-message');
      $(form).submit(function (e) {
          e.preventDefault();
          var formData = $(form).serialize();
          $.ajax({
              type: 'POST',
              url: $(form).attr('action'),
              data: formData
          })
          .done(function (response) {
              $(formMessages).removeClass('error');
              $(formMessages).addClass('success');
              $(formMessages).text(response);
              $('#contact-form input, #contact-form textarea').val('');
          })
          .fail(function (data) {
              $(formMessages).removeClass('success');
              $(formMessages).addClass('error');
              if (data.responseText !== '') {
                  $(formMessages).text(data.responseText);
              } else {
                  $(formMessages).text('Oops! An error occured and your message could not be sent.');
              }
          });
      });
});

  // wow animation
  new WOW().init(); 
  
});
}(jQuery));


// Preloader Js
$(window).on('load', function () {
  $('.overlayer').fadeOut(1000);
});
