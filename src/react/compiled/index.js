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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/react/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    ColorPicker = _wp$components.ColorPicker,
    IconButton = _wp$components.IconButton;
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
wp.blocks.registerBlockType("starter/test-block", {
  title: "Test Block",
  icon: "smiley",
  category: "custom-theme-blocks",
  attributes: {
    seljaci: {
      type: "array",
      default: []
    }
  },
  edit: function edit(props) {
    var seljaki = props.attributes.seljaci; //FUNCTIONS

    function updateSeljakIme(e) {
      var ime = e.target.value;
      seljaki[e.target.parentNode.getAttribute("index")] = _objectSpread(_objectSpread({}, seljaki[e.target.parentNode.getAttribute("index")]), {}, {
        ime: ime
      });
      props.setAttributes({
        seljaci: seljaki.slice()
      });
    }

    function updateSeljakBoja(e) {
      var boja = e.target.value;
      seljaki[e.target.parentNode.getAttribute("index")] = _objectSpread(_objectSpread({}, seljaki[e.target.parentNode.getAttribute("index")]), {}, {
        boja: boja
      });
      props.setAttributes({
        seljaci: seljaki.slice()
      });
    }

    function pushSeljaci(e) {
      seljaki.push(seljaki.length);
      seljaki[e.target.parentNode.getAttribute("index")] = {
        ime: " ",
        boja: " "
      };
      props.setAttributes({
        seljaci: seljaki.slice()
      });
    }

    function removeSeljak(e) {
      seljaki.splice(e.target.getAttribute("index"), 1);
      props.setAttributes({
        seljaci: seljaki.slice()
      });
    } //FUNCTIONS


    var ssrProps = {
      block: 'starter/test-block',
      attributes: props.attributes
    };

    var _React$useState = React.useState(false),
        _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
        isSelected = _React$useState2[0],
        setIsSelected = _React$useState2[1];

    if (isSelected) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        class: "custom-container"
      }, seljaki.map(function (items, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
          index: index
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
          type: "text",
          field: "ime",
          value: items.ime,
          placeholder: "Seljak Ime",
          onChange: updateSeljakIme
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("select", {
          field: "boja",
          value: items.boja,
          onChange: updateSeljakBoja
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("option", {
          value: "Red"
        }, "Red"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("option", {
          value: "Green"
        }, "Green"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("option", {
          value: "Blue"
        }, "Blue")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
          index: index,
          onClick: removeSeljak
        }, "X"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", null));
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
        onClick: pushSeljaci
      }, "Add Row"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
        onClick: function onClick() {
          return setIsSelected(false);
        }
      }, "Finish Editing"));
    } else {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        onClick: function onClick() {
          return setIsSelected(true);
        }
      }, (wp.element.createElement(wp.editor.ServerSideRender, ssrProps), wp.element.createElement(wp.components.ServerSideRender, ssrProps), wp.element.createElement(wp.serverSideRender, ssrProps)));
    }
  },
  save: function save(props) {
    return null;
  }
});
wp.blocks.registerBlockType("starter/hero-slider-block", {
  title: "Hero Slider Block",
  icon: "smiley",
  category: "custom-theme-blocks",
  attributes: {
    slides: {
      type: "array",
      default: []
    } // mediaId: {
    //     type: 'number',
    //     default: 0
    // },
    // mediaUrl: {
    //     type: 'string',
    //     default: ''
    // }

  },
  edit: function edit(props) {
    var Slides = props.attributes.slides; //FUNCTIONS

    function updateProps() {
      props.setAttributes({
        slides: Slides.slice()
      });
    }

    function updateSlide(e) {
      console.log(e.target);
      var field = e.target.getAttribute("field");
      Slides[e.target.parentNode.getAttribute("index")][field] = e.target.value;
      console.log(Slides[e.target.parentNode.getAttribute("index")]);
      updateProps();
    }

    function pushSlides(e) {
      Slides.push(Slides.length);
      Slides[Slides.length - 1] = {
        backgroundImage: " ",
        boja: " "
      };
      updateProps();
    }

    function removeSlide(e) {
      Slides.splice(e.target.getAttribute("index"), 1);
      updateProps();
    } //FUNCTIONS


    var ssrProps = {
      block: 'starter/hero-slider-block',
      attributes: props.attributes
    };

    var _React$useState3 = React.useState(false),
        _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),
        isSelected = _React$useState4[0],
        setIsSelected = _React$useState4[1];

    if (isSelected) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        class: "custom-container"
      }, Slides.map(function (slide, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
          index: index,
          onChange: updateSlide
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MediaUpload, {
          field: "slideImg",
          onSelect: updateSlide,
          type: "image",
          value: slide.backgroundImage,
          render: function render(_ref) {
            var open = _ref.open;
            return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(IconButton, {
              onClick: open,
              icon: "upload"
            }, "Change");
          }
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
          type: "text",
          field: "backgroundImage",
          value: slide.backgroundImage,
          placeholder: "Seljak Ime"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
          type: "text",
          field: "boja",
          value: slide.boja,
          placeholder: "boja"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
          index: index,
          onClick: removeSlide
        }, "X"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", null));
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
        onClick: pushSlides
      }, "Add Row"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
        onClick: function onClick() {
          return setIsSelected(false);
        }
      }, "Finish Editing"));
    } else {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        onClick: function onClick() {
          return setIsSelected(true);
        }
      }, (wp.element.createElement(wp.editor.ServerSideRender, ssrProps), wp.element.createElement(wp.components.ServerSideRender, ssrProps), wp.element.createElement(wp.serverSideRender, ssrProps)));
    }
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map