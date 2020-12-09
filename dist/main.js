/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@editorjs/checklist/dist/bundle.js":
/*!*********************************************************!*\
  !*** ./node_modules/@editorjs/checklist/dist/bundle.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n(1).toString(),n(6);var s=function(){function e(t){var n=t.data,r=(t.config,t.api);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elements={wrapper:null,items:[]},this._data={items:[]},this.api=r,this.data=n}return o(e,null,[{key:"enableLineBreaks",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:'<svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-2.394a5.106 5.106 0 1 0 0-10.212 5.106 5.106 0 0 0 0 10.212zm-.675-4.665l2.708-2.708 1.392 1.392-2.708 2.708-1.392 1.391-2.971-2.971L5.245 6.36l1.58 1.58z"/></svg>',title:"Checklist"}}}]),o(e,[{key:"render",value:function(){var e=this;if(this._elements.wrapper=this._make("div",[this.CSS.baseBlock,this.CSS.wrapper]),this._data.items.length)this._data.items.forEach(function(t){var n=e.createChecklistItem(t);e._elements.items.push(n),e._elements.wrapper.appendChild(n)});else{var t=this.createChecklistItem();this._elements.items.push(t),this._elements.wrapper.appendChild(t)}return this._elements.wrapper.addEventListener("keydown",function(t){switch(t.keyCode){case 13:e.appendNewElement(t);break;case 8:e.backspace(t)}},!1),this._elements.wrapper.addEventListener("click",function(t){e.toggleCheckbox(t)}),this._elements.wrapper}},{key:"validate",value:function(e){return!!e.items.length}},{key:"toggleCheckbox",value:function(e){var t=e.target.closest(".".concat(this.CSS.item));t.querySelector(".".concat(this.CSS.checkbox)).contains(e.target)&&t.classList.toggle(this.CSS.itemChecked)}},{key:"createChecklistItem",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._make("div",this.CSS.item),n=this._make("span",this.CSS.checkbox),r=this._make("div",this.CSS.textField,{innerHTML:e.text?e.text:"",contentEditable:!0});return e.checked&&t.classList.add(this.CSS.itemChecked),t.appendChild(n),t.appendChild(r),t}},{key:"appendNewElement",value:function(e){e.preventDefault();var t=window.getSelection().anchorNode,n=this._elements.items[this._elements.items.length-1].querySelector(".".concat(this.CSS.textField)),r=n.innerHTML.replace("<br>"," ").trim();if(t===n&&!r)return this.api.blocks.insertNewBlock(),void e.stopPropagation();var i=this.createChecklistItem(),o=t.parentNode.closest(".".concat(this.CSS.item));this._elements.wrapper.insertBefore(i,o.nextSibling);var s=this._elements.items.indexOf(o)+1;this._elements.items.splice(s,0,i),this.moveCaretToEnd(i.querySelector(".".concat(this.CSS.textField)))}},{key:"backspace",value:function(e){var t=e.target.closest(".".concat(this.CSS.item)),n=this._elements.items.indexOf(t),r=t.querySelector(".".concat(this.CSS.textField)).innerHTML.replace("<br>"," ").trim();this._elements.items[0].querySelector(".".concat(this.CSS.textField)).innerHTML.replace("<br>"," ").trim()&&n&&!r&&(e.preventDefault(),t.remove(),this._elements.items.splice(n,1),"undefined"!==this._elements.items[n-1]&&this.moveCaretToEnd(this._elements.items[n-1].querySelector(".".concat(this.CSS.textField))))}},{key:"save",value:function(){return this.data}},{key:"_make",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);Array.isArray(n)?(t=o.classList).add.apply(t,r(n)):n&&o.classList.add(n);for(var s in i)o[s]=i[s];return o}},{key:"moveCaretToEnd",value:function(e){var t=document.createRange(),n=window.getSelection();t.selectNodeContents(e),t.collapse(!1),n.removeAllRanges(),n.addRange(t)}},{key:"CSS",get:function(){return{baseBlock:this.api.styles.block,wrapper:"cdx-checklist",item:"cdx-checklist__item",itemChecked:"cdx-checklist__item--checked",checkbox:"cdx-checklist__item-checkbox",textField:"cdx-checklist__item-text"}}},{key:"data",set:function(e){this._data.items=e.items||[];var t=this._elements.wrapper;t&&t.parentNode.replaceChild(this.render(),t)},get:function(){this._data.items=[];for(var e=0;e<this._elements.items.length;e++){var t=this._elements.items[e].querySelector(".".concat(this.CSS.textField)).innerHTML.replace("<br>"," ").trim();t&&this._data.items.push({text:t,checked:this._elements.items[e].classList.contains(this.CSS.itemChecked)})}return this._data}}]),e}();e.exports=s},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".cdx-checklist__item {\n        display: flex;\n        padding: 0 10px;\n        box-sizing: content-box;\n    }\n\n        .cdx-checklist__item-text {\n            outline: none;\n            flex-grow: 1;\n            padding: 10px 0;\n        }\n\n        .cdx-checklist__item-checkbox {\n            display: inline-block;\n            flex-shrink: 0;\n            position: relative;\n            width: 20px;\n            height: 20px;\n            margin: 10px 10px 10px 0;\n            border-radius: 50%;\n            border: 1px solid #d0d0d0;\n            background: #fff;\n            cursor: pointer;\n            user-select: none;\n        }\n\n        .cdx-checklist__item-checkbox:hover {\n                border-color: #b5b5b5;\n            }\n\n        .cdx-checklist__item-checkbox::after {\n                position: absolute;\n                top: 5px;\n                left: 5px;\n                width: 8px;\n                height: 5px;\n                border: 2px solid #fcfff4;\n                border-top: none;\n                border-right: none;\n                background: transparent;\n                content: '';\n                opacity: 0;\n                transform: rotate(-45deg);\n            }\n\n        .cdx-checklist__item--checked .cdx-checklist__item-checkbox {\n                background: #388ae5;\n                border-color: #388ae5;\n            }\n\n        .cdx-checklist__item--checked .cdx-checklist__item-checkbox:hover {\n                    background: #307cd1;\n                }\n\n        .cdx-checklist__item--checked .cdx-checklist__item-checkbox::after {\n                    opacity: 1;\n                }\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,l=0,u=[],d=n(5);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(y(r.parts[s],t))}else{var c=[];for(s=0;s<r.parts.length;s++)c.push(y(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function p(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(c):n.push(r[s]={id:s,parts:[c]})}return n}function h(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function v(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var s=l++;n=a||(a=v(t)),r=k.bind(null,n,s,!1),i=k.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=d(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(s),c&&URL.revokeObjectURL(c)}.bind(null,n,t),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(c=o[s.id]).refs--,r.push(c)}e&&f(p(e,t),t);for(i=0;i<r.length;i++){var c;if(0===(c=r[i]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete o[c.id]}}}};var x,g=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function k(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})}])});

/***/ }),

/***/ "./node_modules/@editorjs/code/dist/bundle.js":
/*!****************************************************!*\
  !*** ./node_modules/@editorjs/code/dist/bundle.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n(1).toString();
/**
 * CodeTool for Editor.js
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var i=function(){function e(t){var n=t.data,r=t.config,o=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=o,this.placeholder=r.placeholder||e.DEFAULT_PLACEHOLDER,this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-code",textarea:"ce-code__textarea"},this.nodes={holder:null,textarea:null},this.data={code:n.code||""},this.nodes.holder=this.drawView()}return o(e,null,[{key:"enableLineBreaks",get:function(){return!0}}]),o(e,[{key:"drawView",value:function(){var e=document.createElement("div"),t=document.createElement("textarea");return e.classList.add(this.CSS.baseClass,this.CSS.wrapper),t.classList.add(this.CSS.textarea,this.CSS.input),t.textContent=this.data.code,t.placeholder=this.placeholder,e.appendChild(t),this.nodes.textarea=t,e}},{key:"render",value:function(){return this.nodes.holder}},{key:"save",value:function(e){return{code:e.querySelector("textarea").value}}},{key:"onPaste",value:function(e){var t=e.detail.data;this.data={code:t.textContent}}},{key:"data",get:function(){return this._data},set:function(e){this._data=e,this.nodes.textarea&&(this.nodes.textarea.textContent=e.code)}}],[{key:"toolbox",get:function(){return{icon:'<svg width="14" height="14" viewBox="0 -1 14 14" xmlns="http://www.w3.org/2000/svg" > <path d="M3.177 6.852c.205.253.347.572.427.954.078.372.117.844.117 1.417 0 .418.01.725.03.92.02.18.057.314.107.396.046.075.093.117.14.134.075.027.218.056.42.083a.855.855 0 0 1 .56.297c.145.167.215.38.215.636 0 .612-.432.934-1.216.934-.457 0-.87-.087-1.233-.262a1.995 1.995 0 0 1-.853-.751 2.09 2.09 0 0 1-.305-1.097c-.014-.648-.029-1.168-.043-1.56-.013-.383-.034-.631-.06-.733-.064-.263-.158-.455-.276-.578a2.163 2.163 0 0 0-.505-.376c-.238-.134-.41-.256-.519-.371C.058 6.76 0 6.567 0 6.315c0-.37.166-.657.493-.846.329-.186.56-.342.693-.466a.942.942 0 0 0 .26-.447c.056-.2.088-.42.097-.658.01-.25.024-.85.043-1.802.015-.629.239-1.14.672-1.522C2.691.19 3.268 0 3.977 0c.783 0 1.216.317 1.216.921 0 .264-.069.48-.211.643a.858.858 0 0 1-.563.29c-.249.03-.417.076-.498.126-.062.04-.112.134-.139.291-.031.187-.052.562-.061 1.119a8.828 8.828 0 0 1-.112 1.378 2.24 2.24 0 0 1-.404.963c-.159.212-.373.406-.64.583.25.163.454.342.612.538zm7.34 0c.157-.196.362-.375.612-.538a2.544 2.544 0 0 1-.641-.583 2.24 2.24 0 0 1-.404-.963 8.828 8.828 0 0 1-.112-1.378c-.009-.557-.03-.932-.061-1.119-.027-.157-.077-.251-.14-.29-.08-.051-.248-.096-.496-.127a.858.858 0 0 1-.564-.29C8.57 1.401 8.5 1.185 8.5.921 8.5.317 8.933 0 9.716 0c.71 0 1.286.19 1.72.574.432.382.656.893.671 1.522.02.952.033 1.553.043 1.802.009.238.041.458.097.658a.942.942 0 0 0 .26.447c.133.124.364.28.693.466a.926.926 0 0 1 .493.846c0 .252-.058.446-.183.58-.109.115-.281.237-.52.371-.21.118-.377.244-.504.376-.118.123-.212.315-.277.578-.025.102-.045.35-.06.733-.013.392-.027.912-.042 1.56a2.09 2.09 0 0 1-.305 1.097c-.2.323-.486.574-.853.75a2.811 2.811 0 0 1-1.233.263c-.784 0-1.216-.322-1.216-.934 0-.256.07-.47.214-.636a.855.855 0 0 1 .562-.297c.201-.027.344-.056.418-.083.048-.017.096-.06.14-.134a.996.996 0 0 0 .107-.396c.02-.195.031-.502.031-.92 0-.573.039-1.045.117-1.417.08-.382.222-.701.427-.954z" /> </svg>',title:"Code"}}},{key:"DEFAULT_PLACEHOLDER",get:function(){return"Enter code"}},{key:"pasteConfig",get:function(){return{tags:["pre"]}}}]),e}();e.exports=i},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".ce-code__textarea {\n    min-height: 200px;\n    font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n    color: #41314e;\n    line-height: 1.6em;\n    font-size: 12px;\n    background: #f8f7fa;\n    border: 1px solid #f1f1f4;\n    box-shadow: none;\n    white-space: pre;\n    word-wrap: normal;\n    overflow-x: auto;\n    resize: vertical;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,u=0,f=[],l=n(5);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(m(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function b(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=b(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&d(p(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./node_modules/@editorjs/delimiter/dist/bundle.js":
/*!*********************************************************!*\
  !*** ./node_modules/@editorjs/delimiter/dist/bundle.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n(1).toString();
/**
 * Delimiter Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
var i=function(){function e(t){var n=t.data,r=(t.config,t.api);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this._CSS={block:this.api.styles.block,wrapper:"ce-delimiter"},this._data={},this._element=this.drawView(),this.data=n}return o(e,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"contentless",get:function(){return!0}}]),o(e,[{key:"drawView",value:function(){var e=document.createElement("DIV");return e.classList.add(this._CSS.wrapper,this._CSS.block),e}},{key:"render",value:function(){return this._element}},{key:"save",value:function(e){return{}}}],[{key:"toolbox",get:function(){return{icon:'<svg width="19" height="4" viewBox="0 0 19 4" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 0H7a1.25 1.25 0 1 1 0 2.5H1.25a1.25 1.25 0 1 1 0-2.5zM11 0h5.75a1.25 1.25 0 0 1 0 2.5H11A1.25 1.25 0 0 1 11 0z"/></svg>',title:"Delimiter"}}}]),e}();e.exports=i},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.ce-delimiter {\n    line-height: 1.6em;\n    width: 100%;\n    text-align: center;\n}\n\n.ce-delimiter:before {\n    display: inline-block;\n    content: "***";\n    font-size: 30px;\n    line-height: 65px;\n    height: 30px;\n    letter-spacing: 0.2em;\n}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),u=null,c=0,f=[],l=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(m(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function b(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=u||(u=b(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./node_modules/@editorjs/editorjs/dist/editor.js":
/*!********************************************************!*\
  !*** ./node_modules/@editorjs/editorjs/dist/editor.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:65-79 */
/***/ ((module) => {

/*! For license information please see editor.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=183)}([function(t,e,n){var o=n(9),r=n(17),i=n(27),a=n(23),s=n(30),c=function(t,e,n){var l,u,f,d,p=t&c.F,h=t&c.G,v=t&c.S,y=t&c.P,g=t&c.B,b=h?o:v?o[e]||(o[e]={}):(o[e]||{}).prototype,m=h?r:r[e]||(r[e]={}),k=m.prototype||(m.prototype={});for(l in h&&(n=e),n)f=((u=!p&&b&&void 0!==b[l])?b:n)[l],d=g&&u?s(f,o):y&&"function"==typeof f?s(Function.call,f):f,b&&a(b,l,f,t&c.U),m[l]!=f&&i(m,l,d),y&&k[l]!=f&&(k[l]=f)};o.core=r,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var o=n(108);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e,n){var o=n(52),r=n(368);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3)],void 0===(i="function"==typeof(o=function(o,r,i){"use strict";var a=n(1);function s(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=a(r),i=a(i);var l=function(){function t(e){var n=this,o=e.config;if((0,r.default)(this,t),this.nodes={},this.readOnlyMutableListeners={on:function(t,e,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=n.Editor.Listeners;n.mutableListenerIds.push(i.on(t,e,o,r))},clearAll:function(){var t,e=n.Editor.Listeners,o=s(n.mutableListenerIds);try{for(o.s();!(t=o.n()).done;){var r=t.value;e.offById(r)}}catch(t){o.e(t)}finally{o.f()}n.mutableListenerIds=[]}},this.mutableListenerIds=[],(this instanceof t?this.constructor:void 0)===t)throw new TypeError("Constructors for abstract class Module are not allowed.");this.config=o}return(0,i.default)(t,[{key:"removeAllNodes",value:function(){for(var t in this.nodes){var e=this.nodes[t];e instanceof HTMLElement&&e.remove()}}},{key:"state",set:function(t){this.Editor=t}},{key:"isRtl",get:function(){return"rtl"===this.config.i18n.direction}}]),t}();o.default=l,l.displayName="Module",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(367),n(22),n(15)],void 0===(i="function"==typeof(o=function(t,e,o,r,i){"use strict";var a,s=n(1);function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log",o=arguments.length>3?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"color: inherit";if("console"in window&&window.console[n]){var i=["info","log","warn","error"].includes(n),s=[];switch(c.logLevel){case a.ERROR:if("error"!==n)return;break;case a.WARN:if(!["error","warn"].includes(n))return;break;case a.INFO:if(!i||t)return}o&&s.push(o);var l="Editor.js ".concat("2.19.0"),u="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";t&&(i?(s.unshift(u,r),e="%c".concat(l,"%c ").concat(e)):e="( ".concat(l," )").concat(e));try{if(i)if(o){var f;(f=console)[n].apply(f,["".concat(e," %o")].concat(s))}else{var d;(d=console)[n].apply(d,[e].concat(s))}else console[n](e)}catch(t){}}}Object.defineProperty(t,"__esModule",{value:!0}),t.setLogLevel=function(t){c.logLevel=t},t.isPrintableKey=function(t){return t>47&&t<58||32===t||13===t||229===t||t>64&&t<91||t>95&&t<112||t>185&&t<193||t>218&&t<223},t.sequence=function(t){return f.apply(this,arguments)},t.array=function(t){return Array.prototype.slice.call(t)},t.isFunction=d,t.isClass=function(t){return d(t)&&/^\s*class\s+/.test(t.toString())},t.isEmpty=function(t){return!t||0===Object.keys(t).length&&t.constructor===Object},t.isPromise=function(t){return Promise.resolve(t)===t},t.delay=function(t,e){return function(){var n=this,o=arguments;window.setTimeout((function(){return t.apply(n,o)}),e)}},t.getFileExtension=function(t){return t.name.split(".").pop()},t.isValidMimeType=function(t){return/^[-\w]+\/([-+\w]+|\*)$/.test(t)},t.debounce=function(t,e,n){var o,r=arguments,i=this;return function(){var a=i,s=r,c=n&&!o;window.clearTimeout(o),o=window.setTimeout((function(){o=null,n||t.apply(a,s)}),e),c&&t.apply(a,s)}},t.copyTextToClipboard=function(t){var e=i.default.make("div","codex-editor-clipboard",{innerHTML:t});document.body.appendChild(e);var n=window.getSelection(),o=document.createRange();o.selectNode(e),window.getSelection().removeAllRanges(),n.addRange(o),document.execCommand("copy"),document.body.removeChild(e)},t.getUserOS=p,t.capitalize=function(t){return t[0].toUpperCase()+t.slice(1)},t.typeOf=h,t.deepMerge=function t(e){for(var n=function(t){return t&&"object"===h(t)},r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(!i.length)return e;var s=i.shift();if(n(e)&&n(s))for(var c in s)n(s[c])?(e[c]||Object.assign(e,(0,o.default)({},c,{})),t(e[c],s[c])):Object.assign(e,(0,o.default)({},c,s[c]));return t.apply(void 0,[e].concat(i))},t.beautifyShortcut=function(t){var e=p();return t=t.replace(/shift/gi,"⇧").replace(/backspace/gi,"⌫").replace(/enter/gi,"⏎").replace(/up/gi,"↑").replace(/left/gi,"→").replace(/down/gi,"↓").replace(/right/gi,"←").replace(/escape/gi,"⎋").replace(/insert/gi,"Ins").replace(/delete/gi,"␡").replace(/\+/gi," + "),t=e.mac?t.replace(/ctrl|cmd/gi,"⌘").replace(/alt/gi,"⌥"):t.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN")},t.getValidUrl=function(t){try{return new URL(t).href}catch(t){}return"//"===t.substring(0,2)?window.location.protocol+t:window.location.origin+t},t.openTab=function(t){window.open(t,"_blank")},t.generateId=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(t).concat(Math.floor(1e8*Math.random()).toString(16))},t.deprecationAssert=function(t,e,n){var o="«".concat(e,"» is deprecated and will be removed in the next major release. Please use the «").concat(n,"» instead.");t&&u(o,"warn")},t.isTouchSupported=t.logLabeled=t.log=t.mouseButtons=t.keyCodes=t.LogLevels=void 0,e=s(e),o=s(o),r=s(r),i=s(i),t.LogLevels=a,function(t){t.VERBOSE="VERBOSE",t.INFO="INFO",t.WARN="WARN",t.ERROR="ERROR"}(a||(t.LogLevels=a={})),t.keyCodes={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91},t.mouseButtons={LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4},c.logLevel=a.VERBOSE;var l=c.bind(window,!1);t.log=l;var u=c.bind(window,!0);function f(){return(f=(0,r.default)(e.default.mark((function t(n){var o,i,a,s,c=arguments;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){return(s=(0,r.default)(e.default.mark((function t(n,o,r){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.function(n.data);case 3:return t.next=5,o(void 0!==n.data?n.data:{});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(void 0!==n.data?n.data:{});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},a=function(t,e,n){return s.apply(this,arguments)},o=c.length>1&&void 0!==c[1]?c[1]:function(){},i=c.length>2&&void 0!==c[2]?c[2]:function(){},t.abrupt("return",n.reduce(function(){var t=(0,r.default)(e.default.mark((function t(n,r){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:return t.abrupt("return",a(r,o,i));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Promise.resolve()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return"function"==typeof t}function p(){var t={win:!1,mac:!1,x11:!1,linux:!1},e=Object.keys(t).find((function(t){return-1!==navigator.appVersion.toLowerCase().indexOf(t)}));return e?(t[e]=!0,t):t}function h(t){return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}t.logLabeled=u;var v="ontouchstart"in document.documentElement;t.isTouchSupported=v})?o.apply(e,r):o)||(t.exports=i)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(12);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(52);function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var e=r();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var s=i?Object.getOwnPropertyDescriptor(t,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=t[a]}return n.default=t,e&&e.set(t,n),n}},function(t,e,n){var o=n(68)("wks"),r=n(43),i=n(9).Symbol,a="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=a&&i[t]||(a?i:r)("Symbol."+t))}).store=o},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(52),n(66),n(2),n(3),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(13),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=l(c);var f=function(){function t(){(0,a.default)(this,t)}return(0,s.default)(t,null,[{key:"isSingleTag",value:function(t){return t.tagName&&["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(t.tagName)}},{key:"isLineBreakTag",value:function(t){return t&&t.tagName&&["BR","WBR"].includes(t.tagName)}},{key:"make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=document.createElement(t);for(var a in Array.isArray(n)?(e=r.classList).add.apply(e,(0,i.default)(n)):n&&r.classList.add(n),o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a]);return r}},{key:"text",value:function(t){return document.createTextNode(t)}},{key:"svg",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.classList.add("icon","icon--"+t),o.setAttribute("width",e+"px"),o.setAttribute("height",n+"px"),o.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t,'"></use>'),o}},{key:"append",value:function(t,e){Array.isArray(e)?e.forEach((function(e){return t.appendChild(e)})):t.appendChild(e)}},{key:"prepend",value:function(t,e){Array.isArray(e)?(e=e.reverse()).forEach((function(e){return t.prepend(e)})):t.prepend(e)}},{key:"swap",value:function(t,e){var n=document.createElement("div"),o=t.parentNode;o.insertBefore(n,t),o.insertBefore(t,e),o.insertBefore(e,n),o.removeChild(n)}},{key:"find",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelector(e)}},{key:"get",value:function(t){return document.getElementById(t)}},{key:"findAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelectorAll(e)}},{key:"findAllInputs",value:function(e){return c.array(e.querySelectorAll(t.allInputsSelector)).reduce((function(e,n){return t.isNativeInput(n)||t.containsOnlyInlineElements(n)?[].concat((0,i.default)(e),[n]):[].concat((0,i.default)(e),(0,i.default)(t.getDeepestBlockElements(n)))}),[])}},{key:"getDeepestNode",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=n?"lastChild":"firstChild",r=n?"previousSibling":"nextSibling";if(e&&e.nodeType===Node.ELEMENT_NODE&&e[o]){var i=e[o];if(t.isSingleTag(i)&&!t.isNativeInput(i)&&!t.isLineBreakTag(i))if(i[r])i=i[r];else{if(!i.parentNode[r])return i.parentNode;i=i.parentNode[r]}return this.getDeepestNode(i,n)}return e}},{key:"isElement",value:function(t){return t&&"object"===(0,r.default)(t)&&t.nodeType&&t.nodeType===Node.ELEMENT_NODE}},{key:"isFragment",value:function(t){return t&&"object"===(0,r.default)(t)&&t.nodeType&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE}},{key:"isContentEditable",value:function(t){return"true"===t.contentEditable}},{key:"isNativeInput",value:function(t){return!(!t||!t.tagName)&&["INPUT","TEXTAREA"].includes(t.tagName)}},{key:"canSetCaret",value:function(e){var n=!0;if(t.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":n=!1}else n=t.isContentEditable(e);return n}},{key:"isNodeEmpty",value:function(t){return!(this.isSingleTag(t)&&!this.isLineBreakTag(t))&&0===(this.isElement(t)&&this.isNativeInput(t)?t.value:t.textContent.replace("​","")).trim().length}},{key:"isLeaf",value:function(t){return!!t&&0===t.childNodes.length}},{key:"isEmpty",value:function(t){t.normalize();for(var e=[t];e.length>0;)if(t=e.shift()){if(this.isLeaf(t)&&!this.isNodeEmpty(t))return!1;t.childNodes&&e.push.apply(e,(0,i.default)(Array.from(t.childNodes)))}return!0}},{key:"isHTMLString",value:function(e){var n=t.make("div");return n.innerHTML=e,n.childElementCount>0}},{key:"getContentLength",value:function(e){return t.isNativeInput(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:e.textContent.length}},{key:"containsOnlyInlineElements",value:function(e){var n;return"string"==typeof e?(n=document.createElement("div")).innerHTML=e:n=e,Array.from(n.children).every((function e(n){return!t.blockElements.includes(n.tagName.toLowerCase())&&Array.from(n.children).every(e)}))}},{key:"getDeepestBlockElements",value:function(e){return t.containsOnlyInlineElements(e)?[e]:Array.from(e.children).reduce((function(e,n){return[].concat((0,i.default)(e),(0,i.default)(t.getDeepestBlockElements(n)))}),[])}},{key:"getHolder",value:function(t){return"string"==typeof t?document.getElementById(t):t}},{key:"isExtensionNode",value:function(t){return t&&["GRAMMARLY-EXTENSION"].includes(t.nodeName)}},{key:"isAnchor",value:function(t){return"a"===t.tagName.toLowerCase()}},{key:"allInputsSelector",get:function(){return"[contenteditable], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((function(t){return'input[type="'.concat(t,'"]')})).join(", ")}},{key:"blockElements",get:function(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tr","tfoot","ul","video"]}}]),t}();o.default=f,f.displayName="Dom",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(32),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(10)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(11),r=n(109),i=n(40),a=Object.defineProperty;e.f=n(18)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(37);t.exports=function(t){return Object(o(t))}},function(t,e,n){t.exports=n(140)},function(t,e){function n(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,r)}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise((function(r,i){var a=t.apply(e,o);function s(t){n(a,r,i,s,c,"next",t)}function c(t){n(a,r,i,s,c,"throw",t)}s(void 0)}))}}},function(t,e,n){var o=n(9),r=n(27),i=n(26),a=n(43)("src"),s=n(188),c=(""+s).split("toString");n(17).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var l="function"==typeof n;l&&(i(n,"name")||r(n,"name",e)),t[e]!==n&&(l&&(i(n,a)||r(n,a,t[e]?""+t[e]:c.join(String(e)))),t===o?t[e]=n:s?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},function(t,e,n){var o=n(0),r=n(10),i=n(37),a=/"/g,s=function(t,e,n,o){var r=String(i(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),s+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),o(o.P+o.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(8),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var c=n(13),l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=l(r),i=l(i),a=c(a),s=l(s);var u=function(){function t(){(0,r.default)(this,t),this.instance=null,this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}return(0,i.default)(t,[{key:"removeFakeBackground",value:function(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}},{key:"setFakeBackground",value:function(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}},{key:"save",value:function(){this.savedSelectionRange=t.range}},{key:"restore",value:function(){if(this.savedSelectionRange){var t=window.getSelection();t.removeAllRanges(),t.addRange(this.savedSelectionRange)}}},{key:"clearSaved",value:function(){this.savedSelectionRange=null}},{key:"collapseToEnd",value:function(){var t=window.getSelection(),e=document.createRange();e.selectNodeContents(t.focusNode),e.collapse(!1),t.removeAllRanges(),t.addRange(e)}},{key:"findParentTag",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=window.getSelection(),r=null;if(!o||!o.anchorNode||!o.focusNode)return null;var i=[o.anchorNode,o.focusNode];return i.forEach((function(o){for(var i=n;i>0&&o.parentNode&&(o.tagName!==t||(r=o,e&&o.classList&&!o.classList.contains(e)&&(r=null),!r));)o=o.parentNode,i--})),r}},{key:"expandToTag",value:function(t){var e=window.getSelection();e.removeAllRanges();var n=document.createRange();n.selectNodeContents(t),e.addRange(n)}}],[{key:"get",value:function(){return window.getSelection()}},{key:"setCursor",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=document.createRange(),o=window.getSelection();if(s.default.isNativeInput(t)){if(!s.default.canSetCaret(t))return;return t.focus(),t.selectionStart=t.selectionEnd=e,t.getBoundingClientRect()}return n.setStart(t,e),n.setEnd(t,e),o.removeAllRanges(),o.addRange(n),n.getBoundingClientRect()}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}},{key:"anchorNode",get:function(){var t=window.getSelection();return t?t.anchorNode:null}},{key:"anchorElement",get:function(){var t=window.getSelection();if(!t)return null;var e=t.anchorNode;return e?s.default.isElement(e)?e:e.parentElement:null}},{key:"anchorOffset",get:function(){var t=window.getSelection();return t?t.anchorOffset:null}},{key:"isCollapsed",get:function(){var t=window.getSelection();return t?t.isCollapsed:null}},{key:"isAtEditor",get:function(){var e=t.get(),n=e.anchorNode||e.focusNode;n&&n.nodeType===Node.TEXT_NODE&&(n=n.parentNode);var o=null;return n&&(o=n.closest(".".concat(t.CSS.editorZone))),o&&o.nodeType===Node.ELEMENT_NODE}},{key:"isSelectionExists",get:function(){return!!t.get().anchorNode}},{key:"range",get:function(){var t=window.getSelection();return t&&t.rangeCount?t.getRangeAt(0):null}},{key:"rect",get:function(){var t,e=document.selection,n={x:0,y:0,width:0,height:0};if(e&&"Control"!==e.type)return t=(e=e).createRange(),n.x=t.boundingLeft,n.y=t.boundingTop,n.width=t.boundingWidth,n.height=t.boundingHeight,n;if(!window.getSelection)return a.log("Method window.getSelection is not supported","warn"),n;if(null===(e=window.getSelection()).rangeCount||isNaN(e.rangeCount))return a.log("Method SelectionUtils.rangeCount is not supported","warn"),n;if(0===e.rangeCount)return n;if((t=e.getRangeAt(0).cloneRange()).getBoundingClientRect&&(n=t.getBoundingClientRect()),0===n.x&&0===n.y){var o=document.createElement("span");if(o.getBoundingClientRect){o.appendChild(document.createTextNode("​")),t.insertNode(o),n=o.getBoundingClientRect();var r=o.parentNode;r.removeChild(o),r.normalize()}}return n}},{key:"text",get:function(){return window.getSelection?window.getSelection().toString():""}}]),t}();o.default=u,u.displayName="SelectionUtils",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(19),r=n(42);t.exports=n(18)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(62),r=n(37);t.exports=function(t){return o(r(t))}},function(t,e,n){"use strict";var o=n(10);t.exports=function(t,e){return!!t&&o((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){var o=n(31);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(63),r=n(42),i=n(28),a=n(40),s=n(26),c=n(109),l=Object.getOwnPropertyDescriptor;e.f=n(18)?l:function(t,e){if(t=i(t),e=a(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},function(t,e,n){var o=n(0),r=n(17),i=n(10);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i((function(){n(1)})),"Object",a)}},function(t,e,n){var o=n(30),r=n(62),i=n(20),a=n(16),s=n(125);t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f,p=e||s;return function(e,s,h){for(var v,y,g=i(e),b=r(g),m=o(s,h,3),k=a(b.length),x=0,S=n?p(e,k):c?p(e,0):void 0;k>x;x++)if((d||x in b)&&(y=m(v=b[x],x,g),t))if(n)S[x]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:S.push(v)}else if(u)return!1;return f?-1:l||u?u:S}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";if(n(18)){var o=n(44),r=n(9),i=n(10),a=n(0),s=n(79),c=n(107),l=n(30),u=n(57),f=n(42),d=n(27),p=n(58),h=n(32),v=n(16),y=n(136),g=n(46),b=n(40),m=n(26),k=n(64),x=n(12),S=n(20),w=n(99),E=n(47),T=n(49),C=n(48).f,B=n(101),_=n(43),O=n(14),I=n(35),N=n(69),R=n(65),M=n(103),L=n(55),A=n(72),P=n(56),D=n(102),j=n(127),F=n(19),U=n(33),H=F.f,z=U.f,W=r.RangeError,G=r.TypeError,X=r.Uint8Array,V=Array.prototype,Y=c.ArrayBuffer,K=c.DataView,Z=I(0),q=I(2),J=I(3),$=I(4),Q=I(5),tt=I(6),et=N(!0),nt=N(!1),ot=M.values,rt=M.keys,it=M.entries,at=V.lastIndexOf,st=V.reduce,ct=V.reduceRight,lt=V.join,ut=V.sort,ft=V.slice,dt=V.toString,pt=V.toLocaleString,ht=O("iterator"),vt=O("toStringTag"),yt=_("typed_constructor"),gt=_("def_constructor"),bt=s.CONSTR,mt=s.TYPED,kt=s.VIEW,xt=I(1,(function(t,e){return Ct(R(t,t[gt]),e)})),St=i((function(){return 1===new X(new Uint16Array([1]).buffer)[0]})),wt=!!X&&!!X.prototype.set&&i((function(){new X(1).set({})})),Et=function(t,e){var n=h(t);if(n<0||n%e)throw W("Wrong offset!");return n},Tt=function(t){if(x(t)&&mt in t)return t;throw G(t+" is not a typed array!")},Ct=function(t,e){if(!x(t)||!(yt in t))throw G("It is not a typed array constructor!");return new t(e)},Bt=function(t,e){return _t(R(t,t[gt]),e)},_t=function(t,e){for(var n=0,o=e.length,r=Ct(t,o);o>n;)r[n]=e[n++];return r},Ot=function(t,e,n){H(t,e,{get:function(){return this._d[n]}})},It=function(t){var e,n,o,r,i,a,s=S(t),c=arguments.length,u=c>1?arguments[1]:void 0,f=void 0!==u,d=B(s);if(null!=d&&!w(d)){for(a=d.call(s),o=[],e=0;!(i=a.next()).done;e++)o.push(i.value);s=o}for(f&&c>2&&(u=l(u,arguments[2],2)),e=0,n=v(s.length),r=Ct(this,n);n>e;e++)r[e]=f?u(s[e],e):s[e];return r},Nt=function(){for(var t=0,e=arguments.length,n=Ct(this,e);e>t;)n[t]=arguments[t++];return n},Rt=!!X&&i((function(){pt.call(new X(1))})),Mt=function(){return pt.apply(Rt?ft.call(Tt(this)):Tt(this),arguments)},Lt={copyWithin:function(t,e){return j.call(Tt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return $(Tt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return D.apply(Tt(this),arguments)},filter:function(t){return Bt(this,q(Tt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Tt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Tt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z(Tt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return nt(Tt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(Tt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return lt.apply(Tt(this),arguments)},lastIndexOf:function(t){return at.apply(Tt(this),arguments)},map:function(t){return xt(Tt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return st.apply(Tt(this),arguments)},reduceRight:function(t){return ct.apply(Tt(this),arguments)},reverse:function(){for(var t,e=Tt(this).length,n=Math.floor(e/2),o=0;o<n;)t=this[o],this[o++]=this[--e],this[e]=t;return this},some:function(t){return J(Tt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ut.call(Tt(this),t)},subarray:function(t,e){var n=Tt(this),o=n.length,r=g(t,o);return new(R(n,n[gt]))(n.buffer,n.byteOffset+r*n.BYTES_PER_ELEMENT,v((void 0===e?o:g(e,o))-r))}},At=function(t,e){return Bt(this,ft.call(Tt(this),t,e))},Pt=function(t){Tt(this);var e=Et(arguments[1],1),n=this.length,o=S(t),r=v(o.length),i=0;if(r+e>n)throw W("Wrong length!");for(;i<r;)this[e+i]=o[i++]},Dt={entries:function(){return it.call(Tt(this))},keys:function(){return rt.call(Tt(this))},values:function(){return ot.call(Tt(this))}},jt=function(t,e){return x(t)&&t[mt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Ft=function(t,e){return jt(t,e=b(e,!0))?f(2,t[e]):z(t,e)},Ut=function(t,e,n){return!(jt(t,e=b(e,!0))&&x(n)&&m(n,"value"))||m(n,"get")||m(n,"set")||n.configurable||m(n,"writable")&&!n.writable||m(n,"enumerable")&&!n.enumerable?H(t,e,n):(t[e]=n.value,t)};bt||(U.f=Ft,F.f=Ut),a(a.S+a.F*!bt,"Object",{getOwnPropertyDescriptor:Ft,defineProperty:Ut}),i((function(){dt.call({})}))&&(dt=pt=function(){return lt.call(this)});var Ht=p({},Lt);p(Ht,Dt),d(Ht,ht,Dt.values),p(Ht,{slice:At,set:Pt,constructor:function(){},toString:dt,toLocaleString:Mt}),Ot(Ht,"buffer","b"),Ot(Ht,"byteOffset","o"),Ot(Ht,"byteLength","l"),Ot(Ht,"length","e"),H(Ht,vt,{get:function(){return this[mt]}}),t.exports=function(t,e,n,c){var l=t+((c=!!c)?"Clamped":"")+"Array",f="get"+t,p="set"+t,h=r[l],g=h||{},b=h&&T(h),m=!h||!s.ABV,S={},w=h&&h.prototype,B=function(t,n){H(t,n,{get:function(){return function(t,n){var o=t._d;return o.v[f](n*e+o.o,St)}(this,n)},set:function(t){return function(t,n,o){var r=t._d;c&&(o=(o=Math.round(o))<0?0:o>255?255:255&o),r.v[p](n*e+r.o,o,St)}(this,n,t)},enumerable:!0})};m?(h=n((function(t,n,o,r){u(t,h,l,"_d");var i,a,s,c,f=0,p=0;if(x(n)){if(!(n instanceof Y||"ArrayBuffer"==(c=k(n))||"SharedArrayBuffer"==c))return mt in n?_t(h,n):It.call(h,n);i=n,p=Et(o,e);var g=n.byteLength;if(void 0===r){if(g%e)throw W("Wrong length!");if((a=g-p)<0)throw W("Wrong length!")}else if((a=v(r)*e)+p>g)throw W("Wrong length!");s=a/e}else s=y(n),i=new Y(a=s*e);for(d(t,"_d",{b:i,o:p,l:a,e:s,v:new K(i)});f<s;)B(t,f++)})),w=h.prototype=E(Ht),d(w,"constructor",h)):i((function(){h(1)}))&&i((function(){new h(-1)}))&&A((function(t){new h,new h(null),new h(1.5),new h(t)}),!0)||(h=n((function(t,n,o,r){var i;return u(t,h,l),x(n)?n instanceof Y||"ArrayBuffer"==(i=k(n))||"SharedArrayBuffer"==i?void 0!==r?new g(n,Et(o,e),r):void 0!==o?new g(n,Et(o,e)):new g(n):mt in n?_t(h,n):It.call(h,n):new g(y(n))})),Z(b!==Function.prototype?C(g).concat(C(b)):C(g),(function(t){t in h||d(h,t,g[t])})),h.prototype=w,o||(w.constructor=h));var _=w[ht],O=!!_&&("values"==_.name||null==_.name),I=Dt.values;d(h,yt,!0),d(w,mt,l),d(w,kt,!0),d(w,gt,h),(c?new h(1)[vt]==l:vt in w)||H(w,vt,{get:function(){return l}}),S[l]=h,a(a.G+a.W+a.F*(h!=g),S),a(a.S,l,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*i((function(){g.of.call(h,1)})),l,{from:It,of:Nt}),"BYTES_PER_ELEMENT"in w||d(w,"BYTES_PER_ELEMENT",e),a(a.P,l,Lt),P(l),a(a.P+a.F*wt,l,{set:Pt}),a(a.P+a.F*!O,l,Dt),o||w.toString==dt||(w.toString=dt),a(a.P+a.F*i((function(){new h(1).slice()})),l,{slice:At}),a(a.P+a.F*(i((function(){return[1,2].toLocaleString()!=new h([1,2]).toLocaleString()}))||!i((function(){w.toLocaleString.call([1,2])}))),l,{toLocaleString:Mt}),L[l]=O?_:I,o||O||d(w,ht,I)}}else t.exports=function(){}},function(t,e,n){var o=n(357),r=n(358),i=n(141),a=n(359);t.exports=function(t,e){return o(t)||r(t,e)||i(t,e)||a()}},function(t,e,n){var o=n(12);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(43)("meta"),r=n(12),i=n(26),a=n(19).f,s=0,c=Object.isExtensible||function(){return!0},l=!n(10)((function(){return c(Object.preventExtensions({}))})),u=function(t){a(t,o,{value:{i:"O"+ ++s,w:{}}})},f=t.exports={KEY:o,NEED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[o].i},getWeak:function(t,e){if(!i(t,o)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[o].w},onFreeze:function(t){return l&&f.NEED&&c(t)&&!i(t,o)&&u(t),t}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports=!1},function(t,e,n){var o=n(111),r=n(86);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(32),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(11),r=n(112),i=n(86),a=n(85)("IE_PROTO"),s=function(){},c=function(){var t,e=n(83)("iframe"),o=i.length;for(e.style.display="none",n(87).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;o--;)delete c.prototype[i[o]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=o(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(111),r=n(86).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e,n){var o=n(26),r=n(20),i=n(85)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var o=n(14)("unscopables"),r=Array.prototype;null==r[o]&&n(27)(r,o,{}),t.exports=function(t){r[o][t]=!0}},function(t,e,n){var o=n(12);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){var o=n(19).f,r=n(26),i=n(14)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(0),r=n(37),i=n(10),a=n(89),s="["+a+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),u=function(t,e,n){var r={},s=i((function(){return!!a[t]()||"​"!="​"[t]()})),c=r[t]=s?e(f):a[t];n&&(r[n]=c),o(o.P+o.F*s,"String",r)},f=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},function(t,e){t.exports={}},function(t,e,n){"use strict";var o=n(9),r=n(19),i=n(18),a=n(14)("species");t.exports=function(t){var e=o[t];i&&e&&!e[a]&&r.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var o=n(23);t.exports=function(t,e,n){for(var r in e)o(t,r,e[r],n);return t}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(143)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,null,[{key:"ui",value:function(e,n){return t._t(e,n)}},{key:"t",value:function(e,n){return t._t(e,n)}},{key:"setDictionary",value:function(e){t.currentDictionary=e}},{key:"_t",value:function(e,n){var o=t.getNamespace(e);return o&&o[n]?o[n]:n}},{key:"getNamespace",value:function(e){return e.split(".").reduce((function(t,e){return t&&Object.keys(t).length?t[e]:{}}),t.currentDictionary)}}]),t}();o.default=c,c.displayName="I18n",c.currentDictionary=a.default,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(379),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var c=n(13),l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=l(r),i=l(i),a=l(a),s=c(s);var u=function(){function t(e){var n=this;(0,r.default)(this,t),this.iterator=null,this.activated=!1,this.allowArrows=!0,this.onKeyDown=function(e){if(n.isEventReadyForHandling(e))switch(t.usedKeys.includes(e.keyCode)&&e.preventDefault(),e.keyCode){case s.keyCodes.TAB:n.handleTabPress(e);break;case s.keyCodes.LEFT:case s.keyCodes.UP:n.flipLeft();break;case s.keyCodes.RIGHT:case s.keyCodes.DOWN:n.flipRight();break;case s.keyCodes.ENTER:n.handleEnterPress(e)}},this.allowArrows="boolean"!=typeof e.allowArrows||e.allowArrows,this.iterator=new a.default(e.items,e.focusedItemClass),this.activateCallback=e.activateCallback}return(0,i.default)(t,[{key:"activate",value:function(t){this.activated=!0,t&&this.iterator.setItems(t),document.addEventListener("keydown",this.onKeyDown)}},{key:"deactivate",value:function(){this.activated=!1,this.dropCursor(),document.removeEventListener("keydown",this.onKeyDown)}},{key:"focusFirst",value:function(){this.dropCursor(),this.flipRight()}},{key:"flipLeft",value:function(){this.iterator.previous()}},{key:"flipRight",value:function(){this.iterator.next()}},{key:"dropCursor",value:function(){this.iterator.dropCursor()}},{key:"isEventReadyForHandling",value:function(t){var e=[s.keyCodes.TAB,s.keyCodes.ENTER],n=this.iterator.currentItem==document.activeElement;return this.allowArrows&&!n&&e.push(s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.UP,s.keyCodes.DOWN),this.activated&&-1!==e.indexOf(t.keyCode)}},{key:"handleTabPress",value:function(t){switch(t.shiftKey?a.default.directions.LEFT:a.default.directions.RIGHT){case a.default.directions.RIGHT:this.flipRight();break;case a.default.directions.LEFT:this.flipLeft()}}},{key:"handleEnterPress",value:function(t){this.activated&&(this.iterator.currentItem&&this.iterator.currentItem.click(),s.isFunction(this.activateCallback)&&this.activateCallback(this.iterator.currentItem),t.preventDefault(),t.stopPropagation())}},{key:"currentItem",get:function(){return this.iterator.currentItem}}],[{key:"usedKeys",get:function(){return[s.keyCodes.TAB,s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.ENTER,s.keyCodes.UP,s.keyCodes.DOWN]}}]),t}();o.default=u,u.displayName="Flipper",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(15),n(8),n(146),n(67),n(380),n(381),n(382),n(25)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a,s,c,l,u,f,d,p){"use strict";var h,v=n(13),y=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BlockToolAPI=void 0,e=y(e),o=y(o),r=y(r),i=y(i),a=y(a),s=v(s),c=y(c),u=y(u),f=y(f),d=y(d),p=y(p),t.BlockToolAPI=h,function(t){t.APPEND_CALLBACK="appendCallback",t.RENDERED="rendered",t.MOVED="moved",t.UPDATED="updated",t.REMOVED="removed",t.ON_PASTE="onPaste"}(h||(t.BlockToolAPI=h={}));var g=function(){function t(e){var n=this,o=e.name,i=e.data,a=e.Tool,u=e.settings,f=e.api,d=e.readOnly;(0,r.default)(this,t),this.cachedInputs=[],this.inputIndex=0,this.modificationDebounceTimer=450,this.didMutated=s.debounce((function(){n.cachedInputs=[],n.updateCurrentInput(),n.call(h.UPDATED)}),this.modificationDebounceTimer),this.handleFocus=function(){n.cachedInputs=[],n.updateCurrentInput()},this.name=o,this.class=a,this.settings=u,this.config=u.config||{},this.api=f,this.blockAPI=new c.default(this),this.mutationObserver=new MutationObserver(this.didMutated),this.tool=new a({data:i,config:this.config,api:this.api.getMethodsForTool(o,l.ToolType.Block),block:this.blockAPI,readOnly:d}),this.holder=this.compose(),this.tunes=this.makeTunes()}var n,v,y;return(0,i.default)(t,[{key:"mergeable",value:function(){return s.isFunction(this.tool.merge)}},{key:"call",value:function(t,e){if(this.tool[t]&&this.tool[t]instanceof Function){t===h.APPEND_CALLBACK&&s.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead","warn");try{this.tool[t].call(this.tool,e)}catch(e){s.log("Error during '".concat(t,"' call: ").concat(e.message),"error")}}}},{key:"mergeWith",value:(y=(0,o.default)(e.default.mark((function t(n){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tool.merge(n);case 2:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)})},{key:"save",value:(v=(0,o.default)(e.default.mark((function t(){var n,o,r,i=this;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tool.save(this.pluginsContent);case 2:return n=t.sent,o=window.performance.now(),t.abrupt("return",Promise.resolve(n).then((function(t){return r=window.performance.now(),{tool:i.name,data:t,time:r-o}})).catch((function(t){s.log("Saving proccess for ".concat(i.name," tool failed due to the ").concat(t),"log","red")})));case 5:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})},{key:"validate",value:(n=(0,o.default)(e.default.mark((function t(n){var o;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!0,!(this.tool.validate instanceof Function)){t.next=5;break}return t.next=4,this.tool.validate(n);case 4:o=t.sent;case 5:return t.abrupt("return",o);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"makeTunes",value:function(){var t=this;return[{name:"moveUp",Tune:u.default},{name:"delete",Tune:f.default},{name:"moveDown",Tune:d.default}].map((function(e){var n=e.name;return new(0,e.Tune)({api:t.api.getMethodsForTool(n,l.ToolType.Tune),settings:t.config})}))}},{key:"renderTunes",value:function(){var t=document.createDocumentFragment();return this.tunes.forEach((function(e){a.default.append(t,e.render())})),t}},{key:"updateCurrentInput",value:function(){this.currentInput=a.default.isNativeInput(document.activeElement)||!p.default.anchorNode?document.activeElement:p.default.anchorNode}},{key:"willSelect",value:function(){this.mutationObserver.observe(this.holder.firstElementChild,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.addInputEvents()}},{key:"willUnselect",value:function(){this.mutationObserver.disconnect(),this.removeInputEvents()}},{key:"compose",value:function(){var e=a.default.make("div",t.CSS.wrapper),n=a.default.make("div",t.CSS.content),o=this.tool.render();return n.appendChild(o),e.appendChild(n),e}},{key:"addInputEvents",value:function(){var t=this;this.inputs.forEach((function(e){e.addEventListener("focus",t.handleFocus)}))}},{key:"removeInputEvents",value:function(){var t=this;this.inputs.forEach((function(e){e.removeEventListener("focus",t.handleFocus)}))}},{key:"inputs",get:function(){if(0!==this.cachedInputs.length)return this.cachedInputs;var t=a.default.findAllInputs(this.holder);return this.inputIndex>t.length-1&&(this.inputIndex=t.length-1),this.cachedInputs=t,t}},{key:"currentInput",get:function(){return this.inputs[this.inputIndex]},set:function(t){var e=this.inputs.findIndex((function(e){return e===t||e.contains(t)}));-1!==e&&(this.inputIndex=e)}},{key:"firstInput",get:function(){return this.inputs[0]}},{key:"lastInput",get:function(){var t=this.inputs;return t[t.length-1]}},{key:"nextInput",get:function(){return this.inputs[this.inputIndex+1]}},{key:"previousInput",get:function(){return this.inputs[this.inputIndex-1]}},{key:"data",get:function(){return this.save().then((function(t){return t&&!s.isEmpty(t.data)?t.data:{}}))}},{key:"sanitize",get:function(){return this.tool.sanitize}},{key:"isEmpty",get:function(){var t=a.default.isEmpty(this.pluginsContent),e=!this.hasMedia;return t&&e}},{key:"hasMedia",get:function(){return!!this.holder.querySelector(["img","iframe","video","audio","source","input","textarea","twitterwidget"].join(","))}},{key:"focused",set:function(e){this.holder.classList.toggle(t.CSS.focused,e)},get:function(){return this.holder.classList.contains(t.CSS.focused)}},{key:"selected",set:function(e){e?this.holder.classList.add(t.CSS.selected):this.holder.classList.remove(t.CSS.selected)},get:function(){return this.holder.classList.contains(t.CSS.selected)}},{key:"stretched",set:function(e){this.holder.classList.toggle(t.CSS.wrapperStretched,e)},get:function(){return this.holder.classList.contains(t.CSS.wrapperStretched)}},{key:"dropTarget",set:function(e){this.holder.classList.toggle(t.CSS.dropTarget,e)}},{key:"pluginsContent",get:function(){var e=this.holder.querySelector(".".concat(t.CSS.content));if(e&&e.childNodes.length)for(var n=e.childNodes.length-1;n>=0;n--){var o=e.childNodes[n];if(!a.default.isExtensionNode(o))return o}return null}}],[{key:"CSS",get:function(){return{wrapper:"ce-block",wrapperStretched:"ce-block--stretched",content:"ce-block__content",focused:"ce-block--focused",selected:"ce-block--selected",dropTarget:"ce-block--drop-target"}}}]),t}();t.default=g,g.displayName="Block"})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(36);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var o=n(36),r=n(14)("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:i?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var o=n(11),r=n(31),i=n(14)("species");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||null==(n=o(a)[i])?e:r(n)}},function(t,e,n){var o=n(364),r=n(365),i=n(141),a=n(366);t.exports=function(t){return o(t)||r(t)||i(t)||a()}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(21),n(22),n(52),n(2),n(3),n(5),n(6),n(4),n(374),n(7),n(8),n(375),n(376),n(377),n(378)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a,s,c,l,u,f,d,p,h,v,y,g){"use strict";var b=n(13),m=n(1);function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.ToolType=t.default=void 0,e=m(e),o=m(o),r=m(r),i=m(i),a=m(a),s=m(s),c=m(c),l=m(l),u=m(u),f=m(f),d=m(d),p=b(p),h=m(h),v=m(v),y=m(y),g=m(g);var x,S=function(t){(0,c.default)(b,t);var n,d=(n=b,function(){var t,e=(0,u.default)(n);if(k()){var o=(0,u.default)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return(0,l.default)(this,t)});function b(t){var e,n=t.config;return(0,a.default)(this,b),(e=d.call(this,{config:n})).stubTool="stub",e.toolsClasses={},e.toolsAvailable={},e.toolsUnavailable={},e.toolsSettings={},e._inlineTools={},e.toolsClasses={},e.toolsSettings={},e.toolsAvailable={},e.toolsUnavailable={},e._inlineTools=null,e}return(0,s.default)(b,[{key:"prepare",value:function(){var t=this;if(this.validateTools(),this.config.tools=p.deepMerge({},this.internalTools,this.config.tools),!Object.prototype.hasOwnProperty.call(this.config,"tools")||0===Object.keys(this.config.tools).length)throw Error("Can't start without tools");for(var e in this.config.tools)"object"===(0,i.default)(this.config.tools[e])?(this.toolsClasses[e]=this.config.tools[e].class,this.toolsSettings[e]=this.config.tools[e],delete this.toolsSettings[e].class):(this.toolsClasses[e]=this.config.tools[e],this.toolsSettings[e]={class:this.config.tools[e]});var n=this.getListOfPrepareFunctions();return 0===n.length?Promise.resolve():p.sequence(n,(function(e){t.success(e)}),(function(e){t.fallback(e)}))}},{key:"success",value:function(t){this.toolsAvailable[t.toolName]=this.toolsClasses[t.toolName]}},{key:"fallback",value:function(t){this.toolsUnavailable[t.toolName]=this.toolsClasses[t.toolName]}},{key:"constructInline",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o={api:this.Editor.API.getMethodsForTool(e),config:n[this.USER_SETTINGS.CONFIG]||{}};return new t(o)}},{key:"isDefault",value:function(t){return t instanceof this.available[this.config.defaultBlock]}},{key:"getToolSettings",value:function(t){var e=this.toolsSettings[t],n=e[this.USER_SETTINGS.CONFIG]||{};return t!==this.config.defaultBlock||n.placeholder||(n.placeholder=this.config.placeholder,e[this.USER_SETTINGS.CONFIG]=n),e}},{key:"isReadOnlySupported",value:function(t){return!0===t[this.INTERNAL_SETTINGS.IS_READ_ONLY_SUPPORTED]}},{key:"destroy",value:function(){Object.values(this.available).forEach(function(){var t=(0,r.default)(o.default.mark((function t(e){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!p.isFunction(e.reset)){t.next=3;break}return t.next=3,e.reset();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getListOfPrepareFunctions",value:function(){var t=[];for(var e in this.toolsClasses)if(Object.prototype.hasOwnProperty.call(this.toolsClasses,e)){var n=this.toolsClasses[e],o=this.toolsSettings[e][this.USER_SETTINGS.CONFIG];t.push({function:p.isFunction(n.prepare)?n.prepare:function(){},data:{toolName:e,config:o}})}return t}},{key:"validateTools",value:function(){for(var t in this.config.tools)if(Object.prototype.hasOwnProperty.call(this.config.tools,t)){if(t in this.internalTools)return;var e=this.config.tools[t];if(!p.isFunction(e)&&!p.isFunction(e.class))throw Error("Tool «".concat(t,"» must be a constructor function or an object with function in the «class» property"))}}},{key:"available",get:function(){return this.toolsAvailable}},{key:"unavailable",get:function(){return this.toolsUnavailable}},{key:"inline",get:function(){var t=this;if(this._inlineTools)return this._inlineTools;var n=Object.entries(this.available).filter((function(n){var o=(0,e.default)(n,2),r=o[0],i=o[1];if(!i[t.INTERNAL_SETTINGS.IS_INLINE])return!1;var a=["render","surround","checkState"].filter((function(e){return!t.constructInline(i,r)[e]}));return!a.length||(p.log("Incorrect Inline Tool: ".concat(i.name,". Some of required methods is not implemented %o"),"warn",a),!1)})),o={};return n.forEach((function(t){var n=(0,e.default)(t,2),r=n[0],i=n[1];o[r]=i})),this._inlineTools=o,this._inlineTools}},{key:"blockTools",get:function(){var t=this,n=Object.entries(this.available).filter((function(n){return!(0,e.default)(n,2)[1][t.INTERNAL_SETTINGS.IS_INLINE]})),o={};return n.forEach((function(t){var n=(0,e.default)(t,2),r=n[0],i=n[1];o[r]=i})),o}},{key:"INTERNAL_SETTINGS",get:function(){return{IS_ENABLED_LINE_BREAKS:"enableLineBreaks",IS_INLINE:"isInline",TITLE:"title",SHORTCUT:"shortcut",TOOLBOX:"toolbox",SANITIZE_CONFIG:"sanitize",CONVERSION_CONFIG:"conversionConfig",IS_READ_ONLY_SUPPORTED:"isReadOnlySupported"}}},{key:"USER_SETTINGS",get:function(){return{SHORTCUT:"shortcut",TOOLBOX:"toolbox",ENABLED_INLINE_TOOLS:"inlineToolbar",CONFIG:"config"}}},{key:"internalTools",get:function(){return{bold:{class:h.default},italic:{class:v.default},link:{class:y.default},paragraph:{class:f.default,inlineToolbar:!0},stub:{class:g.default}}}}]),b}(d.default);t.default=S,S.displayName="Tools",t.ToolType=x,function(t){t[t.Block=0]="Block",t[t.Inline=1]="Inline",t[t.Tune=2]="Tune"}(x||(t.ToolType=x={}))})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(17),r=n(9),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(44)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var o=n(28),r=n(16),i=n(46);t.exports=function(t){return function(e,n,a){var s,c=o(e),l=r(c.length),u=i(a,l);if(t&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(36);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(14)("iterator"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],a=i[o]();a.next=function(){return{done:n=!0}},i[o]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var o=n(11);t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var o=n(64),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},function(t,e,n){"use strict";n(129);var o=n(23),r=n(27),i=n(10),a=n(37),s=n(14),c=n(104),l=s("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=s(t),p=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=p?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e})):void 0;if(!p||!h||"replace"===t&&!u||"split"===t&&!f){var v=/./[d],y=n(a,d,""[t],(function(t,e,n,o,r){return e.exec===c?p&&!r?{done:!0,value:v.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}})),g=y[0],b=y[1];o(String.prototype,t,g),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},function(t,e,n){var o=n(30),r=n(124),i=n(99),a=n(11),s=n(16),c=n(101),l={},u={};(e=t.exports=function(t,e,n,f,d){var p,h,v,y,g=d?function(){return t}:c(t),b=o(n,f,e?2:1),m=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(p=s(t.length);p>m;m++)if((y=e?b(a(h=t[m])[0],h[1]):b(t[m]))===l||y===u)return y}else for(v=g.call(t);!(h=v.next()).done;)if((y=r(v,b,h.value,e))===l||y===u)return y}).BREAK=l,e.RETURN=u},function(t,e,n){var o=n(9).navigator;t.exports=o&&o.userAgent||""},function(t,e,n){"use strict";var o=n(9),r=n(0),i=n(23),a=n(58),s=n(41),c=n(76),l=n(57),u=n(12),f=n(10),d=n(72),p=n(53),h=n(90);t.exports=function(t,e,n,v,y,g){var b=o[t],m=b,k=y?"set":"add",x=m&&m.prototype,S={},w=function(t){var e=x[t];i(x,t,"delete"==t||"has"==t?function(t){return!(g&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof m&&(g||x.forEach&&!f((function(){(new m).entries().next()})))){var E=new m,T=E[k](g?{}:-0,1)!=E,C=f((function(){E.has(1)})),B=d((function(t){new m(t)})),_=!g&&f((function(){for(var t=new m,e=5;e--;)t[k](e,e);return!t.has(-0)}));B||((m=e((function(e,n){l(e,m,t);var o=h(new b,e,m);return null!=n&&c(n,y,o[k],o),o}))).prototype=x,x.constructor=m),(C||_)&&(w("delete"),w("has"),y&&w("get")),(_||T)&&w(k),g&&x.clear&&delete x.clear}else m=v.getConstructor(e,t,y,k),a(m.prototype,n),s.NEED=!0;return p(m,t),S[t]=m,r(r.G+r.W+r.F*(m!=b),S),g||v.setStrong(m,t,y),m}},function(t,e,n){for(var o,r=n(9),i=n(27),a=n(43),s=a("typed_array"),c=a("view"),l=!(!r.ArrayBuffer||!r.DataView),u=l,f=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(o=r[d[f++]])?(i(o.prototype,s,!0),i(o.prototype,c,!0)):u=!1;t.exports={ABV:l,CONSTR:u,TYPED:s,VIEW:c}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(67)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"getMethodsForTool",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.ToolType.Block;return Object.assign(this.methods,{i18n:this.Editor.I18nAPI.getMethodsForTool(t,e)})}},{key:"methods",get:function(){return{blocks:this.Editor.BlocksAPI.methods,caret:this.Editor.CaretAPI.methods,events:this.Editor.EventsAPI.methods,listeners:this.Editor.ListenersAPI.methods,notifier:this.Editor.NotifierAPI.methods,sanitizer:this.Editor.SanitizerAPI.methods,saver:this.Editor.SaverAPI.methods,selection:this.Editor.SelectionAPI.methods,styles:this.Editor.StylesAPI.classes,toolbar:this.Editor.ToolbarAPI.methods,inlineToolbar:this.Editor.InlineToolbarAPI.methods,tooltip:this.Editor.TooltipAPI.methods,i18n:this.Editor.I18nAPI.methods,readOnly:this.Editor.ReadOnlyAPI.methods}}}]),o}((l=f(l)).default);o.default=p,p.displayName="API",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8),n(59),n(82)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(13),v=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),c=v(c),l=v(l),u=v(u),f=h(f),d=v(d);var g=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(y()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"toggleReadOnly",value:function(t){t?(this.destroy(),this.disableModuleBindings()):(this.drawUI(),this.enableModuleBindings())}},{key:"move",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&(this.Editor.Toolbox.close(),this.Editor.BlockSettings.close());var e=this.Editor.BlockManager.currentBlock.holder;if(e){var n=this.Editor.UI.isMobile,o=e.offsetHeight,r=e.offsetTop;if(n)r+=o;else{var i=Math.floor(o/2);this.nodes.plusButton.style.transform="translate3d(0, calc(".concat(i,"px - 50%), 0)"),this.Editor.Toolbox.nodes.toolbox.style.transform="translate3d(0, calc(".concat(i,"px - 50%), 0)")}this.nodes.wrapper.style.transform="translate3D(0, ".concat(Math.floor(r),"px, 0)")}}},{key:"open",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];f.delay((function(){t.move(n),t.nodes.wrapper.classList.add(t.CSS.toolbarOpened),e?t.blockActions.show():t.blockActions.hide()}),50)()}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened),this.blockActions.hide(),this.Editor.Toolbox.close(),this.Editor.BlockSettings.close()}},{key:"make",value:function(){var t=this;this.nodes.wrapper=u.default.make("div",this.CSS.toolbar),["content","actions"].forEach((function(e){t.nodes[e]=u.default.make("div",t.CSS[e])})),u.default.append(this.nodes.wrapper,this.nodes.content),u.default.append(this.nodes.content,this.nodes.actions),this.nodes.plusButton=u.default.make("div",this.CSS.plusButton),u.default.append(this.nodes.plusButton,u.default.svg("plus",14,14)),u.default.append(this.nodes.content,this.nodes.plusButton),this.readOnlyMutableListeners.on(this.nodes.plusButton,"click",(function(){t.plusButtonClicked()}),!1);var e=u.default.make("div");e.appendChild(document.createTextNode(d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox,"Add"))),e.appendChild(u.default.make("div",this.CSS.plusButtonShortcut,{textContent:"⇥ Tab"})),this.Editor.Tooltip.onHover(this.nodes.plusButton,e),this.nodes.blockActionsButtons=u.default.make("div",this.CSS.blockActionsButtons),this.nodes.settingsToggler=u.default.make("span",this.CSS.settingsToggler);var n=u.default.svg("dots",8,8);u.default.append(this.nodes.settingsToggler,n),u.default.append(this.nodes.blockActionsButtons,this.nodes.settingsToggler),u.default.append(this.nodes.actions,this.nodes.blockActionsButtons),this.Editor.Tooltip.onHover(this.nodes.settingsToggler,d.default.ui(p.I18nInternalNS.ui.blockTunes.toggler,"Click to tune"),{placement:"top"}),u.default.append(this.nodes.content,this.Editor.Toolbox.nodes.toolbox),u.default.append(this.nodes.actions,this.Editor.BlockSettings.nodes.wrapper),u.default.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper)}},{key:"plusButtonClicked",value:function(){this.Editor.Toolbox.toggle()}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(this.nodes.settingsToggler,"click",(function(){t.settingsTogglerClicked()}))}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"settingsTogglerClicked",value:function(){this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.BlockSettings.open()}},{key:"drawUI",value:function(){this.Editor.BlockSettings.make(),this.Editor.Toolbox.make(),this.make()}},{key:"destroy",value:function(){this.Editor.Toolbox.destroy(),this.Editor.BlockSettings.destroy(),this.removeAllNodes()}},{key:"CSS",get:function(){return{toolbar:"ce-toolbar",content:"ce-toolbar__content",actions:"ce-toolbar__actions",actionsOpened:"ce-toolbar__actions--opened",toolbarOpened:"ce-toolbar--opened",plusButton:"ce-toolbar__plus",plusButtonShortcut:"ce-toolbar__plus-shortcut",plusButtonHidden:"ce-toolbar__plus--hidden",blockActionsButtons:"ce-toolbar__actions-buttons",settingsToggler:"ce-toolbar__settings-btn"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened)}},{key:"plusButton",get:function(){var t=this;return{hide:function(){return t.nodes.plusButton.classList.add(t.CSS.plusButtonHidden)},show:function(){t.Editor.Toolbox.isEmpty||t.nodes.plusButton.classList.remove(t.CSS.plusButtonHidden)}}}},{key:"blockActions",get:function(){var t=this;return{hide:function(){t.nodes.actions.classList.remove(t.CSS.actionsOpened)},show:function(){t.nodes.actions.classList.add(t.CSS.actionsOpened)}}}}]),o}(l.default);o.default=g,g.displayName="Toolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(143),n(8)],void 0===(i="function"==typeof(o=function(t,e,o,r){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nInternalNS=void 0,e=i(e);var a=function t(n,o){var i={};return Object.entries(n).forEach((function(n){var a=(0,e.default)(n,2),s=a[0],c=a[1];if("object"!==(0,r.typeOf)(c))i[s]=c;else{var l=o?"".concat(o,".").concat(s):s,u=Object.values(c).every((function(t){return"string"===(0,r.typeOf)(t)}));i[s]=u?l:t(c,l)}})),i}((o=i(o)).default);t.I18nInternalNS=a})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(12),r=n(9).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){e.f=n(14)},function(t,e,n){var o=n(68)("keys"),r=n(43);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(9).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(12),r=n(11),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(30)(Function.call,n(33).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var o=n(12),r=n(88).set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&o(i)&&r&&r(t,i),t}},function(t,e,n){"use strict";var o=n(32),r=n(37);t.exports=function(t){var e=String(r(this)),n="",i=o(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},function(t,e,n){var o=n(32),r=n(37);t.exports=function(t){return function(e,n){var i,a,s=String(r(e)),c=o(n),l=s.length;return c<0||c>=l?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var o=n(44),r=n(0),i=n(23),a=n(27),s=n(55),c=n(123),l=n(53),u=n(49),f=n(14)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,h,v,y,g){c(n,e,h);var b,m,k,x=function(t){if(!d&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",w="values"==v,E=!1,T=t.prototype,C=T[f]||T["@@iterator"]||v&&T[v],B=C||x(v),_=v?w?x("entries"):B:void 0,O="Array"==e&&T.entries||C;if(O&&(k=u(O.call(new t)))!==Object.prototype&&k.next&&(l(k,S,!0),o||"function"==typeof k[f]||a(k,f,p)),w&&C&&"values"!==C.name&&(E=!0,B=function(){return C.call(this)}),o&&!g||!d&&!E&&T[f]||a(T,f,B),s[e]=B,s[S]=p,v)if(b={values:w?B:x("values"),keys:y?B:x("keys"),entries:_},g)for(m in b)m in T||i(T,m,b[m]);else r(r.P+r.F*(d||E),e,b);return b}},function(t,e,n){var o=n(97),r=n(37);t.exports=function(t,e,n){if(o(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},function(t,e,n){var o=n(12),r=n(36),i=n(14)("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},function(t,e,n){var o=n(14)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){var o=n(55),r=n(14)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},function(t,e,n){"use strict";var o=n(19),r=n(42);t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var o=n(64),r=n(14)("iterator"),i=n(55);t.exports=n(17).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||i[o(t)]}},function(t,e,n){"use strict";var o=n(20),r=n(46),i=n(16);t.exports=function(t){for(var e=o(this),n=i(e.length),a=arguments.length,s=r(a>1?arguments[1]:void 0,n),c=a>2?arguments[2]:void 0,l=void 0===c?n:r(c,n);l>s;)e[s++]=t;return e}},function(t,e,n){"use strict";var o=n(50),r=n(128),i=n(55),a=n(28);t.exports=n(95)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){"use strict";var o,r,i=n(73),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,l=(o=/a/,r=/b*/g,a.call(o,"a"),a.call(r,"a"),0!==o.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(c=function(t){var e,n,o,r,c=this;return u&&(n=new RegExp("^"+c.source+"$(?!\\s)",i.call(c))),l&&(e=c.lastIndex),o=a.call(c,t),l&&o&&(c.lastIndex=c.global?o.index+o[0].length:e),u&&o&&o.length>1&&s.call(o[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(o[r]=void 0)})),o}),t.exports=c},function(t,e,n){"use strict";var o=n(94)(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},function(t,e,n){var o,r,i,a=n(30),s=n(117),c=n(87),l=n(83),u=n(9),f=u.process,d=u.setImmediate,p=u.clearImmediate,h=u.MessageChannel,v=u.Dispatch,y=0,g={},b=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},m=function(t){b.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++y]=function(){s("function"==typeof t?t:Function(t),e)},o(y),y},p=function(t){delete g[t]},"process"==n(36)(f)?o=function(t){f.nextTick(a(b,t,1))}:v&&v.now?o=function(t){v.now(a(b,t,1))}:h?(i=(r=new h).port2,r.port1.onmessage=m,o=a(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function(t){u.postMessage(t+"","*")},u.addEventListener("message",m,!1)):o="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),b.call(t)}}:function(t){setTimeout(a(b,t,1),0)}),t.exports={set:d,clear:p}},function(t,e,n){"use strict";var o=n(9),r=n(18),i=n(44),a=n(79),s=n(27),c=n(58),l=n(10),u=n(57),f=n(32),d=n(16),p=n(136),h=n(48).f,v=n(19).f,y=n(102),g=n(53),b=o.ArrayBuffer,m=o.DataView,k=o.Math,x=o.RangeError,S=o.Infinity,w=b,E=k.abs,T=k.pow,C=k.floor,B=k.log,_=k.LN2,O=r?"_b":"buffer",I=r?"_l":"byteLength",N=r?"_o":"byteOffset";function R(t,e,n){var o,r,i,a=new Array(n),s=8*n-e-1,c=(1<<s)-1,l=c>>1,u=23===e?T(2,-24)-T(2,-77):0,f=0,d=t<0||0===t&&1/t<0?1:0;for((t=E(t))!=t||t===S?(r=t!=t?1:0,o=c):(o=C(B(t)/_),t*(i=T(2,-o))<1&&(o--,i*=2),(t+=o+l>=1?u/i:u*T(2,1-l))*i>=2&&(o++,i/=2),o+l>=c?(r=0,o=c):o+l>=1?(r=(t*i-1)*T(2,e),o+=l):(r=t*T(2,l-1)*T(2,e),o=0));e>=8;a[f++]=255&r,r/=256,e-=8);for(o=o<<e|r,s+=e;s>0;a[f++]=255&o,o/=256,s-=8);return a[--f]|=128*d,a}function M(t,e,n){var o,r=8*n-e-1,i=(1<<r)-1,a=i>>1,s=r-7,c=n-1,l=t[c--],u=127&l;for(l>>=7;s>0;u=256*u+t[c],c--,s-=8);for(o=u&(1<<-s)-1,u>>=-s,s+=e;s>0;o=256*o+t[c],c--,s-=8);if(0===u)u=1-a;else{if(u===i)return o?NaN:l?-S:S;o+=T(2,e),u-=a}return(l?-1:1)*o*T(2,u-e)}function L(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function A(t){return[255&t]}function P(t){return[255&t,t>>8&255]}function D(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function j(t){return R(t,52,8)}function F(t){return R(t,23,4)}function U(t,e,n){v(t.prototype,e,{get:function(){return this[n]}})}function H(t,e,n,o){var r=p(+n);if(r+e>t[I])throw x("Wrong index!");var i=t[O]._b,a=r+t[N],s=i.slice(a,a+e);return o?s:s.reverse()}function z(t,e,n,o,r,i){var a=p(+n);if(a+e>t[I])throw x("Wrong index!");for(var s=t[O]._b,c=a+t[N],l=o(+r),u=0;u<e;u++)s[c+u]=l[i?u:e-u-1]}if(a.ABV){if(!l((function(){b(1)}))||!l((function(){new b(-1)}))||l((function(){return new b,new b(1.5),new b(NaN),"ArrayBuffer"!=b.name}))){for(var W,G=(b=function(t){return u(this,b),new w(p(t))}).prototype=w.prototype,X=h(w),V=0;X.length>V;)(W=X[V++])in b||s(b,W,w[W]);i||(G.constructor=b)}var Y=new m(new b(2)),K=m.prototype.setInt8;Y.setInt8(0,2147483648),Y.setInt8(1,2147483649),!Y.getInt8(0)&&Y.getInt8(1)||c(m.prototype,{setInt8:function(t,e){K.call(this,t,e<<24>>24)},setUint8:function(t,e){K.call(this,t,e<<24>>24)}},!0)}else b=function(t){u(this,b,"ArrayBuffer");var e=p(t);this._b=y.call(new Array(e),0),this[I]=e},m=function(t,e,n){u(this,m,"DataView"),u(t,b,"DataView");var o=t[I],r=f(e);if(r<0||r>o)throw x("Wrong offset!");if(r+(n=void 0===n?o-r:d(n))>o)throw x("Wrong length!");this[O]=t,this[N]=r,this[I]=n},r&&(U(b,"byteLength","_l"),U(m,"buffer","_b"),U(m,"byteLength","_l"),U(m,"byteOffset","_o")),c(m.prototype,{getInt8:function(t){return H(this,1,t)[0]<<24>>24},getUint8:function(t){return H(this,1,t)[0]},getInt16:function(t){var e=H(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=H(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return L(H(this,4,t,arguments[1]))},getUint32:function(t){return L(H(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return M(H(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return M(H(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){z(this,1,t,A,e)},setUint8:function(t,e){z(this,1,t,A,e)},setInt16:function(t,e){z(this,2,t,P,e,arguments[2])},setUint16:function(t,e){z(this,2,t,P,e,arguments[2])},setInt32:function(t,e){z(this,4,t,D,e,arguments[2])},setUint32:function(t,e){z(this,4,t,D,e,arguments[2])},setFloat32:function(t,e){z(this,4,t,F,e,arguments[2])},setFloat64:function(t,e){z(this,8,t,j,e,arguments[2])}});g(b,"ArrayBuffer"),g(m,"DataView"),s(m.prototype,a.VIEW,!0),e.ArrayBuffer=b,e.DataView=m},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e,n){t.exports=!n(18)&&!n(10)((function(){return 7!=Object.defineProperty(n(83)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(9),r=n(17),i=n(44),a=n(84),s=n(19).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){var o=n(26),r=n(28),i=n(69)(!1),a=n(85)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),c=0,l=[];for(n in s)n!=a&&o(s,n)&&l.push(n);for(;e.length>c;)o(s,n=e[c++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){var o=n(19),r=n(11),i=n(45);t.exports=n(18)?Object.defineProperties:function(t,e){r(t);for(var n,a=i(e),s=a.length,c=0;s>c;)o.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var o=n(28),r=n(48).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return r(t)}catch(t){return a.slice()}}(t):r(o(t))}},function(t,e,n){"use strict";var o=n(18),r=n(45),i=n(70),a=n(63),s=n(20),c=n(62),l=Object.assign;t.exports=!l||n(10)((function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=l({},t)[n]||Object.keys(l({},e)).join("")!=o}))?function(t,e){for(var n=s(t),l=arguments.length,u=1,f=i.f,d=a.f;l>u;)for(var p,h=c(arguments[u++]),v=f?r(h).concat(f(h)):r(h),y=v.length,g=0;y>g;)p=v[g++],o&&!d.call(h,p)||(n[p]=h[p]);return n}:l},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){"use strict";var o=n(31),r=n(12),i=n(117),a=[].slice,s={},c=function(t,e,n){if(!(e in s)){for(var o=[],r=0;r<e;r++)o[r]="a["+r+"]";s[e]=Function("F,a","return new F("+o.join(",")+")")}return s[e](t,n)};t.exports=Function.bind||function(t){var e=o(this),n=a.call(arguments,1),s=function(){var o=n.concat(a.call(arguments));return this instanceof s?c(e,o.length,o):i(e,o,t)};return r(e.prototype)&&(s.prototype=e.prototype),s}},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var o=n(9).parseInt,r=n(54).trim,i=n(89),a=/^[-+]?0[xX]/;t.exports=8!==o(i+"08")||22!==o(i+"0x16")?function(t,e){var n=r(String(t),3);return o(n,e>>>0||(a.test(n)?16:10))}:o},function(t,e,n){var o=n(9).parseFloat,r=n(54).trim;t.exports=1/o(n(89)+"-0")!=-1/0?function(t){var e=r(String(t),3),n=o(e);return 0===n&&"-"==e.charAt(0)?-0:n}:o},function(t,e,n){var o=n(36);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=o(t))throw TypeError(e);return+t}},function(t,e,n){var o=n(12),r=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&r(t)===t}},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,e,n){"use strict";var o=n(47),r=n(42),i=n(53),a={};n(27)(a,n(14)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(a,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var o=n(11);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},function(t,e,n){var o=n(278);t.exports=function(t,e){return new(o(t))(e)}},function(t,e,n){var o=n(31),r=n(20),i=n(62),a=n(16);t.exports=function(t,e,n,s,c){o(e);var l=r(t),u=i(l),f=a(l.length),d=c?f-1:0,p=c?-1:1;if(n<2)for(;;){if(d in u){s=u[d],d+=p;break}if(d+=p,c?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;c?d>=0:f>d;d+=p)d in u&&(s=e(s,u[d],d,l));return s}},function(t,e,n){"use strict";var o=n(20),r=n(46),i=n(16);t.exports=[].copyWithin||function(t,e){var n=o(this),a=i(n.length),s=r(t,a),c=r(e,a),l=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===l?a:r(l,a))-c,a-s),f=1;for(c<s&&s<c+u&&(f=-1,c+=u-1,s+=u-1);u-- >0;)c in n?n[s]=n[c]:delete n[s],s+=f,c+=f;return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var o=n(104);n(0)({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},function(t,e,n){n(18)&&"g"!=/./g.flags&&n(19).f(RegExp.prototype,"flags",{configurable:!0,get:n(73)})},function(t,e,n){"use strict";var o,r,i,a,s=n(44),c=n(9),l=n(30),u=n(64),f=n(0),d=n(12),p=n(31),h=n(57),v=n(76),y=n(65),g=n(106).set,b=n(298)(),m=n(132),k=n(299),x=n(77),S=n(133),w=c.TypeError,E=c.process,T=E&&E.versions,C=T&&T.v8||"",B=c.Promise,_="process"==u(E),O=function(){},I=r=m.f,N=!!function(){try{var t=B.resolve(1),e=(t.constructor={})[n(14)("species")]=function(t){t(O,O)};return(_||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof e&&0!==C.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},M=function(t,e){if(!t._n){t._n=!0;var n=t._c;b((function(){for(var o=t._v,r=1==t._s,i=0,a=function(e){var n,i,a,s=r?e.ok:e.fail,c=e.resolve,l=e.reject,u=e.domain;try{s?(r||(2==t._h&&P(t),t._h=1),!0===s?n=o:(u&&u.enter(),n=s(o),u&&(u.exit(),a=!0)),n===e.promise?l(w("Promise-chain cycle")):(i=R(n))?i.call(n,c,l):c(n)):l(o)}catch(t){u&&!a&&u.exit(),l(t)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&L(t)}))}},L=function(t){g.call(c,(function(){var e,n,o,r=t._v,i=A(t);if(i&&(e=k((function(){_?E.emit("unhandledRejection",r,t):(n=c.onunhandledrejection)?n({promise:t,reason:r}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",r)})),t._h=_||A(t)?2:1),t._a=void 0,i&&e.e)throw e.v}))},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},P=function(t){g.call(c,(function(){var e;_?E.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},D=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),M(e,!0))},j=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw w("Promise can't be resolved itself");(e=R(t))?b((function(){var o={_w:n,_d:!1};try{e.call(t,l(j,o,1),l(D,o,1))}catch(t){D.call(o,t)}})):(n._v=t,n._s=1,M(n,!1))}catch(t){D.call({_w:n,_d:!1},t)}}};N||(B=function(t){h(this,B,"Promise","_h"),p(t),o.call(this);try{t(l(j,this,1),l(D,this,1))}catch(t){D.call(this,t)}},(o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(58)(B.prototype,{then:function(t,e){var n=I(y(this,B));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=_?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&M(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new o;this.promise=t,this.resolve=l(j,t,1),this.reject=l(D,t,1)},m.f=I=function(t){return t===B||t===a?new i(t):r(t)}),f(f.G+f.W+f.F*!N,{Promise:B}),n(53)(B,"Promise"),n(56)("Promise"),a=n(17).Promise,f(f.S+f.F*!N,"Promise",{reject:function(t){var e=I(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!N),"Promise",{resolve:function(t){return S(s&&this===a?B:this,t)}}),f(f.S+f.F*!(N&&n(72)((function(t){B.all(t).catch(O)}))),"Promise",{all:function(t){var e=this,n=I(e),o=n.resolve,r=n.reject,i=k((function(){var n=[],i=0,a=1;v(t,!1,(function(t){var s=i++,c=!1;n.push(void 0),a++,e.resolve(t).then((function(t){c||(c=!0,n[s]=t,--a||o(n))}),r)})),--a||o(n)}));return i.e&&r(i.v),n.promise},race:function(t){var e=this,n=I(e),o=n.reject,r=k((function(){v(t,!1,(function(t){e.resolve(t).then(n.resolve,o)}))}));return r.e&&o(r.v),n.promise}})},function(t,e,n){"use strict";var o=n(31);function r(t){var e,n;this.promise=new t((function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o})),this.resolve=o(e),this.reject=o(n)}t.exports.f=function(t){return new r(t)}},function(t,e,n){var o=n(11),r=n(12),i=n(132);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var o=n(19).f,r=n(47),i=n(58),a=n(30),s=n(57),c=n(76),l=n(95),u=n(128),f=n(56),d=n(18),p=n(41).fastKey,h=n(51),v=d?"_s":"size",y=function(t,e){var n,o=p(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,o){s(t,u,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[v]=0,null!=o&&c(o,n,t[l],t)}));return i(u.prototype,{clear:function(){for(var t=h(this,e),n=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete n[o.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=h(this,e),o=y(n,t);if(o){var r=o.n,i=o.p;delete n._i[o.i],o.r=!0,i&&(i.n=r),r&&(r.p=i),n._f==o&&(n._f=r),n._l==o&&(n._l=i),n[v]--}return!!o},forEach:function(t){h(this,e);for(var n,o=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!y(h(this,e),t)}}),d&&o(u.prototype,"size",{get:function(){return h(this,e)[v]}}),u},def:function(t,e,n){var o,r,i=y(t,e);return i?i.v=n:(t._l=i={i:r=p(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=i),o&&(o.n=i),t[v]++,"F"!==r&&(t._i[r]=i)),t},getEntry:y,setStrong:function(t,e,n){l(t,e,(function(t,n){this._t=h(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),f(e)}}},function(t,e,n){"use strict";var o=n(58),r=n(41).getWeak,i=n(11),a=n(12),s=n(57),c=n(76),l=n(35),u=n(26),f=n(51),d=l(5),p=l(6),h=0,v=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},g=function(t,e){return d(t.a,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=g(this,t);if(e)return e[1]},has:function(t){return!!g(this,t)},set:function(t,e){var n=g(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=p(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,i){var l=t((function(t,o){s(t,l,e,"_i"),t._t=e,t._i=h++,t._l=void 0,null!=o&&c(o,n,t[i],t)}));return o(l.prototype,{delete:function(t){if(!a(t))return!1;var n=r(t);return!0===n?v(f(this,e)).delete(t):n&&u(n,this._i)&&delete n[this._i]},has:function(t){if(!a(t))return!1;var n=r(t);return!0===n?v(f(this,e)).has(t):n&&u(n,this._i)}}),l},def:function(t,e,n){var o=r(i(e),!0);return!0===o?v(t).set(e,n):o[t._i]=n,t},ufstore:v}},function(t,e,n){var o=n(32),r=n(16);t.exports=function(t){if(void 0===t)return 0;var e=o(t),n=r(e);if(e!==n)throw RangeError("Wrong length!");return n}},function(t,e,n){var o=n(48),r=n(70),i=n(11),a=n(9).Reflect;t.exports=a&&a.ownKeys||function(t){var e=o.f(i(t)),n=r.f;return n?e.concat(n(t)):e}},function(t,e,n){var o=n(16),r=n(91),i=n(37);t.exports=function(t,e,n,a){var s=String(i(t)),c=s.length,l=void 0===n?" ":String(n),u=o(e);if(u<=c||""==l)return s;var f=u-c,d=r.call(l,Math.ceil(f/l.length));return d.length>f&&(d=d.slice(0,f)),a?d+s:s+d}},function(t,e,n){var o=n(18),r=n(45),i=n(28),a=n(63).f;t.exports=function(t){return function(e){for(var n,s=i(e),c=r(s),l=c.length,u=0,f=[];l>u;)n=c[u++],o&&!a.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}}},function(t,e,n){var o=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,n,o){var r=e&&e.prototype instanceof u?e:u,i=Object.create(r.prototype),a=new S(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return E()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=m(a,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var u=c(t,e,n);if("normal"===u.type){if(o=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function u(){}function f(){}function d(){}var p={};p[r]=function(){return this};var h=Object.getPrototypeOf,v=h&&h(h(w([])));v&&v!==e&&n.call(v,r)&&(p=v);var y=d.prototype=u.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(t,e){var o;this._invoke=function(r,i){function a(){return new e((function(o,a){!function o(r,i,a,s){var l=c(t[r],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(l.arg)}(r,i,o,a)}))}return o=o?o.then(a,a):a()}}function m(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,m(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var o=c(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,l;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function w(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=y.constructor=d,d.constructor=f,d[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new b(s(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),y[a]="Generator",y[r]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=w,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:w(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}},function(t,e,n){var o=n(142);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},function(t){t.exports=JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}')},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(5),n(6),n(4),n(369)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a){"use strict";var s=n(1);function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.CriticalError=void 0,e=s(e),o=s(o),r=s(r),i=s(i);var l=function(t){(0,o.default)(s,t);var n,a=(n=s,function(){var t,e=(0,i.default)(n);if(c()){var o=(0,i.default)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return(0,r.default)(this,t)});function s(){return(0,e.default)(this,s),a.apply(this,arguments)}return s}((0,(a=s(a)).default)(Error));t.CriticalError=l,l.displayName="CriticalError"})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(8),n(146),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f){"use strict";var d=n(13),p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=d(l),u=p(u);var v=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(h()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).insert=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.config.defaultBlock,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3?arguments[3]:void 0),r=arguments.length>4?arguments[4]:void 0;t.Editor.BlockManager.insert({tool:e,data:n,index:o,needToFocus:r})},t}return(0,i.default)(o,[{key:"getBlocksCount",value:function(){return this.Editor.BlockManager.blocks.length}},{key:"getCurrentBlockIndex",value:function(){return this.Editor.BlockManager.currentBlockIndex}},{key:"getBlockByIndex",value:function(t){var e=this.Editor.BlockManager.getBlockByIndex(t);if(void 0!==e)return new u.default(e);l.logLabeled("There is no block at index `"+t+"`","warn")}},{key:"swap",value:function(t,e){l.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead","info"),this.Editor.BlockManager.swap(t,e),this.Editor.Toolbar.move(!1)}},{key:"move",value:function(t,e){this.Editor.BlockManager.move(t,e),this.Editor.Toolbar.move(!1)}},{key:"delete",value:function(t){try{this.Editor.BlockManager.removeBlock(t)}catch(t){return void l.logLabeled(t,"warn")}0===this.Editor.BlockManager.blocks.length&&this.Editor.BlockManager.insert(),this.Editor.BlockManager.currentBlock&&this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END),this.Editor.Toolbar.close()}},{key:"clear",value:function(){this.Editor.BlockManager.clear(!0),this.Editor.InlineToolbar.close()}},{key:"render",value:function(t){return this.Editor.BlockManager.clear(),this.Editor.Renderer.render(t.blocks)}},{key:"renderFromHTML",value:function(t){return this.Editor.BlockManager.clear(),this.Editor.Paste.processText(t,!0)}},{key:"stretchBlock",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.deprecationAssert(!0,"blocks.stretchBlock()","BlockAPI");var n=this.Editor.BlockManager.getBlockByIndex(t);n&&(n.stretched=e)}},{key:"insertNewBlock",value:function(){l.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.","warn"),this.insert()}},{key:"methods",get:function(){var t=this;return{clear:function(){return t.clear()},render:function(e){return t.render(e)},renderFromHTML:function(e){return t.renderFromHTML(e)},delete:function(e){return t.delete(e)},swap:function(e,n){return t.swap(e,n)},move:function(e,n){return t.move(e,n)},getBlockByIndex:function(e){return t.getBlockByIndex(e)},getCurrentBlockIndex:function(){return t.getCurrentBlockIndex()},getBlocksCount:function(){return t.getBlocksCount()},stretchBlock:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.stretchBlock(e,n)},insertNewBlock:function(){return t.insertNewBlock()},insert:this.insert}}}]),o}((f=p(f)).default);o.default=v,v.displayName="BlocksAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e],void 0===(i="function"==typeof(o=function(n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(t){var e={get name(){return t.name},get config(){return t.config},get holder(){return t.holder},get isEmpty(){return t.isEmpty},get selected(){return t.selected},set stretched(e){t.stretched=e},get stretched(){return t.stretched},call:function(e,n){return t.call(e,n)},save:function(){return t.save()},validate:function(e){return t.validate(e)}};Object.setPrototypeOf(this,e)};n.default=o,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).setToFirstBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.firstBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock,e,n),!0)},t.setToLastBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.lastBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock,e,n),!0)},t.setToPreviousBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.previousBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock,e,n),!0)},t.setToNextBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.nextBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock,e,n),!0)},t.setToBlock=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.Editor.Caret.positions.DEFAULT,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!!t.Editor.BlockManager.blocks[e]&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e],n,o),!0)},t.focus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?t.setToLastBlock(t.Editor.Caret.positions.END):t.setToFirstBlock(t.Editor.Caret.positions.START)},t}return(0,i.default)(o,[{key:"methods",get:function(){return{setToFirstBlock:this.setToFirstBlock,setToLastBlock:this.setToLastBlock,setToPreviousBlock:this.setToPreviousBlock,setToNextBlock:this.setToNextBlock,setToBlock:this.setToBlock,focus:this.focus}}}]),o}((l=u(l)).default);o.default=d,d.displayName="CaretAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"on",value:function(t,e){this.Editor.Events.on(t,e)}},{key:"emit",value:function(t,e){this.Editor.Events.emit(t,e)}},{key:"off",value:function(t,e){this.Editor.Events.off(t,e)}},{key:"methods",get:function(){var t=this;return{emit:function(e,n){return t.emit(e,n)},off:function(e,n){return t.off(e,n)},on:function(e,n){return t.on(e,n)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="EventsAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(59),n(67),n(8),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l);var v=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(h()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"getMethodsForTool",value:function(t,e){return Object.assign(this.methods,{t:function(n){return l.default.t(o.getNamespace(t,e),n)}})}},{key:"methods",get:function(){return{t:function(){(0,f.logLabeled)("I18n.t() method can be accessed only from Tools","warn")}}}}],[{key:"getNamespace",value:function(t,e){switch(e){case u.ToolType.Block:case u.ToolType.Inline:return"tools.".concat(t);case u.ToolType.Tune:return"blockTunes.".concat(t)}}}]),o}((d=p(d)).default);o.default=v,v.displayName="I18nAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"open",value:function(){this.Editor.InlineToolbar.tryToShow()}},{key:"close",value:function(){this.Editor.InlineToolbar.close()}},{key:"methods",get:function(){var t=this;return{close:function(){return t.close()},open:function(){return t.open()}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="InlineToolbarAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"on",value:function(t,e,n,o){this.Editor.Listeners.on(t,e,n,o)}},{key:"off",value:function(t,e,n,o){this.Editor.Listeners.off(t,e,n,o)}},{key:"methods",get:function(){var t=this;return{on:function(e,n,o,r){return t.on(e,n,o,r)},off:function(e,n,o,r){return t.off(e,n,o,r)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="ListenersAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"show",value:function(t){return this.Editor.Notifier.show(t)}},{key:"methods",get:function(){var t=this;return{show:function(e){return t.show(e)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="NotifierAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"toggle",value:function(t){return this.Editor.ReadOnly.toggle(t)}},{key:"methods",get:function(){var t=this;return{toggle:function(e){return t.toggle(e)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="ReadOnlyAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"clean",value:function(t,e){return this.Editor.Sanitizer.clean(t,e)}},{key:"methods",get:function(){var t=this;return{clean:function(e,n){return t.clean(e,n)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="SanitizerAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(8),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(13),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),c=d(c),l=f(l);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(p()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"save",value:function(){var t="Editor's content can not be saved in read-only mode";return this.Editor.ReadOnly.isEnabled?(l.logLabeled(t,"warn"),Promise.reject(new Error(t))):this.Editor.Saver.save()}},{key:"methods",get:function(){var t=this;return{save:function(){return t.save()}}}}]),o}((u=d(u)).default);o.default=h,h.displayName="SaverAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(25),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"findParentTag",value:function(t,e){return(new l.default).findParentTag(t,e)}},{key:"expandToTag",value:function(t){(new l.default).expandToTag(t)}},{key:"methods",get:function(){var t=this;return{findParentTag:function(e,n){return t.findParentTag(e,n)},expandToTag:function(e){return t.expandToTag(e)}}}}]),o}((u=f(u)).default);o.default=p,p.displayName="SelectionAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"classes",get:function(){return{block:"cdx-block",inlineToolButton:"ce-inline-tool",inlineToolButtonActive:"ce-inline-tool--active",input:"cdx-input",loader:"cdx-loader",button:"cdx-button",settingsButton:"cdx-settings-button",settingsButtonActive:"cdx-settings-button--active"}}}]),o}((l=u(l)).default);o.default=d,d.displayName="StylesAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"open",value:function(){this.Editor.Toolbar.open()}},{key:"close",value:function(){this.Editor.Toolbar.close()}},{key:"methods",get:function(){var t=this;return{close:function(){return t.close()},open:function(){return t.open()}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="ToolbarAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"show",value:function(t,e,n){this.Editor.Tooltip.show(t,e,n)}},{key:"hide",value:function(){this.Editor.Tooltip.hide()}},{key:"onHover",value:function(t,e,n){this.Editor.Tooltip.onHover(t,e,n)}},{key:"methods",get:function(){var t=this;return{show:function(e,n,o){return t.show(e,n,o)},hide:function(){return t.hide()},onHover:function(e,n,o){return t.onHover(e,n,o)}}}}]),o}((l=u(l)).default);o.default=d,d.displayName="TooltipAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(25),n(60)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(13),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=p(u),f=h(f),d=h(d);var y=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(v()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"keydown",value:function(t){switch(this.beforeKeydownProcessing(t),t.keyCode){case u.keyCodes.BACKSPACE:this.backspace(t);break;case u.keyCodes.ENTER:this.enter(t);break;case u.keyCodes.DOWN:case u.keyCodes.RIGHT:this.arrowRightAndDown(t);break;case u.keyCodes.UP:case u.keyCodes.LEFT:this.arrowLeftAndUp(t);break;case u.keyCodes.TAB:this.tabPressed(t)}}},{key:"beforeKeydownProcessing",value:function(t){this.needToolbarClosing(t)&&u.isPrintableKey(t.keyCode)&&(this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close(),t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||(this.Editor.BlockManager.clearFocused(),this.Editor.BlockSelection.clearSelection(t)))}},{key:"keyup",value:function(t){t.shiftKey||this.Editor.UI.checkEmptiness()}},{key:"tabPressed",value:function(t){this.Editor.BlockSelection.clearSelection(t);var e=this.Editor,n=e.BlockManager,o=e.Tools,r=e.InlineToolbar,i=e.ConversionToolbar,a=n.currentBlock;if(a){var s=o.isDefault(a.tool)&&a.isEmpty,c=!a.isEmpty&&i.opened,l=!a.isEmpty&&!f.default.isCollapsed&&r.opened;s?this.activateToolbox():c||l||this.activateBlockSettings()}}},{key:"dragOver",value:function(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!0}},{key:"dragLeave",value:function(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!1}},{key:"handleCommandC",value:function(t){var e=this.Editor.BlockSelection;e.anyBlockSelected&&e.copySelectedBlocks(t)}},{key:"handleCommandX",value:function(t){var e=this.Editor,n=e.BlockSelection,o=e.BlockManager,r=e.Caret;if(n.anyBlockSelected){n.copySelectedBlocks(t);var i=o.removeSelectedBlocks();r.setToBlock(o.insertDefaultBlockAtIndex(i,!0),r.positions.START),n.clearSelection(t)}}},{key:"enter",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.Tools,r=e.UI,i=n.currentBlock,a=o.available[i.name];if(!(a&&a[o.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS]||r.someToolbarOpened&&r.someFlipperButtonFocused||t.shiftKey)){var s=this.Editor.BlockManager.currentBlock;this.Editor.Caret.isAtStart&&!this.Editor.BlockManager.currentBlock.hasMedia?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex):s=this.Editor.BlockManager.split(),this.Editor.Caret.setToBlock(s),this.Editor.Tools.isDefault(s.tool)&&s.isEmpty&&(this.Editor.Toolbar.open(!1),this.Editor.Toolbar.plusButton.show()),t.preventDefault()}}},{key:"backspace",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret,i=n.currentBlock,a=this.Editor.Tools.available[i.name];if(i.selected||i.isEmpty&&i.currentInput===i.firstInput){t.preventDefault();var s=n.currentBlockIndex;return n.previousBlock&&0===n.previousBlock.inputs.length?n.removeBlock(s-1):n.removeBlock(),r.setToBlock(n.currentBlock,s?r.positions.END:r.positions.START),this.Editor.Toolbar.close(),void o.clearSelection(t)}if(!a||!a[this.Editor.Tools.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS]||r.isAtStart){var c=0===n.currentBlockIndex;r.isAtStart&&f.default.isCollapsed&&i.currentInput===i.firstInput&&!c&&(t.preventDefault(),this.mergeBlocks())}}},{key:"mergeBlocks",value:function(){var t=this.Editor,e=t.BlockManager,n=t.Caret,o=t.Toolbar,r=e.previousBlock,i=e.currentBlock;if(i.name!==r.name||!r.mergeable)return 0===r.inputs.length||r.isEmpty?(e.removeBlock(e.currentBlockIndex-1),n.setToBlock(e.currentBlock),void o.close()):void(n.navigatePrevious()&&o.close());n.createShadow(r.pluginsContent),e.mergeBlocks(r,i).then((function(){n.restoreCaret(r.pluginsContent),r.pluginsContent.normalize(),o.close()}))}},{key:"arrowRightAndDown",value:function(t){var e=this,n=d.default.usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===u.keyCodes.TAB);if(!this.Editor.UI.someToolbarOpened||!n){this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var o=this.Editor.Caret.isAtEnd||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===u.keyCodes.DOWN&&o?this.Editor.CrossBlockSelection.toggleBlockSelectedState():((t.keyCode===u.keyCodes.DOWN||t.keyCode===u.keyCodes.RIGHT&&!this.isRtl?this.Editor.Caret.navigateNext():this.Editor.Caret.navigatePrevious())?t.preventDefault():u.delay((function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(t))}}},{key:"arrowLeftAndUp",value:function(t){var e=this;if(this.Editor.UI.someToolbarOpened){if(d.default.usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===u.keyCodes.TAB))return;this.Editor.UI.closeAllToolbars()}this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var n=this.Editor.Caret.isAtStart||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===u.keyCodes.UP&&n?this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1):((t.keyCode===u.keyCodes.UP||t.keyCode===u.keyCodes.LEFT&&!this.isRtl?this.Editor.Caret.navigatePrevious():this.Editor.Caret.navigateNext())?t.preventDefault():u.delay((function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(t))}},{key:"needToolbarClosing",value:function(t){var e=t.keyCode===u.keyCodes.ENTER&&this.Editor.Toolbox.opened,n=t.keyCode===u.keyCodes.ENTER&&this.Editor.BlockSettings.opened,o=t.keyCode===u.keyCodes.ENTER&&this.Editor.InlineToolbar.opened,r=t.keyCode===u.keyCodes.ENTER&&this.Editor.ConversionToolbar.opened,i=t.keyCode===u.keyCodes.TAB;return!(t.shiftKey||i||e||n||o||r)}},{key:"activateToolbox",value:function(){this.Editor.Toolbar.opened||(this.Editor.Toolbar.open(!1,!1),this.Editor.Toolbar.plusButton.show()),this.Editor.Toolbox.open()}},{key:"activateBlockSettings",value:function(){this.Editor.Toolbar.opened||(this.Editor.BlockManager.currentBlock.focused=!0,this.Editor.Toolbar.open(!0,!1),this.Editor.Toolbar.plusButton.hide()),this.Editor.BlockSettings.opened||this.Editor.BlockSettings.open()}}]),o}(l.default);o.default=y,y.displayName="BlockEvents",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(61),n(7),n(15),n(8),n(383)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v){"use strict";var y=n(13),g=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),c=g(c),l=g(l),u=g(u),f=y(f),d=g(d),p=g(p),h=y(h),v=g(v);var m=function(t){(0,c.default)(y,t);var e,n,o,d=(e=y,function(){var t,n=(0,u.default)(e);if(b()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function y(){var t;return(0,a.default)(this,y),(t=d.apply(this,arguments))._currentBlockIndex=-1,t._blocks=null,t}return(0,s.default)(y,[{key:"prepare",value:function(){var t=this,e=new v.default(this.Editor.UI.nodes.redactor);this._blocks=new Proxy(e,{set:v.default.set,get:v.default.get}),this.Editor.Listeners.on(document,"copy",(function(e){return t.Editor.BlockEvents.handleCommandC(e)}))}},{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"composeBlock",value:function(t){var e=t.tool,n=t.data,o=void 0===n?{}:n,r=this.Editor.ReadOnly.isEnabled,i=this.Editor.Tools.getToolSettings(e),a=this.Editor.Tools.available[e],s=new f.default({name:e,data:o,Tool:a,settings:i,api:this.Editor.API,readOnly:r});return r||this.bindBlockEvents(s),s}},{key:"insert",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.tool,n=void 0===e?this.config.defaultBlock:e,o=t.data,r=void 0===o?{}:o,i=t.index,a=t.needToFocus,s=void 0===a||a,c=t.replace,l=void 0!==c&&c,u=i;void 0===u&&(u=this.currentBlockIndex+(l?0:1));var f=this.composeBlock({tool:n,data:r});return this._blocks.insert(u,f,l),s?this.currentBlockIndex=u:u<=this.currentBlockIndex&&this.currentBlockIndex++,f}},{key:"replace",value:function(t){var e=t.tool,n=void 0===e?this.config.defaultBlock:e,o=t.data,r=void 0===o?{}:o;return this.insert({tool:n,data:r,index:this.currentBlockIndex,replace:!0})}},{key:"paste",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.insert({tool:t,replace:n});try{o.call(f.BlockToolAPI.ON_PASTE,e)}catch(e){h.log("".concat(t,": onPaste callback call is failed"),"error",e)}return o}},{key:"insertDefaultBlockAtIndex",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.composeBlock({tool:this.config.defaultBlock});return this._blocks[t]=n,e?this.currentBlockIndex=t:t<=this.currentBlockIndex&&this.currentBlockIndex++,n}},{key:"insertAtEnd",value:function(){return this.currentBlockIndex=this.blocks.length-1,this.insert()}},{key:"mergeBlocks",value:(o=(0,i.default)(r.default.mark((function t(e,n){var o,i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=this._blocks.indexOf(n),!n.isEmpty){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,n.data;case 5:if(i=t.sent,h.isEmpty(i)){t.next=9;break}return t.next=9,e.mergeWith(i);case 9:this.removeBlock(o),this.currentBlockIndex=this._blocks.indexOf(e);case 11:case"end":return t.stop()}}),t,this)}))),function(t,e){return o.apply(this,arguments)})},{key:"removeBlock",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentBlockIndex;if(!this.validateIndex(t))throw new Error("Can't find a Block to remove");this._blocks.remove(t),this.currentBlockIndex>=t&&this.currentBlockIndex--,this.blocks.length?0===t&&(this.currentBlockIndex=0):(this.currentBlockIndex=-1,this.insert())}},{key:"removeSelectedBlocks",value:function(){for(var t,e=this.blocks.length-1;e>=0;e--)this.blocks[e].selected&&(this.removeBlock(e),t=e);return t}},{key:"removeAllBlocks",value:function(){for(var t=this.blocks.length-1;t>=0;t--)this._blocks.remove(t);this.currentBlockIndex=-1,this.insert(),this.currentBlock.firstInput.focus()}},{key:"split",value:function(){var t=this.Editor.Caret.extractFragmentFromCaretPosition(),e=p.default.make("div");e.appendChild(t);var n={text:p.default.isEmpty(e)?"":e.innerHTML};return this.insert({data:n})}},{key:"getBlockByIndex",value:function(t){return this._blocks[t]}},{key:"getBlock",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=this._blocks.nodes,n=t.closest(".".concat(f.default.CSS.wrapper)),o=e.indexOf(n);if(o>=0)return this._blocks[o]}},{key:"highlightCurrentNode",value:function(){this.clearFocused(),this.currentBlock.focused=!0}},{key:"clearFocused",value:function(){this.blocks.forEach((function(t){t.focused=!1}))}},{key:"setCurrentBlockByChildNode",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(f.default.CSS.wrapper));if(e)return this.currentBlockIndex=this._blocks.nodes.indexOf(e),this.currentBlock.updateCurrentInput(),this.currentBlock;throw new Error("Can not find a Block from this child Node")}},{key:"getBlockByChildNode",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(f.default.CSS.wrapper));return this.blocks.find((function(t){return t.holder===e}))}},{key:"swap",value:function(t,e){this._blocks.swap(t,e),this.currentBlockIndex=e}},{key:"move",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentBlockIndex;isNaN(t)||isNaN(e)?h.log("Warning during 'move' call: incorrect indices provided.","warn"):this.validateIndex(t)&&this.validateIndex(e)?(this._blocks.move(t,e),this.currentBlockIndex=t):h.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.","warn")}},{key:"dropPointer",value:function(){this.currentBlockIndex=-1,this.clearFocused()}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._blocks.removeAll(),this.dropPointer(),t&&this.insert(),this.Editor.UI.checkEmptiness()}},{key:"destroy",value:(n=(0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(this.blocks.map((function(t){if(h.isFunction(t.tool.destroy))return t.tool.destroy()})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"bindBlockEvents",value:function(t){var e=this.Editor.BlockEvents;this.readOnlyMutableListeners.on(t.holder,"keydown",(function(t){e.keydown(t)}),!0),this.readOnlyMutableListeners.on(t.holder,"keyup",(function(t){e.keyup(t)})),this.readOnlyMutableListeners.on(t.holder,"dragover",(function(t){e.dragOver(t)})),this.readOnlyMutableListeners.on(t.holder,"dragleave",(function(t){e.dragLeave(t)}))}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(document,"cut",(function(e){return t.Editor.BlockEvents.handleCommandX(e)})),this.blocks.forEach((function(e){t.bindBlockEvents(e)}))}},{key:"validateIndex",value:function(t){return!(t<0||t>=this._blocks.length)}},{key:"currentBlockIndex",get:function(){return this._currentBlockIndex},set:function(t){this._blocks[this._currentBlockIndex]&&this._blocks[this._currentBlockIndex].willUnselect(),this._blocks[t]&&this._blocks[t].willSelect(),this._currentBlockIndex=t}},{key:"firstBlock",get:function(){return this._blocks[0]}},{key:"lastBlock",get:function(){return this._blocks[this._blocks.length-1]}},{key:"currentBlock",get:function(){return this._blocks[this.currentBlockIndex]}},{key:"nextBlock",get:function(){return this.currentBlockIndex===this._blocks.length-1?null:this._blocks[this.currentBlockIndex+1]}},{key:"nextContentfulBlock",get:function(){return this.blocks.slice(this.currentBlockIndex+1).find((function(t){return!!t.inputs.length}))}},{key:"previousContentfulBlock",get:function(){return this.blocks.slice(0,this.currentBlockIndex).reverse().find((function(t){return!!t.inputs.length}))}},{key:"previousBlock",get:function(){return 0===this.currentBlockIndex?null:this._blocks[this.currentBlockIndex-1]}},{key:"blocks",get:function(){return this._blocks.array}},{key:"isEditorEmpty",get:function(){return this.blocks.every((function(t){return t.isEmpty}))}}]),y}(d.default);o.default=m,m.displayName="BlockManager",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(15),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h){"use strict";var v=n(13),y=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=y(r),i=y(i),a=y(a),s=y(s),c=y(c),l=y(l),u=y(u),f=y(f),d=v(d),p=y(p),h=y(h);var b=function(t){(0,c.default)(f,t);var e,n,o=(e=f,function(){var t,n=(0,u.default)(e);if(g()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function f(){var t;return(0,a.default)(this,f),(t=o.apply(this,arguments)).anyBlockSelectedCache=null,t.needToSelectAll=!1,t.nativeInputSelected=!1,t.readyToBlockSelection=!1,t}return(0,s.default)(f,[{key:"prepare",value:function(){var t=this,e=this.Editor.Shortcuts;this.selection=new h.default,e.add({name:"CMD+A",handler:function(e){var n=t.Editor,o=n.BlockManager;if(n.ReadOnly.isEnabled)return e.preventDefault(),void t.selectAllBlocks();o.currentBlock&&t.handleCommandA(e)}})}},{key:"toggleReadOnly",value:function(t){h.default.get().removeAllRanges(),this.allBlocksSelected=!1}},{key:"unSelectBlockByIndex",value:function(t){var e=this.Editor.BlockManager;(isNaN(t)?e.currentBlock:e.getBlockByIndex(t)).selected=!1,this.clearCache()}},{key:"clearSelection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.Editor,o=n.BlockManager,r=n.Caret,i=n.RectangleSelection;this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1;var a=t&&t instanceof KeyboardEvent,s=a&&d.isPrintableKey(t.keyCode);if(this.anyBlockSelected&&a&&s&&!h.default.isSelectionExists){var c=o.removeSelectedBlocks();o.insertDefaultBlockAtIndex(c,!0),r.setToBlock(o.currentBlock),d.delay((function(){var e=t.key;r.insertContentAtCaretPosition(e.length>1?"":e)}),20)()}this.Editor.CrossBlockSelection.clear(t),this.anyBlockSelected&&!i.isRectActivated()?(e&&this.selection.restore(),this.allBlocksSelected=!1):this.Editor.RectangleSelection.clearSelection()}},{key:"copySelectedBlocks",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=p.default.make("div"),this.selectedBlocks.forEach((function(t){var e=s.Editor.Sanitizer.clean(t.holder.innerHTML,s.sanitizerConfig),o=p.default.make("p");o.innerHTML=e,n.appendChild(o)})),t.next=5,Promise.all(this.selectedBlocks.map((function(t){return t.save()})));case 5:o=t.sent,i=Array.from(n.childNodes).map((function(t){return t.textContent})).join("\n\n"),a=n.innerHTML,e.clipboardData.setData("text/plain",i),e.clipboardData.setData("text/html",a),e.clipboardData.setData(this.Editor.Paste.MIME_TYPE,JSON.stringify(o));case 11:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"selectBlockByIndex",value:function(t){var e,n=this.Editor.BlockManager;n.clearFocused(),e=isNaN(t)?n.currentBlock:n.getBlockByIndex(t),this.selection.save(),h.default.get().removeAllRanges(),e.selected=!0,this.clearCache(),this.Editor.InlineToolbar.close()}},{key:"clearCache",value:function(){this.anyBlockSelectedCache=null}},{key:"destroy",value:function(){this.Editor.Shortcuts.remove("CMD+A")}},{key:"handleCommandA",value:function(t){if(this.Editor.RectangleSelection.clearSelection(),!p.default.isNativeInput(t.target)||this.readyToBlockSelection){var e=this.Editor.BlockManager.getBlock(t.target).inputs;e.length>1&&!this.readyToBlockSelection?this.readyToBlockSelection=!0:1!==e.length||this.needToSelectAll?this.needToSelectAll?(t.preventDefault(),this.selectAllBlocks(),this.needToSelectAll=!1,this.readyToBlockSelection=!1,this.Editor.ConversionToolbar.close()):this.readyToBlockSelection&&(t.preventDefault(),this.selectBlockByIndex(),this.needToSelectAll=!0):this.needToSelectAll=!0}else this.readyToBlockSelection=!0}},{key:"selectAllBlocks",value:function(){this.selection.save(),h.default.get().removeAllRanges(),this.allBlocksSelected=!0,this.Editor.InlineToolbar.close()}},{key:"sanitizerConfig",get:function(){return{p:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},ol:{},ul:{},li:{},br:!0,img:{src:!0,width:!0,height:!0},a:{href:!0},b:{},i:{},u:{}}}},{key:"allBlocksSelected",get:function(){return this.Editor.BlockManager.blocks.every((function(t){return!0===t.selected}))},set:function(t){this.Editor.BlockManager.blocks.forEach((function(e){e.selected=t})),this.clearCache()}},{key:"anyBlockSelected",get:function(){var t=this.Editor.BlockManager;return null===this.anyBlockSelectedCache&&(this.anyBlockSelectedCache=t.blocks.some((function(t){return!0===t.selected}))),this.anyBlockSelectedCache}},{key:"selectedBlocks",get:function(){return this.Editor.BlockManager.blocks.filter((function(t){return t.selected}))}}]),f}(f.default);o.default=b,b.displayName="BlockSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(25),n(7),n(15),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(13),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f),d=p(d);var y=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(v()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"setToBlock",value:function(t){var e,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this.Editor.BlockManager;switch(o){case this.positions.START:e=t.firstInput;break;case this.positions.END:e=t.lastInput;break;default:e=t.currentInput}if(e){var a=f.default.getDeepestNode(e,o===this.positions.END),s=f.default.getContentLength(a);switch(!0){case o===this.positions.START:r=0;break;case o===this.positions.END:case r>s:r=s}d.delay((function(){n.set(a,r)}),20)(),i.setCurrentBlockByChildNode(t.holder),i.currentBlock.currentInput=e}}},{key:"setToInput",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.Editor.BlockManager.currentBlock,r=f.default.getDeepestNode(t);switch(e){case this.positions.START:this.set(r,0);break;case this.positions.END:this.set(r,f.default.getContentLength(r));break;default:n&&this.set(r,n)}o.currentInput=t}},{key:"set",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=l.default.setCursor(t,e),o=n.top,r=n.bottom,i=window,a=i.innerHeight;o<0&&window.scrollBy(0,o),r>a&&window.scrollBy(0,r-a)}},{key:"setToTheLastBlock",value:function(){var t=this.Editor.BlockManager.lastBlock;if(t)if(this.Editor.Tools.isDefault(t.tool)&&t.isEmpty)this.setToBlock(t);else{var e=this.Editor.BlockManager.insertAtEnd();this.setToBlock(e)}}},{key:"extractFragmentFromCaretPosition",value:function(){var t=l.default.get();if(t.rangeCount){var e=t.getRangeAt(0),n=this.Editor.BlockManager.currentBlock.currentInput;if(e.deleteContents(),n){if(f.default.isNativeInput(n)){var o=n,r=document.createDocumentFragment(),i=o.value.substring(0,o.selectionStart),a=o.value.substring(o.selectionStart);return r.textContent=a,o.value=i,r}var s=e.cloneRange();return s.selectNodeContents(n),s.setStart(e.endContainer,e.endOffset),s.extractContents()}}}},{key:"navigateNext",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.Editor,n=e.BlockManager,o=e.Tools,r=n.currentBlock,i=n.nextContentfulBlock,a=r.nextInput,s=i;if(!s&&!a){if(o.isDefault(r.tool))return!1;s=n.insertAtEnd()}return!(!t&&!this.isAtEnd||(a?this.setToInput(a,this.positions.START):this.setToBlock(s,this.positions.START),0))}},{key:"navigatePrevious",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.Editor.BlockManager,n=e.currentBlock,o=e.previousContentfulBlock;if(!n)return!1;var r=n.previousInput;return!(!o&&!r||!t&&!this.isAtStart||(r?this.setToInput(r,this.positions.END):this.setToBlock(o,this.positions.END),0))}},{key:"createShadow",value:function(t){var e=document.createElement("span");e.classList.add(o.CSS.shadowCaret),t.insertAdjacentElement("beforeend",e)}},{key:"restoreCaret",value:function(t){var e=t.querySelector(".".concat(o.CSS.shadowCaret));e&&((new l.default).expandToTag(e),setTimeout((function(){var t=document.createRange();t.selectNode(e),t.extractContents()}),50))}},{key:"insertContentAtCaretPosition",value:function(t){var e=document.createDocumentFragment(),n=document.createElement("div"),o=l.default.get(),r=l.default.range;n.innerHTML=t,Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)})),0===e.childNodes.length&&e.appendChild(new Text(""));var i=e.lastChild;r.deleteContents(),r.insertNode(e);var a=document.createRange();a.setStart(i,i.textContent.length),o.removeAllRanges(),o.addRange(a)}},{key:"getHigherLevelSiblings",value:function(t,e){for(var n=t,o=[];n.parentNode&&"true"!==n.parentNode.contentEditable;)n=n.parentNode;for(var r="left"===e?"previousSibling":"nextSibling";n[r];)n=n[r],o.push(n);return o}},{key:"positions",get:function(){return{START:"start",END:"end",DEFAULT:"default"}}},{key:"isAtStart",get:function(){var t=l.default.get(),e=f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),n=t.focusNode;if(f.default.isNativeInput(e))return 0===e.selectionEnd;if(!t.anchorNode)return!1;var o=n.textContent.search(/\S/);-1===o&&(o=0);var r=t.focusOffset;return n.nodeType!==Node.TEXT_NODE&&n.childNodes.length&&(n.childNodes[r]?(n=n.childNodes[r],r=0):r=(n=n.childNodes[r-1]).textContent.length),!(!f.default.isLineBreakTag(e)&&!f.default.isEmpty(e)||!this.getHigherLevelSiblings(n,"left").every((function(t){var e=f.default.isLineBreakTag(t),n=1===t.children.length&&f.default.isLineBreakTag(t.children[0]),o=e||n;return f.default.isEmpty(t)&&!o}))||r!==o)||(null===e||n===e&&r<=o)}},{key:"isAtEnd",get:function(){var t=l.default.get(),e=t.focusNode,n=f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput,!0);if(f.default.isNativeInput(n))return n.selectionEnd===n.value.length;if(!t.focusNode)return!1;var o=t.focusOffset;if(e.nodeType!==Node.TEXT_NODE&&e.childNodes.length&&(e.childNodes[o-1]?o=(e=e.childNodes[o-1]).textContent.length:(e=e.childNodes[0],o=0)),f.default.isLineBreakTag(n)||f.default.isEmpty(n)){var r=this.getHigherLevelSiblings(e,"right");if(r.every((function(t,e){return e===r.length-1&&f.default.isLineBreakTag(t)||f.default.isEmpty(t)&&!f.default.isLineBreakTag(t)}))&&o===e.textContent.length)return!0}var i=n.textContent.replace(/\s+$/,"");return e===n&&o>=i.length}}],[{key:"CSS",get:function(){return{shadowCaret:"cdx-shadow-caret"}}}]),o}(u.default);o.default=y,y.displayName="Caret",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(25),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(13),v=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),c=v(c),l=v(l),u=v(u),f=v(f),d=v(d),p=h(p);var g=function(t){(0,c.default)(f,t);var e,n,o=(e=f,function(){var t,n=(0,u.default)(e);if(y()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function f(){var t;return(0,a.default)(this,f),(t=o.apply(this,arguments)).onMouseUp=function(){var e=t.Editor.Listeners;e.off(document,"mouseover",t.onMouseOver),e.off(document,"mouseup",t.onMouseUp)},t.onMouseOver=function(e){var n=t.Editor,o=n.BlockManager,r=n.BlockSelection,i=o.getBlockByChildNode(e.relatedTarget)||t.lastSelectedBlock,a=o.getBlockByChildNode(e.target);if(i&&a&&a!==i){if(i===t.firstSelectedBlock)return d.default.get().removeAllRanges(),i.selected=!0,a.selected=!0,void r.clearCache();if(a===t.firstSelectedBlock)return i.selected=!1,a.selected=!1,void r.clearCache();t.Editor.InlineToolbar.close(),t.toggleBlocksSelectedState(i,a),t.lastSelectedBlock=a}},t}return(0,s.default)(f,[{key:"prepare",value:(n=(0,i.default)(r.default.mark((function t(){var e=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Editor.Listeners.on(document,"mousedown",(function(t){e.enableCrossBlockSelection(t)}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"watchSelection",value:function(t){if(t.button===p.mouseButtons.LEFT){var e=this.Editor,n=e.BlockManager,o=e.Listeners;this.firstSelectedBlock=n.getBlock(t.target),this.lastSelectedBlock=this.firstSelectedBlock,o.on(document,"mouseover",this.onMouseOver),o.on(document,"mouseup",this.onMouseUp)}}},{key:"toggleBlockSelectedState",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.Editor,n=e.BlockManager,o=e.BlockSelection;this.lastSelectedBlock||(this.lastSelectedBlock=this.firstSelectedBlock=n.currentBlock),this.firstSelectedBlock===this.lastSelectedBlock&&(this.firstSelectedBlock.selected=!0,o.clearCache(),d.default.get().removeAllRanges());var r=n.blocks.indexOf(this.lastSelectedBlock)+(t?1:-1),i=n.blocks[r];i&&(this.lastSelectedBlock.selected!==i.selected?(i.selected=!0,o.clearCache()):(this.lastSelectedBlock.selected=!1,o.clearCache()),this.lastSelectedBlock=i,this.Editor.InlineToolbar.close())}},{key:"clear",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret,i=n.blocks.indexOf(this.firstSelectedBlock),a=n.blocks.indexOf(this.lastSelectedBlock);if(o.anyBlockSelected&&i>-1&&a>-1)if(t&&t instanceof KeyboardEvent)switch(t.keyCode){case p.keyCodes.DOWN:case p.keyCodes.RIGHT:r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);break;case p.keyCodes.UP:case p.keyCodes.LEFT:r.setToBlock(n.blocks[Math.min(i,a)],r.positions.START);break;default:r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END)}else r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);this.firstSelectedBlock=this.lastSelectedBlock=null}},{key:"enableCrossBlockSelection",value:function(t){var e=this.Editor.UI;d.default.isCollapsed||this.Editor.BlockSelection.clearSelection(t),e.nodes.redactor.contains(t.target)?this.watchSelection(t):this.Editor.BlockSelection.clearSelection(t)}},{key:"toggleBlocksSelectedState",value:function(t,e){for(var n=this.Editor,o=n.BlockManager,r=n.BlockSelection,i=o.blocks.indexOf(t),a=o.blocks.indexOf(e),s=t.selected!==e.selected,c=Math.min(i,a);c<=Math.max(i,a);c++){var l=o.blocks[c];l!==this.firstSelectedBlock&&l!==(s?t:e)&&(o.blocks[c].selected=!o.blocks[c].selected,r.clearCache())}}},{key:"isCrossBlockSelectionStarted",get:function(){return!!this.firstSelectedBlock&&!!this.lastSelectedBlock}}]),f}(f.default);o.default=g,g.displayName="CrossBlockSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(25),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l),u=p(u),f=p(f);var v=function(t){(0,c.default)(d,t);var e,n,o=(e=d,function(){var t,n=(0,u.default)(e);if(h()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function d(){var t;return(0,a.default)(this,d),(t=o.apply(this,arguments)).isStartedAtEditor=!1,t}return(0,s.default)(d,[{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"enableModuleBindings",value:function(){var t=this,e=this.Editor.UI;this.readOnlyMutableListeners.on(e.nodes.holder,"drop",function(){var e=(0,i.default)(r.default.mark((function e(n){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.processDrop(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!0),this.readOnlyMutableListeners.on(e.nodes.holder,"dragstart",(function(){t.processDragStart()})),this.readOnlyMutableListeners.on(e.nodes.holder,"dragover",(function(e){t.processDragOver(e)}),!0)}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"processDrop",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s,c;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=this.Editor,o=n.BlockManager,i=n.Caret,a=n.Paste,e.preventDefault(),o.blocks.forEach((function(t){t.dropTarget=!1})),f.default.isAtEditor&&!f.default.isCollapsed&&this.isStartedAtEditor&&document.execCommand("delete"),this.isStartedAtEditor=!1;try{s=o.setCurrentBlockByChildNode(e.target),this.Editor.Caret.setToBlock(s,i.positions.END)}catch(t){c=o.setCurrentBlockByChildNode(o.lastBlock.holder),this.Editor.Caret.setToBlock(c,i.positions.END)}return t.next=8,a.processDataTransfer(e.dataTransfer,!0);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"processDragStart",value:function(){f.default.isAtEditor&&!f.default.isCollapsed&&(this.isStartedAtEditor=!0),this.Editor.InlineToolbar.close()}},{key:"processDragOver",value:function(t){t.preventDefault()}}]),d}((d=p(d)).default);o.default=v,v.displayName="DragNDrop",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=u(c);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(f()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).subscribers={},t}return(0,i.default)(o,[{key:"on",value:function(t,e){t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push(e)}},{key:"once",value:function(t,e){var n=this;t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push((function o(r){var i=e(r),a=n.subscribers[t].indexOf(o);return-1!==a&&n.subscribers[t].splice(a,1),i}))}},{key:"emit",value:function(t,e){this.subscribers[t]&&this.subscribers[t].reduce((function(t,e){return e(t)||t}),e)}},{key:"off",value:function(t,e){for(var n=0;n<this.subscribers[t].length;n++)if(this.subscribers[t][n]===e){delete this.subscribers[t][n];break}}},{key:"destroy",value:function(){this.subscribers=null}}]),o}((l=u(l)).default);o.default=d,d.displayName="Events",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(13),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),c=d(c),l=d(l),u=f(u);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(p()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).allListeners=[],t}return(0,i.default)(o,[{key:"on",value:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=u.generateId("l"),i={id:r,element:t,eventType:e,handler:n,options:o},a=this.findOne(t,e,n);if(!a)return this.allListeners.push(i),t.addEventListener(e,n,o),r}},{key:"off",value:function(t,e,n,o){var r=this,i=this.findAll(t,e,n);i.forEach((function(t,e){var n=r.allListeners.indexOf(i[e]);n>0&&(r.allListeners.splice(n,1),t.element.removeEventListener(t.eventType,t.handler,t.options))}))}},{key:"offById",value:function(t){var e=this.findById(t);e&&e.element.removeEventListener(e.eventType,e.handler,e.options)}},{key:"findOne",value:function(t,e,n){var o=this.findAll(t,e,n);return o.length>0?o[0]:null}},{key:"findAll",value:function(t,e,n){var o=t?this.findByEventTarget(t):[];return t&&e&&n?o.filter((function(t){return t.eventType===e&&t.handler===n})):t&&e?o.filter((function(t){return t.eventType===e})):o}},{key:"removeAll",value:function(){this.allListeners.map((function(t){t.element.removeEventListener(t.eventType,t.handler,t.options)})),this.allListeners=[]}},{key:"destroy",value:function(){this.removeAll()}},{key:"findByEventTarget",value:function(t){return this.allListeners.filter((function(e){if(e.element===t)return e}))}},{key:"findByType",value:function(t){return this.allListeners.filter((function(e){if(e.eventType===t)return e}))}},{key:"findByHandler",value:function(t){return this.allListeners.filter((function(e){if(e.handler===t)return e}))}},{key:"findById",value:function(t){return this.allListeners.find((function(e){return e.id===t}))}}]),o}(l.default);o.default=h,h.displayName="Listeners",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f){"use strict";var d=n(13),p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l),u=d(u),f=p(f);var v=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(h()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).disabled=!1,t.mutationDebouncer=u.debounce((function(){t.updateNativeInputs(),u.isFunction(t.config.onChange)&&t.config.onChange(t.Editor.API.methods)}),o.DebounceTimer),t.nativeInputs=[],t}return(0,i.default)(o,[{key:"destroy",value:function(){var t=this;this.mutationDebouncer=null,this.observer&&this.observer.disconnect(),this.observer=null,this.nativeInputs.forEach((function(e){return t.Editor.Listeners.off(e,"input",t.mutationDebouncer)})),this.mutationDebouncer=null}},{key:"toggleReadOnly",value:function(t){t?this.disableModule():this.enableModule()}},{key:"disable",value:function(){this.disabled=!0}},{key:"enable",value:function(){this.disabled=!1}},{key:"setObserver",value:function(){var t=this,e=this.Editor.UI;this.observer=new MutationObserver((function(e,n){t.mutationHandler(e,n)})),this.observer.observe(e.nodes.redactor,{childList:!0,attributes:!0,subtree:!0,characterData:!0,characterDataOldValue:!0})}},{key:"mutationHandler",value:function(t,e){if(!this.disabled){var n=!1;t.forEach((function(t){switch(t.type){case"childList":case"characterData":n=!0;break;case"attributes":t.target.classList.contains(f.default.CSS.wrapper)||(n=!0)}})),n&&this.mutationDebouncer()}}},{key:"updateNativeInputs",value:function(){var t=this;this.nativeInputs&&this.nativeInputs.forEach((function(e){t.Editor.Listeners.off(e,"input")})),this.nativeInputs=Array.from(this.Editor.UI.nodes.redactor.querySelectorAll("textarea, input, select")),this.nativeInputs.forEach((function(e){return t.Editor.Listeners.on(e,"input",t.mutationDebouncer)}))}},{key:"enableModule",value:function(){var t=this;window.setTimeout((function(){t.setObserver(),t.updateNativeInputs(),t.enable()}),1e3)}},{key:"disableModule",value:function(){this.disable()}}]),o}(l.default);o.default=v,v.displayName="ModificationsObserver",v.DebounceTimer=450,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(384)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l),u=f(u);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"show",value:function(t){u.default.show(t)}}]),o}(l.default);o.default=p,p.displayName="Notifier",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(66),n(21),n(22),n(39),n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v){"use strict";var y=n(13),g=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),c=g(c),l=g(l),u=g(u),f=g(f),d=g(d),p=g(p),h=g(h),v=y(v);var m=function(t){(0,u.default)(w,t);var e,n,o,p,y,g,m,k,x,S=(e=w,function(){var t,n=(0,d.default)(e);if(b()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function w(){var t;return(0,c.default)(this,w),(t=S.apply(this,arguments)).MIME_TYPE="application/x-editor-js",t.toolsTags={},t.tagsByTool={},t.toolsPatterns=[],t.toolsFiles={},t.exceptionList=[],t.processTool=function(e){var n=(0,s.default)(e,2),o=n[0],r=n[1];try{var i=new t.Editor.Tools.blockTools[o]({api:t.Editor.API.getMethodsForTool(o),config:{},data:{},readOnly:!1});if(!1===r.pasteConfig)return void t.exceptionList.push(o);if("function"!=typeof i.onPaste)return;var a=r.pasteConfig||{};t.getTagsConfig(o,a),t.getFilesConfig(o,a),t.getPatternsConfig(o,a)}catch(t){v.log("Paste handling for «".concat(o,"» Tool hasn't been set up because of the error"),"warn",t)}},t.handlePasteEvent=function(){var e=(0,a.default)(i.default.mark((function e(n){var o,r,a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.Editor,r=o.BlockManager,a=o.Toolbar,r.currentBlock&&(!t.isNativeBehaviour(n.target)||n.clipboardData.types.includes("Files"))){e.next=3;break}return e.abrupt("return");case 3:if(!r.currentBlock||!t.exceptionList.includes(r.currentBlock.name)){e.next=5;break}return e.abrupt("return");case 5:n.preventDefault(),t.processDataTransfer(n.clipboardData),r.clearFocused(),a.close();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return(0,l.default)(w,[{key:"prepare",value:(x=(0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.processTools();case 1:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)})},{key:"toggleReadOnly",value:function(t){t?this.unsetCallback():this.setCallback()}},{key:"processDataTransfer",value:(k=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s,c,l,u,f,d=arguments;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=d.length>1&&void 0!==d[1]&&d[1],o=this.Editor.Sanitizer,!((r=e.types).includes?r.includes("Files"):r.contains("Files"))){t.next=8;break}return t.next=7,this.processFiles(e.files);case 7:return t.abrupt("return");case 8:if(a=e.getData(this.MIME_TYPE),s=e.getData("text/plain"),c=e.getData("text/html"),!a){t.next=19;break}return t.prev=12,this.insertEditorJSData(JSON.parse(a)),t.abrupt("return");case 17:t.prev=17,t.t0=t.catch(12);case 19:if(n&&s.trim()&&c.trim()&&(c="<p>"+(c.trim()?c:s)+"</p>"),l=Object.keys(this.toolsTags).reduce((function(t,e){return t[e.toLowerCase()]=!0,t}),{}),u=Object.assign({},l,o.getAllInlineToolsConfig(),{br:{}}),(f=o.clean(c,u)).trim()&&f.trim()!==s&&h.default.isHTMLString(f)){t.next=28;break}return t.next=26,this.processText(s);case 26:t.next=30;break;case 28:return t.next=30,this.processText(f,!0);case 30:case"end":return t.stop()}}),t,this,[[12,17]])}))),function(t){return k.apply(this,arguments)})},{key:"processText",value:(m=(0,a.default)(i.default.mark((function t(e){var n,o,r,s,c,l,u,f,d=this,p=arguments;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=p.length>1&&void 0!==p[1]&&p[1],o=this.Editor,r=o.Caret,s=o.BlockManager,c=o.Tools,(l=n?this.processHTML(e):this.processPlain(e)).length){t.next=5;break}return t.abrupt("return");case 5:if(1!==l.length){t.next=8;break}return l[0].isBlock?this.processSingleBlock(l.pop()):this.processInlinePaste(l.pop()),t.abrupt("return");case 8:u=s.currentBlock&&c.isDefault(s.currentBlock.tool),f=u&&s.currentBlock.isEmpty,l.map(function(){var t=(0,a.default)(i.default.mark((function t(e,n){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d.insertBlock(e,0===n&&f));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),s.currentBlock&&r.setToBlock(s.currentBlock,r.positions.END);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return m.apply(this,arguments)})},{key:"setCallback",value:function(){this.Editor.Listeners.on(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}},{key:"unsetCallback",value:function(){this.Editor.Listeners.off(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}},{key:"processTools",value:function(){var t=this.Editor.Tools.blockTools;Object.entries(t).forEach(this.processTool)}},{key:"getTagsConfig",value:function(t,e){var n=this,o=e.tags||[];o.forEach((function(e){Object.prototype.hasOwnProperty.call(n.toolsTags,e)?v.log("Paste handler for «".concat(t,"» Tool on «").concat(e,"» tag is skipped ")+"because it is already used by «".concat(n.toolsTags[e].tool,"» Tool."),"warn"):n.toolsTags[e.toUpperCase()]={tool:t}})),this.tagsByTool[t]=o.map((function(t){return t.toUpperCase()}))}},{key:"getFilesConfig",value:function(t,e){var n=e.files,o=void 0===n?{}:n,r=o.extensions,i=o.mimeTypes;(r||i)&&(r&&!Array.isArray(r)&&(v.log("«extensions» property of the onDrop config for «".concat(t,"» Tool should be an array")),r=[]),i&&!Array.isArray(i)&&(v.log("«mimeTypes» property of the onDrop config for «".concat(t,"» Tool should be an array")),i=[]),i&&(i=i.filter((function(e){return!!v.isValidMimeType(e)||(v.log("MIME type value «".concat(e,"» for the «").concat(t,"» Tool is not a valid MIME type"),"warn"),!1)}))),this.toolsFiles[t]={extensions:r||[],mimeTypes:i||[]})}},{key:"getPatternsConfig",value:function(t,e){var n=this;e.patterns&&!v.isEmpty(e.patterns)&&Object.entries(e.patterns).forEach((function(e){var o=(0,s.default)(e,2),r=o[0],i=o[1];i instanceof RegExp||v.log("Pattern ".concat(i," for «").concat(t,"» Tool is skipped because it should be a Regexp instance."),"warn"),n.toolsPatterns.push({key:r,pattern:i,tool:t})}))}},{key:"isNativeBehaviour",value:function(t){return h.default.isNativeInput(t)}},{key:"processFiles",value:(g=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s,c,l=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.Editor,o=n.BlockManager,r=n.Tools,t.next=3,Promise.all(Array.from(e).map((function(t){return l.processFile(t)})));case 3:a=(a=t.sent).filter((function(t){return!!t})),s=r.isDefault(o.currentBlock.tool),c=s&&o.currentBlock.isEmpty,a.forEach((function(t,e){o.paste(t.type,t.event,0===e&&c)}));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)})},{key:"processFile",value:(y=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,c;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=v.getFileExtension(e),o=Object.entries(this.toolsFiles).find((function(t){var o=(0,s.default)(t,2),r=(o[0],o[1]),i=r.mimeTypes,a=r.extensions,c=e.type.split("/"),l=(0,s.default)(c,2),u=l[0],f=l[1],d=a.find((function(t){return t.toLowerCase()===n.toLowerCase()})),p=i.find((function(t){var e=t.split("/"),n=(0,s.default)(e,2),o=n[0],r=n[1];return o===u&&(r===f||"*"===r)}));return!!d||!!p}))){t.next=4;break}return t.abrupt("return");case 4:return r=(0,s.default)(o,1),a=r[0],c=this.composePasteEvent("file",{file:e}),t.abrupt("return",{event:c,type:a});case 7:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)})},{key:"processHTML",value:function(t){var e=this,n=this.Editor,o=n.Tools,r=n.Sanitizer,i=this.config.defaultBlock,a=h.default.make("DIV");return a.innerHTML=t,this.getNodes(a).map((function(t){var n,a=i,s=!1;switch(t.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:(n=h.default.make("div")).appendChild(t);break;case Node.ELEMENT_NODE:n=t,s=!0,e.toolsTags[n.tagName]&&(a=e.toolsTags[n.tagName].tool)}var c=o.blockTools[a].pasteConfig.tags.reduce((function(t,e){return t[e.toLowerCase()]={},t}),{}),l=Object.assign({},c,r.getInlineToolsConfig(a));return n.innerHTML=r.clean(n.innerHTML,l),{content:n,isBlock:s,tool:a,event:e.composePasteEvent("tag",{data:n})}})).filter((function(t){return!h.default.isNodeEmpty(t.content)||h.default.isSingleTag(t.content)}))}},{key:"processPlain",value:function(t){var e=this,n=this.config.defaultBlock;if(!t)return[];var o=n;return t.split(/\r?\n/).filter((function(t){return t.trim()})).map((function(t){var n=h.default.make("div");n.textContent=t;var r=e.composePasteEvent("tag",{data:n});return{content:n,tool:o,isBlock:!1,event:r}}))}},{key:"processSingleBlock",value:(p=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.Caret,r=n.BlockManager,a=n.Tools,(s=r.currentBlock)&&e.tool===s.name&&h.default.containsOnlyInlineElements(e.content.innerHTML)){t.next=5;break}return this.insertBlock(e,s&&a.isDefault(s.tool)&&s.isEmpty),t.abrupt("return");case 5:o.insertContentAtCaretPosition(e.content.innerHTML);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},{key:"processInlinePaste",value:(o=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s,c,l,u,f,d;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.BlockManager,r=n.Caret,a=n.Sanitizer,s=n.Tools,c=e.content,!(o.currentBlock&&s.isDefault(o.currentBlock.tool)&&c.textContent.length<w.PATTERN_PROCESSING_MAX_LENGTH)){t.next=12;break}return t.next=6,this.processPattern(c.textContent);case 6:if(!(l=t.sent)){t.next=12;break}return u=o.currentBlock&&s.isDefault(o.currentBlock.tool)&&o.currentBlock.isEmpty,f=o.paste(l.tool,l.event,u),r.setToBlock(f,r.positions.END),t.abrupt("return");case 12:o.currentBlock&&o.currentBlock.currentInput?(d=a.getInlineToolsConfig(o.currentBlock.name),document.execCommand("insertHTML",!1,a.clean(c.innerHTML,d))):this.insertBlock(e);case 13:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"processPattern",value:(n=(0,a.default)(i.default.mark((function t(e){var n,o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.toolsPatterns.find((function(t){var n=t.pattern.exec(e);return!!n&&e===n.shift()}))){t.next=3;break}return t.abrupt("return");case 3:return o=this.composePasteEvent("pattern",{key:n.key,data:e}),t.abrupt("return",{event:o,tool:n.tool});case 5:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"insertBlock",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.Editor,r=o.BlockManager,i=o.Caret,a=r.currentBlock;if(n&&a&&a.isEmpty)return e=r.paste(t.tool,t.event,!0),void i.setToBlock(e,i.positions.END);e=r.paste(t.tool,t.event),i.setToBlock(e,i.positions.END)}},{key:"insertEditorJSData",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.Tools;t.forEach((function(t,e){var r=t.tool,i=t.data,a=!1;0===e&&(a=n.currentBlock&&o.isDefault(n.currentBlock.tool)&&n.currentBlock.isEmpty),n.insert({tool:r,data:i,replace:a})}))}},{key:"processElementNode",value:function(t,e,n){var o=Object.keys(this.toolsTags),i=t,a=(this.toolsTags[i.tagName]||{}).tool,s=void 0===a?"":a,c=this.tagsByTool[s]||[],l=o.includes(i.tagName),u=h.default.blockElements.includes(i.tagName.toLowerCase()),f=Array.from(i.children).some((function(t){var e=t.tagName;return o.includes(e)&&!c.includes(e)})),d=Array.from(i.children).some((function(t){var e=t.tagName;return h.default.blockElements.includes(e.toLowerCase())}));return u||l||f?l&&!f||u&&!d&&!f?[].concat((0,r.default)(e),[n,i]):void 0:(n.appendChild(i),[].concat((0,r.default)(e),[n]))}},{key:"getNodes",value:function(t){var e,n=this;return Array.from(t.childNodes).reduce((function t(o,i){if(h.default.isEmpty(i)&&!h.default.isSingleTag(i))return o;var a=o[o.length-1],s=new DocumentFragment;switch(a&&h.default.isFragment(a)&&(s=o.pop()),i.nodeType){case Node.ELEMENT_NODE:if(e=n.processElementNode(i,o,s))return e;break;case Node.TEXT_NODE:return s.appendChild(i),[].concat((0,r.default)(o),[s]);default:return[].concat((0,r.default)(o),[s])}return[].concat((0,r.default)(o),(0,r.default)(Array.from(i.childNodes).reduce(t,[])))}),[])}},{key:"composePasteEvent",value:function(t,e){return new CustomEvent(t,{detail:e})}}]),w}(p.default);o.default=m,m.displayName="Paste",m.PATTERN_PROCESSING_MAX_LENGTH=450,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(39),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(144)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f);var y=function(t){(0,l.default)(h,t);var e,n,o,d=(e=h,function(){var t,n=(0,f.default)(e);if(v()){var o=(0,f.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,u.default)(this,t)});function h(){var t;return(0,s.default)(this,h),(t=d.apply(this,arguments)).toolsDontSupportReadOnly=[],t.readOnlyEnabled=!1,t}return(0,c.default)(h,[{key:"prepare",value:(o=(0,a.default)(r.default.mark((function t(){var e,n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.Editor.Tools,n=e.blockTools,o=[],Object.entries(n).forEach((function(t){var n=(0,i.default)(t,2),r=n[0],a=n[1];e.isReadOnlySupported(a)||o.push(r)})),this.toolsDontSupportReadOnly=o,this.config.readOnly&&o.length>0&&this.throwCriticalError(),this.toggle(this.config.readOnly);case 7:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"toggle",value:(n=(0,a.default)(r.default.mark((function t(){var e,n,o,i,a=arguments;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=a.length>0&&void 0!==a[0]?a[0]:!this.readOnlyEnabled)&&this.toolsDontSupportReadOnly.length>0&&this.throwCriticalError(),n=this.readOnlyEnabled,this.readOnlyEnabled=e,t.t0=r.default.keys(this.Editor);case 5:if((t.t1=t.t0()).done){t.next=12;break}if(o=t.t1.value,this.Editor[o].toggleReadOnly){t.next=9;break}return t.abrupt("continue",5);case 9:this.Editor[o].toggleReadOnly(e),t.next=5;break;case 12:if(n!==e){t.next=14;break}return t.abrupt("return",this.readOnlyEnabled);case 14:return t.next=16,this.Editor.Saver.save();case 16:return i=t.sent,t.next=19,this.Editor.BlockManager.clear();case 19:return t.next=21,this.Editor.Renderer.render(i.blocks);case 21:return t.abrupt("return",this.readOnlyEnabled);case 22:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"throwCriticalError",value:function(){throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", ")," don't support read-only mode."))}},{key:"isEnabled",get:function(){return this.readOnlyEnabled}}]),h}((d=h(d)).default);o.default=y,y.displayName="ReadOnly",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(25),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(1);function h(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),c=p(c),l=p(l),u=p(u),f=p(f),d=p(d);var g=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(y()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).isRectSelectionActivated=!1,t.SCROLL_SPEED=3,t.HEIGHT_OF_SCROLL_ZONE=40,t.BOTTOM_SCROLL_ZONE=1,t.TOP_SCROLL_ZONE=2,t.MAIN_MOUSE_BUTTON=0,t.mousedown=!1,t.isScrolling=!1,t.inScrollZone=null,t.startX=0,t.startY=0,t.mouseX=0,t.mouseY=0,t.stackOfSelected=[],t.listenerIds=[],t}return(0,i.default)(o,[{key:"prepare",value:function(){this.enableModuleBindings()}},{key:"startSelection",value:function(t,e){var n=document.elementFromPoint(t-window.pageXOffset,e-window.pageYOffset);n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar))||(this.Editor.BlockSelection.allBlocksSelected=!1,this.clearSelection(),this.stackOfSelected=[]);var o=[".".concat(d.default.CSS.content),".".concat(this.Editor.Toolbar.CSS.toolbar),".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)],r=n.closest("."+this.Editor.UI.CSS.editorWrapper),i=o.some((function(t){return!!n.closest(t)}));r&&!i&&(this.mousedown=!0,this.startX=t,this.startY=e)}},{key:"endSelection",value:function(){this.mousedown=!1,this.startX=0,this.startY=0,this.overlayRectangle.style.display="none"}},{key:"isRectActivated",value:function(){return this.isRectSelectionActivated}},{key:"clearSelection",value:function(){this.isRectSelectionActivated=!1}},{key:"enableModuleBindings",value:function(){var t=this,e=this.Editor.Listeners,n=this.genHTML().container;e.on(n,"mousedown",(function(e){t.processMouseDown(e)}),!1),e.on(document.body,"mousemove",(function(e){t.processMouseMove(e)}),!1),e.on(document.body,"mouseleave",(function(){t.processMouseLeave()})),e.on(window,"scroll",(function(e){t.processScroll(e)}),!1),e.on(document.body,"mouseup",(function(){t.processMouseUp()}),!1)}},{key:"processMouseDown",value:function(t){t.button===this.MAIN_MOUSE_BUTTON&&this.startSelection(t.pageX,t.pageY)}},{key:"processMouseMove",value:function(t){this.changingRectangle(t),this.scrollByZones(t.clientY)}},{key:"processMouseLeave",value:function(){this.clearSelection(),this.endSelection()}},{key:"processScroll",value:function(t){this.changingRectangle(t)}},{key:"processMouseUp",value:function(){this.endSelection()}},{key:"scrollByZones",value:function(t){this.inScrollZone=null,t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.TOP_SCROLL_ZONE),document.documentElement.clientHeight-t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.BOTTOM_SCROLL_ZONE),this.inScrollZone?this.isScrolling||(this.scrollVertical(this.inScrollZone===this.TOP_SCROLL_ZONE?-this.SCROLL_SPEED:this.SCROLL_SPEED),this.isScrolling=!0):this.isScrolling=!1}},{key:"genHTML",value:function(){var t=this.Editor.UI,e=t.nodes.holder.querySelector("."+t.CSS.editorWrapper),n=u.default.make("div",o.CSS.overlay,{}),r=u.default.make("div",o.CSS.overlayContainer,{}),i=u.default.make("div",o.CSS.rect,{});return r.appendChild(i),n.appendChild(r),e.appendChild(n),this.overlayRectangle=i,{container:e,overlay:n}}},{key:"scrollVertical",value:function(t){var e=this;if(this.inScrollZone&&this.mousedown){var n=window.pageYOffset;window.scrollBy(0,t),this.mouseY+=window.pageYOffset-n,setTimeout((function(){e.scrollVertical(t)}),0)}}},{key:"changingRectangle",value:function(t){if(this.mousedown){void 0!==t.pageY&&(this.mouseX=t.pageX,this.mouseY=t.pageY);var e=this.genInfoForMouseSelection(),n=e.rightPos,o=e.leftPos,r=e.index,i=this.startX>n&&this.mouseX>n,a=this.startX<o&&this.mouseX<o;this.rectCrossesBlocks=!(i||a),this.isRectSelectionActivated||(this.rectCrossesBlocks=!1,this.isRectSelectionActivated=!0,this.shrinkRectangleToPoint(),this.overlayRectangle.style.display="block"),this.updateRectangleSize(),void 0!==r&&(this.trySelectNextBlock(r),this.inverseSelection(),f.default.get().removeAllRanges(),t.preventDefault())}}},{key:"shrinkRectangleToPoint",value:function(){this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px")}},{key:"inverseSelection",value:function(){var t=this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;if(this.rectCrossesBlocks&&!t){var e,n=h(this.stackOfSelected);try{for(n.s();!(e=n.n()).done;){var o=e.value;this.Editor.BlockSelection.selectBlockByIndex(o)}}catch(t){n.e(t)}finally{n.f()}}if(!this.rectCrossesBlocks&&t){var r,i=h(this.stackOfSelected);try{for(i.s();!(r=i.n()).done;){var a=r.value;this.Editor.BlockSelection.unSelectBlockByIndex(a)}}catch(t){i.e(t)}finally{i.f()}}}},{key:"updateRectangleSize",value:function(){this.mouseY>=this.startY?(this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.mouseY-window.pageYOffset,"px")):(this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.top="".concat(this.mouseY-window.pageYOffset,"px")),this.mouseX>=this.startX?(this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.mouseX-window.pageXOffset,"px")):(this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.left="".concat(this.mouseX-window.pageXOffset,"px"))}},{key:"genInfoForMouseSelection",value:function(){var t,e=document.body.offsetWidth/2,n=this.mouseY-window.pageYOffset,o=document.elementFromPoint(e,n),r=this.Editor.BlockManager.getBlockByChildNode(o);void 0!==r&&(t=this.Editor.BlockManager.blocks.findIndex((function(t){return t.holder===r.holder})));var i=this.Editor.BlockManager.lastBlock.holder.querySelector("."+d.default.CSS.content),a=Number.parseInt(window.getComputedStyle(i).width,10)/2;return{index:t,leftPos:e-a,rightPos:e+a}}},{key:"addBlockInSelection",value:function(t){this.rectCrossesBlocks&&this.Editor.BlockSelection.selectBlockByIndex(t),this.stackOfSelected.push(t)}},{key:"trySelectNextBlock",value:function(t){var e=this,n=this.stackOfSelected[this.stackOfSelected.length-1]===t,o=this.stackOfSelected.length;if(!n){var r=this.stackOfSelected[o-1]-this.stackOfSelected[o-2]>0,i=0;o>1&&(i=r?1:-1);var a=t>this.stackOfSelected[o-1]&&1===i,s=t<this.stackOfSelected[o-1]&&-1===i,c=!(a||s||0===i);if(c||!(t>this.stackOfSelected[o-1]||void 0===this.stackOfSelected[o-1])){if(!c&&t<this.stackOfSelected[o-1])for(var l=this.stackOfSelected[o-1]-1;l>=t;l--)this.addBlockInSelection(l);else if(c){var u,f=o-1;for(u=t>this.stackOfSelected[o-1]?function(){return t>e.stackOfSelected[f]}:function(){return t<e.stackOfSelected[f]};u();)this.rectCrossesBlocks&&this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]),this.stackOfSelected.pop(),f--}}else for(var d=this.stackOfSelected[o-1]+1||t;d<=t;d++)this.addBlockInSelection(d)}}}],[{key:"CSS",get:function(){return{overlay:"codex-editor-overlay",overlayContainer:"codex-editor-overlay__container",rect:"codex-editor-overlay__rectangle",topScrollZone:"codex-editor-overlay__scroll-zone--top",bottomScrollZone:"codex-editor-overlay__scroll-zone--bottom"}}}]),o}(l.default);o.default=g,g.displayName="RectangleSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(13),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f),d=p(d);var y=function(t){(0,c.default)(p,t);var e,n,o,f=(e=p,function(){var t,n=(0,u.default)(e);if(v()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function p(){return(0,a.default)(this,p),f.apply(this,arguments)}return(0,s.default)(p,[{key:"render",value:(o=(0,i.default)(r.default.mark((function t(e){var n,o,i=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.map((function(t){return{function:function(){return i.insertBlock(t)}}})),t.next=3,d.sequence(n);case 3:return o=t.sent,this.Editor.UI.checkEmptiness(),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"insertBlock",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s,c,l,u;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.Tools,i=n.BlockManager,a=e.type,s=e.data,!(a in o.available)){t.next=14;break}t.prev=4,i.insert({tool:a,data:s}),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(4),d.log("Block «".concat(a,"» skipped because of plugins error"),"warn",s),Error(t.t0);case 12:t.next=19;break;case 14:c={savedData:{type:a,data:s},title:a},a in o.unavailable&&(l=o.unavailable[a].toolbox,u=o.getToolSettings(a).toolbox,c.title=l.title||u&&u.title||c.title),i.insert({tool:o.stubTool,data:c}).stretched=!0,d.log("Tool «".concat(a,"» is not found. Check 'tools' property at your initial Editor.js config."),"warn");case 19:case"end":return t.stop()}}),t,this,[[4,8]])}))),function(t){return n.apply(this,arguments)})}]),p}(f.default);o.default=y,y.displayName="Renderer",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(52),n(2),n(3),n(5),n(6),n(4),n(7),n(8),n(385)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(13),v=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),c=v(c),l=v(l),u=v(u),f=v(f),d=h(d),p=v(p);var g=function(t){(0,c.default)(o,t);var e,n=(e=o,function(){var t,n=(0,u.default)(e);if(y()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function o(){var t;return(0,a.default)(this,o),(t=n.apply(this,arguments)).configCache={},t.inlineToolsConfigCache=null,t}return(0,s.default)(o,[{key:"sanitizeBlocks",value:function(t){var e=this;return t.map((function(t){var n=e.composeToolConfig(t.tool);return d.isEmpty(n)||(t.data=e.deepSanitize(t.data,n)),t}))}},{key:"deepSanitize",value:function(t,e){return Array.isArray(t)?this.cleanArray(t,e):"object"===(0,i.default)(t)?this.cleanObject(t,e):"string"==typeof t?this.cleanOneItem(t,e):t}},{key:"clean",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={tags:e},o=this.createHTMLJanitorInstance(n);return o.clean(t)}},{key:"composeToolConfig",value:function(t){if(this.configCache[t])return this.configCache[t];var e=this.Editor.Tools.INTERNAL_SETTINGS.SANITIZE_CONFIG,n=this.Editor.Tools.available[t],o=this.getInlineToolsConfig(t);if(!n.sanitize||n[e]&&d.isEmpty(n[e]))return o;var r=n.sanitize,a={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){var c=r[s];"object"===(0,i.default)(c)?a[s]=Object.assign({},o,c):a[s]=c}return this.configCache[t]=a,a}},{key:"getInlineToolsConfig",value:function(t){var e=this.Editor.Tools,n=e.getToolSettings(t).inlineToolbar||[],o={};return"boolean"==typeof n&&n?o=this.getAllInlineToolsConfig():n.map((function(t){o=Object.assign(o,e.inline[t][e.INTERNAL_SETTINGS.SANITIZE_CONFIG])})),o.br=!0,o.wbr=!0,o}},{key:"getAllInlineToolsConfig",value:function(){var t=this.Editor.Tools;if(this.inlineToolsConfigCache)return this.inlineToolsConfigCache;var e={};return Object.entries(t.inline).forEach((function(n){var o=(0,r.default)(n,2)[1];Object.assign(e,o[t.INTERNAL_SETTINGS.SANITIZE_CONFIG])})),this.inlineToolsConfigCache=e,this.inlineToolsConfigCache}},{key:"cleanArray",value:function(t,e){var n=this;return t.map((function(t){return n.deepSanitize(t,e)}))}},{key:"cleanObject",value:function(t,e){var n={};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var r=t[o],i=this.isRule(e[o])?e[o]:e;n[o]=this.deepSanitize(r,i)}return n}},{key:"cleanOneItem",value:function(t,e){return"object"===(0,i.default)(e)?this.clean(t,e):!1===e?this.clean(t,{}):t}},{key:"isRule",value:function(t){return"object"===(0,i.default)(t)||"boolean"==typeof t||d.isFunction(t)}},{key:"createHTMLJanitorInstance",value:function(t){return t?new p.default(t):null}}]),o}(f.default);o.default=g,g.displayName="Sanitizer",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(7),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(13),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=h(u),f=h(f),d=p(d);var y=function(t){(0,c.default)(p,t);var e,n,o,f=(e=p,function(){var t,n=(0,u.default)(e);if(v()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function p(){return(0,a.default)(this,p),f.apply(this,arguments)}return(0,s.default)(p,[{key:"save",value:(o=(0,i.default)(r.default.mark((function t(){var e,n,o,i,a,s,c,l,u=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.Editor,n=e.BlockManager,o=e.Sanitizer,i=e.ModificationsObserver,a=n.blocks,s=[],i.disable(),t.prev=3,a.forEach((function(t){s.push(u.getSavedData(t))})),t.next=7,Promise.all(s);case 7:return c=t.sent,t.next=10,o.sanitizeBlocks(c);case 10:return l=t.sent,t.abrupt("return",this.makeOutput(l));case 12:return t.prev=12,i.enable(),t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[3,,12,15]])}))),function(){return o.apply(this,arguments)})},{key:"getSavedData",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.save();case 2:if(n=t.sent,t.t0=n,!t.t0){t.next=8;break}return t.next=7,e.validate(n.data);case 7:t.t0=t.sent;case 8:return o=t.t0,t.abrupt("return",Object.assign(Object.assign({},n),{isValid:o}));case 10:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},{key:"makeOutput",value:function(t){var e=this,n=0,o=[];return d.log("[Editor.js saving]:","groupCollapsed"),t.forEach((function(t){var r=t.tool,i=t.data,a=t.time,s=t.isValid;if(n+=a,d.log("".concat(r.charAt(0).toUpperCase()+r.slice(1)),"group"),!s)return d.log("Block «".concat(r,"» skipped because saved data is invalid")),void d.log(void 0,"groupEnd");d.log(i),d.log(void 0,"groupEnd"),r!==e.Editor.Tools.stubTool?o.push({type:r,data:i}):o.push(i)})),d.log("Total","log",n),d.log(void 0,"groupEnd"),{time:+new Date,blocks:o,version:"2.19.0"}}}]),p}(f.default);o.default=y,y.displayName="Saver",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(386),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).registeredShortcuts=[],t}return(0,i.default)(o,[{key:"add",value:function(t){var e=new l.default({name:t.name,on:document,callback:t.handler});this.registeredShortcuts.push(e)}},{key:"remove",value:function(t){var e=this.registeredShortcuts.findIndex((function(e){return e.name===t}));-1!==e&&this.registeredShortcuts[e]&&(this.registeredShortcuts[e].remove(),this.registeredShortcuts.splice(e,1))}}]),o}((u=f(u)).default);o.default=p,p.displayName="Shortcuts",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(60),n(8),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p){"use strict";var h=n(13),v=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),c=v(c),l=v(l),u=v(u),f=v(f),d=h(d),p=v(p);var g=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(y()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).buttons=[],t.flipper=null,t.selection=new p.default,t}return(0,i.default)(o,[{key:"make",value:function(){this.nodes.wrapper=u.default.make("div",this.CSS.wrapper),this.nodes.toolSettings=u.default.make("div",this.CSS.toolSettings),this.nodes.defaultSettings=u.default.make("div",this.CSS.defaultSettings),u.default.append(this.nodes.wrapper,[this.nodes.toolSettings,this.nodes.defaultSettings]),this.enableFlipper()}},{key:"destroy",value:function(){this.flipper.deactivate(),this.flipper=null,this.removeAllNodes()}},{key:"open",value:function(){this.nodes.wrapper.classList.add(this.CSS.wrapperOpened),this.selection.save(),this.Editor.BlockManager.currentBlock.selected=!0,this.Editor.BlockSelection.clearCache(),this.addToolSettings(),this.addDefaultSettings(),this.Editor.Events.emit(this.events.opened),this.flipper.activate(this.blockTunesButtons)}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened),p.default.isAtEditor||this.selection.restore(),this.selection.clearSaved(),this.nodes.toolSettings.innerHTML="",this.nodes.defaultSettings.innerHTML="",this.Editor.Events.emit(this.events.closed),this.buttons=[],this.flipper.deactivate()}},{key:"addToolSettings",value:function(){d.isFunction(this.Editor.BlockManager.currentBlock.tool.renderSettings)&&u.default.append(this.nodes.toolSettings,this.Editor.BlockManager.currentBlock.tool.renderSettings())}},{key:"addDefaultSettings",value:function(){u.default.append(this.nodes.defaultSettings,this.Editor.BlockManager.currentBlock.renderTunes())}},{key:"enableFlipper",value:function(){var t=this;this.flipper=new f.default({focusedItemClass:this.CSS.focusedButton,activateCallback:function(e){e&&u.default.canSetCaret(e)?t.close():d.delay((function(){t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock)}),50)()}})}},{key:"events",get:function(){return{opened:"block-settings-opened",closed:"block-settings-closed"}}},{key:"CSS",get:function(){return{wrapper:"ce-settings",wrapperOpened:"ce-settings--opened",toolSettings:"ce-settings__plugin-zone",defaultSettings:"ce-settings__default-zone",button:"ce-settings__button",focusedButton:"ce-settings__button--focused",focusedButtonAnimated:"ce-settings__button--focused-animated"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened)}},{key:"blockTunesButtons",get:function(){var t=this,e=this.Editor.StylesAPI;if(0!==this.buttons.length)return this.buttons;var n=this.nodes.toolSettings.querySelectorAll(".".concat(e.classes.settingsButton,", ").concat(u.default.allInputsSelector)),o=this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));return n.forEach((function(e){t.buttons.push(e)})),o.forEach((function(e){t.buttons.push(e)})),this.buttons}}]),o}(l.default);o.default=g,g.displayName="BlockSettings",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(21),n(22),n(66),n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8),n(60),n(59),n(82)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y,g,b){"use strict";var m=n(13),k=n(1);function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=k(r),i=k(i),a=k(a),s=k(s),c=k(c),l=k(l),u=k(u),f=k(f),d=k(d),p=k(p),h=k(h),v=m(v),y=k(y),g=k(g);var S=function(t){(0,u.default)(p,t);var e,n,o=(e=p,function(){var t,n=(0,d.default)(e);if(x()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function p(){var t;return(0,c.default)(this,p),(t=o.apply(this,arguments)).opened=!1,t.tools={},t.flipper=null,t.togglingCallback=null,t}return(0,l.default)(p,[{key:"make",value:function(){this.nodes.wrapper=h.default.make("div",[p.CSS.conversionToolbarWrapper].concat((0,s.default)(this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]))),this.nodes.tools=h.default.make("div",p.CSS.conversionToolbarTools);var t=h.default.make("div",p.CSS.conversionToolbarLabel,{textContent:g.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter,"Convert to")});return this.addTools(),this.enableFlipper(),h.default.append(this.nodes.wrapper,t),h.default.append(this.nodes.wrapper,this.nodes.tools),this.nodes.wrapper}},{key:"destroy",value:function(){this.flipper.deactivate(),this.flipper=null,this.removeAllNodes()}},{key:"toggle",value:function(t){this.opened?this.close():this.open(),v.isFunction(t)&&(this.togglingCallback=t)}},{key:"open",value:function(){var t=this;this.filterTools(),this.opened=!0,this.nodes.wrapper.classList.add(p.CSS.conversionToolbarShowed),setTimeout((function(){t.flipper.activate(Object.values(t.tools).filter((function(t){return!t.classList.contains(p.CSS.conversionToolHidden)}))),t.flipper.focusFirst(),v.isFunction(t.togglingCallback)&&t.togglingCallback(!0)}),50)}},{key:"close",value:function(){this.opened=!1,this.flipper.deactivate(),this.nodes.wrapper.classList.remove(p.CSS.conversionToolbarShowed),v.isFunction(this.togglingCallback)&&this.togglingCallback(!1)}},{key:"hasTools",value:function(){var t=Object.keys(this.tools);return!(1===t.length&&t.shift()===this.config.defaultBlock)}},{key:"replaceWithBlock",value:(n=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s,c,l,u,f,d,p,h=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.Editor.BlockManager.currentBlock.class,o=this.Editor.BlockManager.currentBlock.name,t.next=4,this.Editor.BlockManager.currentBlock.save();case 4:if(r=t.sent,a=this.Editor.Tools.INTERNAL_SETTINGS,s=r.data,o===e&&(e=this.config.defaultBlock),c=this.Editor.Tools.toolsClasses[e],l="",u=n[a.CONVERSION_CONFIG].export,!v.isFunction(u)){t.next=15;break}l=u(s),t.next=21;break;case 15:if("string"!=typeof u){t.next=19;break}l=s[u],t.next=21;break;case 19:return v.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."),t.abrupt("return");case 21:if(f=this.Editor.Sanitizer.clean(l,c.sanitize),d={},p=c[a.CONVERSION_CONFIG].import,!v.isFunction(p)){t.next=28;break}d=p(f),t.next=34;break;case 28:if("string"!=typeof p){t.next=32;break}d[p]=f,t.next=34;break;case 32:return v.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."),t.abrupt("return");case 34:this.Editor.BlockManager.replace({tool:e,data:d}),this.Editor.BlockSelection.clearSelection(),this.close(),this.Editor.InlineToolbar.close(),v.delay((function(){h.Editor.Caret.setToBlock(h.Editor.BlockManager.currentBlock)}),10)();case 39:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"addTools",value:function(){var t=this.Editor.Tools.blockTools;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var n=this.Editor.Tools.INTERNAL_SETTINGS,o=t[e],r=o[n.TOOLBOX],i=o[n.CONVERSION_CONFIG],a=this.Editor.Tools.USER_SETTINGS,s=this.Editor.Tools.getToolSettings(e)[a.TOOLBOX],c=null!=s?s:r;!v.isEmpty(c)&&c.icon&&i&&i.import&&this.addTool(e,c.icon,c.title)}}},{key:"addTool",value:function(t,e,n){var o=this,r=h.default.make("div",[p.CSS.conversionTool]),s=h.default.make("div",[p.CSS.conversionToolIcon]);r.dataset.tool=t,s.innerHTML=e,h.default.append(r,s),h.default.append(r,h.default.text(g.default.t(b.I18nInternalNS.toolNames,n||v.capitalize(t)))),h.default.append(this.nodes.tools,r),this.tools[t]=r,this.Editor.Listeners.on(r,"click",(0,a.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.replaceWithBlock(t);case 2:case"end":return e.stop()}}),e)}))))}},{key:"filterTools",value:function(){var t=this.Editor.BlockManager.currentBlock;Object.entries(this.tools).forEach((function(e){var n=(0,r.default)(e,2),o=n[0],i=n[1];i.hidden=!1,i.classList.toggle(p.CSS.conversionToolHidden,o===t.name)}))}},{key:"enableFlipper",value:function(){this.flipper=new y.default({focusedItemClass:p.CSS.conversionToolFocused})}}],[{key:"CSS",get:function(){return{conversionToolbarWrapper:"ce-conversion-toolbar",conversionToolbarShowed:"ce-conversion-toolbar--showed",conversionToolbarTools:"ce-conversion-toolbar__tools",conversionToolbarLabel:"ce-conversion-toolbar__label",conversionTool:"ce-conversion-tool",conversionToolHidden:"ce-conversion-tool--hidden",conversionToolIcon:"ce-conversion-tool__icon",conversionToolFocused:"ce-conversion-tool--focused",conversionToolActive:"ce-conversion-tool--active"}}}]),p}(p.default);o.default=S,S.displayName="ConversionToolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(66),n(39),n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(25),n(8),n(60),n(59),n(82)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y,g){"use strict";var b=n(13),m=n(1);function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=m(r),i=m(i),a=m(a),s=m(s),c=m(c),l=m(l),u=m(u),f=m(f),d=m(d),p=m(p),h=b(h),v=m(v),y=m(y);var x=function(t){(0,c.default)(o,t);var e,n=(e=o,function(){var t,n=(0,u.default)(e);if(k()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function o(){var t;return(0,a.default)(this,o),(t=n.apply(this,arguments)).CSS={inlineToolbar:"ce-inline-toolbar",inlineToolbarShowed:"ce-inline-toolbar--showed",inlineToolbarLeftOriented:"ce-inline-toolbar--left-oriented",inlineToolbarRightOriented:"ce-inline-toolbar--right-oriented",inlineToolbarShortcut:"ce-inline-toolbar__shortcut",buttonsWrapper:"ce-inline-toolbar__buttons",actionsWrapper:"ce-inline-toolbar__actions",inlineToolButton:"ce-inline-tool",inputField:"cdx-input",focusedButton:"ce-inline-tool--focused",conversionToggler:"ce-inline-toolbar__dropdown",conversionTogglerHidden:"ce-inline-toolbar__dropdown--hidden",conversionTogglerContent:"ce-inline-toolbar__dropdown-content",togglerAndButtonsWrapper:"ce-inline-toolbar__toggler-and-button-wrapper"},t.opened=!1,t.toolbarVerticalMargin=5,t.buttonsList=null,t.width=0,t.flipper=null,t}return(0,s.default)(o,[{key:"toggleReadOnly",value:function(t){t?this.destroy():this.make()}},{key:"tryToShow",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.allowedToShow()?(this.move(),this.open(),this.Editor.Toolbar.close()):t&&this.close()}},{key:"move",value:function(){var t=p.default.rect,e=this.Editor.UI.nodes.wrapper.getBoundingClientRect(),n={x:t.x-e.left,y:t.y+t.height-e.top+this.toolbarVerticalMargin};t.width&&(n.x+=Math.floor(t.width/2));var o=n.x-this.width/2,r=n.x+this.width/2;this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented,o<this.Editor.UI.contentRect.left),this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented,r>this.Editor.UI.contentRect.right),this.nodes.wrapper.style.left=Math.floor(n.x)+"px",this.nodes.wrapper.style.top=Math.floor(n.y)+"px"}},{key:"close",value:function(){this.opened&&(this.Editor.ReadOnly.isEnabled||(this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed),this.toolsInstances.forEach((function(t){h.isFunction(t.clear)&&t.clear()})),this.opened=!1,this.flipper.deactivate(),this.Editor.ConversionToolbar.close()))}},{key:"open",value:function(){if(!this.opened){this.addToolsFiltered(),this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed),this.buttonsList=this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)),this.opened=!0,this.Editor.ConversionToolbar.hasTools()?this.setConversionTogglerContent():this.nodes.conversionToggler.hidden=!0;var t=Array.from(this.buttonsList);t.unshift(this.nodes.conversionToggler),t=t.filter((function(t){return!t.hidden})),this.flipper.activate(t)}}},{key:"containsNode",value:function(t){return this.nodes.wrapper.contains(t)}},{key:"destroy",value:function(){this.flipper.deactivate(),this.flipper=null,this.Editor.ConversionToolbar.destroy()}},{key:"getInlineToolbarSettings",value:function(t){var e=this,n=this.Editor.Tools.getToolSettings(t)[this.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS];if(!0!==n&&!Array.isArray(n))return!1;if(Array.isArray(n))return n;var o=this.config.inlineToolbar;return Array.isArray(o)?o:!0===o&&Object.entries(this.Editor.Tools.available).filter((function(t){var n=(0,i.default)(t,2);return n[0],n[1][e.Editor.Tools.INTERNAL_SETTINGS.IS_INLINE]})).map((function(t){var e=(0,i.default)(t,2),n=e[0];return e[1],n}))}},{key:"make",value:function(){var t=this;this.nodes.wrapper=d.default.make("div",[this.CSS.inlineToolbar].concat((0,r.default)(this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]))),this.nodes.togglerAndButtonsWrapper=d.default.make("div",this.CSS.togglerAndButtonsWrapper),this.nodes.buttons=d.default.make("div",this.CSS.buttonsWrapper),this.nodes.actions=d.default.make("div",this.CSS.actionsWrapper),this.Editor.Listeners.on(this.nodes.wrapper,"mousedown",(function(e){e.target.closest(".".concat(t.CSS.actionsWrapper))||e.preventDefault()})),d.default.append(this.nodes.wrapper,[this.nodes.togglerAndButtonsWrapper,this.nodes.actions]),d.default.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper),this.addConversionToggler(),d.default.append(this.nodes.togglerAndButtonsWrapper,this.nodes.buttons),this.prepareConversionToolbar(),this.recalculateWidth(),this.enableFlipper()}},{key:"allowedToShow",value:function(){var t=p.default.get(),e=p.default.text;if(!t||!t.anchorNode)return!1;if(t.isCollapsed||e.length<1)return!1;var n=d.default.isElement(t.anchorNode)?t.anchorNode:t.anchorNode.parentElement;if(t&&["IMG","INPUT"].includes(n.tagName))return!1;if(null===n.closest('[contenteditable="true"]'))return!1;var o=this.Editor.BlockManager.getBlock(t.anchorNode);return!!o&&!1!==this.getInlineToolbarSettings(o.name)}},{key:"recalculateWidth",value:function(){this.width=this.nodes.wrapper.offsetWidth}},{key:"addConversionToggler",value:function(){var t=this;this.nodes.conversionToggler=d.default.make("div",this.CSS.conversionToggler),this.nodes.conversionTogglerContent=d.default.make("div",this.CSS.conversionTogglerContent);var e=d.default.svg("toggler-down",13,13);this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent),this.nodes.conversionToggler.appendChild(e),this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler),this.Editor.Listeners.on(this.nodes.conversionToggler,"click",(function(){t.Editor.ConversionToolbar.toggle((function(e){!e&&t.opened?t.flipper.activate():t.opened&&t.flipper.deactivate()}))})),this.Editor.Tooltip.onHover(this.nodes.conversionToggler,y.default.ui(g.I18nInternalNS.ui.inlineToolbar.converter,"Convert to"),{placement:"top",hidingDelay:100})}},{key:"setConversionTogglerContent",value:function(){var t=this.Editor,e=t.BlockManager,n=t.Tools,o=e.currentBlock.name,r=n.available[o][n.INTERNAL_SETTINGS.CONVERSION_CONFIG]||{},i=r&&r.export;this.nodes.conversionToggler.hidden=!i,this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden,!i);var a=n.getToolSettings(o),s=n.available[o][n.INTERNAL_SETTINGS.TOOLBOX]||{},c=a.toolbox||{};this.nodes.conversionTogglerContent.innerHTML=c.icon||s.icon||c.title||s.title||h.capitalize(o)}},{key:"prepareConversionToolbar",value:function(){var t=this.Editor.ConversionToolbar.make();d.default.append(this.nodes.wrapper,t)}},{key:"addToolsFiltered",value:function(){var t=this,e=p.default.get(),n=this.Editor.BlockManager.getBlock(e.anchorNode);this.nodes.buttons.innerHTML="",this.nodes.actions.innerHTML="",this.toolsInstances=new Map,this.getInlineToolbarSettings(n.name).forEach((function(e){var n=t.Editor.Tools.getToolSettings(e),o=t.Editor.Tools.constructInline(t.Editor.Tools.inline[e],e,n);t.addTool(e,o),o.checkState(p.default.get())})),this.recalculateWidth()}},{key:"addTool",value:function(t,e){var n=this,o=this.Editor,r=o.Listeners,a=o.Tools,s=o.Tooltip,c=e.render();if(c){if(c.dataset.tool=t,this.nodes.buttons.appendChild(c),this.toolsInstances.set(t,e),h.isFunction(e.renderActions)){var l=e.renderActions();this.nodes.actions.appendChild(l)}r.on(c,"click",(function(t){n.toolClicked(e),t.preventDefault()}));var u=a.getToolSettings(t),f=null;Object.entries(a.internalTools).filter((function(t){var e=(0,i.default)(t,2)[1];return h.isFunction(e)?e[a.INTERNAL_SETTINGS.IS_INLINE]:e.class[a.INTERNAL_SETTINGS.IS_INLINE]})).map((function(t){return(0,i.default)(t,1)[0]})).includes(t)?f=this.inlineTools[t][a.INTERNAL_SETTINGS.SHORTCUT]:u&&u[a.USER_SETTINGS.SHORTCUT]?f=u[a.USER_SETTINGS.SHORTCUT]:e.shortcut&&(f=e.shortcut),f&&this.enableShortcuts(e,f);var p=d.default.make("div"),v=y.default.t(g.I18nInternalNS.toolNames,a.toolsClasses[t][a.INTERNAL_SETTINGS.TITLE]||h.capitalize(t));p.appendChild(d.default.text(v)),f&&p.appendChild(d.default.make("div",this.CSS.inlineToolbarShortcut,{textContent:h.beautifyShortcut(f)})),s.onHover(c,p,{placement:"top",hidingDelay:100})}else h.log("Render method must return an instance of Node","warn",t)}},{key:"enableShortcuts",value:function(t,e){var n=this;this.Editor.Shortcuts.add({name:e,handler:function(e){var o=n.Editor.BlockManager.currentBlock;if(o){var r=n.Editor.Tools.getToolSettings(o.name);r&&r[n.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS]&&(e.preventDefault(),n.toolClicked(t))}}})}},{key:"toolClicked",value:function(t){var e=p.default.range;t.surround(e),this.checkToolsState()}},{key:"checkToolsState",value:function(){this.toolsInstances.forEach((function(t){t.checkState(p.default.get())}))}},{key:"enableFlipper",value:function(){this.flipper=new v.default({focusedItemClass:this.CSS.focusedButton,allowArrows:!1})}},{key:"inlineTools",get:function(){var t={};for(var e in this.Editor.Tools.inline)if(Object.prototype.hasOwnProperty.call(this.Editor.Tools.inline,e)){var n=this.Editor.Tools.getToolSettings(e);t[e]=this.Editor.Tools.constructInline(this.Editor.Tools.inline[e],e,n)}return t}}]),o}(f.default);o.default=x,x.displayName="InlineToolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(15),n(8),n(60),n(61),n(59),n(82)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v){"use strict";var y=n(13),g=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),c=g(c),l=g(l),u=g(u),f=y(f),d=g(d),h=g(h);var m=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(b()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).nodes={toolbox:null,buttons:[]},t.opened=!1,t.displayedToolsCount=0,t.flipper=null,t}return(0,i.default)(o,[{key:"make",value:function(){this.nodes.toolbox=u.default.make("div",this.CSS.toolbox),this.addTools(),this.enableFlipper()}},{key:"destroy",value:function(){this.flipper.deactivate(),this.flipper=null,this.removeAllNodes(),this.removeAllShortcuts()}},{key:"toolButtonActivate",value:function(t,e){var n=this.Editor.Tools.toolsClasses[e];this.insertNewBlock(n,e)}},{key:"open",value:function(){this.isEmpty||(this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier),this.nodes.toolbox.classList.add(this.CSS.toolboxOpened),this.opened=!0,this.flipper.activate())}},{key:"close",value:function(){this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened),this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier),this.opened=!1,this.flipper.deactivate()}},{key:"toggle",value:function(){this.opened?this.close():this.open()}},{key:"addTools",value:function(){var t=this.Editor.Tools.available;for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&this.addTool(e,t[e])}},{key:"addTool",value:function(t,e){var n=this,o=this.Editor.Tools.INTERNAL_SETTINGS,r=this.Editor.Tools.USER_SETTINGS,i=e[o.TOOLBOX];if(!f.isEmpty(i))if(!i||i.icon){var a=this.Editor.Tools.getToolSettings(t)[r.TOOLBOX];if(!1!==(null!=a?a:i)){var s=u.default.make("li",[this.CSS.toolboxButton]);s.dataset.tool=t,s.innerHTML=a&&a.icon||i.icon,u.default.append(this.nodes.toolbox,s),this.nodes.toolbox.appendChild(s),this.nodes.buttons.push(s),this.Editor.Listeners.on(s,"click",(function(e){n.toolButtonActivate(e,t)}));var c=this.drawTooltip(t);this.Editor.Tooltip.onHover(s,c,{placement:"bottom",hidingDelay:200});var l=this.getToolShortcut(t,e);l&&this.enableShortcut(e,t,l),this.displayedToolsCount++}}else f.log("Toolbar icon is missed. Tool %o skipped","warn",t)}},{key:"getToolShortcut",value:function(t,e){var n=this.Editor.Tools.getToolSettings(t),o=e[this.Editor.Tools.INTERNAL_SETTINGS.SHORTCUT];return(n?n[this.Editor.Tools.USER_SETTINGS.SHORTCUT]:null)||o}},{key:"drawTooltip",value:function(t){var e=this.Editor.Tools.available[t],n=this.Editor.Tools.getToolSettings(t),o=this.Editor.Tools.available[t][this.Editor.Tools.INTERNAL_SETTINGS.TOOLBOX]||{},r=n.toolbox||{},i=h.default.t(v.I18nInternalNS.toolNames,r.title||o.title||t),a=this.getToolShortcut(t,e),s=u.default.make("div",this.CSS.buttonTooltip),c=document.createTextNode(f.capitalize(i));return s.appendChild(c),a&&(a=f.beautifyShortcut(a),s.appendChild(u.default.make("div",this.CSS.buttonShortcut,{textContent:a}))),s}},{key:"enableShortcut",value:function(t,e,n){var o=this;this.Editor.Shortcuts.add({name:n,handler:function(n){n.preventDefault(),o.insertNewBlock(t,e)}})}},{key:"removeAllShortcuts",value:function(){var t=this.Editor.Tools.available;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var n=this.getToolShortcut(e,t[e]);n&&this.Editor.Shortcuts.remove(n)}}},{key:"enableFlipper",value:function(){var t=Array.from(this.nodes.toolbox.childNodes);this.flipper=new d.default({items:t,focusedItemClass:this.CSS.toolboxButtonActive})}},{key:"insertNewBlock",value:function(t,e){var n=this.Editor,o=n.BlockManager,r=n.Caret,i=o.currentBlock,a=o.insert({tool:e,replace:i.isEmpty});a.call(p.BlockToolAPI.APPEND_CALLBACK),this.Editor.Caret.setToBlock(a),0===a.inputs.length&&(a===o.lastBlock?(o.insertAtEnd(),r.setToBlock(o.lastBlock)):r.setToBlock(o.nextBlock)),this.Editor.Toolbar.close()}},{key:"CSS",get:function(){return{toolbox:"ce-toolbox",toolboxButton:"ce-toolbox__button",toolboxButtonActive:"ce-toolbox__button--active",toolboxOpened:"ce-toolbox--opened",openedToolbarHolderModifier:"codex-editor--toolbox-opened",buttonTooltip:"ce-toolbox-button-tooltip",buttonShortcut:"ce-toolbox-button-tooltip__shortcut"}}},{key:"isEmpty",get:function(){return 0===this.displayedToolsCount}}]),o}(l.default);o.default=m,m.displayName="Toolbox",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(387)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),c=f(c),l=f(l),u=f(u);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(t){var e,i=t.config;return(0,r.default)(this,o),(e=n.call(this,{config:i})).lib=new u.default,e}return(0,i.default)(o,[{key:"show",value:function(t,e,n){this.lib.show(t,e,n)}},{key:"hide",value:function(){this.lib.hide()}},{key:"onHover",value:function(t,e,n){this.lib.onHover(t,e,n)}}]),o}(l.default);o.default=p,p.displayName="Tooltip",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(66),n(21),n(22),n(2),n(3),n(5),n(6),n(4),n(388),n(7),n(15),n(8),n(25),n(61),n(60)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d,p,h,v,y,g,b,m){"use strict";var k=n(13),x=n(1);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=x(r),i=x(i),a=x(a),s=x(s),c=x(c),l=x(l),u=x(u),f=x(f),d=x(d),p=x(p),h=x(h),v=x(v),y=k(y),g=x(g),b=x(b),m=x(m);var w=function(t){(0,u.default)(k,t);var e,o,h=(e=k,function(){var t,n=(0,d.default)(e);if(S()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function k(){var t;return(0,c.default)(this,k),(t=h.apply(this,arguments)).isMobile=!1,t.contentRectCache=void 0,t.resizeDebouncer=y.debounce((function(){t.windowResize()}),200),t}return(0,l.default)(k,[{key:"addLoader",value:function(){this.nodes.loader=v.default.make("div",this.CSS.editorLoader),this.nodes.wrapper.prepend(this.nodes.loader),this.nodes.redactor.classList.add(this.CSS.editorZoneHidden)}},{key:"removeLoader",value:function(){this.nodes.loader.remove(),this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden)}},{key:"prepare",value:(o=(0,s.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.checkIsMobile(),this.make(),this.addLoader(),this.appendSVGSprite(),this.loadStyles();case 5:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"checkEmptiness",value:function(){var t=this.Editor.BlockManager;this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty,t.isEditorEmpty)}},{key:"destroy",value:function(){this.nodes.holder.innerHTML=""}},{key:"closeAllToolbars",value:function(){var t=this.Editor,e=t.Toolbox,n=t.BlockSettings,o=t.InlineToolbar,r=t.ConversionToolbar;n.close(),o.close(),r.close(),e.close()}},{key:"checkIsMobile",value:function(){this.isMobile=window.innerWidth<650}},{key:"make",value:function(){this.nodes.holder=v.default.getHolder(this.config.holder),this.nodes.wrapper=v.default.make("div",[this.CSS.editorWrapper].concat((0,i.default)(this.isRtl?[this.CSS.editorRtlFix]:[]))),this.nodes.redactor=v.default.make("div",this.CSS.editorZone),this.nodes.holder.offsetWidth<this.contentRect.width&&this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow),this.nodes.redactor.style.paddingBottom=this.config.minHeight+"px",this.nodes.wrapper.appendChild(this.nodes.redactor),this.nodes.holder.appendChild(this.nodes.wrapper)}},{key:"loadStyles",value:function(){var t=n(389);if(!v.default.get("editor-js-styles")){var e=v.default.make("style",null,{id:"editor-js-styles",textContent:t.toString()});v.default.prepend(document.head,e)}}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(this.nodes.redactor,"click",(function(e){t.redactorClicked(e)}),!1),this.readOnlyMutableListeners.on(this.nodes.redactor,"mousedown",(function(e){t.documentTouched(e)}),!0),this.readOnlyMutableListeners.on(this.nodes.redactor,"touchstart",(function(e){t.documentTouched(e)}),!0),this.readOnlyMutableListeners.on(document,"keydown",(function(e){t.documentKeydown(e)}),!0),this.readOnlyMutableListeners.on(document,"click",(function(e){t.documentClicked(e)}),!0),this.readOnlyMutableListeners.on(document,"selectionchange",(function(e){t.selectionChanged(e)}),!0),this.readOnlyMutableListeners.on(window,"resize",(function(){t.resizeDebouncer()}),{passive:!0})}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"windowResize",value:function(){this.contentRectCache=null,this.checkIsMobile()}},{key:"documentKeydown",value:function(t){switch(t.keyCode){case y.keyCodes.ENTER:this.enterPressed(t);break;case y.keyCodes.BACKSPACE:this.backspacePressed(t);break;case y.keyCodes.ESC:this.escapePressed(t);break;default:this.defaultBehaviour(t)}}},{key:"defaultBehaviour",value:function(t){var e=this.Editor.BlockManager.currentBlock,n=t.target.closest(".".concat(this.CSS.editorWrapper)),o=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;void 0===e||null!==n?n||e&&o||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close()):this.Editor.BlockEvents.keydown(t)}},{key:"backspacePressed",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret;if(o.anyBlockSelected&&!g.default.isSelectionExists){var i=n.removeSelectedBlocks();r.setToBlock(n.insertDefaultBlockAtIndex(i,!0),r.positions.START),o.clearSelection(t),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()}}},{key:"escapePressed",value:function(t){this.Editor.BlockSelection.clearSelection(t),this.Editor.Toolbox.opened?this.Editor.Toolbox.close():this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.ConversionToolbar.opened?this.Editor.ConversionToolbar.close():this.Editor.InlineToolbar.opened?this.Editor.InlineToolbar.close():this.Editor.Toolbar.close()}},{key:"enterPressed",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=(e.Caret,n.currentBlockIndex>=0);if(o.anyBlockSelected&&!g.default.isSelectionExists)return o.clearSelection(t),t.preventDefault(),t.stopImmediatePropagation(),void t.stopPropagation();if(!this.someToolbarOpened&&r&&"BODY"===t.target.tagName){var i=this.Editor.BlockManager.insert();this.Editor.Caret.setToBlock(i),this.Editor.BlockManager.highlightCurrentNode(),this.Editor.Toolbar.move(),this.Editor.Toolbar.plusButton.show()}this.Editor.BlockSelection.clearSelection(t)}},{key:"documentClicked",value:function(t){if(t.isTrusted){var e=t.target;this.nodes.holder.contains(e)||g.default.isAtEditor||(this.Editor.BlockManager.dropPointer(),this.Editor.InlineToolbar.close(),this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close()),this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted||this.Editor.BlockSelection.clearSelection(t)}}},{key:"documentTouched",value:function(t){var e=t.target;if(e===this.nodes.redactor){var n=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,o=t instanceof MouseEvent?t.clientY:t.touches[0].clientY;e=document.elementFromPoint(n,o)}try{this.Editor.BlockManager.setCurrentBlockByChildNode(e),this.Editor.BlockManager.highlightCurrentNode()}catch(t){this.Editor.RectangleSelection.isRectActivated()||this.Editor.Caret.setToTheLastBlock()}this.Editor.Toolbar.open(),this.Editor.Toolbar.plusButton.hide()}},{key:"redactorClicked",value:function(t){if(g.default.isCollapsed){var e=function(){t.stopImmediatePropagation(),t.stopPropagation()},n=t.target,o=t.metaKey||t.ctrlKey;if(v.default.isAnchor(n)&&o){e();var r=n.getAttribute("href"),i=y.getValidUrl(r);y.openTab(i)}else this.Editor.BlockManager.currentBlock||(e(),this.Editor.BlockManager.insert()),this.Editor.Tools.isDefault(this.Editor.BlockManager.currentBlock.tool)&&(e(),this.Editor.BlockManager.currentBlock.isEmpty&&this.Editor.Toolbar.plusButton.show())}}},{key:"selectionChanged",value:function(t){var e=this.Editor,n=e.CrossBlockSelection,o=e.BlockSelection,r=g.default.anchorElement;n.isCrossBlockSelectionStarted&&o.anyBlockSelected&&g.default.get().removeAllRanges(),r&&r.closest(".".concat(b.default.CSS.content))?this.Editor.InlineToolbar.tryToShow(!0):this.Editor.InlineToolbar.containsNode(r)||this.Editor.InlineToolbar.close()}},{key:"appendSVGSprite",value:function(){var t=v.default.make("div");t.hidden=!0,t.style.display="none",t.innerHTML=p.default,v.default.append(this.nodes.wrapper,t)}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorWrapperNarrow:"codex-editor--narrow",editorZone:"codex-editor__redactor",editorZoneHidden:"codex-editor__redactor--hidden",editorLoader:"codex-editor__loader",editorEmpty:"codex-editor--empty",editorRtlFix:"codex-editor--rtl"}}},{key:"contentRect",get:function(){if(this.contentRectCache)return this.contentRectCache;var t=this.nodes.wrapper.querySelector(".".concat(b.default.CSS.content));return t?(this.contentRectCache=t.getBoundingClientRect(),this.contentRectCache):{width:650,left:0,right:0}}},{key:"someToolbarOpened",get:function(){var t=this.Editor,e=t.Toolbox,n=t.BlockSettings,o=t.InlineToolbar,r=t.ConversionToolbar;return n.opened||o.opened||r.opened||e.opened}},{key:"someFlipperButtonFocused",get:function(){return Object.entries(this.Editor).filter((function(t){var e=(0,r.default)(t,2);return e[0],e[1].flipper instanceof m.default})).some((function(t){var e=(0,r.default)(t,2);return e[0],e[1].flipper.currentItem}))}}]),k}(h.default);o.default=w,w.displayName="UI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){n(184),t.exports=n(356)},function(t,e,n){n(185)},function(t,e,n){"use strict";n(186),n(329),n(331),n(334),n(336),n(338),n(340),n(342),n(344),n(346),n(348),n(350),n(352),n(140)},function(t,e,n){n(187),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(268),n(269),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(103),n(292),n(129),n(293),n(130),n(294),n(295),n(296),n(297),n(131),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),t.exports=n(17)},function(t,e,n){"use strict";var o=n(9),r=n(26),i=n(18),a=n(0),s=n(23),c=n(41).KEY,l=n(10),u=n(68),f=n(53),d=n(43),p=n(14),h=n(84),v=n(110),y=n(189),g=n(71),b=n(11),m=n(12),k=n(20),x=n(28),S=n(40),w=n(42),E=n(47),T=n(113),C=n(33),B=n(70),_=n(19),O=n(45),I=C.f,N=_.f,R=T.f,M=o.Symbol,L=o.JSON,A=L&&L.stringify,P=p("_hidden"),D=p("toPrimitive"),j={}.propertyIsEnumerable,F=u("symbol-registry"),U=u("symbols"),H=u("op-symbols"),z=Object.prototype,W="function"==typeof M&&!!B.f,G=o.QObject,X=!G||!G.prototype||!G.prototype.findChild,V=i&&l((function(){return 7!=E(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=I(z,e);o&&delete z[e],N(t,e,n),o&&t!==z&&N(z,e,o)}:N,Y=function(t){var e=U[t]=E(M.prototype);return e._k=t,e},K=W&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},Z=function(t,e,n){return t===z&&Z(H,e,n),b(t),e=S(e,!0),b(n),r(U,e)?(n.enumerable?(r(t,P)&&t[P][e]&&(t[P][e]=!1),n=E(n,{enumerable:w(0,!1)})):(r(t,P)||N(t,P,w(1,{})),t[P][e]=!0),V(t,e,n)):N(t,e,n)},q=function(t,e){b(t);for(var n,o=y(e=x(e)),r=0,i=o.length;i>r;)Z(t,n=o[r++],e[n]);return t},J=function(t){var e=j.call(this,t=S(t,!0));return!(this===z&&r(U,t)&&!r(H,t))&&(!(e||!r(this,t)||!r(U,t)||r(this,P)&&this[P][t])||e)},$=function(t,e){if(t=x(t),e=S(e,!0),t!==z||!r(U,e)||r(H,e)){var n=I(t,e);return!n||!r(U,e)||r(t,P)&&t[P][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=R(x(t)),o=[],i=0;n.length>i;)r(U,e=n[i++])||e==P||e==c||o.push(e);return o},tt=function(t){for(var e,n=t===z,o=R(n?H:x(t)),i=[],a=0;o.length>a;)!r(U,e=o[a++])||n&&!r(z,e)||i.push(U[e]);return i};W||(s((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(H,n),r(this,P)&&r(this[P],t)&&(this[P][t]=!1),V(this,t,w(1,n))};return i&&X&&V(z,t,{configurable:!0,set:e}),Y(t)}).prototype,"toString",(function(){return this._k})),C.f=$,_.f=Z,n(48).f=T.f=Q,n(63).f=J,B.f=tt,i&&!n(44)&&s(z,"propertyIsEnumerable",J,!0),h.f=function(t){return Y(p(t))}),a(a.G+a.W+a.F*!W,{Symbol:M});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var ot=O(p.store),rt=0;ot.length>rt;)v(ot[rt++]);a(a.S+a.F*!W,"Symbol",{for:function(t){return r(F,t+="")?F[t]:F[t]=M(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in F)if(F[e]===t)return e},useSetter:function(){X=!0},useSimple:function(){X=!1}}),a(a.S+a.F*!W,"Object",{create:function(t,e){return void 0===e?E(t):q(E(t),e)},defineProperty:Z,defineProperties:q,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var it=l((function(){B.f(1)}));a(a.S+a.F*it,"Object",{getOwnPropertySymbols:function(t){return B.f(k(t))}}),L&&a(a.S+a.F*(!W||l((function(){var t=M();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=e=o[1],(m(e)||void 0!==t)&&!K(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),o[1]=e,A.apply(L,o)}}),M.prototype[D]||n(27)(M.prototype,D,M.prototype.valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},function(t,e,n){t.exports=n(68)("native-function-to-string",Function.toString)},function(t,e,n){var o=n(45),r=n(70),i=n(63);t.exports=function(t){var e=o(t),n=r.f;if(n)for(var a,s=n(t),c=i.f,l=0;s.length>l;)c.call(t,a=s[l++])&&e.push(a);return e}},function(t,e,n){var o=n(0);o(o.S,"Object",{create:n(47)})},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperty:n(19).f})},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperties:n(112)})},function(t,e,n){var o=n(28),r=n(33).f;n(34)("getOwnPropertyDescriptor",(function(){return function(t,e){return r(o(t),e)}}))},function(t,e,n){var o=n(20),r=n(49);n(34)("getPrototypeOf",(function(){return function(t){return r(o(t))}}))},function(t,e,n){var o=n(20),r=n(45);n(34)("keys",(function(){return function(t){return r(o(t))}}))},function(t,e,n){n(34)("getOwnPropertyNames",(function(){return n(113).f}))},function(t,e,n){var o=n(12),r=n(41).onFreeze;n(34)("freeze",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(12),r=n(41).onFreeze;n(34)("seal",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(12),r=n(41).onFreeze;n(34)("preventExtensions",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(12);n(34)("isFrozen",(function(t){return function(e){return!o(e)||!!t&&t(e)}}))},function(t,e,n){var o=n(12);n(34)("isSealed",(function(t){return function(e){return!o(e)||!!t&&t(e)}}))},function(t,e,n){var o=n(12);n(34)("isExtensible",(function(t){return function(e){return!!o(e)&&(!t||t(e))}}))},function(t,e,n){var o=n(0);o(o.S+o.F,"Object",{assign:n(114)})},function(t,e,n){var o=n(0);o(o.S,"Object",{is:n(115)})},function(t,e,n){var o=n(0);o(o.S,"Object",{setPrototypeOf:n(88).set})},function(t,e,n){"use strict";var o=n(64),r={};r[n(14)("toStringTag")]="z",r+""!="[object z]"&&n(23)(Object.prototype,"toString",(function(){return"[object "+o(this)+"]"}),!0)},function(t,e,n){var o=n(0);o(o.P,"Function",{bind:n(116)})},function(t,e,n){var o=n(19).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var o=n(12),r=n(49),i=n(14)("hasInstance"),a=Function.prototype;i in a||n(19).f(a,i,{value:function(t){if("function"!=typeof this||!o(t))return!1;if(!o(this.prototype))return t instanceof this;for(;t=r(t);)if(this.prototype===t)return!0;return!1}})},function(t,e,n){var o=n(0),r=n(118);o(o.G+o.F*(parseInt!=r),{parseInt:r})},function(t,e,n){var o=n(0),r=n(119);o(o.G+o.F*(parseFloat!=r),{parseFloat:r})},function(t,e,n){"use strict";var o=n(9),r=n(26),i=n(36),a=n(90),s=n(40),c=n(10),l=n(48).f,u=n(33).f,f=n(19).f,d=n(54).trim,p=o.Number,h=p,v=p.prototype,y="Number"==i(n(47)(v)),g="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,i=(e=g?e.trim():d(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var a,c=e.slice(2),l=0,u=c.length;l<u;l++)if((a=c.charCodeAt(l))<48||a>r)return NaN;return parseInt(c,o)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(y?c((function(){v.valueOf.call(n)})):"Number"!=i(n))?a(new h(b(e)),n,p):b(e)};for(var m,k=n(18)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;k.length>x;x++)r(h,m=k[x])&&!r(p,m)&&f(p,m,u(h,m));p.prototype=v,v.constructor=p,n(23)(o,"Number",p)}},function(t,e,n){"use strict";var o=n(0),r=n(32),i=n(120),a=n(91),s=1..toFixed,c=Math.floor,l=[0,0,0,0,0,0],u="Number.toFixed: incorrect invocation!",f=function(t,e){for(var n=-1,o=e;++n<6;)o+=t*l[n],l[n]=o%1e7,o=c(o/1e7)},d=function(t){for(var e=6,n=0;--e>=0;)n+=l[e],l[e]=c(n/t),n=n%t*1e7},p=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==l[t]){var n=String(l[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e},h=function(t,e,n){return 0===e?n:e%2==1?h(t,e-1,n*t):h(t*t,e/2,n)};o(o.P+o.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(10)((function(){s.call({})}))),"Number",{toFixed:function(t){var e,n,o,s,c=i(this,u),l=r(t),v="",y="0";if(l<0||l>20)throw RangeError(u);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*h(2,69,1))-69)<0?c*h(2,-e,1):c/h(2,e,1),n*=4503599627370496,(e=52-e)>0){for(f(0,n),o=l;o>=7;)f(1e7,0),o-=7;for(f(h(10,o,1),0),o=e-1;o>=23;)d(1<<23),o-=23;d(1<<o),f(1,1),d(2),y=p()}else f(0,n),f(1<<-e,0),y=p()+a.call("0",l);return y=l>0?v+((s=y.length)<=l?"0."+a.call("0",l-s)+y:y.slice(0,s-l)+"."+y.slice(s-l)):v+y}})},function(t,e,n){"use strict";var o=n(0),r=n(10),i=n(120),a=1..toPrecision;o(o.P+o.F*(r((function(){return"1"!==a.call(1,void 0)}))||!r((function(){a.call({})}))),"Number",{toPrecision:function(t){var e=i(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},function(t,e,n){var o=n(0);o(o.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,n){var o=n(0),r=n(9).isFinite;o(o.S,"Number",{isFinite:function(t){return"number"==typeof t&&r(t)}})},function(t,e,n){var o=n(0);o(o.S,"Number",{isInteger:n(121)})},function(t,e,n){var o=n(0);o(o.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var o=n(0),r=n(121),i=Math.abs;o(o.S,"Number",{isSafeInteger:function(t){return r(t)&&i(t)<=9007199254740991}})},function(t,e,n){var o=n(0);o(o.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){var o=n(0);o(o.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var o=n(0),r=n(119);o(o.S+o.F*(Number.parseFloat!=r),"Number",{parseFloat:r})},function(t,e,n){var o=n(0),r=n(118);o(o.S+o.F*(Number.parseInt!=r),"Number",{parseInt:r})},function(t,e,n){var o=n(0),r=n(122),i=Math.sqrt,a=Math.acosh;o(o.S+o.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:r(t-1+i(t-1)*i(t+1))}})},function(t,e,n){var o=n(0),r=Math.asinh;o(o.S+o.F*!(r&&1/r(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e}})},function(t,e,n){var o=n(0),r=Math.atanh;o(o.S+o.F*!(r&&1/r(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,e,n){var o=n(0),r=n(92);o(o.S,"Math",{cbrt:function(t){return r(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,e,n){var o=n(0);o(o.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,e,n){var o=n(0),r=Math.exp;o(o.S,"Math",{cosh:function(t){return(r(t=+t)+r(-t))/2}})},function(t,e,n){var o=n(0),r=n(93);o(o.S+o.F*(r!=Math.expm1),"Math",{expm1:r})},function(t,e,n){var o=n(0);o(o.S,"Math",{fround:n(232)})},function(t,e,n){var o=n(92),r=Math.pow,i=r(2,-52),a=r(2,-23),s=r(2,127)*(2-a),c=r(2,-126);t.exports=Math.fround||function(t){var e,n,r=Math.abs(t),l=o(t);return r<c?l*(r/c/a+1/i-1/i)*c*a:(n=(e=(1+a/i)*r)-(e-r))>s||n!=n?l*(1/0):l*n}},function(t,e,n){var o=n(0),r=Math.abs;o(o.S,"Math",{hypot:function(t,e){for(var n,o,i=0,a=0,s=arguments.length,c=0;a<s;)c<(n=r(arguments[a++]))?(i=i*(o=c/n)*o+1,c=n):i+=n>0?(o=n/c)*o:n;return c===1/0?1/0:c*Math.sqrt(i)}})},function(t,e,n){var o=n(0),r=Math.imul;o(o.S+o.F*n(10)((function(){return-5!=r(4294967295,5)||2!=r.length})),"Math",{imul:function(t,e){var n=+t,o=+e,r=65535&n,i=65535&o;return 0|r*i+((65535&n>>>16)*i+r*(65535&o>>>16)<<16>>>0)}})},function(t,e,n){var o=n(0);o(o.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,e,n){var o=n(0);o(o.S,"Math",{log1p:n(122)})},function(t,e,n){var o=n(0);o(o.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,e,n){var o=n(0);o(o.S,"Math",{sign:n(92)})},function(t,e,n){var o=n(0),r=n(93),i=Math.exp;o(o.S+o.F*n(10)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(r(t)-r(-t))/2:(i(t-1)-i(-t-1))*(Math.E/2)}})},function(t,e,n){var o=n(0),r=n(93),i=Math.exp;o(o.S,"Math",{tanh:function(t){var e=r(t=+t),n=r(-t);return e==1/0?1:n==1/0?-1:(e-n)/(i(t)+i(-t))}})},function(t,e,n){var o=n(0);o(o.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e,n){var o=n(0),r=n(46),i=String.fromCharCode,a=String.fromCodePoint;o(o.S+o.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,n=[],o=arguments.length,a=0;o>a;){if(e=+arguments[a++],r(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?i(e):i(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},function(t,e,n){var o=n(0),r=n(28),i=n(16);o(o.S,"String",{raw:function(t){for(var e=r(t.raw),n=i(e.length),o=arguments.length,a=[],s=0;n>s;)a.push(String(e[s++])),s<o&&a.push(String(arguments[s]));return a.join("")}})},function(t,e,n){"use strict";n(54)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,n){"use strict";var o=n(94)(!0);n(95)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var o=n(0),r=n(94)(!1);o(o.P,"String",{codePointAt:function(t){return r(this,t)}})},function(t,e,n){"use strict";var o=n(0),r=n(16),i=n(96),a="".endsWith;o(o.P+o.F*n(98)("endsWith"),"String",{endsWith:function(t){var e=i(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,o=r(e.length),s=void 0===n?o:Math.min(r(n),o),c=String(t);return a?a.call(e,c,s):e.slice(s-c.length,s)===c}})},function(t,e,n){"use strict";var o=n(0),r=n(96);o(o.P+o.F*n(98)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var o=n(0);o(o.P,"String",{repeat:n(91)})},function(t,e,n){"use strict";var o=n(0),r=n(16),i=n(96),a="".startsWith;o(o.P+o.F*n(98)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),o=String(t);return a?a.call(e,o,n):e.slice(n,n+o.length)===o}})},function(t,e,n){"use strict";n(24)("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},function(t,e,n){"use strict";n(24)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,e,n){"use strict";n(24)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,e,n){"use strict";n(24)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,e,n){"use strict";n(24)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,e,n){"use strict";n(24)("fontcolor",(function(t){return function(e){return t(this,"font","color",e)}}))},function(t,e,n){"use strict";n(24)("fontsize",(function(t){return function(e){return t(this,"font","size",e)}}))},function(t,e,n){"use strict";n(24)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,e,n){"use strict";n(24)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){"use strict";n(24)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,e,n){"use strict";n(24)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,e,n){"use strict";n(24)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,e,n){"use strict";n(24)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,e,n){var o=n(0);o(o.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";var o=n(0),r=n(20),i=n(40);o(o.P+o.F*n(10)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=r(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},function(t,e,n){var o=n(0),r=n(267);o(o.P+o.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r})},function(t,e,n){"use strict";var o=n(10),r=Date.prototype.getTime,i=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=o((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!o((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),o=e<0?"-":e>9999?"+":"";return o+("00000"+Math.abs(e)).slice(o?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:i},function(t,e,n){var o=Date.prototype,r=o.toString,i=o.getTime;new Date(NaN)+""!="Invalid Date"&&n(23)(o,"toString",(function(){var t=i.call(this);return t==t?r.call(this):"Invalid Date"}))},function(t,e,n){var o=n(14)("toPrimitive"),r=Date.prototype;o in r||n(27)(r,o,n(270))},function(t,e,n){"use strict";var o=n(11),r=n(40);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return r(o(this),"number"!=t)}},function(t,e,n){var o=n(0);o(o.S,"Array",{isArray:n(71)})},function(t,e,n){"use strict";var o=n(30),r=n(0),i=n(20),a=n(124),s=n(99),c=n(16),l=n(100),u=n(101);r(r.S+r.F*!n(72)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,f,d=i(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,g=0,b=u(d);if(y&&(v=o(v,h>2?arguments[2]:void 0,2)),null==b||p==Array&&s(b))for(n=new p(e=c(d.length));e>g;g++)l(n,g,y?v(d[g],g):d[g]);else for(f=b.call(d),n=new p;!(r=f.next()).done;g++)l(n,g,y?a(f,v,[r.value,g],!0):r.value);return n.length=g,n}})},function(t,e,n){"use strict";var o=n(0),r=n(100);o(o.S+o.F*n(10)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)r(n,t,arguments[t++]);return n.length=e,n}})},function(t,e,n){"use strict";var o=n(0),r=n(28),i=[].join;o(o.P+o.F*(n(62)!=Object||!n(29)(i)),"Array",{join:function(t){return i.call(r(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var o=n(0),r=n(87),i=n(36),a=n(46),s=n(16),c=[].slice;o(o.P+o.F*n(10)((function(){r&&c.call(r)})),"Array",{slice:function(t,e){var n=s(this.length),o=i(this);if(e=void 0===e?n:e,"Array"==o)return c.call(this,t,e);for(var r=a(t,n),l=a(e,n),u=s(l-r),f=new Array(u),d=0;d<u;d++)f[d]="String"==o?this.charAt(r+d):this[r+d];return f}})},function(t,e,n){"use strict";var o=n(0),r=n(31),i=n(20),a=n(10),s=[].sort,c=[1,2,3];o(o.P+o.F*(a((function(){c.sort(void 0)}))||!a((function(){c.sort(null)}))||!n(29)(s)),"Array",{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),r(t))}})},function(t,e,n){"use strict";var o=n(0),r=n(35)(0),i=n(29)([].forEach,!0);o(o.P+o.F*!i,"Array",{forEach:function(t){return r(this,t,arguments[1])}})},function(t,e,n){var o=n(12),r=n(71),i=n(14)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){"use strict";var o=n(0),r=n(35)(1);o(o.P+o.F*!n(29)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(35)(2);o(o.P+o.F*!n(29)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(35)(3);o(o.P+o.F*!n(29)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(35)(4);o(o.P+o.F*!n(29)([].every,!0),"Array",{every:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(126);o(o.P+o.F*!n(29)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){"use strict";var o=n(0),r=n(126);o(o.P+o.F*!n(29)([].reduceRight,!0),"Array",{reduceRight:function(t){return r(this,t,arguments.length,arguments[1],!0)}})},function(t,e,n){"use strict";var o=n(0),r=n(69)(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;o(o.P+o.F*(a||!n(29)(i)),"Array",{indexOf:function(t){return a?i.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(28),i=n(32),a=n(16),s=[].lastIndexOf,c=!!s&&1/[1].lastIndexOf(1,-0)<0;o(o.P+o.F*(c||!n(29)(s)),"Array",{lastIndexOf:function(t){if(c)return s.apply(this,arguments)||0;var e=r(this),n=a(e.length),o=n-1;for(arguments.length>1&&(o=Math.min(o,i(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}})},function(t,e,n){var o=n(0);o(o.P,"Array",{copyWithin:n(127)}),n(50)("copyWithin")},function(t,e,n){var o=n(0);o(o.P,"Array",{fill:n(102)}),n(50)("fill")},function(t,e,n){"use strict";var o=n(0),r=n(35)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),o(o.P+o.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(50)("find")},function(t,e,n){"use strict";var o=n(0),r=n(35)(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),o(o.P+o.F*a,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(50)(i)},function(t,e,n){n(56)("Array")},function(t,e,n){var o=n(9),r=n(90),i=n(19).f,a=n(48).f,s=n(97),c=n(73),l=o.RegExp,u=l,f=l.prototype,d=/a/g,p=/a/g,h=new l(d)!==d;if(n(18)&&(!h||n(10)((function(){return p[n(14)("match")]=!1,l(d)!=d||l(p)==p||"/a/i"!=l(d,"i")})))){l=function(t,e){var n=this instanceof l,o=s(t),i=void 0===e;return!n&&o&&t.constructor===l&&i?t:r(h?new u(o&&!i?t.source:t,e):u((o=t instanceof l)?t.source:t,o&&i?c.call(t):e),n?this:f,l)};for(var v=function(t){t in l||i(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},y=a(u),g=0;y.length>g;)v(y[g++]);f.constructor=l,l.prototype=f,n(23)(o,"RegExp",l)}n(56)("RegExp")},function(t,e,n){"use strict";n(130);var o=n(11),r=n(73),i=n(18),a=/./.toString,s=function(t){n(23)(RegExp.prototype,"toString",t,!0)};n(10)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?s((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)})):"toString"!=a.name&&s((function(){return a.call(this)}))},function(t,e,n){"use strict";var o=n(11),r=n(16),i=n(105),a=n(74);n(75)("match",1,(function(t,e,n,s){return[function(n){var o=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=s(n,t,this);if(e.done)return e.value;var c=o(t),l=String(this);if(!c.global)return a(c,l);var u=c.unicode;c.lastIndex=0;for(var f,d=[],p=0;null!==(f=a(c,l));){var h=String(f[0]);d[p]=h,""===h&&(c.lastIndex=i(l,r(c.lastIndex),u)),p++}return 0===p?null:d}]}))},function(t,e,n){"use strict";var o=n(11),r=n(20),i=n(16),a=n(32),s=n(105),c=n(74),l=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(75)("replace",2,(function(t,e,n,h){return[function(o,r){var i=t(this),a=null==o?void 0:o[e];return void 0!==a?a.call(o,i,r):n.call(String(i),o,r)},function(t,e){var r=h(n,t,this,e);if(r.done)return r.value;var f=o(t),d=String(this),p="function"==typeof e;p||(e=String(e));var y=f.global;if(y){var g=f.unicode;f.lastIndex=0}for(var b=[];;){var m=c(f,d);if(null===m)break;if(b.push(m),!y)break;""===String(m[0])&&(f.lastIndex=s(d,i(f.lastIndex),g))}for(var k,x="",S=0,w=0;w<b.length;w++){m=b[w];for(var E=String(m[0]),T=l(u(a(m.index),d.length),0),C=[],B=1;B<m.length;B++)C.push(void 0===(k=m[B])?k:String(k));var _=m.groups;if(p){var O=[E].concat(C,T,d);void 0!==_&&O.push(_);var I=String(e.apply(void 0,O))}else I=v(E,d,T,C,_,e);T>=S&&(x+=d.slice(S,T)+I,S=T+E.length)}return x+d.slice(S)}];function v(t,e,o,i,a,s){var c=o+t.length,l=i.length,u=p;return void 0!==a&&(a=r(a),u=d),n.call(s,u,(function(n,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(c);case"<":s=a[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>l){var d=f(u/10);return 0===d?n:d<=l?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):n}s=i[u-1]}return void 0===s?"":s}))}}))},function(t,e,n){"use strict";var o=n(11),r=n(115),i=n(74);n(75)("search",1,(function(t,e,n,a){return[function(n){var o=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=o(t),c=String(this),l=s.lastIndex;r(l,0)||(s.lastIndex=0);var u=i(s,c);return r(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},function(t,e,n){"use strict";var o=n(97),r=n(11),i=n(65),a=n(105),s=n(16),c=n(74),l=n(104),u=n(10),f=Math.min,d=[].push,p="length",h=!u((function(){RegExp(4294967295,"y")}));n(75)("split",2,(function(t,e,n,u){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[p]||2!="ab".split(/(?:ab)*/)[p]||4!=".".split(/(.?)(.?)/)[p]||".".split(/()()/)[p]>1||"".split(/.?/)[p]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!o(t))return n.call(r,t,e);for(var i,a,s,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,u+"g");(i=l.call(v,r))&&!((a=v.lastIndex)>f&&(c.push(r.slice(f,i.index)),i[p]>1&&i.index<r[p]&&d.apply(c,i.slice(1)),s=i[0][p],f=a,c[p]>=h));)v.lastIndex===i.index&&v.lastIndex++;return f===r[p]?!s&&v.test("")||c.push(""):c.push(r.slice(f)),c[p]>h?c.slice(0,h):c}:"0".split(void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,o){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r,o):v.call(String(r),n,o)},function(t,e){var o=u(v,t,this,e,v!==n);if(o.done)return o.value;var l=r(t),d=String(this),p=i(l,RegExp),y=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),b=new p(h?l:"^(?:"+l.source+")",g),m=void 0===e?4294967295:e>>>0;if(0===m)return[];if(0===d.length)return null===c(b,d)?[d]:[];for(var k=0,x=0,S=[];x<d.length;){b.lastIndex=h?x:0;var w,E=c(b,h?d:d.slice(x));if(null===E||(w=f(s(b.lastIndex+(h?0:x)),d.length))===k)x=a(d,x,y);else{if(S.push(d.slice(k,x)),S.length===m)return S;for(var T=1;T<=E.length-1;T++)if(S.push(E[T]),S.length===m)return S;x=k=w}}return S.push(d.slice(k)),S}]}))},function(t,e,n){var o=n(9),r=n(106).set,i=o.MutationObserver||o.WebKitMutationObserver,a=o.process,s=o.Promise,c="process"==n(36)(a);t.exports=function(){var t,e,n,l=function(){var o,r;for(c&&(o=a.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(c)n=function(){a.nextTick(l)};else if(!i||o.navigator&&o.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);n=function(){u.then(l)}}else n=function(){r.call(o,l)};else{var f=!0,d=document.createTextNode("");new i(l).observe(d,{characterData:!0}),n=function(){d.data=f=!f}}return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){"use strict";var o=n(134),r=n(51);t.exports=n(78)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=o.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return o.def(r(this,"Map"),0===t?0:t,e)}},o,!0)},function(t,e,n){"use strict";var o=n(134),r=n(51);t.exports=n(78)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(r(this,"Set"),t=0===t?0:t,t)}},o)},function(t,e,n){"use strict";var o,r=n(9),i=n(35)(0),a=n(23),s=n(41),c=n(114),l=n(135),u=n(12),f=n(51),d=n(51),p=!r.ActiveXObject&&"ActiveXObject"in r,h=s.getWeak,v=Object.isExtensible,y=l.ufstore,g=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(t){if(u(t)){var e=h(t);return!0===e?y(f(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return l.def(f(this,"WeakMap"),t,e)}},m=t.exports=n(78)("WeakMap",g,b,l,!0,!0);d&&p&&(c((o=l.getConstructor(g,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],(function(t){var e=m.prototype,n=e[t];a(e,t,(function(e,r){if(u(e)&&!v(e)){this._f||(this._f=new o);var i=this._f[t](e,r);return"set"==t?this:i}return n.call(this,e,r)}))})))},function(t,e,n){"use strict";var o=n(135),r=n(51);n(78)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(r(this,"WeakSet"),t,!0)}},o,!1,!0)},function(t,e,n){"use strict";var o=n(0),r=n(79),i=n(107),a=n(11),s=n(46),c=n(16),l=n(12),u=n(9).ArrayBuffer,f=n(65),d=i.ArrayBuffer,p=i.DataView,h=r.ABV&&u.isView,v=d.prototype.slice,y=r.VIEW;o(o.G+o.W+o.F*(u!==d),{ArrayBuffer:d}),o(o.S+o.F*!r.CONSTR,"ArrayBuffer",{isView:function(t){return h&&h(t)||l(t)&&y in t}}),o(o.P+o.U+o.F*n(10)((function(){return!new d(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,e){if(void 0!==v&&void 0===e)return v.call(a(this),t);for(var n=a(this).byteLength,o=s(t,n),r=s(void 0===e?n:e,n),i=new(f(this,d))(c(r-o)),l=new p(this),u=new p(i),h=0;o<r;)u.setUint8(h++,l.getUint8(o++));return i}}),n(56)("ArrayBuffer")},function(t,e,n){var o=n(0);o(o.G+o.W+o.F*!n(79).ABV,{DataView:n(107).DataView})},function(t,e,n){n(38)("Int8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}),!0)},function(t,e,n){n(38)("Int16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Uint16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Int32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Uint32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Float32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(38)("Float64",8,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){var o=n(0),r=n(31),i=n(11),a=(n(9).Reflect||{}).apply,s=Function.apply;o(o.S+o.F*!n(10)((function(){a((function(){}))})),"Reflect",{apply:function(t,e,n){var o=r(t),c=i(n);return a?a(o,e,c):s.call(o,e,c)}})},function(t,e,n){var o=n(0),r=n(47),i=n(31),a=n(11),s=n(12),c=n(10),l=n(116),u=(n(9).Reflect||{}).construct,f=c((function(){function t(){}return!(u((function(){}),[],t)instanceof t)})),d=!c((function(){u((function(){}))}));o(o.S+o.F*(f||d),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(d&&!f)return u(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return o.push.apply(o,e),new(l.apply(t,o))}var c=n.prototype,p=r(s(c)?c:Object.prototype),h=Function.apply.call(t,p,e);return s(h)?h:p}})},function(t,e,n){var o=n(19),r=n(0),i=n(11),a=n(40);r(r.S+r.F*n(10)((function(){Reflect.defineProperty(o.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,e,n){i(t),e=a(e,!0),i(n);try{return o.f(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var o=n(0),r=n(33).f,i=n(11);o(o.S,"Reflect",{deleteProperty:function(t,e){var n=r(i(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var o=n(0),r=n(11),i=function(t){this._t=r(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(123)(i,"Object",(function(){var t,e=this._k;do{if(this._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[this._i++])in this._t));return{value:t,done:!1}})),o(o.S,"Reflect",{enumerate:function(t){return new i(t)}})},function(t,e,n){var o=n(33),r=n(49),i=n(26),a=n(0),s=n(12),c=n(11);a(a.S,"Reflect",{get:function t(e,n){var a,l,u=arguments.length<3?e:arguments[2];return c(e)===u?e[n]:(a=o.f(e,n))?i(a,"value")?a.value:void 0!==a.get?a.get.call(u):void 0:s(l=r(e))?t(l,n,u):void 0}})},function(t,e,n){var o=n(33),r=n(0),i=n(11);r(r.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return o.f(i(t),e)}})},function(t,e,n){var o=n(0),r=n(49),i=n(11);o(o.S,"Reflect",{getPrototypeOf:function(t){return r(i(t))}})},function(t,e,n){var o=n(0);o(o.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var o=n(0),r=n(11),i=Object.isExtensible;o(o.S,"Reflect",{isExtensible:function(t){return r(t),!i||i(t)}})},function(t,e,n){var o=n(0);o(o.S,"Reflect",{ownKeys:n(137)})},function(t,e,n){var o=n(0),r=n(11),i=Object.preventExtensions;o(o.S,"Reflect",{preventExtensions:function(t){r(t);try{return i&&i(t),!0}catch(t){return!1}}})},function(t,e,n){var o=n(19),r=n(33),i=n(49),a=n(26),s=n(0),c=n(42),l=n(11),u=n(12);s(s.S,"Reflect",{set:function t(e,n,s){var f,d,p=arguments.length<4?e:arguments[3],h=r.f(l(e),n);if(!h){if(u(d=i(e)))return t(d,n,s,p);h=c(0)}if(a(h,"value")){if(!1===h.writable||!u(p))return!1;if(f=r.f(p,n)){if(f.get||f.set||!1===f.writable)return!1;f.value=s,o.f(p,n,f)}else o.f(p,n,c(0,s));return!0}return void 0!==h.set&&(h.set.call(p,s),!0)}})},function(t,e,n){var o=n(0),r=n(88);r&&o(o.S,"Reflect",{setPrototypeOf:function(t,e){r.check(t,e);try{return r.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){n(330),t.exports=n(17).Array.includes},function(t,e,n){"use strict";var o=n(0),r=n(69)(!0);o(o.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(50)("includes")},function(t,e,n){n(332),t.exports=n(17).Array.flatMap},function(t,e,n){"use strict";var o=n(0),r=n(333),i=n(20),a=n(16),s=n(31),c=n(125);o(o.P,"Array",{flatMap:function(t){var e,n,o=i(this);return s(t),e=a(o.length),n=c(o,0),r(n,o,o,e,0,1,t,arguments[1]),n}}),n(50)("flatMap")},function(t,e,n){"use strict";var o=n(71),r=n(12),i=n(16),a=n(30),s=n(14)("isConcatSpreadable");t.exports=function t(e,n,c,l,u,f,d,p){for(var h,v,y=u,g=0,b=!!d&&a(d,p,3);g<l;){if(g in c){if(h=b?b(c[g],g,n):c[g],v=!1,r(h)&&(v=void 0!==(v=h[s])?!!v:o(h)),v&&f>0)y=t(e,n,h,i(h.length),y,f-1)-1;else{if(y>=9007199254740991)throw TypeError();e[y]=h}y++}g++}return y}},function(t,e,n){n(335),t.exports=n(17).String.padStart},function(t,e,n){"use strict";var o=n(0),r=n(138),i=n(77),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);o(o.P+o.F*a,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,n){n(337),t.exports=n(17).String.padEnd},function(t,e,n){"use strict";var o=n(0),r=n(138),i=n(77),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);o(o.P+o.F*a,"String",{padEnd:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,e,n){n(339),t.exports=n(17).String.trimLeft},function(t,e,n){"use strict";n(54)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,e,n){n(341),t.exports=n(17).String.trimRight},function(t,e,n){"use strict";n(54)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,e,n){n(343),t.exports=n(84).f("asyncIterator")},function(t,e,n){n(110)("asyncIterator")},function(t,e,n){n(345),t.exports=n(17).Object.getOwnPropertyDescriptors},function(t,e,n){var o=n(0),r=n(137),i=n(28),a=n(33),s=n(100);o(o.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,o=i(t),c=a.f,l=r(o),u={},f=0;l.length>f;)void 0!==(n=c(o,e=l[f++]))&&s(u,e,n);return u}})},function(t,e,n){n(347),t.exports=n(17).Object.values},function(t,e,n){var o=n(0),r=n(139)(!1);o(o.S,"Object",{values:function(t){return r(t)}})},function(t,e,n){n(349),t.exports=n(17).Object.entries},function(t,e,n){var o=n(0),r=n(139)(!0);o(o.S,"Object",{entries:function(t){return r(t)}})},function(t,e,n){"use strict";n(131),n(351),t.exports=n(17).Promise.finally},function(t,e,n){"use strict";var o=n(0),r=n(17),i=n(9),a=n(65),s=n(133);o(o.P+o.R,"Promise",{finally:function(t){var e=a(this,r.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then((function(){return n}))}:t,n?function(n){return s(e,t()).then((function(){throw n}))}:t)}})},function(t,e,n){n(353),n(354),n(355),t.exports=n(17)},function(t,e,n){var o=n(9),r=n(0),i=n(77),a=[].slice,s=/MSIE .\./.test(i),c=function(t){return function(e,n){var o=arguments.length>2,r=!!o&&a.call(arguments,2);return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};r(r.G+r.B+r.F*s,{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},function(t,e,n){var o=n(0),r=n(106);o(o.G+o.B,{setImmediate:r.set,clearImmediate:r.clear})},function(t,e,n){for(var o=n(103),r=n(45),i=n(23),a=n(9),s=n(27),c=n(55),l=n(14),u=l("iterator"),f=l("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=r(p),v=0;v<h.length;v++){var y,g=h[v],b=p[g],m=a[g],k=m&&m.prototype;if(k&&(k[u]||s(k,u,d),k[f]||s(k,f,g),c[g]=d,b))for(y in o)k[y]||i(k,y,o[y],!0)}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(39),n(52),n(2),n(3),n(360),n(362),n(363),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f){"use strict";var d=n(13),p=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),u=p(u),f=d(f);var h=function(){function t(e){var n=this;(0,a.default)(this,t);var o=function(){};"object"===(0,i.default)(e)&&f.isFunction(e.onReady)&&(o=e.onReady);var r=new u.default(e);this.isReady=r.isReady.then((function(){n.exportAPI(r),o()}))}return(0,s.default)(t,[{key:"exportAPI",value:function(t){var e=this;["configuration"].forEach((function(n){e[n]=t[n]})),this.destroy=function(){for(var n in Object.values(t.moduleInstances).forEach((function(t){f.isFunction(t.destroy)&&t.destroy()})),t=null,e)Object.prototype.hasOwnProperty.call(e,n)&&delete e[n];Object.setPrototypeOf(e,null)},Object.setPrototypeOf(this,t.moduleInstances.API.methods),delete this.exportAPI,Object.entries({blocks:{clear:"clear",render:"render"},caret:{focus:"focus"},events:{on:"on",off:"off",emit:"emit"},saver:{save:"save"}}).forEach((function(n){var o=(0,r.default)(n,2),i=o[0],a=o[1];Object.entries(a).forEach((function(n){var o=(0,r.default)(n,2),a=o[0],s=o[1];e[s]=t.moduleInstances.API.methods[i][a]}))}))}}],[{key:"version",get:function(){return"2.19.0"}}]),t}();o.default=h,h.displayName="EditorJS",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){(e=t.exports=function(...t){return r(...t)}).__esModule=!0;const o=n(361),r=o.default;Object.assign(e,o)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){},e.revert=function(){}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[],void 0===(i="function"==typeof(o=function(){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e);return null}),Element.prototype.prepend||(Element.prototype.prepend=function(t){var e=document.createDocumentFragment();Array.isArray(t)||(t=[t]),t.forEach((function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(t))})),this.insertBefore(e,this.firstChild)})})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(52),n(21),n(22),n(2),n(3),n(15),n(8),n(59),n(144)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c,l,u,f,d){"use strict";var p=n(13),h=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),c=h(c),l=h(l),u=p(u),f=h(f);var v=n(373),y=[];v.keys().forEach((function(t){t.match(/^\.\/[^_][\w/]*\.([tj])s$/)&&y.push(v(t))}));var g=function(){function t(e){var n,o,r=this;(0,s.default)(this,t),this.moduleInstances={},this.isReady=new Promise((function(t,e){n=t,o=e})),Promise.resolve().then((0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.configuration=e,t.next=3,r.validate();case 3:return t.next=5,r.init();case 5:return t.next=7,r.start();case 7:u.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧","log","","color: #E24A75"),setTimeout((0,a.default)(i.default.mark((function t(){var e,o,a;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.render();case 2:r.configuration.autofocus&&(e=r.moduleInstances,o=e.BlockManager,(a=e.Caret).setToBlock(o.blocks[0],a.positions.START),o.highlightCurrentNode()),r.moduleInstances.UI.removeLoader(),n();case 5:case"end":return t.stop()}}),t)}))),500);case 9:case"end":return t.stop()}}),t)})))).catch((function(t){u.log("Editor.js is not ready because of ".concat(t),"error"),o(t)}))}var e,n;return(0,c.default)(t,[{key:"validate",value:(n=(0,a.default)(i.default.mark((function t(){var e,n,o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.config,n=e.holderId,o=e.holder,!n||!o){t.next=3;break}throw Error("«holderId» and «holder» param can't assign at the same time.");case 3:if("string"!=typeof o||l.default.get(o)){t.next=5;break}throw Error("element with ID «".concat(o,"» is missing. Pass correct holder's ID."));case 5:if(!o||"object"!==(0,r.default)(o)||l.default.isElement(o)){t.next=7;break}throw Error("holder as HTMLElement if provided must be inherit from Element class.");case 7:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"init",value:function(){this.constructModules(),this.configureModules()}},{key:"start",value:(e=(0,a.default)(i.default.mark((function t(){var e,n=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=["Tools","UI","BlockManager","Paste","BlockSelection","RectangleSelection","CrossBlockSelection","ReadOnly"],t.next=3,e.reduce((function(t,e){return t.then((0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.moduleInstances[e].prepare();case 3:t.next=10;break;case 5:if(t.prev=5,t.t0=t.catch(0),!(t.t0 instanceof d.CriticalError)){t.next=9;break}throw new Error(t.t0.message);case 9:u.log("Module ".concat(e," was skipped because of %o"),"warn",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,5]])}))))}),Promise.resolve());case 3:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){return this.moduleInstances.Renderer.render(this.config.data.blocks)}},{key:"constructModules",value:function(){var t=this;y.forEach((function(e){var n=u.isFunction(e)?e:e.default;try{t.moduleInstances[n.displayName]=new n({config:t.configuration})}catch(t){u.log("Module ".concat(n.displayName," skipped because"),"warn",t)}}))}},{key:"configureModules",value:function(){for(var t in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances,t)&&(this.moduleInstances[t].state=this.getModulesDiff(t))}},{key:"getModulesDiff",value:function(t){var e={};for(var n in this.moduleInstances)n!==t&&(e[n]=this.moduleInstances[n]);return e}},{key:"configuration",set:function(t){var e,n;"object"!==(0,r.default)(t)&&(t={holder:t}),u.deprecationAssert(!!t.holderId,"config.holderId","config.holder"),t.holderId&&!t.holder&&(t.holder=t.holderId,t.holderId=null),this.config=t,null==this.config.holder&&(this.config.holder="editorjs"),this.config.logLevel||(this.config.logLevel=u.LogLevels.VERBOSE),u.setLogLevel(this.config.logLevel),u.deprecationAssert(Boolean(this.config.initialBlock),"config.initialBlock","config.defaultBlock"),this.config.defaultBlock=this.config.defaultBlock||this.config.initialBlock||"paragraph",this.config.minHeight=void 0!==this.config.minHeight?this.config.minHeight:300;var o={type:this.config.defaultBlock,data:{}};this.config.placeholder=this.config.placeholder||!1,this.config.sanitizer=this.config.sanitizer||{p:!0,b:!0,a:!0},this.config.hideToolbar=!!this.config.hideToolbar&&this.config.hideToolbar,this.config.tools=this.config.tools||{},this.config.i18n=this.config.i18n||{},this.config.data=this.config.data||{},this.config.onReady=this.config.onReady||function(){},this.config.onChange=this.config.onChange||function(){},this.config.inlineToolbar=void 0===this.config.inlineToolbar||this.config.inlineToolbar,u.isEmpty(this.config.data)?(this.config.data={},this.config.data.blocks=[o]):this.config.data.blocks&&0!==this.config.data.blocks.length||(this.config.data.blocks=[o]),this.config.readOnly=this.config.readOnly||!1,(null===(e=t.i18n)||void 0===e?void 0:e.messages)&&f.default.setDictionary(t.i18n.messages),this.config.i18n.direction=(null===(n=t.i18n)||void 0===n?void 0:n.direction)||"ltr"},get:function(){return this.config}}]),t}();o.default=g,g.displayName="Core",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(142);t.exports=function(t){if(Array.isArray(t))return o(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){var o=n(4),r=n(108),i=n(370),a=n(371);function s(e){var n="function"==typeof Map?new Map:void 0;return t.exports=s=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},s(e)}t.exports=s},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,n){var o=n(108),r=n(372);function i(e,n,a){return r()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},function(t,e,n){var o={"./api":80,"./api/":80,"./api/blocks":145,"./api/blocks.ts":145,"./api/caret":147,"./api/caret.ts":147,"./api/events":148,"./api/events.ts":148,"./api/i18n":149,"./api/i18n.ts":149,"./api/index":80,"./api/index.ts":80,"./api/inlineToolbar":150,"./api/inlineToolbar.ts":150,"./api/listeners":151,"./api/listeners.ts":151,"./api/notifier":152,"./api/notifier.ts":152,"./api/readonly":153,"./api/readonly.ts":153,"./api/sanitizer":154,"./api/sanitizer.ts":154,"./api/saver":155,"./api/saver.ts":155,"./api/selection":156,"./api/selection.ts":156,"./api/styles":157,"./api/styles.ts":157,"./api/toolbar":158,"./api/toolbar.ts":158,"./api/tooltip":159,"./api/tooltip.ts":159,"./blockEvents":160,"./blockEvents.ts":160,"./blockManager":161,"./blockManager.ts":161,"./blockSelection":162,"./blockSelection.ts":162,"./caret":163,"./caret.ts":163,"./crossBlockSelection":164,"./crossBlockSelection.ts":164,"./dragNDrop":165,"./dragNDrop.ts":165,"./events":166,"./events.ts":166,"./listeners":167,"./listeners.ts":167,"./modificationsObserver":168,"./modificationsObserver.ts":168,"./notifier":169,"./notifier.ts":169,"./paste":170,"./paste.ts":170,"./readonly":171,"./readonly.ts":171,"./rectangleSelection":172,"./rectangleSelection.ts":172,"./renderer":173,"./renderer.ts":173,"./sanitizer":174,"./sanitizer.ts":174,"./saver":175,"./saver.ts":175,"./shortcuts":176,"./shortcuts.ts":176,"./toolbar":81,"./toolbar/":81,"./toolbar/blockSettings":177,"./toolbar/blockSettings.ts":177,"./toolbar/conversion":178,"./toolbar/conversion.ts":178,"./toolbar/index":81,"./toolbar/index.ts":81,"./toolbar/inline":179,"./toolbar/inline.ts":179,"./toolbar/toolbox":180,"./toolbar/toolbox.ts":180,"./tools":67,"./tools.ts":67,"./tooltip":181,"./tooltip.ts":181,"./ui":182,"./ui.ts":182};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=373},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n(1).toString();var i=function(){function t(e){var n=e.data,o=e.config,r=e.api,i=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.readOnly=i,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.readOnly||(this.onKeyUp=this.onKeyUp.bind(this)),this._placeholder=o.placeholder?o.placeholder:t.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),this._preserveBlank=void 0!==o.preserveBlank&&o.preserveBlank,this.data=n}return r(t,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}}]),r(t,[{key:"onKeyUp",value:function(t){"Backspace"!==t.code&&"Delete"!==t.code||""===this._element.textContent&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block),t.contentEditable=!1,t.dataset.placeholder=this.api.i18n.t(this._placeholder),this.readOnly||(t.contentEditable=!0,t.addEventListener("keyup",this.onKeyUp)),t}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(t){var e={text:this.data.text+t.text};this.data=e}},{key:"validate",value:function(t){return!(""===t.text.trim()&&!this._preserveBlank)}},{key:"save",value:function(t){return{text:t.innerHTML}}},{key:"onPaste",value:function(t){var e={text:t.detail.data.innerHTML};this.data=e}},{key:"data",get:function(){var t=this._element.innerHTML;return this._data.text=t,this._data},set:function(t){this._data=t||{},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{tags:["P"]}}},{key:"toolbox",get:function(){return{icon:n(5).default,title:"Text"}}}]),t}();t.exports=i},function(t,e,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]),o(r,{insert:"head",singleton:!1}),t.exports=r.locals||{}},function(t,e,n){"use strict";var o,r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],r=0;r<t.length;r++){var s=t[r],c=e.base?s[0]+e.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var f=a(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:v(d,e),references:1}),o.push(u)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var p=null,h=0;function v(t,e){var n,o,r;if(e.singleton){var i=h++;n=p||(p=c(e)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=c(e),o=d.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=s(t,e),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o,r,i=t[1]||"",a=t[3];if(!a)return i;if(e&&"function"==typeof btoa){var s=(n=a,o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(r," */")),c=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[i].concat(c).concat([s]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e),e.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n'}])},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(){(0,r.default)(this,t),this.commandName="bold",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--bold"},this.nodes={button:void 0}}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a.default.svg("bold",12,14)),this.nodes.button}},{key:"surround",value:function(t){document.execCommand(this.commandName)}},{key:"checkState",value:function(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}},{key:"shortcut",get:function(){return"CMD+B"}}],[{key:"sanitize",get:function(){return{b:{}}}}]),t}();o.default=c,c.displayName="BoldInlineTool",c.isInline=!0,c.title="Bold",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(){(0,r.default)(this,t),this.commandName="italic",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--italic"},this.nodes={button:null}}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a.default.svg("italic",4,11)),this.nodes.button}},{key:"surround",value:function(t){document.execCommand(this.commandName)}},{key:"checkState",value:function(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}},{key:"shortcut",get:function(){return"CMD+I"}}],[{key:"sanitize",get:function(){return{i:{}}}}]),t}();o.default=c,c.displayName="ItalicInlineTool",c.isInline=!0,c.title="Italic",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(25),n(15),n(8)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(13),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),c=l(c);var f=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.commandLink="createLink",this.commandUnlink="unlink",this.ENTER_KEY=13,this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-input",inputShowed:"ce-inline-tool-input--showed"},this.nodes={button:null,input:null},this.inputOpened=!1,this.toolbar=n.toolbar,this.inlineToolbar=n.inlineToolbar,this.notifier=n.notifier,this.i18n=n.i18n,this.selection=new a.default}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(s.default.svg("link",14,10)),this.nodes.button.appendChild(s.default.svg("unlink",15,11)),this.nodes.button}},{key:"renderActions",value:function(){var t=this;return this.nodes.input=document.createElement("input"),this.nodes.input.placeholder=this.i18n.t("Add a link"),this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("keydown",(function(e){e.keyCode===t.ENTER_KEY&&t.enterPressed(e)})),this.nodes.input}},{key:"surround",value:function(t){if(t){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());var e=this.selection.findParentTag("A");if(e)return this.selection.expandToTag(e),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()}},{key:"checkState",value:function(t){var e=this.selection.findParentTag("A");if(e){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var n=e.getAttribute("href");this.nodes.input.value="null"!==n?n:"",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!e}},{key:"clear",value:function(){this.closeActions()}},{key:"toggleActions",value:function(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}},{key:"openActions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.nodes.input.classList.add(this.CSS.inputShowed),t&&this.nodes.input.focus(),this.inputOpened=!0}},{key:"closeActions",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.selection.isFakeBackgroundEnabled){var e=new a.default;e.save(),this.selection.restore(),this.selection.removeFakeBackground(),e.restore()}this.nodes.input.classList.remove(this.CSS.inputShowed),this.nodes.input.value="",t&&this.selection.clearSaved(),this.inputOpened=!1}},{key:"enterPressed",value:function(t){var e=this.nodes.input.value||"";if(e.trim()||(this.selection.restore(),this.unlink(),t.preventDefault(),this.closeActions()),!this.validateURL(e))return this.notifier.show({message:"Pasted link is not valid.",style:"error"}),void c.log("Incorrect Link pasted","warn",e);e=this.prepareLink(e),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(e),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.selection.collapseToEnd(),this.inlineToolbar.close()}},{key:"validateURL",value:function(t){return!/\s/.test(t)}},{key:"prepareLink",value:function(t){return t=t.trim(),t=this.addProtocol(t)}},{key:"addProtocol",value:function(t){if(/^(\w+):(\/\/)?/.test(t))return t;var e=/^\/[^/\s]/.test(t),n="#"===t.substring(0,1),o=/^\/\/[^/\s]/.test(t);return e||n||o||(t="http://"+t),t}},{key:"insertLink",value:function(t){var e=this.selection.findParentTag("A");e&&this.selection.expandToTag(e),document.execCommand(this.commandLink,!1,t)}},{key:"unlink",value:function(){document.execCommand(this.commandUnlink)}},{key:"shortcut",get:function(){return"CMD+K"}}],[{key:"sanitize",get:function(){return{a:{href:!0,target:"_blank",rel:"nofollow"}}}}]),t}();o.default=f,f.displayName="LinkInlineTool",f.isInline=!0,f.title="Link",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=e.data,o=e.api;(0,r.default)(this,t),this.CSS={wrapper:"ce-stub",info:"ce-stub__info",title:"ce-stub__title",subtitle:"ce-stub__subtitle"},this.api=o,this.title=n.title||this.api.i18n.t("Error"),this.subtitle=this.api.i18n.t("The block can not be displayed correctly."),this.savedData=n.savedData,this.wrapper=this.make()}return(0,i.default)(t,[{key:"render",value:function(){return this.wrapper}},{key:"save",value:function(){return this.savedData}},{key:"make",value:function(){var t=a.default.make("div",this.CSS.wrapper),e=a.default.svg("sad-face",52,52),n=a.default.make("div",this.CSS.info),o=a.default.make("div",this.CSS.title,{textContent:this.title}),r=a.default.make("div",this.CSS.subtitle,{textContent:this.subtitle});return t.appendChild(e),n.appendChild(o),n.appendChild(r),t.appendChild(n),t}}]),t}();o.default=c,c.displayName="Stub",c.isReadOnlySupported=!0,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15),n(8),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(13),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=l(s),c=u(c);var f=function(){function t(e,n){(0,r.default)(this,t),this.cursor=-1,this.items=[],this.items=e||[],this.focusedCssClass=n}return(0,i.default)(t,[{key:"setItems",value:function(t){this.items=t}},{key:"next",value:function(){this.cursor=this.leafNodesAndReturnIndex(t.directions.RIGHT)}},{key:"previous",value:function(){this.cursor=this.leafNodesAndReturnIndex(t.directions.LEFT)}},{key:"dropCursor",value:function(){-1!==this.cursor&&(this.items[this.cursor].classList.remove(this.focusedCssClass),this.cursor=-1)}},{key:"leafNodesAndReturnIndex",value:function(e){var n=this;if(0===this.items.length)return this.cursor;var o=this.cursor;return-1===o?o=e===t.directions.RIGHT?-1:0:this.items[o].classList.remove(this.focusedCssClass),o=e===t.directions.RIGHT?(o+1)%this.items.length:(this.items.length+o-1)%this.items.length,a.default.canSetCaret(this.items[o])&&s.delay((function(){return c.default.setCursor(n.items[o])}),50)(),this.items[o].classList.add(this.focusedCssClass),o}},{key:"currentItem",get:function(){return-1===this.cursor?null:this.items[this.cursor]}}]),t}();o.default=f,f.displayName="DomIterator",f.directions={RIGHT:"right",LEFT:"left"},t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-up",animation:"wobble"},this.api=n}return(0,i.default)(t,[{key:"render",value:function(){var t=this,e=a.default.make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a.default.svg("arrow-up",14,14)),this.api.listeners.on(e,"click",(function(n){return t.handleClick(n,e)}),!1),this.api.tooltip.onHover(e,this.api.i18n.t("Move up")),e}},{key:"handleClick",value:function(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(o),i=this.api.blocks.getBlockByIndex(o-1);if(0===o||!r||!i)return e.classList.add(this.CSS.animation),void window.setTimeout((function(){e.classList.remove(n.CSS.animation)}),500);var a,s=r.holder,c=i.holder,l=s.getBoundingClientRect(),u=c.getBoundingClientRect();a=u.top>0?Math.abs(l.top)-Math.abs(u.top):window.innerHeight-Math.abs(l.top)+Math.abs(u.top),window.scrollBy(0,-1*a),this.api.blocks.move(o-1),this.api.tooltip.hide()}}]),t}();o.default=c,c.displayName="MoveUpTune",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=this,o=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",buttonDelete:"ce-settings__button--delete",buttonConfirm:"ce-settings__button--confirm"},this.nodes={button:null},this.api=o,this.resetConfirmation=function(){n.setConfirmation(!1)}}return(0,i.default)(t,[{key:"render",value:function(){var t=this;return this.nodes.button=a.default.make("div",[this.CSS.button,this.CSS.buttonDelete],{}),this.nodes.button.appendChild(a.default.svg("cross",12,12)),this.api.listeners.on(this.nodes.button,"click",(function(e){return t.handleClick(e)}),!1),this.api.tooltip.onHover(this.nodes.button,this.api.i18n.t("Delete")),this.nodes.button}},{key:"handleClick",value:function(t){this.needConfirmation?(this.api.events.off("block-settings-closed",this.resetConfirmation),this.api.blocks.delete(),this.api.toolbar.close(),this.api.tooltip.hide(),t.stopPropagation()):(this.setConfirmation(!0),this.api.events.on("block-settings-closed",this.resetConfirmation))}},{key:"setConfirmation",value:function(t){this.needConfirmation=t,this.nodes.button.classList.add(this.CSS.buttonConfirm)}}]),t}();o.default=c,c.displayName="DeleteTune",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(15)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var c=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-down",animation:"wobble"},this.api=n}return(0,i.default)(t,[{key:"render",value:function(){var t=this,e=a.default.make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a.default.svg("arrow-down",14,14)),this.api.listeners.on(e,"click",(function(n){return t.handleClick(n,e)}),!1),this.api.tooltip.onHover(e,this.api.i18n.t("Move down")),e}},{key:"handleClick",value:function(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(o+1);if(!r)return e.classList.add(this.CSS.animation),void window.setTimeout((function(){e.classList.remove(n.CSS.animation)}),500);var i=r.holder,a=i.getBoundingClientRect(),s=Math.abs(window.innerHeight-i.offsetHeight);a.top<window.innerHeight&&(s=window.scrollY+i.offsetHeight),window.scrollTo(0,s),this.api.blocks.move(o+1),this.api.tooltip.hide()}}]),t}();o.default=c,c.displayName="MoveDownTune",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(8),n(15),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,c){"use strict";var l=n(13),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=l(a),s=u(s);var f=function(){function t(e){(0,r.default)(this,t),this.blocks=[],this.workingArea=e}return(0,i.default)(t,[{key:"push",value:function(t){this.blocks.push(t),this.insertToDOM(t)}},{key:"swap",value:function(t,e){var n=this.blocks[e];s.default.swap(this.blocks[t].holder,n.holder),this.blocks[e]=this.blocks[t],this.blocks[t]=n}},{key:"move",value:function(t,e){var n=this.blocks.splice(e,1)[0],o=t-1,r=Math.max(0,o),i=this.blocks[r];t>0?this.insertToDOM(n,"afterend",i):this.insertToDOM(n,"beforebegin",i),this.blocks.splice(t,0,n);var a=this.composeBlockEvent("move",{fromIndex:e,toIndex:t});n.call(c.BlockToolAPI.MOVED,a)}},{key:"insert",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.length){t>this.length&&(t=this.length),n&&(this.blocks[t].holder.remove(),this.blocks[t].call(c.BlockToolAPI.REMOVED));var o=n?1:0;if(this.blocks.splice(t,o,e),t>0){var r=this.blocks[t-1];this.insertToDOM(e,"afterend",r)}else{var i=this.blocks[t+1];i?this.insertToDOM(e,"beforebegin",i):this.insertToDOM(e)}}else this.push(e)}},{key:"remove",value:function(t){isNaN(t)&&(t=this.length-1),this.blocks[t].holder.remove(),this.blocks[t].call(c.BlockToolAPI.REMOVED),this.blocks.splice(t,1)}},{key:"removeAll",value:function(){this.workingArea.innerHTML="",this.blocks.forEach((function(t){return t.call(c.BlockToolAPI.REMOVED)})),this.blocks.length=0}},{key:"insertAfter",value:function(t,e){var n=this.blocks.indexOf(t);this.insert(n+1,e)}},{key:"get",value:function(t){return this.blocks[t]}},{key:"indexOf",value:function(t){return this.blocks.indexOf(t)}},{key:"insertToDOM",value:function(t,e,n){e?n.holder.insertAdjacentElement(e,t.holder):this.workingArea.appendChild(t.holder),t.call(c.BlockToolAPI.RENDERED)}},{key:"composeBlockEvent",value:function(t,e){return new CustomEvent(t,{detail:e})}},{key:"length",get:function(){return this.blocks.length}},{key:"array",get:function(){return this.blocks}},{key:"nodes",get:function(){return a.array(this.workingArea.children)}}],[{key:"set",value:function(t,e,n){return isNaN(Number(e))?(Reflect.set(t,e,n),!0):(t.insert(+e,n),!0)}},{key:"get",value:function(t,e){return isNaN(Number(e))?Reflect.get(t,e):t.get(+e)}}]),t}();o.default=f,f.displayName="Blocks",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n(1),t.exports=function(){var t=n(6),e=null;return{show:function(n){if(n.message){!function(){if(e)return!0;e=t.getWrapper(),document.body.appendChild(e)}();var o=null,r=n.time||8e3;switch(n.type){case"confirm":o=t.confirm(n);break;case"prompt":o=t.prompt(n);break;default:o=t.alert(n),window.setTimeout((function(){o.remove()}),r)}e.appendChild(o),o.classList.add("cdx-notify--bounce-in")}}}}()},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]),n(4)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var i=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[o].concat(a).concat([i]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,u=[],f=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function y(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(e,t.attrs),h(t,e),e}function g(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=c||(c=y(e)),o=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),o=function(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){v(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}for(t&&d(p(t,e),e),r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var m,k=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=k(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(t,e,n){"use strict";var o,r,i,a,s,c;t.exports=(o="cdx-notify",r="cdx-notify__cross",i="cdx-notify__button--confirm",a="cdx-notify__button",s="cdx-notify__btns-wrapper",{alert:c=function(t){var e=document.createElement("DIV"),n=document.createElement("DIV"),i=t.message,a=t.style;return e.classList.add(o),a&&e.classList.add(o+"--"+a),e.innerHTML=i,n.classList.add(r),n.addEventListener("click",e.remove.bind(e)),e.appendChild(n),e},confirm:function(t){var e=c(t),n=document.createElement("div"),o=document.createElement("button"),l=document.createElement("button"),u=e.querySelector("."+r),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Confirm",l.innerHTML=t.cancelText||"Cancel",o.classList.add(a),l.classList.add(a),o.classList.add(i),l.classList.add("cdx-notify__button--cancel"),f&&"function"==typeof f&&(l.addEventListener("click",f),u.addEventListener("click",f)),d&&"function"==typeof d&&o.addEventListener("click",d),o.addEventListener("click",e.remove.bind(e)),l.addEventListener("click",e.remove.bind(e)),n.appendChild(o),n.appendChild(l),e.appendChild(n),e},prompt:function(t){var e=c(t),n=document.createElement("div"),o=document.createElement("button"),l=document.createElement("input"),u=e.querySelector("."+r),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Ok",o.classList.add(a),o.classList.add(i),l.classList.add("cdx-notify__input"),t.placeholder&&l.setAttribute("placeholder",t.placeholder),t.default&&(l.value=t.default),t.inputType&&(l.type=t.inputType),f&&"function"==typeof f&&u.addEventListener("click",f),d&&"function"==typeof d&&o.addEventListener("click",(function(){d(l.value)})),o.addEventListener("click",e.remove.bind(e)),n.appendChild(l),n.appendChild(o),e.appendChild(n),e},getWrapper:function(){var t=document.createElement("DIV");return t.classList.add("cdx-notifies"),t}})}])},function(t,e,n){var o,r;void 0===(r="function"==typeof(o=function(){function t(t){var e=t.tags;if(!Object.keys(e).map((function(t){return typeof e[t]})).every((function(t){return"object"===t||"boolean"===t||"function"===t})))throw new Error("The configuration was invalid");this.config=t}var e=["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","PRE"];function n(t){return-1!==e.indexOf(t.nodeName)}var o=["A","B","STRONG","I","EM","SUB","SUP","U","STRIKE"];function r(t){return-1!==o.indexOf(t.nodeName)}function i(t,e,n){return"function"==typeof t.tags[e]?t.tags[e](n):t.tags[e]}function a(t,e){return void 0===e||"boolean"==typeof e&&!e}function s(t,e,n){var o=t.name.toLowerCase();return!0!==e&&("function"==typeof e[o]?!e[o](t.value,n):void 0===e[o]||!1===e[o]||"string"==typeof e[o]&&e[o]!==t.value)}return t.prototype.clean=function(t){const e=document.implementation.createHTMLDocument(),n=e.createElement("div");return n.innerHTML=t,this._sanitize(e,n),n.innerHTML},t.prototype._sanitize=function(t,e){var o=function(t,e){return t.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null,!1)}(t,e),c=o.firstChild();if(c)do{if(c.nodeType!==Node.TEXT_NODE){if(c.nodeType===Node.COMMENT_NODE){e.removeChild(c),this._sanitize(t,e);break}var l,u=r(c);u&&(l=Array.prototype.some.call(c.childNodes,n));var f=!!e.parentNode,d=n(e)&&n(c)&&f,p=c.nodeName.toLowerCase(),h=i(this.config,p,c);if(u&&l||a(0,h)||!this.config.keepNestedBlockElements&&d){if("SCRIPT"!==c.nodeName&&"STYLE"!==c.nodeName)for(;c.childNodes.length>0;)e.insertBefore(c.childNodes[0],c);e.removeChild(c),this._sanitize(t,e);break}for(var v=0;v<c.attributes.length;v+=1){var y=c.attributes[v];s(y,h,c)&&(c.removeAttribute(y.name),v-=1)}this._sanitize(t,c)}else if(""===c.data.trim()&&(c.previousElementSibling&&n(c.previousElementSibling)||c.nextElementSibling&&n(c.nextElementSibling))){e.removeChild(c),this._sanitize(t,e);break}}while(c=o.nextSibling())},t})?o.call(e,n,e,t):o)||(t.exports=r)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.r(e);var i=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.commands={},this.keys={},this.name=e.name,this.parseShortcutName(e.name),this.element=e.on,this.callback=e.callback,this.executeShortcut=function(t){n.execute(t)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return r(t,null,[{key:"supportedCommands",get:function(){return{SHIFT:["SHIFT"],CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],ALT:["ALT","OPTION"]}}},{key:"keyCodes",get:function(){return{0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46}}}]),r(t,[{key:"parseShortcutName",value:function(e){e=e.split("+");for(var n=0;n<e.length;n++){e[n]=e[n].toUpperCase();var o=!1;for(var r in t.supportedCommands)if(t.supportedCommands[r].includes(e[n])){o=this.commands[r]=!0;break}o||(this.keys[e[n]]=!0)}for(var i in t.supportedCommands)this.commands[i]||(this.commands[i]=!1)}},{key:"execute",value:function(e){var n,o={CMD:e.ctrlKey||e.metaKey,SHIFT:e.shiftKey,ALT:e.altKey},r=!0;for(n in this.commands)this.commands[n]!==o[n]&&(r=!1);var i,a=!0;for(i in this.keys)a=a&&e.keyCode===t.keyCodes[i];r&&a&&this.callback(e)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),t}();e.default=i}]).default},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));class o{constructor(){this.nodes={wrapper:null,content:null},this.showed=!1,this.offsetTop=10,this.offsetLeft=10,this.offsetRight=10,this.hidingDelay=0,this.loadStyles(),this.prepare(),window.addEventListener("scroll",()=>{this.showed&&this.hide(!0)},{passive:!0})}get CSS(){return{tooltip:"ct",tooltipContent:"ct__content",tooltipShown:"ct--shown",placement:{left:"ct--left",bottom:"ct--bottom",right:"ct--right",top:"ct--top"}}}show(t,e,n){this.nodes.wrapper||this.prepare(),this.hidingTimeout&&clearTimeout(this.hidingTimeout);const o=Object.assign({placement:"bottom",marginTop:0,marginLeft:0,marginRight:0,marginBottom:0,delay:70,hidingDelay:0},n);if(o.hidingDelay&&(this.hidingDelay=o.hidingDelay),this.nodes.content.innerHTML="","string"==typeof e)this.nodes.content.appendChild(document.createTextNode(e));else{if(!(e instanceof Node))throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But "+typeof e+" given.");this.nodes.content.appendChild(e)}switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)),o.placement){case"top":this.placeTop(t,o);break;case"left":this.placeLeft(t,o);break;case"right":this.placeRight(t,o);break;case"bottom":default:this.placeBottom(t,o)}o&&o.delay?this.showingTimeout=setTimeout(()=>{this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0},o.delay):(this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0)}hide(t=!1){if(this.hidingDelay&&!t)return this.hidingTimeout&&clearTimeout(this.hidingTimeout),void(this.hidingTimeout=setTimeout(()=>{this.hide(!0)},this.hidingDelay));this.nodes.wrapper.classList.remove(this.CSS.tooltipShown),this.showed=!1,this.showingTimeout&&clearTimeout(this.showingTimeout)}onHover(t,e,n){t.addEventListener("mouseenter",()=>{this.show(t,e,n)}),t.addEventListener("mouseleave",()=>{this.hide()})}prepare(){this.nodes.wrapper=this.make("div",this.CSS.tooltip),this.nodes.content=this.make("div",this.CSS.tooltipContent),this.append(this.nodes.wrapper,this.nodes.content),this.append(document.body,this.nodes.wrapper)}loadStyles(){const t="codex-tooltips-style";if(document.getElementById(t))return;const e=n(2),o=this.make("style",null,{textContent:e.toString(),id:t});this.prepend(document.head,o)}placeBottom(t,e){const n=t.getBoundingClientRect(),o=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,r=n.bottom+window.pageYOffset+this.offsetTop+e.marginTop;this.applyPlacement("bottom",o,r)}placeTop(t,e){const n=t.getBoundingClientRect(),o=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,r=n.top+window.pageYOffset-this.nodes.wrapper.clientHeight-this.offsetTop;this.applyPlacement("top",o,r)}placeLeft(t,e){const n=t.getBoundingClientRect(),o=n.left-this.nodes.wrapper.offsetWidth-this.offsetLeft-e.marginLeft,r=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("left",o,r)}placeRight(t,e){const n=t.getBoundingClientRect(),o=n.right+this.offsetRight+e.marginRight,r=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("right",o,r)}applyPlacement(t,e,n){this.nodes.wrapper.classList.add(this.CSS.placement[t]),this.nodes.wrapper.style.left=e+"px",this.nodes.wrapper.style.top=n+"px"}make(t,e=null,n={}){const o=document.createElement(t);Array.isArray(e)?o.classList.add(...e):e&&o.classList.add(e);for(const t in n)n.hasOwnProperty(t)&&(o[t]=n[t]);return o}append(t,e){Array.isArray(e)?e.forEach(e=>t.appendChild(e)):t.appendChild(e)}prepend(t,e){Array.isArray(e)?(e=e.reverse()).forEach(e=>t.prepend(e)):t.prepend(e)}}},function(t,e){t.exports='.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}'}]).default},function(t,e,n){"use strict";n.r(e),e.default='<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 8 8">\n  <circle cx="6.5" cy="1.5" r="1.5"/>\n  <circle cx="6.5" cy="6.5" r="1.5"/>\n  <circle cx="1.5" cy="1.5" r="1.5"/>\n  <circle cx="1.5" cy="6.5" r="1.5"/>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>'},function(t,e){t.exports='.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}@media (max-width:650px){.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:calc(100% - 35px)}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px;-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;transform:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:-30px;top:5px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:absolute;right:-28px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:18px;height:18px;color:#707684;cursor:pointer;background:#eff2f5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn:hover{color:#1d202b}@media (max-width:650px){.ce-toolbar__settings-btn{background:transparent}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox-button-tooltip__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-settings{right:-1px;top:30px;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:-11px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-34px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-34px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}'}])}));

/***/ }),

/***/ "./node_modules/@editorjs/embed/dist/bundle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@editorjs/embed/dist/bundle.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=14)}([function(e,t,n){var r=n(5),i=n(6),o=n(7),a=n(9);e.exports=function(e,t){return r(e)||i(e,t)||o(e,t)||a()}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){function n(e,t,n){var r,i,o,a,l;function c(){var s=Date.now()-a;s<t&&s>=0?r=setTimeout(c,t-s):(r=null,n||(l=e.apply(o,i),o=i=null))}null==t&&(t=100);var s=function(){o=this,i=arguments,a=Date.now();var s=n&&!r;return r||(r=setTimeout(c,t)),s&&(l=e.apply(o,i),o=i=null),l};return s.clear=function(){r&&(clearTimeout(r),r=null)},s.flush=function(){r&&(l=e.apply(o,i),o=i=null,clearTimeout(r),r=null)},s}n.debounce=n,e.exports=n},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}}},function(e,t,n){var r=n(8);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){var r=n(11),i=n(12);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],s=n[c]||0,d="".concat(c," ").concat(s);n[c]=s+1;var u=l(d),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(h)):a.push({identifier:d,updater:b(h,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,p=0;function b(e,t){var n,r,i;if(t.singleton){var o=p++;n=m||(m=s(t)),r=h.bind(null,n,o,!1),i=h.bind(null,n,o,!0)}else n=s(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=l(n[r]);a[i].references--}for(var o=c(e,t),s=0;s<n.length;s++){var d=l(n[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=o}}}},function(e,t,n){(t=n(13)(!1)).push([e.i,".embed-tool--loading .embed-tool__caption {\n      display: none;\n    }\n\n    .embed-tool--loading .embed-tool__preloader {\n      display: block;\n    }\n\n    .embed-tool--loading .embed-tool__content {\n      display: none;\n    }\n  .embed-tool__preloader {\n    display: none;\n    position: relative;\n    height: 200px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: 1px solid #e6e9eb;\n  }\n  .embed-tool__preloader::before {\n      content: '';\n      position: absolute;\n      z-index: 3;\n      left: 50%;\n      top: 50%;\n      width: 30px;\n      height: 30px;\n      margin-top: -25px;\n      margin-left: -15px;\n      border-radius: 50%;\n      border: 2px solid #cdd1e0;\n      border-top-color: #388ae5;\n      box-sizing: border-box;\n      animation: embed-preloader-spin 2s infinite linear;\n    }\n  .embed-tool__url {\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    max-width: 250px;\n    color: #7b7e89;\n    font-size: 11px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .embed-tool__content {\n    width: 100%;\n  }\n  .embed-tool__caption {\n    margin-top: 7px;\n  }\n  .embed-tool__caption[contentEditable=true][data-placeholder]::before{\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      opacity: 0;\n    }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty::before {\n         opacity: 1;\n      }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n        opacity: 0;\n      }\n\n@keyframes embed-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(1),i=n.n(r),o=n(0),a=n.n(o),l=n(2),c=n.n(l),s=n(3),d=n.n(s),u={vimeo:{regex:/(?:http[s]?:\/\/)?(?:www.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,embedUrl:"https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",html:'<iframe style="width:100%;" height="320" frameborder="0"></iframe>',height:320,width:580},youtube:{regex:/(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,embedUrl:"https://www.youtube.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580,id:function(e){var t=a()(e,2),n=t[0],r=t[1];if(!r&&n)return n;var i={start:"start",end:"end",t:"start",time_continue:"start",list:"list"};return r=r.slice(1).split("&").map((function(e){var t=e.split("="),r=a()(t,2),o=r[0],l=r[1];if(n||"v"!==o){if(i[o])return"".concat(i[o],"=").concat(l)}else n=l})).filter((function(e){return!!e})),n+"?"+r.join("&")}},coub:{regex:/https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,embedUrl:"https://coub.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},vine:{regex:/https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,embedUrl:"https://vine.co/v/<%= remote_id %>/embed/simple/",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},imgur:{regex:/https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,embedUrl:"http://imgur.com/<%= remote_id %>/embed",html:'<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',height:500,width:540},gfycat:{regex:/https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,embedUrl:"https://gfycat.com/ifr/<%= remote_id %>",html:"<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",height:436,width:580},"twitch-channel":{regex:/https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,embedUrl:"https://player.twitch.tv/?channel=<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"twitch-video":{regex:/https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,embedUrl:"https://player.twitch.tv/?video=v<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"yandex-music-album":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,embedUrl:"https://music.yandex.ru/iframe/#album/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',height:400,width:540},"yandex-music-track":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#track/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',height:100,width:540,id:function(e){return e.join("/")}},"yandex-music-playlist":{regex:/https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',height:400,width:540,id:function(e){return e.join("/")}},codepen:{regex:/https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,embedUrl:"https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",html:"<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",height:300,width:600,id:function(e){return e.join("/embed/")}},instagram:{regex:/https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?/,embedUrl:"https://www.instagram.com/p/<%= remote_id %>/embed",html:'<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:505,width:400},twitter:{regex:/^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)(?:\/.*)?$/,embedUrl:"https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",html:'<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600,id:function(e){return e.join("/status/")}}},h=(n(10),n(4)),f=function(){function e(t){var n=t.data,r=t.api,i=t.readOnly;c()(this,e),this.api=r,this._data={},this.element=null,this.readOnly=i,this.data=n}return d()(e,[{key:"render",value:function(){var t=this;if(!this.data.service){var n=document.createElement("div");return this.element=n,n}var r=e.services[this.data.service].html,i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("template"),l=this.createPreloader();i.classList.add(this.CSS.baseClass,this.CSS.container,this.CSS.containerLoading),o.classList.add(this.CSS.input,this.CSS.caption),i.appendChild(l),o.contentEditable=!this.readOnly,o.dataset.placeholder="Enter a caption",o.innerHTML=this.data.caption||"",a.innerHTML=r,a.content.firstChild.setAttribute("src",this.data.embed),a.content.firstChild.classList.add(this.CSS.content);var c=this.embedIsReady(i);return i.appendChild(a.content.firstChild),i.appendChild(o),c.then((function(){i.classList.remove(t.CSS.containerLoading)})),this.element=i,i}},{key:"createPreloader",value:function(){var e=document.createElement("preloader"),t=document.createElement("div");return t.textContent=this.data.source,e.classList.add(this.CSS.preloader),t.classList.add(this.CSS.url),e.appendChild(t),e}},{key:"save",value:function(){return this.data}},{key:"onPaste",value:function(t){var n=t.detail,r=n.key,i=n.data,o=e.services[r],a=o.regex,l=o.embedUrl,c=o.width,s=o.height,d=o.id,u=void 0===d?function(e){return e.shift()}:d,h=a.exec(i).slice(1),f=l.replace(/<\%\= remote\_id \%\>/g,u(h));this.data={service:r,source:i,embed:f,width:c,height:s}}},{key:"embedIsReady",value:function(e){var t=null;return new Promise((function(n,r){(t=new MutationObserver(Object(h.debounce)(n,450))).observe(e,{childList:!0,subtree:!0})})).then((function(){t.disconnect()}))}},{key:"data",set:function(e){if(!(e instanceof Object))throw Error("Embed Tool data should be object");var t=e.service,n=e.source,r=e.embed,i=e.width,o=e.height,a=e.caption,l=void 0===a?"":a;this._data={service:t||this.data.service,source:n||this.data.source,embed:r||this.data.embed,width:i||this.data.width,height:o||this.data.height,caption:l||this.data.caption||""};var c=this.element;c&&c.parentNode.replaceChild(this.render(),c)},get:function(){if(this.element){var e=this.element.querySelector(".".concat(this.api.styles.input));this._data.caption=e?e.innerHTML:""}return this._data}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,input:this.api.styles.input,container:"embed-tool",containerLoading:"embed-tool--loading",preloader:"embed-tool__preloader",caption:"embed-tool__caption",url:"embed-tool__url",content:"embed-tool__content"}}}],[{key:"prepare",value:function(t){var n=t.config,r=(void 0===n?{}:n).services,o=void 0===r?{}:r,l=Object.entries(u),c=Object.entries(o).filter((function(e){var t=a()(e,2),n=(t[0],t[1]);return"boolean"==typeof n&&!0===n})).map((function(e){return a()(e,1)[0]})),s=Object.entries(o).filter((function(e){var t=a()(e,2),n=(t[0],t[1]);return"object"===i()(n)})).filter((function(t){var n=a()(t,2),r=(n[0],n[1]);return e.checkServiceConfig(r)})).map((function(e){var t=a()(e,2),n=t[0],r=t[1];return[n,{regex:r.regex,embedUrl:r.embedUrl,html:r.html,height:r.height,width:r.width,id:r.id}]}));c.length&&(l=l.filter((function(e){var t=a()(e,1)[0];return c.includes(t)}))),l=l.concat(s),e.services=l.reduce((function(e,t){var n=a()(t,2),r=n[0],i=n[1];return r in e?(e[r]=Object.assign({},e[r],i),e):(e[r]=i,e)}),{}),e.patterns=l.reduce((function(e,t){var n=a()(t,2),r=n[0],i=n[1];return e[r]=i.regex,e}),{})}},{key:"checkServiceConfig",value:function(e){var t=e.regex,n=e.embedUrl,r=e.html,i=e.height,o=e.width,a=e.id,l=t&&t instanceof RegExp&&n&&"string"==typeof n&&r&&"string"==typeof r;return l=(l=(l=l&&(void 0===a||a instanceof Function))&&(void 0===i||Number.isFinite(i)))&&(void 0===o||Number.isFinite(o))}},{key:"pasteConfig",get:function(){return{patterns:e.patterns}}},{key:"isReadOnlySupported",get:function(){return!0}}]),e}()}]).default}));

/***/ }),

/***/ "./node_modules/@editorjs/header/dist/bundle.js":
/*!******************************************************!*\
  !*** ./node_modules/@editorjs/header/dist/bundle.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(1).toString();
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
var a=function(){function e(t){var n=t.data,r=t.config,i=t.api,a=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=i,this.readOnly=a,this._CSS={block:this.api.styles.block,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"ce-header"},this._settings=r,this._data=this.normalizeData(n),this.settingsButtons=[],this._element=this.getTag()}var t,a,o;return t=e,o=[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{level:!1,text:{}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{tags:["H1","H2","H3","H4","H5","H6"]}}},{key:"toolbox",get:function(){return{icon:n(6).default,title:"Heading"}}}],(a=[{key:"normalizeData",value:function(e){var t={};return"object"!==r(e)&&(e={}),t.text=e.text||"",t.level=parseInt(e.level)||this.defaultLevel.number,t}},{key:"render",value:function(){return this._element}},{key:"renderSettings",value:function(){var e=this,t=document.createElement("DIV");return this.levels.length<=1||this.levels.forEach((function(n){var r=document.createElement("SPAN");r.classList.add(e._CSS.settingsButton),e.currentLevel.number===n.number&&r.classList.add(e._CSS.settingsButtonActive),r.innerHTML=n.svg,r.dataset.level=n.number,r.addEventListener("click",(function(){e.setLevel(n.number)})),t.appendChild(r),e.settingsButtons.push(r)})),t}},{key:"setLevel",value:function(e){var t=this;this.data={level:e,text:this.data.text},this.settingsButtons.forEach((function(n){n.classList.toggle(t._CSS.settingsButtonActive,parseInt(n.dataset.level)===e)}))}},{key:"merge",value:function(e){var t={text:this.data.text+e.text,level:this.data.level};this.data=t}},{key:"validate",value:function(e){return""!==e.text.trim()}},{key:"save",value:function(e){return{text:e.innerHTML,level:this.currentLevel.number}}},{key:"getTag",value:function(){var e=document.createElement(this.currentLevel.tag);return e.innerHTML=this._data.text||"",e.classList.add(this._CSS.wrapper),e.contentEditable=this.readOnly?"false":"true",e.dataset.placeholder=this.api.i18n.t(this._settings.placeholder||""),e}},{key:"onPaste",value:function(e){var t=e.detail.data,n=this.defaultLevel.number;switch(t.tagName){case"H1":n=1;break;case"H2":n=2;break;case"H3":n=3;break;case"H4":n=4;break;case"H5":n=5;break;case"H6":n=6}this._settings.levels&&(n=this._settings.levels.reduce((function(e,t){return Math.abs(t-n)<Math.abs(e-n)?t:e}))),this.data={level:n,text:t.innerHTML}}},{key:"data",get:function(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data},set:function(e){if(this._data=this.normalizeData(e),void 0!==e.level&&this._element.parentNode){var t=this.getTag();t.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(t,this._element),this._element=t}void 0!==e.text&&(this._element.innerHTML=this._data.text||"")}},{key:"currentLevel",get:function(){var e=this,t=this.levels.find((function(t){return t.number===e._data.level}));return t||(t=this.defaultLevel),t}},{key:"defaultLevel",get:function(){var e=this;if(this._settings.defaultLevel){var t=this.levels.find((function(t){return t.number===e._settings.defaultLevel}));if(t)return t;console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels")}return this.levels[1]}},{key:"levels",get:function(){var e=this,t=[{number:1,tag:"H1",svg:'<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>'},{number:2,tag:"H2",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>'},{number:3,tag:"H3",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>'},{number:4,tag:"H4",svg:'<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>'},{number:5,tag:"H5",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>'},{number:6,tag:"H6",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>'}];return this._settings.levels?t.filter((function(t){return e._settings.levels.includes(t.number)})):t}}])&&i(t.prototype,a),o&&i(t,o),e}();e.exports=a},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"/**\n * Plugin styles\n */\n.ce-header {\n  padding: 1em 0;\n  margin: 0;\n  margin-bottom: -0.9em;\n  line-height: 1.5em;\n  outline: none;\n}\n\n.ce-header p,\n.ce-header div{\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/**\n * Styles for Plugin icon in Toolbar\n */\n.ce-header__icon {}\n\n.ce-header[contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  display: none;\n  cursor: text;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty::before {\n  display: block;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty:focus::before {\n  display: none;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){return document.querySelector(e)},c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,f=[],d=n(5);function h(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(y(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(y(r.parts[o],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function v(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function p(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),b(t,e.attrs),p(e,t),t}function b(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var o=u++;n=l||(l=m(t)),r=L.bind(null,n,o,!1),i=L.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),p(e,t),t}(t),r=_.bind(null,n,t),i=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=H.bind(null,n),i=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=v(e,t);return h(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s)}e&&h(v(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function L(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function H(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function _(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,n){"use strict";n.r(t),t.default='<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">\n  <path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/>\n</svg>\n'}])}));

/***/ }),

/***/ "./node_modules/@editorjs/image/dist/bundle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@editorjs/image/dist/bundle.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=25)}([function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(t){var o=n(2),r=setTimeout;function i(){}function a(t){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(t,this)}function u(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,a._immediateFn((function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var o;try{o=n(t._value)}catch(t){return void s(e.promise,t)}c(e.promise,o)}else(1===t._state?c:s)(e.promise,t._value)}))):t._deferreds.push(e)}function c(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof a)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void d((o=n,r=e,function(){o.apply(r,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){s(t,e)}var o,r}function s(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&a._immediateFn((function(){t._handled||a._unhandledRejectionFn(t._value)}));for(var e=0,n=t._deferreds.length;e<n;e++)u(t,t._deferreds[e]);t._deferreds=null}function f(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function d(t,e){var n=!1;try{t((function(t){n||(n=!0,c(e,t))}),(function(t){n||(n=!0,s(e,t))}))}catch(t){if(n)return;n=!0,s(e,t)}}a.prototype.catch=function(t){return this.then(null,t)},a.prototype.then=function(t,e){var n=new this.constructor(i);return u(this,new f(t,e,n)),n},a.prototype.finally=o.a,a.all=function(t){return new a((function(e,n){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(t);if(0===o.length)return e([]);var r=o.length;function i(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,(function(e){i(t,e)}),n)}o[t]=a,0==--r&&e(o)}catch(t){n(t)}}for(var a=0;a<o.length;a++)i(a,o[a])}))},a.resolve=function(t){return t&&"object"==typeof t&&t.constructor===a?t:new a((function(e){e(t)}))},a.reject=function(t){return new a((function(e,n){n(t)}))},a.race=function(t){return new a((function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)}))},a._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){r(t,0)},a._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=a}).call(this,n(5).setImmediate)},function(t,e,n){"use strict";e.a=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){return e.reject(n)}))}))}},function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n(4);var r,i,a,u,c,s,l,f=n(8),d=(i=function(t){return new Promise((function(e,n){t=u(t),(t=c(t)).beforeSend&&t.beforeSend();var o=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");o.open(t.method,t.url),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(t.headers).forEach((function(e){var n=t.headers[e];o.setRequestHeader(e,n)}));var r=t.ratio;o.upload.addEventListener("progress",(function(e){var n=Math.round(e.loaded/e.total*100),o=Math.ceil(n*r/100);t.progress(Math.min(o,100))}),!1),o.addEventListener("progress",(function(e){var n=Math.round(e.loaded/e.total*100),o=Math.ceil(n*(100-r)/100)+r;t.progress(Math.min(o,100))}),!1),o.onreadystatechange=function(){if(4===o.readyState){var t=o.response;try{t=JSON.parse(t)}catch(t){}var r=f.parseHeaders(o.getAllResponseHeaders()),i={body:t,code:o.status,headers:r};l(o.status)?e(i):n(i)}},o.send(t.data)}))},a=function(t){return t.method="POST",i(t)},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.url&&"string"!=typeof t.url)throw new Error("Url must be a string");if(t.url=t.url||"",t.method&&"string"!=typeof t.method)throw new Error("`method` must be a string or null");if(t.method=t.method?t.method.toUpperCase():"GET",t.headers&&"object"!==o(t.headers))throw new Error("`headers` must be an object or null");if(t.headers=t.headers||{},t.type&&("string"!=typeof t.type||!Object.values(r).includes(t.type)))throw new Error("`type` must be taken from module's «contentType» library");if(t.progress&&"function"!=typeof t.progress)throw new Error("`progress` must be a function or null");if(t.progress=t.progress||function(t){},t.beforeSend=t.beforeSend||function(t){},t.ratio&&"number"!=typeof t.ratio)throw new Error("`ratio` must be a number");if(t.ratio<0||t.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(t.ratio=t.ratio||90,t.accept&&"string"!=typeof t.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(t.accept=t.accept||"*/*",t.multiple&&"boolean"!=typeof t.multiple)throw new Error("`multiple` must be a true or false");if(t.multiple=t.multiple||!1,t.fieldName&&"string"!=typeof t.fieldName)throw new Error("`fieldName` must be a string");return t.fieldName=t.fieldName||"files",t},c=function(t){switch(t.method){case"GET":var e=s(t.data,r.URLENCODED);delete t.data,t.url=/\?/.test(t.url)?t.url+"&"+e:t.url+"?"+e;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||r.JSON}(t);(f.isFormData(t.data)||f.isFormElement(t.data))&&(n=r.FORM),t.data=s(t.data,n),n!==d.contentType.FORM&&(t.headers["content-type"]=n)}return t},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case r.URLENCODED:return f.urlEncode(t);case r.JSON:return f.jsonEncode(t);case r.FORM:return f.formEncode(t);default:return t}},l=function(t){return t>=200&&t<300},{contentType:r={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(t){return t.method="GET",i(t)},post:a,transport:function(t){return t=u(t),f.selectFiles(t).then((function(e){for(var n=new FormData,o=0;o<e.length;o++)n.append(t.fieldName,e[o],e[o].name);f.isObject(t.data)&&Object.keys(t.data).forEach((function(e){var o=t.data[e];n.append(e,o)}));var r=t.beforeSend;return t.beforeSend=function(){return r(e)},t.data=n,a(t)}))},selectFiles:function(t){return delete(t=u(t)).beforeSend,f.selectFiles(t)}});t.exports=d},function(t,e,n){"use strict";n.r(e);var o=n(1);window.Promise=window.Promise||o.a},function(t,e,n){(function(t){var o=void 0!==t&&t||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},e.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(6),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var o,r,i,a,u,c=1,s={},l=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?o=function(t){e.nextTick((function(){h(t)}))}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?(a="setImmediate$"+Math.random()+"$",u=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&h(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",u,!1):t.attachEvent("onmessage",u),o=function(e){t.postMessage(a+e,"*")}):t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){h(t.data)},o=function(t){i.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(r=f.documentElement,o=function(t){var e=f.createElement("script");e.onreadystatechange=function(){h(t),e.onreadystatechange=null,r.removeChild(e),e=null},r.appendChild(e)}):o=function(t){setTimeout(h,0,t)},d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return s[c]=r,o(c),c++},d.clearImmediate=p}function p(t){delete s[t]}function h(t){if(l)setTimeout(h,0,t);else{var e=s[t];if(e){l=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{p(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(0),n(7))},function(t,e){var n,o,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var c,s=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&p())}function p(){if(!l){var t=u(d);l=!0;for(var e=s.length;e;){for(c=s,s=[];++f<e;)c&&c[f].run();f=-1,e=s.length}c=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new h(t,e)),1!==s.length||l||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r=n(9);t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"urlEncode",value:function(t){return r(t)}},{key:"jsonEncode",value:function(t){return JSON.stringify(t)}},{key:"formEncode",value:function(t){if(this.isFormData(t))return t;if(this.isFormElement(t))return new FormData(t);if(this.isObject(t)){var e=new FormData;return Object.keys(t).forEach((function(n){var o=t[n];e.append(n,o)})),e}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(t){return"[object Object]"===Object.prototype.toString.call(t)}},{key:"isFormData",value:function(t){return t instanceof FormData}},{key:"isFormElement",value:function(t){return t instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){var o=document.createElement("INPUT");o.type="file",t.multiple&&o.setAttribute("multiple","multiple"),t.accept&&o.setAttribute("accept",t.accept),o.style.display="none",document.body.appendChild(o),o.addEventListener("change",(function(t){var n=t.target.files;e(n),document.body.removeChild(o)}),!1),o.click()}))}},{key:"parseHeaders",value:function(t){var e=t.trim().split(/[\r\n]+/),n={};return e.forEach((function(t){var e=t.split(": "),o=e.shift(),r=e.join(": ");o&&(n[o]=r)})),n}}])&&o(e,n),t}()},function(t,e){var n=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},o=function(t,e,r,i){return e=e||null,r=r||"&",i=i||null,t?function(t){for(var e=new Array,n=0;n<t.length;n++)t[n]&&e.push(t[n]);return e}(Object.keys(t).map((function(a){var u,c,s=a;if(i&&(s=i+"["+s+"]"),"object"==typeof t[a]&&null!==t[a])u=o(t[a],null,r,s);else{e&&(c=s,s=!isNaN(parseFloat(c))&&isFinite(c)?e+Number(s):s);var l=t[a];l=(l=0===(l=!1===(l=!0===l?"1":l)?"0":l)?"0":l)||"",u=n(s)+"="+n(l)}return u}))).join(r).replace(/[!'()*]/g,""):""};t.exports=o}])},function(t,e,n){t.exports=n(14)},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},function(t,e,n){var o=n(4);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},function(t,e){function n(t,e,n,o,r,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(o,r)}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise((function(r,i){var a=t.apply(e,o);function u(t){n(a,r,i,u,c,"next",t)}function c(t){n(a,r,i,u,c,"throw",t)}u(void 0)}))}}},function(t,e,n){var o=n(19),r=n(20),i=n(5),a=n(21);t.exports=function(t){return o(t)||r(t)||i(t)||a()}},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"></path></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"></path></svg>'},function(t,e){t.exports='<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"></path></svg>'},function(t,e){t.exports='<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"></path></svg>'},function(t,e,n){var o=n(22),r=n(23),i=n(5),a=n(24);t.exports=function(t,e){return o(t)||r(t,e)||i(t,e)||a()}},function(t,e,n){var o=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n,o){var r=e&&e.prototype instanceof l?e:l,i=Object.create(r.prototype),a=new x(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return S()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var u=b(a,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var l=c(t,e,n);if("normal"===l.type){if(o=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function l(){}function f(){}function d(){}var p={};p[r]=function(){return this};var h=Object.getPrototypeOf,m=h&&h(h(E([])));m&&m!==e&&n.call(m,r)&&(p=m);var g=d.prototype=l.prototype=Object.create(p);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var o;this._invoke=function(r,i){function a(){return new e((function(o,a){!function o(r,i,a,u){var s=c(t[r],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(s.arg)}(r,i,o,a)}))}return o=o?o.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var o=c(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,s;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=g.constructor=d,d.constructor=f,d[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},v(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new y(u(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(g),g[a]="Generator",g[r]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;_(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}},function(t,e,n){var o=n(16),r=n(17);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});t.exports=a},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function u(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],c=e.base?i[0]+e.base:i[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var f=u(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:g(d,e),references:1}),o.push(l)}return o}function s(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,m=0;function g(t,e){var n,o,r;if(e.singleton){var i=m++;n=h||(h=s(e)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=s(e),o=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=u(n[o]);a[r].references--}for(var i=c(t,e),s=0;s<n.length;s++){var l=u(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(t,e,n){(e=n(18)(!1)).push([t.i,'.image-tool {\n  --bg-color: #cdd1e0;\n  --front-color: #388ae5;\n  --border-color: #e8e8eb;\n}\n\n  .image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n  .image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n  .image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .image-tool__image-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]::before {\n      position: absolute !important;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      display: none;\n    }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty::before {\n        display: block;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {\n        display: none;\n      }\n\n  .image-tool--empty .image-tool__image {\n      display: none;\n    }\n\n  .image-tool--empty .image-tool__caption, .image-tool--loading .image-tool__caption {\n      display: none;\n    }\n\n  .image-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .image-tool--filled .image-tool__image-preloader {\n        display: none;\n      }\n\n  .image-tool--loading .image-tool__image {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .image-tool--loading .image-tool__image-picture {\n        display: none;\n      }\n\n  .image-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .image-tool--withBorder .image-tool__image {\n      border: 1px solid var(--border-color);\n    }\n\n  .image-tool--withBackground .image-tool__image {\n      padding: 15px;\n      background: var(--bg-color);\n    }\n\n  .image-tool--withBackground .image-tool__image-picture {\n        max-width: 60%;\n        margin: 0 auto;\n      }\n\n  .image-tool--stretched .image-tool__image-picture {\n        width: 100%;\n      }\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var a,u,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){var o=n(4);t.exports=function(t){if(Array.isArray(t))return o(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==u.return||u.return()}finally{if(r)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return P}));var o=n(3),r=n.n(o),i=n(6),a=n.n(i),u=n(1),c=n.n(u),s=n(0),l=n.n(s),f=(n(15),n(7)),d=n.n(f),p=n(8),h=n.n(p),m=function(){function t(e){var n=e.api,o=e.config,r=e.onSelectFile,i=e.readOnly;c()(this,t),this.api=n,this.config=o,this.onSelectFile=r,this.readOnly=i,this.nodes={wrapper:g("div",[this.CSS.baseClass,this.CSS.wrapper]),imageContainer:g("div",[this.CSS.imageContainer]),fileButton:this.createFileButton(),imageEl:void 0,imagePreloader:g("div",this.CSS.imagePreloader),caption:g("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),this.nodes.wrapper.appendChild(this.nodes.imageContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}return l()(t,[{key:"render",value:function(e){return e.file&&0!==Object.keys(e.file).length?this.toggleStatus(t.status.UPLOADING):this.toggleStatus(t.status.EMPTY),this.nodes.wrapper}},{key:"createFileButton",value:function(){var t=this,e=g("div",[this.CSS.button]);return e.innerHTML=this.config.buttonContent||"".concat(h.a," ").concat(this.api.i18n.t("Select an Image")),e.addEventListener("click",(function(){t.onSelectFile()})),e}},{key:"showPreloader",value:function(e){this.nodes.imagePreloader.style.backgroundImage="url(".concat(e,")"),this.toggleStatus(t.status.UPLOADING)}},{key:"hidePreloader",value:function(){this.nodes.imagePreloader.style.backgroundImage="",this.toggleStatus(t.status.EMPTY)}},{key:"fillImage",value:function(e){var n=this,o=/\.mp4$/.test(e)?"VIDEO":"IMG",r={src:e},i="load";"VIDEO"===o&&(r.autoplay=!0,r.loop=!0,r.muted=!0,r.playsinline=!0,i="loadeddata"),this.nodes.imageEl=g(o,this.CSS.imageEl,r),this.nodes.imageEl.addEventListener(i,(function(){n.toggleStatus(t.status.FILLED),n.nodes.imagePreloader&&(n.nodes.imagePreloader.style.backgroundImage="")})),this.nodes.imageContainer.appendChild(this.nodes.imageEl)}},{key:"fillCaption",value:function(t){this.nodes.caption&&(this.nodes.caption.innerHTML=t)}},{key:"toggleStatus",value:function(e){for(var n in t.status)Object.prototype.hasOwnProperty.call(t.status,n)&&this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(t.status[n]),e===t.status[n])}},{key:"applyTune",value:function(t,e){this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper,"--").concat(t),e)}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"image-tool",imageContainer:"image-tool__image",imagePreloader:"image-tool__image-preloader",imageEl:"image-tool__image-picture",caption:"image-tool__caption"}}}],[{key:"status",get:function(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}}]),t}(),g=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=document.createElement(t);Array.isArray(n)?(e=r.classList).add.apply(e,d()(n)):n&&r.classList.add(n);for(var i in o)r[i]=o[i];return r},v=n(9),y=n.n(v),b=n(10),w=n.n(b),_=n(11),x=n.n(_),E=function(){function t(e){var n=e.api,o=e.actions,r=e.onChange;c()(this,t),this.api=n,this.actions=o,this.onChange=r,this.buttons=[]}return l()(t,[{key:"render",value:function(e){var n=this,o=g("div",this.CSS.wrapper);return this.buttons=[],t.tunes.concat(this.actions).forEach((function(t){var r=n.api.i18n.t(t.title),i=g("div",[n.CSS.buttonBase,n.CSS.button],{innerHTML:t.icon,title:r});i.addEventListener("click",(function(){n.tuneClicked(t.name,t.action)})),i.dataset.tune=t.name,i.classList.toggle(n.CSS.buttonActive,e[t.name]),n.buttons.push(i),n.api.tooltip.onHover(i,r,{placement:"top"}),o.appendChild(i)})),o}},{key:"tuneClicked",value:function(t,e){if("function"==typeof e&&!e(t))return!1;var n=this.buttons.find((function(e){return e.dataset.tune===t}));n.classList.toggle(this.CSS.buttonActive,!n.classList.contains(this.CSS.buttonActive)),this.onChange(t)}},{key:"CSS",get:function(){return{wrapper:"",buttonBase:this.api.styles.settingsButton,button:"image-tool__tune",buttonActive:this.api.styles.settingsButtonActive}}}],[{key:"tunes",get:function(){return[{name:"withBorder",icon:w.a,title:"With border"},{name:"stretched",icon:x.a,title:"Stretch image"},{name:"withBackground",icon:y.a,title:"With background"}]}}]),t}(),S=n(12),k=n.n(S),T=n(13),O=n.n(T),j=n(2),L=n.n(j),C=function(){function t(e){var n=e.config,o=e.onUpload,r=e.onError;c()(this,t),this.config=n,this.onUpload=o,this.onError=r}return l()(t,[{key:"uploadSelectedFile",value:function(t){var e=this,n=t.onPreview,o=function(t){var e=new FileReader;e.readAsDataURL(t),e.onload=function(t){n(t.target.result)}};(this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile?L.a.selectFiles({accept:this.config.types}).then((function(t){o(t[0]);var n=e.config.uploader.uploadByFile(t[0]);return F(n)||console.warn("Custom uploader method uploadByFile should return a Promise"),n})):L.a.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types,headers:this.config.additionalRequestHeaders,beforeSend:function(t){o(t[0])},fieldName:this.config.field}).then((function(t){return t.body}))).then((function(t){e.onUpload(t)})).catch((function(t){e.onError(t)}))}},{key:"uploadByUrl",value:function(t){var e,n=this;this.config.uploader&&"function"==typeof this.config.uploader.uploadByUrl?F(e=this.config.uploader.uploadByUrl(t))||console.warn("Custom uploader method uploadByUrl should return a Promise"):e=L.a.post({url:this.config.endpoints.byUrl,data:Object.assign({url:t},this.config.additionalRequestData),type:L.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((function(t){return t.body})),e.then((function(t){n.onUpload(t)})).catch((function(t){n.onError(t)}))}},{key:"uploadByFile",value:function(t,e){var n,o=this,r=e.onPreview,i=new FileReader;if(i.readAsDataURL(t),i.onload=function(t){r(t.target.result)},this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile)F(n=this.config.uploader.uploadByFile(t))||console.warn("Custom uploader method uploadByFile should return a Promise");else{var a=new FormData;a.append(this.config.field,t),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach((function(t){var e=O()(t,2),n=e[0],o=e[1];a.append(n,o)})),n=L.a.post({url:this.config.endpoints.byFile,data:a,type:L.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then((function(t){return t.body}))}n.then((function(t){o.onUpload(t)})).catch((function(t){o.onError(t)}))}}]),t}();function F(t){return Promise.resolve(t)===t}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */var P=function(){function t(e){var n=this,o=e.data,r=e.config,i=e.api,a=e.readOnly;c()(this,t),this.api=i,this.readOnly=a,this.config={endpoints:r.endpoints||"",additionalRequestData:r.additionalRequestData||{},additionalRequestHeaders:r.additionalRequestHeaders||{},field:r.field||"image",types:r.types||"image/*",captionPlaceholder:this.api.i18n.t(r.captionPlaceholder||"Caption"),buttonContent:r.buttonContent||"",uploader:r.uploader||void 0,actions:r.actions||[]},this.uploader=new C({config:this.config,onUpload:function(t){return n.onUpload(t)},onError:function(t){return n.uploadingFailed(t)}}),this.ui=new m({api:i,config:this.config,onSelectFile:function(){n.uploader.uploadSelectedFile({onPreview:function(t){n.ui.showPreloader(t)}})},readOnly:a}),this.tunes=new E({api:i,actions:this.config.actions,onChange:function(t){return n.tuneToggled(t)}}),this._data={},this.data=o}var e;return l()(t,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:k.a,title:"Image"}}}]),l()(t,[{key:"render",value:function(){return this.ui.render(this.data)}},{key:"save",value:function(){var t=this.ui.nodes.caption;return this._data.caption=t.innerHTML,this.data}},{key:"renderSettings",value:function(){return this.tunes.render(this.data)}},{key:"appendCallback",value:function(){this.ui.nodes.fileButton.click()}},{key:"onPaste",value:(e=a()(r.a.mark((function t(e){var n,o,i,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.type,t.next="tag"===t.t0?3:"pattern"===t.t0?15:"file"===t.t0?18:21;break;case 3:if(n=e.detail.data,!/^blob:/.test(n.src)){t.next=13;break}return t.next=7,fetch(n.src);case 7:return o=t.sent,t.next=10,o.blob();case 10:return i=t.sent,this.uploadFile(i),t.abrupt("break",21);case 13:return this.uploadUrl(n.src),t.abrupt("break",21);case 15:return a=e.detail.data,this.uploadUrl(a),t.abrupt("break",21);case 18:return u=e.detail.file,this.uploadFile(u),t.abrupt("break",21);case 21:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"onUpload",value:function(t){t.success&&t.file?this.image=t.file:this.uploadingFailed("incorrect response: "+JSON.stringify(t))}},{key:"uploadingFailed",value:function(t){console.log("Image Tool: uploading failed because of",t),this.api.notifier.show({message:this.api.i18n.t("Couldn’t upload image. Please try another."),style:"error"}),this.ui.hidePreloader()}},{key:"tuneToggled",value:function(t){this.setTune(t,!this._data[t])}},{key:"setTune",value:function(t,e){var n=this;this._data[t]=e,this.ui.applyTune(t,e),"stretched"===t&&Promise.resolve().then((function(){var t=n.api.blocks.getCurrentBlockIndex();n.api.blocks.stretchBlock(t,e)})).catch((function(t){console.error(t)}))}},{key:"uploadFile",value:function(t){var e=this;this.uploader.uploadByFile(t,{onPreview:function(t){e.ui.showPreloader(t)}})}},{key:"uploadUrl",value:function(t){this.ui.showPreloader(t),this.uploader.uploadByUrl(t)}},{key:"data",set:function(t){var e=this;this.image=t.file,this._data.caption=t.caption||"",this.ui.fillCaption(this._data.caption),E.tunes.forEach((function(n){var o=n.name,r=void 0!==t[o]&&(!0===t[o]||"true"===t[o]);e.setTune(o,r)}))},get:function(){return this._data}},{key:"image",set:function(t){this._data.file=t||{},t&&t.url&&this.ui.fillImage(t.url)}}],[{key:"pasteConfig",get:function(){return{tags:["img"],patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i},files:{mimeTypes:["image/*"]}}}}]),t}()}]).default}));

/***/ }),

/***/ "./node_modules/@editorjs/list/dist/bundle.js":
/*!****************************************************!*\
  !*** ./node_modules/@editorjs/list/dist/bundle.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n(1).toString();var s=function(){function e(t){var n=t.data,r=(t.config,t.api),i=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elements={wrapper:null},this.api=r,this.readOnly=i,this.settings=[{name:"unordered",title:this.api.i18n.t("Unordered"),icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',default:!1},{name:"ordered",title:this.api.i18n.t("Ordered"),icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.819 4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0-4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0 9.357h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 0 1 0-2.137zM1.468 4.155V1.33c-.554.404-.926.606-1.118.606a.338.338 0 0 1-.244-.104A.327.327 0 0 1 0 1.59c0-.107.035-.184.105-.234.07-.05.192-.114.369-.192.264-.118.475-.243.633-.373.158-.13.298-.276.42-.438a3.94 3.94 0 0 1 .238-.298C1.802.019 1.872 0 1.975 0c.115 0 .208.042.277.127.07.085.105.202.105.351v3.556c0 .416-.15.624-.448.624a.421.421 0 0 1-.32-.127c-.08-.085-.121-.21-.121-.376zm-.283 6.664h1.572c.156 0 .275.03.358.091a.294.294 0 0 1 .123.25.323.323 0 0 1-.098.238c-.065.065-.164.097-.296.097H.629a.494.494 0 0 1-.353-.119.372.372 0 0 1-.126-.28c0-.068.027-.16.081-.273a.977.977 0 0 1 .178-.268c.267-.264.507-.49.722-.678.215-.188.368-.312.46-.371.165-.11.302-.222.412-.334.109-.112.192-.226.25-.344a.786.786 0 0 0 .085-.345.6.6 0 0 0-.341-.553.75.75 0 0 0-.345-.08c-.263 0-.47.11-.62.329-.02.029-.054.107-.101.235a.966.966 0 0 1-.16.295c-.059.069-.145.103-.26.103a.348.348 0 0 1-.25-.094.34.34 0 0 1-.099-.258c0-.132.031-.27.093-.413.063-.143.155-.273.279-.39.123-.116.28-.21.47-.282.189-.072.411-.107.666-.107.307 0 .569.045.786.137a1.182 1.182 0 0 1 .618.623 1.18 1.18 0 0 1-.096 1.083 2.03 2.03 0 0 1-.378.457c-.128.11-.344.282-.646.517-.302.235-.509.417-.621.547a1.637 1.637 0 0 0-.148.187z"/></svg>',default:!0}],this._data={style:this.settings.find((function(e){return!0===e.default})).name,items:[]},this.data=n}return o(e,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',title:"List"}}}]),o(e,[{key:"render",value:function(){var e=this;return this._elements.wrapper=this.makeMainTag(this._data.style),this._data.items.length?this._data.items.forEach((function(t){e._elements.wrapper.appendChild(e._make("li",e.CSS.item,{innerHTML:t}))})):this._elements.wrapper.appendChild(this._make("li",this.CSS.item)),this.readOnly||this._elements.wrapper.addEventListener("keydown",(function(t){switch(t.keyCode){case 13:e.getOutofList(t);break;case 8:e.backspace(t)}}),!1),this._elements.wrapper}},{key:"save",value:function(){return this.data}},{key:"renderSettings",value:function(){var e=this,t=this._make("div",[this.CSS.settingsWrapper],{});return this.settings.forEach((function(n){var r=e._make("div",e.CSS.settingsButton,{innerHTML:n.icon});r.addEventListener("click",(function(){e.toggleTune(n.name);var t=r.parentNode.querySelectorAll("."+e.CSS.settingsButton);Array.from(t).forEach((function(t){return t.classList.remove(e.CSS.settingsButtonActive)})),r.classList.toggle(e.CSS.settingsButtonActive)})),e.api.tooltip.onHover(r,n.title,{placement:"top",hidingDelay:500}),e._data.style===n.name&&r.classList.add(e.CSS.settingsButtonActive),t.appendChild(r)})),t}},{key:"onPaste",value:function(e){var t=e.detail.data;this.data=this.pasteHandler(t)}},{key:"makeMainTag",value:function(e){var t="ordered"===e?this.CSS.wrapperOrdered:this.CSS.wrapperUnordered,n="ordered"===e?"ol":"ul";return this._make(n,[this.CSS.baseBlock,this.CSS.wrapper,t],{contentEditable:!this.readOnly})}},{key:"toggleTune",value:function(e){for(var t=this.makeMainTag(e);this._elements.wrapper.hasChildNodes();)t.appendChild(this._elements.wrapper.firstChild);this._elements.wrapper.replaceWith(t),this._elements.wrapper=t,this._data.style=e}},{key:"_make",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=document.createElement(e);Array.isArray(n)?(t=a.classList).add.apply(t,r(n)):n&&a.classList.add(n);for(var o in i)a[o]=i[o];return a}},{key:"getOutofList",value:function(e){var t=this._elements.wrapper.querySelectorAll("."+this.CSS.item);if(!(t.length<2)){var n=t[t.length-1],r=this.currentItem;r!==n||n.textContent.trim().length||(r.parentElement.removeChild(r),this.api.blocks.insert(void 0,void 0,void 0,void 0,!0),e.preventDefault(),e.stopPropagation())}}},{key:"backspace",value:function(e){var t=this._elements.wrapper.querySelectorAll("."+this.CSS.item),n=t[0];n&&t.length<2&&!n.innerHTML.replace("<br>"," ").trim()&&e.preventDefault()}},{key:"selectItem",value:function(e){e.preventDefault();var t=window.getSelection(),n=t.anchorNode.parentNode.closest("."+this.CSS.item),r=new Range;r.selectNodeContents(n),t.removeAllRanges(),t.addRange(r)}},{key:"pasteHandler",value:function(e){var t,n=e.tagName;switch(n){case"OL":t="ordered";break;case"UL":case"LI":t="unordered"}var r={style:t,items:[]};if("LI"===n)r.items=[e.innerHTML];else{var i=Array.from(e.querySelectorAll("LI"));r.items=i.map((function(e){return e.innerHTML})).filter((function(e){return!!e.trim()}))}return r}},{key:"CSS",get:function(){return{baseBlock:this.api.styles.block,wrapper:"cdx-list",wrapperOrdered:"cdx-list--ordered",wrapperUnordered:"cdx-list--unordered",item:"cdx-list__item",settingsWrapper:"cdx-list-settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}},{key:"data",set:function(e){e||(e={}),this._data.style=e.style||this.settings.find((function(e){return!0===e.default})).name,this._data.items=e.items||[];var t=this._elements.wrapper;t&&t.parentNode.replaceChild(this.render(),t)},get:function(){this._data.items=[];for(var e=this._elements.wrapper.querySelectorAll(".".concat(this.CSS.item)),t=0;t<e.length;t++){e[t].innerHTML.replace("<br>"," ").trim()&&this._data.items.push(e[t].innerHTML)}return this._data}},{key:"currentItem",get:function(){var e=window.getSelection().anchorNode;return e.nodeType!==Node.ELEMENT_NODE&&(e=e.parentNode),e.closest(".".concat(this.CSS.item))}}],[{key:"conversionConfig",get:function(){return{export:function(e){return e.items.join(". ")},import:function(e){return{items:[e],style:"unordered"}}}}},{key:"sanitize",get:function(){return{style:{},items:{br:!0}}}},{key:"pasteConfig",get:function(){return{tags:["OL","UL","LI"]}}}]),e}();e.exports=s},function(e,t,n){var r=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var a=e[i],c=t.base?a[0]+t.base:a[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:u,updater:v(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,i;if(t.singleton){var a=m++;n=h||(h=l(t)),r=f.bind(null,n,a,!1),i=f.bind(null,n,a,!0)}else n=l(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);o[i].references--}for(var a=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=a}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,".cdx-list {\n    margin: 0;\n    padding-left: 40px;\n    outline: none;\n}\n\n    .cdx-list__item {\n        padding: 5.5px 0 5.5px 3px;\n        line-height: 1.6em;\n    }\n\n    .cdx-list--unordered {\n        list-style: disc;\n    }\n\n    .cdx-list--ordered {\n        list-style: decimal;\n    }\n\n    .cdx-list-settings {\n        display: flex;\n    }\n\n    .cdx-list-settings .cdx-settings-button {\n            width: 50%;\n        }\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}var o,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}}])}));

/***/ }),

/***/ "./node_modules/@editorjs/marker/dist/bundle.js":
/*!******************************************************!*\
  !*** ./node_modules/@editorjs/marker/dist/bundle.js ***!
  \******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n(1).toString();var i=function(){function t(e){var n=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=n,this.button=null,this.tag="MARK",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}return o(t,null,[{key:"CSS",get:function(){return"cdx-marker"}}]),o(t,[{key:"render",value:function(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(e){if(e){var n=this.api.selection.findParentTag(this.tag,t.CSS);n?this.unwrap(n):this.wrap(e)}}},{key:"wrap",value:function(e){var n=document.createElement(this.tag);n.classList.add(t.CSS),n.appendChild(e.extractContents()),e.insertNode(n),this.api.selection.expandToTag(n)}},{key:"unwrap",value:function(t){this.api.selection.expandToTag(t);var e=window.getSelection(),n=e.getRangeAt(0),r=n.extractContents();t.parentNode.removeChild(t),n.insertNode(r),e.removeAllRanges(),e.addRange(n)}},{key:"checkState",value:function(){var e=this.api.selection.findParentTag(this.tag,t.CSS);this.button.classList.toggle(this.iconClasses.active,!!e)}},{key:"toolboxIcon",get:function(){return n(6).default}}],[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{mark:{class:t.CSS}}}}]),t}();t.exports=i},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-marker {\n  background: rgba(245,235,111,0.29);\n  padding: 3px 0;\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,f=[],l=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function b(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),h(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;n=u||(u=b(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var m,w=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";n.r(e),e.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 2 13 12" width="13" height="12"><path d="M8.367 9.633L10.7 10.98l-.624 1.135-.787-.025-.78 1.35H6.94l1.193-2.066-.407-.62.642-1.121zm.436-.763l2.899-5.061a1.278 1.278 0 011.746-.472c.617.355.835 1.138.492 1.76l-2.815 5.114-2.322-1.34zM2.62 11.644H5.39a.899.899 0 110 1.798H2.619a.899.899 0 010-1.798z"/></svg>\n'}])});

/***/ }),

/***/ "./node_modules/@editorjs/quote/dist/bundle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@editorjs/quote/dist/bundle.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n(1).toString();var a=function(){function t(e){var n=e.data,r=e.config,o=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=t.ALIGNMENTS,a=t.DEFAULT_ALIGNMENT;this.api=o,this.quotePlaceholder=r.quotePlaceholder||t.DEFAULT_QUOTE_PLACEHOLDER,this.captionPlaceholder=r.captionPlaceholder||t.DEFAULT_CAPTION_PLACEHOLDER,this.data={text:n.text||"",caption:n.caption||"",alignment:Object.values(i).includes(n.alignment)&&n.alignment||r.defaultAlignment||a}}return i(t,[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,wrapper:"cdx-quote",text:"cdx-quote__text",input:this.api.styles.input,caption:"cdx-quote__caption",settingsWrapper:"cdx-quote-settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}},{key:"settings",get:function(){return[{name:"left",icon:'<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm0 4.275H9.03a1.069 1.069 0 1 1 0 2.137H1.07a1.069 1.069 0 1 1 0-2.137zm0 4.275h9.812a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z" /></svg>'},{name:"center",icon:'<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm3.15 4.275h5.962a1.069 1.069 0 0 1 0 2.137H4.22a1.069 1.069 0 1 1 0-2.137zM1.069 8.55H13.33a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z"/></svg>'}]}}],[{key:"toolbox",get:function(){return{icon:'<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><path d="M13.53 6.185l.027.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.569-1.568l4.838-4.837L6.396 2.23A1.125 1.125 0 1 1 7.986.64l5.52 5.518.025.027zm-5.815 0l.026.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.568-1.568l4.837-4.837L.58 2.23A1.125 1.125 0 0 1 2.171.64L7.69 6.158l.025.027z" /></svg>',title:"Quote"}}},{key:"contentless",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"DEFAULT_QUOTE_PLACEHOLDER",get:function(){return"Enter a quote"}},{key:"DEFAULT_CAPTION_PLACEHOLDER",get:function(){return"Enter a caption"}},{key:"ALIGNMENTS",get:function(){return{left:"left",center:"center"}}},{key:"DEFAULT_ALIGNMENT",get:function(){return t.ALIGNMENTS.left}},{key:"conversionConfig",get:function(){return{import:"text",export:function(t){return t.caption?"".concat(t.text," — ").concat(t.caption):t.text}}}}]),i(t,[{key:"render",value:function(){var t=this._make("blockquote",[this.CSS.baseClass,this.CSS.wrapper]),e=this._make("div",[this.CSS.input,this.CSS.text],{contentEditable:!0,innerHTML:this.data.text}),n=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!0,innerHTML:this.data.caption});return e.dataset.placeholder=this.quotePlaceholder,n.dataset.placeholder=this.captionPlaceholder,t.appendChild(e),t.appendChild(n),t}},{key:"save",value:function(t){var e=t.querySelector(".".concat(this.CSS.text)),n=t.querySelector(".".concat(this.CSS.caption));return Object.assign(this.data,{text:e.innerHTML,caption:n.innerHTML})}},{key:"renderSettings",value:function(){var t=this,e=this._make("div",[this.CSS.settingsWrapper],{});return this.settings.map(function(n){var r,o=t._make("div",t.CSS.settingsButton,{innerHTML:n.icon,title:"".concat((r=n.name,r[0].toUpperCase()+r.substr(1))," alignment")});return o.classList.toggle(t.CSS.settingsButtonActive,n.name===t.data.alignment),e.appendChild(o),o}).forEach(function(e,n,r){e.addEventListener("click",function(){t._toggleTune(t.settings[n].name),r.forEach(function(e,n){var r=t.settings[n].name;e.classList.toggle(t.CSS.settingsButtonActive,r===t.data.alignment)})})}),e}},{key:"_toggleTune",value:function(t){this.data.alignment=t}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);Array.isArray(n)?(e=i.classList).add.apply(e,r(n)):n&&i.classList.add(n);for(var a in o)i[a]=o[a];return i}}],[{key:"sanitize",get:function(){return{text:{br:!0},caption:{br:!0},alignment:{}}}}]),t}();t.exports=a},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-quote-icon svg {\n  transform: rotate(180deg);\n}\n\n.cdx-quote {\n  margin: 0;\n}\n\n.cdx-quote__text {\n  min-height: 158px;\n  margin-bottom: 10px;\n}\n\n.cdx-quote__caption {}\n\n.cdx-quote [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-quote-settings {\n  display: flex;\n}\n\n.cdx-quote-settings .cdx-settings-button {\n  width: 50%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,u=0,l=[],f=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),m(e,t.attrs),h(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=g(e)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,x=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function w(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ "./node_modules/@editorjs/simple-image/dist/bundle.js":
/*!************************************************************!*\
  !*** ./node_modules/@editorjs/simple-image/dist/bundle.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(1).toString();var o=function(){function t(e){var n=e.data,r=(e.config,e.api);!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"cdx-simple-image",imageHolder:"cdx-simple-image__picture",caption:"cdx-simple-image__caption"},this.nodes={wrapper:null,imageHolder:null,image:null,caption:null},this.data={url:n.url||"",caption:n.caption||"",withBorder:void 0!==n.withBorder&&n.withBorder,withBackground:void 0!==n.withBackground&&n.withBackground,stretched:void 0!==n.stretched&&n.stretched},this.settings=[{name:"withBorder",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'},{name:"stretched",icon:'<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>'},{name:"withBackground",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>'}]}var e,n,o;return e=t,o=[{key:"sanitize",get:function(){return{url:{},withBorder:{},withBackground:{},stretched:{},caption:{a:{href:!0,target:"_blank",rel:"nofollow"},b:{},i:{},br:!0,span:{class:"inline-code"},mark:{class:"cdx-marker"}}}}},{key:"pasteConfig",get:function(){return{patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i},tags:["img"],files:{mimeTypes:["image/*"]}}}}],(n=[{key:"render",value:function(){var t=this,e=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),n=this._make("div",this.CSS.loading),r=this._make("div",this.CSS.imageHolder),i=this._make("img"),o=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:"true",innerHTML:this.data.caption||""});return o.dataset.placeholder="Enter a caption",e.appendChild(n),this.data.url&&(i.src=this.data.url),i.onload=function(){e.classList.remove(t.CSS.loading),r.appendChild(i),e.appendChild(r),e.appendChild(o),n.remove(),t._acceptTuneView()},i.onerror=function(t){console.log("Failed to load an image",t)},this.nodes.imageHolder=r,this.nodes.wrapper=e,this.nodes.image=i,this.nodes.caption=o,e}},{key:"save",value:function(t){var e=t.querySelector("img"),n=t.querySelector("."+this.CSS.input);return e?Object.assign(this.data,{url:e.src,caption:n.innerHTML}):this.data}},{key:"onDropHandler",value:function(t){var e=new FileReader;return e.readAsDataURL(t),new Promise(function(n){e.onload=function(e){n({url:e.target.result,caption:t.name})}})}},{key:"onPaste",value:function(t){var e=this;switch(t.type){case"tag":var n=t.detail.data;this.data={url:n.src};break;case"pattern":var r=t.detail.data;this.data={url:r};break;case"file":var i=t.detail.file;this.onDropHandler(i).then(function(t){e.data=t})}}},{key:"renderSettings",value:function(){var t=this,e=document.createElement("div");return this.settings.forEach(function(n){var r=document.createElement("div");r.classList.add(t.CSS.settingsButton),r.innerHTML=n.icon,r.addEventListener("click",function(){t._toggleTune(n.name),r.classList.toggle(t.CSS.settingsButtonActive)}),r.classList.toggle(t.CSS.settingsButtonActive,t.data[n.name]),e.appendChild(r)}),e}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(t);Array.isArray(n)?(e=o.classList).add.apply(e,r(n)):n&&o.classList.add(n);for(var a in i)o[a]=i[a];return o}},{key:"_toggleTune",value:function(t){this.data[t]=!this.data[t],this._acceptTuneView()}},{key:"_acceptTuneView",value:function(){var t=this;this.settings.forEach(function(e){t.nodes.imageHolder.classList.toggle(t.CSS.imageHolder+"--"+e.name.replace(/([A-Z])/g,function(t){return"-".concat(t[0].toLowerCase())}),!!t.data[e.name]),"stretched"===e.name&&t.api.blocks.stretchBlock(t.api.blocks.getCurrentBlockIndex(),!!t.data.stretched)})}},{key:"data",get:function(){return this._data},set:function(t){this._data=Object.assign({},this.data,t),this.nodes.image&&(this.nodes.image.src=this.data.url),this.nodes.caption&&(this.nodes.caption.innerHTML=this.data.caption)}}])&&i(e.prototype,n),o&&i(e,o),t}();t.exports=o},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-simple-image {}\n\n.cdx-simple-image .cdx-loader {\n  min-height: 200px;\n}\n\n.cdx-simple-image .cdx-input {\n  margin-top: 10px;\n}\n\n.cdx-simple-image img {\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n }\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-simple-image__picture--with-background {\n  background: #eff2f5;\n  padding: 10px;\n}\n\n.cdx-simple-image__picture--with-background img {\n  display: block;\n  max-width: 60%;\n  margin: 0 auto;\n}\n\n.cdx-simple-image__picture--with-border {\n  border: 1px solid #e8e8eb;\n  padding: 1px;\n}\n\n.cdx-simple-image__picture--stretched img {\n  max-width: none;\n  width: 100%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,l=0,u=[],d=n(5);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(e,t.attrs),h(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var a=l++;n=c||(c=v(e)),r=x.bind(null,n,a,!1),i=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=d(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&p(f(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}])});

/***/ }),

/***/ "./node_modules/@editorjs/warning/dist/bundle.js":
/*!*******************************************************!*\
  !*** ./node_modules/@editorjs/warning/dist/bundle.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:65-79 */
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e){t.exports='<svg width="16" height="17" viewBox="0 0 320 294" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M160.5 97c12.426 0 22.5 10.074 22.5 22.5v28c0 12.426-10.074 22.5-22.5 22.5S138 159.926 138 147.5v-28c0-12.426 10.074-22.5 22.5-22.5zm0 83c14.636 0 26.5 11.864 26.5 26.5S175.136 233 160.5 233 134 221.136 134 206.5s11.864-26.5 26.5-26.5zm-.02-135c-6.102 0-14.05 8.427-23.842 25.28l-74.73 127.605c-12.713 21.444-17.806 35.025-15.28 40.742 2.527 5.717 8.519 9.175 17.974 10.373h197.255c5.932-1.214 10.051-4.671 12.357-10.373 2.307-5.702-1.812-16.903-12.357-33.603L184.555 70.281C174.608 53.427 166.583 45 160.48 45zm154.61 165.418c2.216 6.027 3.735 11.967 4.393 18.103.963 8.977.067 18.035-3.552 26.98-7.933 19.612-24.283 33.336-45.054 37.586l-4.464.913H61.763l-2.817-.357c-10.267-1.3-19.764-4.163-28.422-9.16-11.051-6.377-19.82-15.823-25.055-27.664-4.432-10.03-5.235-19.952-3.914-29.887.821-6.175 2.486-12.239 4.864-18.58 3.616-9.64 9.159-20.55 16.718-33.309L97.77 47.603c6.469-11.125 12.743-20.061 19.436-27.158 4.62-4.899 9.562-9.07 15.206-12.456C140.712 3.01 150.091 0 160.481 0c10.358 0 19.703 2.99 27.989 7.933 5.625 3.356 10.563 7.492 15.193 12.354 6.735 7.072 13.08 15.997 19.645 27.12l.142.24 76.986 134.194c6.553 10.46 11.425 19.799 14.654 28.577z"></path></svg>'},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(0),o=n.n(r);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n(2).toString();var c=function(){function t(e){var n=e.data,r=e.config,o=e.api;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=o,this.titlePlaceholder=r.titlePlaceholder||t.DEFAULT_TITLE_PLACEHOLDER,this.messagePlaceholder=r.messagePlaceholder||t.DEFAULT_MESSAGE_PLACEHOLDER,this.data={title:n.title||"",message:n.message||""}}return s(t,[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,wrapper:"cdx-warning",title:"cdx-warning__title",input:this.api.styles.input,message:"cdx-warning__message"}}}],[{key:"toolbox",get:function(){return{icon:o.a,title:"Warning"}}},{key:"enableLineBreaks",get:function(){return!0}},{key:"DEFAULT_TITLE_PLACEHOLDER",get:function(){return"Title"}},{key:"DEFAULT_MESSAGE_PLACEHOLDER",get:function(){return"Message"}}]),s(t,[{key:"render",value:function(){var t=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),e=this._make("div",[this.CSS.input,this.CSS.title],{contentEditable:!0,innerHTML:this.data.title}),n=this._make("div",[this.CSS.input,this.CSS.message],{contentEditable:!0,innerHTML:this.data.message});return e.dataset.placeholder=this.titlePlaceholder,n.dataset.placeholder=this.messagePlaceholder,t.appendChild(e),t.appendChild(n),t}},{key:"save",value:function(t){var e=t.querySelector(".".concat(this.CSS.title)),n=t.querySelector(".".concat(this.CSS.message));return Object.assign(this.data,{title:e.innerHTML,message:n.innerHTML})}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(t);Array.isArray(n)?(e=o.classList).add.apply(e,i(n)):n&&o.classList.add(n);for(var a in r)o[a]=r[a];return o}}],[{key:"sanitize",get:function(){return{title:{},message:{}}}}]),t}()},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".cdx-warning {\n  position: relative;\n}\n\n.cdx-warning [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-warning [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-warning [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-warning::before {\n  content: '';\n  background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 320 294' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath fill='%237B7E89' d='M160.5 97c12.426 0 22.5 10.074 22.5 22.5v28c0 12.426-10.074 22.5-22.5 22.5S138 159.926 138 147.5v-28c0-12.426 10.074-22.5 22.5-22.5zm0 83c14.636 0 26.5 11.864 26.5 26.5S175.136 233 160.5 233 134 221.136 134 206.5s11.864-26.5 26.5-26.5zm-.02-135c-6.102 0-14.05 8.427-23.842 25.28l-74.73 127.605c-12.713 21.444-17.806 35.025-15.28 40.742 2.527 5.717 8.519 9.175 17.974 10.373h197.255c5.932-1.214 10.051-4.671 12.357-10.373 2.307-5.702-1.812-16.903-12.357-33.603L184.555 70.281C174.608 53.427 166.583 45 160.48 45zm154.61 165.418c2.216 6.027 3.735 11.967 4.393 18.103.963 8.977.067 18.035-3.552 26.98-7.933 19.612-24.283 33.336-45.054 37.586l-4.464.913H61.763l-2.817-.357c-10.267-1.3-19.764-4.163-28.422-9.16-11.051-6.377-19.82-15.823-25.055-27.664-4.432-10.03-5.235-19.952-3.914-29.887.821-6.175 2.486-12.239 4.864-18.58 3.616-9.64 9.159-20.55 16.718-33.309L97.77 47.603c6.469-11.125 12.743-20.061 19.436-27.158 4.62-4.899 9.562-9.07 15.206-12.456C140.712 3.01 150.091 0 160.481 0c10.358 0 19.703 2.99 27.989 7.933 5.625 3.356 10.563 7.492 15.193 12.354 6.735 7.072 13.08 15.997 19.645 27.12l.142.24 76.986 134.194c6.553 10.46 11.425 19.799 14.654 28.577z'/%3E%3C/svg%3E\");\n  width: 18px;\n  height: 18px;\n  background-size: 18px 18px;\n  position: absolute;\n  margin-top: 12px;\n  left: -30px;\n}\n\n@media all and (max-width: 735px) {\n  .cdx-warning::before {\n    display: none;\n  }\n}\n\n.cdx-warning__message {\n  min-height: 85px;\n}\n\n.cdx-warning__title {\n  margin-bottom: 6px;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,u=[],f=n(6);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),h(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=c||(c=g(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&d(p(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]).default});

/***/ }),

/***/ "./node_modules/ansi-html/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ansi-html/index.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:0-14 */
/***/ ((module) => {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, module, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/init.js */ "./src/js/init.js");
/* harmony import */ var _js_carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/carousel.js */ "./src/js/carousel.js");
/* harmony import */ var _js_handlePost_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/handlePost.js */ "./src/js/handlePost.js");
/* harmony import */ var _js_pagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/pagination.js */ "./src/js/pagination.js");
/* harmony import */ var _js_popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/popup.js */ "./src/js/popup.js");
/* harmony import */ var _js_texteditor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/texteditor.js */ "./src/js/texteditor.js");
/* harmony import */ var _js_postRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/postRequest.js */ "./src/js/postRequest.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_container_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/container.css */ "./src/css/container.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/header.css */ "./src/css/header.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_pagination_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/pagination.css */ "./src/css/pagination.css");
/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/popup.css */ "./src/css/popup.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./css/skeleton.css */ "./src/css/skeleton.css");
/* harmony import */ var _css_spinner_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./css/spinner.css */ "./src/css/spinner.css");
/* harmony import */ var _css_carousel_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./css/carousel.css */ "./src/css/carousel.css");
/* harmony import */ var _css_texteditor_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./css/texteditor.css */ "./src/css/texteditor.css");
















 // import './assets/dog_1.jpg'
// Needed for Hot Module Replacement

(0,_js_texteditor_js__WEBPACK_IMPORTED_MODULE_5__.editor)();

if (typeof module.hot !== 'undefined') {
  module.hot.accept(); // eslint-disable-line no-undef  
}

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/*! namespace exports */
/*! export carouselButtonClick [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carouselButtonClick": () => /* binding */ carouselButtonClick
/* harmony export */ });
/**
 * hanldes Carousel previous or next button clicks on the post
 * @param {event} e Target event upon clicking next/previous button in the carousel
 */
function carouselButtonClick(e) {
  var OPPOSITEMATCHING = {
    next: 'prev',
    prev: 'next'
  };
  var carouselButton = document.getElementById(e.target.id);
  var tracking_id = e.target.id.split('_');
  var carousel_id = "carousel_".concat(tracking_id[1]);
  var carouselImages = document.getElementById(carousel_id);
  var carouselImagesList = carouselImages.getElementsByClassName('image-sliderfade');
  var dots = carouselImages.getElementsByClassName('dot');
  carouselImagesList[tracking_id[2] - 1].className = 'image-sliderfade fade';
  dots[tracking_id[2] - 1].className = 'dot'; // Handles Carousel Previous click

  if (tracking_id[0] === 'prev') {
    var nextCarouselbutton = document.getElementById("".concat(OPPOSITEMATCHING[tracking_id[0]], "_").concat(tracking_id[1], "_").concat(tracking_id[2]));

    if (tracking_id[2] == 1) {
      carouselImages.getElementsByClassName('image-sliderfade')[carouselImagesList.length - 1].className = 'image-sliderfade fade active';
      dots[carouselImagesList.length - 1].className = 'dot active';
      tracking_id[2] = carouselImagesList.length;
      nextCarouselbutton.id = "next_".concat(tracking_id[1], "_").concat(tracking_id[2]);
      carouselButton.id = "prev_".concat(tracking_id[1], "_").concat(tracking_id[2]);
    } else {
      carouselImages.getElementsByClassName('image-sliderfade')[tracking_id[2] - 2].className = 'image-sliderfade fade active';
      dots[tracking_id[2] - 2].className = 'dot active';
      tracking_id[2] = tracking_id[2] - 1;
      nextCarouselbutton.id = "next_".concat(tracking_id[1], "_").concat(tracking_id[2]);
      carouselButton.id = "prev_".concat(tracking_id[1], "_").concat(tracking_id[2]);
    }
  } // Handles Carousel Next button click


  if (tracking_id[0] === 'next') {
    var prevCarouselbutton = document.getElementById("prev_".concat(tracking_id[1], "_").concat(tracking_id[2]));

    if (carouselImagesList.length == tracking_id[2]) {
      carouselImages.getElementsByClassName('image-sliderfade')[0].className = 'image-sliderfade fade active';
      dots[0].className = 'dot active';
      tracking_id[2] = 1;
      prevCarouselbutton.id = "prev_".concat(tracking_id[1], "_1");
      carouselButton.id = "next_".concat(tracking_id[1], "_1");
    } else {
      carouselImages.getElementsByClassName('image-sliderfade')[tracking_id[2]].className = 'image-sliderfade fade active';
      dots[tracking_id[2]].className = 'dot active';
      tracking_id[2] = Number(tracking_id[2]) + 1;
      prevCarouselbutton.id = "prev_".concat(tracking_id[1], "_").concat(tracking_id[2]);
      carouselButton.id = "next_".concat(tracking_id[1], "_").concat(tracking_id[2]);
    }
  }
}

/***/ }),

/***/ "./src/js/handlePost.js":
/*!******************************!*\
  !*** ./src/js/handlePost.js ***!
  \******************************/
/*! namespace exports */
/*! export handleDeletePost [provided] [no usage info] [missing usage info prevents renaming] */
/*! export handleEditPost [provided] [no usage info] [missing usage info prevents renaming] */
/*! export handleSubmitPost [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleDeletePost": () => /* binding */ handleDeletePost,
/* harmony export */   "handleSubmitPost": () => /* binding */ handleSubmitPost,
/* harmony export */   "handleEditPost": () => /* binding */ handleEditPost
/* harmony export */ });
/* harmony import */ var _texteditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./texteditor */ "./src/js/texteditor.js");

/**
 *  handles Delete post functionality
 * @param {event} e - target event of delete button of the post
 */

function handleDeletePost(e) {
  // Asks user to confirm the delete post choice, if no -- does nothing
  if (e.target.id && confirm('Do you really want to delete the post..?')) {
    fetch("http://localhost:3000/data/".concat(e.target.id), {
      method: 'DELETE'
    }).then(function (response) {
      window.open('/', '_self');
      return response.json();
    });
  }
}
/**
 * Handles submit button in the popup
 * @param {event} e - target event of submit button
 */

function handleSubmitPost(e) {
  e.preventDefault();

  if (e.target.id && confirm('Do you really want to update the post..?')) {
    var postTitle = document.getElementById('post_title'); // let postDescription = document.getElementById('post_description')

    alert();
    _texteditor__WEBPACK_IMPORTED_MODULE_0__.editor.save().then(function (output) {
      console.log('inside ourput', output);
      alert('hello'); // fetch(`http://localhost:3000/data/${e.target.id}`, {
      //     method: "PATCH",
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //         title: postTitle.value,
      //         message: JSON.stringify(output)
      //     })
      // }).then( () => {
      //     console.log('common you are there')
      //     window.open('/', '_self');   
      // })

      console.log('hey output', output, e);
    })["catch"](function (error) {
      console.log('Saving failed: ', error);
    });
    console.log('body', body);
  } else {
    return;
  }
}
/**
 *  handles Edit post functionality
 * @param {event} e - target event of edit button of the post
 */

function handleEditPost(e) {
  var form_model = document.getElementById('my_modal');
  form_model.style.display = 'unset';
  var inputTitle = document.getElementById("post_title_".concat(e.target.id));
  var inputMessage = document.getElementById("post_message_".concat(e.target.id));
  var postTitle = document.getElementById('post_title'); // var postDescription = document.getElementById('post_description')

  var formPopup = document.getElementById('form_popup');
  fetch("http://localhost:3000/data/".concat(e.target.id), {
    mode: 'cors'
  }).then(function (response) {
    return response.json();
  }).then(function (res) {
    postTitle.value = inputTitle.innerText; // postDescription.value = inputMessage.innerText

    console.log('comeon', formPopup);
    console.log('josn', res);
    var cleanEditor = document.getElementById('editor');
    cleanEditor.innerHTML = '';
    (0,_texteditor__WEBPACK_IMPORTED_MODULE_0__.editor)(JSON.parse(res && res.message));

    formPopup.onsubmit = function () {
      handleSubmitPost(e);
    };
  })["catch"](function (error) {
    console.log('hey you ended up with error:  ', error);
  }); // formPopup.onsubmit = null
  // formPopup.addEventListener("submit", handleSubmitPost)
  // formPopup.setAttribute('onsubmit', () => {
  //     handleSubmitPost(e)
  // })

  console.log('comeon', formPopup);
}

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var _handlePost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlePost */ "./src/js/handlePost.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination */ "./src/js/pagination.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel */ "./src/js/carousel.js");
/* harmony import */ var _postRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postRequest */ "./src/js/postRequest.js");
/* harmony import */ var editorjs_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! editorjs-html */ "./node_modules/editorjs-html/build/edjsHTML.node.js");
/* harmony import */ var editorjs_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(editorjs_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");






/**
 * it is used for initialsing/ updating content in complete application
 * @param {Page Information} page
 */

function render(page) {
  document.getElementById('spinner').style = 'display: unset';
  fetch('http://localhost:3000/data', {
    mode: 'cors'
  }).then(function (response) {
    return response.json();
  }).then(function (res) {
    window.posts_list = res;
    console.log('hey posts here ', res);
    prepareHTML(res, page);
  })["catch"](function (error) {
    console.log('hey you ended up with error:  ', error);
  });
} // Initialising functionality when application starts

setTimeout(render, 1000);
/**
 * assists preparing HTML on initilisation, updation
 * @param {Data response from data source} res 
 * @param {Page Inforamtion} page 
 */

function prepareHTML(res, page) {
  // let submitPostButton = document.getElementById('form_popup')
  // submitPostButton.addEventListener('submit', (event) => {
  //     handlePostSubmit(event)
  //   })
  var container = document.getElementById('post_container');
  console.log('container ', container); // container.remove('ul')
  // container.removeChild()

  var posts_list = document.createElement('ul');
  posts_list.id = 'posts_list';
  posts_list.className = 'posts_list';
  document.getElementById('spinner').style = 'display: none';
  var PAGENUMBER = page ? Number(page && page[2]) ? page[2] : 4 : 1;
  var dataLength = res.length;
  var recentPosts = res.reverse();
  window.dataLength = Number(res[0].id);
  var prev_button = document.getElementsByClassName('pagination_prev_button')[0];
  var next_button = document.getElementsByClassName('pagination_next_button')[0];
  prev_button.addEventListener('click', _pagination__WEBPACK_IMPORTED_MODULE_1__.handlePagination);
  next_button.addEventListener('click', _pagination__WEBPACK_IMPORTED_MODULE_1__.handlePagination);

  if (PAGENUMBER * 2 <= dataLength && PAGENUMBER * 2 > dataLength - 1 && PAGENUMBER == 1) {
    var _prev_button = document.getElementById('page_prev');

    _prev_button.style = 'background-color: #bbbbbb;';

    var _next_button = document.getElementById('page_next_2');

    _next_button.style = 'background-color: #bbbbbb;';
  } else if (PAGENUMBER == 1) {
    if (page && page[2]) {
      var _prev_button2 = document.getElementById("page_prev_1");

      _prev_button2.id = 'page_prev';

      var _next_button2 = dataLength == 4 || dataLength == 3 ? document.getElementById('page_next') : document.getElementById('page_next_3');

      _next_button2.id = "page_next_2";
      _next_button2.style = 'background-color: #8bc34a;';
      _prev_button2.style = 'background-color: #bbbbbb;';
    } else {
      var button = document.getElementById('page_prev');
      button.style = 'background-color: #bbbbbb;';

      var _next_button3 = document.getElementById('page_next_2');

      _next_button3.style = 'background-color: #8bc34a;';
    }
  } else if (PAGENUMBER * 2 == dataLength || PAGENUMBER * 2 == dataLength + 1) {
    var _next_button4 = document.getElementById("page_next_".concat(page[2]));

    var _prev_button3 = page[2] == 2 ? document.getElementById("page_prev") : document.getElementById("page_prev_".concat(Number(page[2]) - 2));

    _prev_button3.id = "page_prev_".concat(Number(page[2]) - 1);
    _next_button4.id = 'page_next';
    _next_button4.style = 'background-color: #bbbbbb;';
    _prev_button3.style = 'background-color: #8bc34a;';
  } else if (page[1] == 'next') {
    var _prev_button4 = page[2] == 2 ? document.getElementById("page_prev") : document.getElementById("page_prev_".concat(Number(page[2]) - 2));

    if (PAGENUMBER * 2 == dataLength) {
      var _next_button5 = document.getElementById("page_next_".concat(page[2]));

      _next_button5.id = 'page_next';
      _next_button5.style = 'background-color: brown';
    } else {
      var _next_button6 = document.getElementById("page_next_".concat(page[2]));

      _next_button6.id = "page_next_".concat(Number(page[2]) + 1);
      _next_button6.style = 'background-color: #8bc34a;';
    }

    _prev_button4.id = "page_prev_".concat(Number(page[2]) - 1);
    _prev_button4.style = 'background-color: #8bc34a;';
  } else if (page[1] == 'prev') {
    var _prev_button5 = document.getElementById("page_prev_".concat(page[2]));

    var _next_button7 = PAGENUMBER * 2 < dataLength && PAGENUMBER * 2 >= dataLength - 2 ? document.getElementById("page_next") : document.getElementById("page_next_".concat(Number(page[2]) + 2));

    _prev_button5.id = "page_prev_".concat(Number(page[2]) - 1);
    _next_button7.id = "page_next_".concat(Number(page[2]) + 1);
    _prev_button5.style = 'background-color: #8bc34a;';
    _next_button7.style = 'background-color: #8bc34a;';
  } // Rendeting posts based on the page upon page initialisation or using pagination


  for (var index = (PAGENUMBER - 1) * 2; index <= PAGENUMBER * 2 - 1 && index < res.length; index++) {
    var _element$media_conten;

    var element = recentPosts[index];
    var listElem = document.createElement('li');
    listElem.className = 'post_card';
    listElem.id = "post_".concat(index + 1);
    var divElem = document.createElement('div');

    if ((element === null || element === void 0 ? void 0 : (_element$media_conten = element.media_content) === null || _element$media_conten === void 0 ? void 0 : _element$media_conten.length) > 0) {
      (function () {
        var carouselUnorderedList = document.createElement('ul');
        carouselUnorderedList.id = "carousel_".concat(index + 1);
        carouselUnorderedList.className = 'carousel';
        element.media_content.forEach(function (media_element, media_index) {
          var imageListElem = document.createElement('li');
          imageListElem.className = media_index == 0 ? 'image-sliderfade fade active' : 'image-sliderfade fade';
          var imgTag = document.createElement('img');
          imgTag.src = media_element;
          imageListElem.appendChild(imgTag);
          carouselUnorderedList.appendChild(imageListElem);
        });
        var dots = document.createElement('ul');
        dots.className = 'active_dots';

        for (var i = 0; i < element.media_content.length; i++) {
          var dotElem = document.createElement('li');
          dotElem.className = i == 0 ? 'dot active' : 'dot';
          dots.appendChild(dotElem);
        }

        carouselUnorderedList.appendChild(dots);
        var prevImg = document.createElement('a');
        prevImg.className = 'carousel_slide prev';
        prevImg.id = "prev_".concat(index + 1, "_1");
        prevImg.title = 'Previous Image';
        prevImg.text = '«';
        prevImg.addEventListener('click', _carousel__WEBPACK_IMPORTED_MODULE_2__.carouselButtonClick);
        var nextImg = document.createElement('a');
        nextImg.className = 'carousel_slide next';
        nextImg.id = "next_".concat(index + 1, "_1");
        nextImg.title = 'Next Image';
        nextImg.text = '»';
        nextImg.addEventListener('click', _carousel__WEBPACK_IMPORTED_MODULE_2__.carouselButtonClick);
        carouselUnorderedList.appendChild(prevImg);
        carouselUnorderedList.appendChild(nextImg);
        divElem.appendChild(carouselUnorderedList);
      })();
    }

    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete_button';
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash';
    deleteIcon.id = element.id;
    deleteButton.appendChild(deleteIcon);
    deleteButton.id = element.id;
    deleteButton.addEventListener('click', _handlePost__WEBPACK_IMPORTED_MODULE_0__.handleDeletePost);
    var editButton = document.createElement('button');
    editButton.className = 'edit_button';
    var editIcon = document.createElement('i');
    editIcon.className = 'fa fa-edit';
    editIcon.id = element.id;
    editButton.appendChild(editIcon);
    editButton.id = element.id;
    editButton.addEventListener('click', _handlePost__WEBPACK_IMPORTED_MODULE_0__.handleEditPost);
    divElem.appendChild(deleteButton);
    divElem.appendChild(editButton);
    var postHead = document.createElement('h2');
    postHead.className = 'post_title';
    postHead.id = "post_title_".concat(element.id);
    postHead.textContent = (element === null || element === void 0 ? void 0 : element.title) || 'Click edit to add Title';
    var postMessage = document.createElement('p');
    postMessage.className = 'post_message';
    postMessage.id = "post_message_".concat(element.id);
    var edjsParser = editorjs_html__WEBPACK_IMPORTED_MODULE_4___default()();
    console.log('element', element);
    var message_html = element && edjsParser.parse(JSON.parse(element.message));
    postMessage.innerHTML = message_html || 'Something was wrong, your message is missing... ';
    divElem.appendChild(postHead);
    divElem.appendChild(postMessage);
    listElem.appendChild(divElem);
    posts_list.appendChild(listElem); // posts_list?.parentNode?.removeChild(posts_list)

    if (document.getElementById('post_container').getElementsByClassName('posts_list').length == 0) {
      container.appendChild(posts_list);
    }
  }
}

/***/ }),

/***/ "./src/js/pagination.js":
/*!******************************!*\
  !*** ./src/js/pagination.js ***!
  \******************************/
/*! namespace exports */
/*! export handlePagination [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handlePagination": () => /* binding */ handlePagination
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/js/init.js");

/**
 * Handles pagination Next and previous buttons, for getting data based on the page
 * @param {Target Event} e 
 */

function handlePagination(e) {
  if (e.target.id == 'page_prev' || e.target.id == 'page_next') {
    return;
  }

  var TRACKING_ID = e.target.id.split('_');
  var list = document.getElementById("posts_list");
  list.remove();
  var spinner = document.getElementById('spinner');

  if (TRACKING_ID[1] == 'prev') {
    spinner.style = 'op-spin 1.5s linear infinite';
  } else {
    spinner.style = 'spin 1.5s linear infinite';
  }

  spinner.style = 'display: inline-flex';
  setTimeout(function () {
    (0,_init__WEBPACK_IMPORTED_MODULE_0__.render)(TRACKING_ID);
  }, 1000);
}

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postRequest */ "./src/js/postRequest.js");
/* harmony import */ var _texteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texteditor */ "./src/js/texteditor.js");


var modal = document.getElementById("my_modal");
var btn = document.getElementById("add_new_post");
var span = document.getElementsByClassName("close")[0];
var post_submit = document.getElementById("post_submit");
var formPopup = document.getElementById('form_popup');
var postTitle = document.getElementById('post_title');
var postDescription = document.getElementById('post_description');

btn.onclick = function () {
  modal.style.display = "block";
  formPopup.addEventListener('submit', function (event) {
    (0,_postRequest__WEBPACK_IMPORTED_MODULE_0__.handlePostSubmit)(event);
  });
  var editorClean = document.getElementById('editor');
  postTitle.value = "What's Up";
  editorClean.innerHTML = '';
  (0,_texteditor__WEBPACK_IMPORTED_MODULE_1__.editor)({});
  console.log('my_modal come on ', modal);
};

span.onclick = function () {
  modal.style.display = "none"; // postTitle.value = `What's Up`
  // editor();
  // formPopup.addEventListener('submit', (event) => {
  //   handlePostSubmit(event)
  // })
};

post_submit.onclick = function () {
  modal.style.display = "none"; // formPopup.addEventListener('submit', (event) => {
  //   handlePostSubmit(event)
  // })
}; // Hide Popup upon hitting ESC button in the keyboard


window.onkeydown = function (event) {
  if (event.keyCode == 27) {
    modal.style.display = "none"; // postTitle.value = `What's Up`
    // console.log('log')
    // editor({});
    // formPopup.addEventListener('submit', (event) => {
    //   handlePostSubmit(event)
    // })
  }
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // postTitle.value = `What's Up`
    // editor();
    // formPopup.addEventListener('submit', (event) => {
    //   handlePostSubmit(event)
    // })
  }
};

/***/ }),

/***/ "./src/js/postRequest.js":
/*!*******************************!*\
  !*** ./src/js/postRequest.js ***!
  \*******************************/
/*! namespace exports */
/*! export handlePostSubmit [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handlePostSubmit": () => /* binding */ handlePostSubmit
/* harmony export */ });
/* harmony import */ var editorjs_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! editorjs-html */ "./node_modules/editorjs-html/build/edjsHTML.node.js");
/* harmony import */ var editorjs_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(editorjs_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _texteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texteditor */ "./src/js/texteditor.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * Helps in posting data to the data source with specific format
 * @param {Target Event} e 
 */

function wrapPostData(e, editorjsdata) {
  return {
    "id": "".concat(window.dataLength + 1),
    "title": "".concat(e.target[0].value),
    // "message": `${e.target[1].value}`,
    "message": "".concat(JSON.stringify(editorjsdata)),
    "type": "post",
    "created_time": "2010-08-02T21:27:44+0000",
    "updated_time": "2010-08-02T21:27:44+0000"
  };
}
/**
 * helps in mamking in post request to the data source
 * @param {Body} body -- Body for posting data to data source
 */


var postForm = function postForm(body) {
  console.log('body', body);
  return fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  }).then(function (e) {
    console.log('you are there', e);
    window.open('/', '_self');
  });
};
/**
 * Invoked upon clicking submit button in the popup and handles post submition
 * @param {Target Event} e 
 */


function handlePostSubmit(_x) {
  return _handlePostSubmit.apply(this, arguments);
}

function _handlePostSubmit() {
  _handlePostSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
    var body;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            (0,_texteditor__WEBPACK_IMPORTED_MODULE_1__.editor)().save().then(function (output) {
              function IIFE() {
                return _IIFE.apply(this, arguments);
              }

              function _IIFE() {
                _IIFE = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var res;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          console.log('output', output);
                          body = JSON.stringify(wrapPostData(e, output));
                          console.log('body', body);
                          _context.next = 5;
                          return postForm(body);

                        case 5:
                          res = _context.sent;

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
                return _IIFE.apply(this, arguments);
              }

              console.log('data', output);
              IIFE(); // const edjsParser = edjsHTML();
              // const html = edjsParser.parse(output);
              // var cont = document.getElementById('post_container')
              // console.log('html', html)
              // cont.innerHTML = html
              // alert('Data: ', output);
            })["catch"](function (error) {
              console.log('Saving failed: ', error);
            });
            console.log('body', body); // const data = await res.json();

            window.dataLength = window.dataLength + 1;

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _handlePostSubmit.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/texteditor.js":
/*!******************************!*\
  !*** ./src/js/texteditor.js ***!
  \******************************/
/*! namespace exports */
/*! export editor [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editor": () => /* binding */ editor
/* harmony export */ });
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js");
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editorjs_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @editorjs/list */ "./node_modules/@editorjs/list/dist/bundle.js");
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editorjs_list__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @editorjs/image */ "./node_modules/@editorjs/image/dist/bundle.js");
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editorjs_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editorjs_marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @editorjs/marker */ "./node_modules/@editorjs/marker/dist/bundle.js");
/* harmony import */ var _editorjs_marker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editorjs_marker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editorjs_embed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @editorjs/embed */ "./node_modules/@editorjs/embed/dist/bundle.js");
/* harmony import */ var _editorjs_embed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorjs_embed__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editorjs_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @editorjs/warning */ "./node_modules/@editorjs/warning/dist/bundle.js");
/* harmony import */ var _editorjs_warning__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editorjs_warning__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editorjs_code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @editorjs/code */ "./node_modules/@editorjs/code/dist/bundle.js");
/* harmony import */ var _editorjs_code__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editorjs_code__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @editorjs/quote */ "./node_modules/@editorjs/quote/dist/bundle.js");
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editorjs_quote__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _editorjs_checklist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @editorjs/checklist */ "./node_modules/@editorjs/checklist/dist/bundle.js");
/* harmony import */ var _editorjs_checklist__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_editorjs_checklist__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @editorjs/delimiter */ "./node_modules/@editorjs/delimiter/dist/bundle.js");
/* harmony import */ var _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_editorjs_delimiter__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _editorjs_simple_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @editorjs/simple-image */ "./node_modules/@editorjs/simple-image/dist/bundle.js");
/* harmony import */ var _editorjs_simple_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_editorjs_simple_image__WEBPACK_IMPORTED_MODULE_11__);





 // import Table from "@editorjs/table";


 // import LinkTool from "@editorjs/link";
// import Raw from "@editorjs/raw";



 // import InlineCode from "@editorjs/inline-code";

 // import edjsHTML from "editorjs-html";
// const edjsParser = edjsHTML();
// const html = edjsParser.parse(editorjs_clean_data);
// console.log(html);

function editor(data) {
  return new (_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default())({
    holder: 'editor',
    autofocus: true,
    placeholder: "Let`s write an awesome prompt here!",
    header: {
      "class": (_editorjs_header__WEBPACK_IMPORTED_MODULE_1___default()),
      inlineToolbar: ['link']
    },
    list: {
      "class": (_editorjs_list__WEBPACK_IMPORTED_MODULE_2___default()),
      inlineToolbar: true
    },
    tools: {
      image: {
        "class": (_editorjs_image__WEBPACK_IMPORTED_MODULE_3___default()),
        config: {
          endpoints: {
            // byFile: 'http://localhost:3000',
            byUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIWFhUVGBIVFxUVFRcVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyItLS0tLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tNv/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EADkQAAEDAwMCBAQEAwgDAAAAAAEAAhEDBCEFEjFBURMiYXEGMoGRFKGx8EJS4QcVI2JywdHxM4KS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQMAAgQFBv/EAC8RAAICAgEEAQMCBAcAAAAAAAABAhEDIRIEEzFBUQVh8CKBFKGx4RUyQnGRwfH/2gAMAwEAAhEDEQA/ANlpWocSVdC9wvn1jWIPKtjqGOV5jLaVm9FxqGoQOVmbq9mSi1iaiSurdzRxhcuUHJ2yzWha5qyEpotr4taDw3KDeVyMQrP4PEP395H0WzBFR2/Bnu5Gz062DeBCPc1XDE4TFBwhVd5ceYroznFR0R7ZzaknJT9GphU1J8lWVM4WKMb2QaL0VrZSLFY2ivieyArijhZjWaPdbOs3Cy+tNwV0FKK8gWzDXdHMqFm7K7VKwaY6pezcS7CN2jk9RUcn6S0D4QW3sEhSr08YVMSd8KsHJFXNpl/Rq7kzvxhVNuSAmhXAHKvybGqYZ9ZO2L1R1aydtqyrKbRbHk/UaJtRLVa6TNfHKA6qZRXUOjWpobNVRdUSu9BfUhZ8meTA5ntaO6qq4iU5Vela5SKbdmvH4sr3TOUN7AUasxeOaFfdFcvJ+ATKaZptSznRhHY9UlZzpuSZa2ldWdMqiodCrajwkxhbGKbaH6daE028VQaoC6nXW2GONA5UWVxWlIPC4VF6SFd4y3k8qDghd4ysKekmPokXUHB0QSR6JOeLSOzFKTL7R6fl3Hqm72iC0pCwudoggheajqm0EAZKxTwuhc4NMzWp08mPVWfwqQ3CpLyruT+i1iHDoFTcYbEVUjfCoIVJqJEozbwR1KVunSVFLkGhe3qkO55WgtCs3tzIV1p1dMwyp8SrRbtphWFqyFXMqdU9b1gt2NJMow9VuFmNZt5lap1QQqTUxgo5IFbPnlzaNJMjlI2VLa8grQXbASYVXWtTJdCZB0jHnjF015I3JhVrCC6Qmbqk4hI0qb2mRkdVHkRkk3ZcMYIykRS8yabWwoseJypGY2SUqPRa7kVlGMKzpUxEoV4BEqvPexvaS2CY1Sa1DolHbCXn14LRQPw0pck9lZkhJXSihq2FlZVbKWqPhNlhS9amDygnrRqxZNUJuqzhGgJSo2DheNqpt0jbX6QlUZRGhJVKxnhNUHYSJJ0cbNqZYUHQnqdTCq6Q6plr5S45OOiqY4FLw+yFScI5RHVQAnxmNSVEd5TDRhKB6YbwtkNokTcimEanRbIMdEkbja3uvbbVAPmCTDNF6kbnMduLRpBwsveUMkLQVdTaRjqlahBBgKScZeAxzUYS6oODojCfs2ZCtLi05SLKZHCy5sScSiyJuy/teOVOs1pVVbXkHKaq3IKVHjVEU0K1XQ6ArWwcAqSvUzKIy8hKenaB3EagVFJl6GlZerrPRet1AHgrTHJoXKa+TYDUR3Sd9ULxAVLb3EnlW9u6QrLI5PZW7RWixRW2MBXNC33GArilZsp5IBPqul0+NyX2F8DCVNBqPyxhPqpVfg+q1u6AesDnhfQWXYOE0E7+Bx+wPGvZ8odoR/lP2QXaWR0X1wsHYJO50mm/kZ7hVfQr/SyKCPmLaZbgoFyJC3938NNgmSTnaOyxF7blji1wIhY8vTSx7YJOiva2EReOQiYSJCnOhkOQq5QDWjKGbiU21RIO2Qr4SVR6NWqJOqFeMLOjhhRz2BAqURyi+IF4Xq0oWhruwYo44RKVBSa9M0gFiyRcTLnxps6nTMKbUZi51IngJcYRe2ZXrSArzcuc0jkQi06a2RjF+Cyie0wU3KC1sBRNRbMeJ0aoY1RoqeoCIchXF2Dwl3UUMsXGmmjB3ZBqdxCeo3gVSQpB0JcXKyd2RZ1K8pRwyhCsvHVVZ5H7D3WTIXgISrqhXrXrM5tMp3HZOs9KuaSmdqIAEyM7eyOTZWGkUW1YQU4WArxtNMcyo1bSra2uCFWUArKwob3Bvc8puN8tIbGTNHoLtxnqFY3byTARtNsG0mwJPWTypPbleiw43CCTNEROxsCwklxdPfoVaNKW3qTaiaqRaTb2xqV25A8ReOqKxUMaoHKQ1XTaddsO55BHMpbUw4iQYhB0y+JaJ7x2yqOnpluNqzAanbmnUdTPLTyqmvW6LZf2iWcAVmz9IA+sr5xdVSuP1OLhKjmdTk7Yy+rCg6olPHRmulKji0IwdRciRcvHlcApbJWnG0egxTVCkSUVjUUUURrFeS1o0KVi78Lm1FOuxL0+VhmrdMw55Ox+jX7rU6bTGwGOVkrYZV9p2qhg2u46FYOoi60LwNJ3Itrmza9vmHsqh1sAMYjonaurtIhpykX1xBymdK3BGmcosA5+EqXeibY2VF1vK7GPrIxWwRbrRblyiUJxUmZXH5uRzT3aouposKYRUWQT8BT8BNNhEBCkohSsQNsvW0FZABRICsooPbEvCQnsVi4KGyVHCJVxEGU0dtNMeEF4GocUgcTymyFsfhGwx4h68dllqVOSF9C0hgbTABnC6X0/DFy5fA3FHY3UKUquTNVKVGErrs0lPqev0KH/AJazGf6nBv6nKbtb1rwHMcHNIkEcEKj+Jf7PaN89r6r3tIwdhjc3+V33P3Wj03R6dCk2lTENaICqky2jjVXNqqh+N9Rq2lu6rRp73DnqWjuG43e0hIfAHxJ+Oo73U3MeDDpB2k92nqP04Utgo1F0JCQ0ug7dtPEkj0VxUpYUbSjlGrZL0Zj+0OiCxgcSf5WgDnuV89dZTyvp3xnauO07ZH1x7rIOsz2XC+ouXeMObFzltGadYBeNtSFoja+ig62WKOWaM/8ACpO0Z91IyptYrd1oEN1srRyT8jUpR9lftU2U0Z1uvGUzKdDqWvI6PUTiBqMSL6cFXXhqBtpQy5b2LyTnMrWyMgJgscf4SrW2tR2ViLYRwufPqK9DseGTW2ZN1F05CkCQtBcW/olTad0Y9Qn5A+naemAs6mITEoTqQCGUZZHIasjiqZavC6m5XdTSUKrpPZaeFOxfZkVTqi88VNnTj2QqukVDwFJSflFO3IFvXrXFessKgwWmVMW7/wCUqc/kHCRIPKi6oUKqCOQV40yi8kXpE2TNYqTKqEaZ9VwaeyOgbGfEXrXBB8M9l42k4dFHKvJLY81y3ujsIptmOOhlYvRNOFV3mkAfvlb6zoBjQBP1j/Zdb6fF05+mOxp+WSqJVz4TdRLVGLoseefiYaSei+QfEHxhqDL80KDfED808PAAPUuBIImRkCIz3X1irTBBBEgrPDQw2oXsqO/0uhwEdpEjnuhyoJfW5LqbfFALi0bh0kjPKjRpMZhjQPZKmo4ACeOUSm8lTkmQs98he27UCkU1SVkAS1wjZBVD+HELTapbF7MRKyVxWc0kHouN9TjLknWiRaXkXuqAVc+mnalYlKuXMUaKSaYA014KEpumwFWtnbt7JiKxx2Uf4OeiC7TXdAtoyi3sFzqbVVrY3sJmOpaU484VlbaC08q3ftRqNdvdKlbLRxRRVu0IDhAr2T2rQm4b3S1w8KiiM4r0ZapSKDUbhW9zSOYCq61N3EJnCL9CJWiurIPhp19E9Qhmn6K6jBGeVs2NvdApk129VRCiRCeoWBdyUynJUvJpjJljvZ6JhlzTjkKoZpT+hwpU9BfOSlXKK0XuXwWxdTPZcw0/RIP0CpGHJSpodVgnchU0+TQW38DN42nnhVTmsB6L2tp7z1KFV01wGVmuTdoq2/gea1scBMUqTPRVlC3gZJRTTAEz+aapFb+xZiiwdAgvDfRIsqTiUSmBKksiDZd6O5odiAtE12FndIoiZIlaBsAYC9F9OvtAZ44oTlJxUVuIDe1K1KabcUOFVoNlcbYyjU6EJmFwaooolnU2pqkgsRqZV0VGS2QqrUtLD4gQrVpUiEJRUlUiGKvbHZ7JNzVs720DhBCpq2k5XD63p3ifKK0FKzOVDBwvfxb2ZhXw0mDKXu9PELF3NW0HtyXsrP71f2Q36hUKsadmArC2tG9glLLydURQk/ZmfFqHoURtOp2K1zLVvYIgt2oKTuiyxfcxO+oDBBCco1HdVfX9u2FQXbgOCh3GpUwOHHdjzGyiMsgVSUryOqs6OpiOUxySDGSY07TGlef3S3sh/wB7t7rv71Cqm2/Ba4lR48yQeFO21qJCrqts8N/1/ko0rUsABGSo+adxVGbuNGgt9dj/AJR6nxMOnTlZkgBo9VXsa5xdtmAYJU7kvAHnaN5Q+J5yWqNx8RTjbyshTrhuCUWlXcRMDB46pvduNXsPekX41MFSqXwjKzr2kw5vHVM0Ku4GVWEVtfJFmbLI1RCiGBzVU0wS6C7jonKcyeyEcdhWSxj8O1omV6wtiZQW1QcFEbbgmEVhr/Kicr8F7o1+B5YHur5z8LJ2NANdl3/K1NL5e69F0cm8dP0FEQ7K8e+FxKXrVFoZYk58r0hKOcfQfqj03kchCwhhPVRlc6oohyIArSiscgqYVgDbHIoKVYUZpRIEISl2IBKalLXQwhKKkqZCkfqfQhI3V/PCR1msQ8wkGOe7K8xnw1NxRO6yxfdlCGovHEpAucCmGvIHCosCsilJj1LWSOZXtXXuyr3M3CYSrB0Qn06T0HlkHbjWnOwq2rWJTZs1A0En+HmmVkpvyItKkHJp1uo/hU1YWhThJA6b0Q1FwphDLPRNviVqQe7eZLQXZiSRgZ/hQqhPLidrIz3J4lGrPxk9YJ6MHWY5b/VTH8ADeC4EEeWAcE9PlPKXKKk27dP/AM/uWpsXFPGZLRyYjOV5RpANcGyOHGevf8kxcVDtMZ3OaAOYkeYuj6/YI1VjejCAAJOc5GJnI5J9igsb218Eoqq1oA/BiAT34BMD3TTrA8zHOBM8IFS3cX7S10CTM+UNIgEO644ChUqvaQ0OMv4IPlON23MwZH2BKEIVuS+5TklY7RpFp2gGIAz39VzaxHEQZwOVXNu3OOWPEciRgg4A5BJ+xXUWPNZoIBaA4kkkA5EADq7pCKU3XF7IposwWkyWjI59U1t2jPbEcKr3BrZOIIbG/Ak8xEzx911W/DG7XRulxA3+Uhp8x3QY2n7yFdJ+/JblFeSw2DbiNx6f7IkuEHrjAVPLgd4qAHBAydsgfNjPB4VpQuYed3BBcCDOMCPQyT9kIfq09F07GqVQl/YE8lbGlhgz06L51ca1DgNkN3ANkGSesdyvocjaOuAuv9NkmpUWi02BqPyhPM5QLqsAUO7uw1uV0WMJtkux/VOgdyldPMtnujvcgkRs8cUIVu69efVVWo1S3I+oUegF5TqyFPxlTafcnbJRXXwJgdEeWgMuKdRMscqajcjum2XSuiFmHIdwJBS9O4B6opcCEQGC1HcKjgY56IdGpGFYazRmrA4PMJM6YZdDgOMdRK81nyccrS9MooyXg4UiXImOCvbSzcATvkifyU6NtMkGcT7KY88Hr2OXJI8bVHCC9onCg1h27wecwkGVnEkno5326K0uqh8A7jXkeL3KJpu5KhcVjiOwP3PCHUqVB8wgjkfmD7eqPOLdMjyIYpEHCaNMKmNRzgSDGOqHXfVa4TlvccQrQyJerKPMixda+bGZ6ILyASJXlC6dkwZdiewI6dkzTsGuaC4Zj1PBgHBwkdxTl+laDafgBRcGvJLZGA6fMCZjj7qVzeEP202eQyTIzAER++yIGRn1nup7S4AznKRjUuFWDfoTbTDm7d23OJmBmYMLy9a8u8mQW/MGmBPzOn1Hp1KZfYYmcngdvVSomo0F0eWIz09kIwdU/wDklfIndUiW+VzsDjucGcZ5ACAGODQHDMNzzzAz6ySrOm/yedvE7fWUtYXRJPl8o8ufzPvKbPGnqToU47sXq28tcZI2nO3kZwGzz/2g1qrmgeFM7mt/mhoJMQOuYn1RZIc4tPlPI/ovWVIBEQDM+s8kLLLK4tNLx/MrxsDXpjxWl2SBOJ2gkbRIPPzO+yhXt8QI5y6c7XQXSOsgRHZNU6YkuPBEDKBqVM0w14xxA9uyspzceTX+37gcKtnWdyabW7oyTDHTHBAL59RP2ygC8LQHQD5TAH8wcZJEyAZGJ/VeeFvBO7a5wPmOcAdD3StTTiGhxgBwM7XcmQZMZERwmRyXH7IVKUl4LNpc9xaQJEiTy2DIH2E/RWFlrVWhtouazaHOmoHOLiHZc5wPX9wqqyuaZa8GqW7og7Z3bQOvThD3DLd0guBAPJEEk+nunQy9lc4+/wA8F1P4L2810g7hkQSBgkectk/RpHeUGle1a7q1PY4ltJz2OkBhcHN2ta6DGJBOeDhJVWt8Lc0DfJBAAAIkRuPHfP8AmRfh1rmuc6Rvh46AFrhjA4MrZDqpPKren+fyLLJK6s0+n6n5aTWiQRl/sDHtmB7z2yZ2pN88n5YyOsj7c9FlfHe1kh8lu3yiAJOSI6wusnB7/DJIDmv3M4y4GXD149ldddLlVfngd3ElvyaF+qMAJc8DbtBz/EQDA9VTv1UVXuI+Rg7cmdpH/wBSEhXpBz9pOGxBPXj/AIHKIxxG5gaIdBdxGJyPeSl/4jKUqXjYFk3sHQ1p5ZMHAEgDhxBJ9ohOWuoNa1pcYLiOhPIkfqEmLdjy5hdta6Yd/Fu7/n9kZrAWwAC07cDPy+nQYlUj1s4u3sMG/LLKnq7QTnGI7mRPCnZanVqhz2Nhkw3cIMcl3qILfzVXbWstc1hhwHDgZO4AFpd6c+8K4NoadIU6IO4wBJw3a0mRM4x68pWX6pla4w07HQje2U9jr16XbPAaP80wJDiI9JAB/wDb3VodQuqhDGQ07SYPQ+YbT2MwPdEsaMhniMcHNeGmJaC6driZGWwZB6iFd29BpPWRlx6EN+XGPXPcH0S39TzN8X+fn/RFhtXZl2fiHhxDDvH8JwcQG85yfTCJq1vWpOMuwW75Akgbj14kAGfcLYWrMHe0HBJcMtO50iD2yCFJ9g14cD5i5sbXEFoxtHSRMO+pPZLyY+UlrbD2teTLW9CvDpDfKOhwYIDp64zOOildNrBzGNlgcGy7bIEiSSRyRkx2BWwoNEbcT8rgMehM/vldRt4d8wLW+WIGJHJ9ckex9VMeFa+PF/f88/BZx15MHaW1SoKlN2CWOMj+FweWkdiJn7oGk6Q/xWsqnaHHcBydoDQT9M/kt8+wbvLwMbS3mM7i7jvJkH19k2ygG46jg95EfoAn4sVvda/EKeFas+eXWl1fOGDxDhrYw6ZMekCJlFuNOqeFTBDtzGO3Ej5t+8tBnjaQPo4Ld1bVjjMQ4dc9oPHWJStdoePlMOJDgT0yMjsc8ZQzVGd+vz+wVhRgLjSqjzR2Hylw8QtEY3BoIB6z+TSnbUNFXYQapJDWtj5mkTmMA4d7LYVKDR0iAQNvbBJ57j81SUaPh1gCNoLg4ADruqBzjAnofQeXuUrH1MVJr8oH8PW0ZbU97d9Gk0gj5hMPj+UTyBIk+oVhaGnt/wARzw7qA049/VXNawbVqeIQXvZtDnDDdpY4ggnnls56T1KQudNc4h5Bl4DuXHn2x0T5umuPpf1/NlViabZRG8MQi297GCuXLlKcl7ApMZ/EAkZTdOsNuTjoF4uW3Bmfn5DybIEb+uEMNDT5YGOF4uT71ZeS0LW1u7a4YyV1SlIAHI6LlyVGCcP5C6Vi1e2LcO7qd42GgHzdl4uQ4KDcUVn4oUZbyzzd/LCOdJhn+I8mePr0XLkvFBNSb9AeKNCNWnDSGgA9MItlZgkOfAA7/NHuuXIJ+W/QnirQ5eUmwW05a04PQFdasLJBOQMEd16uTIfryO/gbKK8hqFtTe5m75t26IEFxEAu9YT2qWTaLN7W+aYmc5XLk2E3K79aLxhFxZn3sM5dBdMJ61O5hLRPf3Xi5ZMemmhcYpyaHrK2pvpFpPmBOeuUuwuZVbA8rQWO7EERx9Fy5TNkapr0aUv0pl5olNoa73mYz+4TLqm0YHmyJ5lpJn25XLlzcUnOU2/g0LSVHrajtzOds5B+kfomLS5Ac4uOSTg+vX3kD6QuXLX0bU4XJfYjdDdHUABsDi7qBAho7D0Uq140gtHBAz2PJn99Vy5OzZpvV/b9go9trpoJwAeHZ4I4HbKcbWGSY6TxherlXpsrcqfjz++9kaJiqNwyDOY9+P0QzeDgA+vpz+/quXLdCTbf3ZVrR1OqdsOcAZJnpH/SnzmTIBHoZjP5fmvFyz4Mjb4PwkgtA2AEhu7zY54I4I9/6LqtEOME5bBzwR0P0K5ctaxwtwr3X7Nf1AeUoHywP0IgDoktSdTLgfHfTwMA4OTn99ly5Z4NOLjWizP/2Q=='
          }
        }
      },
      embed: (_editorjs_embed__WEBPACK_IMPORTED_MODULE_5___default()),
      // table: Table,
      marker: (_editorjs_marker__WEBPACK_IMPORTED_MODULE_4___default()),
      list: (_editorjs_list__WEBPACK_IMPORTED_MODULE_2___default()),
      warning: (_editorjs_warning__WEBPACK_IMPORTED_MODULE_6___default()),
      code: (_editorjs_code__WEBPACK_IMPORTED_MODULE_7___default()),
      // linkTool: LinkTool,
      // raw: Raw,   
      header: (_editorjs_header__WEBPACK_IMPORTED_MODULE_1___default()),
      quote: (_editorjs_quote__WEBPACK_IMPORTED_MODULE_8___default()),
      checklist: (_editorjs_checklist__WEBPACK_IMPORTED_MODULE_9___default()),
      delimiter: (_editorjs_delimiter__WEBPACK_IMPORTED_MODULE_10___default()),
      // inlineCode: InlineCode,
      simpleImage: (_editorjs_simple_image__WEBPACK_IMPORTED_MODULE_11___default())
    },
    data: data
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/carousel.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/carousel.css ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-sliderfade  \n{ \n  display: none; \n} \n  \nimg  \n{ \n  vertical-align: middle;\n  height: 200px;\n  width: 350px;\n  border-radius: 10px;\n  transition: border-color 1.6s ease; \n} \n  \n.carousel  \n{ \n  max-width: 1000px; \n  position: relative; \n  margin: auto; \n} \n\nli {\n  list-style-type:none;\n}\n  \n.dot  \n{ \n  height: 5px; \n  width: 5px; \n  margin: 0 2px; \n  background-color: transparent; \n  border-color: rgb(228 228 218); \n  border-width: 5 px; \n  border-style: solid; \n  border-radius: 50%; \n  display: inline-block; \n  transition: border-color 1.6s ease; \n}\n\n.prev_image {\n  text-decoration: none;\n}\n\n.next_image {\n  text-decoration: none;\n}\n\n.active  \n{ \n  border-color: rgb(123, 131, 52); \n}\n  \n.fade  \n{ \n  margin-left: 0px;\n  -webkit-animation-name: fade-image; \n  -webkit-animation-duration: 1.5s; \n  animation-name: fade-image; \n  animation-duration: 1.5s; \n} \n\n.fade.active {\n  display: unset;\n}\n\n.active_dots {\n  margin-top: -20px;\n  margin-left: -30px;\n}\n\n.carousel_slide {\n  color: rgb(136 217 255);\n  float: left;\n  text-decoration: none;\n  transition: background-color .3s;\n  font-size: 40px;\n  border-radius: 5px;\n  position: absolute;\n  margin-top: -125px;\n}\n\n.carousel_slide:hover {\n  color: rgb(136 217 255);\n  font-weight: 700;\n}\n\n.carousel_slide.prev {\n  margin-left: -160px;\n}\n\n.carousel_slide.next {\n  margin-left: 140px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/carousel.css"],"names":[],"mappings":";AACA;;EAEE,aAAa;AACf;;AAEA;;EAEE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA;;EAEE,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB;;AAEA;;EAEE,WAAW;EACX,UAAU;EACV,aAAa;EACb,6BAA6B;EAC7B,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;EAEE,+BAA+B;AACjC;;AAEA;;EAEE,gBAAgB;EAChB,kCAAkC;EAClC,gCAAgC;EAChC,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,qBAAqB;EACrB,gCAAgC;EAChC,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["\n.image-sliderfade  \n{ \n  display: none; \n} \n  \nimg  \n{ \n  vertical-align: middle;\n  height: 200px;\n  width: 350px;\n  border-radius: 10px;\n  transition: border-color 1.6s ease; \n} \n  \n.carousel  \n{ \n  max-width: 1000px; \n  position: relative; \n  margin: auto; \n} \n\nli {\n  list-style-type:none;\n}\n  \n.dot  \n{ \n  height: 5px; \n  width: 5px; \n  margin: 0 2px; \n  background-color: transparent; \n  border-color: rgb(228 228 218); \n  border-width: 5 px; \n  border-style: solid; \n  border-radius: 50%; \n  display: inline-block; \n  transition: border-color 1.6s ease; \n}\n\n.prev_image {\n  text-decoration: none;\n}\n\n.next_image {\n  text-decoration: none;\n}\n\n.active  \n{ \n  border-color: rgb(123, 131, 52); \n}\n  \n.fade  \n{ \n  margin-left: 0px;\n  -webkit-animation-name: fade-image; \n  -webkit-animation-duration: 1.5s; \n  animation-name: fade-image; \n  animation-duration: 1.5s; \n} \n\n.fade.active {\n  display: unset;\n}\n\n.active_dots {\n  margin-top: -20px;\n  margin-left: -30px;\n}\n\n.carousel_slide {\n  color: rgb(136 217 255);\n  float: left;\n  text-decoration: none;\n  transition: background-color .3s;\n  font-size: 40px;\n  border-radius: 5px;\n  position: absolute;\n  margin-top: -125px;\n}\n\n.carousel_slide:hover {\n  color: rgb(136 217 255);\n  font-weight: 700;\n}\n\n.carousel_slide.prev {\n  margin-left: -160px;\n}\n\n.carousel_slide.next {\n  margin-left: 140px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/container.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/container.css ***!
  \*********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".post_container {\n    height: auto;\n    width: initial;\n    background-color: rgb(223, 221, 221);\n}\n\n.posts_list {\n    margin: 0px 250px;\n    padding-inline-start: 0px;\n    background-color: rgba(245, 224, 245, 0.774);\n    width: 60%;\n}\n\n.post_card {\n    border-bottom: 0.5px solid rgb(145, 117, 117);\n    padding-top: 10px;\n}\n\n.post_message p {\n    color: #010725;\n    padding: 20px 60px;\n}\n\n.post_message p :hover {\n    color: #0e8575;\n}\n\n.post_title {\n    color: #4d924c;\n    padding: 5px 60px;\n}\n\n.prev_image {\n    margin-left: -160px;\n    position: absolute;\n    margin-top: -100px;\n    border-radius: 10px solid red;\n}\n\n.next_image {\n    margin-left: 155px;\n    position: absolute;\n    margin-top: -100px;\n}\n\n.delete_button {\n    float: right;\n    font-size: 15px;\n    margin-right: 30px;\n    color: rgb(253, 94, 21);\n}\n\n\n.delete_button:hover {\n    float: right;\n    font-size: 15px;\n    margin-right: 30px;\n    color: rgb(207, 95, 43);\n    background-color: lightcyan;\n    border-radius: 4px;\n}\n\n.edit_button {\n    float: right;\n    font-size: 15px;\n    margin-right: 15px;\n    color: rgb(12, 129, 37);\n}\n\n.edit_button:hover {\n    float: right;\n    font-size: 15px;\n    margin-right: 15px;\n    color: rgb(43, 207, 52);\n    background-color: lightcyan;\n    border-radius: 4px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/container.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,cAAc;IACd,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,4CAA4C;IAC5C,UAAU;AACd;;AAEA;IACI,6CAA6C;IAC7C,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,uBAAuB;AAC3B;;;AAGA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,2BAA2B;IAC3B,kBAAkB;AACtB","sourcesContent":[".post_container {\n    height: auto;\n    width: initial;\n    background-color: rgb(223, 221, 221);\n}\n\n.posts_list {\n    margin: 0px 250px;\n    padding-inline-start: 0px;\n    background-color: rgba(245, 224, 245, 0.774);\n    width: 60%;\n}\n\n.post_card {\n    border-bottom: 0.5px solid rgb(145, 117, 117);\n    padding-top: 10px;\n}\n\n.post_message p {\n    color: #010725;\n    padding: 20px 60px;\n}\n\n.post_message p :hover {\n    color: #0e8575;\n}\n\n.post_title {\n    color: #4d924c;\n    padding: 5px 60px;\n}\n\n.prev_image {\n    margin-left: -160px;\n    position: absolute;\n    margin-top: -100px;\n    border-radius: 10px solid red;\n}\n\n.next_image {\n    margin-left: 155px;\n    position: absolute;\n    margin-top: -100px;\n}\n\n.delete_button {\n    float: right;\n    font-size: 15px;\n    margin-right: 30px;\n    color: rgb(253, 94, 21);\n}\n\n\n.delete_button:hover {\n    float: right;\n    font-size: 15px;\n    margin-right: 30px;\n    color: rgb(207, 95, 43);\n    background-color: lightcyan;\n    border-radius: 4px;\n}\n\n.edit_button {\n    float: right;\n    font-size: 15px;\n    margin-right: 15px;\n    color: rgb(12, 129, 37);\n}\n\n.edit_button:hover {\n    float: right;\n    font-size: 15px;\n    margin-right: 15px;\n    color: rgb(43, 207, 52);\n    background-color: lightcyan;\n    border-radius: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n    padding: 3px;\n    text-align: center;\n    background: #789289;\n    color: white;\n    font-size: 20px;\n    margin-top: -10px;\n    border-radius: 10px;\n  }\n\n  .sub_header {\n      margin-top: -20px;\n      color:rgb(213, 247, 150);\n      font-size: 20px;\n  }\n\n  .add_new_post {\n    background-color: #f9ceb0;\n    color: #540844;\n    border: 2px solid #a1b5e0;\n    font-size: 20px;\n    border-radius: 7px;\n    margin-bottom: 10px;\n  }\n\n  .add_new_post:hover {\n    background-color: #ebebeb;\n    color: #7a4d70;\n    border: 2px solid #3b7c39;\n    font-weight: 700;\n  }\n\n", "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;MACI,iBAAiB;MACjB,wBAAwB;MACxB,eAAe;EACnB;;EAEA;IACE,yBAAyB;IACzB,cAAc;IACd,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,yBAAyB;IACzB,cAAc;IACd,yBAAyB;IACzB,gBAAgB;EAClB","sourcesContent":[".header {\n    padding: 3px;\n    text-align: center;\n    background: #789289;\n    color: white;\n    font-size: 20px;\n    margin-top: -10px;\n    border-radius: 10px;\n  }\n\n  .sub_header {\n      margin-top: -20px;\n      color:rgb(213, 247, 150);\n      font-size: 20px;\n  }\n\n  .add_new_post {\n    background-color: #f9ceb0;\n    color: #540844;\n    border: 2px solid #a1b5e0;\n    font-size: 20px;\n    border-radius: 7px;\n    margin-bottom: 10px;\n  }\n\n  .add_new_post:hover {\n    background-color: #ebebeb;\n    color: #7a4d70;\n    border: 2px solid #3b7c39;\n    font-weight: 700;\n  }\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: Arial, \n    Helvetica, sans-serif;\n    margin: 0;\n    padding: 5px;\n    border: 2px saddlebrown ;\n    text-align: center;\n}\n\np {\n    font-size: 20px;\n    color: #071a77;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;IACI;yBACqB;IACrB,SAAS;IACT,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;AAClB","sourcesContent":["body {\n    font-family: Arial, \n    Helvetica, sans-serif;\n    margin: 0;\n    padding: 5px;\n    border: 2px saddlebrown ;\n    text-align: center;\n}\n\np {\n    font-size: 20px;\n    color: #071a77;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/pagination.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/pagination.css ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pagination {\n    text-align: center;\n    display: inline-flex;\n    margin-top: 10px;\n}\n\n.pagination a {\n    color: rgb(0, 0, 0);\n    float: left;\n    padding: 2px 40px;\n    margin: 2px;\n    text-decoration: none;\n    transition: background-color .3s;\n    font-size: 40px;\n    border-radius: 5px;\n  }\n\n.pagination a.active {\n    background-color: rgb(213, 255, 96);\n    color: violet;\n    \n  }\n  \n.pagination a:hover {\n    background-color: rgb(151, 207, 129);\n    color: rgb(61, 49, 49);\n    font-weight: bold;\n    border: 3px solid rgb(112, 255, 159);\n}\n", "",{"version":3,"sources":["webpack://./src/css/pagination.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,WAAW;IACX,qBAAqB;IACrB,gCAAgC;IAChC,eAAe;IACf,kBAAkB;EACpB;;AAEF;IACI,mCAAmC;IACnC,aAAa;;EAEf;;AAEF;IACI,oCAAoC;IACpC,sBAAsB;IACtB,iBAAiB;IACjB,oCAAoC;AACxC","sourcesContent":[".pagination {\n    text-align: center;\n    display: inline-flex;\n    margin-top: 10px;\n}\n\n.pagination a {\n    color: rgb(0, 0, 0);\n    float: left;\n    padding: 2px 40px;\n    margin: 2px;\n    text-decoration: none;\n    transition: background-color .3s;\n    font-size: 40px;\n    border-radius: 5px;\n  }\n\n.pagination a.active {\n    background-color: rgb(213, 255, 96);\n    color: violet;\n    \n  }\n  \n.pagination a:hover {\n    background-color: rgb(151, 207, 129);\n    color: rgb(61, 49, 49);\n    font-weight: bold;\n    border: 3px solid rgb(112, 255, 159);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/popup.css ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.52);\n    border-radius: 10px;\n  }\n  \n  .modal-content {\n    border-radius: 10px;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 10px;\n    width: 50%;\n    height: 70%;\n  }\n  \n  .modal-content h2 {\n    padding: 20px 80px;\n    align-items: center;\n    padding: 20px;\n    margin: 5px 20px;\n    border-bottom: 2px solid rgb(250, 199, 89);\n  }\n  \n  .close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  form {\n    padding: 20px;\n    text-align: start;\n  }\n\n  form label {\n    margin-left: 4px;\n    font-weight: bold;\n  }\n\n  form #post_title {\n    padding: 7px;\n    margin: 10px 0px;\n  }\n\n  form #post_submit {\n    align-items: center;\n    border-radius: 5px;\n    font-size: 15px;\n    margin-top: 0px;\n    margin-right: 30px;\n    float: right;\n    color: rgb(34, 134, 73);\n  }\n\n  form #post_description {\n    padding: 5px;\n    margin: 7px 0px;\n    align-items: initial;\n  }\n", "",{"version":3,"sources":["webpack://./src/css/popup.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,4BAA4B;IAC5B,kCAAkC;IAClC,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,UAAU;IACV,WAAW;EACb;;EAEA;IACE,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,0CAA0C;EAC5C;;EAEA;IACE,cAAc;IACd,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;;EAEA;;IAEE,WAAW;IACX,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;EACzB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,oBAAoB;EACtB","sourcesContent":[".modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.52);\n    border-radius: 10px;\n  }\n  \n  .modal-content {\n    border-radius: 10px;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 10px;\n    width: 50%;\n    height: 70%;\n  }\n  \n  .modal-content h2 {\n    padding: 20px 80px;\n    align-items: center;\n    padding: 20px;\n    margin: 5px 20px;\n    border-bottom: 2px solid rgb(250, 199, 89);\n  }\n  \n  .close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  form {\n    padding: 20px;\n    text-align: start;\n  }\n\n  form label {\n    margin-left: 4px;\n    font-weight: bold;\n  }\n\n  form #post_title {\n    padding: 7px;\n    margin: 10px 0px;\n  }\n\n  form #post_submit {\n    align-items: center;\n    border-radius: 5px;\n    font-size: 15px;\n    margin-top: 0px;\n    margin-right: 30px;\n    float: right;\n    color: rgb(34, 134, 73);\n  }\n\n  form #post_description {\n    padding: 5px;\n    margin: 7px 0px;\n    align-items: initial;\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Card styles */ \n.card{ \n    background-color: #fff; \n    height: auto; \n    width: auto; \n    overflow: hidden; \n    margin: 12px; \n    border-radius: 5px; \n    box-shadow: 9px 17px 45px -29px \n                rgba(0, 0, 0, 0.44); \n} \n\n/* Card image loading */ \n.card__image img { \n    width: 100%; \n    height: 100%; \n} \n  \n.card__image.loading { \n    height: 300px; \n    width: 400px; \n} \n\n/* Card title */ \n.card__title { \n    padding: 8px; \n    font-size: 22px; \n    font-weight: 700; \n} \n  \n.card__title.loading { \n    height: 1rem; \n    width: 50%; \n    margin: 1rem; \n    border-radius: 3px; \n} \n\n/* Card description */ \n.card__description { \n    padding: 8px; \n    font-size: 16px; \n} \n  \n.card__description.loading { \n    height: 3rem; \n    margin: 1rem; \n    border-radius: 3px; \n} \n\n/* The loading Class */ \n.loading { \n    position: relative; \n    background-color: #e2e2e2; \n} \n\n/* The moving element */ \n.loading::after { \n    display: block; \n    content: \"\"; \n    position: absolute; \n    width: 100%; \n    height: 100%; \n    transform: translateX(-100%); \n    background: -webkit-gradient(linear, left top, \n                right top, from(transparent),  \n                color-stop(rgba(255, 255, 255, 0.2)), \n                to(transparent)); \n                  \n    background: linear-gradient(90deg, transparent, \n            rgba(255, 255, 255, 0.2), transparent); \n\n    /* Adding animation */ \n    animation: loading 0.8s infinite; \n} \n\n/* Loading Animation */ \n@keyframes loading { \n    100% { \n        transform: translateX(100%); \n    } \n} \n", "",{"version":3,"sources":["webpack://./src/css/skeleton.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;IACI,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB;mCAC+B;AACnC;;AAEA,uBAAuB;AACvB;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA,qBAAqB;AACrB;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA,sBAAsB;AACtB;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA,uBAAuB;AACvB;IACI,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B;;;gCAG4B;;IAE5B;kDAC8C;;IAE9C,qBAAqB;IACrB,gCAAgC;AACpC;;AAEA,sBAAsB;AACtB;IACI;QACI,2BAA2B;IAC/B;AACJ","sourcesContent":["/* Card styles */ \n.card{ \n    background-color: #fff; \n    height: auto; \n    width: auto; \n    overflow: hidden; \n    margin: 12px; \n    border-radius: 5px; \n    box-shadow: 9px 17px 45px -29px \n                rgba(0, 0, 0, 0.44); \n} \n\n/* Card image loading */ \n.card__image img { \n    width: 100%; \n    height: 100%; \n} \n  \n.card__image.loading { \n    height: 300px; \n    width: 400px; \n} \n\n/* Card title */ \n.card__title { \n    padding: 8px; \n    font-size: 22px; \n    font-weight: 700; \n} \n  \n.card__title.loading { \n    height: 1rem; \n    width: 50%; \n    margin: 1rem; \n    border-radius: 3px; \n} \n\n/* Card description */ \n.card__description { \n    padding: 8px; \n    font-size: 16px; \n} \n  \n.card__description.loading { \n    height: 3rem; \n    margin: 1rem; \n    border-radius: 3px; \n} \n\n/* The loading Class */ \n.loading { \n    position: relative; \n    background-color: #e2e2e2; \n} \n\n/* The moving element */ \n.loading::after { \n    display: block; \n    content: \"\"; \n    position: absolute; \n    width: 100%; \n    height: 100%; \n    transform: translateX(-100%); \n    background: -webkit-gradient(linear, left top, \n                right top, from(transparent),  \n                color-stop(rgba(255, 255, 255, 0.2)), \n                to(transparent)); \n                  \n    background: linear-gradient(90deg, transparent, \n            rgba(255, 255, 255, 0.2), transparent); \n\n    /* Adding animation */ \n    animation: loading 0.8s infinite; \n} \n\n/* Loading Animation */ \n@keyframes loading { \n    100% { \n        transform: translateX(100%); \n    } \n} \n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/spinner.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/spinner.css ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".spinner {\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid rgb(123, 245, 154);\n    border-bottom: 16px solid rgb(215, 253, 0);\n    width: 80px;\n    height: 80px;\n    -webkit-animation: spin 1.5s linear infinite;\n    animation: spin 1.5s linear infinite;\n    display: inline-flex;\n    margin-top: 200px;\n    margin-bottom: 200px;\n  }\n  \n  @-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n  \n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n\n  @-webkit-keyframes op-spin {\n    0% { -webkit-transform: rotate(360deg); }\n    100% { -webkit-transform: rotate(0deg); }\n  }\n  \n  @keyframes op-spin {\n    0% { transform: rotate(360deg); }\n    100% { transform: rotate(0deg); }\n  }\n", "",{"version":3,"sources":["webpack://./src/css/spinner.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,yCAAyC;IACzC,0CAA0C;IAC1C,WAAW;IACX,YAAY;IACZ,4CAA4C;IAC5C,oCAAoC;IACpC,oBAAoB;IACpB,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,KAAK,+BAA+B,EAAE;IACtC,OAAO,iCAAiC,EAAE;EAC5C;;EAEA;IACE,KAAK,uBAAuB,EAAE;IAC9B,OAAO,yBAAyB,EAAE;EACpC;;EAEA;IACE,KAAK,iCAAiC,EAAE;IACxC,OAAO,+BAA+B,EAAE;EAC1C;;EAEA;IACE,KAAK,yBAAyB,EAAE;IAChC,OAAO,uBAAuB,EAAE;EAClC","sourcesContent":[".spinner {\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid rgb(123, 245, 154);\n    border-bottom: 16px solid rgb(215, 253, 0);\n    width: 80px;\n    height: 80px;\n    -webkit-animation: spin 1.5s linear infinite;\n    animation: spin 1.5s linear infinite;\n    display: inline-flex;\n    margin-top: 200px;\n    margin-bottom: 200px;\n  }\n  \n  @-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n  \n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n\n  @-webkit-keyframes op-spin {\n    0% { -webkit-transform: rotate(360deg); }\n    100% { -webkit-transform: rotate(0deg); }\n  }\n  \n  @keyframes op-spin {\n    0% { transform: rotate(360deg); }\n    100% { transform: rotate(0deg); }\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1, h2, h3, h4, h5, p {\n    font-family: helvetica;\n    color: #3e3e3e;\n  }\n  .description {\n    font-size: 200px;\n    color: #9e9e9e;\n  }\n\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,cAAc;EAChB;EACA;IACE,gBAAgB;IAChB,cAAc;EAChB","sourcesContent":["h1, h2, h3, h4, h5, p {\n    font-family: helvetica;\n    color: #3e3e3e;\n  }\n  .description {\n    font-size: 200px;\n    color: #9e9e9e;\n  }\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/texteditor.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/texteditor.css ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n    margin-top: 15px;\n    max-height: 140px;\n    height: 30%;\n    width: 90%;\n    background-color: rgb(255, 255, 255);\n    border-radius: 5px;\n    padding: 20px;\n    overflow-y: scroll; \n    margin-bottom: -10px;\n    border: 2px solid rgb(170, 170, 170);\n}\n\n.codex-editor__redactor {\n    padding-bottom: 10px;\n    padding-bottom: 0px !important;\n    height: 200px;\n}\n\n.cdx-marker {\n    background: rgba(245, 235, 111, 0.29);\n    padding: 3px 0;\n  }\n", "",{"version":3,"sources":["webpack://./src/css/texteditor.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,oCAAoC;AACxC;;AAEA;IACI,oBAAoB;IACpB,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,qCAAqC;IACrC,cAAc;EAChB","sourcesContent":[".container {\n    margin-top: 15px;\n    max-height: 140px;\n    height: 30%;\n    width: 90%;\n    background-color: rgb(255, 255, 255);\n    border-radius: 5px;\n    padding: 20px;\n    overflow-y: scroll; \n    margin-bottom: -10px;\n    border: 2px solid rgb(170, 170, 170);\n}\n\n.codex-editor__redactor {\n    padding-bottom: 10px;\n    padding-bottom: 0px !important;\n    height: 200px;\n}\n\n.cdx-marker {\n    background: rgba(245, 235, 111, 0.29);\n    padding: 3px 0;\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/editorjs-html/build/edjsHTML.node.js":
/*!***********************************************************!*\
  !*** ./node_modules/editorjs-html/build/edjsHTML.node.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:833-847 */
/***/ ((module) => {

"use strict";
var t={delimiter:function(){return"<br/>"},header:function(t){var e=t.data;return"<h"+e.level+"> "+e.text+" </h"+e.level+">"},paragraph:function(t){return"<p> "+t.data.text+" </p>"},list:function(t){var e=t.data,r="unordered"===e.style?"ul":"ol",n="";return e.items&&(n=e.items.map((function(t){return"<li> "+t+" </li>"})).reduce((function(t,e){return t+e}),"")),"<"+r+"> "+n+" </"+r+">"},image:function(t){var e=t.data,r=e.caption?e.caption:"Image";return'<img src="'+(e.file?e.file.url:"")+'" alt="'+r+'" />'},quote:function(t){var e=t.data;return"<blockquote> "+e.text+" </blockquote> - "+e.caption}};function e(t){return new Error('[31m The Parser function of type "'+t+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}module.exports=function(r){return void 0===r&&(r={}),Object.assign(t,r),{parse:function(r){return r.blocks.map((function(r){return t[r.type]?t[r.type](r):e(r.type)}))},parseBlock:function(r){return t[r.type]?t[r.type](r):e(r.type)}}};


/***/ }),

/***/ "./node_modules/html-entities/lib/html4-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html4-entities.js ***!
  \**********************************************************/
/*! flagged exports */
/*! export Html4Entities [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];
var alphaIndex = {};
var numIndex = {};
(function () {
    var i = 0;
    var length = HTML_ALPHA.length;
    while (i < length) {
        var a = HTML_ALPHA[i];
        var c = HTML_CODES[i];
        alphaIndex[a] = String.fromCharCode(c);
        numIndex[c] = a;
        i++;
    }
})();
var Html4Entities = /** @class */ (function () {
    function Html4Entities() {
    }
    Html4Entities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
            var chr;
            if (entity.charAt(0) === "#") {
                var code = entity.charAt(1).toLowerCase() === 'x' ?
                    parseInt(entity.substr(2), 16) :
                    parseInt(entity.substr(1));
                if (!(isNaN(code) || code < -32768 || code > 65535)) {
                    chr = String.fromCharCode(code);
                }
            }
            else {
                chr = alphaIndex[entity];
            }
            return chr || s;
        });
    };
    Html4Entities.decode = function (str) {
        return new Html4Entities().decode(str);
    };
    Html4Entities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var alpha = numIndex[str.charCodeAt(i)];
            result += alpha ? "&" + alpha + ";" : str.charAt(i);
            i++;
        }
        return result;
    };
    Html4Entities.encode = function (str) {
        return new Html4Entities().encode(str);
    };
    Html4Entities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var cc = str.charCodeAt(i);
            var alpha = numIndex[cc];
            if (alpha) {
                result += "&" + alpha + ";";
            }
            else if (cc < 32 || cc > 126) {
                result += "&#" + cc + ";";
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    Html4Entities.encodeNonUTF = function (str) {
        return new Html4Entities().encodeNonUTF(str);
    };
    Html4Entities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            result += '&#' + c + ';';
            i++;
        }
        return result;
    };
    Html4Entities.encodeNonASCII = function (str) {
        return new Html4Entities().encodeNonASCII(str);
    };
    return Html4Entities;
}());
exports.Html4Entities = Html4Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/html5-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html5-entities.js ***!
  \**********************************************************/
/*! flagged exports */
/*! export Html5Entities [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];
var alphaIndex = {};
var charIndex = {};
createIndexes(alphaIndex, charIndex);
var Html5Entities = /** @class */ (function () {
    function Html5Entities() {
    }
    Html5Entities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
            var chr;
            if (entity.charAt(0) === "#") {
                var code = entity.charAt(1) === 'x' ?
                    parseInt(entity.substr(2).toLowerCase(), 16) :
                    parseInt(entity.substr(1));
                if (!(isNaN(code) || code < -32768 || code > 65535)) {
                    chr = String.fromCharCode(code);
                }
            }
            else {
                chr = alphaIndex[entity];
            }
            return chr || s;
        });
    };
    Html5Entities.decode = function (str) {
        return new Html5Entities().decode(str);
    };
    Html5Entities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var charInfo = charIndex[str.charCodeAt(i)];
            if (charInfo) {
                var alpha = charInfo[str.charCodeAt(i + 1)];
                if (alpha) {
                    i++;
                }
                else {
                    alpha = charInfo[''];
                }
                if (alpha) {
                    result += "&" + alpha + ";";
                    i++;
                    continue;
                }
            }
            result += str.charAt(i);
            i++;
        }
        return result;
    };
    Html5Entities.encode = function (str) {
        return new Html5Entities().encode(str);
    };
    Html5Entities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            var charInfo = charIndex[c];
            if (charInfo) {
                var alpha = charInfo[str.charCodeAt(i + 1)];
                if (alpha) {
                    i++;
                }
                else {
                    alpha = charInfo[''];
                }
                if (alpha) {
                    result += "&" + alpha + ";";
                    i++;
                    continue;
                }
            }
            if (c < 32 || c > 126) {
                result += '&#' + c + ';';
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    Html5Entities.encodeNonUTF = function (str) {
        return new Html5Entities().encodeNonUTF(str);
    };
    Html5Entities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            result += '&#' + c + ';';
            i++;
        }
        return result;
    };
    Html5Entities.encodeNonASCII = function (str) {
        return new Html5Entities().encodeNonASCII(str);
    };
    return Html5Entities;
}());
exports.Html5Entities = Html5Entities;
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    while (i--) {
        var e = ENTITIES[i];
        var alpha = e[0];
        var chars = e[1];
        var chr = chars[0];
        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo = void 0;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chars[1]) {
            var chr2 = chars[1];
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            addChar && (charInfo[chr2] = alpha);
        }
        else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            addChar && (charInfo[''] = alpha);
        }
    }
}


/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/*! flagged exports */
/*! export AllHtmlEntities [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Html4Entities [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Html5Entities [provided] [no usage info] [missing usage info prevents renaming] */
/*! export XmlEntities [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var xml_entities_1 = __webpack_require__(/*! ./xml-entities */ "./node_modules/html-entities/lib/xml-entities.js");
exports.XmlEntities = xml_entities_1.XmlEntities;
var html4_entities_1 = __webpack_require__(/*! ./html4-entities */ "./node_modules/html-entities/lib/html4-entities.js");
exports.Html4Entities = html4_entities_1.Html4Entities;
var html5_entities_1 = __webpack_require__(/*! ./html5-entities */ "./node_modules/html-entities/lib/html5-entities.js");
exports.Html5Entities = html5_entities_1.Html5Entities;
exports.AllHtmlEntities = html5_entities_1.Html5Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/xml-entities.js":
/*!********************************************************!*\
  !*** ./node_modules/html-entities/lib/xml-entities.js ***!
  \********************************************************/
/*! flagged exports */
/*! export XmlEntities [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};
var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};
var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};
var XmlEntities = /** @class */ (function () {
    function XmlEntities() {
    }
    XmlEntities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/[<>"'&]/g, function (s) {
            return CHAR_S_INDEX[s];
        });
    };
    XmlEntities.encode = function (str) {
        return new XmlEntities().encode(str);
    };
    XmlEntities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&#?[0-9a-zA-Z]+;?/g, function (s) {
            if (s.charAt(1) === '#') {
                var code = s.charAt(2).toLowerCase() === 'x' ?
                    parseInt(s.substr(3), 16) :
                    parseInt(s.substr(2));
                if (isNaN(code) || code < -32768 || code > 65535) {
                    return '';
                }
                return String.fromCharCode(code);
            }
            return ALPHA_INDEX[s] || s;
        });
    };
    XmlEntities.decode = function (str) {
        return new XmlEntities().decode(str);
    };
    XmlEntities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            var alpha = CHAR_INDEX[c];
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
            if (c < 32 || c > 126) {
                result += '&#' + c + ';';
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    XmlEntities.encodeNonUTF = function (str) {
        return new XmlEntities().encodeNonUTF(str);
    };
    XmlEntities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLenght = str.length;
        var result = '';
        var i = 0;
        while (i < strLenght) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            result += '&#' + c + ';';
            i++;
        }
        return result;
    };
    XmlEntities.encodeNonASCII = function (str) {
        return new XmlEntities().encodeNonASCII(str);
    };
    return XmlEntities;
}());
exports.XmlEntities = XmlEntities;


/***/ }),

/***/ "./node_modules/querystring/decode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 31:0-14 */
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ "./node_modules/querystring/encode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 40:0-14 */
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ "./node_modules/querystring/index.js":
/*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
/*! default exports */
/*! export decode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export encode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export parse [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/querystring/decode.js */
/*!   exports [maybe provided (runtime-defined)] [no usage info] */
/*! export stringify [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/querystring/encode.js */
/*!   exports [maybe provided (runtime-defined)] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring/encode.js");


/***/ }),

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js")();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),

/***/ "./src/css/carousel.css":
/*!******************************!*\
  !*** ./src/css/carousel.css ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./carousel.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/carousel.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./carousel.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/carousel.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./carousel.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/carousel.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/container.css":
/*!*******************************!*\
  !*** ./src/css/container.css ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./container.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/container.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./container.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/container.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./container.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/container.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/header.css":
/*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/pagination.css":
/*!********************************!*\
  !*** ./src/css/pagination.css ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pagination.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/pagination.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./pagination.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/pagination.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pagination.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/pagination.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pagination_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/popup.css":
/*!***************************!*\
  !*** ./src/css/popup.css ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/skeleton.css":
/*!******************************!*\
  !*** ./src/css/skeleton.css ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/spinner.css":
/*!*****************************!*\
  !*** ./src/css/spinner.css ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./spinner.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/spinner.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./spinner.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/spinner.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./spinner.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/spinner.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_spinner_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/texteditor.css":
/*!********************************!*\
  !*** ./src/css/texteditor.css ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_texteditor_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./texteditor.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/texteditor.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_texteditor_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_texteditor_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_texteditor_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./texteditor.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/texteditor.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_texteditor_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./texteditor.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/texteditor.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_texteditor_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_texteditor_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_texteditor_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_texteditor_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client-overlay.js":
/*!***************************************************************!*\
  !*** ./node_modules/webpack-hot-middleware/client-overlay.js ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, module */
/*! CommonJS bailout: module.exports is used directly at 76:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*eslint-env browser*/

var clientOverlay = document.createElement('div');
clientOverlay.id = 'webpack-hot-middleware-clientOverlay';
var styles = {
  background: 'rgba(0,0,0,0.85)',
  color: '#e8e8e8',
  lineHeight: '1.6',
  whiteSpace: 'pre',
  fontFamily: 'Menlo, Consolas, monospace',
  fontSize: '13px',
  position: 'fixed',
  zIndex: 9999,
  padding: '10px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'auto',
  dir: 'ltr',
  textAlign: 'left',
};

var ansiHTML = __webpack_require__(/*! ansi-html */ "./node_modules/ansi-html/index.js");
var colors = {
  reset: ['transparent', 'transparent'],
  black: '181818',
  red: 'ff3348',
  green: '3fff4f',
  yellow: 'ffd30e',
  blue: '169be0',
  magenta: 'f840b7',
  cyan: '0ad8e9',
  lightgrey: 'ebe7e3',
  darkgrey: '6d7891',
};

var Entities = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js").AllHtmlEntities;
var entities = new Entities();

function showProblems(type, lines) {
  clientOverlay.innerHTML = '';
  lines.forEach(function(msg) {
    msg = ansiHTML(entities.encode(msg));
    var div = document.createElement('div');
    div.style.marginBottom = '26px';
    div.innerHTML = problemType(type) + ' in ' + msg;
    clientOverlay.appendChild(div);
  });
  if (document.body) {
    document.body.appendChild(clientOverlay);
  }
}

function clear() {
  if (document.body && clientOverlay.parentNode) {
    document.body.removeChild(clientOverlay);
  }
}

function problemType(type) {
  var problemColors = {
    errors: colors.red,
    warnings: colors.yellow,
  };
  var color = problemColors[type] || colors.red;
  return (
    '<span style="background-color:#' +
    color +
    '; color:#000000; padding:3px 6px; border-radius: 4px;">' +
    type.slice(0, -1).toUpperCase() +
    '</span>'
  );
}

module.exports = function(options) {
  for (var color in options.ansiColors) {
    if (color in colors) {
      colors[color] = options.ansiColors[color];
    }
    ansiHTML.setColors(colors);
  }

  for (var style in options.overlayStyles) {
    styles[style] = options.overlayStyles[style];
  }

  for (var key in styles) {
    clientOverlay.style[key] = styles[key];
  }

  return {
    showProblems: showProblems,
    clear: clear,
  };
};

module.exports.clear = clear;
module.exports.showProblems = showProblems;


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/client.js?path=/__webpack_hmr&timeout=20000":
/*!*****************************************************************************************!*\
  !*** ./node_modules/webpack-hot-middleware/client.js?path=/__webpack_hmr&timeout=20000 ***!
  \*****************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__, __webpack_require__.p, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 294:2-16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __resourceQuery = "?path=/__webpack_hmr&timeout=20000";
/* module decorator */ module = __webpack_require__.nmd(module);
/*eslint-env browser*/
/*global __resourceQuery __webpack_public_path__*/

var options = {
  path: '/__webpack_hmr',
  timeout: 20 * 1000,
  overlay: true,
  reload: false,
  log: true,
  warn: true,
  name: '',
  autoConnect: true,
  overlayStyles: {},
  overlayWarnings: false,
  ansiColors: {},
};
if (true) {
  var querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
  var overrides = querystring.parse(__resourceQuery.slice(1));
  setOverrides(overrides);
}

if (typeof window === 'undefined') {
  // do nothing
} else if (typeof window.EventSource === 'undefined') {
  console.warn(
    "webpack-hot-middleware's client requires EventSource to work. " +
      'You should include a polyfill if you want to support this browser: ' +
      'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools'
  );
} else {
  if (options.autoConnect) {
    connect();
  }
}

/* istanbul ignore next */
function setOptionsAndConnect(overrides) {
  setOverrides(overrides);
  connect();
}

function setOverrides(overrides) {
  if (overrides.autoConnect)
    options.autoConnect = overrides.autoConnect == 'true';
  if (overrides.path) options.path = overrides.path;
  if (overrides.timeout) options.timeout = overrides.timeout;
  if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
  if (overrides.reload) options.reload = overrides.reload !== 'false';
  if (overrides.noInfo && overrides.noInfo !== 'false') {
    options.log = false;
  }
  if (overrides.name) {
    options.name = overrides.name;
  }
  if (overrides.quiet && overrides.quiet !== 'false') {
    options.log = false;
    options.warn = false;
  }

  if (overrides.dynamicPublicPath) {
    options.path = __webpack_require__.p + options.path;
  }

  if (overrides.ansiColors)
    options.ansiColors = JSON.parse(overrides.ansiColors);
  if (overrides.overlayStyles)
    options.overlayStyles = JSON.parse(overrides.overlayStyles);

  if (overrides.overlayWarnings) {
    options.overlayWarnings = overrides.overlayWarnings == 'true';
  }
}

function EventSourceWrapper() {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  init();
  var timer = setInterval(function() {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    addMessageListener: function(fn) {
      listeners.push(fn);
    },
  };
}

function getEventSourceWrapper() {
  if (!window.__whmEventSourceWrapper) {
    window.__whmEventSourceWrapper = {};
  }
  if (!window.__whmEventSourceWrapper[options.path]) {
    // cache the wrapper for other entries loaded on
    // the same page with the same options.path
    window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
  }
  return window.__whmEventSourceWrapper[options.path];
}

function connect() {
  getEventSourceWrapper().addMessageListener(handleMessage);

  function handleMessage(event) {
    if (event.data == '\uD83D\uDC93') {
      return;
    }
    try {
      processMessage(JSON.parse(event.data));
    } catch (ex) {
      if (options.warn) {
        console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
      }
    }
  }
}

// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey = '__webpack_hot_middleware_reporter__';
var reporter;
if (typeof window !== 'undefined') {
  if (!window[singletonKey]) {
    window[singletonKey] = createReporter();
  }
  reporter = window[singletonKey];
}

function createReporter() {
  var strip = __webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");

  var overlay;
  if (typeof document !== 'undefined' && options.overlay) {
    overlay = __webpack_require__(/*! ./client-overlay */ "./node_modules/webpack-hot-middleware/client-overlay.js")({
      ansiColors: options.ansiColors,
      overlayStyles: options.overlayStyles,
    });
  }

  var styles = {
    errors: 'color: #ff0000;',
    warnings: 'color: #999933;',
  };
  var previousProblems = null;
  function log(type, obj) {
    var newProblems = obj[type]
      .map(function(msg) {
        return strip(msg);
      })
      .join('\n');
    if (previousProblems == newProblems) {
      return;
    } else {
      previousProblems = newProblems;
    }

    var style = styles[type];
    var name = obj.name ? "'" + obj.name + "' " : '';
    var title = '[HMR] bundle ' + name + 'has ' + obj[type].length + ' ' + type;
    // NOTE: console.warn or console.error will print the stack trace
    // which isn't helpful here, so using console.log to escape it.
    if (console.group && console.groupEnd) {
      console.group('%c' + title, style);
      console.log('%c' + newProblems, style);
      console.groupEnd();
    } else {
      console.log(
        '%c' + title + '\n\t%c' + newProblems.replace(/\n/g, '\n\t'),
        style + 'font-weight: bold;',
        style + 'font-weight: normal;'
      );
    }
  }

  return {
    cleanProblemsCache: function() {
      previousProblems = null;
    },
    problems: function(type, obj) {
      if (options.warn) {
        log(type, obj);
      }
      if (overlay) {
        if (options.overlayWarnings || type === 'errors') {
          overlay.showProblems(type, obj[type]);
          return false;
        }
        overlay.clear();
      }
      return true;
    },
    success: function() {
      if (overlay) overlay.clear();
    },
    useCustomOverlay: function(customOverlay) {
      overlay = customOverlay;
    },
  };
}

var processUpdate = __webpack_require__(/*! ./process-update */ "./node_modules/webpack-hot-middleware/process-update.js");

var customHandler;
var subscribeAllHandler;
function processMessage(obj) {
  switch (obj.action) {
    case 'building':
      if (options.log) {
        console.log(
          '[HMR] bundle ' +
            (obj.name ? "'" + obj.name + "' " : '') +
            'rebuilding'
        );
      }
      break;
    case 'built':
      if (options.log) {
        console.log(
          '[HMR] bundle ' +
            (obj.name ? "'" + obj.name + "' " : '') +
            'rebuilt in ' +
            obj.time +
            'ms'
        );
      }
    // fall through
    case 'sync':
      if (obj.name && options.name && obj.name !== options.name) {
        return;
      }
      var applyUpdate = true;
      if (obj.errors.length > 0) {
        if (reporter) reporter.problems('errors', obj);
        applyUpdate = false;
      } else if (obj.warnings.length > 0) {
        if (reporter) {
          var overlayShown = reporter.problems('warnings', obj);
          applyUpdate = overlayShown;
        }
      } else {
        if (reporter) {
          reporter.cleanProblemsCache();
          reporter.success();
        }
      }
      if (applyUpdate) {
        processUpdate(obj.hash, obj.modules, options);
      }
      break;
    default:
      if (customHandler) {
        customHandler(obj);
      }
  }

  if (subscribeAllHandler) {
    subscribeAllHandler(obj);
  }
}

if (module) {
  module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    },
    setOptionsAndConnect: setOptionsAndConnect,
  };
}


/***/ }),

/***/ "./node_modules/webpack-hot-middleware/process-update.js":
/*!***************************************************************!*\
  !*** ./node_modules/webpack-hot-middleware/process-update.js ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.h, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 48:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */

/* global window __webpack_hash__ */

if (false) {}

var hmrDocsUrl = 'https://webpack.js.org/concepts/hot-module-replacement/'; // eslint-disable-line max-len

var lastHash;
var failureStatuses = { abort: 1, fail: 1 };
var applyOptions = {
  ignoreUnaccepted: true,
  ignoreDeclined: true,
  ignoreErrored: true,
  onUnaccepted: function(data) {
    console.warn(
      'Ignored an update to unaccepted module ' + data.chain.join(' -> ')
    );
  },
  onDeclined: function(data) {
    console.warn(
      'Ignored an update to declined module ' + data.chain.join(' -> ')
    );
  },
  onErrored: function(data) {
    console.error(data.error);
    console.warn(
      'Ignored an error while updating module ' +
        data.moduleId +
        ' (' +
        data.type +
        ')'
    );
  },
};

function upToDate(hash) {
  if (hash) lastHash = hash;
  return lastHash == __webpack_require__.h();
}

module.exports = function(hash, moduleMap, options) {
  var reload = options.reload;
  if (!upToDate(hash) && module.hot.status() == 'idle') {
    if (options.log) console.log('[HMR] Checking for updates on the server...');
    check();
  }

  function check() {
    var cb = function(err, updatedModules) {
      if (err) return handleError(err);

      if (!updatedModules) {
        if (options.warn) {
          console.warn('[HMR] Cannot find update (Full reload needed)');
          console.warn('[HMR] (Probably because of restarting the server)');
        }
        performReload();
        return null;
      }

      var applyCallback = function(applyErr, renewedModules) {
        if (applyErr) return handleError(applyErr);

        if (!upToDate()) check();

        logUpdates(updatedModules, renewedModules);
      };

      var applyResult = module.hot.apply(applyOptions, applyCallback);
      // webpack 2 promise
      if (applyResult && applyResult.then) {
        // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
        applyResult.then(function(outdatedModules) {
          applyCallback(null, outdatedModules);
        });
        applyResult.catch(applyCallback);
      }
    };

    var result = module.hot.check(false, cb);
    // webpack 2 promise
    if (result && result.then) {
      result.then(function(updatedModules) {
        cb(null, updatedModules);
      });
      result.catch(cb);
    }
  }

  function logUpdates(updatedModules, renewedModules) {
    var unacceptedModules = updatedModules.filter(function(moduleId) {
      return renewedModules && renewedModules.indexOf(moduleId) < 0;
    });

    if (unacceptedModules.length > 0) {
      if (options.warn) {
        console.warn(
          "[HMR] The following modules couldn't be hot updated: " +
            '(Full reload needed)\n' +
            'This is usually because the modules which have changed ' +
            '(and their parents) do not know how to hot reload themselves. ' +
            'See ' +
            hmrDocsUrl +
            ' for more details.'
        );
        unacceptedModules.forEach(function(moduleId) {
          console.warn('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
        });
      }
      performReload();
      return;
    }

    if (options.log) {
      if (!renewedModules || renewedModules.length === 0) {
        console.log('[HMR] Nothing hot updated.');
      } else {
        console.log('[HMR] Updated modules:');
        renewedModules.forEach(function(moduleId) {
          console.log('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
        });
      }

      if (upToDate()) {
        console.log('[HMR] App is up to date.');
      }
    }
  }

  function handleError(err) {
    if (module.hot.status() in failureStatuses) {
      if (options.warn) {
        console.warn('[HMR] Cannot check for update (Full reload needed)');
        console.warn('[HMR] ' + (err.stack || err.message));
      }
      performReload();
      return;
    }
    if (options.warn) {
      console.warn('[HMR] Update check failed: ' + (err.stack || err.message));
    }
  }

  function performReload() {
    if (reload) {
      if (options.warn) console.warn('[HMR] Reloading page');
      window.location.reload();
    }
  }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => "main." + __webpack_require__.h() + ".hot-update.json";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "d74ccfd0ae33f68e18dd"
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "express-webpack:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateexpress_webpack"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./node_modules/webpack-hot-middleware/client.js?path=/__webpack_hmr&timeout=20000");
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=main.js.map