(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5410],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c=a.createContext({}),i=function(e){var t,n=a.useContext(c),r=n;return e&&(r="function"==typeof(t=e)?e(n):o(o({},n),e)),r},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef(function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=function(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["components","mdxType","originalType","parentName"]),l=i(n),m=l["".concat(c,".").concat(r)]||l[r]||p[r]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))});function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=Array(s);o[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},33594:function(e,t,n){"use strict";n.d(t,{EL:function(){return u}});var a,r=n(67294),s=["bottom","height","left","right","top","width"],o=new Map,c=function e(){var t=[];o.forEach(function(e,n){var a,r,o=n.getBoundingClientRect();a=o,r=e.rect,void 0===a&&(a={}),void 0===r&&(r={}),s.some(function(e){return a[e]!==r[e]})&&(e.rect=o,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),a=window.requestAnimationFrame(e)},i="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect;function u(e,t,n){"boolean"==typeof(s=t)?p=t:(p=null==(m=null==t?void 0:t.observe)||m,l=null==t?void 0:t.onChange),(u=n)&&"[object Function]"==({}).toString.call(u)&&(l=n);var s,u,p,l,m,d=(0,r.useState)(e.current),f=d[0],b=d[1],g=(0,r.useRef)(!1),k=(0,r.useRef)(!1),N=(0,r.useState)(null),h=N[0],y=N[1],O=(0,r.useRef)(l);return i(function(){O.current=l,e.current!==f&&b(e.current)}),i(function(){f&&!g.current&&(g.current=!0,y(f.getBoundingClientRect()))},[f]),i(function(){if(p){var t=f;if(k.current||(k.current=!0,t=e.current),t){var n,r,s=(n=t,r=function(e){null==O.current||O.current(e),y(e)},{observe:function(){var e=0===o.size;o.has(n)?o.get(n).callbacks.push(r):o.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[r]}),e&&c()},unobserve:function(){var e=o.get(n);if(e){var t=e.callbacks.indexOf(r);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||o.delete(n),o.size||cancelAnimationFrame(a)}}});return s.observe(),function(){s.unobserve()}}}},[p,f,e]),h}},13783:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/browser-support",function(){return n(85046)}])},85046:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(99534);n(67294);var r=n(3905);n(41664);var s,o=n(5679),c=n(53339),i=n(74296),u={Layout:c.L,meta:{title:"Browser Support",description:"Understanding which browsers Tailwind supports and how to manage vendor prefixes."},slug:"browser-support",tableOfContents:[{title:"Vendor Prefixes",slug:"vendor-prefixes",children:[]}]},p=i.X_;function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)(p,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In general, Tailwind CSS v3.0 is designed for and tested on the latest stable versions of Chrome, Firefox, Edge, and Safari. It does not support any version of IE, including IE 11."),(0,r.kt)("p",null,"While most of the features in Tailwind CSS will work in all modern browsers, Tailwind also includes APIs for several bleeding-edge features that aren’t yet supported by all browsers, for example the ",(0,r.kt)("inlineCode",{parentName:"p"},":focus-visible")," pseudo-class and ",(0,r.kt)("inlineCode",{parentName:"p"},"backdrop-filter")," utilities."),(0,r.kt)("p",null,"Since Tailwind is such a low-level framework, it’s easy to avoid these features if you can’t use them by simply not using the utility or modifier that’s not supported, much like how you just wouldn’t use those CSS features in your CSS."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://caniuse.com/?search=focus-visible"}),"Can I Use")," database is a great resource when you’re unsure about the support for an unfamiliar CSS feature."),(0,r.kt)("hr",null),(0,r.kt)(o.X,{level:2,id:"vendor-prefixes",nextElement:{type:"paragraph"}},"Vendor Prefixes"),(0,r.kt)("p",null,"Many CSS properties require vendor prefixes to be understood by browsers, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"background-clip: text")," needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"-webkit")," prefix to work in most browsers:"),(0,r.kt)("pre",Object.assign({},{className:"language-css"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-css"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token selector"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token class"}),".bg-clip-text"))," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"background-clip"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," text",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token property"}),"-webkit-background-clip"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," text",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,r.kt)("p",null,"If you’re using the Tailwind CLI tool, vendor prefixes like this will be added automatically."),(0,r.kt)("p",null,"If not, we recommend that you use ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/postcss/autoprefixer"}),"Autoprefixer"),", which is a PostCSS plugin that automatically adds any necessary vendor prefixes based on the browsers you tell it you need to support."),(0,r.kt)("p",null,"To use it, install it via npm:"),(0,r.kt)("pre",Object.assign({},{className:"language-shell"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token parameter variable"}),"-D")," autoprefixer")),(0,r.kt)("p",null,"Then add it to the very end of your plugin list in your PostCSS configuration:"),(0,r.kt)("pre",Object.assign({},{className:"language-js"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token literal-property property"}),"plugins"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'tailwindcss'"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'autoprefixer'"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,r.kt)("p",null,"To learn more about specifying which browsers you need to support, check out ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/browserslist/browserslist"}),"Browserslist")," which is the standard way to define target browsers in front-end tooling."))}l.isMDXComponent=!0,l.layoutProps=u},53339:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var a=n(26042),r=n(85893),s=n(21744),o=n(99440),c=n(54713);function i(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Dx,{children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,r.jsx)(s.C,(0,a.Z)({nav:c.u},e))]})}i.nav=c.u},29815:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(20943),r=n(13375),s=n(91566);function o(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,r.Z)(e)||(0,s.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[8555,2474,4713,9774,2888,179],function(){return e(e.s=13783)}),_N_E=e.O()}]);