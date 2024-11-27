
var userAgent = window.navigator.userAgent.toLowerCase();
var sp = userAgent.match(/iphone|ipad|ipod|android/i);

jQuery(function($){
   

    var $slider_container = $('.channel_slick_inner'),
        $slider = $('.channel_slide_selector');


    $slider.slick({
        arrows: false,
        autoplay: true,
        adaptiveHeight: true,
        dots: true,
        infinite: true, //無限スクロール
        draggable: false, //マウスドラッグでのスクロール
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '50px',
        focusOnSelect: true,
        autoplaySpeed: 4000,
        lazyLoad: 'progressive',
        // レスポンシブ設定
        // responsive: [
        //     {
        //         breakpoint: 3200,      // 〜3200px
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 600,      // 〜600px
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    });



    var $slider_container2 = $('.video_slick_inner'),
        $slider2 = $('.video_slide_selector');


    $slider2.slick({
        arrows: false,
        autoplay: true,
        dots: false,
        infinite: true, //無限スクロール
        draggable: true, //マウスドラッグでのスクロール
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '50px',
        focusOnSelect: true,
        autoplaySpeed: 4000,
        lazyLoad: 'progressive',
        //レスポンシブ設定
        responsive: [
            {
                breakpoint: 3200,      // 〜3200px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '350px',
                    focusOnSelect: true,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 900,      // 〜900
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '200px',
                    variableWidth: true,
                }
            }
            ,
            {
                breakpoint: 500,      // 〜350
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px',
                    variableWidth: true,
                }
            }
        ]
    });

    
    
       var $slider3 = $('.top_banner');
    
    
    $slider3.on('init', function () {
  setTimeout(function () {
    $slider3.slick('slickSetOption', 'autoplay', true, true);
  }, 9500);
});


    $slider3.slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 100,
        dots: false,
        infinite: true, //無限スクロール
        draggable: true, //マウスドラッグでのスクロール
        slidesToShow: 1,
          slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        autoplaySpeed: 4000,
        lazyLoad: 'progressive',
        centerPadding: '125px',
        responsive: [
            {
                breakpoint: 767,      // 〜3200px
                settings: {
                    centerPadding: '50px',
                }
            }
        ]
    });
   $slider3.slick('slickPause');


    var loading = false;

    function loadingOut(){
         
        $('#exterior_wrapper').css('opacity',1);
        $('html,body').animate({scrollTop: 0}, 10,function (){});
        $('#loading').fadeOut(1000);
    }
    if(sp){

        // 2500ms delay
        // $('#exterior_wrapper').css('opacity',0)
        // setTimeout(function () {
        //     if(loading){
        //         loadingOut();
        //     }
        //     else {
        //         setTimeout(function () {
        //             loadingOut();
        //         }, 3000);
        //     }
        //
        // }, 2200);

        // loadingOut();



    }
    else {
        // function lazyLoadVideo2() {
        //     var xhr = new XMLHttpRequest();
        //     xhr.open('GET', 'media/royalflush_pc.mp4', true);
        //     xhr.responseType = 'blob';
        //     xhr.onload = function (e) {
        //         if (this.status === 200) {
        //             var blob = this.response;
        //             var src = (window.webkitURL || window.URL).createObjectURL(blob);
        //             $('#video_section01').append('<source type="video/mp4" src="' + src + '">');
        //         }
        //     };
        //     xhr.send();
        // }
        // lazyLoadVideo2();

        // $('#video_section01').hide();

        // 2500ms delay
        // $('#exterior_wrapper').css('opacity',0)
        // setTimeout(function () {
        //         loadingOut();
        // }, 2200);

    }

  setTimeout(function(){
    $('.spinner').fadeOut(1000,function(){
      setTimeout(function(){
           
        $('html,body').animate({scrollTop: 0}, 10);
           $('#content_area').css('opacity',1);
          $('#section01_video-area').css('opacity',1);
        $('#loading').fadeOut();
        $('body').addClass('load_finish');
      },300);
         setTimeout(function(){
        $('.load-pop a').trigger("click");
      },2000);
        
        setTimeout(function(){
        $slider3.slick('slickPlay');
      },2000);
        
    });
      
    //    $('#pp_bnr').click();
  },1500);
    
    
    
    


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




$(window).on('load scroll resize', function () {
             var height = $(window).height();
  if ($(window).scrollTop() > height) {
    $('header').removeClass('header_on');
  } else {
    $('header').addClass('header_on');
  }
     });