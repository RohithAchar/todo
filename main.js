/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    font-family: 'Rubik', sans-serif;
}
body{
    margin: 0;
    overflow: hidden;
}
a{
    text-decoration: none;
    color: black;
    padding: 3px;
}
/* Project modal */
.project-modal-hide{
    display: none;
}
.project-modal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: absolute;
    width: 100vw;
    height: 100vh;
}
.input-wrapper > input{
    padding: 7px;
    margin-left: 5px;
}
#project-modal > .input-wrapper{
    padding: 10px;
}
#project-modal button{
    width: 108px;
    height: 40px;
    margin: 0 5px;
}
.ok-btn{
    background-color: rgb(255, 225, 93);
}
/* Task modal */
.hide-task-modal-container{
    display: none;
}
.show-task-modal-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: absolute;
    width: 100vw;
    height: 100vh;
}
#task-modal{
    background-color: rgba(0, 0, 0, 0.942);
}
#task-modal > .input-wrapper{
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 30px;
    border-radius: 5px;
    background-color: #fff;
}
.input-wrapper > input{
    margin-bottom: 10px;
}
.input-wrapper > label{
    margin-left: 5px;
}
.input-wrapper > button{
    height: 30px;
    margin-top: 5px;
    margin-left: 5px;
}
.add-task-btn{
    background-color: rgb(255, 225, 93);
}
/* Common */
#content{
    display: flex;
}
#left-side-bar{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 100px;
}
.project-btn{
    height: 50px;
    background-color: rgb(255, 225, 93);
    margin-bottom: 30px;
}
.btn{
    background-color: rgb(255, 225, 93);
    height: 50px;
    float: right;
    margin: 10px;
    margin-right: 100px;
}
#main-container{
    width: 100%;
    height: 100vh;
    background-color: rgb(233, 233, 233);
}
.card{
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    border-bottom: 1px dotted black;
    margin-left: 2.5%;
}

/* Projects */
.project-wrapper{
    display: flex;
    gap: 5px;
}
.delete-project{
    border: 0;
    background-color: #fff;
    color: #ff0000;
}
.delete-project:hover{
    cursor: pointer;
    background-color: #ffdbdb;
    color: black;
    border-radius: 50%;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;IACI,gCAAgC;AACpC;AACA;IACI,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,YAAY;IACZ,YAAY;AAChB;AACA,kBAAkB;AAClB;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;AACA;IACI,mCAAmC;AACvC;AACA,eAAe;AACf;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,sCAAsC;AAC1C;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,sBAAsB;AAC1B;AACA;IACI,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,mCAAmC;AACvC;AACA,WAAW;AACX;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,mBAAmB;AACvB;AACA;IACI,mCAAmC;IACnC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,aAAa;IACb,oCAAoC;AACxC;AACA;IACI,UAAU;IACV,aAAa;IACb,sCAAsC;IACtC,+BAA+B;IAC/B,iBAAiB;AACrB;;AAEA,aAAa;AACb;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,SAAS;IACT,sBAAsB;IACtB,cAAc;AAClB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;900&display=swap');\n*{\n    font-family: 'Rubik', sans-serif;\n}\nbody{\n    margin: 0;\n    overflow: hidden;\n}\na{\n    text-decoration: none;\n    color: black;\n    padding: 3px;\n}\n/* Project modal */\n.project-modal-hide{\n    display: none;\n}\n.project-modal{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n}\n.input-wrapper > input{\n    padding: 7px;\n    margin-left: 5px;\n}\n#project-modal > .input-wrapper{\n    padding: 10px;\n}\n#project-modal button{\n    width: 108px;\n    height: 40px;\n    margin: 0 5px;\n}\n.ok-btn{\n    background-color: rgb(255, 225, 93);\n}\n/* Task modal */\n.hide-task-modal-container{\n    display: none;\n}\n.show-task-modal-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n}\n#task-modal{\n    background-color: rgba(0, 0, 0, 0.942);\n}\n#task-modal > .input-wrapper{\n    display: flex;\n    flex-direction: column;\n    width: 250px;\n    padding: 30px;\n    border-radius: 5px;\n    background-color: #fff;\n}\n.input-wrapper > input{\n    margin-bottom: 10px;\n}\n.input-wrapper > label{\n    margin-left: 5px;\n}\n.input-wrapper > button{\n    height: 30px;\n    margin-top: 5px;\n    margin-left: 5px;\n}\n.add-task-btn{\n    background-color: rgb(255, 225, 93);\n}\n/* Common */\n#content{\n    display: flex;\n}\n#left-side-bar{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 100px;\n}\n.project-btn{\n    height: 50px;\n    background-color: rgb(255, 225, 93);\n    margin-bottom: 30px;\n}\n.btn{\n    background-color: rgb(255, 225, 93);\n    height: 50px;\n    float: right;\n    margin: 10px;\n    margin-right: 100px;\n}\n#main-container{\n    width: 100%;\n    height: 100vh;\n    background-color: rgb(233, 233, 233);\n}\n.card{\n    width: 95%;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr 1fr;\n    border-bottom: 1px dotted black;\n    margin-left: 2.5%;\n}\n\n/* Projects */\n.project-wrapper{\n    display: flex;\n    gap: 5px;\n}\n.delete-project{\n    border: 0;\n    background-color: #fff;\n    color: #ff0000;\n}\n.delete-project:hover{\n    cursor: pointer;\n    background-color: #ffdbdb;\n    color: black;\n    border-radius: 50%;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ logic)
/* harmony export */ });
var tasksArray = [];

