$(document).ready(function() {
    $(".tehno__media-btn").on("click", function() {
        // Получаем идентификатор видео из атрибута данных
        var videoId = $(this).data("video2");
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
    $(".download__link").click(function() {
        $(this).parents('.download').find(".if_download").show();
    })
    if($(window).width() < 769) {
        $(".catalog__products-grid").removeClass("catalog__products-column");
    }
    $(window).on('resize', function() {
        if($(window).width() < 769) {
            $(".catalog__products-grid").removeClass("catalog__products-column");
        }
        else {
            $(".catalog__products-grid").addClass("catalog__products-column");
        }
    })
});