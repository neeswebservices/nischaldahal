(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1862],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return m},kt:function(){return u}});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach(function(a){s(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var i=t.createContext({}),c=function(e){var a,n=t.useContext(i),s=n;return e&&(s="function"==typeof(a=e)?e(n):p(p({},n),e)),s},m=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},l=t.forwardRef(function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,m=function(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),l=c(n),u=l["".concat(i,".").concat(s)]||l[s]||o[s]||r;return n?t.createElement(u,p(p({ref:a},m),{},{components:n})):t.createElement(u,p({ref:a},m))});function u(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,p=Array(r);p[0]=l;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,p[1]=i;for(var m=2;m<r;m++)p[m]=n[m];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},33594:function(e,a,n){"use strict";n.d(a,{EL:function(){return m}});var t,s=n(67294),r=["bottom","height","left","right","top","width"],p=new Map,i=function e(){var a=[];p.forEach(function(e,n){var t,s,p=n.getBoundingClientRect();t=p,s=e.rect,void 0===t&&(t={}),void 0===s&&(s={}),r.some(function(e){return t[e]!==s[e]})&&(e.rect=p,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),t=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function m(e,a,n){"boolean"==typeof(r=a)?o=a:(o=null==(u=null==a?void 0:a.observe)||u,l=null==a?void 0:a.onChange),(m=n)&&"[object Function]"==({}).toString.call(m)&&(l=n);var r,m,o,l,u,g=(0,s.useState)(e.current),k=g[0],N=g[1],h=(0,s.useRef)(!1),d=(0,s.useRef)(!1),b=(0,s.useState)(null),j=b[0],x=b[1],O=(0,s.useRef)(l);return c(function(){O.current=l,e.current!==k&&N(e.current)}),c(function(){k&&!h.current&&(h.current=!0,x(k.getBoundingClientRect()))},[k]),c(function(){if(o){var a=k;if(d.current||(d.current=!0,a=e.current),a){var n,s,r=(n=a,s=function(e){null==O.current||O.current(e),x(e)},{observe:function(){var e=0===p.size;p.has(n)?p.get(n).callbacks.push(s):p.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&i()},unobserve:function(){var e=p.get(n);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||p.delete(n),p.size||cancelAnimationFrame(t)}}});return r.observe(),function(){r.unobserve()}}}},[o,k,e]),j}},13744:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/max-height",function(){return n(69050)}])},69050:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return O}});var t=n(99534);n(67294);var s,r=n(3905),p=n(41664),i=n.n(p),c=n(59533),m=n(5679),o=n(53339),l=n(74296),u=n(83629),g=n(1003),k=n(4638),N=n(26939),h=o.L,d={utilities:{".max-h-0":{"max-height":"0px"},".max-h-1":{"max-height":"0.25rem"},".max-h-2":{"max-height":"0.5rem"},".max-h-3":{"max-height":"0.75rem"},".max-h-4":{"max-height":"1rem"},".max-h-5":{"max-height":"1.25rem"},".max-h-6":{"max-height":"1.5rem"},".max-h-7":{"max-height":"1.75rem"},".max-h-8":{"max-height":"2rem"},".max-h-9":{"max-height":"2.25rem"},".max-h-10":{"max-height":"2.5rem"},".max-h-11":{"max-height":"2.75rem"},".max-h-12":{"max-height":"3rem"},".max-h-14":{"max-height":"3.5rem"},".max-h-16":{"max-height":"4rem"},".max-h-20":{"max-height":"5rem"},".max-h-24":{"max-height":"6rem"},".max-h-28":{"max-height":"7rem"},".max-h-32":{"max-height":"8rem"},".max-h-36":{"max-height":"9rem"},".max-h-40":{"max-height":"10rem"},".max-h-44":{"max-height":"11rem"},".max-h-48":{"max-height":"12rem"},".max-h-52":{"max-height":"13rem"},".max-h-56":{"max-height":"14rem"},".max-h-60":{"max-height":"15rem"},".max-h-64":{"max-height":"16rem"},".max-h-72":{"max-height":"18rem"},".max-h-80":{"max-height":"20rem"},".max-h-96":{"max-height":"24rem"},".max-h-px":{"max-height":"1px"},".max-h-0\\.5":{"max-height":"0.125rem"},".max-h-1\\.5":{"max-height":"0.375rem"},".max-h-2\\.5":{"max-height":"0.625rem"},".max-h-3\\.5":{"max-height":"0.875rem"},".max-h-none":{"max-height":"none"},".max-h-full":{"max-height":"100%"},".max-h-screen":{"max-height":"100vh"},".max-h-min":{"max-height":"min-content"},".max-h-max":{"max-height":"max-content"},".max-h-fit":{"max-height":"fit-content"}},sort:u.nR},b=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))},j={Layout:h,classes:d,meta:{title:"Max-Height",description:"Utilities for setting the maximum height of an element."},slug:"max-height",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the maximum height",slug:"setting-the-maximum-height",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},x=l.X_;function O(e){var a=e.components,n=(0,t.Z)(e,["components"]);return(0,r.kt)(x,Object.assign({},j,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(m.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,r.kt)(m.X,{level:3,id:"setting-the-maximum-height",nextElement:{type:"paragraph"}},"Setting the maximum height"),(0,r.kt)("p",null,"Set the maximum height of an element using the ",(0,r.kt)("inlineCode",{parentName:"p"},"max-h-full")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"max-h-screen")," utilities."),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"h-24 ...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"h-48 ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"max-h-full")," ...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)("hr",null),(0,r.kt)(b,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,r.kt)(b,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,r.kt)(N.k,{defaultClass:"h-48 max-h-full",featuredClass:"max-h-screen",mdxType:"HoverFocusAndOtherStates"}),(0,r.kt)(b,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,r.kt)(k.p,{defaultClass:"h-48 max-h-full",featuredClass:"max-h-screen",mdxType:"BreakpointsAndMediaQueries"}),(0,r.kt)("hr",null),(0,r.kt)(m.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,r.kt)(m.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,r.kt)("p",null,"By default, Tailwind’s max-height scale uses a combination of the ",(0,r.kt)(i(),{href:"/docs/customizing-spacing",passHref:!0},(0,r.kt)("a",null,"default spacing scale"))," as well as some additional height related values."),(0,r.kt)("p",null,"You can customize your spacing scale by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.spacing")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.extend.spacing")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,r.kt)(c.M,{filename:"tailwind.config.js"},(0,r.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"spacing"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'128'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'32rem'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,r.kt)("p",null,"Alternatively, you can customize just the max-height scale by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.maxHeight")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.extend.maxHeight")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,r.kt)(c.M,{filename:"tailwind.config.js"},(0,r.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"maxHeight"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'128'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'32rem'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,r.kt)("p",null,"Learn more about customizing the default theme in the ",(0,r.kt)(i(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,r.kt)("a",null,"theme customization"))," documentation."),(0,r.kt)(m.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,r.kt)(g.k,{property:"max-height",featuredClass:"max-h-[32rem]",mdxType:"ArbitraryValues"}))}O.isMDXComponent=!0,O.layoutProps=j},59533:function(e,a,n){"use strict";n.d(a,{M:function(){return r}});var t=n(85893),s=n(6774);function r(e){var a=e.filename,n=e.children;return(0,t.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,t.jsx)(s.n,{primary:{name:a},showTabMarkers:!1}),(0,t.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:n})]})}},6774:function(e,a,n){"use strict";n.d(a,{n:function(){return r}});var t=n(85893),s=n(86010);function r(e){var a=e.primary,n=e.secondary,r=e.showTabMarkers,p=e.side,i=e.translucent,c=e.children;return(0,t.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,t.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[a.name,(void 0===r||r)&&(a.saved?(0,t.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,t.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,t.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,t.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===p?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==i&&i&&"dark:bg-slate-800/50"),children:[(void 0===n?[]:n).map(function(e){var a=e.name,n=e.open,r=e.className;return(0,t.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",r,{italic:!(void 0===n||n)}),children:a},a)}),c&&(0,t.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:c})]})]})}},83629:function(e,a,n){"use strict";n.d(a,{Pg:function(){return r},nR:function(){return s}});var t=n(29815);function s(e){return(0,t.Z)(e).sort(function(e,a){e=e.endsWith("-px")?e.replace(/-px$/,"-0.25"):e,a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a;var n=e.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);n=null===n?NaN:parseFloat(n[1]);var t=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(t=null===t?NaN:parseFloat(t[1]),isNaN(n)&&isNaN(t))?0:isNaN(n)?1:isNaN(t)?-1:n-t})}function r(e){return(0,t.Z)(e).sort(function(e,a){e=e.endsWith("-px")?e.replace(/-px$/,"-0.25"):e,a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a;var n=e.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);n=null===n?NaN:parseFloat(n[1]);var t=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(t=null===t?NaN:parseFloat(t[1]),isNaN(n)&&isNaN(t))?0:isNaN(n)?-1:isNaN(t)?1:n-t})}},29815:function(e,a,n){"use strict";n.d(a,{Z:function(){return p}});var t=n(20943),s=n(13375),r=n(91566);function p(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[8555,2474,4713,802,9774,2888,179],function(){return e(e.s=13744)}),_N_E=e.O()}]);