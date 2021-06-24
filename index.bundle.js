/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_cafe_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/cafe.jpg */ "./src/images/cafe.jpg");
/* harmony import */ var _images_img1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/img1.jpg */ "./src/images/img1.jpg");
/* harmony import */ var _images_img2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/img2.jpg */ "./src/images/img2.jpg");
/* harmony import */ var _images_img3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/img3.jpg */ "./src/images/img3.jpg");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&family=Viaoda+Libre&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Benne&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_cafe_jpg__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_img1_jpg__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_img2_jpg__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_img3_jpg__WEBPACK_IMPORTED_MODULE_6__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n\n#header {\n  padding: 1em;\n  background: rgba(177, 162, 113, 0.5);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(5.5px);\n  -webkit-backdrop-filter: blur(5.5px);\n  display: flex;\n  align-items: center;\n}\n@media screen and (max-width: 790px) {\n  #header > *:first-child {\n    flex: 0;\n  }\n}\n#header > * {\n  flex: 1;\n}\n#header h1 {\n  margin-top: 10px;\n  font-family: \"Benne\", serif;\n  font-size: calc(5px + 3.5vw);\n  color: black;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  padding: 1em;\n}\nnav button {\n  margin-right: 1em;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: calc(5px + 2vw);\n  color: black;\n  font-weight: 200;\n  transition: all 0.2s;\n}\nnav button:last-child {\n  margin-right: 0;\n}\nnav button:hover {\n  color: white;\n}\nnav .active {\n  color: white;\n}\n\nsection {\n  margin: auto;\n  margin-top: 1em;\n  max-width: 900px;\n  padding: 1em;\n  background: white;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(5.5px);\n  -webkit-backdrop-filter: blur(5.5px);\n  text-align: center;\n}\n\n.home {\n  width: 100%;\n  padding: 1em;\n  box-sizing: border-box;\n  text-align: left;\n}\n.home h2 {\n  font-size: 42px;\n  font-weight: 200;\n  color: #645b3f;\n}\n.home p {\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 28px;\n}\n\n.menu {\n  width: 100%;\n  text-align: left;\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-areas: \"menu img1\" \"menu img2\" \"menu img3\";\n}\n.menu .menu-list {\n  padding: 1em;\n  grid-area: menu;\n}\n.menu .menu-list h2 {\n  font-size: 42px;\n  font-weight: 200;\n  color: #645b3f;\n  margin-bottom: 16px;\n}\n.menu .menu-list p {\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 28px;\n}\n.menu .menu-list .menu-item {\n  display: grid;\n  grid-template-columns: 4fr 1fr;\n  grid-template-areas: \"name price\" \"desc .\";\n  margin-bottom: 1em;\n}\n.menu .menu-list .menu-item h3 {\n  grid-area: name;\n  font-size: 24px;\n  font-weight: 400;\n  color: #645b3f;\n}\n.menu .menu-list .menu-item .item-price {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  grid-area: price;\n}\n.menu .menu-list .menu-item .item-desc {\n  grid-area: desc;\n  color: #292929;\n  font-weight: 400;\n}\n.menu .image-cont {\n  min-height: 250px;\n}\n.menu .image-1 {\n  grid-area: img1;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n}\n.menu .image-2 {\n  grid-area: img2;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-position: center;\n}\n.menu .image-3 {\n  grid-area: img3;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  background-position: center;\n}\n\n.contact {\n  width: 100%;\n  padding: 1em;\n  box-sizing: border-box;\n  text-align: left;\n}\n.contact h2 {\n  font-size: 42px;\n  font-weight: 200;\n  color: #645b3f;\n}\n.contact p {\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 28px;\n}\n.contact #myFrame {\n  width: 100%;\n  margin-top: 1em;\n}", "",{"version":3,"sources":["webpack://./src/style/_base.scss","webpack://./src/style.scss","webpack://./src/style/layout/_header.scss","webpack://./src/style/layout/_nav.scss","webpack://./src/style/layout/_section.scss","webpack://./src/style/components/_home.scss","webpack://./src/style/components/_menu.scss","webpack://./src/style/components/_contact.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,iCAAA;ACGJ;;ADAA;EACI,YAAA;ACGJ;;ADAA;EACI,mDAAA;EACA,sBAAA;ACGJ;;ACfA;EACI,YAAA;EACA,oCAAA;EACA,gDAAA;EACA,4BAAA;EACA,oCAAA;EACA,aAAA;EACA,mBAAA;ADkBJ;AChBI;EACI;IACI,OAAA;EDkBV;AACF;ACfI;EACI,OAAA;ADiBR;ACdI;EACI,gBAAA;EACA,2BAAA;EACA,4BAAA;EACA,YAAA;ADgBR;;AEvCA;EACI,aAAA;EACA,uBAAA;EACA,YAAA;AF0CJ;AExCI;EACI,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,0BAAA;EACA,YAAA;EACA,gBAAA;EACA,oBAAA;AF0CR;AExCQ;EACI,eAAA;AF0CZ;AEvCQ;EACI,YAAA;AFyCZ;AErCI;EACI,YAAA;AFuCR;;AGhEA;EACI,YAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,gDAAA;EACA,4BAAA;EACA,oCAAA;EACA,kBAAA;AHmEJ;;AI5EA;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,gBAAA;AJ+EJ;AI7EI;EACI,eAAA;EACA,gBAAA;EACA,cAAA;AJ+ER;AI5EI;EACI,eAAA;EACA,gBAAA;EACA,iBAAA;AJ8ER;;AK7FA;EACI,WAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;EACA,8BAAA;EACA,+BAAA;EACA,wDACI;AL+FR;AK1FI;EACI,YAAA;EACA,eAAA;AL4FR;AK1FQ;EACI,eAAA;EACA,gBAAA;EACA,cAAA;EACA,mBAAA;AL4FZ;AKzFQ;EACI,eAAA;EACA,gBAAA;EACA,iBAAA;AL2FZ;AKvFQ;EACI,aAAA;EACA,8BAAA;EACA,0CACI;EAEJ,kBAAA;ALuFZ;AKrFY;EACI,eAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;ALuFhB;AKpFY;EACI,aAAA;EACA,qBAAA;EACA,yBAAA;EACA,gBAAA;ALsFhB;AKnFY;EACI,eAAA;EACA,cAAA;EACA,gBAAA;ALqFhB;AKpEI;EACI,iBAAA;ALsER;AKnEI;EACI,eAAA;EACA,mDAAA;EACA,sBAAA;EACA,2BAAA;ALqER;AKlEI;EACI,eAAA;EACA,mDAAA;EACA,sBAAA;EACA,2BAAA;ALoER;AKjEI;EACI,eAAA;EACA,mDAAA;EACA,sBAAA;EACA,2BAAA;ALmER;;AMlKA;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,gBAAA;ANqKJ;AMnKI;EACI,eAAA;EACA,gBAAA;EACA,cAAA;ANqKR;AMlKI;EACI,eAAA;EACA,gBAAA;EACA,iBAAA;ANoKR;AMjKI;EACI,WAAA;EACA,eAAA;ANmKR","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nhtml,body{\n    height: 100%;\n}\n\nbody{\n    background: url('./images/cafe.jpg');\n    background-size: cover;\n}","@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&family=Viaoda+Libre&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Benne&display=swap');\n@import 'style/mix+var/variables';\n@import 'style/base';\n@import 'style/layout/header';\n@import 'style/layout/nav';\n@import 'style/layout/section';\n@import 'style/components/home';\n@import 'style/components/menu';\n@import 'style/components/contact';","#header {\n    padding: 1em;\n    background: rgba(177, 162, 113, 0.50);\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n    backdrop-filter: blur(5.5px);\n    -webkit-backdrop-filter: blur(5.5px);\n    display: flex;\n    align-items: center;\n\n    @media screen and (max-width: $medium) {\n        &>*:first-child{\n            flex: 0;\n        }\n    }\n\n    &>*{\n        flex: 1;\n    }\n\n    h1 {\n        margin-top: 10px;\n        font-family: 'Benne', serif;\n        font-size: calc(5px + 3.5vw);\n        color: black;\n    }\n\n}","nav {\n    display: flex;\n    justify-content: center;\n    padding: 1em;\n\n    button{\n        margin-right: 1em;\n        background: none;\n        border: none;\n        cursor: pointer;\n        font-size: calc(5px + 2vw);\n        color: black;\n        font-weight: 200;\n        transition: all 0.2s;\n        \n        &:last-child{\n            margin-right: 0;\n        }\n\n        &:hover{\n            color: white;\n        }\n    }\n\n    .active{\n        color: white;\n    }\n}","section{\n    margin: auto;\n    margin-top: 1em;\n    max-width: 900px;\n    padding: 1em;\n    background: rgb(255, 255, 255);\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n    backdrop-filter: blur(5.5px);\n    -webkit-backdrop-filter: blur(5.5px);\n    text-align: center;\n}",".home{\n    width: 100%;\n    padding: 1em;\n    box-sizing: border-box;\n    text-align: left;\n\n    h2{\n        font-size: 42px;\n        font-weight: 200;\n        color: rgb(100, 91, 63);\n    }\n\n    p{\n        font-size: 20px;\n        font-weight: 200;\n        line-height: 28px;\n    }\n\n}",".menu {\n    width: 100%;\n    text-align: left;\n    display: grid;\n    grid-gap: 1em;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-areas:\n        \"menu img1\"\n        \"menu img2\"\n        \"menu img3\";\n\n\n    .menu-list {\n        padding: 1em;\n        grid-area: menu;\n\n        h2 {\n            font-size: 42px;\n            font-weight: 200;\n            color: rgb(100, 91, 63);\n            margin-bottom: 16px;\n        }\n\n        p {\n            font-size: 20px;\n            font-weight: 200;\n            line-height: 28px;\n        }\n\n\n        .menu-item {\n            display: grid;\n            grid-template-columns: 4fr 1fr;\n            grid-template-areas:\n                \"name price\"\n                \"desc .\";\n            margin-bottom: 1em;\n\n            h3 {\n                grid-area: name;\n                font-size: 24px;\n                font-weight: 400;\n                color: rgb(100, 91, 63);\n            }\n\n            .item-price {\n                display: flex;\n                align-items: flex-end;\n                justify-content: flex-end;\n                grid-area: price;\n            }\n\n            .item-desc {\n                grid-area: desc;\n                color: rgb(41, 41, 41);\n                font-weight: 400;\n            }\n        }\n\n    }\n\n\n\n\n\n\n\n\n\n\n\n\n    .image-cont {\n        min-height: 250px;\n    }\n\n    .image-1 {\n        grid-area: img1;\n        background: url(./images/img1.jpg);\n        background-size: cover;\n        background-position: center;\n    }\n\n    .image-2 {\n        grid-area: img2;\n        background: url(./images/img2.jpg);\n        background-size: cover;\n        background-position: center;\n    }\n\n    .image-3 {\n        grid-area: img3;\n        background: url(./images/img3.jpg);\n        background-size: cover;\n        background-position: center;\n    }\n\n\n}",".contact{\n    width: 100%;\n    padding: 1em;\n    box-sizing: border-box;\n    text-align: left;\n\n    h2{\n        font-size: 42px;\n        font-weight: 200;\n        color: rgb(100, 91, 63);\n    }\n\n    p{\n        font-size: 20px;\n        font-weight: 200;\n        line-height: 28px;\n    }\n\n    #myFrame{\n        width: 100%;\n        margin-top: 1em;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {

    const container = document.createElement('div')
    container.classList.add('contact')

    const mapWrapper = document.createElement('div')
    const mapIframe = '<iframe id="myFrame" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv7xD8l3XbkgRveyqkU2JTE4&key=AIzaSyCezgB1-BebBfsyr5Zg24KPMsapZ1CaVPQ"></iframe>'
    mapWrapper.innerHTML = mapIframe


    const heading = document.createElement('h2')
    heading.innerText = 'Address'

    const address = document.createElement('div')
    address.innerHTML = '<p>Llanboidy</p><p>Whitland</p><p>SA34 0EJ</p><p>Wales, UK</p>'


    container.appendChild(heading)
    container.appendChild(address)
    container.appendChild(mapWrapper)

    return container

}

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {

    const container = document.createElement('div')
    container.classList.add('home')
    container.innerHTML = "<h2>Home</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus in. Velit sed ullamcorper morbi tincidunt ornare. Sed sed risus pretium quam vulputate dignissim suspendisse. Nisl nunc mi ipsum faucibus vitae aliquet nec. Vitae congue eu consequat ac felis donec. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Est ante in nibh mauris cursus. Euismod in pellentesque massa placerat duis ultricies lacus. Eget nunc lobortis mattis aliquam faucibus purus. Ipsum a arcu cursus vitae congue mauris.</p>"

    return container

}

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
    
    const container = document.createElement('div')
    container.classList.add('menu')

    const menuList = document.createElement('div')
    menuList.classList.add("menu-list")
    const menuHead = document.createElement('h2')
    menuHead.innerText = "Menu"
    menuList.appendChild(menuHead)

    //Menu Items
    const menuItem = document.createElement('div')
    menuItem.classList.add("menu-item")
    const itemHead = document.createElement('h3')
    itemHead.innerText = "Lorem"
    menuItem.appendChild(itemHead)
    const itemDesc = document.createElement('div')
    itemDesc.classList.add("item-desc")
    itemDesc.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget magna."
    menuItem.appendChild(itemDesc)
    const itemPrice = document.createElement('div')
    itemPrice.classList.add("item-price")
    itemPrice.innerText = "£3.49"
    menuItem.appendChild(itemPrice)
    
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))


    //side images
    const image1 = document.createElement('div')
    image1.classList.add('image-1', 'image-cont')

    const image2 = document.createElement('div')
    image2.classList.add('image-2', 'image-cont')

    const image3 = document.createElement('div')
    image3.classList.add('image-3', 'image-cont')

    container.appendChild(menuList)
    container.appendChild(image1)
    container.appendChild(image2)
    container.appendChild(image3)

    return container

}

