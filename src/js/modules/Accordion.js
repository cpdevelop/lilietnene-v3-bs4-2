/* eslint no-unused-vars: 0 */
import $ from 'jquery';

export default class Accordion {
  constructor () {
    this.log();
  }

  log () {
    console.log("From Accordion Class!");
  }
}


// ES6に書き換える
// function Accordion (){
//   const menu = document.getElementsByClassName('accordion-menu-item');
//   const list = document.getElementsByClassName('parent');
//   const panel = document.getElementsByClassName('collapse');
//   const close =  document.getElementsByClassName('.collapsed');
//
//   $(menu).find(list).on('click', function() {;
//       // Reset
//       $('i', list).removeClass('icon-caretDown');
//
//       if ($(panel).hasClass('show'))  {
//             // Not Current
//           if ($(this).hasClass('collapsed'))  {
//             $('i', this).addClass('icon-caretDown');
//           }
//       } else {
//           $('i', this).addClass('icon-caretDown');
//       }
//   });
// }
//
// module.exports = Accordion;
