
var userAgent = window.navigator.userAgent.toLowerCase();
var sp = userAgent.match(/iphone|ipad|ipod|android/i);

jQuery(function($){

    $('[data-fancybox]').fancybox({
        // オプションを下記に記載していきます
        loop : false, // 複数画像表示時に最初と最後をループさせる
         toolbar  : false, // ツールバーの非表示
         smallBtn : false, // 小さいCloseボタン利用する
         // modal: true,
      clickOutside : 'close',

    });


});
