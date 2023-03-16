"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5827],{3905:function(t,a,e){e.d(a,{Zo:function(){return v},kt:function(){return k}});var r=e(67294);function s(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function w(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?w(Object(e),!0).forEach(function(a){s(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}var n=r.createContext({}),c=function(t){var a,e=r.useContext(n),s=e;return t&&(s="function"==typeof(a=t)?t(e):l(l({},e),t)),s},v=function(t){var a=c(t.components);return r.createElement(n.Provider,{value:a},t.children)},o={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef(function(t,a){var e=t.components,s=t.mdxType,w=t.originalType,n=t.parentName,v=function(t,a){if(null==t)return{};var e,r,s=function(t,a){if(null==t)return{};var e,r,s={},w=Object.keys(t);for(r=0;r<w.length;r++)e=w[r],a.indexOf(e)>=0||(s[e]=t[e]);return s}(t,a);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(t);for(r=0;r<w.length;r++)e=w[r],!(a.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}(t,["components","mdxType","originalType","parentName"]),y=c(e),k=y["".concat(n,".").concat(s)]||y[s]||o[s]||w;return e?r.createElement(k,l(l({ref:a},v),{},{components:e})):r.createElement(k,l({ref:a},v))});function k(t,a){var e=arguments,s=a&&a.mdxType;if("string"==typeof t||s){var w=e.length,l=Array(w);l[0]=y;var n={};for(var c in a)hasOwnProperty.call(a,c)&&(n[c]=a[c]);n.originalType=t,n.mdxType="string"==typeof t?t:s,l[1]=n;for(var v=2;v<w;v++)l[v]=e[v];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}y.displayName="MDXCreateElement"},33594:function(t,a,e){e.d(a,{EL:function(){return v}});var r,s=e(67294),w=["bottom","height","left","right","top","width"],l=new Map,n=function t(){var a=[];l.forEach(function(t,e){var r,s,l=e.getBoundingClientRect();r=l,s=t.rect,void 0===r&&(r={}),void 0===s&&(s={}),w.some(function(t){return r[t]!==s[t]})&&(t.rect=l,a.push(t))}),a.forEach(function(t){t.callbacks.forEach(function(a){return a(t.rect)})}),r=window.requestAnimationFrame(t)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function v(t,a,e){"boolean"==typeof(w=a)?o=a:(o=null==(k=null==a?void 0:a.observe)||k,y=null==a?void 0:a.onChange),(v=e)&&"[object Function]"==({}).toString.call(v)&&(y=e);var w,v,o,y,k,x=(0,s.useState)(t.current),f=x[0],u=x[1],i=(0,s.useRef)(!1),m=(0,s.useRef)(!1),X=(0,s.useState)(null),Y=X[0],p=X[1],b=(0,s.useRef)(y);return c(function(){b.current=y,t.current!==f&&u(t.current)}),c(function(){f&&!i.current&&(i.current=!0,p(f.getBoundingClientRect()))},[f]),c(function(){if(o){var a=f;if(m.current||(m.current=!0,a=t.current),a){var e,s,w=(e=a,s=function(t){null==b.current||b.current(t),p(t)},{observe:function(){var t=0===l.size;l.has(e)?l.get(e).callbacks.push(s):l.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),t&&n()},unobserve:function(){var t=l.get(e);if(t){var a=t.callbacks.indexOf(s);a>=0&&t.callbacks.splice(a,1),t.callbacks.length||l.delete(e),l.size||cancelAnimationFrame(r)}}});return w.observe(),function(){w.unobserve()}}}},[o,f,t]),Y}},25616:function(t,a){a.Z={".scale-0":{"--tw-scale-x":"0","--tw-scale-y":"0",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-50":{"--tw-scale-x":".5","--tw-scale-y":".5",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-75":{"--tw-scale-x":".75","--tw-scale-y":".75",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-90":{"--tw-scale-x":".9","--tw-scale-y":".9",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-95":{"--tw-scale-x":".95","--tw-scale-y":".95",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-100":{"--tw-scale-x":"1","--tw-scale-y":"1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-105":{"--tw-scale-x":"1.05","--tw-scale-y":"1.05",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-110":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-125":{"--tw-scale-x":"1.25","--tw-scale-y":"1.25",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-150":{"--tw-scale-x":"1.5","--tw-scale-y":"1.5",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-x-0":{"--tw-scale-x":"0",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-x-50":{"--tw-scale-x":".5",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-x-75":{"--tw-scale-x":".75",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-x-90":{"--tw-scale-x":".9",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-x-95":{"--tw-scale-x":".95",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-x-100":{"--tw-scale-x":"1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-x-105":{"--tw-scale-x":"1.05",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-x-110":{"--tw-scale-x":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-x-125":{"--tw-scale-x":"1.25",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-x-150":{"--tw-scale-x":"1.5",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-y-0":{"--tw-scale-y":"0",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-y-50":{"--tw-scale-y":".5",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-y-75":{"--tw-scale-y":".75",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-y-90":{"--tw-scale-y":".9",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-y-95":{"--tw-scale-y":".95",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-y-100":{"--tw-scale-y":"1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-y-105":{"--tw-scale-y":"1.05",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-y-110":{"--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-y-125":{"--tw-scale-y":"1.25",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"},".scale-y-150":{"--tw-scale-y":"1.5",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}},29815:function(t,a,e){e.d(a,{Z:function(){return l}});var r=e(20943),s=e(13375),w=e(91566);function l(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||(0,s.Z)(t)||(0,w.Z)(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);