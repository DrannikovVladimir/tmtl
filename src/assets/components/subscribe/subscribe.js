function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return i};var u,i={},t=Object.prototype,s=t.hasOwnProperty,l=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(u){a=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,a,i,c,e=e&&e.prototype instanceof v?e:v,e=Object.create(e.prototype),n=new S(n||[]);return l(e,"_invoke",{value:(o=t,a=r,i=n,c=h,function(t,e){if(c===p)throw Error("Generator is already running");if(c===m){if("throw"===t)throw e;return{value:u,done:!0}}for(i.method=t,i.arg=e;;){var r=i.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(o===u)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=u,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;n=f(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,d;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=u),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}(r,i);if(r){if(r===d)continue;return r}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(c===h)throw c=m,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c=p;r=f(o,a,i);if("normal"===r.type){if(c=i.done?m:y,r.arg===d)continue;return{value:r.arg,done:i.done}}"throw"===r.type&&(c=m,i.method="throw",i.arg=r.arg)}})}),e}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}i.wrap=c;var h="suspendedStart",y="suspendedYield",p="executing",m="completed",d={};function v(){}function b(){}function g(){}var e={},_=(a(e,n,function(){return this}),Object.getPrototypeOf),_=_&&_(_(T([]))),w=(_&&_!==t&&s.call(_,n)&&(e=_),g.prototype=v.prototype=Object.create(e));function E(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function L(i,c){var e;l(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var a,t=f(i[t],i,r);if("throw"!==t.type)return(r=(a=t.arg).value)&&"object"==_typeof(r)&&s.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(e){if(e||""===e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=u,t.done=!0,t}).next=t}throw new TypeError(_typeof(e)+" is not iterable")}return l(w,"constructor",{value:b.prototype=g,configurable:!0}),l(g,"constructor",{value:b,configurable:!0}),b.displayName=a(g,o,"GeneratorFunction"),i.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,a(t,o,"GeneratorFunction")),t.prototype=Object.create(w),t},i.awrap=function(t){return{__await:t}},E(L.prototype),a(L.prototype,r,function(){return this}),i.AsyncIterator=L,i.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var a=new L(c(t,e,r,n),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(w),a(w,o,"Generator"),a(w,n,function(){return this}),a(w,"toString",function(){return"[object Generator]"}),i.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return a.type="throw",a.arg=r,n.next=t,e&&(n.method="next",n.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var a=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,R(o)),n}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),d}},i}function asyncGeneratorStep(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,i=arguments;return new Promise(function(e,r){var n=c.apply(t,i);function o(t){asyncGeneratorStep(n,e,r,o,a,"next",t)}function a(t){asyncGeneratorStep(n,e,r,o,a,"throw",t)}o(void 0)})}}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(r="Object"===(r={}.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function _iterableToArrayLimit(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}function _arrayWithHoles(t){if(Array.isArray(t))return t}var subscribeContainer=ReactDOM.createRoot(document.getElementById("subscribe-container")),Subscribe=function(){var t=_slicedToArray(React.useState(""),2),o=t[0],a=t[1],t=_slicedToArray(React.useState(""),2),e=t[0],i=t[1],t=_slicedToArray(React.useState(!1),2),r=t[0],c=t[1],t=_slicedToArray(React.useState(!1),2),n=t[0],u=t[1],t=(()=>{var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var r,n;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),c(!0),i(""),u(!1),t.prev=4,t.next=7,fetch("/api/sub",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o})});case 7:return r=t.sent,t.next=10,r.json();case 10:n=t.sent,r.ok?(i(n.message),a(""),u(!0)):i(n.message||"Произошла ошибка при отправке."),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),i("Произошла ошибка при отправке. Пожалуйста, попробуйте позже.");case 17:return t.prev=17,c(!1),t.finish(17);case 20:case"end":return t.stop()}},t,null,[[4,14,17,20]])}));return function(t){return e.apply(this,arguments)}})();return React.createElement("section",{className:"subs"},React.createElement("div",{className:"subs__inner-wrapper"},React.createElement("div",{className:"subs__container"},React.createElement("div",{className:"subs__content"},React.createElement("h2",{className:"visually-hidden"},"Подписка на актуальные новости, горящие туры и эксключивные предложения"),React.createElement("p",{className:"subs__subtitle"},n?e:React.createElement(React.Fragment,null,"Хотите получить эксклюзивный ",React.createElement("strong",null,'"Путеводитель по популярным курортам"'),"?"," ","Подпишитесь на рассылку и мы пришлём его в течении 2 минут!")),React.createElement("form",{className:"subs__form form-subs",onSubmit:t},React.createElement("div",{className:"form-subs__wrapper"},React.createElement("label",{className:"visually-hidden",htmlFor:"emailInput"},"Введите свою почту:"),React.createElement("input",{type:"email",className:"form-subs__input",name:"emailInput",id:"emailInput",value:o,onChange:function(t){return a(t.target.value)},required:!0}),React.createElement("button",{type:"submit",className:"subs__button",disabled:r},React.createElement("span",{className:"visually-hidden"},r?"Отправка...":"Подписаться на рассылку"),React.createElement("span",{"aria-hidden":"true"},r?"Отправка...":"Подписаться на рассылку")))),!n&&e&&React.createElement("p",{className:"subs__error-message"},e)))))};subscribeContainer.render(React.createElement(Subscribe,null));