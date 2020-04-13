module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FeaturedCard/FeaturedCard.js":
/*!*************************************************!*\
  !*** ./components/FeaturedCard/FeaturedCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/morganpierson/Projects/Rena/components/FeaturedCard/FeaturedCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const FeaturedCard = ({
  card
}) => {
  return __jsx("div", {
    className: "jsx-3188492038",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-3188492038",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, card.title), __jsx("p", {
    className: "jsx-3188492038",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, card.content), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3188492038",
    __self: undefined
  }, "div.jsx-3188492038{width:20rem;border-radius:5px;background-color:rgba(235,236,240,0.3);margin:2rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JnYW5waWVyc29uL1Byb2plY3RzL1JlbmEvY29tcG9uZW50cy9GZWF0dXJlZENhcmQvRmVhdHVyZWRDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9RLEFBR3VCLFlBQ00sa0JBQ3NCLHVDQUUzQyxjQUFDIiwiZmlsZSI6Ii9Vc2Vycy9tb3JnYW5waWVyc29uL1Byb2plY3RzL1JlbmEvY29tcG9uZW50cy9GZWF0dXJlZENhcmQvRmVhdHVyZWRDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBGZWF0dXJlZENhcmQgPSAoe2NhcmR9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57Y2FyZC50aXRsZX08L2gxPlxuICAgICAgPHA+e2NhcmQuY29udGVudH08L3A+XG4gICAgICA8c3R5bGUganN4PiB7XG4gICAgICAgIGBcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB3aWR0aDogMjByZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LDIzNiwyNDAsIDAuMyk7XG4gICAgICAgICAgbWFyZ2luOiAycmVtIDBcbiAgICAgICAgfVxuICAgICAgICBgXG4gICAgICB9XG5cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRDYXJkIl19 */\n/*@ sourceURL=/Users/morganpierson/Projects/Rena/components/FeaturedCard/FeaturedCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedCard);

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/morganpierson/Projects/Rena/components/Header/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Header = props => __jsx("div", {
  className: "jsx-3103796643" + " " + "header-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }
}, __jsx("h1", {
  className: "jsx-3103796643",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, "S Y R E"), __jsx("p", {
  className: "jsx-3103796643",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, "I t ' s \xA0\xA0\xA0\xA0O n l y \xA0\xA0\xA0\xA0A r t"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3103796643",
  __self: undefined
}, ".header-container.jsx-3103796643{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:18%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JnYW5waWVyc29uL1Byb2plY3RzL1JlbmEvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1NLEFBR3NCLDBFQUNTLDhFQUNILDZGQUNULFVBQ1oiLCJmaWxlIjoiL1VzZXJzL21vcmdhbnBpZXJzb24vUHJvamVjdHMvUmVuYS9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cbiAgPGgxPlMgWSBSIEU8L2gxPlxuICAgIDxwPkkgdCAnIHMgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7TyBuIGwgeSAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtBIHIgdDwvcD5cbiAgICA8c3R5bGUganN4PntcbiAgICAgIGBcbiAgICAgIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDE4JTtcbiAgICAgIH1cbiAgICAgIGBcbiAgICB9XG4gICAgXG4gICAgPC9zdHlsZT5cbiA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=/Users/morganpierson/Projects/Rena/components/Header/Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/SearchBar/SearchBar.js":
/*!*******************************************!*\
  !*** ./components/SearchBar/SearchBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/morganpierson/Projects/Rena/components/SearchBar/SearchBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const SearchBar = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("input", {
  type: "text",
  placeholder: "\"Photos\", \"Paintings\", \"Music\", etc...",
  className: "jsx-925185614",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "925185614",
  __self: undefined
}, "input.jsx-925185614{width:20rem;height:3rem;border-radius:5px;border:none;background-color:rgba(245,241,208,0.8);font-size:1rem;text-align:center;}.jsx-925185614::-webkit-input-placeholder{color:rgb(7,26,36);}input.jsx-925185614:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JnYW5waWVyc29uL1Byb2plY3RzL1JlbmEvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtNLEFBR3FCLEFBWWYsQUFHQSxZQWRlLENBY2QsTUFIQSxLQVZvQixrQkFDTixZQUMyQix1Q0FDeEIsZUFDRyxrQkFFcEIiLCJmaWxlIjoiL1VzZXJzL21vcmdhbnBpZXJzb24vUHJvamVjdHMvUmVuYS9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IFNlYXJjaEJhciA9IHByb3BzID0+IChcbiAgPD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nXCJQaG90b3NcIiwgXCJQYWludGluZ3NcIiwgXCJNdXNpY1wiLCBldGMuLi4nLz5cbiAgICA8c3R5bGUganN4PntcbiAgICAgIGBcbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwyNDEsMjA4LDAuOCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIFxuICAgICAgICBjb2xvcjogcmdiKDcsMjYsMzYpXG4gICAgICB9XG4gICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmVcbiAgICAgIH1cbiAgICAgIGBcbiAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhciJdfQ== */\n/*@ sourceURL=/Users/morganpierson/Projects/Rena/components/SearchBar/SearchBar.js */"));

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBar/SearchBar */ "./components/SearchBar/SearchBar.js");
/* harmony import */ var _components_FeaturedCard_FeaturedCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FeaturedCard/FeaturedCard */ "./components/FeaturedCard/FeaturedCard.js");
var _jsxFileName = "/Users/morganpierson/Projects/Rena/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const cards = [{
  title: "User_1",
  content: "User 1 information. They are a mixed media artist with a focus in painting and photography"
}, {
  title: "User_2",
  content: "User 2 information. They are a musical artist who uses found sounds to create unique sonic experiences"
}, {
  title: "User_3",
  content: "User 3 information. They are a spoken word artist who has traveled the world performing at TED talks and concert halls."
}, {
  title: "User_4",
  content: "User 4 information. They are a traveling adventure photographer."
}];