function logic(){
    return {
        createNewProject,
        deleteProject,
        addTaskToProject,
        deleteTaskFromProject,
        getAllProjectName,
        getTasksFromProject,
        getAllProjectTask
    }
}

function createNewProject(projectName){
    tasksArray.push({
        projectName: projectName,
        tasks: new Array()
    });
}
function deleteProject(index){
    tasksArray.splice(index,1);
}
function getAllProjectName(){
    var allProjectsName = [];
    for (const project of tasksArray) {
        allProjectsName.push(project.projectName);
    }
    return allProjectsName;
}
function addTaskToProject(index,title,description,dueDate){
    tasksArray[index].tasks.push({
        title : title,
        description : description,
        dueDate : dueDate
    });
}
function deleteTaskFromProject(indexOfProject,indexOfTask){
    tasksArray[indexOfProject].tasks.splice(indexOfTask,1);
}
function getTasksFromProject(indexOfProject){
    if(tasksArray[indexOfProject]){
        return tasksArray[indexOfProject].tasks;
    }
    return [];
}
function getAllProjectTask(){
    var tasks = [];
    for (const project of tasksArray) {
        tasks.push(project.tasks);
    }
    return tasks;
}


/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
const leftSideBarDiv = document.querySelector('#left-side-bar');
const mainDiv = document.querySelector('#main-container');
const contentDiv = document.querySelector('#content');

