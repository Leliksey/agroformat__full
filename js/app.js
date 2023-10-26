$(document).ready(function() {
  if ($(window).width() > 1440 ) {
      $(".menu__item").click(function() {
        //   $(".menu__item").removeClass("open");
        //   $(this).addClass("open");
      })
  } else {
      $(".menu__item span").click(function(e) {
            //   e.stopPropagation()
            //   $(this).siblings(".menu__item-list").slideToggle();
      })
  }
  
  $(".lang").click(function(e) {
      if($(e.target).hasClass("lang__list")){
          return;
      } else {
        //   $(this).toggleClass("open");
      }
  })
  $(".lang__item").click(function() {
      let lang = $(this).html();
      $(".lang__current").text("");
      $(".lang__current").append(lang);
  });
  document.addEventListener('click', function(event) {
      var langBlock = document.querySelector('.lang');
      if(langBlock) {
        if (!langBlock.contains(event.target)) {
            // langBlock.classList.remove('open');
        }
      }
  });
  $(document).on('click', function(event) {
      var searchBlock = $('.search');
  
      // Проверяем, был ли клик сделан вне элемента .search и не на элементах .search__btn и .search__modal
      if (!searchBlock.is(event.target) && searchBlock.has(event.target).length === 0
          && !$(event.target).hasClass('search__btn') && !$(event.target).hasClass('search__modal')) {
          // Клик сделан вне элемента с классом "search" и не на .search__btn и .search__modal
        //   searchBlock.removeClass('open');
        //   $(".search__modal").removeClass('d__flex')
      }
  });
  
  $('.search svg').on('click', function(event) {
      //event.stopPropagation(); // Предотвращаем всплытие события
    //   $('.search').toggleClass('open');
  });
  $(document).on('click', function(event) {
      var menuBlock = $('.menu__item');
      
      if (!menuBlock.is(event.target) && menuBlock.has(event.target).length === 0) {
          // Клик сделан вне элемента с классом "menu__item"
        //   menuBlock.removeClass('open');
      }
  });
  $(".search").on("mouseover", function () {
    $(".search__modal").show();
  });
  
  $(".search").on("mouseleave", function () {
    function delayHide() {
        $(".search__modal").hide()
      }
      setTimeout(delayHide, 100)
  });
//   $(".search").click(function() {
//     $(".search__modal").addClass('d__flex')
//   })

  $(document).on('click', function(event) {
      var loginBlock = $('.login');
  
      if (!loginBlock.is(event.target) && loginBlock.has(event.target).length === 0) {
          // Клик сделан вне элемента с классом "login"
        //   loginBlock.removeClass('open');
      }
  });
  
  $('.login svg').on('click', function(event) {
      //event.stopPropagation(); // Предотвращаем всплытие события
      $('.login').toggleClass('open');
  });
  $(document).on('click', function(event) {
      if (!$(event.target).closest('.cart__modal').length) {
          $('.cart').removeClass('open');
      } 
  });
  $(".login").on("mouseover", function () {
    $(".login__modal").show()
  })
  $(".login").on("mouseleave", function () {
    function delayHide() {
        $(".login__modal").hide()
      }
      setTimeout(delayHide, 100)
  });

  $('.login svg').on('click', function(event) {
    $('.authorization__form').css('display', 'flex');
    $('body').css('overflow', 'hidden');
    $('.login').removeClass('open');
    $('.login__modal').hide();
  });

  $(document).on('click', '.login__modal-text.reg', function(event) {
    $('.registration__form').css('display', 'flex');
    $('body').css('overflow', 'hidden');
    $('.login').removeClass('open');
    $('.login__modal').hide();
});
  
  $('.authorization__form-close').on('click', function(event) {
    $('.authorization__form').css('display', 'none');
    $('body').css('overflow', '');
  });
  
  $('.authorization__form-footer__notRegistered').on('click', function(event) {
    $('.authorization__form').css('display', 'none');
    $('.registration__form').css('display', 'flex');
  });

  $('.registration__form-footer__registered').on('click', function(event) {
    $('.registration__form').css('display', 'none');
    $('.authorization__form').css('display', 'flex');
  });

  $('.registration__form-close').on('click', function(event) {
    $('.registration__form').css('display', 'none');
    $('body').css('overflow', '');
  });

//   $('.cart').on('click', function(event) {
//       event.stopPropagation(); // Остановить "всплытие" события, чтобы оно не попало на document
//       $('.cart').toggleClass('open');
//   });
  
  $('.cart__modal').on('click', function(event) {
      event.stopPropagation(); // Остановить "всплытие" события, чтобы оно не попало на document
  });
      $('.cart__minus').on('click', function() {
          var resultElement = $(this).siblings('.cart__product-result');
          var currentValue = parseInt(resultElement.text());
          if (currentValue > 1) {
              resultElement.text(currentValue - 1);
          }
      });
      $(".cart").on("mouseover", function () {
        $(".cart__modal").show()
      })
      $(".cart").on("mouseleave", function () {
        function delayHide() {
            $(".cart__modal").hide()
          }
          setTimeout(delayHide, 100)
      });
      $('.cart__plus').on('click', function() {
          var resultElement = $(this).siblings('.cart__product-result');
          var currentValue = parseInt(resultElement.text());
          resultElement.text(currentValue + 1);
      });
    //   $(".header__content > div").click(function() {
    //       $(".header__content > div").removeClass("open");
    //       $(this).addClass("open");
    //   })
      
      $('.main__slider').owlCarousel({
          loop:true,
          nav:true,
          mouseDrag:true,
          touchDrag: true,
          pullDrag:false,
          freeDrag:false,
          URLhashListener:false,
          dots:false,
          autoplay:false,
          items:1
      });
      $('.slider__slider').owlCarousel({
          loop:true,
          nav:true,
          mouseDrag:true,
          touchDrag: true,
          pullDrag:false,
          freeDrag:false,
          URLhashListener:false,
          dots:false,
          autoplay: true,
          slideTransition: 'linear',
          autoplaySpeed: 5000,
          autoplayTimeout: 5000,
          margin:20,
          responsive:{
              0:{
                  items:1
              },
              768:{
                  items:3,
                  margin: 15
              },
              1200:{
                  items:4,
              }
          }
      });
      if($(window).width() < 769) {
          $('.slider__slider').owlCarousel('destroy')
      }
      $(window).on("resize", function() {
          if($(window).width() < 769) {
              $('.slider__slider').owlCarousel('destroy')
          } else {
              $('.slider__slider').owlCarousel({
                  loop:true,
                  nav:true,
                  mouseDrag:true,
                  touchDrag: true,
                  pullDrag:false,
                  freeDrag:false,
                  URLhashListener:false,
                  dots:false,
                  autoplay: true,
                  slideTransition: 'linear',
                  autoplaySpeed: 5000,
                  autoplayTimeout: 5000,
                  margin:20,
                  responsive:{
                      0:{
                          items:1
                      },
                      768:{
                          items:3,
                          margin: 15
                      },
                      1200:{
                          items:4,
                      }
                  }
              });
          }
      })
      $('.partners__slider').owlCarousel({
          loop:true,
          nav:true,
          mouseDrag:true,
          touchDrag: true,
          pullDrag:false,
          freeDrag:false,
          URLhashListener:false,
          dots:false,
          autoplay: true,
          slideTransition: 'linear',
          autoplaySpeed: 5000,
          autoplayTimeout: 5000,
          margin:20,
          responsive:{
              0:{
                  items:1
              },
              768:{
                  items:3,
                  margin: 15
              },
              1200:{
                  items:5,
              },
              1440:{
                  items:6,
              }
          }
      });
      if($(window).width() < 769) {
          $('.partners__slider').owlCarousel('destroy');
          $('.partners__slider').slick({
              dots: true,
              infinite: true,
              speed: 300,
              slidesToShow: 2,
              slidesToScroll: 1,
              rows: 2,
              responsive: [
              {
                  breakpoint: 576,
                  settings: {
                  slidesToShow: 2,
                  },
              },
              {
                  breakpoint: 375,
                  settings: {
                  slidesToShow: 2,
                  arrows: true,
                  },
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
              ],
          });
      }
      $(window).on('resize', function() {
          if($(window).width() < 769) {
              $('.partners__slider').owlCarousel('destroy');
              $('.partners__slider').slick({
                  dots: true,
                  infinite: true,
                  speed: 300,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  rows: 2,
                  responsive: [
                  {
                      breakpoint: 576,
                      settings: {
                      slidesToShow: 2,
                      },
                  },
                  {
                      breakpoint: 375,
                      settings: {
                      slidesToShow: 2,
                      arrows: true,
                      },
                  },
                  // You can unslick at a given breakpoint now by adding:
                  // settings: "unslick"
                  // instead of a settings object
                  ],
              });
          } else {
              $('.partners__slider').slick('unslick');
              $('.partners__slider').owlCarousel({
                  loop:true,
                  nav:true,
                  mouseDrag:true,
                  touchDrag: true,
                  pullDrag:false,
                  freeDrag:false,
                  URLhashListener:false,
                  dots:false,
                  autoplay: true,
                  slideTransition: 'linear',
                  autoplaySpeed: 5000,
                  autoplayTimeout: 5000,
                  margin:20,
                  responsive:{
                      0:{
                          items:1
                      },
                      768:{
                          items:3,
                          margin: 15
                      },
                      1200:{
                          items:5,
                      },
                      1440:{
                          items:6,
                      }
                  }
              });
          }
      })
      $('.sertificates__slider').owlCarousel({
          loop:true,
          nav:true,
          mouseDrag:true,
          touchDrag: true,
          pullDrag:false,
          freeDrag:false,
          URLhashListener:false,
          dots:false,
          autoplay: true,
          slideTransition: 'linear',
          autoplaySpeed: 5000,
          autoplayTimeout: 5000,
          items:5,
          margin:30,
          responsive:{
              0:{
                  items:1
              },
              576:{
                  items:3,
                  margin: 15
              },
              1200:{
                  items:5,
              },
              1440:{
                  items:6,
              }
          }
      });
      if ($(window).width() < 769) {
          $('.sertificates__slider').owlCarousel('destroy')
          $('.sertificates__slider').slick({
              dots: true,
              infinite: true,
              speed: 300,
              slidesToShow: 2,
              slidesToScroll: 1,
              responsive: [
              {
                  breakpoint: 450,
                  settings: {
                  slidesToShow: 1,
                  },
              },
              {
                  breakpoint: 576,
                  settings: {
                  slidesToShow: 2,
                  },
              },
              {
                  breakpoint: 375,
                  settings: {
                  slidesToShow: 2,
                  arrows: true,
                  },
              },
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
              ],
          })
      }
      
      $('.reviews__slider').owlCarousel({
          loop:true,
          nav:true,
          mouseDrag:true,
          touchDrag: true,
          pullDrag:false,
          freeDrag:false,
          URLhashListener:false,
          dots:true,
          autoplay: true,
          slideTransition: 'linear',
          autoplaySpeed: 5000,
          autoplayTimeout: 5000,
          margin:30,
          responsive:{
              0:{
                  items:1
              },
              576:{
                  items:2,
                  margin: 15
              },
              992:{
                  items:3,
              },
              1440:{
                  items:4,
              }
          }
      });


      
      $(".tehno__media-btn").on("click", function() {
          // Получаем идентификатор видео из атрибута данных
          var videoId = $(this).data("video");
          $(this).parent().find("video").attr("data-video", videoId)
          // Находим соответствующее видео по идентификатору
          var video = $(".video[data-video='" + videoId + "']")[0];
          // Проверяем, существует ли видео и воспроизводится ли оно в данный момент
          if (video && video.paused !== undefined) {
            if (video.paused) {
              // Если видео приостановлено, запускаем его
              video.play();
              $(this).find("svg path").attr("fill", "yellow"); // Изменяем цвет кнопки
            } else {
              // Если видео уже воспроизводится, останавливаем его
              video.pause();
              $(this).find("svg path").attr("fill", "white"); // Изменяем цвет кнопки
            }
          }
        });


        $('.productPage__addReview-rating').each(function() {
          var $rating = $(this);
          var ratingValueId = $rating.attr('id') + '-value';
          var rating = 0;
    
          $rating.find('.star').on('click', function() {
            var selectedRating = $(this).data('rating');
            $rating.find('.star').removeClass('active');
    
            for (var i = 1; i <= selectedRating; i++) {
              $rating.find('.star[data-rating="' + i + '"]').addClass('active');
            }
    
            rating = selectedRating;
            $('#' + ratingValueId).html('Вы поставили оценку: ' + rating);
          });
    
          $rating.find('.star').hover(function() {
            var selectedRating = $(this).data('rating');
            $rating.find('.star').removeClass('active');
    
            for (var i = 1; i <= selectedRating; i++) {
              $rating.find('.star[data-rating="' + i + '"]').addClass('active');
            }
          }, function() {
            $rating.find('.star').removeClass('active');
    
            for (var i = 1; i <= rating; i++) {
              $rating.find('.star[data-rating="' + i + '"]').addClass('active');
            }
          });
        });

      $(".burger__icon svg:first-child").on("click", function(e) {
          e.stopPropagation();
          $(".burger").addClass("open");
          $(".burger__box").addClass("open");
      });
      $(".burger__icon svg:last-child").on("click", function(e) {
          e.stopPropagation();
          $(".burger").removeClass("open");
          $(".burger__box").removeClass("open");
      });
      $(".burger__box").click(function() {
          $(".burger").addClass("open");
      })
      $(".footer__column").click(function() {
          $(this).find(".footer__list").slideToggle();
          $(this).find(".footer__pages-links").slideToggle();
          $(this).find("svg").toggleClass("revert180");
      });

      // Получаем кнопку "Наверх"
          var scrollTopButton = document.getElementById("scrollTopButton");

          // При скролле страницы, проверяем, когда показывать/скрывать кнопку
          window.onscroll = function() {
          if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
              scrollTopButton.style.display = "block";
              $(".header").addClass('fixed');
          } else {
              scrollTopButton.style.display = "none";
              $(".header").removeClass('fixed');
          }
          };

          $('#scrollTopButton').click(function(){
            $('html, body').animate({scrollTop : 0},100);
            return false;
        });


          
});

