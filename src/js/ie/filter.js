$('.alertbox').hide();

$('.filter [data-filter]').on('click', function(){

  $('.filter [data-filter]').removeClass('active');
  $(this).addClass('active');
  var selected = $(this).attr('data-filter');
  var selectedItem = $('.boxes.'+ selected );

  if (selected == 'all'){
    $.when(
      //if($('.alertbox').css('display') == 'block') $('.alertbox').hide();
      $('.boxes').fadeOut(800, 'swing' )
    )
    .done(function() {
      $('.boxes').fadeIn(800, 'swing' )
    });
  } else if (selectedItem.length == 0) {
    $.when(
      $('.boxes').fadeOut(800, 'swing' )
    )
    .done(function() {
      //$('.alertbox').fadeIn();
    });
  } else {
    $.when(
      //if($('.alertbox').css('display') == 'block') $('.alertbox').hide();
      $('.boxes').fadeOut(800, 'swing' )
    )
    .done(function() {
      $(selectedItem).fadeIn(800, 'swing' );
    });
  }

});
