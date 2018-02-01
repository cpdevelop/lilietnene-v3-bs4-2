/* eslint no-unused-vars: 0 */
import $ from 'jquery';

export default class Filter {
  constructor () {
    this.alertbox = $('.alertbox');
    this.filters = $('.filter [data-filter]');
    this.events();
    this.alertboxHide();
  }

  alertboxHide(){
    this.alertbox.hide();
  }

  events() {
      this.filters.on('click', function(e){
        e.preventDefault();
        const current = $(this);
        const boxes = $('.boxes');

        $('.filter [data-filter]').removeClass('active');
        current.addClass('active');

        const selected = current.attr('data-filter');
        const selectedItem = $(`.boxes.${selected}`);

        if (selected == 'all'){
            boxes.fadeOut().promise().done(() => {
              if($('.alertbox').css('display') == 'block') $('.alertbox').hide();
              boxes.fadeIn();
            });
        } else if (selectedItem.length == 0) {
            boxes.fadeOut().promise().done(() => {
              $('.alertbox').fadeIn();
            });
        } else {
            boxes.fadeOut().promise().done(() => {
              if($('.alertbox').css('display') == 'block') $('.alertbox').hide();
              selectedItem.fadeIn();
            });
        }
      });
  }
}

//new Filter();
