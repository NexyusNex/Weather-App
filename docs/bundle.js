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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  font-family: sans-serif;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  min-height: 900px;\\r\\n  height: 100svh;\\r\\n  background-color: #7bb9ff;\\r\\n  background-size: cover;\\r\\n  color: white;\\r\\n  transform: background-image 300ms ease;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 10px 0;\\r\\n  text-shadow: 2px 2px 3px black;\\r\\n}\\r\\n\\r\\n.header img {\\r\\n  height: 5rem;\\r\\n}\\r\\n\\r\\n.weather-container {\\r\\n  display: flex;\\r\\n  height: 100%;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 50px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.info-container {\\r\\n  text-align: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  text-shadow: 2px 2px 3px black;\\r\\n  width: clamp(300px, 90%, 400px);\\r\\n  gap: 12px;\\r\\n}\\r\\n\\r\\n.city-time {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n#city {\\r\\n  font-size: 36px;\\r\\n}\\r\\n\\r\\n.temperature {\\r\\n  display: flex;\\r\\n  font-size: 2rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.condition {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.more-info {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.input-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  width: clamp(300px, 90%, 400px);\\r\\n  height: 400px;\\r\\n  text-shadow: 2px 2px 3px black;\\r\\n  gap: 12px;\\r\\n}\\r\\n\\r\\n.input-container input {\\r\\n  width: 200px;\\r\\n  height: 30px;\\r\\n  border-radius: 8px;\\r\\n  border-style: none;\\r\\n  outline: none;\\r\\n  padding-left: 32px;\\r\\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\n.input-container input:hover {\\r\\n  outline: 2px solid black;\\r\\n}\\r\\n\\r\\n.input-container label {\\r\\n  font-size: 2em;\\r\\n}\\r\\n\\r\\n#magnify {\\r\\n  position: absolute;\\r\\n  height: 1.5rem;\\r\\n  margin-left: 4px;\\r\\n  margin-top: 4px;\\r\\n}\\r\\n\\r\\n#magnify:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#location-marker {\\r\\n  height: 3rem;\\r\\n}\\r\\n\\r\\n.error {\\r\\n  color: rgb(255, 0, 0);\\r\\n  text-shadow: 1px 1px 2px rgb(117, 0, 0);\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  margin-top: auto;\\r\\n  height: 50px;\\r\\n  text-shadow: 2px 2px 3px black;\\r\\n}\\r\\n\\r\\n.footer a {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.footer a:hover {\\r\\n  color: #c7c7c7;\\r\\n}\\r\\n\\r\\n.footer a:visited {\\r\\n  color: #adf3ff;\\r\\n}\\r\\n\\r\\n.footer a:visited:hover {\\r\\n  color: #91ccd6;\\r\\n}\\r\\n\\r\\n@media screen and (width<=750px) {\\r\\n  .weather-container {\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n  }\\r\\n  .footer {\\r\\n    flex-direction: column;\\r\\n    height: auto;\\r\\n    padding-bottom: 6px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/changeBackground.js":
/*!*********************************!*\
  !*** ./src/changeBackground.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeBackground)\n/* harmony export */ });\n/* harmony import */ var _clear_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear.jpg */ \"./src/clear.jpg\");\n/* harmony import */ var _clouds_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clouds.jpg */ \"./src/clouds.jpg\");\n/* harmony import */ var _snow_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snow.jpg */ \"./src/snow.jpg\");\n/* harmony import */ var _thunder_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thunder.jpg */ \"./src/thunder.jpg\");\n/* harmony import */ var _rain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rain.jpg */ \"./src/rain.jpg\");\n/* harmony import */ var _drizzle_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drizzle.jpg */ \"./src/drizzle.jpg\");\n/* harmony import */ var _mist_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mist.jpg */ \"./src/mist.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction changeBackground(weather) {\r\n  console.log(weather);\r\n  const container = document.querySelector(\".container\");\r\n  if (weather == \"Clear\") {\r\n    container.style.backgroundImage = `url(${_clear_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\r\n    return;\r\n  }\r\n  if (weather == \"Clouds\") {\r\n    container.style.backgroundImage = `url(${_clouds_jpg__WEBPACK_IMPORTED_MODULE_1__})`;\r\n    return;\r\n  }\r\n  if (weather == \"Snow\") {\r\n    container.style.backgroundImage = `url(${_snow_jpg__WEBPACK_IMPORTED_MODULE_2__})`;\r\n    return;\r\n  }\r\n  if (weather == \"Thunderstorm\") {\r\n    container.style.backgroundImage = `url(${_thunder_jpg__WEBPACK_IMPORTED_MODULE_3__})`;\r\n    return;\r\n  }\r\n  if (weather == \"Rain\") {\r\n    container.style.backgroundImage = `url(${_rain_jpg__WEBPACK_IMPORTED_MODULE_4__})`;\r\n    return;\r\n  }\r\n  if (weather == \"Drizzle\") {\r\n    container.style.backgroundImage = `url(${_drizzle_jpg__WEBPACK_IMPORTED_MODULE_5__})`;\r\n    return;\r\n  }\r\n  container.style.backgroundImage = `url(${_mist_jpg__WEBPACK_IMPORTED_MODULE_6__})`;\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/changeBackground.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _map_marker_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-marker.svg */ \"./src/map-marker.svg\");\n/* harmony import */ var _weatherlogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherlogo.png */ \"./src/weatherlogo.png\");\n/* harmony import */ var _magnify_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./magnify.svg */ \"./src/magnify.svg\");\n/* harmony import */ var _loadWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadWeather */ \"./src/loadWeather.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst logoImg = document.querySelector(\"#logo\");\r\nlogoImg.src = _weatherlogo_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\nconst markerImg = document.querySelector(\"#location-marker\");\r\nmarkerImg.src = _map_marker_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nconst magnifyImg = document.querySelector(\"#magnify\");\r\nmagnifyImg.src = _magnify_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\nmagnifyImg.addEventListener(\"click\", () => {\r\n  const text = document.querySelector(\"#text\").value;\r\n  if (text == \"\") return;\r\n  (0,_loadWeather__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(text);\r\n});\r\n\r\ndocument.addEventListener(\"keydown\", (e) => {\r\n  if (e.key == \"Enter\") {\r\n    const text = document.querySelector(\"#text\").value;\r\n    if (text == \"\") return;\r\n    (0,_loadWeather__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(text);\r\n  }\r\n});\r\n\r\n(0,_loadWeather__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"belgrade\");\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/loadWeather.js":
