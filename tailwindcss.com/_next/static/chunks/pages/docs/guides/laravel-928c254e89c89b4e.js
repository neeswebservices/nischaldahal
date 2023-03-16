(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4108],{8861:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/laravel",function(){return t(65516)}])},1967:function(e,n,t){"use strict";t.d(n,{n:function(){return l}});var s=t(85893),i=t(86010),r=t(41664),a=t.n(r);function l(e){var n=e.tabs,t=e.selectedTabIndex;return(0,s.jsx)("div",{className:"flex overflow-auto mb-6 -mx-4 sm:-mx-6",children:(0,s.jsx)("div",{className:"flex-none min-w-full px-4 sm:px-6",children:(0,s.jsx)("ul",{className:"border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5",children:n.map(function(e,n){return(0,s.jsx)("li",{children:(0,s.jsx)("h2",{children:(0,s.jsx)(a(),{href:e.href,scroll:!1,children:(0,s.jsx)("a",{className:(0,i.Z)("flex text-sm leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px",n===t?"text-sky-500 border-current [&_code]:bg-sky-50":"text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700 [&_code]:bg-slate-100 dark:[&_code]:bg-slate-800"),children:e.name})})})},e.key||e.name)})})})})}},38614:function(e,n,t){"use strict";t.d(n,{L:function(){return r}});var s=t(11163),i=t(67294);function r(){var e=(0,s.useRouter)(),n=(0,i.useState)(0),t=n[0],r=n[1];return(0,i.useEffect)(function(){return r(window.location.hash)},[]),(0,i.useEffect)(function(){var n=function(){t!==window.location.hash&&r(window.location.hash)};return e.events.on("hashChangeComplete",n),function(){e.events.off("hashChangeComplete",n)}},[e.events]),t}},32079:function(e,n,t){"use strict";t.d(n,{a:function(){return r}});var s=t(85893),i=t(74903);function r(e){var n=e.title,t=e.description,r=e.children;return(0,s.jsxs)(i.i,{children:[(0,s.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,s.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,s.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,s.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:n}),(0,s.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:t})]})}),(0,s.jsx)("section",{className:"mb-16 relative",children:r})]})}},65516:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return d},default:function(){return u}});var s=t(85893),i=t(38614),r=t(53339),a=t(32079),l=t(62223),o=t(1967),c=[{name:"Using Vite",href:"#vite",steps:[{title:"Create your project",body:function(){return(0,s.jsxs)("p",{children:["Start by creating a new Laravel project if you don’t have one set up already. The most common approach is to use"," ",(0,s.jsxs)("a",{href:"https://laravel.com/docs/9.x#your-first-laravel-project",children:["the Composer ",(0,s.jsx)("code",{children:"create-project"})," command"]}),"."]})},code:{name:"Terminal",lang:"terminal",code:"composer create-project laravel/laravel my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:function(){return(0,s.jsxs)("p",{children:["Install ",(0,s.jsx)("code",{children:"tailwindcss"})," and its peer dependencies via npm, and then run the init command to generate both ",(0,s.jsx)("code",{children:"tailwind.config.js"})," and"," ",(0,s.jsx)("code",{children:"postcss.config.js"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"}},{title:"Configure your template paths",body:function(){return(0,s.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,s.jsx)("code",{children:"tailwind.config.js"})," ","file."]})},code:{name:"tailwind.config.js",lang:"js",code:'  /** @type {import(\'tailwindcss\').Config} */\n  module.exports = {\n>   content: [\n>     "./resources/**/*.blade.php",\n>     "./resources/**/*.js",\n>     "./resources/**/*.vue",\n>   ],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }'}},{title:"Add the Tailwind directives to your CSS",body:function(){return(0,s.jsxs)("p",{children:["Add the ",(0,s.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,s.jsx)("code",{children:"./resources/css/app.css"})," file."]})},code:{name:"app.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:function(){return(0,s.jsxs)("p",{children:["Run your build process with ",(0,s.jsx)("code",{children:"npm run dev"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:function(){return(0,s.jsxs)("p",{children:["Make sure your compiled CSS is included in the ",(0,s.jsx)("code",{children:"<head>"})," then start using Tailwind’s utility classes to style your content."]})},code:{name:"app.blade.php",lang:"html",code:'  <!doctype html>\n  <html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    @vite(\'resources/css/app.css\')\n  </head>\n  <body>\n>   <h1 class="text-3xl font-bold underline">\n>     Hello world!\n>   </h1>\n  </body>\n  </html>'}},]},{name:"Using Laravel Mix",href:"#mix",steps:[{title:"Install Tailwind CSS",body:function(){return(0,s.jsxs)("p",{children:["Install ",(0,s.jsx)("code",{children:"tailwindcss"})," and its peer dependencies via npm, and create your"," ",(0,s.jsx)("code",{children:"tailwind.config.js"})," file."]})},code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init"}},{title:"Add Tailwind to your Laravel Mix configuration",body:function(){return(0,s.jsxs)("p",{children:["In your ",(0,s.jsx)("code",{children:"webpack.mix.js"})," file, add ",(0,s.jsx)("code",{children:"tailwindcss"})," as a PostCSS plugin."]})},code:{name:"webpack.mix.js",lang:"js",code:'  mix.js("resources/js/app.js", "public/js")\n    .postCss("resources/css/app.css", "public/css", [\n>     require("tailwindcss"),\n    ]);'}},{title:"Configure your template paths",body:function(){return(0,s.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,s.jsx)("code",{children:"tailwind.config.js"})," ","file."]})},code:{name:"tailwind.config.js",lang:"js",code:'  /** @type {import(\'tailwindcss\').Config} */\n  module.exports = {\n>   content: [\n>     "./resources/**/*.blade.php",\n>     "./resources/**/*.js",\n>     "./resources/**/*.vue",\n>   ],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }'}},{title:"Add the Tailwind directives to your CSS",body:function(){return(0,s.jsxs)("p",{children:["Add the ",(0,s.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,s.jsx)("code",{children:"./resources/css/app.css"})," file."]})},code:{name:"app.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:function(){return(0,s.jsxs)("p",{children:["Run your build process with ",(0,s.jsx)("code",{children:"npm run watch"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm run watch"}},{title:"Start using Tailwind in your project",body:function(){return(0,s.jsxs)("p",{children:["Make sure your compiled CSS is included in the ",(0,s.jsx)("code",{children:"<head>"})," then start using Tailwind’s utility classes to style your content."]})},code:{name:"app.blade.php",lang:"html",code:'  <!doctype html>\n  <html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link href="{{ asset(\'css/app.css\') }}" rel="stylesheet">\n  </head>\n  <body>\n>   <h1 class="text-3xl font-bold underline">\n>     Hello world!\n>   </h1>\n  </body>\n  </html>'}},]},],d=!0;function u(e){var n=e.code,t=(0,i.L)(),r=c.findIndex(function(e){return e.href===t});return -1===r&&(r=0),(0,s.jsxs)(a.a,{title:"Install Tailwind CSS with Laravel",description:"Setting up Tailwind CSS in a Laravel project.",children:[(0,s.jsx)(o.n,{tabs:c,selectedTabIndex:r}),(0,s.jsx)(l.R,{steps:c[r].steps,code:n[r]})]})}u.layoutProps={meta:{title:"Install Tailwind CSS with Laravel",description:"Setting up Tailwind CSS in a Laravel project.",section:"Installation"},Layout:r.L,allowOverflow:!1}}},function(e){e.O(0,[6637,8555,4713,8055,9774,2888,179],function(){return e(e.s=8861)}),_N_E=e.O()}]);