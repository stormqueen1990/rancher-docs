"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Certificate Rotation"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/manage-clusters/rotate-certificates",id:"version-2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates",title:"Certificate Rotation",description:"Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window.",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters",slug:"/how-to-guides/new-user-guides/manage-clusters/rotate-certificates",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates.md",tags:[],version:"2.6",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Certificate Rotation"},sidebar:"tutorialSidebar",previous:{title:"Projects and Kubernetes Namespaces with Rancher",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},next:{title:"Encryption Key Rotation",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key"}},l={},c=[{value:"Certificate Rotation",id:"certificate-rotation",level:3},{value:"Additional Notes",id:"additional-notes",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=u("Tabs"),d=u("TabItem"),m={toc:c};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window.")),(0,n.kt)("p",null,"By default, Kubernetes clusters require certificates and Rancher launched Kubernetes clusters automatically generate  certificates for the Kubernetes components. Rotating these certificates is important before the certificates expire as well as if a certificate is compromised. After the certificates are rotated, the Kubernetes components are automatically restarted."),(0,n.kt)("p",null,"Certificates can be rotated for the following services:"),(0,n.kt)(p,{mdxType:"Tabs"},(0,n.kt)(d,{value:"RKE",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"etcd"),(0,n.kt)("li",{parentName:"ul"},"kubelet (node certificate)"),(0,n.kt)("li",{parentName:"ul"},"kubelet (serving certificate, if ",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/services/#kubelet-options"},"enabled"),")"),(0,n.kt)("li",{parentName:"ul"},"kube-apiserver"),(0,n.kt)("li",{parentName:"ul"},"kube-proxy"),(0,n.kt)("li",{parentName:"ul"},"kube-scheduler"),(0,n.kt)("li",{parentName:"ul"},"kube-controller-manager"))),(0,n.kt)(d,{value:"RKE2",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"admin"),(0,n.kt)("li",{parentName:"ul"},"api-server"),(0,n.kt)("li",{parentName:"ul"},"controller-manager"),(0,n.kt)("li",{parentName:"ul"},"scheduler"),(0,n.kt)("li",{parentName:"ul"},"rke2-controller"),(0,n.kt)("li",{parentName:"ul"},"rke2-server"),(0,n.kt)("li",{parentName:"ul"},"cloud-controller"),(0,n.kt)("li",{parentName:"ul"},"etcd"),(0,n.kt)("li",{parentName:"ul"},"auth-proxy"),(0,n.kt)("li",{parentName:"ul"},"kubelet"),(0,n.kt)("li",{parentName:"ul"},"kube-proxy")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For users who didn't rotate their webhook certificates, and they have expired after one year, please see this ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation"},"page")," for help.")),(0,n.kt)("h3",{id:"certificate-rotation"},"Certificate Rotation"),(0,n.kt)("p",null,"Rancher launched Kubernetes clusters have the ability to rotate the auto-generated certificates through the UI."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster you want to rotate certificates for amd click ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > Rotate Certificates"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select which certificates that you want to rotate."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Rotate all Service certificates (keep the same CA)"),(0,n.kt)("li",{parentName:"ul"},"Rotate an individual service and choose one of the services from the drop-down menu"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Results:")," The selected certificates will be rotated and the related services will be restarted to start using the new certificate."),(0,n.kt)("h3",{id:"additional-notes"},"Additional Notes"),(0,n.kt)(p,{mdxType:"Tabs"},(0,n.kt)(d,{value:"RKE",mdxType:"TabItem"},(0,n.kt)("p",null,"Even though the RKE CLI can use custom certificates for the Kubernetes cluster components, Rancher currently doesn't allow the ability to upload these in Rancher launched Kubernetes clusters.")),(0,n.kt)(d,{value:"RKE2",mdxType:"TabItem"},(0,n.kt)("p",null,"In RKE2, both etcd and control plane nodes are treated as the same ",(0,n.kt)("inlineCode",{parentName:"p"},"server")," concept. As such, when rotating certificates of services specific to either of these components will result in certificates being rotated on both. The certificates will only change for the specified service, but you will see nodes for both components go into an updating state. You may also see worker only nodes go into an updating state. This is to restart the workers after a certificate change to ensure they get the latest client certs."))))}f.isMDXComponent=!0}}]);