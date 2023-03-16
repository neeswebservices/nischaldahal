(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6530],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return o},kt:function(){return u}});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach(function(a){s(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var i=t.createContext({}),p=function(e){var a,n=t.useContext(i),s=n;return e&&(s="function"==typeof(a=e)?e(n):c(c({},n),e)),s},o=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef(function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,o=function(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),m=p(n),u=m["".concat(i,".").concat(s)]||m[s]||l[s]||r;return n?t.createElement(u,c(c({ref:a},o),{},{components:n})):t.createElement(u,c({ref:a},o))});function u(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,c=Array(r);c[0]=m;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,c[1]=i;for(var o=2;o<r;o++)c[o]=n[o];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33594:function(e,a,n){"use strict";n.d(a,{EL:function(){return o}});var t,s=n(67294),r=["bottom","height","left","right","top","width"],c=new Map,i=function e(){var a=[];c.forEach(function(e,n){var t,s,c=n.getBoundingClientRect();t=c,s=e.rect,void 0===t&&(t={}),void 0===s&&(s={}),r.some(function(e){return t[e]!==s[e]})&&(e.rect=c,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),t=window.requestAnimationFrame(e)},p="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function o(e,a,n){"boolean"==typeof(r=a)?l=a:(l=null==(u=null==a?void 0:a.observe)||u,m=null==a?void 0:a.onChange),(o=n)&&"[object Function]"==({}).toString.call(o)&&(m=n);var r,o,l,m,u,g=(0,s.useState)(e.current),k=g[0],d=g[1],N=(0,s.useRef)(!1),b=(0,s.useRef)(!1),j=(0,s.useState)(null),f=j[0],O=j[1],h=(0,s.useRef)(m);return p(function(){h.current=m,e.current!==k&&d(e.current)}),p(function(){k&&!N.current&&(N.current=!0,O(k.getBoundingClientRect()))},[k]),p(function(){if(l){var a=k;if(b.current||(b.current=!0,a=e.current),a){var n,s,r=(n=a,s=function(e){null==h.current||h.current(e),O(e)},{observe:function(){var e=0===c.size;c.has(n)?c.get(n).callbacks.push(s):c.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&i()},unobserve:function(){var e=c.get(n);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||c.delete(n),c.size||cancelAnimationFrame(t)}}});return r.observe(),function(){r.unobserve()}}}},[l,k,e]),f}},17469:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-size",function(){return n(10481)}])},10481:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return O}});var t=n(99534);n(67294);var s,r=n(3905),c=n(41664),i=n.n(c),p=n(59533),o=n(5679),l=n(83434),m=n(53339),u=n(74296),g=n(1003),k=n(4638),d=n(26939),N=m.L,b=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))},j={Layout:N,classes:{utilities:{".bg-auto":{"background-size":"auto"},".bg-cover":{"background-size":"cover"},".bg-contain":{"background-size":"contain"}}},meta:{title:"Background Size",description:"Utilities for controlling the background size of an element's background image."},slug:"background-size",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Auto",slug:"auto",children:[]},{title:"Cover",slug:"cover",children:[]},{title:"Contain",slug:"contain",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},f=u.X_;function O(e){var a=e.components,n=(0,t.Z)(e,["components"]);return(0,r.kt)(f,Object.assign({},j,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,r.kt)(o.X,{level:3,id:"auto",nextElement:{type:"paragraph"}},"Auto"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"bg-auto")," to display the background image at its default size."),(0,r.kt)(l.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="relative flex items-center justify-center h-48 rounded-lg w-56 sm:w-96 mx-auto overflow-hidden">\n    <div class="absolute inset-0 opacity-50 bg-stripes-gray"></div>\n    <div class="relative z-10 w-full h-full bg-auto bg-no-repeat bg-center bg-[url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=160&q=80)]">\n    </div>\n  </div>\n'}),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"bg-auto")," bg-no-repeat bg-center ...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token special-attr"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"style"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token value css language-css"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token property"}),"background-image"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),":")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token url"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token function"}),"url"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"))),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)(o.X,{level:3,id:"cover",nextElement:{type:"paragraph"}},"Cover"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"bg-cover")," to scale the background image until it fills the background layer."),(0,r.kt)(l.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="relative flex items-center justify-center rounded-lg overflow-hidden w-56 sm:w-96 mx-auto">\n    <div class="absolute inset-0 opacity-50 bg-stripes-gray"></div>\n    <div class="relative z-10 w-full h-48 bg-cover bg-no-repeat bg-center bg-[url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=640&q=80)]">\n    </div>\n  </div>\n'}),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"bg-cover")," bg-center ...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token special-attr"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"style"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token value css language-css"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token property"}),"background-image"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),":")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token url"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token function"}),"url"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"))),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)(o.X,{level:3,id:"contain",nextElement:{type:"paragraph"}},"Contain"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"bg-contain")," to scale the background image to the outer edges without cropping or stretching."),(0,r.kt)(l.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="relative flex items-center justify-center rounded-lg overflow-hidden w-56 sm:w-96 mx-auto">\n    <div class="absolute inset-0 opacity-50 bg-stripes-gray"></div>\n    <div class="relative z-10 w-full h-48 bg-contain bg-no-repeat bg-center sm:bg-top bg-[url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=640&q=80)]">\n    </div>\n  </div>\n'}),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"bg-contain")," bg-center ...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token special-attr"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"style"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token value css language-css"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token property"}),"background-image"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),":")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token url"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token function"}),"url"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"...",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"))),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'))),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)("hr",null),(0,r.kt)(b,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,r.kt)(b,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,r.kt)(d.k,{defaultClass:"bg-auto",featuredClass:"bg-contain",mdxType:"HoverFocusAndOtherStates"}),(0,r.kt)(b,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,r.kt)(k.p,{defaultClass:"bg-auto",featuredClass:"bg-contain",mdxType:"BreakpointsAndMediaQueries"}),(0,r.kt)("hr",null),(0,r.kt)(o.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,r.kt)(o.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,r.kt)("p",null,"By default, Tailwind provides utilities for ",(0,r.kt)("inlineCode",{parentName:"p"},"auto"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cover"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"contain")," background sizes. You can change, add, or remove these by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.backgroundSize")," section of your config."),(0,r.kt)(p.M,{filename:"tailwind.config.js"},(0,r.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"backgroundSize"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'auto'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'auto'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'cover'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'cover'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'contain'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'contain'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'50%'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'50%'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'16'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'4rem'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,r.kt)("p",null,"Learn more about customizing the default theme in the ",(0,r.kt)(i(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,r.kt)("a",null,"theme customization"))," documentation."),(0,r.kt)(o.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,r.kt)(g.k,{property:"background-size",featuredClass:"bg-[length:200px_100px]",mdxType:"ArbitraryValues"}))}O.isMDXComponent=!0,O.layoutProps=j},59533:function(e,a,n){"use strict";n.d(a,{M:function(){return r}});var t=n(85893),s=n(6774);function r(e){var a=e.filename,n=e.children;return(0,t.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,t.jsx)(s.n,{primary:{name:a},showTabMarkers:!1}),(0,t.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:n})]})}},83434:function(e,a,n){"use strict";n.d(a,{e:function(){return l}});var t=n(26042),s=n(85893),r=n(86010),c=n(98566),i=n(67294),p={none:"",md:"p-8"};function o(e){var a=e.as,n=e.style,c=e.padding,i=e.p,o=e.className,l=e.containerClassName,m=e.html,u=e.children,g=e.hint,k=e.hintClassName,d=e.lightOnly,N=void 0!==d&&d,b=null!=c?c:void 0===i?"md":i,j=p[b];if(void 0===j)throw Error("Invalid padding value: ".concat(JSON.stringify(b)));return(0,s.jsxs)("div",{className:l,children:[void 0!==g&&(0,s.jsx)("div",{className:(0,r.Z)(k,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:g})]})}),(0,s.jsxs)(void 0===a?"div":a,{style:n,className:(0,r.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!N&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,r.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!N&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,t.Z)({className:(0,r.Z)("relative rounded-xl overflow-auto",j,o)},m?{dangerouslySetInnerHTML:{__html:m}}:{children:u})),(0,s.jsx)("div",{className:(0,r.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!N&&"dark:border-white/5")})]})]})}function l(e){return e.resizable?(0,s.jsx)(m,(0,t.Z)({},e)):(0,s.jsx)(o,(0,t.Z)({},e))}function m(e){var a=(0,i.useRef)(),n=(0,c.c$)(0),r=(0,i.useRef)(),p=(0,i.useRef)();return(0,i.useEffect)(function(){var e=new window.ResizeObserver(function(){n.set(0)});return e.observe(a.current),function(){e.disconnect()}},[]),(0,i.useEffect)(function(){p.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:a,className:"relative",children:[(0,s.jsx)(o,(0,t.Z)({as:c.ww.div,style:{marginRight:(0,c.Hm)(n,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:r,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(c.ww.div,{ref:p,drag:"x",_dragX:n,dragMomentum:!1,dragElastic:0,dragConstraints:r,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:n},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},6774:function(e,a,n){"use strict";n.d(a,{n:function(){return r}});var t=n(85893),s=n(86010);function r(e){var a=e.primary,n=e.secondary,r=e.showTabMarkers,c=e.side,i=e.translucent,p=e.children;return(0,t.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,t.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[a.name,(void 0===r||r)&&(a.saved?(0,t.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,t.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,t.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,t.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===c?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==i&&i&&"dark:bg-slate-800/50"),children:[(void 0===n?[]:n).map(function(e){var a=e.name,n=e.open,r=e.className;return(0,t.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",r,{italic:!(void 0===n||n)}),children:a},a)}),p&&(0,t.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:p})]})]})}},29815:function(e,a,n){"use strict";n.d(a,{Z:function(){return c}});var t=n(20943),s=n(13375),r=n(91566);function c(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,9940,8555,2474,4713,802,9774,2888,179],function(){return e(e.s=17469)}),_N_E=e.O()}]);