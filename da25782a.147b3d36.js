(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{167:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),a=t(10),i=(t(0),t(206)),o={id:"uth-bridge-concept",title:"Bridge concept"},c={id:"uth-bridge-concept",title:"Bridge concept",description:"To make use of any schema, uniforms have to create a _bridge_ of it - a unified schema mapper. A bridge is (preferably) a subclass of `Bridge`, implementing static `check(schema)` method and these instance methods:",source:"@site/../docs/uth-bridge-concept.md",permalink:"/docs/uth-bridge-concept",sidebar:"docs",previous:{title:"Autofield algorithm",permalink:"/docs/uth-autofield-algorithm"}},l=[],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To make use of any schema, uniforms have to create a ",Object(i.b)("em",{parentName:"p"},"bridge")," of it - a unified schema mapper. A bridge is (preferably) a subclass of ",Object(i.b)("inlineCode",{parentName:"p"},"Bridge"),", implementing static ",Object(i.b)("inlineCode",{parentName:"p"},"check(schema)")," method and these instance methods:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getError(name, error)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getErrorMessage(name, error)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getErrorMessages(error)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getField(name)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getInitialValue(name, props)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getProps(name, props)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getSubfields(name)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getType(name)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getValidator(options)"))),Object(i.b)("p",null,'Bridge is a kind of abstract class, which should be extended to create custom bridges.\nIt implements all of the required methods and throws an error with meaningful "method not implemented" error.'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { Bridge } from 'uniforms';\n\nclass CustomBridge extends Bridge {\n  // Check, if this bridge is compatibile with given schema.\n  static check(schema) {\n    /* ... */\n  }\n\n  // Field's scoped error.\n  getError(name, error) {\n    /* ... */\n  }\n\n  // Field's scoped error message.\n  getErrorMessage(name, error) {\n    /* ... */\n  }\n\n  // All error messages from error.\n  getErrorMessages(error) {\n    /* ... */\n  }\n\n  // Field's definition (`field` prop).\n  getField(name) {\n    /* ... */\n  }\n\n  // Field's initial value.\n  getInitialValue(name) {\n    /* ... */\n  }\n\n  // Field's props.\n  getProps(name) {\n    /* ... */\n  }\n\n  // Field's subfields (or first-level fields).\n  getSubfields(name) {\n    /* ... */\n  }\n\n  // Field's type (ex. Number, String).\n  getType(name) {\n    /* ... */\n  }\n\n  // Function with one argument - model - which throws errors when model is\n  // invalid.\n  getValidator(options) {\n    /* ... */\n  }\n}\n")))}p.isMDXComponent=!0},206:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},m=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=r,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return t?a.a.createElement(d,c({ref:n},s,{components:t})):a.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);