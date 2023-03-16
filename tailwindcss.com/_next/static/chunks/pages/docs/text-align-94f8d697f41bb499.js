(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9498],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach(function(t){s(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var o=n.createContext({}),l=function(e){var t,a=n.useContext(o),s=a;return e&&(s="function"==typeof(t=e)?e(a):i(i({},a),e)),s},c=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef(function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,c=function(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}(e,["components","mdxType","originalType","parentName"]),u=l(a),m=u["".concat(o,".").concat(s)]||u[s]||p[s]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))});function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33594:function(e,t,a){"use strict";a.d(t,{EL:function(){return c}});var n,s=a(67294),r=["bottom","height","left","right","top","width"],i=new Map,o=function e(){var t=[];i.forEach(function(e,a){var n,s,i=a.getBoundingClientRect();n=i,s=e.rect,void 0===n&&(n={}),void 0===s&&(s={}),r.some(function(e){return n[e]!==s[e]})&&(e.rect=i,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),n=window.requestAnimationFrame(e)},l="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function c(e,t,a){"boolean"==typeof(r=t)?p=t:(p=null==(m=null==t?void 0:t.observe)||m,u=null==t?void 0:t.onChange),(c=a)&&"[object Function]"==({}).toString.call(c)&&(u=a);var r,c,p,u,m,d=(0,s.useState)(e.current),g=d[0],k=d[1],h=(0,s.useRef)(!1),f=(0,s.useRef)(!1),b=(0,s.useState)(null),N=b[0],v=b[1],x=(0,s.useRef)(u);return l(function(){x.current=u,e.current!==g&&k(e.current)}),l(function(){g&&!h.current&&(h.current=!0,v(g.getBoundingClientRect()))},[g]),l(function(){if(p){var t=g;if(f.current||(f.current=!0,t=e.current),t){var a,s,r=(a=t,s=function(e){null==x.current||x.current(e),v(e)},{observe:function(){var e=0===i.size;i.has(a)?i.get(a).callbacks.push(s):i.set(a,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&o()},unobserve:function(){var e=i.get(a);if(e){var t=e.callbacks.indexOf(s);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||i.delete(a),i.size||cancelAnimationFrame(n)}}});return r.observe(),function(){r.unobserve()}}}},[p,g,e]),N}},29399:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-align",function(){return a(202)}])},202:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(99534);a(67294);var s=a(3905);a(41664);var r,i=a(5679),o=a(83434),l=a(53339),c=a(74296),p=a(4638),u=a(26939),m=l.L,d=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))},g={Layout:m,classes:{utilities:{".text-left":{"text-align":"left"},".text-center":{"text-align":"center"},".text-right":{"text-align":"right"},".text-justify":{"text-align":"justify"},".text-start":{"text-align":"start"},".text-end":{"text-align":"end"}}},meta:{title:"Text Align",shortTitle:"Text Align",description:"Utilities for controlling the alignment of text."},slug:"text-align",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the text alignment",slug:"setting-the-text-alignment",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},k=c.X_;function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)(k,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(i.X,{level:3,id:"setting-the-text-alignment",nextElement:{type:"paragraph"}},"Setting the text alignment"),(0,s.kt)("p",null,"Control the text alignment of an element using the ",(0,s.kt)("inlineCode",{parentName:"p"},"text-left"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"text-center"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"text-right"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"text-justify")," utilities."),(0,s.kt)(o.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="px-4 sm:px-0">\n    <div class="mx-auto max-w-xl bg-white shadow-xl p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">\n      <p class="text-left">\n        So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don\'t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.\n      </p>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"text-left")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"So I started to walk into the water...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(o.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="px-4 sm:px-0">\n    <div class="mx-auto max-w-xl bg-white shadow-xl p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">\n      <p class="text-center">\n        So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don\'t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.\n      </p>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"text-center")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"So I started to walk into the water...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(o.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="px-4 sm:px-0">\n    <div class="mx-auto max-w-xl bg-white shadow-xl p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">\n      <p class="text-right">\n        So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don\'t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.\n      </p>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"text-right")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"So I started to walk into the water...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(o.e,{p:"none",containerClassName:"mt-4 -mb-3",html:'\n  <div class="px-4 sm:px-0">\n    <div class="mx-auto max-w-xl bg-white shadow-xl p-8 text-slate-700 text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">\n      <p class="text-justify">\n        So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don\'t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.\n      </p>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"text-justify")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"So I started to walk into the water...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(d,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(d,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(u.k,{defaultClass:"text-left",featuredClass:"text-center",element:"p",mdxType:"HoverFocusAndOtherStates"}),(0,s.kt)(d,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(p.p,{defaultClass:"text-left",featuredClass:"text-center",element:"p",mdxType:"BreakpointsAndMediaQueries"}))}h.isMDXComponent=!0,h.layoutProps=g},4638:function(e,t,a){"use strict";a.d(t,{p:function(){return s}});var n=a(85893);function s(e){var t=e.defaultClass,a=e.featuredClass,s=e.element,r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,n.jsxs)("code",{children:["md:",a]})," to apply the ",(0,n.jsx)("code",{children:a})," utility at only medium screen sizes and above."]}),r||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===s?"div":s).replace("{defaultClass} ",t?"".concat(t," "):"").replace("{featuredClass}",a)}})}),(0,n.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,n.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,n.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},83434:function(e,t,a){"use strict";a.d(t,{e:function(){return p}});var n=a(26042),s=a(85893),r=a(86010),i=a(98566),o=a(67294),l={none:"",md:"p-8"};function c(e){var t=e.as,a=e.style,i=e.padding,o=e.p,c=e.className,p=e.containerClassName,u=e.html,m=e.children,d=e.hint,g=e.hintClassName,k=e.lightOnly,h=void 0!==k&&k,f=null!=i?i:void 0===o?"md":o,b=l[f];if(void 0===b)throw Error("Invalid padding value: ".concat(JSON.stringify(f)));return(0,s.jsxs)("div",{className:p,children:[void 0!==d&&(0,s.jsx)("div",{className:(0,r.Z)(g,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:d})]})}),(0,s.jsxs)(void 0===t?"div":t,{style:a,className:(0,r.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!h&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,r.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!h&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,n.Z)({className:(0,r.Z)("relative rounded-xl overflow-auto",b,c)},u?{dangerouslySetInnerHTML:{__html:u}}:{children:m})),(0,s.jsx)("div",{className:(0,r.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!h&&"dark:border-white/5")})]})]})}function p(e){return e.resizable?(0,s.jsx)(u,(0,n.Z)({},e)):(0,s.jsx)(c,(0,n.Z)({},e))}function u(e){var t=(0,o.useRef)(),a=(0,i.c$)(0),r=(0,o.useRef)(),l=(0,o.useRef)();return(0,o.useEffect)(function(){var e=new window.ResizeObserver(function(){a.set(0)});return e.observe(t.current),function(){e.disconnect()}},[]),(0,o.useEffect)(function(){l.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:t,className:"relative",children:[(0,s.jsx)(c,(0,n.Z)({as:i.ww.div,style:{marginRight:(0,i.Hm)(a,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:r,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(i.ww.div,{ref:l,drag:"x",_dragX:a,dragMomentum:!1,dragElastic:0,dragConstraints:r,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:a},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},26939:function(e,t,a){"use strict";a.d(t,{k:function(){return s}});var n=a(85893);function s(e){e.property,e.utility;var t=e.variant,a=void 0===t?"hover":t,s=e.defaultClass,r=e.featuredClass,i=e.element,o=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,n.jsxs)("code",{children:[a,":",r]})," ","to only apply the ",(0,n.jsx)("code",{children:r})," utility on ",a,"."]}),o||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===i?"div":i).replace("{defaultClass} ",s?"".concat(s," "):"").replace("{variant}",a).replace("{featuredClass}",r)}})}),(0,n.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},53339:function(e,t,a){"use strict";a.d(t,{L:function(){return l}});var n=a(26042),s=a(85893),r=a(21744),i=a(99440),o=a(54713);function l(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Dx,{children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,s.jsx)(r.C,(0,n.Z)({nav:o.u},e))]})}l.nav=o.u},29815:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(20943),s=a(13375),r=a(91566);function i(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,9940,8555,2474,4713,9774,2888,179],function(){return e(e.s=29399)}),_N_E=e.O()}]);