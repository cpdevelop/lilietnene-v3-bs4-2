/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Offcanvas = __webpack_require__(3);

var _Offcanvas2 = _interopRequireDefault(_Offcanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _Offcanvas2.default(); /////////////////////////////////////////////
//
//  Language uses ES6, import modules.
//  ex.
//  import Function from './modules/Function';
//  new Function();
//
/////////////////////////////////////////////

console.log("Hi! From Index");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offcanvas = function () {
  function Offcanvas() {
    _classCallCheck(this, Offcanvas);

    this.log();
  }

  _createClass(Offcanvas, [{
    key: "log",
    value: function log() {
      console.log("From offcanvas Class!");
    }
  }]);

  return Offcanvas;
}();

// ES6に書き換える
// Offcanvas
// $('[data-toggle="offcanvas"]').on('click', function() {
//     $('.row-offcanvas').toggleClass('active');
//     // .row-offcanvasがactiveになったらマスクレイヤーを追加する
//      if ($('.row-offcanvas').hasClass('active'))
//      {
//          $('<div/>', {
//              'class': 'offcanvas-blank',
//              'data-toggle': 'offcanvas',
//              click: function() {
//                  $('.row-offcanvas').removeClass('active');
//                  $(this).remove();
//                  $(".offcanvas-close").removeClass("fadein");
//              }
//          }).appendTo('body');
//         //ボタンを表示
//         $(".offcanvas-close").addClass("fadein");
//      }
//      else
//      {
//          $('.offcanvas-blank').remove();
//          $(".offcanvas-close").removeClass("fadein");
//      }
// });


exports.default = Offcanvas;

/***/ })
/******/ ]);