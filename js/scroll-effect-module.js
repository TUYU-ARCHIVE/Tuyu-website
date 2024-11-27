$(window).on('load scroll', function () {
            
    $(".effect__fadein-basic").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("active");
           
            
      }
        else{
             $(this).removeClass("active");
        }
    });    
    
  });
