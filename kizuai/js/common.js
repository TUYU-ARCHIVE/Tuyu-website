
$(window).on('load scroll', function () {
    
    var scroll = $(window).scrollTop();
    
     if(scroll > 100){
            $("header").addClass("on");
           
         }
        else{
            $("header").removeClass("on");
        }

    
    
  });

window.addEventListener("keydown", () => {　
  if (event.key === "Escape") {
      $("nav").removeClass("on");
    $(".nav-btn").removeClass("close");
  }
});

$('body').on('click', '.nav-btn', function () {
    $("nav").toggleClass("on");
    $(".nav-btn").toggleClass("close");

});


$('body').on('click', '.lyric-btn', function () {
    $(this).addClass('open');
     $(this).text("CLOSE");
    $('.lyric-slide').slideDown();
});

$('body').on('click', '.lyric-btn.open', function () {
    $(this).removeClass('open');
    $(this).text("MORE");
    $('.lyric-slide').slideUp();
});


$(function(){
  $('a[href^="#"]').click(function(){
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
