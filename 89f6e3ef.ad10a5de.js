(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),o=n(9),r=(n(0),n(150)),s={id:"css-modules",title:"CSS Modules with PostCSS",sidebar_label:"CSS Modules with PostCSS"},i=[],c={id:"what-is-included/css-modules",title:"CSS Modules with PostCSS",description:"CSS Modules are `.module.css` files that can be locally scoped.",source:"@site/docs/what-is-included/css-modules.md",permalink:"/docs/what-is-included/css-modules",sidebar_label:"CSS Modules with PostCSS",sidebar:"docs",previous:{title:"ESLint & Stylelint",permalink:"/docs/what-is-included/eslint-stylelint"},next:{title:"Internationalization",permalink:"/docs/what-is-included/internationalization"}},l={rightToc:i,metadata:c},p="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(p,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"CSS Modules are ",Object(r.b)("inlineCode",{parentName:"p"},".module.css")," files that can be locally scoped."),Object(r.b)("p",null,"This boilerplate is configured so all ",Object(r.b)("inlineCode",{parentName:"p"},".module.css")," files can be used as modules by default thanks to Next.js' ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org/blog/next-9-2"}),"9.2.0")," version which introduces built-in CSS Support for both global and component-level stylesheets."),Object(r.b)("p",null,"We also use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://postcss.org/"}),Object(r.b)("strong",{parentName:"a"},"PostCSS"))," to transform the styles according our browser targets defined in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),". To do so, we apply our own preset: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/moxystudio/postcss-preset-moxy"}),Object(r.b)("inlineCode",{parentName:"a"},"postcss-preset-moxy")),"."))}d.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a),r=o.a.createContext({}),s=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=s(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,u=p[i+"."+d]||p[d]||l[d]||r;return n?o.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):o.a.createElement(u,Object.assign({},{ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);