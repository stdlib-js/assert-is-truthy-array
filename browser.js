// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor;function n(n){return null!=n&&"function"!=typeof n&&"number"==typeof n.length&&(t=n.length,e(t)===t)&&n.length>=0&&n.length<=4294967295;var t}return function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,o;if(!n(t))return!1;if(0===(r=t.length))return!1;for(o=0;o<r;o++)if(!1===e(t[o]))return!1;return!0}}((function(e){return!!e}))},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).isTruthyArray=n();
//# sourceMappingURL=browser.js.map
