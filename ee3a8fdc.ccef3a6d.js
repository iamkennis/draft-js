/*! For license information please see ee3a8fdc.ccef3a6d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(181),n(180)),c={id:"advanced-topics-decorators",title:"Decorators"},i={id:"advanced-topics-decorators",title:"Decorators",description:"Inline and block styles aren't the only kind of rich styling that we might",source:"@site/../docs/Advanced-Topics-Decorators.md",permalink:"/docs/advanced-topics-decorators",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Decorators.md",lastUpdatedBy:"Kevin Chavez",lastUpdatedAt:1587586134,sidebar:"docs",previous:{title:"v0.10 API Migration",permalink:"/docs/v0-10-api-migration"},next:{title:"Key Bindings",permalink:"/docs/advanced-topics-key-bindings"}},l=[{value:"CompositeDecorator",id:"compositedecorator",children:[]},{value:"Decorator Components",id:"decorator-components",children:[{value:"Beyond CompositeDecorator",id:"beyond-compositedecorator",children:[]}]},{value:"Setting new decorators",id:"setting-new-decorators",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Inline and block styles aren't the only kind of rich styling that we might\nwant to add to our editor. The Facebook comment input, for example, provides\nblue background highlights for mentions and hashtags."),Object(a.b)("p",null,'To support flexibility for custom rich text, Draft provides a "decorator"\nsystem. The ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/tweet"}),"tweet example"),"\noffers a live example of decorators in action."),Object(a.b)("h2",{id:"compositedecorator"},"CompositeDecorator"),Object(a.b)("p",null,"The decorator concept is based on scanning the contents of a given\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-content-block"}),"ContentBlock"),"\nfor ranges of text that match a defined strategy, then rendering them\nwith a specified React component."),Object(a.b)("p",null,"You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"CompositeDecorator")," class to define your desired\ndecorator behavior. This class allows you to supply multiple ",Object(a.b)("inlineCode",{parentName:"p"},"DraftDecorator"),"\nobjects, and will search through a block of text with each strategy in turn."),Object(a.b)("p",null,"Decorators are stored within the ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," record. When creating a new\n",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object, e.g. via ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState.createEmpty()"),", a decorator may\noptionally be provided."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Under the hood"),Object(a.b)("p",{parentName:"blockquote"},"When contents change in a Draft editor, the resulting ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object\nwill evaluate the new ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," with its decorator, and identify ranges\nto be decorated. A complete tree of blocks, decorators, and inline styles is\nformed at this time, and serves as the basis for our rendered output."),Object(a.b)("p",{parentName:"blockquote"},"In this way, we always ensure that as contents change, rendered decorations\nare in sync with our ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState"),".")),Object(a.b)("p",null,'In the "Tweet" editor example, for instance, we use a ',Object(a.b)("inlineCode",{parentName:"p"},"CompositeDecorator")," that\nsearches for @-handle strings as well as hashtag strings:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const compositeDecorator = new CompositeDecorator([\n  {\n    strategy: handleStrategy,\n    component: HandleSpan,\n  },\n  {\n    strategy: hashtagStrategy,\n    component: HashtagSpan,\n  },\n]);\n")),Object(a.b)("p",null,"This composite decorator will first scan a given block of text for @-handle\nmatches, then for hashtag matches."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Note: these aren't very good regexes, don't use them!\nconst HANDLE_REGEX = /\\@[\\w]+/g;\nconst HASHTAG_REGEX = /\\#[\\w\\u0590-\\u05ff]+/g;\n\nfunction handleStrategy(contentBlock, callback, contentState) {\n  findWithRegex(HANDLE_REGEX, contentBlock, callback);\n}\n\nfunction hashtagStrategy(contentBlock, callback, contentState) {\n  findWithRegex(HASHTAG_REGEX, contentBlock, callback);\n}\n\nfunction findWithRegex(regex, contentBlock, callback) {\n  const text = contentBlock.getText();\n  let matchArr, start;\n  while ((matchArr = regex.exec(text)) !== null) {\n    start = matchArr.index;\n    callback(start, start + matchArr[0].length);\n  }\n}\n")),Object(a.b)("p",null,"The strategy functions execute the provided callback with the ",Object(a.b)("inlineCode",{parentName:"p"},"start")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"end")," values of the matching range of text."),Object(a.b)("h2",{id:"decorator-components"},"Decorator Components"),Object(a.b)("p",null,"For your decorated ranges of text, you must define a React component to use\nto render them. These tend to be plain ",Object(a.b)("inlineCode",{parentName:"p"},"span")," elements with CSS classes or\nstyles applied to them."),Object(a.b)("p",null,"In our current example, the ",Object(a.b)("inlineCode",{parentName:"p"},"CompositeDecorator")," object names ",Object(a.b)("inlineCode",{parentName:"p"},"HandleSpan")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"HashtagSpan")," as the components to use for decoration. These are basic\nstateless components:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const HandleSpan = props => {\n  return (\n    <span {...props} style={styles.handle}>\n      {props.children}\n    </span>\n  );\n};\n\nconst HashtagSpan = props => {\n  return (\n    <span {...props} style={styles.hashtag}>\n      {props.children}\n    </span>\n  );\n};\n")),Object(a.b)("p",null,"The Decorator Component will receive various pieces of metadata in ",Object(a.b)("inlineCode",{parentName:"p"},"props"),",\nincluding a copy of the ",Object(a.b)("inlineCode",{parentName:"p"},"contentState"),", the ",Object(a.b)("inlineCode",{parentName:"p"},"entityKey")," if there is one, and the\n",Object(a.b)("inlineCode",{parentName:"p"},"blockKey"),". For a full list of props supplied to a Decorator Component see the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecorator.js"}),"DraftDecoratorComponentProps type"),"."),Object(a.b)("p",null,"Note that ",Object(a.b)("inlineCode",{parentName:"p"},"props.children")," is passed through to the rendered output. This is\ndone to ensure that the text is rendered within the decorated ",Object(a.b)("inlineCode",{parentName:"p"},"span"),"."),Object(a.b)("p",null,"You can use the same approach for links, as demonstrated in our\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/link"}),"link example"),"."),Object(a.b)("h3",{id:"beyond-compositedecorator"},"Beyond CompositeDecorator"),Object(a.b)("p",null,"The decorator object supplied to an ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," need only match the expectations\nof the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js"}),"DraftDecoratorType"),"\nFlow type definition, which means that you can create any decorator classes\nyou wish, as long as they match the expected type -- you are not bound by\n",Object(a.b)("inlineCode",{parentName:"p"},"CompositeDecorator"),"."),Object(a.b)("h2",{id:"setting-new-decorators"},"Setting new decorators"),Object(a.b)("p",null,"Further, it is acceptable to set a new ",Object(a.b)("inlineCode",{parentName:"p"},"decorator")," value on the ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState"),"\non the fly, during normal state propagation, through immutable means."),Object(a.b)("p",null,"This means that during your app workflow, if your decorator becomes invalid or\nrequires a modification, you can create a new decorator object (or use\n",Object(a.b)("inlineCode",{parentName:"p"},"null")," to remove all decorations) and ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState.set()")," to make use of the new\ndecorator setting."),Object(a.b)("p",null,"For example, if for some reason we wished to disable the creation of @-handle\ndecorations while the user interacts with the editor, it would be fine to do the\nfollowing:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function turnOffHandleDecorations(editorState) {\n  const onlyHashtags = new CompositeDecorator([\n    {\n      strategy: hashtagStrategy,\n      component: HashtagSpan,\n    },\n  ]);\n  return EditorState.set(editorState, {decorator: onlyHashtags});\n}\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," for this ",Object(a.b)("inlineCode",{parentName:"p"},"editorState")," will be re-evaluated with the new\ndecorator, and @-handle decorations will no longer be present in the next\nrender pass."),Object(a.b)("p",null,"Again, this remains memory-efficient due to data persistence across immutable\nobjects."))}u.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.concurrent_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function g(e,t,n,r,o,a,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,c,i],s=0;(e=Error(t.replace(/%s/g,(function(){return l[s++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function j(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);g(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||O}function C(){}function k(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||O}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&j("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},C.prototype=w.prototype;var S=k.prototype=new C;S.constructor=k,r(S,w.prototype),S.isPureReactComponent=!0;var x={current:null},N={current:null},E=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r=void 0,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,r)&&!D.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:N.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,R=[];function A(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function H(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case c:l=!0}}if(l)return r(o,t,""===n?"."+I(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var u=n+I(i=t[s],s);l+=e(i,u,r,o)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=y&&t[y]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),s=0;!(i=t.next()).done;)l+=e(i=i.value,u=n+I(i,s++),r,o);else"object"===i&&j("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function B(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),H(e,q,t=A(t,a,r,o)),$(t)}function M(){var e=x.current;return null===e&&j("307"),e}var U={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;H(e,B,t=A(null,null,t,n)),$(t)},count:function(e){return H(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return T(e)||j("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return M().useCallback(e,t)},useContext:function(e,t){return M().useContext(e,t)},useEffect:function(e,t){return M().useEffect(e,t)},useImperativeHandle:function(e,t,n){return M().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return M().useLayoutEffect(e,t)},useMemo:function(e,t){return M().useMemo(e,t)},useReducer:function(e,t,n){return M().useReducer(e,t,n)},useRef:function(e){return M().useRef(e)},useState:function(e){return M().useState(e)},Fragment:i,StrictMode:l,Suspense:b,createElement:_,cloneElement:function(e,t,n){null==e&&j("267",e);var o=void 0,c=r({},e.props),i=e.key,l=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,s=N.current),void 0!==t.key&&(i=""+t.key);var u=void 0;for(o in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)E.call(t,o)&&!D.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==u?u[o]:t[o])}if(1===(o=arguments.length-2))c.children=n;else if(1<o){u=Array(o);for(var p=0;p<o;p++)u[p]=arguments[p+2];c.children=u}return{$$typeof:a,type:e.type,key:i,ref:l,props:c,_owner:s}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.8.4",unstable_ConcurrentMode:d,unstable_Profiler:s,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentOwner:N,assign:r}},L={default:U},X=L&&U||L;e.exports=X.default||X},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))o.call(n,u)&&(l[u]=n[u]);if(r){i=r(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(l[i[p]]=n[i[p]])}}return l}}}]);