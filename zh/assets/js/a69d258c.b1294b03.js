"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[22070],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),c=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),o=c(a),d=n,u=o["".concat(m,".").concat(d)]||o[d]||h[d]||l;return a?r.createElement(u,i(i({ref:t},s),{},{components:a})):r.createElement(u,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},98589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={title:"4. \u5b89\u88c5 Rancher"},i=void 0,p={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",id:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",title:"4. \u5b89\u88c5 Rancher",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u9ad8\u53ef\u7528 Kubernetes \u5b89\u88c5\u7684\u79bb\u7ebf\u73af\u5883\u90e8\u7f72 Rancher\u3002\u79bb\u7ebf\u73af\u5883\u53ef\u4ee5\u662f Rancher Server \u79bb\u7ebf\u5b89\u88c5\u3001\u9632\u706b\u5899\u540e\u9762\u6216\u4ee3\u7406\u540e\u9762\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha.md",tags:[],version:"current",lastUpdatedAt:1681239575,formattedLastUpdatedAt:"2023\u5e744\u670811\u65e5",frontMatter:{title:"4. \u5b89\u88c5 Rancher"},sidebar:"tutorialSidebar",previous:{title:"3. \u5b89\u88c5 Kubernetes\uff08Docker \u5b89\u88c5\u8bf7\u8df3\u8fc7\uff09",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes"},next:{title:"Docker \u5b89\u88c5\u547d\u4ee4",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands"}},m={},c=[{value:"Rancher \u7279\u6743\u8bbf\u95ee",id:"rancher-\u7279\u6743\u8bbf\u95ee",level:3},{value:"Docker \u8bf4\u660e",id:"docker-\u8bf4\u660e",level:2},{value:"Kubernetes \u8bf4\u660e",id:"kubernetes-\u8bf4\u660e",level:2},{value:"1. \u6dfb\u52a0 Helm Chart \u4ed3\u5e93",id:"1-\u6dfb\u52a0-helm-chart-\u4ed3\u5e93",level:3},{value:"2. \u9009\u62e9 SSL \u914d\u7f6e",id:"2-\u9009\u62e9-ssl-\u914d\u7f6e",level:3},{value:"\u79bb\u7ebf\u5b89\u88c5\u7684 Helm Chart \u9009\u9879",id:"\u79bb\u7ebf\u5b89\u88c5\u7684-helm-chart-\u9009\u9879",level:3},{value:"3. \u83b7\u53d6 Cert-Manager Chart",id:"3-\u83b7\u53d6-cert-manager-chart",level:3},{value:"\u9009\u9879 A\uff1a\u4f7f\u7528 Rancher \u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66",id:"\u9009\u9879-a\u4f7f\u7528-rancher-\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66",level:4},{value:"1. \u6dfb\u52a0 cert-manager \u4ed3\u5e93",id:"1-\u6dfb\u52a0-cert-manager-\u4ed3\u5e93",level:5},{value:"2. \u83b7\u53d6 cert-manager Chart",id:"2-\u83b7\u53d6-cert-manager-chart",level:5},{value:"3. \u68c0\u7d22 Cert-Manager CRD",id:"3-\u68c0\u7d22-cert-manager-crd",level:5},{value:"4. \u5b89\u88c5 Rancher",id:"4-\u5b89\u88c5-rancher",level:3},{value:"1. \u5b89\u88c5 Cert-Manager",id:"1-\u5b89\u88c5-cert-manager",level:5},{value:"2. \u5b89\u88c5 Rancher",id:"2-\u5b89\u88c5-rancher",level:5},{value:"\u9009\u9879 B\uff1a\u4f7f\u7528 Kubernetes \u5bc6\u6587\u4ece\u6587\u4ef6\u4e2d\u83b7\u53d6\u8bc1\u4e66",id:"\u9009\u9879-b\u4f7f\u7528-kubernetes-\u5bc6\u6587\u4ece\u6587\u4ef6\u4e2d\u83b7\u53d6\u8bc1\u4e66",level:4},{value:"1. \u521b\u5efa\u5bc6\u6587",id:"1-\u521b\u5efa\u5bc6\u6587",level:5},{value:"2. \u5b89\u88c5 Rancher",id:"2-\u5b89\u88c5-rancher-1",level:5},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],s={toc:c};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u9ad8\u53ef\u7528 Kubernetes \u5b89\u88c5\u7684\u79bb\u7ebf\u73af\u5883\u90e8\u7f72 Rancher\u3002\u79bb\u7ebf\u73af\u5883\u53ef\u4ee5\u662f Rancher Server \u79bb\u7ebf\u5b89\u88c5\u3001\u9632\u706b\u5899\u540e\u9762\u6216\u4ee3\u7406\u540e\u9762\u3002"),(0,n.kt)("h3",{id:"rancher-\u7279\u6743\u8bbf\u95ee"},"Rancher \u7279\u6743\u8bbf\u95ee"),(0,n.kt)("p",null,"\u5f53 Rancher Server \u90e8\u7f72\u5728 Docker \u5bb9\u5668\u4e2d\u65f6\uff0c\u5bb9\u5668\u5185\u4f1a\u5b89\u88c5\u4e00\u4e2a\u672c\u5730 Kubernetes \u96c6\u7fa4\u4f9b Rancher \u4f7f\u7528\u3002\u4e3a Rancher \u7684\u5f88\u591a\u529f\u80fd\u90fd\u662f\u4ee5 deployment \u7684\u65b9\u5f0f\u8fd0\u884c\u7684\uff0c\u800c\u5728\u5bb9\u5668\u5185\u8fd0\u884c\u5bb9\u5668\u662f\u9700\u8981\u7279\u6743\u6a21\u5f0f\u7684\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u5728\u5b89\u88c5 Rancher \u65f6\u6dfb\u52a0 ",(0,n.kt)("inlineCode",{parentName:"p"},"--privileged")," \u9009\u9879\u3002"),(0,n.kt)("h2",{id:"docker-\u8bf4\u660e"},"Docker \u8bf4\u660e"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528 Docker \u547d\u4ee4\u8fdb\u884c\u79bb\u7ebf\u5b89\u88c5\uff0c\u8bf7\u8df3\u8fc7\u672c\u9875\u7684\u5269\u4f59\u90e8\u5206\uff0c\u5e76\u6309\u7167",(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands"},"\u6b64\u9875"),"\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,n.kt)("h2",{id:"kubernetes-\u8bf4\u660e"},"Kubernetes \u8bf4\u660e"),(0,n.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\u3002\u9ad8\u53ef\u7528\u7684 Kubernetes \u5b89\u88c5\u7684\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u5305\u542b\u4e09\u4e2a\u8fd0\u884c Rancher Server \u7ec4\u4ef6\u7684\u8282\u70b9\u3002\u6301\u4e45\u5c42\uff08etcd\uff09\u4e5f\u5728\u8fd9\u4e09\u4e2a\u8282\u70b9\u4e0a\u8fdb\u884c\u590d\u5236\uff0c\u4ee5\u4fbf\u5728\u5176\u4e2d\u4e00\u4e2a\u8282\u70b9\u53d1\u751f\u6545\u969c\u65f6\u63d0\u4f9b\u5197\u4f59\u548c\u6570\u636e\u590d\u5236\u3002"),(0,n.kt)("h3",{id:"1-\u6dfb\u52a0-helm-chart-\u4ed3\u5e93"},"1. \u6dfb\u52a0 Helm Chart \u4ed3\u5e93"),(0,n.kt)("p",null,"\u4ece\u53ef\u4ee5\u8bbf\u95ee\u4e92\u8054\u7f51\u7684\u7cfb\u7edf\u4e2d\uff0c\u83b7\u53d6\u6700\u65b0\u7684 Helm Chart\uff0c\u7136\u540e\u5c06 manifest \u590d\u5236\u5230\u53ef\u8bbf\u95ee Rancher Server \u96c6\u7fa4\u7684\u7cfb\u7edf\u4e2d\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"helm"),"\uff0c\u8bf7\u5728\u53ef\u8bbf\u95ee\u4e92\u8054\u7f51\u7684\u5de5\u4f5c\u7ad9\u4e0a\u8fdb\u884c\u672c\u5730\u5b89\u88c5\u3002\u6ce8\u610f\uff1a\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm \u7248\u672c\u8981\u6c42"),"\u9009\u62e9 Helm \u7248\u672c\u6765\u5b89\u88c5 Rancher\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"helm repo add")," \u547d\u4ee4\uff0c\u4ee5\u6dfb\u52a0\u5305\u542b\u5b89\u88c5 Rancher \u7684 Chart \u7684 Helm Chart \u4ed3\u5e93\u3002\u6709\u5173\u5982\u4f55\u9009\u62e9\u4ed3\u5e93\uff0c\u4ee5\u53ca\u54ea\u4e2a\u4ed3\u5e93\u6700\u9002\u5408\u4f60\u7684\u7528\u4f8b\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-references/helm-chart-options#helm-chart-%E4%BB%93%E5%BA%93"},"\u9009\u62e9 Rancher \u7248\u672c"),"\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Latest\uff1a\u5efa\u8bae\u7528\u4e8e\u8bd5\u7528\u6700\u65b0\u529f\u80fd",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,n.kt)("li",{parentName:"ul"},"Stable\uff1a\u5efa\u8bae\u7528\u4e8e\u751f\u4ea7\u73af\u5883",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,n.kt)("li",{parentName:"ul"},"Alpha\uff1a\u5373\u5c06\u53d1\u5e03\u7684\u5b9e\u9a8c\u6027\u9884\u89c8\u3002",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha\n"))," \u6ce8\u610f\uff1a\u4e0d\u652f\u6301\u5347\u7ea7\u5230 Alpha \u7248\u3001\u4ece Alpha \u7248\u5347\u7ea7\u6216\u5728 Alpha \u7248\u4e4b\u95f4\u5347\u7ea7\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6700\u65b0\u7684 Rancher Chart\u3002\u6b64\u64cd\u4f5c\u5c06\u83b7\u53d6 Chart \u5e76\u5c06\u5176\u4f5c\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},".tgz")," \u6587\u4ef6\u4fdd\u5b58\u5728\u5f53\u524d\u76ee\u5f55\u4e2d\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher\n")),(0,n.kt)("p",{parentName:"li"},"\u5982\u9700\u4e0b\u8f7d\u7279\u5b9a\u7684 Rancher \u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u7528 Helm ",(0,n.kt)("inlineCode",{parentName:"p"},"--version")," \u53c2\u6570\u6307\u5b9a\u7248\u672c\uff0c\u5982\u4e0b\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-stable/rancher --version=v2.4.8\n")))),(0,n.kt)("h3",{id:"2-\u9009\u62e9-ssl-\u914d\u7f6e"},"2. \u9009\u62e9 SSL \u914d\u7f6e"),(0,n.kt)("p",null,"Rancher Server \u9ed8\u8ba4\u8bbe\u8ba1\u4e3a\u5b89\u5168\u7684\uff0c\u5e76\u4e14\u9700\u8981 SSL/TLS \u914d\u7f6e\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5728\u79bb\u7ebf\u7684 Kubernetes \u96c6\u7fa4\u4e2d\u5b89\u88c5 Rancher\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u4ee5\u4e0b\u4e24\u79cd\u8bc1\u4e66\u751f\u6210\u65b9\u5f0f\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u60f3\u5728\u5916\u90e8\u7ec8\u6b62 SSL/TLS\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-references/helm-chart-options#%E5%A4%96%E9%83%A8-tls-%E7%BB%88%E6%AD%A2"},"\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668\u7684 TLS \u7ec8\u6b62"),"\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,n.kt)("th",{parentName:"tr",align:null},"Chart \u9009\u9879"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981 cert-manager"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rancher \u751f\u6210\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=rancher")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 Rancher \u751f\u6210\u7684 CA \u7b7e\u53d1\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u3002\u6b64\u9879\u662f",(0,n.kt)("strong",{parentName:"td"},"\u9ed8\u8ba4\u9009\u9879"),"\u3002\u5728\u6e32\u67d3 Helm \u6a21\u677f\u7684\u65f6\u5019\u4e0d\u9700\u8981\u4f20\u9012\u6b64\u9879\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4f60\u5df2\u6709\u7684\u8bc1\u4e66"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=secret")),(0,n.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u521b\u5efa Kubernetes \u5bc6\u6587\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66\u6587\u4ef6\u3002",(0,n.kt)("br",null),"\u5728\u6e32\u67d3 Rancher Helm \u6a21\u677f\u65f6\u5fc5\u987b\u4f20\u9012\u6b64\u9009\u9879\u3002"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,n.kt)("h3",{id:"\u79bb\u7ebf\u5b89\u88c5\u7684-helm-chart-\u9009\u9879"},"\u79bb\u7ebf\u5b89\u88c5\u7684 Helm Chart \u9009\u9879"),(0,n.kt)("p",null,"\u5728\u914d\u7f6e Rancher Helm \u6a21\u677f\u65f6\uff0cHelm Chart \u4e2d\u6709\u51e0\u4e2a\u4e13\u4e3a\u79bb\u7ebf\u5b89\u88c5\u8bbe\u8ba1\u7684\u9009\u9879\uff0c\u5982\u4e0b\u8868\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Chart \u9009\u9879"),(0,n.kt)("th",{parentName:"tr",align:null},"Chart \u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"certmanager.version")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<version>")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u8fd0\u884c\u7684 cert-manager \u7248\u672c\u914d\u7f6e\u9002\u5f53\u7684 Rancher TLS \u9881\u53d1\u8005\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"systemDefaultRegistry")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5c06 Rancher Server \u914d\u7f6e\u6210\u5728\u914d\u7f6e\u96c6\u7fa4\u65f6\uff0c\u59cb\u7ec8\u4ece\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\u955c\u50cf\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"useBundledSystemChart")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e Rancher Server \u4f7f\u7528\u6253\u5305\u7684 Helm System Chart \u526f\u672c\u3002",(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"system charts")," \u4ed3\u5e93\u5305\u542b\u6240\u6709 Monitoring\uff0cLogging\uff0c\u544a\u8b66\u548c\u5168\u5c40 DNS \u7b49\u529f\u80fd\u6240\u9700\u7684\u5e94\u7528\u5546\u5e97\u9879\u76ee\u3002\u8fd9\u4e9b ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"Helm Chart")," \u4f4d\u4e8e GitHub \u4e2d\u3002\u4f46\u662f\u7531\u4e8e\u4f60\u5904\u5728\u79bb\u7ebf\u73af\u5883\uff0c\u56e0\u6b64\u4f7f\u7528 Rancher \u5185\u7f6e\u7684 Chart \u4f1a\u6bd4\u8bbe\u7f6e Git mirror \u5bb9\u6613\u5f97\u591a\u3002")))),(0,n.kt)("h3",{id:"3-\u83b7\u53d6-cert-manager-chart"},"3. \u83b7\u53d6 Cert-Manager Chart"),(0,n.kt)("p",null,"\u6839\u636e\u4f60\u5728",(0,n.kt)("a",{parentName:"p",href:"#2-%E9%80%89%E6%8B%A9-ssl-%E9%85%8D%E7%BD%AE"},"2\uff1a\u9009\u62e9 SSL \u914d\u7f6e"),"\u4e2d\u7684\u9009\u62e9\uff0c\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4\u4e4b\u4e00\uff1a"),(0,n.kt)("h4",{id:"\u9009\u9879-a\u4f7f\u7528-rancher-\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66"},"\u9009\u9879 A\uff1a\u4f7f\u7528 Rancher \u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4f1a\u751f\u6210\u4e00\u4e2a CA \u5e76\u4f7f\u7528 cert-manager \u9881\u53d1\u8bc1\u4e66\u4ee5\u8bbf\u95ee Rancher Server \u754c\u9762\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u7531\u4e8e cert-manager \u7684\u6700\u65b0\u6539\u52a8\uff0c\u4f60\u9700\u8981\u5347\u7ea7 cert-manager \u7248\u672c\u3002\u5982\u679c\u4f60\u9700\u8981\u5347\u7ea7 Rancher \u5e76\u4f7f\u7528\u4f4e\u4e8e 0.11.0 \u7684 cert-manager \u7248\u672c\uff0c\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"cert-manager \u5347\u7ea7\u6587\u6863"),"\u3002")),(0,n.kt)("h5",{id:"1-\u6dfb\u52a0-cert-manager-\u4ed3\u5e93"},"1. \u6dfb\u52a0 cert-manager \u4ed3\u5e93"),(0,n.kt)("p",null,"\u5728\u53ef\u4ee5\u8fde\u63a5\u4e92\u8054\u7f51\u7684\u7cfb\u7edf\u4e2d\uff0c\u5c06 cert-manager \u4ed3\u5e93\u6dfb\u52a0\u5230 Helm\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\n")),(0,n.kt)("h5",{id:"2-\u83b7\u53d6-cert-manager-chart"},"2. \u83b7\u53d6 cert-manager Chart"),(0,n.kt)("p",null,"\u4ece ",(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/cert-manager/cert-manager"},"Helm Chart \u4ed3\u5e93"),"\u4e2d\u83b7\u53d6\u6700\u65b0\u53ef\u7528\u7684 cert-manager Chart\uff1a"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"v2.6.4 \u517c\u5bb9 cert-manager \u7248\u672c 1.6.2 \u548c 1.7.1\u3002\u63a8\u8350\u4f7f\u7528 v1.7.x\uff0c\u56e0\u4e3a v 1.6.x \u5c06\u5728 2022 \u5e74 3 \u6708 30 \u65e5\u7ed3\u675f\u751f\u547d\u5468\u671f\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch jetstack/cert-manager --version v1.11.0\n")),(0,n.kt)("h5",{id:"3-\u68c0\u7d22-cert-manager-crd"},"3. \u68c0\u7d22 Cert-Manager CRD"),(0,n.kt)("p",null,"\u4e3a cert-manager \u4e0b\u8f7d\u6240\u9700\u7684 CRD \u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"curl -L -o cert-manager-crd.yaml https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.crds.yaml\n")),(0,n.kt)("h3",{id:"4-\u5b89\u88c5-rancher"},"4. \u5b89\u88c5 Rancher"),(0,n.kt)("p",null,"\u5c06\u83b7\u53d6\u7684 Chart \u590d\u5236\u5230\u6709\u6743\u8bbf\u95ee Rancher Server \u96c6\u7fa4\u7684\u7cfb\u7edf\u4ee5\u5b8c\u6210\u5b89\u88c5\u3002"),(0,n.kt)("h5",{id:"1-\u5b89\u88c5-cert-manager"},"1. \u5b89\u88c5 Cert-Manager"),(0,n.kt)("p",null,"\u4f7f\u7528\u8981\u7528\u4e8e\u5b89\u88c5 Chart \u7684\u9009\u9879\u6765\u5b89\u88c5 cert-manager\u3002\u8bb0\u4f4f\u8981\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"image.repository")," \u9009\u9879\uff0c\u4ee5\u4ece\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u955c\u50cf\u3002\u6b64\u64cd\u4f5c\u4f1a\u521b\u5efa\u4e00\u4e2a\u5305\u542b Kubernetes manifest \u6587\u4ef6\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager")," \u76ee\u5f55\u3002"),(0,n.kt)("details",{id:"install-cert-manager"},(0,n.kt)("summary",null,"\u5355\u51fb\u5c55\u5f00"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u5b89\u88c5 cert-manager\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e3a cert-manager \u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cert-manager\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa cert-manager CustomResourceDefinition (CRD)\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager/cert-manager-crd.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u88c5 cert-manager\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm install cert-manager ./cert-manager-v1.11.0.tgz \\\n    --namespace cert-manager \\\n    --set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller \\\n    --set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook \\\n    --set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector \\\n    --set startupapicheck.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-ctl\n"))))),(0,n.kt)("h5",{id:"2-\u5b89\u88c5-rancher"},"2. \u5b89\u88c5 Rancher"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"\u6dfb\u52a0 TLS \u5bc6\u6587"),"\u53d1\u5e03\u8bc1\u4e66\u6587\u4ef6\uff0c\u4ee5\u4fbf Rancher \u548c Ingress Controller \u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u3002"),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u4f7f\u7528 kubectl \u4e3a Rancher \u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cattle-system\n")),(0,n.kt)("p",null,"\u7136\u540e\u5b89\u88c5 Rancher\uff0c\u5e76\u58f0\u660e\u4f60\u9009\u62e9\u7684\u9009\u9879\u3002\u53c2\u8003\u4e0b\u8868\u6765\u66ff\u6362\u6bcf\u4e2a\u5360\u4f4d\u7b26\u3002Rancher \u9700\u8981\u914d\u7f6e\u4e3a\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u4ee5\u4fbf\u914d\u7f6e\u6240\u6709 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u6216 Rancher \u5de5\u5177\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u538b\u7f29\u5305\u7684\u7248\u672c\u53f7\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5411\u8d1f\u8f7d\u5747\u8861\u5668\u7684 DNS \u540d\u79f0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684 DNS \u540d\u79f0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<CERTMANAGER_VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},"\u5728 K8s \u96c6\u7fa4\u4e0a\u8fd0\u884c\u7684 cert-manager \u7248\u672c\u3002")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"   helm install rancher ./rancher-<VERSION>.tgz \\\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set certmanager.version=<CERTMANAGER_VERSION> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # \u8bbe\u7f6e\u5728 Rancher \u4e2d\u4f7f\u7528\u7684\u9ed8\u8ba4\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\n    --set useBundledSystemChart=true # \u4f7f\u7528\u6253\u5305\u7684 Rancher System Chart\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53ef\u9009"),"\uff1a\u5982\u9700\u5b89\u88c5\u7279\u5b9a\u7684 Rancher \u7248\u672c\uff0c\u8bbe\u7f6e",(0,n.kt)("inlineCode",{parentName:"p"},"rancherImageTag")," \u7684\u503c\uff0c\u4f8b\u5982\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"--set rancherImageTag=v2.5.8")),(0,n.kt)("h4",{id:"\u9009\u9879-b\u4f7f\u7528-kubernetes-\u5bc6\u6587\u4ece\u6587\u4ef6\u4e2d\u83b7\u53d6\u8bc1\u4e66"},"\u9009\u9879 B\uff1a\u4f7f\u7528 Kubernetes \u5bc6\u6587\u4ece\u6587\u4ef6\u4e2d\u83b7\u53d6\u8bc1\u4e66"),(0,n.kt)("h5",{id:"1-\u521b\u5efa\u5bc6\u6587"},"1. \u521b\u5efa\u5bc6\u6587"),(0,n.kt)("p",null,"\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66\u6765\u521b\u5efa Kubernetes \u5bc6\u6587\uff0c\u4ee5\u4f9b Rancher \u4f7f\u7528\u3002\u8bc1\u4e66\u7684 common name \u9700\u8981\u4e0e\u4ee5\u4e0b\u547d\u4ee4\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"hostname")," \u9009\u9879\u5339\u914d\uff0c\u5426\u5219 Ingress Controller \u5c06\u65e0\u6cd5\u4e3a Rancher \u914d\u7f6e\u7ad9\u70b9\u3002"),(0,n.kt)("h5",{id:"2-\u5b89\u88c5-rancher-1"},"2. \u5b89\u88c5 Rancher"),(0,n.kt)("p",null,"\u5b89\u88c5 Rancher\uff0c\u5e76\u58f0\u660e\u4f60\u9009\u62e9\u7684\u9009\u9879\u3002\u53c2\u8003\u4e0b\u8868\u6765\u66ff\u6362\u6bcf\u4e2a\u5360\u4f4d\u7b26\u3002Rancher \u9700\u8981\u914d\u7f6e\u4e3a\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff0c\u4ee5\u4fbf\u914d\u7f6e\u6240\u6709 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u6216 Rancher \u5de5\u5177\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5360\u4f4d\u7b26"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u538b\u7f29\u5305\u7684\u7248\u672c\u53f7\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5411\u8d1f\u8f7d\u5747\u8861\u5668\u7684 DNS \u540d\u79f0\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684 DNS \u540d\u79f0\u3002")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"   helm install rancher ./rancher-<VERSION>.tgz \\\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # \u8bbe\u7f6e\u5728 Rancher \u4e2d\u4f7f\u7528\u7684\u9ed8\u8ba4\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\n    --set useBundledSystemChart=true # \u4f7f\u7528\u6253\u5305\u7684 Rancher System Chart\n")),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u79c1\u6709 CA \u7b7e\u540d\u7684\u8bc1\u4e66\uff0c\u8bf7\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret")," \u540e\u52a0\u4e0a ",(0,n.kt)("inlineCode",{parentName:"p"},"--set privateCA=true"),"\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"   helm install rancher ./rancher-<VERSION>.tgz \\\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set privateCA=true \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # \u8bbe\u7f6e\u5728 Rancher \u4e2d\u4f7f\u7528\u7684\u9ed8\u8ba4\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\n    --set useBundledSystemChart=true # \u4f7f\u7528\u6253\u5305\u7684 Rancher System Chart\n")),(0,n.kt)("p",null,"\u5b89\u88c5\u5df2\u5b8c\u6210\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4e0d\u60f3\u53d1\u9001\u9065\u6d4b\u6570\u636e\uff0c\u5728\u9996\u6b21\u767b\u5f55\u65f6\u9000\u51fa",(0,n.kt)("a",{parentName:"p",href:"/zh/faq/telemetry"},"\u9065\u6d4b"),"\u3002\u5982\u679c\u5728\u79bb\u7ebf\u5b89\u88c5\u7684\u73af\u5883\u4e2d\u8ba9\u8fd9\u4e2a\u529f\u80fd\u5904\u4e8e active \u72b6\u6001\uff0csocket \u53ef\u80fd\u65e0\u6cd5\u6253\u5f00\u3002")),(0,n.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u8d44\u6e90\u53ef\u80fd\u5bf9\u5b89\u88c5 Rancher \u6709\u5e2e\u52a9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/installation-references/helm-chart-options"},"Rancher Helm Chart \u9009\u9879")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"\u6dfb\u52a0 TLS \u5bc6\u6587")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Rancher Kubernetes \u5b89\u88c5\u7684\u6545\u969c\u6392\u9664"))))}h.isMDXComponent=!0}}]);