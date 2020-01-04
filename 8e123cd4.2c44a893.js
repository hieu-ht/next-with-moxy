(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(6),i=(n(0),n(116)),r={id:"node-modules-compiling",title:"Node modules compiling",sidebar_label:"Node modules compiling"},l=[],c={id:"what-is-included/node-modules-compiling",title:"Node modules compiling",description:"The boilerplate includes [`@moxy/next-compile-node-modules`](https://github.com/moxystudio/next-compile-node-modules), a Next.js plugin that ensures Babel will compile `node_modules`.",source:"@site/docs/what-is-included/node-modules-compiling.md",permalink:"/docs/what-is-included/node-modules-compiling",sidebar_label:"Node modules compiling",sidebar:"docs",previous:{title:"Webpack oneOf rules",permalink:"/docs/what-is-included/webpack-one-of-rules"},next:{title:"And\xa0everything\xa0that\xa0comes\xa0with\xa0Next.js",permalink:"/docs/what-is-included/everything-else"}},p={rightToc:l,metadata:c},s="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(s,Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The boilerplate includes ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-compile-node-modules"}),Object(i.b)("inlineCode",{parentName:"a"},"@moxy/next-compile-node-modules")),", a Next.js plugin that ensures Babel will compile ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(i.b)("p",null,"As package authors aren't aware of what context their packages will be used in, this should instead be a concern of app developers, who would use use ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env"}),Object(i.b)("inlineCode",{parentName:"a"},"@babel/preset-env")),' to compile included packages to be compatible with their desired targets (e.g., "IE 11").'),Object(i.b)("p",null,"Popular boilerplate projects such as ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app"}),Object(i.b)("inlineCode",{parentName:"a"},"create-react-app"))," now compile all ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),", so we have opted to implement this behavior by default."))}d.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o),i=a.a.createContext({}),r=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),s=r(n),d=o,u=s[l+"."+d]||s[d]||p[d]||i;return n?a.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);