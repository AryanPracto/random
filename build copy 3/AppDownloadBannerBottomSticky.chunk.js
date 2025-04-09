(window["webpackJsonpBottomSticky"] = window["webpackJsonpBottomSticky"] || []).push([["AppDownloadBannerBottomSticky"],{

/***/ "./src/AppDownloadBanner/index.js":
/*!****************************************!*\
  !*** ./src/AppDownloadBanner/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/AppDownloadBanner/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ \"./src/common/constants/index.js\");\n\n\nclass AppDownloadBanner {\n  constructor(props) {\n    const {\n      product,\n      is_placement_controlled\n    } = props;\n    this.product = product;\n    this.use_default_placement = !is_placement_controlled;\n    const product_data = this.getProductData();\n    const {\n      meta_data,\n      query_selectors,\n      hide_mweb,\n      hide_dweb\n    } = product_data;\n    this.meta_data = meta_data || {};\n    this.query_selectors = query_selectors;\n    this.hide_dweb = hide_dweb;\n    this.hide_mweb = hide_mweb;\n  }\n  getActiveVersion() {\n    return _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_version_map\"][this.product];\n  }\n  getProductData() {\n    const {\n      product_name: default_product_name,\n      meta_data: default_meta_data,\n      query_selectors: default_query_selectors,\n      hide_dweb: default_hide_dweb,\n      hide_mweb: default_hide_mweb\n    } = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"default_config\"];\n    let product_name = default_product_name;\n    let meta_data = default_meta_data || {};\n    let active_version = null;\n    let query_selectors = default_query_selectors;\n    let hide_mweb = default_hide_mweb;\n    let hide_dweb = default_hide_dweb;\n    if (this.product && _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][this.product]) {\n      product_name = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_name_map\"][this.product];\n      active_version = this.getActiveVersion();\n      meta_data = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].meta_data;\n      query_selectors = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].query_selectors;\n      hide_mweb = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].hide_mweb;\n      hide_dweb = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].hide_dweb;\n    }\n    return {\n      meta_data,\n      query_selectors,\n      hide_dweb,\n      hide_mweb\n    };\n  }\n  addTransitionEffects() {\n    const query_selector_id = this.query_selectors.mweb.root_ele;\n    const node = document.getElementById(query_selector_id);\n    node && node.classList.add('app-download-banner-inner--show');\n  }\n  attachEvent(_ref) {\n    let {\n      element,\n      type,\n      cb\n    } = _ref;\n    if (!element || !cb) {\n      return;\n    }\n    element.addEventListener(type, cb);\n  }\n  handleDwebRedirection() {\n    const root_ele_id = this.query_selectors.dweb.root_ele;\n    const dweb_redirection_cta = document.querySelector(`#${root_ele_id}`);\n    const dwebRedirectionHandler = ev => {\n      ev.preventDefault();\n      ev.stopPropagation();\n      window.open(this.meta_data.dweb_banner_url);\n    };\n    dweb_redirection_cta && this.attachEvent({\n      element: dweb_redirection_cta,\n      cb: dwebRedirectionHandler,\n      type: 'click'\n    });\n  }\n  registerHandlers() {\n    !this.hide_dweb && this.handleDwebRedirection();\n  }\n  getTemplate() {\n    const template = `\n      ${!this.hide_dweb ? this.getDwebTemplate() : ''}\n    `;\n    return template;\n  }\n  getDwebTemplate() {\n    const root_ele_id = this.query_selectors.dweb.root_ele;\n    return `\n      <div id='${root_ele_id}'  class=\"${this.use_default_placement ? 'app-download-banner-wrapper' : ''}\">\n        <div class=\"app-download-inner\">\n            <img class='app-download-img' src=\"https://www.practostatic.com/scripts/images/img_app_download_bottom_sticky.png\"/>\n          </div>\n        </div>\n      </div>\n    `;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppDownloadBanner);\n\n//# sourceURL=webpack://BottomSticky/./src/AppDownloadBanner/index.js?");

/***/ }),

/***/ "./src/AppDownloadBanner/index.scss":
/*!******************************************!*\
  !*** ./src/AppDownloadBanner/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://BottomSticky/./src/AppDownloadBanner/index.scss?");

/***/ })

}]);