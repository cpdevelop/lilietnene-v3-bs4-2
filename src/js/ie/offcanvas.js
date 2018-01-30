// Offcanvas
$('[data-toggle="offcanvas"]').on('click', function() {
    $('.row-offcanvas').toggleClass('active');
    // .row-offcanvasがactiveになったらマスクレイヤーを追加する
     if ($('.row-offcanvas').hasClass('active'))
     {
         $('<div/>', {
             'class': 'offcanvas-blank',
             'data-toggle': 'offcanvas',
             click: function() {
                 $('.row-offcanvas').removeClass('active');
                 $(this).remove();
                 $(".offcanvas-close").removeClass("fadein");
             }
         }).appendTo('body');
        //ボタンを表示
        $(".offcanvas-close").addClass("fadein");
     }
     else
     {
         $('.offcanvas-blank').remove();
         $(".offcanvas-close").removeClass("fadein");
     }
});
