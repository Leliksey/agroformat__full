$(document).ready(function() {
    $('.product__preview-media').owlCarousel({
        loop:true,
        nav:true,
        mouseDrag:true,
        touchDrag: true,
        pullDrag:false,
        freeDrag:false,
        URLhashListener:false,
        dots:true,
        autoplay:false,
        items:1,
        margin:60
    });
    // $('.product__preview-media').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
        
    // });
    $(".product__info-count__plus").click(function() {
        var currentVal = parseInt($(this).siblings(".product__info-count__current").text(), 10);
        if (!isNaN(currentVal)) {
            currentVal = currentVal + 1;
            $(this).siblings(".product__info-count__current").text(currentVal);
        }
    });

    $(".product__info-count__minus").click(function() {
        var currentVal = parseInt($(this).siblings(".product__info-count__current").text(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
            currentVal = currentVal - 1;
            $(this).siblings(".product__info-count__current").text(currentVal);
        }
    });

    $(".aboutProduct__header-link").click(function() {
        // e.preventDefault();
        $(".aboutProduct__header-link").removeClass("active");
        $(this).addClass("active");
    });
    $('.recommended__slider').owlCarousel({
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
        margin: 15,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            1300:{
                items:4
            },
            1600:{
                items:5
            }
        }
    });

    $(".aboutProduct__row-title_mobile").click(function() {
        $(this).next().slideToggle();
        $(this).toggleClass("open");
    })

    $(".download__link").click(function() {
        $(this).parents('.download').find(".if_download").show();
    })
    if($(window).width() < 769) {
        $('.productPage__reviews-grid').owlCarousel({
            loop:true,
            nav:true,
            mouseDrag:true,
            touchDrag: true,
            pullDrag:false,
            freeDrag:false,
            URLhashListener:false,
            dots:true,
            autoplay:false,
            margin: 15,
            responsive:{
                0:{
                    items:1
                },
                500:{
                    items:2
                },
                690:{
                    items:3
                }
            }
        });
    }
    $(window).on("resize", function() {
        if($(window).width() < 769) {
            $('.productPage__reviews-grid').owlCarousel({
                loop:true,
                nav:true,
                mouseDrag:true,
                touchDrag: true,
                pullDrag:false,
                freeDrag:false,
                URLhashListener:false,
                dots:true,
                autoplay:false,
                margin: 15,
                responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    690:{
                        items:3
                    }
                }
            });
        } else {
            $('.productPage__reviews-grid').owlCarousel('destroy')
        }
    });
    // var product_height = $(".product").height();
    function remove_default_close() {
        $(".mfp-close").text("");
        var block = $(".mfp-img");
        var distanceToRight = $(window).width() - (block.offset().left + block.outerWidth());
        $(".mfp-arrow-right").css("right", distanceToRight - 100 + 'px')
        var distanceToLeft = $(window).width() - (block.offset().left + block.outerWidth());
        $(".mfp-arrow-left").css("left", distanceToLeft - 60 + 'px')
        // if ($(window).width() < 1200) {
        //     var distanceToLeft = $(window).width() - (block.offset().left + block.outerWidth());
        //     $(".mfp-arrow-left").css("left", distanceToLeft - 60 + 'px')
        // }
    }
    var imgSrc;
    if ($(window).width() > 768) {
        $('.popup-gallery .owl-item img').click(function(){
            imgSrc = $(this).attr('src');
          setTimeout(remove_default_close, 100)
        });
        $('.popup-gallery').magnificPopup({
            delegate: '.owl-item:not(.cloned) a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery:{
                enabled:true
            },
            callbacks: {
                elementParse: function(item) {
                  item.src = imgSrc;
                }
              }
            // other options
          });
    }  
    $(".product__preview-media .tehno__media-btn").click(function(e) {
        e.stopPropagation()
    })

    $(".productPage__reviews-footer .customLink").click(function() {
        $(".overlay").show();
        $(".productPage__addReview").show();
    })
    $(".overlay").click(function() {
        $(this).hide();
        $(".close__addReview").click();
      })
      $(".close__addReview").click(function() {
        $(this).parent().hide();
        $(".overlay").hide();
      });
      $(".productPage__addReview > .customLink").click(function() {
        $(".productPage__addReview-title").hide();
        $(".productPage__addReview-rating").hide();
        $(".productPage__addReview textarea").hide();
        $(".productPage__addReview button.customLink").hide();
        $(".productPage__addReview-title__complete").show();
        $(".productPage__addReview-main__link").show();
      });
      $(".productPage__addReview-login .customLink").click(function() {
        $(".close__addReview").click();
        $(".login__modal").show();
      });

      $(".tehno__media-btn").on("click", function() {
        // Получаем идентификатор видео из атрибута данных
        // var videoId = $(this).data("video");
        
        // Находим соответствующее видео по идентификатору
        var video = $(this).parent().find("video")
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
});
