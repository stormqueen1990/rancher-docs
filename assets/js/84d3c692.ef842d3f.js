"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[53873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=i.createContext({}),l=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(r),f=a,m=c["".concat(u,".").concat(f)]||c[f]||p[f]||n;return r?i.createElement(m,s(s({ref:t},d),{},{components:r})):i.createElement(m,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<n;l++)s[l]=r[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=r(87462),a=(r(67294),r(3905));const n={title:"Setup Guide"},s=void 0,o={unversionedId:"pages-for-subheaders/istio-setup-guide",id:"version-2.6/pages-for-subheaders/istio-setup-guide",title:"Setup Guide",description:"This section describes how to enable Istio and start using it in your projects.",source:"@site/versioned_docs/version-2.6/pages-for-subheaders/istio-setup-guide.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/istio-setup-guide",permalink:"/v2.6/pages-for-subheaders/istio-setup-guide",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/istio-setup-guide.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Setup Guide"},sidebar:"tutorialSidebar",previous:{title:"Configuring PrometheusRules",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules"},next:{title:"1. Enable Istio in the Cluster",permalink:"/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"}},u={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install",id:"install",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to enable Istio and start using it in your projects."),(0,a.kt)("p",null,"If you use Istio for traffic management, you will need to allow external traffic to the cluster. In that case, you will need to follow all of the steps below."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This guide assumes you have already ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/installation-and-upgrade"},"installed Rancher,")," and you have already ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"provisioned a separate Kubernetes cluster")," on which you will install Istio."),(0,a.kt)("p",null,"The nodes in your cluster must meet the ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/integrations-in-rancher/istio/cpu-and-memory-allocations"},"CPU and memory requirements.")),(0,a.kt)("p",null,"The workloads and services that you want to be controlled by Istio must meet ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/requirements/"},"Istio's requirements.")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("admonition",{title:"Quick Setup Tip:",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you don't need external traffic to reach Istio, and you just want to set up Istio for monitoring and tracing traffic within the cluster, skip the steps for ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"setting up the Istio gateway")," and ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"setting up Istio's components for traffic management."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},"Enable Istio in the cluster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},"Enable Istio in all the namespaces where you want to use it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},"Add deployments and services that have the Istio sidecar injected.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"Set up the Istio gateway. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"Set up Istio's components for traffic management.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic"},"Generate traffic and see Istio in action."))))}p.isMDXComponent=!0}}]);