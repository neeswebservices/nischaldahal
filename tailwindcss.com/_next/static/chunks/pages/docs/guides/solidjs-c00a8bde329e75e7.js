(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6179],{51486:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/solidjs",function(){return n(41595)}])},32079:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var i=n(85893),s=n(74903);function l(e){var t=e.title,n=e.description,l=e.children;return(0,i.jsxs)(s.i,{children:[(0,i.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,i.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,i.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,i.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:t}),(0,i.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:n})]})}),(0,i.jsx)("section",{className:"mb-16 relative",children:l})]})}},41595:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r},default:function(){return a}});var i=n(85893),s=n(53339),l=n(32079),d=n(62223),o=[{title:"Create your project",body:function(){return(0,i.jsxs)("p",{children:["Start by creating a new SolidJS project if you don't have one set up already. The most common approach is to use"," ",(0,i.jsx)("a",{href:"https://www.solidjs.com/guides/getting-started",children:"the SolidJS Vite template"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npx degit solidjs/templates/js my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:function(){return(0,i.jsxs)("p",{children:["Install ",(0,i.jsx)("code",{children:"tailwindcss"})," and its peer dependencies via npm, and then run the init command to generate both ",(0,i.jsx)("code",{children:"tailwind.config.js"})," and ",(0,i.jsx)("code",{children:"postcss.config.js"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"}},{title:"Configure your template paths",body:function(){return(0,i.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,i.jsx)("code",{children:"tailwind.config.js"})," file."]})},code:{name:"tailwind.config.js",lang:"js",code:"  /** @type {import('tailwindcss').Config} */\n  module.exports = {\n>   content: [\n>     \"./src/**/*.{js,jsx,ts,tsx}\",\n>   ],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }"}},{title:"Add the Tailwind directives to your CSS",body:function(){return(0,i.jsxs)("p",{children:["Add the ",(0,i.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,i.jsx)("code",{children:"./src/index.css"})," file."]})},code:{name:"index.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:function(){return(0,i.jsxs)("p",{children:["Run your build process with ",(0,i.jsx)("code",{children:"npm run dev"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:function(){return(0,i.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."})},code:{name:"App.jsx",lang:"jsx",code:'  export default function App() {\n    return (\n>     <h1 class="text-3xl font-bold underline">\n>       Hello world!\n>     </h1>\n    )\n  }'}},],r=!0;function a(e){var t=e.code;return(0,i.jsx)(l.a,{title:"Install Tailwind CSS with SolidJS",description:"Setting up Tailwind CSS in a SolidJS project.",children:(0,i.jsx)(d.R,{steps:o,code:t})})}a.layoutProps={meta:{title:"Install Tailwind CSS with SolidJS",description:"Setting up Tailwind CSS in a SolidJS project.",section:"Installation"},Layout:s.L,allowOverflow:!1}}},function(e){e.O(0,[6637,8555,4713,8055,9774,2888,179],function(){return e(e.s=51486)}),_N_E=e.O()}]);