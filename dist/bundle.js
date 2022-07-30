/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-image.js":
/*!**************************!*\
  !*** ./src/add-image.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _kiwi_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kiwi.jpg */ \"./src/kiwi.jpg\");\n/* harmony import */ var _altText_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./altText.txt */ \"./src/altText.txt\");\n\n\n\nfunction addImage() {\n  var img = document.createElement('img');\n  img.alt = _altText_txt__WEBPACK_IMPORTED_MODULE_1__;\n  img.width = 300;\n  img.src = _kiwi_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  var body = document.querySelector('body');\n  body.appendChild(img);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addImage);\n\n//# sourceURL=webpack://webpacktutorial/./src/add-image.js?");

/***/ }),

/***/ "./src/components/heading/heading.js":
/*!*******************************************!*\
  !*** ./src/components/heading/heading.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _heading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.css */ \"./src/components/heading/heading.css\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Heading = /*#__PURE__*/function () {\n  function Heading() {\n    _classCallCheck(this, Heading);\n  }\n\n  _createClass(Heading, [{\n    key: \"render\",\n    value: function render() {\n      var h1 = document.createElement('h1');\n      var body = document.querySelector('body');\n      h1.innerHTML = 'Webpack is awesome';\n      body.appendChild(h1);\n    }\n  }]);\n\n  return Heading;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://webpacktutorial/./src/components/heading/heading.js?");

/***/ }),

/***/ "./src/components/hello-world-button/hello-world-button.js":
/*!*****************************************************************!*\
  !*** ./src/components/hello-world-button/hello-world-button.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hello_world_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world-button.css */ \"./src/components/hello-world-button/hello-world-button.css\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar HelloWorldButton = /*#__PURE__*/function () {\n  function HelloWorldButton() {\n    _classCallCheck(this, HelloWorldButton);\n\n    _defineProperty(this, \"buttonCssClass\", 'hello-world-button');\n  }\n\n  _createClass(HelloWorldButton, [{\n    key: \"render\",\n    value: function render() {\n      var button = document.createElement(\"button\");\n      button.innerHTML = \"Hello Word\";\n      button.classList.add(this.buttonCssClass);\n      var body = document.querySelector(\"body\");\n\n      button.onclick = function () {\n        var p = document.createElement('p');\n        p.innerHTML = 'Hello world';\n        p.classList.add('hello-world-paragraph');\n        body.appendChild(p);\n      };\n\n      body.appendChild(button);\n    }\n  }]);\n\n  return HelloWorldButton;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelloWorldButton);\n\n//# sourceURL=webpack://webpacktutorial/./src/components/hello-world-button/hello-world-button.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hello_world_button_hello_world_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello-world-button/hello-world-button */ \"./src/components/hello-world-button/hello-world-button.js\");\n/* harmony import */ var _add_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-image */ \"./src/add-image.js\");\n/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/heading/heading */ \"./src/components/heading/heading.js\");\n\n\n\nvar helloWorldButton = new _components_hello_world_button_hello_world_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nhelloWorldButton.render();\nvar heading = new _components_heading_heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nheading.render(); // addImage();\n\n//# sourceURL=webpack://webpacktutorial/./src/index.js?");

/***/ }),

/***/ "./src/components/heading/heading.css":
/*!********************************************!*\
  !*** ./src/components/heading/heading.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpacktutorial/./src/components/heading/heading.css?");

/***/ }),

/***/ "./src/components/hello-world-button/hello-world-button.css":
/*!******************************************************************!*\
  !*** ./src/components/hello-world-button/hello-world-button.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpacktutorial/./src/components/hello-world-button/hello-world-button.css?");

/***/ }),

/***/ "./src/altText.txt":
/*!*************************!*\
  !*** ./src/altText.txt ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = \"Kiwi alt text\";\n\n//# sourceURL=webpack://webpacktutorial/./src/altText.txt?");

/***/ }),

/***/ "./src/kiwi.jpg":
/*!**********************!*\
  !*** ./src/kiwi.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"23de234a71129d9c860b.jpg\";\n\n//# sourceURL=webpack://webpacktutorial/./src/kiwi.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;