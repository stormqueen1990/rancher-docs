"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[39314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u9501\u5b9a\u89d2\u8272"},i=void 0,l={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles",title:"\u9501\u5b9a\u89d2\u8272",description:"\u4f60\u53ef\u4ee5\u5c06\u89d2\u8272\u8bbe\u7f6e\u4e3a\u9501\u5b9a\u72b6\u6001\u3002\u9501\u5b9a\u89d2\u8272\u53ef\u9632\u6b62\u628a\u8fd9\u4e9b\u89d2\u8272\u5206\u914d\u7ed9\u7528\u6237\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u9501\u5b9a\u89d2\u8272"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u89d2\u8272",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},next:{title:"\u914d\u7f6e\u9a71\u52a8",permalink:"/zh/pages-for-subheaders/about-provisioning-drivers"}},s={},c=[{value:"\u9501\u5b9a/\u89e3\u9501\u89d2\u8272",id:"\u9501\u5b9a\u89e3\u9501\u89d2\u8272",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u89d2\u8272\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u9501\u5b9a"),"\u72b6\u6001\u3002\u9501\u5b9a\u89d2\u8272\u53ef\u9632\u6b62\u628a\u8fd9\u4e9b\u89d2\u8272\u5206\u914d\u7ed9\u7528\u6237\u3002"),(0,a.kt)("p",null,"\u5904\u4e8e\u9501\u5b9a\u72b6\u6001\u7684\u89d2\u8272\u5177\u6709\u5982\u4e0b\u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u518d\u5206\u914d\u7ed9\u5f53\u4e0b\u8fd8\u6ca1\u6709\u88ab\u5206\u914d\u5230\u8be5\u89d2\u8272\u7684\u7528\u6237\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4\u6216\u9879\u76ee\u65f6\uff0c\u4e0d\u4f1a\u5728",(0,a.kt)("strong",{parentName:"p"},"\u6210\u5458\u89d2\u8272"),"\u4e0b\u62c9\u5217\u8868\u4e2d\u5217\u51fa\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u4f1a\u5f71\u54cd\u5728\u9501\u5b9a\u8be5\u89d2\u8272\u4e4b\u524d\uff0c\u5df2\u7ecf\u5206\u914d\u4e86\u8be5\u89d2\u8272\u7684\u7528\u6237\u3002\u5373\u4f7f\u540e\u6765\u9501\u5b9a\u4e86\u8be5\u89d2\u8272\uff0c\u8fd9\u4e9b\u7528\u6237\u4ecd\u7136\u4fdd\u7559\u8be5\u89d2\u8272\u63d0\u4f9b\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b"),"\uff1a\u5047\u8bbe\u4f60\u7684\u7ec4\u7ec7\u5236\u5b9a\u4e86\u4e00\u4e2a\u5185\u90e8\u7b56\u7565\uff0c\u7981\u6b62\u628a\u521b\u5efa\u9879\u76ee\u7684\u6743\u9650\u5206\u914d\u7ed9\u96c6\u7fa4\u7528\u6237\u3002\u8fd9\u65f6\u5019\u4f60\u9700\u8981\u6267\u884c\u8fd9\u4e2a\u7b56\u7565\u3002"),(0,a.kt)("p",{parentName:"li"}," \u56e0\u6b64\uff0c\u5728\u5c06\u65b0\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u9501\u5b9a\u4ee5\u4e0b\u89d2\u8272\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"\u96c6\u7fa4\u6240\u6709\u8005"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u96c6\u7fa4\u6210\u5458"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u521b\u5efa\u9879\u76ee"),"\u3002\u7136\u540e\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u81ea\u5b9a\u4e49\u89d2\u8272\uff0c\u8be5\u89d2\u8272\u7684\u6743\u9650\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"\u96c6\u7fa4\u6210\u5458"),"\u76f8\u540c\uff0c\u4f46\u6ca1\u6709\u521b\u5efa\u9879\u76ee\u7684\u6743\u9650\u3002\u7136\u540e\uff0c\u5728\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4\u65f6\u4f7f\u7528\u8fd9\u4e2a\u65b0\u7684\u81ea\u5b9a\u4e49\u89d2\u8272\u3002"))),(0,a.kt)("p",null,"\u4ee5\u4e0b\u7528\u6237\u53ef\u4ee5\u9501\u5b9a\u89d2\u8272\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u5206\u914d\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"\u7ba1\u7406\u5458"),"\u5168\u5c40\u6743\u9650\u7684\u7528\u6237\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u5206\u914d\u4e86\u5e26\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"\u7ba1\u7406\u89d2\u8272"),"\u6743\u9650\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u81ea\u5b9a\u4e49\u7528\u6237"),"\u3002")),(0,a.kt)("h2",{id:"\u9501\u5b9a\u89e3\u9501\u89d2\u8272"},"\u9501\u5b9a/\u89e3\u9501\u89d2\u8272"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u9632\u6b62\u5c06\u89d2\u8272\u5206\u914d\u7ed9\u7528\u6237\uff0c\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u9501\u5b9a"),"\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e24\u79cd\u60c5\u51b5\u4e0b\u9501\u5b9a\u89d2\u8272\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89d2\u8272"),"\u65f6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u73b0\u6709\u89d2\u8272\u65f6\uff08\u89c1\u4e0b\u6587\uff09\u3002")),(0,a.kt)("p",null,"\u96c6\u7fa4\u89d2\u8272\u548c\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u89d2\u8272\u53ef\u4ee5\u9501\u5b9a\uff0c\u800c\u5168\u5c40\u89d2\u8272\u4e0d\u80fd\u9501\u5b9a\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9009\u9879\u5361\u6216",(0,a.kt)("strong",{parentName:"li"},"\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4"),"\u9009\u9879\u5361\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u9501\u5b9a\uff08\u6216\u89e3\u9501\uff09\u7684\u89d2\u8272\uff0c\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ece",(0,a.kt)("strong",{parentName:"li"},"\u9501\u5b9a"),"\u9009\u9879\u4e2d\uff0c\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u662f")," \u6216",(0,a.kt)("strong",{parentName:"li"},"\u5426"),"\u3002\u7136\u540e\u70b9\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")))}u.isMDXComponent=!0}}]);