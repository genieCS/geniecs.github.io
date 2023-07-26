(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wretris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wretris */ \"./node_modules/wretris/wretris.js\");\n\n\nconst canvas = document.getElementById(\"cursive-wasm-canvas\");\ncanvas.style.display = \"block\";\ncanvas.setAttribute(\"width\", \"1000\");\ncanvas.setAttribute(\"height\", \"1000\");\nconst ctx = canvas.getContext(\"2d\");\nctx.fillStyle = \"green\";\n// Add a rectangle at (10, 10) with size 100x100 pixels\nctx.fillRect(0, 0, 1000, 1000);\nconsole.log(\"canvas is loaded\", canvas !== null, ctx !== null);\nwretris__WEBPACK_IMPORTED_MODULE_0__[\"Cursive\"].retris();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);