/***/ }),

/***/ "./src/images/cafe.jpg":
/*!*****************************!*\
  !*** ./src/images/cafe.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99ca122603df5def802b.jpg";

/***/ }),

/***/ "./src/images/img1.jpg":
/*!*****************************!*\
  !*** ./src/images/img1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8820149c5d56bbc05471.jpg";

/***/ }),

/***/ "./src/images/img2.jpg":
/*!*****************************!*\
  !*** ./src/images/img2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89f861191e1a9d069789.jpg";

/***/ }),

/***/ "./src/images/img3.jpg":
/*!*****************************!*\
  !*** ./src/images/img3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40242e6bcf78a92ab670.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home.js */ "./src/components/home.js");
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu.js */ "./src/components/menu.js");
/* harmony import */ var _components_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact.js */ "./src/components/contact.js");





const contentArea = document.createElement('section')
contentArea.appendChild((0,_components_home_js__WEBPACK_IMPORTED_MODULE_1__.default)())

const changeComponent = function (event, module) {
    contentArea.innerHTML = ''
    const btns = document.querySelectorAll('.navBtn')
    btns.forEach(element => {
        element.classList.remove('active')
    });
    const clickedBtnId = event.target.id
    const clickedBtn = document.querySelector(`#${clickedBtnId}`)
    clickedBtn.classList.add('active')

    if (clickedBtnId == "home-btn") {
        contentArea.appendChild((0,_components_home_js__WEBPACK_IMPORTED_MODULE_1__.default)())
    }else if(clickedBtnId == "menu-btn") {
        contentArea.appendChild((0,_components_menu_js__WEBPACK_IMPORTED_MODULE_2__.default)())
    }else if(clickedBtnId == "contact-btn") {
        contentArea.appendChild((0,_components_contact_js__WEBPACK_IMPORTED_MODULE_3__.default)())
    }  
}

