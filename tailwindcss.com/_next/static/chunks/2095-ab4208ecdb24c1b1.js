(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2095],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(67294);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){f(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var c=n.createContext({}),i=function(e){var t,r=n.useContext(c),f=r;return e&&(f="function"==typeof(t=e)?e(r):o(o({},r),e)),f},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef(function(e,t){var r=e.components,f=e.mdxType,a=e.originalType,c=e.parentName,u=function(e,t){if(null==e)return{};var r,n,f=function(e,t){if(null==e)return{};var r,n,f={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(f[r]=e[r]);return f}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(f[r]=e[r])}return f}(e,["components","mdxType","originalType","parentName"]),d=i(r),s=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(s,o(o({ref:t},u),{},{components:r})):n.createElement(s,o({ref:t},u))});function s(e,t){var r=arguments,f=t&&t.mdxType;if("string"==typeof e||f){var a=r.length,o=Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:f,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33594:function(e,t,r){"use strict";r.d(t,{EL:function(){return u}});var n,f=r(67294),a=["bottom","height","left","right","top","width"],o=new Map,c=function e(){var t=[];o.forEach(function(e,r){var n,f,o=r.getBoundingClientRect();n=o,f=e.rect,void 0===n&&(n={}),void 0===f&&(f={}),a.some(function(e){return n[e]!==f[e]})&&(e.rect=o,t.push(e))}),t.forEach(function(e){e.callbacks.forEach(function(t){return t(e.rect)})}),n=window.requestAnimationFrame(e)},i="undefined"!=typeof window&&window.document&&window.document.createElement?f.useLayoutEffect:f.useEffect;function u(e,t,r){"boolean"==typeof(a=t)?l=t:(l=null==(s=null==t?void 0:t.observe)||s,d=null==t?void 0:t.onChange),(u=r)&&"[object Function]"==({}).toString.call(u)&&(d=r);var a,u,l,d,s,b=(0,f.useState)(e.current),p=b[0],y=b[1],v=(0,f.useRef)(!1),h=(0,f.useRef)(!1),g=(0,f.useState)(null),m=g[0],w=g[1],O=(0,f.useRef)(d);return i(function(){O.current=d,e.current!==p&&y(e.current)}),i(function(){p&&!v.current&&(v.current=!0,w(p.getBoundingClientRect()))},[p]),i(function(){if(l){var t=p;if(h.current||(h.current=!0,t=e.current),t){var r,f,a=(r=t,f=function(e){null==O.current||O.current(e),w(e)},{observe:function(){var e=0===o.size;o.has(r)?o.get(r).callbacks.push(f):o.set(r,{rect:void 0,hasRectChanged:!1,callbacks:[f]}),e&&c()},unobserve:function(){var e=o.get(r);if(e){var t=e.callbacks.indexOf(f);t>=0&&e.callbacks.splice(t,1),e.callbacks.length||o.delete(r),o.size||cancelAnimationFrame(n)}}});return a.observe(),function(){a.unobserve()}}}},[l,p,e]),m}},26905:function(e){e.exports=function(e,t,r,n,f){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)e=e?e[t[n]]:f;return e===f?r:e}},83454:function(e,t,r){"use strict";var n,f;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(f=r.g.process)?void 0:f.env)?r.g.process:r(77663)},77663:function(e){!function(){var t={229:function(e){var t,r,n,f=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(n){r=o}}();var i=[],u=!1,l=-1;function d(){u&&n&&(u=!1,n.length?i=n.concat(i):l=-1,i.length&&s())}function s(){if(!u){var e=c(d);u=!0;for(var t=i.length;t;){for(n=i,i=[];++l<t;)n&&n[l].run();l=-1,t=i.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function p(){}f.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];i.push(new b(e,t)),1!==i.length||u||c(s)},b.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=p,f.addListener=p,f.once=p,f.off=p,f.removeListener=p,f.removeAllListeners=p,f.emit=p,f.prependListener=p,f.prependOnceListener=p,f.listeners=function(e){return[]},f.binding=function(e){throw Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw Error("process.chdir is not supported")},f.umask=function(){return 0}}},r={};function n(e){var f=r[e];if(void 0!==f)return f.exports;var a=r[e]={exports:{}},o=!0;try{t[e](a,a.exports,n),o=!1}finally{o&&delete r[e]}return a.exports}n.ab="//";var f=n(229);e.exports=f}()},74241:function(e){var t=String,r=function(){return{isColorSupported:!1,reset:t,bold:t,dim:t,italic:t,underline:t,inverse:t,hidden:t,strikethrough:t,black:t,red:t,green:t,yellow:t,blue:t,magenta:t,cyan:t,white:t,gray:t,bgBlack:t,bgRed:t,bgGreen:t,bgYellow:t,bgBlue:t,bgMagenta:t,bgCyan:t,bgWhite:t}};e.exports=r(),e.exports.createColors=r},69808:function(e,t,r){let n=r(14921);e.exports=(n.__esModule?n:{default:n}).default},14921:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>o});let f=(n=r(51679),n&&n.__esModule?n:{default:n});function a({version:e,from:t,to:r}){f.default.warn(`${t}-color-renamed`,[`As of Tailwind CSS ${e}, \`${t}\` has been renamed to \`${r}\`.`,"Update your configuration file to silence this warning."])}let o={inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},get lightBlue(){return a({version:"v2.2",from:"lightBlue",to:"sky"}),this.sky},get warmGray(){return a({version:"v3.0",from:"warmGray",to:"stone"}),this.stone},get trueGray(){return a({version:"v3.0",from:"trueGray",to:"neutral"}),this.neutral},get coolGray(){return a({version:"v3.0",from:"coolGray",to:"gray"}),this.gray},get blueGray(){return a({version:"v3.0",from:"blueGray",to:"slate"}),this.slate}}},51679:function(e,t,r){"use strict";var n,f=r(83454);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{dim:()=>i,default:()=>u});let a=(n=r(74241),n&&n.__esModule?n:{default:n}),o=new Set;function c(e,t,r){(void 0===f||!f.env.JEST_WORKER_ID)&&(r&&o.has(r)||(r&&o.add(r),console.warn(""),t.forEach(t=>console.warn(e,"-",t))))}function i(e){return a.default.dim(e)}let u={info(e,t){c(a.default.bold(a.default.cyan("info")),...Array.isArray(e)?[e]:[t,e])},warn(e,t){c(a.default.bold(a.default.yellow("warn")),...Array.isArray(e)?[e]:[t,e])},risk(e,t){c(a.default.bold(a.default.magenta("risk")),...Array.isArray(e)?[e]:[t,e])}}},29815:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(20943),f=r(13375),a=r(91566);function o(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,f.Z)(e)||(0,a.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);