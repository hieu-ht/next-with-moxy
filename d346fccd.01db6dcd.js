(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{167:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(9),r=(t(0),t(172)),o={id:"environment-variables",title:"Environment variables",sidebar_label:"Environment variables"},l={id:"what-is-included/environment-variables",title:"Environment variables",description:"This boilerplate is setup to use dotenv to facilitate loading environment variables from the .env file. We already provide an .env.sample file, which you can clone to a .env file so you have a starting point with all the environment variables suitable for development.",source:"@site/docs/what-is-included/environment-variables.md",permalink:"/docs/what-is-included/environment-variables",sidebar_label:"Environment variables",sidebar:"docs",previous:{title:"Browser support",permalink:"/docs/what-is-included/browser-support"},next:{title:"Docker",permalink:"/docs/what-is-included/docker"}},b=[{value:"Build-time environment variables",id:"build-time-environment-variables",children:[{value:"Adding a new environment variable",id:"adding-a-new-environment-variable",children:[]}]},{value:"Runtime configuration",id:"runtime-configuration",children:[{value:"Adding a new runtime config",id:"adding-a-new-runtime-config",children:[]}]}],c={rightToc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This boilerplate is setup to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/dotenv"}),Object(r.b)("inlineCode",{parentName:"a"},"dotenv"))," to facilitate loading environment variables from the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file. We already provide an ",Object(r.b)("inlineCode",{parentName:"p"},".env.sample")," file, which you can clone to a ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file so you have a starting point with all the environment variables suitable for development."),Object(r.b)("p",null,"In Next.js, you may inject configuration through environment variables inlined at build-time or through runtime configuration."),Object(r.b)("p",null,"The following environment variables already come with the boilerplate:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Identifier"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GTM_CONTAINER_ID"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Build-time"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://tagmanager.google.com/"}),"Google Tag Manager")," container ID that is used for ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/what-is-included/analytics"}),"analytics")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SITE_URL"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Build-time"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Fully qualified URL where the application will be available at (without trailing slash)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"undefined"))))),Object(r.b)("h2",{id:"build-time-environment-variables"},"Build-time environment variables"),Object(r.b)("p",null,"In general, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org/docs/api-reference/next.config.js/environment-variables"}),"build-time configuration")," via environment variables is preferable as they give us many benefits, such as serverless compatibility and dead-code elimination."),Object(r.b)("p",null,"You can access these variables from ",Object(r.b)("inlineCode",{parentName:"p"},"process.env"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"if (process.env.FEATURE_A) {\n    // Do something..\n}\n")),Object(r.b)("h3",{id:"adding-a-new-environment-variable"},"Adding a new environment variable"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Define the environment variable in ",Object(r.b)("inlineCode",{parentName:"p"},".env")," and ",Object(r.b)("inlineCode",{parentName:"p"},".env.sample"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# ...\n\n# Enables feature "A"\nFEATURE_A=1\n')),Object(r.b)("p",{parentName:"li"},"You should provide a good default value for development in the ",Object(r.b)("inlineCode",{parentName:"p"},".env.sample"),", if applicable.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add it to the ",Object(r.b)("inlineCode",{parentName:"p"},"env")," key at the very end of the ",Object(r.b)("inlineCode",{parentName:"p"},"next.config.js")," file:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n    env: {\n        // ...\n        FEATURE_A: process.env.FEATURE_A\n    },\n}\n")),Object(r.b)("p",{parentName:"li"},"If you want to validate environment variables, we suggest you to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/hapijs/joi"}),Object(r.b)("inlineCode",{parentName:"a"},"@hapi/joi"))," with its ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/hapijs/joi/blob/master/API.md#attemptvalue-schema-message-options"}),Object(r.b)("inlineCode",{parentName:"a"},"attempt"))," function, like the following example:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n    env: {\n        // ...\n        FEATURE_A: Joi.attempt(\n            process.env.FEATURE_A,\n            Joi.boolean()\n                .truthy('1')\n                .falsy('0')\n                .default(false)\n            'FEATURE_A - '\n        ),\n    },\n}\n")),Object(r.b)("p",{parentName:"li"},"If your environment variable is mandatory, please use ",Object(r.b)("inlineCode",{parentName:"p"},".presence()")," like ",Object(r.b)("inlineCode",{parentName:"p"},"SITE_URL")," is using.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add it to the Dockerfile"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile"}),"# Define build arguments & map them to environment variables\nARG FEATURE_A\nENV FEATURE_A ${FEATURE_A}\n")))),Object(r.b)("h2",{id:"runtime-configuration"},"Runtime configuration"),Object(r.b)("p",null,"While build-time environments are prefereable, there are some scenarios where they might pose a problem.\nOne scenario is when it's impossible or unfesable to having to rebuild the project when configuration changes. If that's the case, you may use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org/docs#runtime-configuration"}),"runtime configuration")," instead."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Be aware that runtime configuration will make your project incompatible with serverless deployments and static optimization.")),Object(r.b)("p",null,"You can access runtime configuration by using ",Object(r.b)("inlineCode",{parentName:"p"},"next/config"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { getConfig } from 'next/config';\n\nconst { serverRuntimeConfig, publicRuntimeConfig } = getConfig();\n\n// Config below will be available only on the server side\nconsole.log(serverRuntimeConfig.SOME_SERVICE_PRIVATE_KEY);\n// Config below will be available on both server and client\nconsole.log(publicRuntimeConfig.SOME_SERVICE_PUBLIC_KEY);\n")),Object(r.b)("h3",{id:"adding-a-new-runtime-config"},"Adding a new runtime config"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Define the environment variable in ",Object(r.b)("inlineCode",{parentName:"li"},".env")," and ",Object(r.b)("inlineCode",{parentName:"li"},".env.sample"),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# ...\n\n# Some necessary keys to interact with a third-party service\nSOME_SERVICE_PUBLIC_KEY=\nSOME_SERVICE_PRIVATE_KEY=\n")),Object(r.b)("p",null,"You should provide a good default value for development in the ",Object(r.b)("inlineCode",{parentName:"p"},".env.sample"),", if applicable."),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Add it to the ",Object(r.b)("inlineCode",{parentName:"li"},"env")," key at the very end of the ",Object(r.b)("inlineCode",{parentName:"li"},"next.config.js")," file:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n    publicRuntimeConfig: {\n        // ...\n        SOME_SERVICE_PUBLIC_KEY: process.env.SOME_SERVICE_PUBLIC_KEY\n    },\n    serverRuntimeConfig: {\n        // ...\n        SOME_SERVICE_PRIVATE_KEY: process.env.SOME_SERVICE_PRIVATE_KEY\n    },\n}\n")))}p.isMDXComponent=!0},172:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(t),u=a,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||r;return t?i.a.createElement(d,l(l({ref:n},c),{},{components:t})):i.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);