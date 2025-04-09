(window["webpackJsonpBottomSticky"] = window["webpackJsonpBottomSticky"] || []).push([["CareAIBottomSticky"],{

/***/ "./src/CareAIBottomSticky/index.js":
/*!*****************************************!*\
  !*** ./src/CareAIBottomSticky/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/CareAIBottomSticky/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ \"./src/common/constants/index.js\");\n\n\nclass CareAIBottomSticky {\n  constructor(props) {\n    const {\n      product,\n      is_placement_controlled\n    } = props;\n    this.product = product;\n    this.use_default_placement = !is_placement_controlled;\n    const product_data = this.getProductData();\n    const {\n      meta_data,\n      query_selectors,\n      hide_mweb,\n      hide_dweb\n    } = product_data;\n    this.meta_data = meta_data || {};\n    this.query_selectors = query_selectors;\n    this.hide_dweb = hide_dweb;\n    this.hide_mweb = hide_mweb;\n  }\n  getActiveVersion() {\n    return _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_version_map\"][this.product];\n  }\n  getProductData() {\n    const {\n      product_name: default_product_name,\n      meta_data: default_meta_data,\n      query_selectors: default_query_selectors,\n      hide_dweb: default_hide_dweb,\n      hide_mweb: default_hide_mweb\n    } = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"default_config\"];\n    let product_name = default_product_name;\n    let meta_data = default_meta_data || {};\n    let query_selectors = default_query_selectors;\n    let hide_dweb = default_hide_dweb;\n    let hide_mweb = default_hide_mweb;\n    if (this.product && _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][this.product]) {\n      product_name = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_name_map\"][this.product];\n      const active_version = this.getActiveVersion();\n      meta_data = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].meta_data;\n      query_selectors = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].query_selectors;\n      hide_mweb = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].hide_mweb;\n      hide_dweb = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].hide_dweb;\n    }\n    return {\n      meta_data,\n      query_selectors,\n      hide_dweb,\n      hide_mweb\n    };\n  }\n  attachEvent(_ref) {\n    let {\n      element,\n      type,\n      cb\n    } = _ref;\n    if (!element || !cb) return;\n    element.addEventListener(type, cb);\n  }\n  handleDwebClose() {\n    const close_ele_id = this.query_selectors.dweb.close_cta;\n    const close_banner = document.querySelector(`#${close_ele_id}`);\n    const close_handler = ev => {\n      ev.preventDefault();\n      ev.stopPropagation();\n      document.getElementById(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"common_query_selectors\"].bottom_sticky_root_ele).style.display = 'none';\n    };\n    close_banner && this.attachEvent({\n      element: close_banner,\n      cb: close_handler,\n      type: 'click'\n    });\n  }\n  handleMwebRedirection() {\n    const root_ele_id = this.query_selectors.mweb.root_ele;\n    const mweb_redirection_cta = document.querySelector(`#${root_ele_id}`);\n    const handler = ev => {\n      ev.preventDefault();\n      ev.stopPropagation();\n      window.open(this.meta_data.mweb_banner_url);\n    };\n    mweb_redirection_cta && this.attachEvent({\n      element: mweb_redirection_cta,\n      cb: handler,\n      type: 'click'\n    });\n  }\n  handleDwebRedirection() {\n    const root_ele_id = this.query_selectors.dweb.root_ele;\n    const dweb_redirection_cta = document.querySelector(`#${root_ele_id}`);\n    const handler = ev => {\n      ev.preventDefault();\n      ev.stopPropagation();\n      window.open(this.meta_data.dweb_banner_url);\n    };\n    dweb_redirection_cta && this.attachEvent({\n      element: dweb_redirection_cta,\n      cb: handler,\n      type: 'click'\n    });\n  }\n  registerHandlers() {\n    !this.hide_mweb && this.handleMwebRedirection();\n    !this.hide_dweb && this.handleDwebRedirection();\n  }\n  getTemplate() {\n    return `\n      ${!this.hide_dweb ? this.getDwebTemplate() : ''}\n      ${!this.hide_mweb ? this.getMwebTemplate() : ''}\n    `;\n  }\n  getDwebTemplate() {\n    const root_ele_id = this.query_selectors.dweb.root_ele;\n    return `\n      <div class=\"${this.use_default_placement ? 'bottom-sticky--free-pcs-dweb-wrapper' : ''}\">\n      <div id='${root_ele_id}' class=\"bottom-sticky--free-pcs-dweb\">\n        <div class=\"left-wrapper\">\n          <div class=\"pcs-wrapper\">\n            <img width=\"80px\" src='https://www.practostatic.com/scripts/images/pcs_logo_sm_white_250122.png' />\n          </div>\n          <div class=\"header\">\n            <span class=\"header-1\">Book appointment with an expert surgeon </span>\n          </div>\n\n          <div class=\"sub-header\">\n            Piles, Hernia & 50+ surgeries\n          </div>\n\n          <div class=\"cta\">\n            KNOW MORE\n          </div>\n        </div>\n        <div class=\"right-wrapper\">\n          <img src=\"https://www.practostatic.com/practo-care/doctor_home.png\"/>\n        </div>\n      </div>\n    </div>\n    `;\n  }\n  getMwebTemplate() {\n    const root_ele_id = this.query_selectors.mweb.root_ele;\n    return `\n      <div class=\"${this.use_default_placement ? 'bottom-sticky--free-pcs-mweb-wrapper ' : ''}\">\n      <div id=\"${root_ele_id}\" class=\"bottom-sticky--free-pcs-mweb\">\n        <div class=\"left-wrapper\">\n          <img src='images/mini.png' style=\"border-radius: 50%; object-fit: cover;\" width=\"40px\" height=\"37px\" />\n        </div>\n        <div class=\"right-wrapper\">\n          <div>Not finding what you need? Ask Care AI</div>\n          <img src=\"https://www.practostatic.com/scripts/images/icon_next_cheveron_250122.png\"  height=\"16px\" width=\"16px\" />\n        </div>\n      </div>\n    </div>\n    `;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (CareAIBottomSticky);\n\n//# sourceURL=webpack://BottomSticky/./src/CareAIBottomSticky/index.js?");

/***/ }),

/***/ "./src/CareAIBottomSticky/index.scss":
/*!*******************************************!*\
  !*** ./src/CareAIBottomSticky/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://BottomSticky/./src/CareAIBottomSticky/index.scss?");

/***/ })

}]);