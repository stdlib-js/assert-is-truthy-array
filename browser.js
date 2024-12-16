// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor,r=4294967295;function i(i){return null!=i&&"function"!=typeof i&&"number"==typeof i.length&&(a=i.length,e(a)===a)&&i.length>=0&&i.length<=r;var a}function a(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var o=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function c(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!a(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===s.call(e.specifier)?s.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var p=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function y(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":p(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=u.call(i,m,"$1e"),i=u.call(i,b,"e"),i=u.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,g,"e+0$1"),i=u.call(i,d,"e-0$1"),e.alternate&&(i=u.call(i,h,"$1."),i=u.call(i,w,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):l.call(i)}function x(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var k=String.fromCharCode,E=Array.isArray;function S(e){return e!=e}function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,i,a,t,o,s,p,l,f,u,g,d,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,l=0;l<e.length;l++)if("string"==typeof(a=e[l]))s+=a;else{if(r=void 0!==a.precision,!(a=T(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+a+"`.");for(a.mapping&&(p=a.mapping),i=a.flags,f=0;f<i.length;f++)switch(t=i.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+t)}if("*"===a.width){if(a.width=parseInt(arguments[p],10),p+=1,S(a.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[p],10),p+=1,S(a.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[p],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=c(a);break;case"s":a.maxWidth=r?a.precision:-1,a.arg=String(a.arg);break;case"c":if(!S(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=S(o)?String(a.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=y(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=n(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=(u=a.arg,g=a.width,d=a.padRight,h=void 0,(h=g-u.length)<0?u:u=d?u+x(h):x(h)+u)),s+=a.arg||"",p+=1}return s}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,i,a,t;for(i=[],t=0,a=$.exec(e);a;)(r=e.slice(t,$.lastIndex-a[0].length)).length&&i.push(r),i.push(F(a)),t=$.lastIndex,a=$.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function A(e){var r,i;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return V.apply(null,r)}return function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var a,t;if(!i(r))return!1;if(0===(a=r.length))return!1;for(t=0;t<a;t++)if(!1===e(r[t]))return!1;return!0}}((function(e){return!!e}))},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isTruthyArray=r();
//# sourceMappingURL=browser.js.map