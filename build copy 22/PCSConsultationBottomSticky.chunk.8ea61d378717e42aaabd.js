(window.webpackJsonpBottomSticky=window.webpackJsonpBottomSticky||[]).push([[3],[,,function(t,e,o){"use strict";o.r(e);o(9);var r=o(0);e.default=class{constructor(t){const{product:e,is_placement_controlled:o}=t;this.product=e,this.use_default_placement=!o;const r=this.getProductData(),{meta_data:n,query_selectors:i,hide_mweb:s,hide_dweb:a}=r;this.meta_data=n||{},this.query_selectors=i,this.hide_dweb=a,this.hide_mweb=s}getActiveVersion(){return r.g[this.product]}getProductData(){const{product_name:t,meta_data:e,query_selectors:o,hide_dweb:n,hide_mweb:i}=r.d;let s=t,a=e||{},c=null,p=o,d=i,l=n;return this.product&&r.e[this.product]&&(s=r.f[this.product],c=this.getActiveVersion(),a=r.e[s][c].meta_data,p=r.e[s][c].query_selectors,d=r.e[s][c].hide_mweb,l=r.e[s][c].hide_dweb),{meta_data:a,query_selectors:p,hide_dweb:l,hide_mweb:d}}attachEvent(t){let{element:e,type:o,cb:r}=t;e&&r&&e.addEventListener(o,r)}handleDwebClose(){const t=this.query_selectors.dweb.close_cta,e=document.querySelector("#"+t);e&&this.attachEvent({element:e,cb:t=>{t.preventDefault(),t.stopPropagation(),document.getElementById(r.c.bottom_sticky_root_ele).style.display="none"},type:"click"})}handleMwebRedirection(){const t=this.query_selectors.mweb.root_ele,e=document.querySelector("#"+t);e&&this.attachEvent({element:e,cb:t=>{t.preventDefault(),t.stopPropagation(),window.open(this.meta_data.mweb_banner_url)},type:"click"})}handleDwebRedirection(){const t=this.query_selectors.dweb.root_ele,e=document.querySelector("#"+t);e&&this.attachEvent({element:e,cb:t=>{t.preventDefault(),t.stopPropagation(),window.open(this.meta_data.dweb_banner_url)},type:"click"})}registerHandlers(){!this.hide_dweb&&this.handleMwebRedirection(),!this.hide_dweb&&this.handleDwebRedirection()}getTemplate(){return`\n      ${this.hide_dweb?"":this.getDwebTemplate()}\n      ${this.hide_mweb?"":this.getMwebTemplate()}\n    `}getDwebTemplate(){const t=this.query_selectors.dweb.root_ele;return`\n    <div class="${this.use_default_placement?"bottom-sticky--free-pcs-dweb-wrapper":""}">\n      <div id='${t}' class="bottom-sticky--free-pcs-dweb">\n        <div class="left-wrapper">\n          <div class="pcs-wrapper">\n            <img width="80px" src='https://www.practostatic.com/scripts/images/pcs_logo_sm_white_250122.png' />\n          </div>\n          <div class="header">\n            <span class="header-1">Book appointment with an expert surgeon </span>\n          </div>\n\n          <div class="sub-header">\n            Piles, Hernia & 50+ surgeries\n          </div>\n\n          <div class="cta">\n            KNOW MORE\n          </div>\n        </div>\n        <div class="right-wrapper">\n          <img src="https://www.practostatic.com/practo-care/doctor_home.png"/>\n        </div>\n      </div>\n    </div>\n    `}getMwebTemplate(){const t=this.query_selectors.mweb.root_ele;return`\n    <div class="${this.use_default_placement?"bottom-sticky--free-pcs-mweb-wrapper ":""}">\n      <div id="${t}" class="bottom-sticky--free-pcs-mweb">\n        <div class="left-wrapper">\n          <img width="40px" height="37px" src="https://www.practostatic.com/practo-care/doctor_xs_1666167591.png" />\n        </div>\n        <div class="right-wrapper">\n          <div>Get end-to-end Surgical Care</div>\n          <img src="https://www.practostatic.com/scripts/images/icon_next_cheveron_250122.png"  height="16px" width="16px" />\n        </div>\n      </div>\n    </div>\n    `}}},,,,function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var n=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[o].concat(i).concat([n]).join("\n")}var s,a,c;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,r){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(n[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&n[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),e.push(c))}},e}},function(t,e,o){var r,n,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=r.apply(this,arguments)),n}),a=function(t){var e={};return function(o){return void 0===e[o]&&(e[o]=t.call(this,o)),e[o]}}((function(t){return document.querySelector(t)})),c=null,p=0,d=[],l=o(8);function f(t,e){for(var o=0;o<t.length;o++){var r=t[o],n=i[r.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](r.parts[s]);for(;s<r.parts.length;s++)n.parts.push(g(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(g(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function u(t){for(var e=[],o={},r=0;r<t.length;r++){var n=t[r],i=n[0],s={css:n[1],media:n[2],sourceMap:n[3]};o[i]?o[i].parts.push(s):e.push(o[i]={id:i,parts:[s]})}return e}function h(t,e){var o=a(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===t.insertAt)r?r.nextSibling?o.insertBefore(e,r.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),d.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(e)}}function b(t){t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function m(t){var e=document.createElement("style");return t.attrs.type="text/css",w(e,t.attrs),h(t,e),e}function w(t,e){Object.keys(e).forEach((function(o){t.setAttribute(o,e[o])}))}function g(t,e){var o,r,n;if(e.singleton){var i=p++;o=c||(c=m(e)),r=x.bind(null,o,i,!1),n=x.bind(null,o,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",w(e,t.attrs),h(t,e),e}(e),r=_.bind(null,o,e),n=function(){b(o),o.href&&URL.revokeObjectURL(o.href)}):(o=m(e),r=k.bind(null,o),n=function(){b(o)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},void 0===e.singleton&&(e.singleton=s()),void 0===e.insertInto&&(e.insertInto="head"),void 0===e.insertAt&&(e.insertAt="bottom");var o=u(t);return f(o,e),function(t){for(var r=[],n=0;n<o.length;n++){var s=o[n];(a=i[s.id]).refs--,r.push(a)}t&&f(u(t),e);for(n=0;n<r.length;n++){var a;if(0===(a=r[n]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var y,v=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,o,r){var n=o?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,n);else{var i=document.createTextNode(n),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function k(t,e){var o=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}function _(t,e,o){var r=o.css,n=o.sourceMap,i=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||i)&&(r=l(r)),n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,r=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var n,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?t:(n=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},function(t,e,o){var r=o(10);"string"==typeof r&&(r=[[t.i,r,""]]);o(7)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,o){(e=o(6)(!1)).push([t.i,"#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs a{text-decoration:none}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb{background:linear-gradient(276.8deg, #90DDFF 21.32%, #182388 72.3%);border-radius:20px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;position:relative}@media only screen and (max-width: 768px){#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb{display:none !important}}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb-wrapper{position:fixed;bottom:25px;right:20px;z-index:9999}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb .left-wrapper{width:60%;padding-top:16px;padding-right:0px;padding-bottom:16px;padding-left:16px}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb .left-wrapper .close{height:22px;width:22px;background:#FFFFFF;border-radius:50%;outline:none;display:flex;align-items:center;justify-content:center;position:absolute;top:-8px;right:-5px;z-index:9999;border:none;cursor:pointer;border:1px solid #F0F0F5}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb .left-wrapper .header{font-size:20px;font-weight:900;color:#FFFFFF;margin-top:10px;line-height:17px}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb .left-wrapper .pcs-wrapper{height:22px}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb .left-wrapper .header-1{font-size:16px;font-weight:700}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb .left-wrapper .sub-header{color:#FFFFFF;font-size:12px}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb .left-wrapper .cta{background:#199FD9;border-radius:6px;padding:6px 8px;color:#FFFFFF;font-weight:bold;font-size:10px;display:inline-block;margin-top:12px}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb .right-wrapper{filter:drop-shadow(10px 5px 12px rgba(0,0,0,0.16));position:absolute;height:110%;right:0;top:-10%;text-align:right}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-dweb .right-wrapper img{object-fit:cover;height:100%;border-bottom-right-radius:20px}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-mweb{margin:0 20px;display:flex;align-items:center;background:#FFFFFF;border:1px solid #28328C;box-sizing:border-box;border-radius:26px;filter:drop-shadow(0px 5px 8px rgba(4,5,19,0.16))}@media only screen and (min-width: 769px){#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-mweb{display:none !important}}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-mweb-wrapper{position:fixed;bottom:80px;width:100%;display:flex;justify-content:center;align-items:center;z-index:5}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-mweb .left-wrapper{display:flex;align-items:center;justify-content:center;padding:4px}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-mweb .right-wrapper{width:100%;display:flex;align-items:center;justify-content:space-between;color:#2D2D32;padding-right:16px;padding-left:4px;gap:16px;font-size:14px}#bottom-sticky-root-aze12fk .bottom-sticky--free-pcs-mweb .right-wrapper .highlight{font-weight:bold;color:#28328C}\n",""]),t.exports=e}]]);