(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9971],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return o},kt:function(){return u}});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach(function(a){s(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var c=t.createContext({}),p=function(e){var a,n=t.useContext(c),s=n;return e&&(s="function"==typeof(a=e)?e(n):r(r({},n),e)),s},o=function(e){var a=p(e.components);return t.createElement(c.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef(function(e,a){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,o=function(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),m=p(n),u=m["".concat(c,".").concat(s)]||m[s]||l[s]||i;return n?t.createElement(u,r(r({ref:a},o),{},{components:n})):t.createElement(u,r({ref:a},o))});function u(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=n.length,r=Array(i);r[0]=m;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c.mdxType="string"==typeof e?e:s,r[1]=c;for(var o=2;o<i;o++)r[o]=n[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33594:function(e,a,n){"use strict";n.d(a,{EL:function(){return o}});var t,s=n(67294),i=["bottom","height","left","right","top","width"],r=new Map,c=function e(){var a=[];r.forEach(function(e,n){var t,s,r=n.getBoundingClientRect();t=r,s=e.rect,void 0===t&&(t={}),void 0===s&&(s={}),i.some(function(e){return t[e]!==s[e]})&&(e.rect=r,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),t=window.requestAnimationFrame(e)},p="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function o(e,a,n){"boolean"==typeof(i=a)?l=a:(l=null==(u=null==a?void 0:a.observe)||u,m=null==a?void 0:a.onChange),(o=n)&&"[object Function]"==({}).toString.call(o)&&(m=n);var i,o,l,m,u,g=(0,s.useState)(e.current),d=g[0],k=g[1],N=(0,s.useRef)(!1),b=(0,s.useRef)(!1),j=(0,s.useState)(null),h=j[0],f=j[1],O=(0,s.useRef)(m);return p(function(){O.current=m,e.current!==d&&k(e.current)}),p(function(){d&&!N.current&&(N.current=!0,f(d.getBoundingClientRect()))},[d]),p(function(){if(l){var a=d;if(b.current||(b.current=!0,a=e.current),a){var n,s,i=(n=a,s=function(e){null==O.current||O.current(e),f(e)},{observe:function(){var e=0===r.size;r.has(n)?r.get(n).callbacks.push(s):r.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&c()},unobserve:function(){var e=r.get(n);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||r.delete(n),r.size||cancelAnimationFrame(t)}}});return i.observe(),function(){i.unobserve()}}}},[l,d,e]),h}},21911:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/z-index",function(){return n(91773)}])},91773:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return f}});var t=n(99534);n(67294);var s,i=n(3905),r=n(41664),c=n.n(r),p=n(59533),o=n(5679),l=n(83434),m=n(53339),u=n(74296),g=n(1003),d=n(4638),k=n(26939),N=m.L,b=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",Object.assign({},e))},j={Layout:N,classes:{utilities:{".z-0":{"z-index":"0"},".z-10":{"z-index":"10"},".z-20":{"z-index":"20"},".z-30":{"z-index":"30"},".z-40":{"z-index":"40"},".z-50":{"z-index":"50"},".z-auto":{"z-index":"auto"}}},meta:{title:"Z-Index",description:"Utilities for controlling the stack order of an element."},slug:"z-index",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the z-index",slug:"setting-the-z-index",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},h=u.X_;function f(e){var a=e.components,n=(0,t.Z)(e,["components"]);return(0,i.kt)(h,Object.assign({},j,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,i.kt)(o.X,{level:3,id:"setting-the-z-index",nextElement:{type:"paragraph"}},"Setting the z-index"),(0,i.kt)("p",null,"Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"z-{index}")," utilities."),(0,i.kt)(l.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex justify-center -space-x-3 font-mono text-white text-sm font-bold leading-6">\n    <div class="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-40 dark:ring-slate-900">05</div>\n    <div class="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-30 dark:ring-slate-900">04</div>\n    <div class="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-20 dark:ring-slate-900">03</div>\n    <div class="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-10 dark:ring-slate-900">02</div>\n    <div class="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-0 dark:ring-slate-900">01</div>\n  </div>\n'}),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"z-40")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"05",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"z-30")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"04",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"z-20")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"03",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"z-10")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"z-0")," ...",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"01",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)(o.X,{level:3,id:"using-negative-values",nextElement:{type:"paragraph"}},"Using negative values"),(0,i.kt)("p",null,"To use a negative z-index value, prefix the class name with a dash to convert it to a negative value."),(0,i.kt)("pre",Object.assign({},{className:"language-html"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"-z-50"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,i.kt)("hr",null),(0,i.kt)(b,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,i.kt)(b,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,i.kt)(k.k,{defaultClass:"z-0",featuredClass:"z-50",mdxType:"HoverFocusAndOtherStates"}),(0,i.kt)(b,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,i.kt)(d.p,{defaultClass:"z-0",featuredClass:"z-50",mdxType:"BreakpointsAndMediaQueries"}),(0,i.kt)("hr",null),(0,i.kt)(o.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,i.kt)(o.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,i.kt)("p",null,"By default, Tailwind provides six numeric ",(0,i.kt)("inlineCode",{parentName:"p"},"z-index")," utilities and an ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," utility. You can customize these values by editing ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.zIndex")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.extend.zIndex")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,i.kt)(p.M,{filename:"tailwind.config.js"},(0,i.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"zIndex"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'100'"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'100'"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,i.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,i.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,i.kt)("p",null,"Learn more about customizing the default theme in the ",(0,i.kt)(c(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,i.kt)("a",null,"theme customization"))," documentation."),(0,i.kt)(o.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,i.kt)(g.k,{property:"z-index",featuredClass:"z-[100]",mdxType:"ArbitraryValues"}))}f.isMDXComponent=!0,f.layoutProps=j},59533:function(e,a,n){"use strict";n.d(a,{M:function(){return i}});var t=n(85893),s=n(6774);function i(e){var a=e.filename,n=e.children;return(0,t.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,t.jsx)(s.n,{primary:{name:a},showTabMarkers:!1}),(0,t.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:n})]})}},83434:function(e,a,n){"use strict";n.d(a,{e:function(){return l}});var t=n(26042),s=n(85893),i=n(86010),r=n(98566),c=n(67294),p={none:"",md:"p-8"};function o(e){var a=e.as,n=e.style,r=e.padding,c=e.p,o=e.className,l=e.containerClassName,m=e.html,u=e.children,g=e.hint,d=e.hintClassName,k=e.lightOnly,N=void 0!==k&&k,b=null!=r?r:void 0===c?"md":c,j=p[b];if(void 0===j)throw Error("Invalid padding value: ".concat(JSON.stringify(b)));return(0,s.jsxs)("div",{className:l,children:[void 0!==g&&(0,s.jsx)("div",{className:(0,i.Z)(d,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:g})]})}),(0,s.jsxs)(void 0===a?"div":a,{style:n,className:(0,i.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!N&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,i.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!N&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,t.Z)({className:(0,i.Z)("relative rounded-xl overflow-auto",j,o)},m?{dangerouslySetInnerHTML:{__html:m}}:{children:u})),(0,s.jsx)("div",{className:(0,i.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!N&&"dark:border-white/5")})]})]})}function l(e){return e.resizable?(0,s.jsx)(m,(0,t.Z)({},e)):(0,s.jsx)(o,(0,t.Z)({},e))}function m(e){var a=(0,c.useRef)(),n=(0,r.c$)(0),i=(0,c.useRef)(),p=(0,c.useRef)();return(0,c.useEffect)(function(){var e=new window.ResizeObserver(function(){n.set(0)});return e.observe(a.current),function(){e.disconnect()}},[]),(0,c.useEffect)(function(){p.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:a,className:"relative",children:[(0,s.jsx)(o,(0,t.Z)({as:r.ww.div,style:{marginRight:(0,r.Hm)(n,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:i,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(r.ww.div,{ref:p,drag:"x",_dragX:n,dragMomentum:!1,dragElastic:0,dragConstraints:i,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:n},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},6774:function(e,a,n){"use strict";n.d(a,{n:function(){return i}});var t=n(85893),s=n(86010);function i(e){var a=e.primary,n=e.secondary,i=e.showTabMarkers,r=e.side,c=e.translucent,p=e.children;return(0,t.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,t.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[a.name,(void 0===i||i)&&(a.saved?(0,t.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,t.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,t.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,t.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===r?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==c&&c&&"dark:bg-slate-800/50"),children:[(void 0===n?[]:n).map(function(e){var a=e.name,n=e.open,i=e.className;return(0,t.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",i,{italic:!(void 0===n||n)}),children:a},a)}),p&&(0,t.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:p})]})]})}},29815:function(e,a,n){"use strict";n.d(a,{Z:function(){return r}});var t=n(20943),s=n(13375),i=n(91566);function r(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||(0,s.Z)(e)||(0,i.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,9940,8555,2474,4713,802,9774,2888,179],function(){return e(e.s=21911)}),_N_E=e.O()}]);