function component() {

    //Header container
    const header = document.createElement('div')
    header.setAttribute("id", "header")
    header.innerHTML = "<div></div><div><h1>Bronysgowen Cafe</h1></div>"

    //Nav buttons
    const nav = document.createElement('nav')
    header.appendChild(nav)

    //Home button
    const homeBtn = document.createElement('button')
    homeBtn.setAttribute("id", "home-btn")
    homeBtn.innerText = "HOME"
    homeBtn.classList.add('navBtn')
    homeBtn.addEventListener("click", function (event) {
        changeComponent(event, "home")
    }, false)

    //Menu button
    const menuBtn = document.createElement('button')
    menuBtn.setAttribute("id", "menu-btn")
    menuBtn.innerText = "MENU"
    menuBtn.classList.add('navBtn')
    menuBtn.addEventListener("click", function (event) {
        changeComponent(event, "menu")
    }, false)

    //Contact button
    const contactBtn = document.createElement('button')
    contactBtn.setAttribute("id", "contact-btn")
    contactBtn.innerText = "CONTACT"
    contactBtn.classList.add('navBtn')
    contactBtn.addEventListener("click", function (event) {
        changeComponent(event, "contact")
    }, false)

    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(contactBtn)


    //Dynamic content area
    

    return header;

}

document.querySelector('#content').appendChild(component());
document.body.appendChild(contentArea);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UT1AtUmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL1RPUC1SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UT1AtUmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL1RPUC1SZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9UT1AtUmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vVE9QLVJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVE9QLVJlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL1RPUC1SZXN0YXVyYW50Ly4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9UT1AtUmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vVE9QLVJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVE9QLVJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vVE9QLVJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RPUC1SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vVE9QLVJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UT1AtUmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RPUC1SZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1RPUC1SZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDOUQsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRiwrR0FBK0csSUFBSSxJQUFJLHNDQUFzQztBQUM3SixtSEFBbUg7QUFDbkgseUNBQXlDLHNGQUErQixDQUFDLDZDQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsNkNBQTZCO0FBQ3RHLHlDQUF5QyxzRkFBK0IsQ0FBQyw2Q0FBNkI7QUFDdEcseUNBQXlDLHNGQUErQixDQUFDLDZDQUE2QjtBQUN0RztBQUNBLDZDQUE2QyxjQUFjLGVBQWUsd0NBQXdDLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUsZ0VBQWdFLDJCQUEyQixHQUFHLGFBQWEsaUJBQWlCLHlDQUF5QyxxREFBcUQsaUNBQWlDLHlDQUF5QyxrQkFBa0Isd0JBQXdCLEdBQUcsd0NBQXdDLDZCQUE2QixjQUFjLEtBQUssR0FBRyxlQUFlLFlBQVksR0FBRyxjQUFjLHFCQUFxQixrQ0FBa0MsaUNBQWlDLGlCQUFpQixHQUFHLFNBQVMsa0JBQWtCLDRCQUE0QixpQkFBaUIsR0FBRyxjQUFjLHNCQUFzQixxQkFBcUIsaUJBQWlCLG9CQUFvQiwrQkFBK0IsaUJBQWlCLHFCQUFxQix5QkFBeUIsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsb0JBQW9CLGlCQUFpQixHQUFHLGVBQWUsaUJBQWlCLEdBQUcsYUFBYSxpQkFBaUIsb0JBQW9CLHFCQUFxQixpQkFBaUIsc0JBQXNCLHFEQUFxRCxpQ0FBaUMseUNB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LGdDQUFnQywrREFBTztBQUN2QyxLO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0EsdUMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2ltYWdlcy9jYWZlLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL2ltYWdlcy9pbWcxLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuL2ltYWdlcy9pbWcyLmpwZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuL2ltYWdlcy9pbWczLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwJmZhbWlseT1WaWFvZGErTGlicmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVubmUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNzcsIDE2MiwgMTEzLCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUuNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUuNXB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xcbiAgI2hlYWRlciA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICBmbGV4OiAwO1xcbiAgfVxcbn1cXG4jaGVhZGVyID4gKiB7XFxuICBmbGV4OiAxO1xcbn1cXG4jaGVhZGVyIGgxIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkJlbm5lXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IGNhbGMoNXB4ICsgMy41dncpO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5uYXYgYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAydncpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5uYXYgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxubmF2IC5hY3RpdmUge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1LjVweCk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1LjVweCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob21lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5ob21lIGgyIHtcXG4gIGZvbnQtc2l6ZTogNDJweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBjb2xvcjogIzY0NWIzZjtcXG59XFxuLmhvbWUgcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcblxcbi5tZW51IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMWVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtZW51IGltZzFcXFwiIFxcXCJtZW51IGltZzJcXFwiIFxcXCJtZW51IGltZzNcXFwiO1xcbn1cXG4ubWVudSAubWVudS1saXN0IHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGdyaWQtYXJlYTogbWVudTtcXG59XFxuLm1lbnUgLm1lbnUtbGlzdCBoMiB7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgY29sb3I6ICM2NDViM2Y7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4ubWVudSAubWVudS1saXN0IHAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbn1cXG4ubWVudSAubWVudS1saXN0IC5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJuYW1lIHByaWNlXFxcIiBcXFwiZGVzYyAuXFxcIjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLm1lbnUgLm1lbnUtbGlzdCAubWVudS1pdGVtIGgzIHtcXG4gIGdyaWQtYXJlYTogbmFtZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzY0NWIzZjtcXG59XFxuLm1lbnUgLm1lbnUtbGlzdCAubWVudS1pdGVtIC5pdGVtLXByaWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ3JpZC1hcmVhOiBwcmljZTtcXG59XFxuLm1lbnUgLm1lbnUtbGlzdCAubWVudS1pdGVtIC5pdGVtLWRlc2Mge1xcbiAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgY29sb3I6ICMyOTI5Mjk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubWVudSAuaW1hZ2UtY29udCB7XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG59XFxuLm1lbnUgLmltYWdlLTEge1xcbiAgZ3JpZC1hcmVhOiBpbWcxO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbi5tZW51IC5pbWFnZS0yIHtcXG4gIGdyaWQtYXJlYTogaW1nMjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4ubWVudSAuaW1hZ2UtMyB7XFxuICBncmlkLWFyZWE6IGltZzM7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmNvbnRhY3QgaDIge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGNvbG9yOiAjNjQ1YjNmO1xcbn1cXG4uY29udGFjdCBwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuLmNvbnRhY3QgI215RnJhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2xheW91dC9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9sYXlvdXQvX25hdi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbGF5b3V0L19zZWN0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb21wb25lbnRzL19ob21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb21wb25lbnRzL19tZW51LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb21wb25lbnRzL19jb250YWN0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEQUE7RUFDSSxtREFBQTtFQUNBLHNCQUFBO0FDR0o7O0FDZkE7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxnREFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURrQko7QUNoQkk7RUFDSTtJQUNJLE9BQUE7RURrQlY7QUFDRjtBQ2ZJO0VBQ0ksT0FBQTtBRGlCUjtBQ2RJO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBRGdCUjs7QUV2Q0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FGMENKO0FFeENJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBRjBDUjtBRXhDUTtFQUNJLGVBQUE7QUYwQ1o7QUV2Q1E7RUFDSSxZQUFBO0FGeUNaO0FFckNJO0VBQ0ksWUFBQTtBRnVDUjs7QUdoRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUhtRUo7O0FJNUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FKK0VKO0FJN0VJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBSitFUjtBSTVFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FKOEVSOztBSzdGQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHdEQUNJO0FMK0ZSO0FLMUZJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUw0RlI7QUsxRlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUw0Rlo7QUt6RlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBTDJGWjtBS3ZGUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUNJO0VBRUosa0JBQUE7QUx1Rlo7QUtyRlk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBTHVGaEI7QUtwRlk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FMc0ZoQjtBS25GWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUxxRmhCO0FLcEVJO0VBQ0ksaUJBQUE7QUxzRVI7QUtuRUk7RUFDSSxlQUFBO0VBQ0EsbURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FMcUVSO0FLbEVJO0VBQ0ksZUFBQTtFQUNBLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBTG9FUjtBS2pFSTtFQUNJLGVBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUxtRVI7O0FNbEtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FOcUtKO0FNbktJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBTnFLUjtBTWxLSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FOb0tSO0FNaktJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QU5tS1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2VzL2NhZmUuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwJmZhbWlseT1WaWFvZGErTGlicmUmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmVubmUmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCAnc3R5bGUvbWl4K3Zhci92YXJpYWJsZXMnO1xcbkBpbXBvcnQgJ3N0eWxlL2Jhc2UnO1xcbkBpbXBvcnQgJ3N0eWxlL2xheW91dC9oZWFkZXInO1xcbkBpbXBvcnQgJ3N0eWxlL2xheW91dC9uYXYnO1xcbkBpbXBvcnQgJ3N0eWxlL2xheW91dC9zZWN0aW9uJztcXG5AaW1wb3J0ICdzdHlsZS9jb21wb25lbnRzL2hvbWUnO1xcbkBpbXBvcnQgJ3N0eWxlL2NvbXBvbmVudHMvbWVudSc7XFxuQGltcG9ydCAnc3R5bGUvY29tcG9uZW50cy9jb250YWN0JztcIixcIiNoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTc3LCAxNjIsIDExMywgMC41MCk7XFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUuNXB4KTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNS41cHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XFxuICAgICAgICAmPio6Zmlyc3QtY2hpbGR7XFxuICAgICAgICAgICAgZmxleDogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmPip7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICBmb250LWZhbWlseTogJ0Jlbm5lJywgc2VyaWY7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoNXB4ICsgMy41dncpO1xcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICB9XFxuXFxufVwiLFwibmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDVweCArIDJ2dyk7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgICAgICBcXG4gICAgICAgICY6bGFzdC1jaGlsZHtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYWN0aXZle1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVwiLFwic2VjdGlvbntcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1LjVweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUuNXB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIixcIi5ob21le1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgICBoMntcXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgICAgICBjb2xvcjogcmdiKDEwMCwgOTEsIDYzKTtcXG4gICAgfVxcblxcbiAgICBwe1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICB9XFxuXFxufVwiLFwiLm1lbnUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDFlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcIm1lbnUgaW1nMVxcXCJcXG4gICAgICAgIFxcXCJtZW51IGltZzJcXFwiXFxuICAgICAgICBcXFwibWVudSBpbWczXFxcIjtcXG5cXG5cXG4gICAgLm1lbnUtbGlzdCB7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgICBncmlkLWFyZWE6IG1lbnU7XFxuXFxuICAgICAgICBoMiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgICAgICAgICAgY29sb3I6IHJnYigxMDAsIDkxLCA2Myk7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgLm1lbnUtaXRlbSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICAgICAgXFxcIm5hbWUgcHJpY2VcXFwiXFxuICAgICAgICAgICAgICAgIFxcXCJkZXNjIC5cXFwiO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXG4gICAgICAgICAgICBoMyB7XFxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbmFtZTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDEwMCwgOTEsIDYzKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLml0ZW0tcHJpY2Uge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcHJpY2U7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5pdGVtLWRlc2Mge1xcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGRlc2M7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICB9XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuICAgIC5pbWFnZS1jb250IHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5pbWFnZS0xIHtcXG4gICAgICAgIGdyaWQtYXJlYTogaW1nMTtcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9pbWcxLmpwZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5pbWFnZS0yIHtcXG4gICAgICAgIGdyaWQtYXJlYTogaW1nMjtcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9pbWcyLmpwZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5pbWFnZS0zIHtcXG4gICAgICAgIGdyaWQtYXJlYTogaW1nMztcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9pbWczLmpwZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB9XFxuXFxuXFxufVwiLFwiLmNvbnRhY3R7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICAgIGgye1xcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgICAgIGNvbG9yOiByZ2IoMTAwLCA5MSwgNjMpO1xcbiAgICB9XFxuXFxuICAgIHB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgIH1cXG5cXG4gICAgI215RnJhbWV7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKVxuXG4gICAgY29uc3QgbWFwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbWFwSWZyYW1lID0gJzxpZnJhbWUgaWQ9XCJteUZyYW1lXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MFwiIGxvYWRpbmc9XCJsYXp5XCIgYWxsb3dmdWxsc2NyZWVuIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZC92MS9wbGFjZT9xPXBsYWNlX2lkOkNoSUp2N3hEOGwzWGJrZ1J2ZXlxa1UySlRFNCZrZXk9QUl6YVN5Q2V6Z0IxLUJlYkJmc3lyNVpnMjRLUE1zYXBaMUNhVlBRXCI+PC9pZnJhbWU+J1xuICAgIG1hcFdyYXBwZXIuaW5uZXJIVE1MID0gbWFwSWZyYW1lXG5cblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaGVhZGluZy5pbm5lclRleHQgPSAnQWRkcmVzcydcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gJzxwPkxsYW5ib2lkeTwvcD48cD5XaGl0bGFuZDwvcD48cD5TQTM0IDBFSjwvcD48cD5XYWxlcywgVUs8L3A+J1xuXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFwV3JhcHBlcilcblxuICAgIHJldHVybiBjb250YWluZXJcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lJylcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCI8aDI+SG9tZTwvaDI+PHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIExlY3R1cyBudWxsYSBhdCB2b2x1dHBhdCBkaWFtIHV0IHZlbmVuYXRpcyB0ZWxsdXMgaW4uIFZlbGl0IHNlZCB1bGxhbWNvcnBlciBtb3JiaSB0aW5jaWR1bnQgb3JuYXJlLiBTZWQgc2VkIHJpc3VzIHByZXRpdW0gcXVhbSB2dWxwdXRhdGUgZGlnbmlzc2ltIHN1c3BlbmRpc3NlLiBOaXNsIG51bmMgbWkgaXBzdW0gZmF1Y2lidXMgdml0YWUgYWxpcXVldCBuZWMuIFZpdGFlIGNvbmd1ZSBldSBjb25zZXF1YXQgYWMgZmVsaXMgZG9uZWMuIE51bmMgbWF0dGlzIGVuaW0gdXQgdGVsbHVzIGVsZW1lbnR1bSBzYWdpdHRpcyB2aXRhZSBldCBsZW8uIEVzdCBhbnRlIGluIG5pYmggbWF1cmlzIGN1cnN1cy4gRXVpc21vZCBpbiBwZWxsZW50ZXNxdWUgbWFzc2EgcGxhY2VyYXQgZHVpcyB1bHRyaWNpZXMgbGFjdXMuIEVnZXQgbnVuYyBsb2JvcnRpcyBtYXR0aXMgYWxpcXVhbSBmYXVjaWJ1cyBwdXJ1cy4gSXBzdW0gYSBhcmN1IGN1cnN1cyB2aXRhZSBjb25ndWUgbWF1cmlzLjwvcD5cIlxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51JylcblxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKFwibWVudS1saXN0XCIpXG4gICAgY29uc3QgbWVudUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgbWVudUhlYWQuaW5uZXJUZXh0ID0gXCJNZW51XCJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SGVhZClcblxuICAgIC8vTWVudSBJdGVtc1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpXG4gICAgY29uc3QgaXRlbUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgaXRlbUhlYWQuaW5uZXJUZXh0ID0gXCJMb3JlbVwiXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUhlYWQpXG4gICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGl0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRlc2NcIilcbiAgICBpdGVtRGVzYy5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBTZW0gaW50ZWdlciB2aXRhZSBqdXN0byBlZ2V0IG1hZ25hLlwiXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2MpXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcIml0ZW0tcHJpY2VcIilcbiAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gXCLCozMuNDlcIlxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSlcbiAgICBcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbS5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0uY2xvbmVOb2RlKHRydWUpKVxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtLmNsb25lTm9kZSh0cnVlKSlcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbS5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0uY2xvbmVOb2RlKHRydWUpKVxuXG5cbiAgICAvL3NpZGUgaW1hZ2VzXG4gICAgY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbWFnZTEuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtMScsICdpbWFnZS1jb250JylcblxuICAgIGNvbnN0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW1hZ2UyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTInLCAnaW1hZ2UtY29udCcpXG5cbiAgICBjb25zdCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGltYWdlMy5jbGFzc0xpc3QuYWRkKCdpbWFnZS0zJywgJ2ltYWdlLWNvbnQnKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVMaXN0KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZTEpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlMilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UzKVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lclxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBob21lIGZyb20gJy4vY29tcG9uZW50cy9ob21lLmpzJ1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9jb21wb25lbnRzL21lbnUuanMnXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdC5qcydcblxuY29uc3QgY29udGVudEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbmNvbnRlbnRBcmVhLmFwcGVuZENoaWxkKGhvbWUoKSlcblxuY29uc3QgY2hhbmdlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBtb2R1bGUpIHtcbiAgICBjb250ZW50QXJlYS5pbm5lckhUTUwgPSAnJ1xuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2QnRuJylcbiAgICBidG5zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9KTtcbiAgICBjb25zdCBjbGlja2VkQnRuSWQgPSBldmVudC50YXJnZXQuaWRcbiAgICBjb25zdCBjbGlja2VkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y2xpY2tlZEJ0bklkfWApXG4gICAgY2xpY2tlZEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgaWYgKGNsaWNrZWRCdG5JZCA9PSBcImhvbWUtYnRuXCIpIHtcbiAgICAgICAgY29udGVudEFyZWEuYXBwZW5kQ2hpbGQoaG9tZSgpKVxuICAgIH1lbHNlIGlmKGNsaWNrZWRCdG5JZCA9PSBcIm1lbnUtYnRuXCIpIHtcbiAgICAgICAgY29udGVudEFyZWEuYXBwZW5kQ2hpbGQobWVudSgpKVxuICAgIH1lbHNlIGlmKGNsaWNrZWRCdG5JZCA9PSBcImNvbnRhY3QtYnRuXCIpIHtcbiAgICAgICAgY29udGVudEFyZWEuYXBwZW5kQ2hpbGQoY29udGFjdCgpKVxuICAgIH0gIFxufVxuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG5cbiAgICAvL0hlYWRlciBjb250YWluZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKVxuICAgIGhlYWRlci5pbm5lckhUTUwgPSBcIjxkaXY+PC9kaXY+PGRpdj48aDE+QnJvbnlzZ293ZW4gQ2FmZTwvaDE+PC9kaXY+XCJcblxuICAgIC8vTmF2IGJ1dHRvbnNcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpXG5cbiAgICAvL0hvbWUgYnV0dG9uXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaG9tZUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtYnRuXCIpXG4gICAgaG9tZUJ0bi5pbm5lclRleHQgPSBcIkhPTUVcIlxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2QnRuJylcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY2hhbmdlQ29tcG9uZW50KGV2ZW50LCBcImhvbWVcIilcbiAgICB9LCBmYWxzZSlcblxuICAgIC8vTWVudSBidXR0b25cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1idG5cIilcbiAgICBtZW51QnRuLmlubmVyVGV4dCA9IFwiTUVOVVwiXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCduYXZCdG4nKVxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjaGFuZ2VDb21wb25lbnQoZXZlbnQsIFwibWVudVwiKVxuICAgIH0sIGZhbHNlKVxuXG4gICAgLy9Db250YWN0IGJ1dHRvblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnRhY3RCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWJ0blwiKVxuICAgIGNvbnRhY3RCdG4uaW5uZXJUZXh0ID0gXCJDT05UQUNUXCJcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ25hdkJ0bicpXG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNoYW5nZUNvbXBvbmVudChldmVudCwgXCJjb250YWN0XCIpXG4gICAgfSwgZmFsc2UpXG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bilcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bilcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bilcblxuXG4gICAgLy9EeW5hbWljIGNvbnRlbnQgYXJlYVxuICAgIFxuXG4gICAgcmV0dXJuIGhlYWRlcjtcblxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudEFyZWEpOyJdLCJzb3VyY2VSb290IjoiIn0=