function render(){
    return{
        leftSideBarHeading,
        projectName,
        addTaskBtn,
        tasks,
        clearLeftSideBar,
        clearMain,
        addProjectBtn,
        header,
        projectModal,
        taskModal
    }
}
function header(){
    var div = document.createElement('div');
    div.classList.add('card');

    var title = document.createElement('h3');
    title.textContent = "Title";
    var description = document.createElement('h3');
    description.textContent = "Description";
    var dueDate = document.createElement('h3');
    dueDate.textContent = "Due Date";

    div.append(title,description,dueDate);
    mainDiv.appendChild(div);
}
// Left sidebar 
function addProjectBtn(){
    var addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('project-btn');
    addProjectBtn.textContent = 'Add new project';
    leftSideBarDiv.appendChild(addProjectBtn);
}
function leftSideBarHeading(){
    var heading = document.createElement('h1');
    heading.id = "todo-logo";
    heading.textContent = "TODO";
    leftSideBarDiv.appendChild(heading);
}
function projectName(projectNames){
    if(projectNames.length > 0){
        projectNames.forEach((name, index) => {
            var projectWrapper = document.createElement('div');
            projectWrapper.classList.add('project-wrapper');

            var aTag = document.createElement('a');
            aTag.id = index;
            aTag.classList.add('project');
            aTag.href = "#";
            aTag.textContent = name;

            var deleteProjectBtn = document.createElement('button');
            deleteProjectBtn.id = `delete-project-${index}`
            deleteProjectBtn.classList.add('delete-project');
            deleteProjectBtn.textContent = "X";

            projectWrapper.append(aTag,deleteProjectBtn);
            leftSideBarDiv.append(projectWrapper);
        });
    }
}
// Main container
function addTaskBtn(index){
    var addTaskBtn = document.createElement('button');
    addTaskBtn.id = `project-${index}`;
    addTaskBtn.classList.add('btn');
    addTaskBtn.textContent = 'Add new task';
    mainDiv.appendChild(addTaskBtn);
}
function tasks(tasks){
    if(tasks.length > 0){
        tasks.forEach((task, index) => {
            mainDiv.appendChild(
                createCard(
                    index,
                    task.title,
                    task.description,
                    task.dueDate    
                )
            );
        });
    }
}
function createCard(deleteBtnId,title,description,dueDate){
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    // cardDiv.id = `task-${index}`;
    var titleTag = document.createElement('p');
    titleTag.textContent = title;
    var descriptionTag = document.createElement('p');
    descriptionTag.textContent = description;
    var dueTag = document.createElement('p');
    dueTag.textContent = dueDate;
    var deleteBtn = document.createElement('button');
    deleteBtn.id = `delete-${deleteBtnId}`;
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    cardDiv.append(titleTag,descriptionTag,dueTag,deleteBtn);
    return cardDiv;
}
function projectModal(){
    var formWrapper = document.createElement('div');
    formWrapper.id = 'project-modal';
    formWrapper.classList.add('project-modal-hide');
    var inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');
    var titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.required = true;
    titleInput.placeholder = 'Enter the project name';
    var titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';

    inputWrapper.append(titleLabel, titleInput);
    formWrapper.append(inputWrapper,okCancelButton());
    contentDiv.append(formWrapper);
}
function taskModal(){
    var taskModalContainer = document.createElement('div');
    taskModalContainer.id = 'task-modal';
    taskModalContainer.classList.add('hide-task-modal-container');

    var inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');

    var titleLabel = document.createElement('label');
    titleLabel.textContent = "Title";
    var titleInput = document.createElement('input');
    titleInput.id = 'task-title';
    titleInput.type = 'text';
    var descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = "Description";
    var descriptionInput = document.createElement('input');
    descriptionInput.id = 'description';
    descriptionInput.type = 'text';
    var dateLabel = document.createElement('label');
    dateLabel.textContent = "Due Date";
    var dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'due-date';
    var closeBtn = document.createElement('button');
    closeBtn.classList.add('close-task-modal');
    closeBtn.textContent = 'Close';
    var addBtn = document.createElement('button');
    addBtn.classList.add('add-task-btn');
    addBtn.textContent = 'Add';

    inputWrapper.append(
        titleLabel,
        titleInput,
        descriptionLabel,
        descriptionInput,
        dateLabel,
        dateInput,
        closeBtn,
        addBtn
    );
    taskModalContainer.append(inputWrapper);
    contentDiv.append(taskModalContainer);
}
function okCancelButton(){
    var buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('btn-wrapper');
    var cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel';
    var okButton = document.createElement('button');
    okButton.classList.add('ok-btn');
    okButton.textContent = 'Ok';

    buttonWrapper.append(cancelBtn,okButton);
    return buttonWrapper;
}
// Erasing
function clearLeftSideBar(){
    leftSideBarDiv.textContent = '';
}
function clearMain(){
    mainDiv.textContent = '';
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface */ "./src/userInterface.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




// Rendering
init();
(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().projectModal();
(0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().taskModal();
function init(){
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().clearLeftSideBar();
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().leftSideBarHeading();
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().addProjectBtn();
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().clearMain();
    renderProjects();
    eventForAddProjectBtn();
};
function renderProjects(){
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().projectName(
        (0,_logic__WEBPACK_IMPORTED_MODULE_0__["default"])().getAllProjectName()
    );
    eventsForProject();
    eventsForDeleteProjectBtn();
}
function openProjectModal(){
    // render().projectModal();
    var projectModal = document.getElementById('project-modal');
    projectModal.classList.remove('project-modal-hide');
    projectModal.classList.add('project-modal');
    eventForOkBtn();
    eventForCancelBtn();
}
function closeProjectModal(){
    var projectModal = document.getElementById('project-modal');
    projectModal.classList.remove('project-modal');
    projectModal.classList.add('project-modal-hide');
}
function renderMain(projectId){
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().clearMain();
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().addTaskBtn(projectId);
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().header();
    (0,_userInterface__WEBPACK_IMPORTED_MODULE_1__["default"])().tasks((0,_logic__WEBPACK_IMPORTED_MODULE_0__["default"])().getTasksFromProject(projectId));
    eventForTaskBtn();
    eventForDeleteTaskBtns();
}
// function renderProjectTasks(projectId){
//     render().clearMain();
//     render().addTaskBtn(projectId);
//     render().tasks(logic().getTasksFromProject(projectId));
//     eventForTaskBtn();
// }
function openTaskModal(e){
    var taskBtnId = e.target.id;
    var projectId = taskBtnId.charAt(taskBtnId.length - 1);
    // render().taskModal();
    var taskModal = document.getElementById('task-modal');
    taskModal.classList.remove('hide-task-modal-container');
    taskModal.classList.add('show-task-modal-container');

    eventForCloseTaskModal();
    eventForAddBtn();
}
function closeTaskModal(){
    var taskModal = document.getElementById('task-modal');
    taskModal.classList.remove('show-task-modal-container');
    taskModal.classList.add('hide-task-modal-container');
}

//Events
function eventForAddProjectBtn(){
    const addProjectBtn = document.querySelector('.project-btn');
    addProjectBtn.addEventListener('click', openProjectModal);
}
function eventForCancelBtn(){
    const cancelBtn = document.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', closeProjectModal);
}
function eventForOkBtn(){
    const okBtn = document.querySelector('.ok-btn');
    okBtn.addEventListener('click', getProjectName);
}
function eventsForDeleteProjectBtn(){
    var deleteProjectBtns = document.querySelectorAll('.delete-project');
    for (const deleteBtn of deleteProjectBtns) {
        deleteBtn.addEventListener('click',deleteProject);
    }
}
function eventsForProject(){
    const projects = document.querySelectorAll('.project');
    for (const project of projects) {
        project.addEventListener('click',(e) => renderMain(e.target.id));
    }
}
function eventForTaskBtn(){
    var taskBtn = document.querySelector('.btn');
    taskBtn.addEventListener('click',openTaskModal);
}
function eventForCloseTaskModal(){
    var closeTaskModalBtn = document.querySelector('.close-task-modal');
    closeTaskModalBtn.addEventListener('click',closeTaskModal);
}
function eventForAddBtn(){
    const addBtn = document.querySelector('.add-task-btn');
    addBtn.addEventListener('click',getTaskDetail);
}
function eventForDeleteTaskBtns(){
    var deleteBtns = document.querySelectorAll('.delete-btn');
    for (const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener('click',deleteTask);
    }
}

//User input
function getProjectName(){
    var titleInput = document.getElementById('title');
    var projectName = titleInput.value;
    if(projectName.length > 0){
        pushProject(projectName.toUpperCase());
        titleInput.value = '';
        closeProjectModal();
    }
}
function getTaskDetail(){
    const addTaskBtn = document.querySelector('.btn');
    var addTaskBtnId = addTaskBtn.id;
    var projectIndex = addTaskBtnId.charAt(addTaskBtnId.length - 1);
    var titleInput = document.getElementById('task-title');
    var title = titleInput.value;
    var descriptionInput = document.getElementById('description');
    var description = descriptionInput.value;
    var dueDateInput = document.getElementById('due-date');
    var dueDate = dueDateInput.value;

    if(
        title.length > 0 &&
        description.length > 0 &&
        dueDate.length > 0
    ){
        pushTask(projectIndex,title.toUpperCase(),description,dueDate);
        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        closeTaskModal();
    }
}
//logic
function pushProject(projectName){
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__["default"])().createNewProject(projectName);
    init();
}
function deleteProject(e){
    var deleteBtnId = e.target.id;
    var projectId = deleteBtnId.charAt(deleteBtnId.length - 1);
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__["default"])().deleteProject(projectId);
    init();
}
function pushTask(projectIndex,title,description,due){
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__["default"])().addTaskToProject(projectIndex,title,description,due);
    renderMain(projectIndex);
}
function deleteTask(e){
    const taskBtn = document.querySelector('.btn');
    var taskBtnId = taskBtn.id;
    var projectIndex = taskBtnId.charAt(taskBtnId.length - 1);
    var deleteBtnId = e.target.id;
    var taskIndex = deleteBtnId.charAt(deleteBtnId.length - 1);

    (0,_logic__WEBPACK_IMPORTED_MODULE_0__["default"])().deleteTaskFromProject(projectIndex, taskIndex);
    renderMain(projectIndex);
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map