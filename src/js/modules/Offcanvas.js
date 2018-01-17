/* eslint no-unused-vars: 0 */
import $ from 'jquery';

export default class Offcanvas {
  constructor () {
    this.menuIcon = $('[data-toggle="offcanvas"]');
    this.events();
  }

  events(){
    this.menuIcon.click(this.toggleTheMenu);
  }

  toggleTheMenu(){
    $('.row-offcanvas').toggleClass('active');
    if ($('.row-offcanvas').hasClass('active')){
      $('<div/>', {
                   'class': 'offcanvas-blank',
                   'data-toggle': 'offcanvas',
                   click: () => {
                       $('.row-offcanvas').removeClass('active');
                       $('.offcanvas-blank').remove();
                       $('.offcanvas-close').removeClass('fadein');
                   }
               }).appendTo('body');
              $('.offcanvas-close').addClass('fadein');
    } else {
              $('.offcanvas-blank').remove();
              $('.offcanvas-close').removeClass('fadein');
    }
  }

}
