!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r;window,r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var r=/<title>(.+)<\/title>/,o=/\?([\w_\-.=&]+)/,i=/(#.*)$/,u=/(https?:\/\/[\w\-.]+)/,a=/https?:\/\/.*?(\/[\w_\-./]+)/;function f(e){var t=e.match(u);return t?t[1]:null}function c(e){var t=e.match(a);return t?t[1]:null}function s(e){var t=e.match(i);return t?t[1]:null}function l(e){var t=e.match(o);if(!t)return null;for(var n=t[1].split("&"),r={},i=0;i<n.length;i++){var u=n[i].split("="),a=u[0],f=u[1];r[a]=f}return r}function p(e){var t=document.createElement("div");return t.innerHTML=e,t.querySelector("[router-view]")}function h(e){return p(e).getAttribute("router-view")}e.exports={getSlug:h,getView:p,getInfos:function(e){return{url:e,anchor:s(e),origin:f(e),params:l(e),pathname:c(e)}},getTitle:function(e){var t=e.match(r);return t?t[1]:""},getParam:function(e,t){var n=l(e);return n.hasOwnProperty(t)?n[t]:null},getParams:l,getOrigin:f,getAnchor:s,getPathname:c,getRenderer:function(e,t){var n=h(e);return t.hasOwnProperty(n)?t[n]:null},getTransition:function(e,t){if(void 0===t)return null;var n=h(e);return t.hasOwnProperty(n)&&t[n]?t[n]:t.hasOwnProperty("default")?t.default:null}}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=t,this.title=n,this.transition=r,n&&document.title!==n&&(document.title=n),this.wrapper=null}return r(e,[{key:"show",value:function(){var e=this;return new Promise(function(t){e.wrapper=document.querySelector("[router-wrapper]"),e.wrapper.appendChild(e.view),e.onEnter&&e.onEnter();var n=function(){e.onEnterCompleted&&e.onEnterCompleted(),t()};e.transition?e.transition.in(e.view,n):n()})}},{key:"hide",value:function(){var e=this;return new Promise(function(t){e.wrapper=e.view.parentNode,e.onLeave&&e.onLeave();var n=function(){e.wrapper.removeChild(e.view),e.onLeaveCompleted&&e.onLeaveCompleted(),t()};e.transition?e.transition.out(e.view,n):n()})}}]),e}();e.exports=o},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,u=r.length;i<u;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=n},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(2)),i=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var a={mode:"same-origin",method:"GET",headers:{"X-Requested-With":"XMLHttpRequest"},credentials:"same-origin"},f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n.renderers=e.renderers,n.transitions=e.transitions,n.state={},n.cache={},n.navigating=!1,n.page=document.documentElement.outerHTML,n.pathname=i.default.getPathname(window.location.href),n.cache[n.pathname]=n.page;var r=document.querySelector("[router-view]"),o=i.default.getTransition(n.page,n.transitions);return n.from=new(i.default.getRenderer(n.page,n.renderers))(r,null,o),n.from.onEnter(),n.from.onEnterCompleted(),window.addEventListener("popstate",n.popState.bind(n)),n.bubble(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),r(t,[{key:"bubble",value:function(){var e=this;document.addEventListener("click",function(t){if("A"===t.target.tagName){var n=i.default.getAnchor(t.target.href),r=i.default.getPathname(t.target.href);t.target.target||(t.preventDefault(),e.navigating||r===e.pathname?n&&(window.location.href=t.target.href):e.pushState(t))}})}},{key:"popState",value:function(){i.default.getPathname(window.location.href)!==this.pathname&&this.beforeFetch(window.location.href,!1)}},{key:"pushState",value:function(e){this.beforeFetch(e.target.href,!0)}},{key:"beforeFetch",value:function(e,t){var n=this;if(this.state=i.default.getInfos(e),this.pathname=i.default.getPathname(e),this.cache.hasOwnProperty(this.pathname))return this.push(this.cache[this.pathname]),void(t&&window.history.pushState(this.state,"",this.state.url));this.fetch().then(function(e){t&&window.history.pushState(n.state,"",n.state.url),n.push(e)})}},{key:"fetch",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=this;return this.navigating=!0,fetch(this.state.url,a).then(function(t){if(t.status>=200&&t.status<300)return t.text();throw e.emit("NAVIGATE_ERROR"),new Error(t.statusText)})})},{key:"push",value:function(e){var t=this;this.cache[this.pathname]=e;var n=i.default.getView(e),r=i.default.getTitle(e),o=i.default.getTransition(e,this.transitions);this.to=new(i.default.getRenderer(e,this.renderers))(n,r,o);var u=this.from.view,a=this.to.view;this.emit("NAVIGATE_START",u,a,r,this.state),this.from.hide().then(function(){t.to.show().then(function(){t.navigating=!1,t.from=t.to,i.default.getAnchor(t.state.url)&&t.scrollTo(i.default.getAnchor(t.state.url)),t.emit("NAVIGATE_END",u,a,r,t.state)}),window.scrollTo(0,0)})}},{key:"scrollTo",value:function(e){var t=document.querySelector(e);t&&window.scrollTo(t.offsetLeft,t.offsetTop)}}]),t}();e.exports=f},function(e,t,n){"use strict";var r=u(n(3)),o=u(n(0)),i=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}var a={Core:r.default,Helpers:o.default,Renderer:i.default};e.exports=a}])},e.exports=r()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={in:function(e,t){e.classList.add("fade-in"),e.addEventListener("animationend",t)},out:function(e,t){e.classList.add("fade-out"),e.addEventListener("animationend",t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),u=(r=i)&&r.__esModule?r:{default:r};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Renderer),o(t,[{key:"onEnter",value:function(){}},{key:"onLeave",value:function(){}},{key:"onEnterCompleted",value:function(){}},{key:"onLeaveCompleted",value:function(){}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),u=(r=i)&&r.__esModule?r:{default:r};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Renderer),o(t,[{key:"onEnter",value:function(){}},{key:"onLeave",value:function(){}},{key:"onEnterCompleted",value:function(){}},{key:"onLeaveCompleted",value:function(){}}]),t}();t.default=a},function(e,t,n){"use strict";var r=a(n(0)),o=a(n(3)),i=a(n(2)),u=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}new r.default.Core({renderers:{home:o.default,page:i.default},transitions:{home:u.default,page:u.default}})}]);