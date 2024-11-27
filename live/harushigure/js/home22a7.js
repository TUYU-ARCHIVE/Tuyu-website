


jQuery(function($){


    $('.popup_banner').click(function () {
        var href = $(this).attr("href");

        $(href).fadeIn(1000);

        return false;
    });


    $('.close,.popup_bg').click(function(){

        $(".popup").fadeOut(500);

        return false;
    });



    // スクロール
    $('.menu[href^="#"]').click(function () {
        var href = $(this).attr("href");

        var speed = 1000;
        var target = $(href === "#" || href === "" ? 'html' : href);
        var position = target.offset().top - 30;

        $("html,body").animate({
            scrollTop: position
        }, speed, 'easeOutQuad');

        return false;
    });




});
