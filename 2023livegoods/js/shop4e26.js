
jQuery(function($){

    $('[data-fancybox]').fancybox({
        // オプションを下記に記載していきます
        loop : false, // 複数画像表示時に最初と最後をループさせる
        // toolbar  : false, // ツールバーの非表示
        // smallBtn : true, // 小さいCloseボタン利用する
        modal: true
    });


    $('.img_list img').click(function(){
        var DataName = $(this).attr('name');
        var DataSrc = $(this).attr('src');

        $('#'+ DataName + "_main_img").attr('src',DataSrc);

    });


});



