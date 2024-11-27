
var userAgent = window.navigator.userAgent.toLowerCase();
var sp = userAgent.match(/iphone|ipad|ipod|android/i);

jQuery(function($){

  $('.slide_selector').slick({
    slidesToShow: 1, //スライドが見える数
    slidesToScroll: 1, //スライドがスクロールする数
    dots: false,
    infinite: true, //無限スクロール
    draggable: true, //マウスドラッグでのスクロール
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: 'progressive',
    appendArrows: $('#arrows'),
    prevArrow: $('#slick_preview'),
    nextArrow: $('#slick_next'),
    //レスポンシブ設定
    responsive: [
      {
        breakpoint: 3200,      // 〜3200px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '100px',
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
          centerPadding: '100px',
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




});
