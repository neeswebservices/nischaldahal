(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7375],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return l},kt:function(){return u}});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach(function(a){s(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var o=t.createContext({}),c=function(e){var a,n=t.useContext(o),s=n;return e&&(s="function"==typeof(a=e)?e(n):i(i({},n),e)),s},l=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef(function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=function(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),d=c(n),u=d["".concat(o,".").concat(s)]||d[s]||p[s]||r;return n?t.createElement(u,i(i({ref:a},l),{},{components:n})):t.createElement(u,i({ref:a},l))});function u(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,i=Array(r);i[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33594:function(e,a,n){"use strict";n.d(a,{EL:function(){return l}});var t,s=n(67294),r=["bottom","height","left","right","top","width"],i=new Map,o=function e(){var a=[];i.forEach(function(e,n){var t,s,i=n.getBoundingClientRect();t=i,s=e.rect,void 0===t&&(t={}),void 0===s&&(s={}),r.some(function(e){return t[e]!==s[e]})&&(e.rect=i,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),t=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function l(e,a,n){"boolean"==typeof(r=a)?p=a:(p=null==(u=null==a?void 0:a.observe)||u,d=null==a?void 0:a.onChange),(l=n)&&"[object Function]"==({}).toString.call(l)&&(d=n);var r,l,p,d,u,m=(0,s.useState)(e.current),k=m[0],g=m[1],b=(0,s.useRef)(!1),f=(0,s.useRef)(!1),N=(0,s.useState)(null),v=N[0],h=N[1],j=(0,s.useRef)(d);return c(function(){j.current=d,e.current!==k&&g(e.current)}),c(function(){k&&!b.current&&(b.current=!0,h(k.getBoundingClientRect()))},[k]),c(function(){if(p){var a=k;if(f.current||(f.current=!0,a=e.current),a){var n,s,r=(n=a,s=function(e){null==j.current||j.current(e),h(e)},{observe:function(){var e=0===i.size;i.has(n)?i.get(n).callbacks.push(s):i.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&o()},unobserve:function(){var e=i.get(n);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||i.delete(n),i.size||cancelAnimationFrame(t)}}});return r.observe(),function(){r.unobserve()}}}},[p,k,e]),v}},44085:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-invert",function(){return n(56114)}])},56114:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return j}});var t=n(99534);n(67294);var s,r=n(3905),i=n(41664),o=n.n(i),c=n(59533),l=n(5679),p=n(83434),d=n(53339),u=n(74296),m=n(1003),k=n(4638),g=n(26939),b=n(50967),f=d.L,N=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))},v={Layout:f,classes:{utilities:{".backdrop-invert-0":{"--tw-backdrop-invert":"invert(0)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-invert":{"--tw-backdrop-invert":"invert(100%)","backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"}},transformProperties:function(e){return{"backdrop-filter":e.properties["--tw-backdrop-invert"]}}},meta:{title:"Backdrop Invert",description:"Utilities for applying backdrop invert filters to an element."},slug:"backdrop-invert",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Inverting an element's backdrop",slug:"inverting-an-element-s-backdrop",children:[]},{title:"Removing backdrop filters",slug:"removing-backdrop-filters",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},h=u.X_;function j(e){var a=e.components,n=(0,t.Z)(e,["components"]);return(0,r.kt)(h,Object.assign({},v,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(l.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,r.kt)(l.X,{level:3,id:"inverting-an-element-s-backdrop",nextElement:{type:"paragraph"}},"Inverting an element's backdrop"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"backdrop-invert")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"backdrop-invert-0")," utilities to control whether an element should be rendered with inverted backdrop colors or normally."),(0,r.kt)(p.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8">\n  <div class="flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8">\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">backdrop-invert-0</p>\n      <div class="relative">\n        <div class="absolute inset-6 backdrop-invert-0 h-20 w-20 bg-white/30"></div>\n        <img class="w-32 h-32 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n    <div class="flex flex-col items-center shrink-0">\n      <p class="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">backdrop-invert</p>\n      <div class="relative">\n        <div class="absolute inset-6 backdrop-invert h-20 w-20 bg-white/30"></div>\n        <img class="w-32 h-32 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />\n        <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>\n      </div>\n    </div>\n  </div>\n  </div>\n'}),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"backdrop-invert-0")," bg-white/30 ...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"backdrop-invert")," bg-white/30 ...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)(l.X,{level:3,id:"removing-backdrop-filters",nextElement:{type:"jsx"}},"Removing backdrop filters"),(0,r.kt)(b.I,{defaultClass:"backdrop-blur-md backdrop-invert",mdxType:"RemovingBackdropFilters"}),(0,r.kt)("hr",null),(0,r.kt)(N,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,r.kt)(N,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,r.kt)(g.k,{defaultClass:"backdrop-invert",featuredClass:"backdrop-invert-0",mdxType:"HoverFocusAndOtherStates"}),(0,r.kt)(N,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,r.kt)(k.p,{defaultClass:"backdrop-invert",featuredClass:"backdrop-invert-0",mdxType:"BreakpointsAndMediaQueries"}),(0,r.kt)("hr",null),(0,r.kt)(l.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,r.kt)(l.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,r.kt)("p",null,"By default, Tailwind includes a handful of general purpose ",(0,r.kt)("inlineCode",{parentName:"p"},"backdrop-invert")," utilities. You can customize these values by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.backdropInvert")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.extend.backdropInvert")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,r.kt)(c.M,{filename:"tailwind.config.js"},(0,r.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"backdropInvert"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token number"}),"25"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'.25'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token number"}),"75"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'.75'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,r.kt)("p",null,"Learn more about customizing the default theme in the ",(0,r.kt)(o(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,r.kt)("a",null,"theme customization"))," documentation."),(0,r.kt)(l.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,r.kt)(m.k,{property:"backdrop-invert",featuredClass:"backdrop-invert-[.25]",mdxType:"ArbitraryValues"}))}j.isMDXComponent=!0,j.layoutProps=v},59533:function(e,a,n){"use strict";n.d(a,{M:function(){return r}});var t=n(85893),s=n(6774);function r(e){var a=e.filename,n=e.children;return(0,t.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,t.jsx)(s.n,{primary:{name:a},showTabMarkers:!1}),(0,t.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:n})]})}},83434:function(e,a,n){"use strict";n.d(a,{e:function(){return p}});var t=n(26042),s=n(85893),r=n(86010),i=n(98566),o=n(67294),c={none:"",md:"p-8"};function l(e){var a=e.as,n=e.style,i=e.padding,o=e.p,l=e.className,p=e.containerClassName,d=e.html,u=e.children,m=e.hint,k=e.hintClassName,g=e.lightOnly,b=void 0!==g&&g,f=null!=i?i:void 0===o?"md":o,N=c[f];if(void 0===N)throw Error("Invalid padding value: ".concat(JSON.stringify(f)));return(0,s.jsxs)("div",{className:p,children:[void 0!==m&&(0,s.jsx)("div",{className:(0,r.Z)(k,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:m})]})}),(0,s.jsxs)(void 0===a?"div":a,{style:n,className:(0,r.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!b&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,r.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!b&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,t.Z)({className:(0,r.Z)("relative rounded-xl overflow-auto",N,l)},d?{dangerouslySetInnerHTML:{__html:d}}:{children:u})),(0,s.jsx)("div",{className:(0,r.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!b&&"dark:border-white/5")})]})]})}function p(e){return e.resizable?(0,s.jsx)(d,(0,t.Z)({},e)):(0,s.jsx)(l,(0,t.Z)({},e))}function d(e){var a=(0,o.useRef)(),n=(0,i.c$)(0),r=(0,o.useRef)(),c=(0,o.useRef)();return(0,o.useEffect)(function(){var e=new window.ResizeObserver(function(){n.set(0)});return e.observe(a.current),function(){e.disconnect()}},[]),(0,o.useEffect)(function(){c.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:a,className:"relative",children:[(0,s.jsx)(l,(0,t.Z)({as:i.ww.div,style:{marginRight:(0,i.Hm)(n,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:r,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(i.ww.div,{ref:c,drag:"x",_dragX:n,dragMomentum:!1,dragElastic:0,dragConstraints:r,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:n},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},50967:function(e,a,n){"use strict";n.d(a,{I:function(){return s}});var t=n(85893);function s(e){var a=e.defaultClass,n=e.element,s=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["To remove all of the backdrop filters on an element at once, use the"," ",(0,t.jsx)("code",{children:"backdrop-filter-none"})," utility:"]}),s||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:backdrop-filter-none</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===n?"div":n).replace("{defaultClass} ",a?"".concat(a," "):"")}})}),(0,t.jsx)("p",{children:"This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint."})]})}},6774:function(e,a,n){"use strict";n.d(a,{n:function(){return r}});var t=n(85893),s=n(86010);function r(e){var a=e.primary,n=e.secondary,r=e.showTabMarkers,i=e.side,o=e.translucent,c=e.children;return(0,t.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,t.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[a.name,(void 0===r||r)&&(a.saved?(0,t.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,t.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,t.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,t.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===i?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==o&&o&&"dark:bg-slate-800/50"),children:[(void 0===n?[]:n).map(function(e){var a=e.name,n=e.open,r=e.className;return(0,t.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",r,{italic:!(void 0===n||n)}),children:a},a)}),c&&(0,t.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:c})]})]})}},29815:function(e,a,n){"use strict";n.d(a,{Z:function(){return i}});var t=n(20943),s=n(13375),r=n(91566);function i(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,9940,8555,2474,4713,802,9774,2888,179],function(){return e(e.s=44085)}),_N_E=e.O()}]);