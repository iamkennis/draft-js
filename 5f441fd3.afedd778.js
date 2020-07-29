/*! For license information please see 5f441fd3.afedd778.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),i=(n(181),n(180)),a={id:"advanced-topics-text-direction",title:"Text Direction"},u={id:"advanced-topics-text-direction",title:"Text Direction",description:"Facebook supports dozens of languages, which means that our text inputs need",source:"@site/../docs/Advanced-Topics-Text-Direction.md",permalink:"/docs/advanced-topics-text-direction",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Text-Direction.md",lastUpdatedBy:"Kevin Chavez",lastUpdatedAt:1587586134,sidebar:"docs",previous:{title:"Nested Lists",permalink:"/docs/advanced-topics-nested-lists"},next:{title:"EditorState Race Conditions",permalink:"/docs/advanced-topics-editorstate-race-conditions"}},c=[{value:"Text Alignment",id:"text-alignment",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Facebook supports dozens of languages, which means that our text inputs need\nto be flexible enough to handle considerable variety."),Object(i.b)("p",null,"For example, we want input behavior for RTL languages such as Arabic and Hebrew\nto meet users' expectations. We also want to be able to support editor contents\nwith a mixture of LTR and RTL text."),Object(i.b)("p",null,"To that end, Draft uses a bidi algorithm to determine appropriate\ntext alignment and direction on a per-block basis."),Object(i.b)("p",null,"Text is rendered with an LTR or RTL direction automatically as the user types.\nYou should not need to do anything to set direction yourself."),Object(i.b)("h2",{id:"text-alignment"},"Text Alignment"),Object(i.b)("p",null,"While languages are automatically aligned to the left or right during composition,\nas defined by the content characters, it is also possible for engineers to\nmanually set the text alignment for an editor's contents."),Object(i.b)("p",null,"This may be useful, for instance, if an editor requires strictly centered\ncontents, or needs to keep text aligned flush against another UI element."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Editor")," component therefore provides a ",Object(i.b)("inlineCode",{parentName:"p"},"textAlignment")," prop, with a\nsmall set of values: ",Object(i.b)("inlineCode",{parentName:"p"},"'left'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'center'"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"'right'"),". Using these values,\nthe contents of your editor will be aligned to the specified direction regardless\nof language and character set."))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,y=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?o.a.createElement(y,u(u({ref:t},l),{},{components:n})):o.a.createElement(y,u({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e,t,n,r,o,i,a,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,u],l=0;(e=Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function x(){}function k(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=w.prototype;var S=k.prototype=new x;S.constructor=k,r(S,w.prototype),S.isPureReactComponent=!0;var P={current:null},_={current:null},C=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,r)&&!T.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:u,props:o,_owner:_.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var $=/\/+/g,A=[];function D(e,t,n,r){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function L(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case a:c=!0}}if(c)return r(o,t,""===n?"."+U(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+U(u=t[l],l);c+=e(u,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(u=t.next()).done;)c+=e(u=u.value,s=n+U(u,l++),r,o);else"object"===u&&g("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace($,"$&/")+"/"),L(e,I,t=D(t,i,r,o)),N(t)}function q(){var e=P.current;return null===e&&g("307"),e}var z={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;L(e,M,t=D(null,null,t,n)),N(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return R(e)||g("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,n){return q().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,n){return q().useReducer(e,t,n)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:u,StrictMode:c,Suspense:y,createElement:E,cloneElement:function(e,t,n){null==e&&g("267",e);var o=void 0,a=r({},e.props),u=e.key,c=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,l=_.current),void 0!==t.key&&(u=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)C.call(t,o)&&!T.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];a.children=s}return{$$typeof:i,type:e.type,key:u,ref:c,props:a,_owner:l}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:R,version:"16.8.4",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentOwner:_,assign:r}},V={default:z},B=V&&z||V;e.exports=B.default||B},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,u,c=a(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(c[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(c[u[f]]=n[u[f]])}}return c}}}]);