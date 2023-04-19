"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[39170],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),o=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=o(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),h=o(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||s[m]||i;return n?t.createElement(d,c(c({ref:r},p),{},{components:n})):t.createElement(d,c({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=h;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var o=2;o<i;o++)c[o]=n[o];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36597:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var t=n(87462),a=(n(67294),n(3905));const i={title:"\u5173\u4e8e rancher-selinux"},c=void 0,u={unversionedId:"reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",id:"version-2.6/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",title:"\u5173\u4e8e rancher-selinux",description:"\u8981\u8ba9 Rancher \u4f7f\u7528 SELinux\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u4e3a SELinux \u8282\u70b9\u542f\u7528\u4e00\u4e9b\u529f\u80fd\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cRancher \u63d0\u4f9b\u4e86\u4e00\u4e2a SELinux RPM\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux.md",sourceDirName:"reference-guides/rancher-security/selinux-rpm",slug:"/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",permalink:"/zh/v2.6/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u5173\u4e8e rancher-selinux"},sidebar:"tutorialSidebar",previous:{title:"SELinux RPM",permalink:"/zh/v2.6/pages-for-subheaders/selinux-rpm"},next:{title:"\u5173\u4e8e rke2-selinux",permalink:"/zh/v2.6/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux"}},l={},o=[{value:"\u5b89\u88c5 rancher-selinux RPM",id:"\u5b89\u88c5-rancher-selinux-rpm",level:2},{value:"1. \u8bbe\u7f6e yum \u4ed3\u5e93",id:"1-\u8bbe\u7f6e-yum-\u4ed3\u5e93",level:3},{value:"2. \u5b89\u88c5 RPM",id:"2-\u5b89\u88c5-rpm",level:3},{value:"\u914d\u7f6e Logging \u5e94\u7528\u7a0b\u5e8f\u4ee5\u4f7f\u7528 SELinux",id:"\u914d\u7f6e-logging-\u5e94\u7528\u7a0b\u5e8f\u4ee5\u4f7f\u7528-selinux",level:2}],p={toc:o};function s(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8981\u8ba9 Rancher \u4f7f\u7528 SELinux\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u4e3a SELinux \u8282\u70b9\u542f\u7528\u4e00\u4e9b\u529f\u80fd\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cRancher \u63d0\u4f9b\u4e86\u4e00\u4e2a SELinux RPM\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM \u4ec5\u5305\u542b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/dev-v2.5/charts/rancher-logging"},"rancher-logging \u5e94\u7528\u7a0b\u5e8f"),"\u7684\u7b56\u7565\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," \u7684 GitHub \u4ed3\u5e93\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-selinux"},"\u8fd9\u91cc"),"\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5-rancher-selinux-rpm"},"\u5b89\u88c5 rancher-selinux RPM"),(0,a.kt)("admonition",{title:"\u8981\u6c42",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"rancher-selinux RPM \u5df2\u5728 CentOS 7 \u548c 8 \u4e0a\u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002")),(0,a.kt)("h3",{id:"1-\u8bbe\u7f6e-yum-\u4ed3\u5e93"},"1. \u8bbe\u7f6e yum \u4ed3\u5e93"),(0,a.kt)("p",null,"\u8bbe\u7f6e yum \u4ed3\u5e93\uff0c\u4ece\u800c\u76f4\u63a5\u5728\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u4e3b\u673a\u4e0a\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-selinux"),"\u3002"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 RPM \u4ed3\u5e93\uff0c\u5728 CentOS 7 \u6216 RHEL 7 \u7cfb\u7edf\u4e0a\u8fd0\u884c\u4ee5\u4e0b bash \u4ee3\u7801\u7247\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# cat << EOF > /etc/yum.repos.d/rancher.repo\n[rancher]\nname=Rancher\nbaseurl=https://rpm.rancher.io/rancher/production/centos/7/noarch\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\nEOF\n")),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 RPM \u4ed3\u5e93\uff0c\u5728 CentOS 8 \u6216 RHEL 8 \u7cfb\u7edf\u4e0a\u8fd0\u884c\u4ee5\u4e0b bash \u4ee3\u7801\u7247\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# cat << EOF > /etc/yum.repos.d/rancher.repo\n[rancher]\nname=Rancher\nbaseurl=https://rpm.rancher.io/rancher/production/centos/8/noarch\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\nEOF\n")),(0,a.kt)("h3",{id:"2-\u5b89\u88c5-rpm"},"2. \u5b89\u88c5 RPM"),(0,a.kt)("p",null,"\u5b89\u88c5 RPM\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum -y install rancher-selinux\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e-logging-\u5e94\u7528\u7a0b\u5e8f\u4ee5\u4f7f\u7528-selinux"},"\u914d\u7f6e Logging \u5e94\u7528\u7a0b\u5e8f\u4ee5\u4f7f\u7528 SELinux"),(0,a.kt)("admonition",{title:"\u8981\u6c42",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Logging v2 \u5df2\u5728 RHEL/CentOS 7 \u548c 8 \u4e0a\u4f7f\u7528 SELinux \u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002")),(0,a.kt)("p",null,"\u5728\u4e3b\u673a\u4e0a\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM \u540e\uff0c\u5e94\u7528\u7a0b\u5e8f\u4e0d\u4f1a\u81ea\u52a8\u8fd0\u884c\u3002\u5b83\u4eec\u9700\u8981\u5728 RPM \u63d0\u4f9b\u7684\u5141\u8bb8\u7684 SELinux \u5bb9\u5668\u57df\u4e2d\u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-logging")," Chart \u914d\u7f6e\u4e3a\u652f\u6301 SELinux\uff0c\u8bf7\u5728\u5b89\u88c5 Chart \u65f6\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"global.seLinux.enabled")," \u66f4\u6539\u4e3a true\u3002"))}s.isMDXComponent=!0}}]);