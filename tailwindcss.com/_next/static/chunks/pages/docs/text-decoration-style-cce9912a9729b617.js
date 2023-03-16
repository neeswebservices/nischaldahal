(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8970],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var i=a.createContext({}),c=function(e){var t,n=a.useContext(i),s=n;return e&&(s="function"==typeof(t=e)?e(n):r(r({},n),e)),s},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef(function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=function(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),d=c(n),u=d["".concat(i,".").concat(s)]||d[s]||p[s]||o;return n?a.createElement(u,r(r({ref:t},l),{},{components:n})):a.createElement(u,r({ref:t},l))});function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=Array(o);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33594:function(e,t,n){"use strict";n.d(t,{EL:function(){return l}});var a,s=n(67294),o=["bottom","height","left","right","top","width"],r=new Map,i=function e(){var t=[];r.forEach(function(e,n){var a,s,r=n.getBoundingClientRect();a=r,s=e.rect,void 0===a&&(a={}),void 0===s&&(s={}),o.some(function(e){return a[e]!==s[e]})&&(e.rect=r,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),a=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function l(e,t,n){"boolean"==typeof(o=t)?p=t:(p=null==(u=null==t?void 0:t.observe)||u,d=null==t?void 0:t.onChange),(l=n)&&"[object Function]"==({}).toString.call(l)&&(d=n);var o,l,p,d,u,m=(0,s.useState)(e.current),g=m[0],k=m[1],b=(0,s.useRef)(!1),N=(0,s.useRef)(!1),f=(0,s.useState)(null),h=f[0],v=f[1],j=(0,s.useRef)(d);return c(function(){j.current=d,e.current!==g&&k(e.current)}),c(function(){g&&!b.current&&(b.current=!0,v(g.getBoundingClientRect()))},[g]),c(function(){if(p){var t=g;if(N.current||(N.current=!0,t=e.current),t){var n,s,o=(n=t,s=function(e){null==j.current||j.current(e),v(e)},{observe:function(){var e=0===r.size;r.has(n)?r.get(n).callbacks.push(s):r.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&i()},unobserve:function(){var e=r.get(n);if(e){var t=e.callbacks.indexOf(s);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||r.delete(n),r.size||cancelAnimationFrame(a)}}});return o.observe(),function(){o.unobserve()}}}},[p,g,e]),h}},44358:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-decoration-style",function(){return n(3034)}])},3034:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(99534);n(67294);var s=n(3905),o=n(41664),r=n.n(o),i=n(5679),c=n(83434),l=n(53339),p=n(74296);n(1003);var d,u=n(4638),m=n(26939),g=l.L,k=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))},b={Layout:g,classes:{utilities:{".decoration-solid":{"text-decoration-style":"solid"},".decoration-double":{"text-decoration-style":"double"},".decoration-dotted":{"text-decoration-style":"dotted"},".decoration-dashed":{"text-decoration-style":"dashed"},".decoration-wavy":{"text-decoration-style":"wavy"}}},meta:{title:"Text Decoration Style",description:"Utilities for controlling the style of text decorations."},slug:"text-decoration-style",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the text decoration style",slug:"setting-the-text-decoration-style",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},N=p.X_;function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)(N,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(i.X,{level:3,id:"setting-the-text-decoration-style",nextElement:{type:"paragraph"}},"Setting the text decoration style"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"decoration-{style}")," utilities to change the style of an element’s ",(0,s.kt)(r(),{href:"/docs/text-decoration",passHref:!0},(0,s.kt)("a",null,"text decoration")),"."),(0,s.kt)(c.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex flex-col gap-8 text-slate-900 dark:text-slate-200">\n    <div>\n      <div class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">decoration-solid</div>\n      <p class="text-lg font-medium underline decoration-solid">The quick brown fox jumps over the lazy dog.</p>\n    </div>\n    <div>\n      <div class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">decoration-double</div>\n      <p class="text-lg font-medium underline decoration-double">The quick brown fox jumps over the lazy dog.</p>\n    </div>\n    <div>\n      <div class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">decoration-dotted</div>\n      <p class="text-lg font-medium underline decoration-dotted">The quick brown fox jumps over the lazy dog.</p>\n    </div>\n    <div>\n      <div class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">decoration-dashed</div>\n      <p class="text-lg font-medium underline decoration-dashed">The quick brown fox jumps over the lazy dog.</p>\n    </div>\n    <div>\n      <div class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">decoration-wavy</div>\n      <p class="text-lg font-medium underline decoration-wavy">The quick brown fox jumps over the lazy dog.</p>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"underline ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"decoration-solid")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"underline ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"decoration-double")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"underline ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"decoration-dotted")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"underline ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"decoration-dashed")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"underline ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"decoration-wavy")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(k,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(k,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(m.k,{defaultClass:"underline",featuredClass:"decoration-dashed",element:"p",mdxType:"HoverFocusAndOtherStates"}),(0,s.kt)(k,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(u.p,{defaultClass:"underline",featuredClass:"decoration-dashed",element:"p",mdxType:"BreakpointsAndMediaQueries"}))}f.isMDXComponent=!0,f.layoutProps=b},83434:function(e,t,n){"use strict";n.d(t,{e:function(){return p}});var a=n(26042),s=n(85893),o=n(86010),r=n(98566),i=n(67294),c={none:"",md:"p-8"};function l(e){var t=e.as,n=e.style,r=e.padding,i=e.p,l=e.className,p=e.containerClassName,d=e.html,u=e.children,m=e.hint,g=e.hintClassName,k=e.lightOnly,b=void 0!==k&&k,N=null!=r?r:void 0===i?"md":i,f=c[N];if(void 0===f)throw Error("Invalid padding value: ".concat(JSON.stringify(N)));return(0,s.jsxs)("div",{className:p,children:[void 0!==m&&(0,s.jsx)("div",{className:(0,o.Z)(g,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:m})]})}),(0,s.jsxs)(void 0===t?"div":t,{style:n,className:(0,o.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!b&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,o.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!b&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,a.Z)({className:(0,o.Z)("relative rounded-xl overflow-auto",f,l)},d?{dangerouslySetInnerHTML:{__html:d}}:{children:u})),(0,s.jsx)("div",{className:(0,o.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!b&&"dark:border-white/5")})]})]})}function p(e){return e.resizable?(0,s.jsx)(d,(0,a.Z)({},e)):(0,s.jsx)(l,(0,a.Z)({},e))}function d(e){var t=(0,i.useRef)(),n=(0,r.c$)(0),o=(0,i.useRef)(),c=(0,i.useRef)();return(0,i.useEffect)(function(){var e=new window.ResizeObserver(function(){n.set(0)});return e.observe(t.current),function(){e.disconnect()}},[]),(0,i.useEffect)(function(){c.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:t,className:"relative",children:[(0,s.jsx)(l,(0,a.Z)({as:r.ww.div,style:{marginRight:(0,r.Hm)(n,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:o,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(r.ww.div,{ref:c,drag:"x",_dragX:n,dragMomentum:!1,dragElastic:0,dragConstraints:o,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:n},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},29815:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(20943),s=n(13375),o=n(91566);function r(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,s.Z)(e)||(0,o.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,9940,8555,2474,4713,802,9774,2888,179],function(){return e(e.s=44358)}),_N_E=e.O()}]);