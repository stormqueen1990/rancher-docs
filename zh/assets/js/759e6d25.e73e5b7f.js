"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[38391],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>k});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),u=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=u(e.components);return o.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),k=n,g=c["".concat(i,".").concat(k)]||c[k]||p[k]||a;return t?o.createElement(g,s(s({ref:r},d),{},{components:t})):o.createElement(g,s({ref:r},d))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=c;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<a;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},66026:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(87462),n=(t(67294),t(3905));const a={title:"Rolling Back Workloads"},s=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",title:"Rolling Back Workloads",description:"Sometimes there is a need to rollback to the previous version of the application, either for debugging purposes or because an upgrade did not go as planned.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Rolling Back Workloads"},sidebar:"tutorialSidebar",previous:{title:"Deploying Workloads",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},next:{title:"Upgrading Workloads",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"}},i={},u=[],d={toc:u};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Sometimes there is a need to rollback to the previous version of the application, either for debugging purposes or because an upgrade did not go as planned."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, open the project running the workload you want to rollback.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the workload that you want to rollback and select ",(0,n.kt)("strong",{parentName:"p"},"Vertical ","\u22ee"," (... ) > Rollback"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose the revision that you want to roll back to. Click ",(0,n.kt)("strong",{parentName:"p"},"Rollback"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Your workload reverts to the previous version that you chose. Wait a few minutes for the action to complete."))}p.isMDXComponent=!0}}]);