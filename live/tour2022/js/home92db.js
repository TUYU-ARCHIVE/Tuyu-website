


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





});
