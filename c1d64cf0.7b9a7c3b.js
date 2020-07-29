/*! For license information please see c1d64cf0.7b9a7c3b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),i=(n(181),n(180)),a={id:"advanced-topics-managing-focus",title:"Managing Focus"},c={id:"advanced-topics-managing-focus",title:"Managing Focus",description:"Managing text input focus can be a tricky task within React components. The browser",source:"@site/../docs/Advanced-Topics-Managing-Focus.md",permalink:"/docs/advanced-topics-managing-focus",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Managing-Focus.md",lastUpdatedBy:"Kevin Chavez",lastUpdatedAt:1587586134,sidebar:"docs",previous:{title:"Key Bindings",permalink:"/docs/advanced-topics-key-bindings"},next:{title:"Block Styling",permalink:"/docs/advanced-topics-block-styling"}},u=[{value:"Translating container clicks to focus",id:"translating-container-clicks-to-focus",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Managing text input focus can be a tricky task within React components. The browser\nfocus/blur API is imperative, so setting or removing focus via declarative means\npurely through ",Object(i.b)("inlineCode",{parentName:"p"},"render()")," tends to feel awkward and incorrect, and it requires\nchallenging attempts at controlling focus state."),Object(i.b)("p",null,"With that in mind, at Facebook we often choose to expose ",Object(i.b)("inlineCode",{parentName:"p"},"focus()")," methods\non components that wrap text inputs. This breaks the declarative paradigm,\nbut it also simplifies the work needed for engineers to successfully manage\nfocus behavior within their apps."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Editor")," component follows this pattern, so there is a public ",Object(i.b)("inlineCode",{parentName:"p"},"focus()"),"\nmethod available on the component. This allows you to use a ref within your\nhigher-level component to call ",Object(i.b)("inlineCode",{parentName:"p"},"focus()")," directly on the component when needed."),Object(i.b)("p",null,"The event listeners within the component will observe focus changes and\npropagate them through ",Object(i.b)("inlineCode",{parentName:"p"},"onChange")," as expected, so state and DOM will remain\ncorrectly in sync."),Object(i.b)("h2",{id:"translating-container-clicks-to-focus"},"Translating container clicks to focus"),Object(i.b)("p",null,"Your higher-level component will most likely wrap the ",Object(i.b)("inlineCode",{parentName:"p"},"Editor")," component in a\ncontainer of some kind, perhaps with padding to style it to match your app."),Object(i.b)("p",null,"By default, if a user clicks within this container but outside of the rendered\n",Object(i.b)("inlineCode",{parentName:"p"},"Editor")," while attempting to focus the editor, the editor will have no awareness\nof the click event. It is therefore recommended that you use a click listener\non your container component, and use the ",Object(i.b)("inlineCode",{parentName:"p"},"focus()")," method described above to\napply focus to your editor."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/plaintext"}),"plaintext editor example"),",\nfor instance, uses this pattern."))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,y=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?o.a.createElement(y,c(c({ref:t},l),{},{components:n})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e,t,n,r,o,i,a,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,c],l=0;(e=Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function j(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||O}function k(){}function x(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=j.prototype;var S=x.prototype=new k;S.constructor=x,r(S,j.prototype),S.isPureReactComponent=!0;var C={current:null},P={current:null},_=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r=void 0,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:P.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var R=/\/+/g,M=[];function N(e,t,n,r){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case i:case a:u=!0}}if(u)return r(o,t,""===n?"."+F(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+F(c=t[l],l);u+=e(c,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(c=t.next()).done;)u+=e(c=c.value,s=n+F(c,l++),r,o);else"object"===c&&g("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(R,"$&/")+"/"),D(e,U,t=N(t,i,r,o)),A(t)}function B(){var e=C.current;return null===e&&g("307"),e}var L={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,I,t=N(null,null,t,n)),A(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){return $(e)||g("143"),e}},createRef:function(){return{current:null}},Component:j,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return B().useCallback(e,t)},useContext:function(e,t){return B().useContext(e,t)},useEffect:function(e,t){return B().useEffect(e,t)},useImperativeHandle:function(e,t,n){return B().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return B().useLayoutEffect(e,t)},useMemo:function(e,t){return B().useMemo(e,t)},useReducer:function(e,t,n){return B().useReducer(e,t,n)},useRef:function(e){return B().useRef(e)},useState:function(e){return B().useState(e)},Fragment:c,StrictMode:u,Suspense:y,createElement:T,cloneElement:function(e,t,n){null==e&&g("267",e);var o=void 0,a=r({},e.props),c=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=P.current),void 0!==t.key&&(c=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)_.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];a.children=s}return{$$typeof:i,type:e.type,key:c,ref:u,props:a,_owner:l}},createFactory:function(e){var t=T.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.4",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentOwner:P,assign:r}},V={default:L},z=V&&L||V;e.exports=z.default||z},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,u=a(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(u[s]=n[s]);if(r){c=r(n);for(var f=0;f<c.length;f++)i.call(n,c[f])&&(u[c[f]]=n[c[f]])}}return u}}}]);