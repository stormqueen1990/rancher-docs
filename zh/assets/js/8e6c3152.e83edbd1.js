"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},k=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),s=d(r),c=a,m=s["".concat(i,".").concat(c)]||s[c]||o[c]||l;return r?n.createElement(m,p(p({ref:t},k),{},{components:r})):n.createElement(m,p({ref:t},k))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,p[1]=u;for(var d=2;d<l;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},31734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u5907\u4efd\u96c6\u7fa4"},p=void 0,u={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",id:"version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",title:"\u5907\u4efd\u96c6\u7fa4",description:"\u5728 Rancher UI \u4e2d\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5907\u4efd\u548c\u6062\u590d Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u7684 etcd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md",tags:[],version:"2.6",lastUpdatedAt:1669187684,formattedLastUpdatedAt:"2022\u5e7411\u670823\u65e5",frontMatter:{title:"\u5907\u4efd\u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u6062\u590d\u5907\u4efd - Docker \u5b89\u88c5",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},next:{title:"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"}},i={},d=[{value:"\u5feb\u7167\u5de5\u4f5c\u539f\u7406",id:"\u5feb\u7167\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u5feb\u7167\u7ec4\u4ef6",id:"\u5feb\u7167\u7ec4\u4ef6",level:3},{value:"\u4ece etcd \u8282\u70b9\u751f\u6210\u5feb\u7167",id:"\u4ece-etcd-\u8282\u70b9\u751f\u6210\u5feb\u7167",level:3},{value:"\u5feb\u7167\u547d\u540d\u89c4\u5219",id:"\u5feb\u7167\u547d\u540d\u89c4\u5219",level:3},{value:"\u4ece\u5feb\u7167\u6062\u590d\u7684\u5de5\u4f5c\u539f\u7406",id:"\u4ece\u5feb\u7167\u6062\u590d\u7684\u5de5\u4f5c\u539f\u7406",level:3},{value:"\u914d\u7f6e\u5b9a\u671f\u5feb\u7167",id:"\u914d\u7f6e\u5b9a\u671f\u5feb\u7167",level:2},{value:"\u5355\u6b21\u5feb\u7167",id:"\u5355\u6b21\u5feb\u7167",level:2},{value:"\u5feb\u7167\u5907\u4efd\u76ee\u6807",id:"\u5feb\u7167\u5907\u4efd\u76ee\u6807",level:2},{value:"\u672c\u5730\u5907\u4efd\u76ee\u6807",id:"\u672c\u5730\u5907\u4efd\u76ee\u6807",level:3},{value:"S3 \u5907\u4efd\u76ee\u6807",id:"s3-\u5907\u4efd\u76ee\u6807",level:3},{value:"\u4e3a S3 \u4f7f\u7528\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66",id:"\u4e3a-s3-\u4f7f\u7528\u81ea\u5b9a\u4e49-ca-\u8bc1\u4e66",level:3},{value:"\u5728 S3 \u4e2d\u5b58\u50a8\u5feb\u7167\u7684 IAM \u652f\u6301",id:"\u5728-s3-\u4e2d\u5b58\u50a8\u5feb\u7167\u7684-iam-\u652f\u6301",level:3},{value:"\u67e5\u770b\u53ef\u7528\u5feb\u7167",id:"\u67e5\u770b\u53ef\u7528\u5feb\u7167",level:2},{value:"\u5b89\u5168\u65f6\u95f4\u6233",id:"\u5b89\u5168\u65f6\u95f4\u6233",level:2},{value:"\u4e3a\u4f7f\u7528 Rancher v2.2.0 \u4e4b\u524d\u7684\u7248\u672c\u521b\u5efa\u7684\u96c6\u7fa4\u542f\u7528\u5feb\u7167\u529f\u80fd",id:"\u4e3a\u4f7f\u7528-rancher-v220-\u4e4b\u524d\u7684\u7248\u672c\u521b\u5efa\u7684\u96c6\u7fa4\u542f\u7528\u5feb\u7167\u529f\u80fd",level:2}],k={toc:d};function o(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Rancher UI \u4e2d\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5907\u4efd\u548c\u6062\u590d ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4"),"\u7684 etcd\u3002"),(0,a.kt)("p",null,"Rancher \u5efa\u8bae\u4e3a\u6240\u6709\u751f\u4ea7\u96c6\u7fa4\u914d\u7f6e\u5b9a\u671f ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u5feb\u7167\u3002\u6b64\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u5355\u6b21\u5feb\u7167\u3002"),(0,a.kt)("p",null,"etcd \u6570\u636e\u5e93\u7684\u5feb\u7167\u4f1a\u4fdd\u5b58\u5728 ",(0,a.kt)("a",{parentName:"p",href:"#%E6%9C%AC%E5%9C%B0%E5%A4%87%E4%BB%BD%E7%9B%AE%E6%A0%87"},"etcd \u8282\u70b9"),"\u6216 ",(0,a.kt)("a",{parentName:"p",href:"#s3-%E5%A4%87%E4%BB%BD%E7%9B%AE%E6%A0%87"},"S3 \u517c\u5bb9\u76ee\u6807"),"\u4e0a\u3002\u914d\u7f6e S3 \u7684\u597d\u5904\u662f\uff0c\u5982\u679c\u6240\u6709 etcd \u8282\u70b9\u90fd\u4e22\u5931\u4e86\uff0c\u4f60\u7684\u5feb\u7167\u4f1a\u4fdd\u5b58\u5230\u8fdc\u7aef\u5e76\u80fd\u7528\u4e8e\u6062\u590d\u96c6\u7fa4\u3002"),(0,a.kt)("h2",{id:"\u5feb\u7167\u5de5\u4f5c\u539f\u7406"},"\u5feb\u7167\u5de5\u4f5c\u539f\u7406"),(0,a.kt)("h3",{id:"\u5feb\u7167\u7ec4\u4ef6"},"\u5feb\u7167\u7ec4\u4ef6"),(0,a.kt)("p",null,"Rancher \u521b\u5efa\u5feb\u7167\u65f6\uff0c\u5feb\u7167\u91cc\u5305\u62ec\u4e09\u4e2a\u7ec4\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"etcd \u4e2d\u7684\u96c6\u7fa4\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes \u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cluster.yml")," \u5f62\u5f0f\u7684\u96c6\u7fa4\u914d\u7f6e")),(0,a.kt)("p",null,"\u7531\u4e8e Kubernetes \u7248\u672c\u73b0\u5728\u5305\u542b\u5728\u5feb\u7167\u4e2d\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5c06\u96c6\u7fa4\u6062\u590d\u5230\u539f\u672c\u7684 Kubernetes \u7248\u672c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528\u5feb\u7167\u6062\u590d\u96c6\u7fa4\uff0c\u5feb\u7167\u7684\u591a\u4e2a\u7ec4\u4ef6\u5141\u8bb8\u4f60\u9009\u62e9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4ec5\u6062\u590d etcd \u5185\u5bb9"),"\uff1a\u7c7b\u4f3c\u4e8e\u5728 Rancher v2.4.0 \u4e4b\u524d\u7248\u672c\u4e2d\u7684\u4f7f\u7528\u5feb\u7167\u6062\u590d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6062\u590d etcd \u548c Kubernetes \u7248\u672c"),"\uff1a\u5982\u679c Kubernetes \u5347\u7ea7\u5bfc\u81f4\u96c6\u7fa4\u5931\u8d25\uff0c\u5e76\u4e14\u4f60\u6ca1\u6709\u66f4\u6539\u4efb\u4f55\u96c6\u7fa4\u914d\u7f6e\uff0c\u5219\u5e94\u4f7f\u7528\u6b64\u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6062\u590d etcd\u3001Kubernetes \u7248\u672c\u548c\u96c6\u7fa4\u914d\u7f6e"),"\uff1a\u5982\u679c\u4f60\u5728\u5347\u7ea7\u65f6\u540c\u65f6\u66f4\u6539\u4e86 Kubernetes \u7248\u672c\u548c\u96c6\u7fa4\u914d\u7f6e\uff0c\u5219\u5e94\u4f7f\u7528\u6b64\u9009\u9879\u3002")),(0,a.kt)("p",null,"\u59cb\u7ec8\u5efa\u8bae\u5728\u5347\u7ea7\u4e4b\u524d\u521b\u5efa\u4e00\u4e2a\u5feb\u7167\u3002"),(0,a.kt)("h3",{id:"\u4ece-etcd-\u8282\u70b9\u751f\u6210\u5feb\u7167"},"\u4ece etcd \u8282\u70b9\u751f\u6210\u5feb\u7167"),(0,a.kt)("p",null,"\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a etcd \u8282\u70b9\u90fd\u4f1a\u68c0\u67e5 etcd \u96c6\u7fa4\u7684\u5065\u5eb7\u72b6\u51b5\u3002\u5982\u679c\u8282\u70b9\u62a5\u544a etcd \u96c6\u7fa4\u662f\u5065\u5eb7\u7684\uff0c\u5219\u4f1a\u4ece\u4e2d\u521b\u5efa\u4e00\u4e2a\u5feb\u7167\uff0c\u5e76\u53ef\u9009\u62e9\u4e0a\u4f20\u5230 S3\u3002"),(0,a.kt)("p",null,"\u5feb\u7167\u5b58\u50a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots")," \u4e2d\u3002\u5982\u679c\u8be5\u76ee\u5f55\u5728\u8282\u70b9\u4e0a\u914d\u7f6e\u4e3a\u5171\u4eab\u6302\u8f7d\uff0c\u5b83\u5c06\u88ab\u8986\u76d6\u3002\u7531\u4e8e\u6240\u6709 etcd \u8282\u70b9\u90fd\u4f1a\u4e0a\u4f20\u5feb\u7167\u5e76\u4fdd\u7559\u6700\u540e\u4e00\u4e2a\uff0c\u56e0\u6b64 S3 \u4e0a\u59cb\u7ec8\u4f1a\u4fdd\u7559\u6700\u540e\u4e00\u4e2a\u4e0a\u4f20\u7684\u8282\u70b9\u7684\u5feb\u7167\u3002"),(0,a.kt)("p",null,"\u5728\u5b58\u5728\u591a\u4e2a etcd \u8282\u70b9\u7684\u60c5\u51b5\u4e0b\uff0c\u4efb\u4f55\u5feb\u7167\u90fd\u662f\u5728\u96c6\u7fa4\u5065\u5eb7\u68c0\u67e5\u901a\u8fc7\u540e\u521b\u5efa\u7684\uff0c\u56e0\u6b64\u8fd9\u4e9b\u5feb\u7167\u53ef\u4ee5\u8ba4\u4e3a\u662f etcd \u96c6\u7fa4\u4e2d\u6570\u636e\u7684\u6709\u6548\u5feb\u7167\u3002"),(0,a.kt)("h3",{id:"\u5feb\u7167\u547d\u540d\u89c4\u5219"},"\u5feb\u7167\u547d\u540d\u89c4\u5219"),(0,a.kt)("p",null,"\u5feb\u7167\u7684\u540d\u79f0\u662f\u81ea\u52a8\u751f\u6210\u7684\u3002\u5728\u4f7f\u7528 RKE CLI \u521b\u5efa\u4e00\u6b21\u6027\u5feb\u7167\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--name")," \u9009\u9879\u6765\u6307\u5b9a\u5feb\u7167\u7684\u540d\u79f0\u3002"),(0,a.kt)("p",null,"Rancher \u5728\u521b\u5efa RKE \u96c6\u7fa4\u7684\u5feb\u7167\u65f6\uff0c\u5feb\u7167\u540d\u79f0\u662f\u57fa\u4e8e\u5feb\u7167\u521b\u5efa\u7c7b\u578b\uff08\u624b\u52a8\u5feb\u7167\u6216\u5b9a\u671f\u5feb\u7167\uff09\u548c\u76ee\u6807\uff08\u5feb\u7167\u662f\u4fdd\u5b58\u5728\u672c\u5730\u8fd8\u662f\u4e0a\u4f20\u5230 S3\uff09\u51b3\u5b9a\u7684\u3002\u547d\u540d\u89c4\u5219\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m")," \u4ee3\u8868\u624b\u52a8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"r")," \u4ee3\u8868\u5b9a\u671f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"l")," \u4ee3\u8868\u672c\u5730"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u4ee3\u8868 S3")),(0,a.kt)("p",null,"\u5feb\u7167\u540d\u79f0\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"c-9dmxz-rl-8b2cx"),(0,a.kt)("li",{parentName:"ul"},"c-9dmxz-ml-kr56m"),(0,a.kt)("li",{parentName:"ul"},"c-9dmxz-ms-t6bjb"),(0,a.kt)("li",{parentName:"ul"},"c-9dmxz-rs-8gxc8")),(0,a.kt)("h3",{id:"\u4ece\u5feb\u7167\u6062\u590d\u7684\u5de5\u4f5c\u539f\u7406"},"\u4ece\u5feb\u7167\u6062\u590d\u7684\u5de5\u4f5c\u539f\u7406"),(0,a.kt)("p",null,"\u5728\u6062\u590d\u65f6\u4f1a\u53d1\u751f\u4ee5\u4e0b\u8fc7\u7a0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u914d\u7f6e\u4e86 S3\uff0c\u5219\u4ece S3 \u68c0\u7d22\u5feb\u7167\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5feb\u7167\u538b\u7f29\u4e86\uff0c\u5219\u5c06\u5feb\u7167\u89e3\u538b\u7f29\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u96c6\u7fa4\u4e2d\u7684\u4e00\u4e2a etcd \u8282\u70b9\u4f1a\u5c06\u8be5\u5feb\u7167\u6587\u4ef6\u63d0\u4f9b\u7ed9\u5176\u4ed6\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5176\u4ed6 etcd \u8282\u70b9\u4f1a\u4e0b\u8f7d\u5feb\u7167\u5e76\u9a8c\u8bc1\u6821\u9a8c\u548c\uff0c\u4ee5\u4fbf\u90fd\u80fd\u4f7f\u7528\u76f8\u540c\u7684\u5feb\u7167\u8fdb\u884c\u6062\u590d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u96c6\u7fa4\u5df2\u6062\u590d\uff0c\u6062\u590d\u540e\u7684\u64cd\u4f5c\u5c06\u5728\u96c6\u7fa4\u4e2d\u5b8c\u6210\u3002")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u5b9a\u671f\u5feb\u7167"},"\u914d\u7f6e\u5b9a\u671f\u5feb\u7167"),(0,a.kt)("p",null,"\u9009\u62e9\u521b\u5efa\u5b9a\u671f\u5feb\u7167\u7684\u9891\u7387\u4ee5\u53ca\u8981\u4fdd\u7559\u7684\u5feb\u7167\u6570\u91cf\u3002\u65f6\u95f4\u7684\u5355\u4f4d\u662f\u5c0f\u65f6\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u65f6\u95f4\u6233\u5feb\u7167\u8fdb\u884c\u65f6\u95f4\u70b9\u6062\u590d\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4"),"\u4f1a\u914d\u7f6e\u4e3a\u521b\u5efa\u5b9a\u671f\u5feb\u7167\uff08\u4fdd\u5b58\u5230\u672c\u5730\u78c1\u76d8\uff09\u3002\u4e3a\u9632\u6b62\u672c\u5730\u78c1\u76d8\u6545\u969c\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"#s3-%E5%A4%87%E4%BB%BD%E7%9B%AE%E6%A0%87"},"S3 \u76ee\u6807"),"\u6216\u590d\u5236\u78c1\u76d8\u4e0a\u7684\u8def\u5f84\u3002"),(0,a.kt)("p",null,"\u5728\u96c6\u7fa4\u914d\u7f6e\u6216\u7f16\u8f91\u96c6\u7fa4\u671f\u95f4\uff0c\u53ef\u4ee5\u5728",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u9009\u9879"),"\u7684\u9ad8\u7ea7\u90e8\u5206\u4e2d\u627e\u5230\u5feb\u7167\u7684\u914d\u7f6e\u3002\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u663e\u793a\u9ad8\u7ea7\u9009\u9879"),"\u3002"),(0,a.kt)("p",null,"\u5728\u96c6\u7fa4\u7684",(0,a.kt)("strong",{parentName:"p"},"\u9ad8\u7ea7\u9009\u9879"),"\u4e2d\u53ef\u4ee5\u914d\u7f6e\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"etcd \u5feb\u7167\u5907\u4efd\u76ee\u6807"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u8981\u4fdd\u5b58\u5feb\u7167\u7684\u4f4d\u7f6e\u3002\u53ef\u4ee5\u662f\u672c\u5730\u6216 S3"),(0,a.kt)("td",{parentName:"tr",align:null},"\u672c\u5730")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u5b9a\u671f etcd \u5feb\u7167"),(0,a.kt)("td",{parentName:"tr",align:null},"\u542f\u7528/\u7981\u7528\u5b9a\u671f\u5feb\u7167"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u671f etcd \u5feb\u7167\u7684\u521b\u5efa\u5468\u671f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u671f\u5feb\u7167\u4e4b\u95f4\u7684\u95f4\u9694\uff08\u4ee5\u5c0f\u65f6\u4e3a\u5355\u4f4d\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"12 \u5c0f\u65f6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u671f etcd \u5feb\u7167\u7684\u4fdd\u7559\u6570\u91cf"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8981\u4fdd\u7559\u7684\u5feb\u7167\u6570\u91cf"),(0,a.kt)("td",{parentName:"tr",align:null},"6")))),(0,a.kt)("h2",{id:"\u5355\u6b21\u5feb\u7167"},"\u5355\u6b21\u5feb\u7167"),(0,a.kt)("p",null,"\u9664\u4e86\u5b9a\u671f\u5feb\u7167\u4e4b\u5916\uff0c\u4f60\u53ef\u80fd\u8fd8\u60f3\u521b\u5efa\u201c\u4e00\u6b21\u6027\u201d\u5feb\u7167\u3002\u4f8b\u5982\uff0c\u5728\u5347\u7ea7\u96c6\u7fa4\u7684 Kubernetes \u7248\u672c\u4e4b\u524d\uff0c\u6700\u597d\u5907\u4efd\u96c6\u7fa4\u7684\u72b6\u6001\u4ee5\u9632\u6b62\u5347\u7ea7\u5931\u8d25\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5bfc\u822a\u5230\u8981\u5728\u5176\u4e2d\u521b\u5efa\u4e00\u6b21\u6027\u5feb\u7167\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > \u62cd\u6444\u5feb\u7167"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u6839\u636e\u4f60\u7684",(0,a.kt)("a",{parentName:"p",href:"#%E5%BF%AB%E7%85%A7%E5%A4%87%E4%BB%BD%E7%9B%AE%E6%A0%87"},"\u5feb\u7167\u5907\u4efd\u76ee\u6807"),"\u521b\u5efa\u4e00\u6b21\u6027\u5feb\u7167\uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u5728\u9009\u5b9a\u7684\u5907\u4efd\u76ee\u6807\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u5feb\u7167\u5907\u4efd\u76ee\u6807"},"\u5feb\u7167\u5907\u4efd\u76ee\u6807"),(0,a.kt)("p",null,"Rancher \u652f\u6301\u4e24\u79cd\u4e0d\u540c\u7684\u5907\u4efd\u76ee\u6807\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E6%9C%AC%E5%9C%B0%E5%A4%87%E4%BB%BD%E7%9B%AE%E6%A0%87"},"\u672c\u5730\u76ee\u6807")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#s3-%E5%A4%87%E4%BB%BD%E7%9B%AE%E6%A0%87"},"S3 \u76ee\u6807"))),(0,a.kt)("h3",{id:"\u672c\u5730\u5907\u4efd\u76ee\u6807"},"\u672c\u5730\u5907\u4efd\u76ee\u6807"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," \u5907\u4efd\u76ee\u6807\u3002\u6b64\u9009\u9879\u7684\u597d\u5904\u662f\u4e0d\u9700\u8981\u8fdb\u884c\u5916\u90e8\u914d\u7f6e\u3002\u5feb\u7167\u4f1a\u5728\u672c\u5730\u81ea\u52a8\u4fdd\u5b58\u5230 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4"),"\u4e2d etcd \u8282\u70b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots")," \u4e2d\u3002\u6240\u6709\u5b9a\u671f\u5feb\u7167\u90fd\u662f\u6309\u7167\u914d\u7f6e\u7684\u65f6\u95f4\u95f4\u9694\u521b\u5efa\u7684\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"local")," \u5907\u4efd\u76ee\u6807\u7684\u7f3a\u70b9\u662f\uff0c\u5982\u679c\u53d1\u751f\u5168\u9762\u707e\u96be\u5e76\u4e14\u4e22\u5931 ",(0,a.kt)("em",{parentName:"p"},"\u6240\u6709")," etcd \u8282\u70b9\u65f6\uff0c\u5219\u65e0\u6cd5\u6062\u590d\u96c6\u7fa4\u3002"),(0,a.kt)("h3",{id:"s3-\u5907\u4efd\u76ee\u6807"},"S3 \u5907\u4efd\u76ee\u6807"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"S3")," \u5907\u4efd\u76ee\u6807\u5141\u8bb8\u7528\u6237\u914d\u7f6e\u4e0e S3 \u517c\u5bb9\u7684\u540e\u7aef\u6765\u5b58\u50a8\u5feb\u7167\u3002\u6b64\u9009\u9879\u7684\u4e3b\u8981\u597d\u5904\u662f\uff0c\u5982\u679c\u96c6\u7fa4\u4e22\u5931\u4e86\u6240\u6709 etcd \u8282\u70b9\uff0c\u7531\u4e8e\u5feb\u7167\u5b58\u50a8\u5728\u5916\u90e8\uff0c\u96c6\u7fa4\u4ecd\u7136\u53ef\u4ee5\u6062\u590d\u3002Rancher \u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"S3")," \u5907\u4efd\u8fd9\u7c7b\u5916\u90e8\u76ee\u6807\u3002\u4f46\u662f\u5b83\u7684\u914d\u7f6e\u8981\u6c42\u8fdb\u884c\u989d\u5916\u7684\u64cd\u4f5c\uff0c\u8fd9\u4e5f\u5e94\u8be5\u88ab\u8003\u8651\u5728\u5176\u4e2d\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S3 \u5b58\u50a8\u6876\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06\u5b58\u50a8\u5907\u4efd\u7684 S3 \u5b58\u50a8\u6876\u540d\u79f0"),(0,a.kt)("td",{parentName:"tr",align:null},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S3 \u533a\u57df"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5907\u4efd\u5b58\u50a8\u6876\u7684 S3 \u533a\u57df"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S3 \u533a\u57df\u7aef\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5907\u4efd\u5b58\u50a8\u6876\u7684 S3 \u533a\u57df\u7aef\u70b9"),(0,a.kt)("td",{parentName:"tr",align:null},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S3 \u8bbf\u95ee\u5bc6\u94a5"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6709\u6743\u8bbf\u95ee\u5907\u4efd\u5b58\u50a8\u6876\u7684 S3 \u8bbf\u95ee\u5bc6\u94a5"),(0,a.kt)("td",{parentName:"tr",align:null},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S3 \u5bc6\u6587\u5bc6\u94a5"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6709\u6743\u8bbf\u95ee\u5907\u4efd\u5b58\u50a8\u6876\u7684 S3 \u5bc6\u6587\u5bc6\u94a5"),(0,a.kt)("td",{parentName:"tr",align:null},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8bbf\u95ee\u79c1\u6709 S3 \u540e\u7aef\u7684\u81ea\u5b9a\u4e49\u8bc1\u4e66"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"\u4e3a-s3-\u4f7f\u7528\u81ea\u5b9a\u4e49-ca-\u8bc1\u4e66"},"\u4e3a S3 \u4f7f\u7528\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66"),(0,a.kt)("p",null,"\u5907\u4efd\u5feb\u7167\u53ef\u4ee5\u5b58\u50a8\u5728\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"S3")," \u5907\u4efd\u4e2d\uff0c\u4f8b\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://min.io/"},"minio"),"\u3002\u5982\u679c S3 \u540e\u7aef\u4f7f\u7528\u81ea\u7b7e\u540d\u6216\u81ea\u5b9a\u4e49\u8bc1\u4e66\uff0c\u8bf7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66"),"\u9009\u9879\u6765\u63d0\u4f9b\u81ea\u5b9a\u4e49\u8bc1\u4e66\uff0c\u4ece\u800c\u8fde\u63a5\u5230 S3 \u540e\u7aef\u3002"),(0,a.kt)("h3",{id:"\u5728-s3-\u4e2d\u5b58\u50a8\u5feb\u7167\u7684-iam-\u652f\u6301"},"\u5728 S3 \u4e2d\u5b58\u50a8\u5feb\u7167\u7684 IAM \u652f\u6301"),(0,a.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 API \u51ed\u8bc1\u4e4b\u5916\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"S3")," \u5907\u4efd\u76ee\u6807\u8fd8\u652f\u6301\u5bf9 AWS API \u4f7f\u7528 IAM \u8eab\u4efd\u9a8c\u8bc1\u3002IAM \u89d2\u8272\u4f1a\u6388\u4e88\u5e94\u7528\u5728\u5bf9 S3 \u5b58\u50a8\u8fdb\u884c API \u8c03\u7528\u65f6\u7684\u4e34\u65f6\u6743\u9650\u3002\u8981\u4f7f\u7528 IAM \u8eab\u4efd\u9a8c\u8bc1\uff0c\u5fc5\u987b\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4 etcd \u8282\u70b9\u5fc5\u987b\u5177\u6709\u5b9e\u4f8b\u89d2\u8272\uff0c\u8be5\u89d2\u8272\u5177\u6709\u5bf9\u6307\u5b9a\u5907\u4efd\u5b58\u50a8\u6876\u7684\u8bfb/\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4 etcd \u8282\u70b9\u5fc5\u987b\u5bf9\u6307\u5b9a\u7684 S3 \u7aef\u70b9\u5177\u6709\u7f51\u7edc\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"Rancher Server worker \u8282\u70b9\u5fc5\u987b\u5177\u6709\u5b9e\u4f8b\u89d2\u8272\uff0c\u8be5\u5b9e\u4f8b\u89d2\u8272\u5177\u6709\u5bf9\u6307\u5b9a\u5907\u4efd\u5b58\u50a8\u6876\u7684\u8bfb/\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"Rancher Server worker \u8282\u70b9\u5fc5\u987b\u5bf9\u6307\u5b9a\u7684 S3 \u7aef\u70b9\u5177\u6709\u7f51\u7edc\u8bbf\u95ee\u6743\u9650\u3002")),(0,a.kt)("p",null,"\u8981\u6388\u4e88\u5e94\u7528\u5bf9 S3 \u7684\u8bbf\u95ee\u6743\u9650\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html"},"\u4f7f\u7528 IAM \u89d2\u8272\u5411\u5728 Amazon EC2 \u5b9e\u4f8b\u4e0a\u8fd0\u884c\u7684\u5e94\u7528\u6388\u4e88\u6743\u9650"),"\u7684 AWS \u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u67e5\u770b\u53ef\u7528\u5feb\u7167"},"\u67e5\u770b\u53ef\u7528\u5feb\u7167"),(0,a.kt)("p",null,"Rancher UI \u4e2d\u63d0\u4f9b\u4e86\u96c6\u7fa4\u6240\u6709\u53ef\u7528\u5feb\u7167\u7684\u5217\u8868\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8f6c\u5230\u8981\u67e5\u770b\u5feb\u7167\u7684\u96c6\u7fa4\u5e76\u5355\u51fb\u5176\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5feb\u7167"),"\u9009\u9879\u5361\u6765\u67e5\u770b\u5df2\u4fdd\u5b58\u5feb\u7167\u7684\u5217\u8868\u3002\u8fd9\u4e9b\u5feb\u7167\u5305\u62ec\u521b\u5efa\u65f6\u95f4\u7684\u65f6\u95f4\u6233\u3002")),(0,a.kt)("h2",{id:"\u5b89\u5168\u65f6\u95f4\u6233"},"\u5b89\u5168\u65f6\u95f4\u6233"),(0,a.kt)("p",null,"\u5feb\u7167\u6587\u4ef6\u5e26\u6709\u65f6\u95f4\u6233\uff0c\u4ece\u800c\u7b80\u5316\u4f7f\u7528\u5916\u90e8\u5de5\u5177\u548c\u811a\u672c\u5904\u7406\u6587\u4ef6\u7684\u8fc7\u7a0b\u3002\u4f46\u5728\u67d0\u4e9b\u4e0e S3 \u517c\u5bb9\u7684\u540e\u7aef\u4e2d\uff0c\u8fd9\u4e9b\u65f6\u95f4\u6233\u65e0\u6cd5\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e86\u9009\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"safe_timestamp")," \u4ee5\u652f\u6301\u517c\u5bb9\u7684\u6587\u4ef6\u540d\u3002\u5f53\u6b64\u6807\u5fd7\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u5feb\u7167\u6587\u4ef6\u540d\u65f6\u95f4\u6233\u4e2d\u7684\u6240\u6709\u7279\u6b8a\u5b57\u7b26\u90fd\u5c06\u88ab\u66ff\u6362\u3002"),(0,a.kt)("p",null,"\u6b64\u9009\u9879\u4e0d\u80fd\u76f4\u63a5\u5728 UI \u4e2d\u4f7f\u7528\uff0c\u53ea\u80fd\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"\u4ee5 YAML \u6587\u4ef6\u7f16\u8f91"),"\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u4e3a\u4f7f\u7528-rancher-v220-\u4e4b\u524d\u7684\u7248\u672c\u521b\u5efa\u7684\u96c6\u7fa4\u542f\u7528\u5feb\u7167\u529f\u80fd"},"\u4e3a\u4f7f\u7528 Rancher v2.2.0 \u4e4b\u524d\u7684\u7248\u672c\u521b\u5efa\u7684\u96c6\u7fa4\u542f\u7528\u5feb\u7167\u529f\u80fd"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4f7f\u7528 v2.2.0 \u4e4b\u524d\u7248\u672c\u521b\u5efa\u7684 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5347\u7ea7 Rancher \u540e\uff0c\u4f60\u5fc5\u987b",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/cluster-configuration"},"\u7f16\u8f91\u96c6\u7fa4"),"\u5e76 ",(0,a.kt)("em",{parentName:"p"},"\u4fdd\u5b58")," \u5b83\uff0c\u4ee5\u542f\u7528\u66f4\u65b0\u7684\u5feb\u7167\u529f\u80fd\u3002\u5373\u4f7f\u4f60\u5df2\u7ecf\u5728 v2.2.0 \u4e4b\u524d\u521b\u5efa\u4e86\u5feb\u7167\uff0c\u4f60\u4e5f\u5fc5\u987b\u6267\u884c\u6b64\u6b65\u9aa4\uff0c\u56e0\u4e3a\u65e7\u7684\u5feb\u7167\u5c06\u65e0\u6cd5\u7528\u4e8e",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"\u901a\u8fc7 UI \u5907\u4efd\u548c\u6062\u590d etcd"),"\u3002"))}o.isMDXComponent=!0}}]);