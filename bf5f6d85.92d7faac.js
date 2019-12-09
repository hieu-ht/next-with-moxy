(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(6),a=(n(0),n(116)),o={id:"testing-with-jest-rtl",title:"Testing with Jest & RTL",sidebar_label:"Testing with Jest & RTL"},s=[{value:"RTL",id:"rtl",children:[]}],c={id:"what-is-included/testing-with-jest-rtl",title:"Testing with Jest & RTL",description:"For testing, this boilerplate is configured to use [**Jest**](https://jestjs.io/) and [**react-testing-library**](https://github.com/testing-library/react-testing-library), providing strong options for testing varied types of code.",source:"@site/docs/what-is-included/jest-rtl.md",permalink:"/docs/what-is-included/testing-with-jest-rtl",sidebar_label:"Testing with Jest & RTL",sidebar:"docs",previous:{title:"Internationalization",permalink:"/docs/what-is-included/internationalization"},next:{title:"Browser Support",permalink:"/docs/what-is-included/browser-support"}},p={rightToc:s,metadata:c},l="wrapper";function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(l,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For testing, this boilerplate is configured to use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/"}),Object(a.b)("strong",{parentName:"a"},"Jest"))," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/testing-library/react-testing-library"}),Object(a.b)("strong",{parentName:"a"},"react-testing-library")),", providing strong options for testing varied types of code."),Object(a.b)("p",null,"You can find more details about our implementation of Jest in its configuration file, ",Object(a.b)("inlineCode",{parentName:"p"},"jest.config.js"),", which uses our own ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/moxystudio/jest-config"}),Object(a.b)("inlineCode",{parentName:"a"},"@moxy/jest-config")),"."),Object(a.b)("h2",{id:"rtl"},"RTL"),Object(a.b)("p",null,"We have historically used ",Object(a.b)("strong",{parentName:"p"},"Enzyme")," for testing, however, with the introduction of new lifecycle methods and React hooks, we noticed that ",Object(a.b)("strong",{parentName:"p"},"Enzyme")," did not keep up with their support for these new features."),Object(a.b)("p",null,"Due to the nature of ",Object(a.b)("strong",{parentName:"p"},"react-testing-library"),", we don't foresee it suffering from the same problems, and, together with moving towards a philosophy of testing with a stronger user perspective in mind, we rethought the tool we use for unit testing and have since then opted for ",Object(a.b)("strong",{parentName:"p"},"react-testing-library"),"."))}u.isMDXComponent=!0},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),i=n.n(r),a=i.a.createContext({}),o=function(e){var t=i.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=o(e.components);return i.a.createElement(a.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),l=o(n),u=r,d=l[s+"."+u]||l[u]||p[u]||a;return n?i.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):i.a.createElement(d,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);