/*!****************************!*\
  !*** ./src/loadWeather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadWeather)\n/* harmony export */ });\n/* harmony import */ var _returnDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnDate */ \"./src/returnDate.js\");\n/* harmony import */ var _changeBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeBackground */ \"./src/changeBackground.js\");\n\r\n\r\n\r\nasync function loadWeather(text) {\r\n  const url =\r\n    \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n    text +\r\n    \"&units=metric&appid=59189f0734d8fa112376a0986d5aec75\";\r\n  const response = await fetch(url, { mode: \"cors\" });\r\n  const json = await response.json();\r\n  const error = document.querySelector(\".error\");\r\n  if (json.message) {\r\n    error.textContent = json.message;\r\n    return;\r\n  }\r\n  error.textContent = \"\";\r\n\r\n  await (0,_changeBackground__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(json.weather[0].main);\r\n\r\n  const city = document.querySelector(\"#city\");\r\n  city.textContent = json.name + \", \" + json.sys.country;\r\n\r\n  const tempContainer = document.querySelector(\".temperature\");\r\n  tempContainer.innerHTML = \"\";\r\n  const temp = document.createElement(\"div\");\r\n  temp.textContent = Math.round(json.main.temp) + \"°C\";\r\n  const tempImg = document.createElement(\"img\");\r\n\r\n  tempImg.src =\r\n    await `https://openweathermap.org/img/w/${json.weather[0].icon}.png`;\r\n  tempContainer.appendChild(temp);\r\n  tempContainer.appendChild(tempImg);\r\n\r\n  const condition = document.querySelector(\".condition\");\r\n  condition.textContent = json.weather[0].main;\r\n\r\n  const feelsLike = document.querySelector(\".feels-like\");\r\n  feelsLike.textContent = \"Feels like: \" + json.main.feels_like + \"°C\";\r\n\r\n  const humidity = document.querySelector(\".humidity\");\r\n  humidity.textContent = \"Humidity: \" + json.main.humidity + \"%\";\r\n\r\n  const wind = document.querySelector(\".wind\");\r\n  wind.textContent = \"Wind: \" + json.wind.speed + \"k/m\";\r\n\r\n  const cityTime = document.querySelector(\".city-time\");\r\n  cityTime.textContent = (0,_returnDate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(json.dt, json.timezone);\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/loadWeather.js?");

/***/ }),

/***/ "./src/returnDate.js":
/*!***************************!*\
  !*** ./src/returnDate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnDate)\n/* harmony export */ });\nfunction returnDate(dt, timezone) {\r\n  let date = new Date();\r\n  let localTime = date.getTime();\r\n  let localOffset = date.getTimezoneOffset() * 60000;\r\n  let utc = localTime + localOffset;\r\n  let local_date = utc + 1000 * timezone;\r\n  return new Date(local_date).toLocaleString();\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/returnDate.js?");

/***/ }),

/***/ "./src/clear.jpg":
/*!***********************!*\
  !*** ./src/clear.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6213d2f6a60821fc00d3.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/clear.jpg?");

/***/ }),

/***/ "./src/clouds.jpg":
/*!************************!*\
  !*** ./src/clouds.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"769de745a33dfe9d66ff.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/clouds.jpg?");

/***/ }),

/***/ "./src/drizzle.jpg":
/*!*************************!*\
  !*** ./src/drizzle.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5af77a1217e5f36aaddd.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/drizzle.jpg?");

/***/ }),

/***/ "./src/magnify.svg":
/*!*************************!*\
  !*** ./src/magnify.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a39a92e73e7ad797600.svg\";\n\n//# sourceURL=webpack://weather-app/./src/magnify.svg?");

/***/ }),

/***/ "./src/map-marker.svg":
/*!****************************!*\
  !*** ./src/map-marker.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed084f60f18618e83b94.svg\";\n\n//# sourceURL=webpack://weather-app/./src/map-marker.svg?");

/***/ }),

/***/ "./src/mist.jpg":
/*!**********************!*\
  !*** ./src/mist.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e1bea490a3e5782fbe3.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/mist.jpg?");

/***/ }),

/***/ "./src/rain.jpg":
/*!**********************!*\
  !*** ./src/rain.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"caa98b8527d659053c16.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/rain.jpg?");

/***/ }),

/***/ "./src/snow.jpg":
/*!**********************!*\
  !*** ./src/snow.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"399d9b57c762a41c129c.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/snow.jpg?");

/***/ }),

/***/ "./src/thunder.jpg":
/*!*************************!*\
  !*** ./src/thunder.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21060fe7fb1e74953974.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/thunder.jpg?");

/***/ }),

/***/ "./src/weatherlogo.png":
/*!*****************************!*\
  !*** ./src/weatherlogo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31150bd7471d99e8f2d9.png\";\n\n//# sourceURL=webpack://weather-app/./src/weatherlogo.png?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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