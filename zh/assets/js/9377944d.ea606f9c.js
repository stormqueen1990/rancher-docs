"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[10608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u96c6\u7fa4\u9a71\u52a8"},o=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",id:"version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",title:"\u96c6\u7fa4\u9a71\u52a8",description:"\u96c6\u7fa4\u9a71\u52a8\u7528\u4e8e\u5728\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546\uff08\u4f8b\u5982 Google GKE\uff09\u4e2d\u521b\u5efa\u96c6\u7fa4\u3002\u521b\u5efa\u96c6\u7fa4\u65f6\u53ef\u4ee5\u663e\u793a\u7684\u96c6\u7fa4\u9a71\u52a8\uff0c\u662f\u7531\u96c6\u7fa4\u9a71\u52a8\u7684\u72b6\u6001\u5b9a\u4e49\u7684\u3002\u53ea\u6709 active \u96c6\u7fa4\u9a71\u52a8\u5c06\u4f5c\u4e3a\u521b\u5efa\u96c6\u7fa4\u7684\u9009\u9879\u663e\u793a\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4e0e\u591a\u4e2a\u73b0\u6709\u7684\u4e91\u63d0\u4f9b\u5546\u96c6\u7fa4\u9a71\u52a8\u6253\u5305\u5728\u4e00\u8d77\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u5c06\u81ea\u5b9a\u4e49\u96c6\u7fa4\u9a71\u52a8\u6dfb\u52a0\u5230 Rancher\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",permalink:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u96c6\u7fa4\u9a71\u52a8"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u9a71\u52a8",permalink:"/zh/v2.6/pages-for-subheaders/about-provisioning-drivers"},next:{title:"\u4e3b\u673a\u9a71\u52a8",permalink:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"}},l={},u=[{value:"\u7ba1\u7406\u96c6\u7fa4\u9a71\u52a8",id:"\u7ba1\u7406\u96c6\u7fa4\u9a71\u52a8",level:3},{value:"\u6fc0\u6d3b/\u505c\u7528\u96c6\u7fa4\u9a71\u52a8",id:"\u6fc0\u6d3b\u505c\u7528\u96c6\u7fa4\u9a71\u52a8",level:2},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u96c6\u7fa4\u9a71\u52a8",id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u96c6\u7fa4\u9a71\u52a8",level:2},{value:"\u5f00\u53d1\u81ea\u5df1\u7684\u96c6\u7fa4\u9a71\u52a8",id:"\u5f00\u53d1\u81ea\u5df1\u7684\u96c6\u7fa4\u9a71\u52a8",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u96c6\u7fa4\u9a71\u52a8\u7528\u4e8e\u5728",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546"),"\uff08\u4f8b\u5982 Google GKE\uff09\u4e2d\u521b\u5efa\u96c6\u7fa4\u3002\u521b\u5efa\u96c6\u7fa4\u65f6\u53ef\u4ee5\u663e\u793a\u7684\u96c6\u7fa4\u9a71\u52a8\uff0c\u662f\u7531\u96c6\u7fa4\u9a71\u52a8\u7684\u72b6\u6001\u5b9a\u4e49\u7684\u3002\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," \u96c6\u7fa4\u9a71\u52a8\u5c06\u4f5c\u4e3a\u521b\u5efa\u96c6\u7fa4\u7684\u9009\u9879\u663e\u793a\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4e0e\u591a\u4e2a\u73b0\u6709\u7684\u4e91\u63d0\u4f9b\u5546\u96c6\u7fa4\u9a71\u52a8\u6253\u5305\u5728\u4e00\u8d77\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u5c06\u81ea\u5b9a\u4e49\u96c6\u7fa4\u9a71\u52a8\u6dfb\u52a0\u5230 Rancher\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u60f3\u5411\u7528\u6237\u663e\u793a\u7279\u5b9a\u7684\u96c6\u7fa4\u9a71\u52a8\uff0c\u4f60\u53ef\u4ee5\u5728 Rancher \u4e2d\u505c\u7528\u8fd9\u4e9b\u96c6\u7fa4\u9a71\u52a8\uff0c\u5b83\u4eec\u5c06\u4e0d\u4f1a\u4f5c\u4e3a\u521b\u5efa\u96c6\u7fa4\u7684\u9009\u9879\u51fa\u73b0\u3002"),(0,a.kt)("h3",{id:"\u7ba1\u7406\u96c6\u7fa4\u9a71\u52a8"},"\u7ba1\u7406\u96c6\u7fa4\u9a71\u52a8"),(0,a.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8981\u521b\u5efa\u3001\u7f16\u8f91\u6216\u5220\u9664\u96c6\u7fa4\u9a71\u52a8\uff0c\u4f60\u9700\u8981\u4ee5\u4e0b\u6743\u9650\u4e2d\u7684",(0,a.kt)("em",{parentName:"p"},"\u4e00\u4e2a"),"\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u5458\u5168\u5c40\u6743\u9650")),(0,a.kt)("li",{parentName:"ul"},"\u5206\u914d\u4e86",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u96c6\u7fa4\u9a71\u52a8\u89d2\u8272"),"\u7684",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%A8%E5%B1%80%E6%9D%83%E9%99%90"},"\u81ea\u5b9a\u4e49\u5168\u5c40\u6743\u9650"),"\u3002"))),(0,a.kt)("h2",{id:"\u6fc0\u6d3b\u505c\u7528\u96c6\u7fa4\u9a71\u52a8"},"\u6fc0\u6d3b/\u505c\u7528\u96c6\u7fa4\u9a71\u52a8"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4ec5\u6fc0\u6d3b\u4e3b\u6d41\u7684\u4e91\u63d0\u4f9b\u5546 Google GKE\u3001Amazon EKS \u548c Azure AKS \u7684\u9a71\u52a8\u3002\u5982\u679c\u8981\u663e\u793a\u6216\u9690\u85cf\u9a71\u52a8\uff0c\u4f60\u53ef\u4ee5\u66f4\u6539\u9a71\u52a8\u7684\u72b6\u6001\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u9a71\u52a8"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u9a71\u52a8"),"\u9009\u9879\u5361\u4e0a\uff0c\u9009\u62e9\u8981\u6fc0\u6d3b\u6216\u505c\u7528\u7684\u9a71\u52a8\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u6fc0\u6d3b")," \u6216 ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u505c\u7528"),"\u3002"))),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u96c6\u7fa4\u9a71\u52a8"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u96c6\u7fa4\u9a71\u52a8"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528 Rancher \u4e0d\u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u96c6\u7fa4\u9a71\u52a8\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u63d0\u4f9b\u5546\u7684\u9a71\u52a8\uff0c\u4ece\u800c\u4f7f\u7528\u8be5\u9a71\u52a8\u6765\u521b\u5efa ",(0,a.kt)("em",{parentName:"p"},"\u6258\u7ba1")," Kubernetes \u96c6\u7fa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u4e2d\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u9a71\u52a8"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u9a71\u52a8"),"\u9009\u9879\u5361\u4e0a\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u96c6\u7fa4\u9a71\u52a8"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u586b\u5199",(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u96c6\u7fa4\u9a71\u52a8"),"\u8868\u5355\u3002\u7136\u540e\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,a.kt)("h3",{id:"\u5f00\u53d1\u81ea\u5df1\u7684\u96c6\u7fa4\u9a71\u52a8"},"\u5f00\u53d1\u81ea\u5df1\u7684\u96c6\u7fa4\u9a71\u52a8"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u5f00\u53d1\u96c6\u7fa4\u9a71\u52a8\u5e76\u6dfb\u52a0\u5230 Rancher\uff0c\u8bf7\u53c2\u8003\u6211\u4eec\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher-plugins/kontainer-engine-driver-example"},"\u793a\u4f8b"),"\u3002"))}c.isMDXComponent=!0}}]);