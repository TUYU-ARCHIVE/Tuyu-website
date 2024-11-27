$('body').on('click', '.nav-btn', function () {
    $("nav").toggleClass("on");
    $(".nav-btn").toggleClass("close");

});

$(function(){
  $('nav a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
      $("nav").removeClass("on");
    $(".nav-btn").removeClass("close");
    return false;
  });
});


$(window).on('scroll', function(){
          var scrollTop = $(window).scrollTop();
            $('#info,#goods').css('background-position', 'center -'+ (scrollTop / 3) + 'px');
    
           
          
    });