const Index = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
  className: "jsx-4078566761" + " " + "index-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }
}, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }
}), __jsx(_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }
})), __jsx("div", {
  className: "jsx-4078566761" + " " + "featured-cards-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }
}, cards.map(card => __jsx(_components_FeaturedCard_FeaturedCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
  card: card,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4078566761",
  __self: undefined
}, "*{font-family:Roboto;box-sizing:border-box;}body{margin:0;background-color:#071a24;}.index-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.featured-cards-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:60%;text-align:center;margin:0 auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}h1,p{color:#f5f1d0;}h1{font-size:3rem;margin:0rem;}p{margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3JnYW5waWVyc29uL1Byb2plY3RzL1JlbmEvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNNLEFBRzRCLEFBS1YsQUFLRSxBQUtBLEFBVWYsQUFFa0IsQUFLbEIsU0ExQjZCLElBMEI1QixDQVBBLENBSUQsSUE1QjBCLFFBNEJ6QixPQXJCQyxPQUxBLGlDQVNILEFBSWtCLHlEQUNMLFVBQ1Esa0JBQ0osUUFQaEIsTUFRZ0MsbUhBRWhDIiwiZmlsZSI6Ii9Vc2Vycy9tb3JnYW5waWVyc29uL1Byb2plY3RzL1JlbmEvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhcic7XG5pbXBvcnQgRmVhdHVyZWRDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvRmVhdHVyZWRDYXJkL0ZlYXR1cmVkQ2FyZCdcblxuY29uc3QgY2FyZHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJVc2VyXzFcIixcbiAgICBjb250ZW50OiBcIlVzZXIgMSBpbmZvcm1hdGlvbi4gVGhleSBhcmUgYSBtaXhlZCBtZWRpYSBhcnRpc3Qgd2l0aCBhIGZvY3VzIGluIHBhaW50aW5nIGFuZCBwaG90b2dyYXBoeVwiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJVc2VyXzJcIixcbiAgICBjb250ZW50OiBcIlVzZXIgMiBpbmZvcm1hdGlvbi4gVGhleSBhcmUgYSBtdXNpY2FsIGFydGlzdCB3aG8gdXNlcyBmb3VuZCBzb3VuZHMgdG8gY3JlYXRlIHVuaXF1ZSBzb25pYyBleHBlcmllbmNlc1wiXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJVc2VyXzNcIixcbiAgICBjb250ZW50OiBcIlVzZXIgMyBpbmZvcm1hdGlvbi4gVGhleSBhcmUgYSBzcG9rZW4gd29yZCBhcnRpc3Qgd2hvIGhhcyB0cmF2ZWxlZCB0aGUgd29ybGQgcGVyZm9ybWluZyBhdCBURUQgdGFsa3MgYW5kIGNvbmNlcnQgaGFsbHMuXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlVzZXJfNFwiLFxuICAgIGNvbnRlbnQ6IFwiVXNlciA0IGluZm9ybWF0aW9uLiBUaGV5IGFyZSBhIHRyYXZlbGluZyBhZHZlbnR1cmUgcGhvdG9ncmFwaGVyLlwiXG4gIH0sXG5dXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8PlxuICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4LWNvbnRhaW5lclwiPlxuICA8SGVhZGVyIC8+XG4gIDxTZWFyY2hCYXIgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWQtY2FyZHMtY29udGFpbmVyXCI+XG4gIHtjYXJkcy5tYXAoKGNhcmQpID0+IChcbiAgICA8RmVhdHVyZWRDYXJkIGNhcmQ9e2NhcmR9IC8+XG4gICkpfVxuICA8L2Rpdj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57XG4gICAgICBgXG4gICAgICAqIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcxYTI0O1xuXG4gICAgICB9XG4gICAgLmluZGV4LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICAgIH1cblxuICAgIC5mZWF0dXJlZC1jYXJkcy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgXG4gICAgfVxuICAgICBoMSwgcCB7XG4gICAgICAgY29sb3I6ICNmNWYxZDBcbiAgICAgfVxuICAgICBoMSB7XG4gICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgIG1hcmdpbjogMHJlbVxuICAgICB9XG4gICAgIHAge1xuICAgICAgIG1hcmdpbi10b3A6IDBcbiAgICAgfVxuICAgICBcbiAgICAgIGBcbiAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=/Users/morganpierson/Projects/Rena/pages/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/morganpierson/Projects/Rena/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map