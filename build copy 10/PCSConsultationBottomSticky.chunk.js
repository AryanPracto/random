(window["webpackJsonpBottomSticky"] = window["webpackJsonpBottomSticky"] || []).push([["PCSConsultationBottomSticky"],{

/***/ "./src/FreePcs/PCSConsultationTemplate.js":
/*!************************************************!*\
  !*** ./src/FreePcs/PCSConsultationTemplate.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/FreePcs/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ \"./src/common/constants/index.js\");\n\n\nclass PCSConsultationTemplate {\n  constructor(props) {\n    const {\n      product,\n      is_placement_controlled\n    } = props;\n    this.product = product;\n    this.use_default_placement = !is_placement_controlled;\n    const product_data = this.getProductData();\n    const {\n      meta_data,\n      query_selectors,\n      hide_mweb,\n      hide_dweb\n    } = product_data;\n    this.meta_data = meta_data || {};\n    this.query_selectors = query_selectors;\n    this.hide_dweb = hide_dweb;\n    this.hide_mweb = hide_mweb;\n  }\n  getActiveVersion() {\n    return _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_version_map\"][this.product];\n  }\n  getProductData() {\n    const {\n      product_name: default_product_name,\n      meta_data: default_meta_data,\n      query_selectors: default_query_selectors,\n      hide_dweb: default_hide_dweb,\n      hide_mweb: default_hide_mweb\n    } = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"default_config\"];\n    let product_name = default_product_name;\n    let meta_data = default_meta_data || {};\n    let active_version = null;\n    let query_selectors = default_query_selectors;\n    let hide_mweb = default_hide_mweb;\n    let hide_dweb = default_hide_dweb;\n    if (this.product && _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][this.product]) {\n      product_name = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_name_map\"][this.product];\n      active_version = this.getActiveVersion();\n      meta_data = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].meta_data;\n      query_selectors = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].query_selectors;\n      hide_mweb = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].hide_mweb;\n      hide_dweb = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].hide_dweb;\n    }\n    return {\n      meta_data,\n      query_selectors,\n      hide_dweb,\n      hide_mweb\n    };\n  }\n  attachEvent(_ref) {\n    let {\n      element,\n      type,\n      cb\n    } = _ref;\n    if (!element || !cb) {\n      return;\n    }\n    element.addEventListener(type, cb);\n  }\n  handleDwebClose() {\n    const close_ele_id = this.query_selectors.dweb.close_cta;\n    const close_banner = document.querySelector(`#${close_ele_id}`);\n    const close_handler = ev => {\n      ev.preventDefault();\n      ev.stopPropagation();\n      document.getElementById(_common_constants__WEBPACK_IMPORTED_MODULE_1__[\"common_query_selectors\"].bottom_sticky_root_ele).style.display = 'none';\n    };\n    close_banner && this.attachEvent({\n      element: close_banner,\n      cb: close_handler,\n      type: 'click'\n    });\n  }\n  handleMwebRedirection() {\n    const root_ele_id = this.query_selectors.mweb.root_ele;\n    const mweb_redirection_cta = document.querySelector(`#${root_ele_id}`);\n    const mwebRedirectionHandler = ev => {\n      ev.preventDefault();\n      ev.stopPropagation();\n      window.open(this.meta_data.mweb_banner_url);\n    };\n    mweb_redirection_cta && this.attachEvent({\n      element: mweb_redirection_cta,\n      cb: mwebRedirectionHandler,\n      type: 'click'\n    });\n  }\n  handleDwebRedirection() {\n    const root_ele_id = this.query_selectors.dweb.root_ele;\n    const dweb_redirection_cta = document.querySelector(`#${root_ele_id}`);\n    const dwebRedirectionHandler = ev => {\n      ev.preventDefault();\n      ev.stopPropagation();\n      window.open(this.meta_data.dweb_banner_url);\n    };\n    dweb_redirection_cta && this.attachEvent({\n      element: dweb_redirection_cta,\n      cb: dwebRedirectionHandler,\n      type: 'click'\n    });\n  }\n  registerHandlers() {\n    // this.handleDwebClose()\n    !this.hide_dweb && this.handleMwebRedirection();\n    !this.hide_dweb && this.handleDwebRedirection();\n  }\n  getTemplate() {\n    const template = `\n      ${!this.hide_dweb ? this.getDwebTemplate() : ''}\n      ${!this.hide_mweb ? this.getMwebTemplate() : ''}\n    `;\n    return template;\n  }\n  getDwebTemplate() {\n    const root_ele_id = this.query_selectors.dweb.root_ele;\n    // const close_ele_id = this.query_selectors.dweb.close_cta;\n\n    // close cta html\n    // <div id=\"${close_ele_id}\" class='close'>\n    //   <img src=\"https://www.practostatic.com/scripts/images/icon_cross_black_250122.png\" height=\"12px\" width=\"12px\"/>\n    // </div>\n    // not including it in design.\n    // since its not an requirement.\n\n    return `\n    <div class=\"${this.use_default_placement ? 'bottom-sticky--free-pcs-dweb-wrapper' : ''}\">\n      <div id='${root_ele_id}' class=\"bottom-sticky--free-pcs-dweb\">\n        <div class=\"left-wrapper\">\n          <div class=\"pcs-wrapper\">\n            <img width=\"80px\" src='https://www.practostatic.com/scripts/images/pcs_logo_sm_white_250122.png' />\n          </div>\n          <div class=\"header\">\n            <span class=\"header-1\">Book appointment with an expert surgeon </span>\n          </div>\n\n          <div class=\"sub-header\">\n            Piles, Hernia & 50+ surgeries\n          </div>\n\n          <div class=\"cta\">\n            KNOW MORE\n          </div>\n        </div>\n        <div class=\"right-wrapper\">\n          <img src=\"https://www.practostatic.com/practo-care/doctor_home.png\"/>\n        </div>\n      </div>\n    </div>\n    `;\n  }\n  getMwebTemplate() {\n    const root_ele_id = this.query_selectors.mweb.root_ele;\n\n    // not using bottom-sticky--free-pcs-mweb-wrapper as root because its conditional\n    return `\n    <div class=\"${this.use_default_placement ? 'bottom-sticky--free-pcs-mweb-wrapper ' : ''}\">\n      <div id=\"${root_ele_id}\" class=\"bottom-sticky--free-pcs-mweb\">\n        <div class=\"left-wrapper\">\n          <img width=\"40px\" height=\"37px\" src=\"https://www.practostatic.com/practo-care/doctor_xs_1666167591.png\" />\n        </div>\n        <div class=\"right-wrapper\">\n          <div>Get end-to-end Surgical Care</div>\n          <img src=\"https://www.practostatic.com/scripts/images/icon_next_cheveron_250122.png\"  height=\"16px\" width=\"16px\" />\n        </div>\n      </div>\n    </div>\n    `;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PCSConsultationTemplate);\n\n//# sourceURL=webpack://BottomSticky/./src/FreePcs/PCSConsultationTemplate.js?");

/***/ }),

/***/ "./src/FreePcs/index.scss":
/*!********************************!*\
  !*** ./src/FreePcs/index.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://BottomSticky/./src/FreePcs/index.scss?");

/***/ })

}]);