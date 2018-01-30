// Accordion
var menu = document.getElementsByClassName('accordion-menu-item');
var list = document.getElementsByClassName('parent');
var panel = document.getElementsByClassName('collapse');
var close =  document.getElementsByClassName('.collapsed');

$(menu).find(list).on('click', function() {;
    // Reset
    $('i', list).removeClass('icon-caretDown');

    if ($(panel).hasClass('show'))  {
          // Not Current
        if ($(this).hasClass('collapsed'))  {
          $('i', this).addClass('icon-caretDown');
        }
    } else {
        $('i', this).addClass('icon-caretDown');
    }
});

//3階層目がある場合、2階層目がOPENの状態なのにアイコンが戻ってしまう問題が未解決
