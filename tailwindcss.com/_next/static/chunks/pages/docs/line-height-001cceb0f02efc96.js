(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9966],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return g}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(a){s(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var o=n.createContext({}),l=function(e){var a,t=n.useContext(o),s=t;return e&&(s="function"==typeof(a=e)?e(t):r(r({},t),e)),s},p=function(e){var a=l(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef(function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=function(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,["components","mdxType","originalType","parentName"]),m=l(t),g=m["".concat(o,".").concat(s)]||m[s]||c[s]||i;return t?n.createElement(g,r(r({ref:a},p),{},{components:t})):n.createElement(g,r({ref:a},p))});function g(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,r=Array(i);r[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33594:function(e,a,t){"use strict";t.d(a,{EL:function(){return p}});var n,s=t(67294),i=["bottom","height","left","right","top","width"],r=new Map,o=function e(){var a=[];r.forEach(function(e,t){var n,s,r=t.getBoundingClientRect();n=r,s=e.rect,void 0===n&&(n={}),void 0===s&&(s={}),i.some(function(e){return n[e]!==s[e]})&&(e.rect=r,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),n=window.requestAnimationFrame(e)},l="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function p(e,a,t){"boolean"==typeof(i=a)?c=a:(c=null==(g=null==a?void 0:a.observe)||g,m=null==a?void 0:a.onChange),(p=t)&&"[object Function]"==({}).toString.call(p)&&(m=t);var i,p,c,m,g,u=(0,s.useState)(e.current),d=u[0],k=u[1],N=(0,s.useRef)(!1),b=(0,s.useRef)(!1),h=(0,s.useState)(null),f=h[0],j=h[1],O=(0,s.useRef)(m);return l(function(){O.current=m,e.current!==d&&k(e.current)}),l(function(){d&&!N.current&&(N.current=!0,j(d.getBoundingClientRect()))},[d]),l(function(){if(c){var a=d;if(b.current||(b.current=!0,a=e.current),a){var t,s,i=(t=a,s=function(e){null==O.current||O.current(e),j(e)},{observe:function(){var e=0===r.size;r.has(t)?r.get(t).callbacks.push(s):r.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&o()},unobserve:function(){var e=r.get(t);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||r.delete(t),r.size||cancelAnimationFrame(n)}}});return i.observe(),function(){i.unobserve()}}}},[c,d,e]),f}},22954:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/line-height",function(){return t(38639)}])},38639:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return j}});var n=t(99534);t(67294);var s,i=t(3905),r=t(41664),o=t.n(r),l=t(59533),p=t(5679),c=t(83434),m=t(53339),g=t(74296),u=t(1003),d=t(4638),k=t(26939),N=m.L,b=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",Object.assign({},e))},h={Layout:N,classes:{utilities:{".leading-3":{"line-height":".75rem"},".leading-4":{"line-height":"1rem"},".leading-5":{"line-height":"1.25rem"},".leading-6":{"line-height":"1.5rem"},".leading-7":{"line-height":"1.75rem"},".leading-8":{"line-height":"2rem"},".leading-9":{"line-height":"2.25rem"},".leading-10":{"line-height":"2.5rem"},".leading-none":{"line-height":"1"},".leading-tight":{"line-height":"1.25"},".leading-snug":{"line-height":"1.375"},".leading-normal":{"line-height":"1.5"},".leading-relaxed":{"line-height":"1.625"},".leading-loose":{"line-height":"2"}}},meta:{title:"Line Height",description:"Utilities for controlling the leading (line height) of an element."},slug:"line-height",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Relative line-heights",slug:"relative-line-heights",children:[]},{title:"Fixed line-heights",slug:"fixed-line-heights",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]},{title:"Overriding default line-heights",slug:"overriding-default-line-heights",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},f=g.X_;function j(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,i.kt)(f,Object.assign({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(p.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,i.kt)(p.X,{level:3,id:"relative-line-heights",nextElement:{type:"paragraph"}},"Relative line-heights"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"leading-none"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"leading-tight"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"leading-snug"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"leading-normal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"leading-relaxed"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"leading-loose")," utilities to give an element a relative line-height based on its current font-size."),(0,i.kt)(c.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex flex-col gap-8">\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">leading-normal</span>\n      <p class="leading-normal text-slate-900 dark:text-slate-200">\n        So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don\'t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.\n      </p>\n    </div>\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">leading-relaxed</span>\n      <p class="leading-relaxed text-slate-900 dark:text-slate-200">\n        So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don\'t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.\n      </p>\n    </div>\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">leading-loose</span>\n      <p class="leading-loose text-slate-900 dark:text-slate-200">\n        So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don\'t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.\n      </p>\n    </div>\n  </div>\n'}),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"leading-normal")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"So I started to walk into the water...",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"leading-relaxed")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"So I started to walk into the water...",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"leading-loose")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"So I started to walk into the water...",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)(p.X,{level:3,id:"fixed-line-heights",nextElement:{type:"paragraph"}},"Fixed line-heights"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"leading-{size}")," utilities to give an element a fixed line-height, irrespective of the current font-size. These are useful when you need very precise control over an element’s final size."),(0,i.kt)(c.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex flex-col gap-8">\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">leading-6</span>\n      <p class="leading-6 text-slate-900 dark:text-slate-200">\n        So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don\'t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.\n      </p>\n    </div>\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">leading-7</span>\n      <p class="leading-7 text-slate-900 dark:text-slate-200">\n        So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don\'t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.\n      </p>\n    </div>\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">leading-8</span>\n      <p class="leading-8 text-slate-900 dark:text-slate-200">\n        So I started to walk into the water. I won\'t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don\'t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.\n      </p>\n    </div>\n  </div>\n'}),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"leading-6")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"So I started to walk into the water...",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"leading-7")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"So I started to walk into the water...",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"leading-8")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"So I started to walk into the water...",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)("hr",null),(0,i.kt)(b,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,i.kt)(b,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,i.kt)(k.k,{defaultClass:"leading-none",featuredClass:"leading-loose",element:"p",mdxType:"HoverFocusAndOtherStates"}),(0,i.kt)(b,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,i.kt)(d.p,{defaultClass:"leading-none",featuredClass:"leading-loose",element:"p",mdxType:"BreakpointsAndMediaQueries"}),(0,i.kt)(p.X,{level:3,id:"overriding-default-line-heights",nextElement:{type:"paragraph"}},"Overriding default line-heights"),(0,i.kt)("p",null,"It’s important to note that by default, Tailwind’s ",(0,i.kt)(o(),{href:"/docs/font-size",passHref:!0},(0,i.kt)("a",null,"font-size"))," utilities each set their own default line-height. This means that any time you use a responsive font-size utility like ",(0,i.kt)("inlineCode",{parentName:"p"},"sm:text-xl"),", any explicit line-height you have set for a smaller breakpoint will be overridden."),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- The `leading-loose` class will be overridden at the `md` breakpoint -->"),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"text-lg leading-loose md:text-xl",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Maybe we can live without libraries...\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)("p",null,"If you want to override the default line-height after setting a breakpoint-specific font-size, make sure to set a breakpoint-specific line-height as well:"),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- The `leading-loose` class will be overridden at the `md` breakpoint -->"),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"text-lg leading-loose md:text-xl md:leading-loose",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Maybe we can live without libraries...\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)("p",null,"Using the same line-height across different font sizes is generally not going to give you good typographic results. Line-height should typically get smaller as font-size increases, so the default behavior here usually saves you a ton of work. If you find yourself fighting it, you can always ",(0,i.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindcss.com/docs/font-size#customizing"}),"customize your font-size scale")," to not include default line-heights."),(0,i.kt)("hr",null),(0,i.kt)(p.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,i.kt)(p.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,i.kt)("p",null,"By default, Tailwind provides six relative and eight fixed ",(0,i.kt)("inlineCode",{parentName:"p"},"line-height")," utilities. You change, add, or remove these by customizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"lineHeight")," section of your Tailwind theme config."),(0,i.kt)(l.M,{filename:"tailwind.config.js"},(0,i.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"lineHeight"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'extra-loose'"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'2.5'"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'12'"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'3rem'"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,i.kt)("p",null,"Learn more about customizing the default theme in the ",(0,i.kt)(o(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,i.kt)("a",null,"theme customization"))," documentation."),(0,i.kt)(p.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,i.kt)(u.k,{property:"line-height",featuredClass:"leading-[3rem]",element:"p",mdxType:"ArbitraryValues"}))}j.isMDXComponent=!0,j.layoutProps=h},59533:function(e,a,t){"use strict";t.d(a,{M:function(){return i}});var n=t(85893),s=t(6774);function i(e){var a=e.filename,t=e.children;return(0,n.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,n.jsx)(s.n,{primary:{name:a},showTabMarkers:!1}),(0,n.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:t})]})}},83434:function(e,a,t){"use strict";t.d(a,{e:function(){return c}});var n=t(26042),s=t(85893),i=t(86010),r=t(98566),o=t(67294),l={none:"",md:"p-8"};function p(e){var a=e.as,t=e.style,r=e.padding,o=e.p,p=e.className,c=e.containerClassName,m=e.html,g=e.children,u=e.hint,d=e.hintClassName,k=e.lightOnly,N=void 0!==k&&k,b=null!=r?r:void 0===o?"md":o,h=l[b];if(void 0===h)throw Error("Invalid padding value: ".concat(JSON.stringify(b)));return(0,s.jsxs)("div",{className:c,children:[void 0!==u&&(0,s.jsx)("div",{className:(0,i.Z)(d,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:u})]})}),(0,s.jsxs)(void 0===a?"div":a,{style:t,className:(0,i.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!N&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,i.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!N&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,n.Z)({className:(0,i.Z)("relative rounded-xl overflow-auto",h,p)},m?{dangerouslySetInnerHTML:{__html:m}}:{children:g})),(0,s.jsx)("div",{className:(0,i.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!N&&"dark:border-white/5")})]})]})}function c(e){return e.resizable?(0,s.jsx)(m,(0,n.Z)({},e)):(0,s.jsx)(p,(0,n.Z)({},e))}function m(e){var a=(0,o.useRef)(),t=(0,r.c$)(0),i=(0,o.useRef)(),l=(0,o.useRef)();return(0,o.useEffect)(function(){var e=new window.ResizeObserver(function(){t.set(0)});return e.observe(a.current),function(){e.disconnect()}},[]),(0,o.useEffect)(function(){l.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:a,className:"relative",children:[(0,s.jsx)(p,(0,n.Z)({as:r.ww.div,style:{marginRight:(0,r.Hm)(t,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:i,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(r.ww.div,{ref:l,drag:"x",_dragX:t,dragMomentum:!1,dragElastic:0,dragConstraints:i,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:t},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},6774:function(e,a,t){"use strict";t.d(a,{n:function(){return i}});var n=t(85893),s=t(86010);function i(e){var a=e.primary,t=e.secondary,i=e.showTabMarkers,r=e.side,o=e.translucent,l=e.children;return(0,n.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,n.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[a.name,(void 0===i||i)&&(a.saved?(0,n.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,n.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,n.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,n.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===r?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==o&&o&&"dark:bg-slate-800/50"),children:[(void 0===t?[]:t).map(function(e){var a=e.name,t=e.open,i=e.className;return(0,n.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",i,{italic:!(void 0===t||t)}),children:a},a)}),l&&(0,n.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:l})]})]})}},29815:function(e,a,t){"use strict";t.d(a,{Z:function(){return r}});var n=t(20943),s=t(13375),i=t(91566);function r(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,s.Z)(e)||(0,i.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,9940,8555,2474,4713,802,9774,2888,179],function(){return e(e.s=22954)}),_N_E=e.O()}]);