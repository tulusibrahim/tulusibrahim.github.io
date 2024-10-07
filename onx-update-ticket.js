/*! For license information please see onx-update-ticket.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,t){var r={},n={};return Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){n.default=e.default}],execute:function(){e((()=>{var e={513:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in a=Object(arguments[u]))r.call(a,l)&&(c[l]=a[l]);if(t){i=t(a);for(var s=0;s<i.length;s++)n.call(a,i[s])&&(c[i[s]]=a[i[s]])}}return c}},335:(e,t,r)=>{"use strict";r(513);var n=r(726),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var n,a={},l=null,s=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:s,props:a,_owner:i.current}}},85:(e,t,r)=>{"use strict";e.exports=r(335)},173:(e,t,r)=>{const n=r(921).y;t.w=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},921:(e,t,r)=>{t.y=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,a=n.length;o!==t&&a>=0;)"/"===n[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=n.slice(0,a+1);return r.protocol+"//"+r.host+i};Number.isInteger},726:e=>{"use strict";e.exports=r},867:e=>{"use strict";e.exports=n}},o={};function a(t){var r=o[t];if(void 0!==r)return r.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.y=t,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var i={};return(0,a(173).w)(1),(()=>{"use strict";a.r(i),a.d(i,{bootstrap:()=>M,mount:()=>N,unmount:()=>I});var e=a(726),t=a(867);function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var r;if("function"!=typeof(r=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var r="single-spa-application:".concat(t);return function(){var e=document.getElementById(r);return e||((e=document.createElement("div")).id=r,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(u(r)));return function(){var e=r(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(u(e)));return e}}var s=null;try{s=require("react").createContext()}catch(r){}var p={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function f(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function m(e,t){return new Promise((function(r,n){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=h(e,t,(function(){r(this)})),a=l(e,t)(),i=function(e){var t=e.opts,r=e.elementToRender,n=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](n);return a.render(r),a}return"hydrate"===o?t.ReactDOM.hydrate(r,n):t.ReactDOM.render(r,n),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function d(e,t){return new Promise((function(r){e.unmountFinished=r;var n=e.renderResults[t.name];n&&n.unmount?n.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function y(e,t){return new Promise((function(r){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(r);var n=h(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(n);else{var a=l(e,t)();e.ReactDOM.render(n,a)}}))}function h(e,t,r){var o=e.React.createElement(e.rootComponent,t),a=s?e.React.createElement(s.Provider,{value:t},o):o;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function r(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},r.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return r.prototype=Object.create(e.React.Component.prototype),r.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},r.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},r}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,n(n({},t),{},{mountFinished:r,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t,r){return(t=function(e){var t=function(e){if("object"!=b(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}(this,r)}}var D=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(n,e.Component);var t,r=C(n);function n(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),j(R(t=r.call(this,e)),"handleRef",(function(e){t.el=e})),j(R(t),"addThingToDo",(function(e,r){t.state.hasError&&"unmount"!==e||(t.nextThingToDo=(t.nextThingToDo||Promise.resolve()).then((function(){if(!t.unmounted||"unmount"===e)return r.apply(void 0,arguments)})).catch((function(r){throw t.nextThingToDo=Promise.resolve(),t.setState({hasError:!0}),r&&r.message&&(r.message="During '".concat(e,"', parcel threw an error: ").concat(r.message)),t.props.handleError?t.props.handleError(r):setTimeout((function(){throw r})),r})))})),j(R(t),"getParcelProps",(function(){var e=E(E({},t.props),{},{domElement:t.el});return delete e.mountParcel,delete e.config,delete e.wrapWith,delete e.wrapStyle,delete e.appendTo,delete e.handleError,delete e.parcelDidMount,e})),t.state={hasError:!1},!e.config)throw new Error("single-spa-react's Parcel component requires the 'config' prop to either be a parcel config or a loading function that returns a promise. See https://github.com/single-spa/single-spa-react");return t}return(t=[{key:"componentDidMount",value:function(){var e=this;this.addThingToDo("mount",(function(){var t,r=e.props.mountParcel||e.mountParcel;if(!r)throw new Error("\n\t\t\t\t  <Parcel /> was not passed a mountParcel prop, nor is it rendered where mountParcel is within the React context.\n\t\t\t\t  If you are using <Parcel /> within a module that is not a single-spa application, you will need to import mountRootParcel from single-spa and pass it into <Parcel /> as a mountParcel prop\t\n\t\t\t\t");return e.el?t=e.el:(e.createdDomElement=t=document.createElement(e.props.wrapWith),Object.keys(e.props.wrapStyle).forEach((function(r){t.style[r]=e.props.wrapStyle[r]})),e.props.appendTo.appendChild(t)),e.parcel=r(e.props.config,E({domElement:t},e.getParcelProps())),e.parcel.mountPromise.then(e.props.parcelDidMount),e.parcel.mountPromise}))}},{key:"componentDidUpdate",value:function(){var e=this;this.addThingToDo("update",(function(){if(e.parcel&&e.parcel.update)return e.parcel.update(e.getParcelProps())}))}},{key:"componentWillUnmount",value:function(){var e=this;this.addThingToDo("unmount",(function(){if(e.parcel&&"MOUNTED"===e.parcel.getStatus())return e.parcel.unmount()})),this.createdDomElement&&this.createdDomElement.parentNode.removeChild(this.createdDomElement),this.unmounted=!0}},{key:"render",value:function(){var t=this;if(this.props.appendTo)return s&&s.Consumer?e.createElement(s.Consumer,null,(function(e){return t.mountParcel=e?e.mountParcel:null,null})):null;var r=s&&s.Consumer?e.createElement(s.Consumer,null,(function(e){return t.mountParcel=e?e.mountParcel:null,null})):void 0;return e.createElement(this.props.wrapWith,{ref:this.handleRef,style:this.props.wrapStyle,className:this.props.wrapClassName},r)}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(n.prototype,t),n}();j(D,"defaultProps",{wrapWith:"div",wrapStyle:{},parcelDidMount:function(){}});var T=window.CryptoJS,_=a(85);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=n(n({},p),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!s&&t.React.createContext&&(s=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var r={bootstrap:f.bind(null,t),mount:m.bind(null,t),unmount:d.bind(null,t)};return t.parcelCanUpdate&&(r.update=y.bind(null,t)),r}({React:e.default,ReactDOM:t.default,rootComponent:function(t){var r=function(){try{var e,t=decodeURIComponent(null===(e=window.location.search)||void 0===e?void 0:e.replace("?data=",""));if(""==t)return null;var r=(n=t,T.AES.decrypt(n,T.enc.Utf8.parse("bf3c199c2470cb477d907b1e0917c17b"),{iv:T.enc.Utf8.parse("5183666c72eec9e4"),padding:T.pad.Pkcs7,mode:T.mode.CBC}).toString(T.enc.Utf8));return JSON.parse(r)}catch(e){console.log("err getting query param",e)}var n}(),n=O((0,e.useState)(null),2),o=n[0],a=n[1],i=O((0,e.useState)(!0),2),c=i[0],u=i[1];return(0,e.useEffect)((function(){console.log("before hitttt 2222 3333",r),function(e){u(!0),axios.get("/service/ticket/detail/".concat(e,"?time=").concat((new Date).getMilliseconds())).then((function(t){u(!1),t&&a(k(k({},t.data),{},{ticketId_masking:e}))})).catch((function(){return u(!1)}))}(null==r?void 0:r.ticketid)}),[]),(0,_.jsx)(Antd.ConfigProvider,{theme:{token:{colorPrimary:"#3F3192",wireframe:!1}},children:(0,_.jsx)("div",{style:{padding:"0 2rem",overflowY:"auto",height:"100vh"},children:c?(0,_.jsx)("div",{style:{height:"100vh",width:"100vw",display:"grid",placeContent:"center"},children:(0,_.jsx)(Antd.Spin,{tip:"Loading..."})}):(0,_.jsx)(D,k({config:function(){return System.import("@onx/ticketing-form")},ticketActive:o,height:"88vh"},t))})})},errorBoundary:function(e,t,r){return null}}),M=B.bootstrap,N=B.mount,I=B.unmount})(),i})())}}}));
//# sourceMappingURL=onx-update-ticket.js.map