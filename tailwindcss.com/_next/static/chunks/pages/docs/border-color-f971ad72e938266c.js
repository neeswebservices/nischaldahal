(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9585],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach(function(a){s(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var i=n.createContext({}),c=function(e){var a,t=n.useContext(i),s=t;return e&&(s="function"==typeof(a=e)?e(t):o(o({},t),e)),s},p=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef(function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=function(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,["components","mdxType","originalType","parentName"]),m=c(t),d=m["".concat(i,".").concat(s)]||m[s]||l[s]||r;return t?n.createElement(d,o(o({ref:a},p),{},{components:t})):n.createElement(d,o({ref:a},p))});function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,o=Array(r);o[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33594:function(e,a,t){"use strict";t.d(a,{EL:function(){return p}});var n,s=t(67294),r=["bottom","height","left","right","top","width"],o=new Map,i=function e(){var a=[];o.forEach(function(e,t){var n,s,o=t.getBoundingClientRect();n=o,s=e.rect,void 0===n&&(n={}),void 0===s&&(s={}),r.some(function(e){return n[e]!==s[e]})&&(e.rect=o,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),n=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function p(e,a,t){"boolean"==typeof(r=a)?l=a:(l=null==(d=null==a?void 0:a.observe)||d,m=null==a?void 0:a.onChange),(p=t)&&"[object Function]"==({}).toString.call(p)&&(m=t);var r,p,l,m,d,g=(0,s.useState)(e.current),u=g[0],k=g[1],b=(0,s.useRef)(!1),N=(0,s.useRef)(!1),h=(0,s.useState)(null),O=h[0],j=h[1],f=(0,s.useRef)(m);return c(function(){f.current=m,e.current!==u&&k(e.current)}),c(function(){u&&!b.current&&(b.current=!0,j(u.getBoundingClientRect()))},[u]),c(function(){if(l){var a=u;if(N.current||(N.current=!0,a=e.current),a){var t,s,r=(t=a,s=function(e){null==f.current||f.current(e),j(e)},{observe:function(){var e=0===o.size;o.has(t)?o.get(t).callbacks.push(s):o.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&i()},unobserve:function(){var e=o.get(t);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||o.delete(t),o.size||cancelAnimationFrame(n)}}});return r.observe(),function(){r.unobserve()}}}},[l,u,e]),O}},30322:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-color",function(){return t(54895)}])},54895:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return y}});var n=t(26042),s=t(69396),r=t(99534);t(67294);var o,i=t(3905),c=t(41664),p=t.n(c),l=t(5679),m=t(83434),d=t(53339),g=t(74296),u=t(58001),k=t(1003),b=t(4638),N=t(59731),h=t(26939),O=d.L,j={utilities:u.Z,transformProperties:function(e){e.selector;var a=e.properties;return delete a["--tw-border-opacity"],Object.keys(a).forEach(function(e){a[e]=a[e].replace(" / var(--tw-border-opacity)","")}),a},preview:function(e,a){var t,r=a.utility,o=a.className;return(0,i.kt)("td",{className:"relative w-16 p-2 font-mono text-xs whitespace-pre ".concat(o)},(0,i.kt)("div",{className:"absolute inset-0 m-2",style:(0,s.Z)((0,n.Z)({},e),{borderWidth:{all:"1px",x:"0 1px",y:"1px 0",t:"1px 0 0",r:"0 1px 0 0",b:"0 0 1px",l:"0 0 0 1px"}[(null===(t=r.match(/^\.border-(?:([xytrbl])-)?/))||void 0===t?void 0:t[1])||"all"]})}))}},f=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",Object.assign({},e))},v={Layout:O,classes:j,meta:{title:"Border Color",description:"Utilities for controlling the color of an element's borders."},slug:"border-color",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the border color",slug:"setting-the-border-color",children:[]},{title:"Changing the opacity",slug:"changing-the-opacity",children:[]},{title:"Individual sides",slug:"individual-sides",children:[]},{title:"Horizontal and vertical sides",slug:"horizontal-and-vertical-sides",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},x=g.X_;function y(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)(x,Object.assign({},v,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(l.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,i.kt)(l.X,{level:3,id:"setting-the-border-color",nextElement:{type:"paragraph"}},"Setting the border color"),(0,i.kt)("p",null,"Control the border color of an element using the ",(0,i.kt)("inlineCode",{parentName:"p"},"border-{color}")," utilities."),(0,i.kt)(m.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="max-w-xs mx-auto space-y-1">\n    <label>\n      <span class="text-slate-900 dark:text-slate-200 text-sm font-medium">Email address</span>\n      <input type="text" placeholder="jane@example.com" class="font-sans block text-sm leading-5 w-full py-2 px-3 border-2 border-rose-600 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-rose-200 focus:border-rose-500 dark:text-slate-400 dark:placeholder:text-slate-600 dark:bg-slate-900 dark:border-rose-500 dark:focus:ring-rose-900 dark:focus:border-rose-600" />\n    </label>\n    <span class="text-rose-600 dark:text-rose-500 text-sm">This field is required.</span>\n  </div>\n'}),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"dark:hidden language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-2 ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"border-rose-600")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"hidden dark:block language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-2 ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"border-rose-500")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)(l.X,{level:3,id:"changing-the-opacity",nextElement:{type:"paragraph"}},"Changing the opacity"),(0,i.kt)("p",null,"Control the opacity of an element’s border color using the color opacity modifier."),(0,i.kt)(m.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid lg:grid-cols-3 gap-4 text-white text-sm text-center font-bold leading-6">\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-indigo-500/100</p>\n      <div class="p-4 shadow-sm bg-white dark:bg-slate-900 w-16 h-16 border-indigo-500/100 border-4"></div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-indigo-500/75</p>\n      <div class="p-4 shadow-sm bg-white dark:bg-slate-900 w-16 h-16 border-indigo-500/75 border-4"></div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-indigo-500/50</p>\n      <div class="p-4 shadow-sm bg-white dark:bg-slate-900 w-16 h-16 border-indigo-500/50 border-4"></div>\n    </div>\n  </div>\n'}),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-4 border-indigo-500",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"/100")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-4 border-indigo-500",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"/75")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-4 border-indigo-500",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"/50")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)("p",null,"You can use any value defined in your ",(0,i.kt)(p(),{href:"/docs/opacity",passHref:!0},(0,i.kt)("a",null,"opacity scale")),", or use arbitrary values if you need to deviate from your design tokens."),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-4 border-indigo-600",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"/[.55]")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)(l.X,{level:3,id:"individual-sides",nextElement:{type:"paragraph"}},"Individual sides"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"border-{side}-{color}")," utilities to set the border color for one side of an element."),(0,i.kt)(m.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-t-indigo-500</p>\n      <div class="p-4 shadow-sm bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 w-16 h-16 border-indigo-200 dark:border-indigo-600/20 border-4 border-t-indigo-500 dark:border-t-indigo-500"></div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-r-indigo-500</p>\n      <div class="p-4 shadow-sm bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 w-16 h-16 border-indigo-200 dark:border-indigo-600/20 border-4 border-r-indigo-500 dark:border-r-indigo-500"></div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-b-indigo-500</p>\n      <div class="p-4 shadow-sm bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 w-16 h-16 border-indigo-200 dark:border-indigo-600/20 border-4 border-b-indigo-500 dark:border-b-indigo-500"></div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-l-indigo-500</p>\n      <div class="p-4 shadow-sm bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 w-16 h-16 border-indigo-200 dark:border-indigo-600/20 border-4 border-l-indigo-500 dark:border-l-indigo-500"></div>\n    </div>\n  </div>\n'}),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-4 border-indigo-200 ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"border-t-indigo-500")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-4 border-indigo-200 ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"border-r-indigo-500")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-4 border-indigo-200 ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"border-b-indigo-500")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-4 border-indigo-200 ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"border-l-indigo-500")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)(l.X,{level:3,id:"horizontal-and-vertical-sides",nextElement:{type:"paragraph"}},"Horizontal and vertical sides"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"border-{x|y}-{color}")," utilities to set the border color on two sides of an element at the same time."),(0,i.kt)(m.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm text-center font-bold leading-6">\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-x-indigo-500</p>\n      <div class="p-4 shadow-sm bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 w-16 h-16 border-indigo-200 dark:border-indigo-600/20 border-4 border-x-indigo-500 dark:border-x-indigo-500"></div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">border-y-indigo-500</p>\n      <div class="p-4 shadow-sm bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 w-16 h-16 border-indigo-200 dark:border-indigo-600/20 border-4 border-y-indigo-500 dark:border-y-indigo-500"></div>\n    </div>\n  </div>\n'}),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-4 border-indigo-200 ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"border-x-indigo-500")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border-4 border-indigo-200 ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"border-y-indigo-500")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)("hr",null),(0,i.kt)(f,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,i.kt)(f,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,i.kt)(h.k,{featuredClass:"border-gray-500",mdxType:"HoverFocusAndOtherStates"},(0,i.kt)(m.e,{hint:"Try hovering over the text to see the expected behaviour",containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid place-content-center text-white text-sm text-center font-bold leading-6">\n    <button class="px-4 py-2 font-semibold text-sm bg-white dark:bg-slate-700 text-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 hover:border-indigo-300 dark:hover:border-slate-400 rounded-md shadow-sm">Send email</button>\n  </div>\n'}),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"dark:hidden language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border border-slate-300 ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"hover:border-indigo-300")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Send email\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"hidden dark:block language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"border border-slate-300 ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"hover:border-slate-400")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Send email\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),(0,i.kt)(f,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,i.kt)(b.p,{defaultClass:"border-blue-500",featuredClass:"border-green-500",element:"button",mdxType:"BreakpointsAndMediaQueries"}),(0,i.kt)("hr",null),(0,i.kt)(l.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,i.kt)(l.X,{level:3,id:"customizing-your-theme",nextElement:{type:"jsx"}},"Customizing your theme"),(0,i.kt)(N.h,{name:"border",configKey:"borderColor",mdxType:"CustomizePluginColors"}),(0,i.kt)(l.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,i.kt)(k.k,{property:"border-color",featuredClass:"border-[#243c5a]",element:"button",mdxType:"ArbitraryValues"}))}y.isMDXComponent=!0,y.layoutProps=v},29815:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var n=t(20943),s=t(13375),r=t(91566);function o(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,8749,9940,8555,2474,4713,802,2828,9774,2888,179],function(){return e(e.s=30322)}),_N_E=e.O()}]);