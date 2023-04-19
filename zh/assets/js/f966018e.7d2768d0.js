"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[16124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={title:"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4"},o=void 0,i={unversionedId:"how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters",id:"version-2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters",title:"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4",description:"\u5982\u679c\u4f60\u60f3\u4e3a\u7528\u6237\u63d0\u4f9b\u5bf9\u96c6\u7fa4\u5185 \u6240\u6709 \u9879\u76ee\u3001\u8282\u70b9\u548c\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u8bf7\u4e3a\u7528\u6237\u5206\u914d\u96c6\u7fa4\u6210\u5458\u8d44\u683c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters/access-clusters",slug:"/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters",permalink:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u5de5\u4f5c\u539f\u7406",permalink:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},next:{title:"Cluster Autoscaler",permalink:"/zh/v2.6/pages-for-subheaders/install-cluster-autoscaler"}},l={},p=[{value:"\u7f16\u8f91\u96c6\u7fa4\u6210\u5458",id:"\u7f16\u8f91\u96c6\u7fa4\u6210\u5458",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4e3a\u7528\u6237\u63d0\u4f9b\u5bf9\u96c6\u7fa4\u5185 ",(0,n.kt)("em",{parentName:"p"},"\u6240\u6709")," \u9879\u76ee\u3001\u8282\u70b9\u548c\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u8bf7\u4e3a\u7528\u6237\u5206\u914d\u96c6\u7fa4\u6210\u5458\u8d44\u683c\u3002"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u60f3\u4e3a\u7528\u6237\u63d0\u4f9b\u5bf9\u96c6\u7fa4\u5185 ",(0,n.kt)("em",{parentName:"p"},"\u7279\u5b9a")," \u9879\u76ee\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/add-users-to-projects"},"\u6dfb\u52a0\u9879\u76ee\u6210\u5458"),"\u3002")),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e24\u79cd\u60c5\u51b5\u4e0b\u6dfb\u52a0\u96c6\u7fa4\u6210\u5458\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u65b0\u96c6\u7fa4"),(0,n.kt)("p",{parentName:"li"}," \u4f60\u53ef\u4ee5\u5728\u521b\u5efa\u96c6\u7fa4\u65f6\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u96c6\u7fa4\uff08\u63a8\u8350\uff09\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#%E7%BC%96%E8%BE%91%E9%9B%86%E7%BE%A4%E6%88%90%E5%91%98"},"\u5411\u73b0\u6709\u96c6\u7fa4\u6dfb\u52a0\u6210\u5458")),(0,n.kt)("p",{parentName:"li"}," \u914d\u7f6e\u96c6\u7fa4\u540e\uff0c\u4f60\u59cb\u7ec8\u53ef\u4ee5\u5411\u96c6\u7fa4\u6dfb\u52a0\u6210\u5458\u3002"))),(0,n.kt)("h2",{id:"\u7f16\u8f91\u96c6\u7fa4\u6210\u5458"},"\u7f16\u8f91\u96c6\u7fa4\u6210\u5458"),(0,n.kt)("p",null,"\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u7f16\u8f91\u96c6\u7fa4\u7684\u6210\u5458\uff0c\u63a7\u5236\u54ea\u4e9b Rancher \u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u4ee5\u53ca\u4ed6\u4eec\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u529f\u80fd\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u6dfb\u52a0\u6210\u5458\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728",(0,n.kt)("strong",{parentName:"p"},"\u6210\u5458\u89d2\u8272"),"\u9009\u9879\u5361\u4e2d\uff0c\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u6210\u5458"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u641c\u7d22\u8981\u6dfb\u52a0\u5230\u96c6\u7fa4\u7684\u7528\u6237\u6216\u7ec4\u3002"),(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u914d\u7f6e\u4e86\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728\u4f60\u952e\u5165\u65f6\uff0cRancher \u4f1a\u4ece\u4f60\u7684",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/authentication-config"},"\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1"),"\u6e90\u8fd4\u56de\u7528\u6237\u3002"),(0,n.kt)("p",{parentName:"li"}," :::note \u4f7f\u7528 AD \u4f46\u627e\u4e0d\u5230\u4f60\u7684\u7528\u6237\uff1f"),(0,n.kt)("p",{parentName:"li"}," \u4f60\u7684\u641c\u7d22\u5c5e\u6027\u914d\u7f6e\u53ef\u80fd\u5b58\u5728\u95ee\u9898\u3002\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory"},"\u914d\u7f6e Active Directory \u8eab\u4efd\u9a8c\u8bc1\uff1a\u6b65\u9aa4 5"),"\u3002"),(0,n.kt)("p",{parentName:"li"}," :::")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u5728\u4e0b\u62c9\u83dc\u5355\u4e2d\u6dfb\u52a0\u7ec4\uff0c\u800c\u4e0d\u662f\u5355\u4e2a\u7528\u6237\u3002\u4e0b\u62c9\u5217\u8868\u4ec5\u5217\u51fa\u4f60\uff08\u767b\u5f55\u7528\u6237\uff09\u6240\u5c5e\u7684\u7ec4\u3002"),(0,n.kt)("p",{parentName:"li"}," :::note"),(0,n.kt)("p",{parentName:"li"}," \u5982\u679c\u4f60\u4ee5\u672c\u5730\u7528\u6237\u8eab\u4efd\u767b\u5f55\uff0c\u5916\u90e8\u7528\u6237\u4e0d\u4f1a\u663e\u793a\u5728\u4f60\u7684\u641c\u7d22\u7ed3\u679c\u4e2d\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/authentication-config#%E5%A4%96%E9%83%A8%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E9%85%8D%E7%BD%AE%E5%92%8C%E7%94%A8%E6%88%B7%E4%B8%BB%E4%BD%93"},"\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u914d\u7f6e\u548c\u4e3b\u4f53\u7528\u6237"),"\u3002"),(0,n.kt)("p",{parentName:"li"}," :::")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5206\u914d\u7528\u6237\u6216\u7ec4\u7684",(0,n.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u89d2\u8272\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"\u4ec0\u4e48\u662f\u96c6\u7fa4\u89d2\u8272\uff1f")),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u89d2\u8272\uff0c\u4f60\u53ef\u4ee5\u4fee\u6539\u53ef\u5206\u914d\u7684\u5355\u4e2a\u89d2\u8272\u5217\u8868\u3002"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u8981\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\uff0c\u8bf7",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89d2\u8272"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u4ece\u5217\u8868\u4e2d\u5220\u9664\u89d2\u8272\uff0c\u8bf7",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"\u9501\u5b9a/\u89e3\u9501\u89d2\u8272"),"\u3002"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06\u9009\u4e2d\u7684\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8981\u64a4\u9500\u96c6\u7fa4\u6210\u5458\u8d44\u683c\uff0c\u8bf7\u9009\u62e9\u7528\u6237\u5e76\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002\u6b64\u64cd\u4f5c\u4f1a\u5220\u9664\u6210\u5458\u8d44\u683c\uff0c\u800c\u4e0d\u4f1a\u5220\u9664\u7528\u6237\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u4fee\u6539\u96c6\u7fa4\u4e2d\u7684\u7528\u6237\u89d2\u8272\uff0c\u8bf7\u5c06\u5176\u4ece\u96c6\u7fa4\u4e2d\u5220\u9664\uff0c\u7136\u540e\u4f7f\u7528\u4fee\u6539\u540e\u7684\u89d2\u8272\u91cd\u65b0\u6dfb\u52a0\u7528\u6237\u3002")))}c.isMDXComponent=!0}}]);