var capella=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";n(1),t.exports=n(2)},function(t,e){},function(t,e,n){"use strict";var r={};r.ajax=n(3),r.transport=n(4),r.uploader=n(5),r.init=function(){r.uploader.init()},t.exports=r},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";t.exports=function(){var t=function(t){return t instanceof FormData};return{call:function(e){if(e&&e.url){var n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),r=e.progress||null,o=e.success||function(){},u=e.error||function(){},a=e.before||null,i=e.after||null;if(e.async=!0,e.type=e.type||"GET",e.data=e.data||"",e["content-type"]=e["content-type"]||"application/json; charset=utf-8","GET"===e.type&&e.data&&(e.url=/\?/.test(e.url)?e.url+"&"+e.data:e.url+"?"+e.data),e.withCredentials&&(n.withCredentials=!0),a&&"function"==typeof a&&a(),n.open(e.type,e.url,e.async),!t(e.data)){var c=new FormData;for(var s in e.data)c.append(s,e.data[s]);e.data=c}r&&"function"==typeof r&&n.upload.addEventListener("progress",function(t){var e=parseInt(t.loaded/t.total*100);r(e)},!1),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onreadystatechange=function(){4===n.readyState&&(200===n.status?o(n.responseText):u(n.responseText),i&&"function"==typeof i&&i())},n.send(e.data)}}}}()}])})},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(1);t.exports=function(t){var e=null;t.input=null,t.init=function(r){if(!r.url)return void console.log("Can't send request because `url` is missed");e=r;var o=document.createElement("INPUT");o.type="file",e&&e.multiple&&o.setAttribute("multiple","multiple"),e&&e.accept&&o.setAttribute("accept",e.accept),o.addEventListener("change",u,!1),t.input=o,n()};var n=function(){t.input.click()},u=function(){var n=e.url,u=e.data,a=e.before,i=e.progress,c=e.success,s=e.error,l=e.after,f=new FormData,p=t.input.files;if(p.length>1)for(var d=0;d<p.length;d++)f.append("files[]",p[d],p[d].name);else f.append("files",p[0],p[0].name);if(null!==u&&"object"===(void 0===u?"undefined":r(u)))for(var y in u)f.append(y,u[y]);o.call({type:"POST",data:f,url:n,before:a,progress:i,success:c,error:s,after:l})};return t}({})},function(t,e,n){!function(e,n){t.exports=function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";t.exports=function(){var t=function(t){return t instanceof FormData};return{call:function(e){if(e&&e.url){var n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),r=e.progress||null,o=e.success||function(){},u=e.error||function(){},a=e.before||null,i=e.after||null;if(e.async=!0,e.type=e.type||"GET",e.data=e.data||"",e["content-type"]=e["content-type"]||"application/json; charset=utf-8","GET"===e.type&&e.data&&(e.url=/\?/.test(e.url)?e.url+"&"+e.data:e.url+"?"+e.data),e.withCredentials&&(n.withCredentials=!0),a&&"function"==typeof a&&a(),n.open(e.type,e.url,e.async),!t(e.data)){var c=new FormData;for(var s in e.data)c.append(s,e.data[s]);e.data=c}r&&"function"==typeof r&&n.upload.addEventListener("progress",function(t){var e=parseInt(t.loaded/t.total*100);r(e)},!1),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.onreadystatechange=function(){4===n.readyState&&(200===n.status?o(n.responseText):u(n.responseText),i&&"function"==typeof i&&i())},n.send(e.data)}}}}()}])}()}()}])})},function(t,e,n){"use strict";var r={uploadUrl:"/upload",uploadFileButton:"uploadFileButton",uploadLinkField:"uploadLinkField",init:function(){var t=document.getElementById(r.uploadFileButton),e=document.getElementById(r.uploadLinkField);t&&t.addEventListener("click",r.chooseFile,!1),e&&e.addEventListener("keydown",r.enterLink,!1)},enterLink:function(t){if(13===t.keyCode){t.preventDefault();var e=this;e&&e.value&&capella.ajax.call({type:"POST",url:r.uploadUrl,data:{link:e.value},before:function(){},progress:function(t){console.log(t+"%")},success:function(t){t=JSON.parse(t),console.log(t)},error:function(t){t=JSON.parse(t),console.log(t)},after:function(){}})}},chooseFile:function(){capella.transport.init({url:r.uploadUrl,multiple:!1,accept:"image/*",data:{},before:function(){},progress:function(t){console.log(t+"%")},success:function(t){t=JSON.parse(t),console.log(t)},error:function(t){t=JSON.parse(t),console.log(t)},after:function(){}})}};t.exports={init:r.init}}]);
//# sourceMappingURL=bundle.js.map