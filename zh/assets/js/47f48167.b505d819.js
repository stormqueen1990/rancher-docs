"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88763],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},29626:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Monitoring"},a=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Monitoring",description:"\u5982\u679c\u4f60\u53ea\u9700\u8981\u5de5\u4f5c\u8d1f\u8f7d\u7684 CPU \u548c\u5185\u5b58\u65f6\u95f4\u5e8f\u5217\uff0c\u5219\u4e0d\u9700\u8981\u90e8\u7f72 ServiceMonitor \u6216 PodMonitor\uff0c\u56e0\u4e3a Monitoring \u5e94\u7528\u9ed8\u8ba4\u4f1a\u6536\u96c6\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u7684\u6307\u6807\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads.md",tags:[],version:"current",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Monitoring"},sidebar:"tutorialSidebar",previous:{title:"\u5378\u8f7d Monitoring",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"},next:{title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"}},s={},l=[{value:"\u663e\u793a\u5de5\u4f5c\u8d1f\u8f7d\u7684 CPU \u548c\u5185\u5b58\u6307\u6807",id:"\u663e\u793a\u5de5\u4f5c\u8d1f\u8f7d\u7684-cpu-\u548c\u5185\u5b58\u6307\u6807",level:3},{value:"\u8bbe\u7f6e CPU \u548c\u5185\u5b58\u4e4b\u5916\u7684\u6307\u6807",id:"\u8bbe\u7f6e-cpu-\u548c\u5185\u5b58\u4e4b\u5916\u7684\u6307\u6807",level:3}],c={toc:l};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u9700\u8981\u5de5\u4f5c\u8d1f\u8f7d\u7684 CPU \u548c\u5185\u5b58\u65f6\u95f4\u5e8f\u5217\uff0c\u5219\u4e0d\u9700\u8981\u90e8\u7f72 ServiceMonitor \u6216 PodMonitor\uff0c\u56e0\u4e3a Monitoring \u5e94\u7528\u9ed8\u8ba4\u4f1a\u6536\u96c6\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u7684\u6307\u6807\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u8bbe\u7f6e\u5de5\u4f5c\u8d1f\u8f7d\u76d1\u63a7\u7684\u6b65\u9aa4\u53d6\u51b3\u4e8e\u4f60\u662f\u5426\u9700\u8981\u57fa\u672c\u6307\u6807\uff08\u4f8b\u5982\u5de5\u4f5c\u8d1f\u8f7d\u7684 CPU \u548c\u5185\u5b58\uff09\uff0c\u6216\u8005\u662f\u5426\u9700\u8981\u4ece\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u6293\u53d6\u81ea\u5b9a\u4e49\u6307\u6807\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u9700\u8981\u5de5\u4f5c\u8d1f\u8f7d\u7684 CPU \u548c\u5185\u5b58\u65f6\u95f4\u5e8f\u5217\uff0c\u5219\u4e0d\u9700\u8981\u90e8\u7f72 ServiceMonitor \u6216 PodMonitor\uff0c\u56e0\u4e3a Monitoring \u5e94\u7528\u9ed8\u8ba4\u4f1a\u6536\u96c6\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u7684\u6307\u6807\u6570\u636e\u3002\u8d44\u6e90\u4f7f\u7528\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5728 Prometheus \u7684\u672c\u5730\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93\u4e2d\u3002"),(0,o.kt)("p",null,"Grafana \u663e\u793a\u805a\u5408\u6570\u636e\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 PromQL \u67e5\u8be2\u6765\u67e5\u770b\u5355\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6570\u636e\u3002\u8fdb\u884c PromQL \u67e5\u8be2\u540e\uff0c\u4f60\u53ef\u4ee5\u5728 Prometheus UI \u4e2d\u5355\u72ec\u6267\u884c\u67e5\u8be2\u5e76\u67e5\u770b\u53ef\u89c6\u5316\u7684\u65f6\u95f4\u5e8f\u5217\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u67e5\u8be2\u6765\u81ea\u5b9a\u4e49\u663e\u793a\u5de5\u4f5c\u8d1f\u8f7d\u6307\u6807\u7684 Grafana \u4eea\u8868\u677f\u3002\u6709\u5173\u5de5\u4f5c\u8d1f\u8f7d\u6307\u6807\u7684 PromQL \u67e5\u8be2\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/expression/#workload-metrics"},"\u672c\u8282"),"\u3002"),(0,o.kt)("p",null,"\u8981\u4e3a\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u6307\u6807\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a Exporter \u5e76\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ServiceMonitor \u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u4ece\u800c\u5c06 Prometheus \u914d\u7f6e\u4e3a\u4ece Exporter \u4e2d\u6293\u53d6\u6307\u6807\u3002"),(0,o.kt)("h3",{id:"\u663e\u793a\u5de5\u4f5c\u8d1f\u8f7d\u7684-cpu-\u548c\u5185\u5b58\u6307\u6807"},"\u663e\u793a\u5de5\u4f5c\u8d1f\u8f7d\u7684 CPU \u548c\u5185\u5b58\u6307\u6807"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cMonitoring \u5e94\u7528\u4f1a\u6293\u53d6 CPU \u548c\u5185\u5b58\u6307\u6807\u3002"),(0,o.kt)("p",null,"\u8981\u83b7\u53d6\u7279\u5b9a\u5de5\u4f5c\u8d1f\u8f7d\u7684\u7ec6\u7c92\u5ea6\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f\u6765\u663e\u793a\u8be5\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6307\u6807\u3002"),(0,o.kt)("h3",{id:"\u8bbe\u7f6e-cpu-\u548c\u5185\u5b58\u4e4b\u5916\u7684\u6307\u6807"},"\u8bbe\u7f6e CPU \u548c\u5185\u5b58\u4e4b\u5916\u7684\u6307\u6807"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u6307\u6807\uff0c\u4f60\u9700\u8981\u4f7f\u7528 Prometheus \u652f\u6301\u7684\u683c\u5f0f\u6765\u516c\u5f00\u5e94\u7528\u4e0a\u7684\u6307\u6807\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f60\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ServiceMonitor \u81ea\u5b9a\u4e49\u8d44\u6e90\u3002\u521b\u5efa\u6b64\u8d44\u6e90\u65f6\uff0cPrometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\u5c06\u81ea\u52a8\u66f4\u65b0\uff0c\u4ee5\u4fbf\u5c06\u65b0\u7684\u81ea\u5b9a\u4e49\u6307\u6807\u7aef\u70b9\u5305\u542b\u5728\u6293\u53d6\u914d\u7f6e\u4e2d\u3002\u7136\u540e Prometheus \u4f1a\u5f00\u59cb\u4ece\u7aef\u70b9\u6293\u53d6\u6307\u6807\u3002"),(0,o.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u521b\u5efa PodMonitor \u6765\u516c\u5f00\u81ea\u5b9a\u4e49\u6307\u6807\u7aef\u70b9\uff0c\u4f46 ServiceMonitor \u66f4\u9002\u5408\u5927\u591a\u6570\u7528\u4f8b\u3002"))}d.isMDXComponent=!0}}]);