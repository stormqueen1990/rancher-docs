"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43044],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(h,s(s({ref:n},p),{},{components:t})):r.createElement(h,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21202:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={title:"Configuration"},s=void 0,o={unversionedId:"integrations-in-rancher/cis-scans/configuration-reference",id:"version-2.6/integrations-in-rancher/cis-scans/configuration-reference",title:"Configuration",description:"This configuration reference is intended to help you manage the custom resources created by the rancher-cis-benchmark application. These resources are used for performing CIS scans on a cluster, skipping tests, setting the test profile that will be used during a scan, and other customization.",source:"@site/versioned_docs/version-2.6/integrations-in-rancher/cis-scans/configuration-reference.md",sourceDirName:"integrations-in-rancher/cis-scans",slug:"/integrations-in-rancher/cis-scans/configuration-reference",permalink:"/v2.6/integrations-in-rancher/cis-scans/configuration-reference",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/cis-scans/configuration-reference.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"CIS Scans",permalink:"/v2.6/pages-for-subheaders/cis-scans"},next:{title:"Roles-based Access Control",permalink:"/v2.6/integrations-in-rancher/cis-scans/rbac-for-cis-scans"}},c={},l=[{value:"Scans",id:"scans",level:3},{value:"Profiles",id:"profiles",level:3},{value:"Benchmark Versions",id:"benchmark-versions",level:3}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This configuration reference is intended to help you manage the custom resources created by the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," application. These resources are used for performing CIS scans on a cluster, skipping tests, setting the test profile that will be used during a scan, and other customization."),(0,a.kt)("p",null,"To configure the custom resources, go to the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Dashboard")," To configure the CIS scans,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to configure CIS scans and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},"CIS Benchmark"),".")),(0,a.kt)("h3",{id:"scans"},"Scans"),(0,a.kt)("p",null,"A scan is created to trigger a CIS scan on the cluster based on the defined profile. A report is created after the scan is completed."),(0,a.kt)("p",null,"When configuring a scan, you need to define the name of the scan profile that will be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"scanProfileName")," directive."),(0,a.kt)("p",null,"An example ClusterScan custom resource is below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cis.cattle.io/v1\nkind: ClusterScan\nmetadata:\n  name: rke-cis\nspec:\n  scanProfileName: rke-profile-hardened\n")),(0,a.kt)("h3",{id:"profiles"},"Profiles"),(0,a.kt)("p",null,"A profile contains the configuration for the CIS scan, which includes the benchmark version to use and any specific tests to skip in that benchmark."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"By default, a few ClusterScanProfiles are installed as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," chart. If a user edits these default benchmarks or profiles, the next chart update will reset them back. So it is advisable for users to not edit the default  ClusterScanProfiles.")),(0,a.kt)("p",null,"Users can clone the ClusterScanProfiles to create custom profiles."),(0,a.kt)("p",null,"Skipped tests are listed under the ",(0,a.kt)("inlineCode",{parentName:"p"},"skipTests")," directive."),(0,a.kt)("p",null,"When you create a new profile, you will also need to give it a name."),(0,a.kt)("p",null,"An example ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterScanProfile")," is below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: cis.cattle.io/v1\nkind: ClusterScanProfile\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: clusterscan-operator\n    meta.helm.sh/release-namespace: cis-operator-system\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: "<example-profile>"\nspec:\n  benchmarkVersion: cis-1.5\n  skipTests:\n    - "1.1.20"\n    - "1.1.21"\n')),(0,a.kt)("h3",{id:"benchmark-versions"},"Benchmark Versions"),(0,a.kt)("p",null,"A benchmark version is the name of benchmark to run using ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-bench"),", as well as the valid configuration parameters for that benchmark."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterScanBenchmark")," defines the CIS ",(0,a.kt)("inlineCode",{parentName:"p"},"BenchmarkVersion")," name and test configurations. The ",(0,a.kt)("inlineCode",{parentName:"p"},"BenchmarkVersion")," name is a parameter provided to the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-bench")," tool."),(0,a.kt)("p",null,"By default, a few ",(0,a.kt)("inlineCode",{parentName:"p"},"BenchmarkVersion")," names and test configurations are packaged as part of the CIS scan application. When this feature is enabled, these default BenchmarkVersions will be automatically installed and available for users to create a ClusterScanProfile."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If the default BenchmarkVersions are edited, the next chart update will reset them back. Therefore we don't recommend editing the default ClusterScanBenchmarks.")),(0,a.kt)("p",null,"A ClusterScanBenchmark consists of the fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ClusterProvider"),": This is the cluster provider name for which this benchmark is applicable. For example: RKE, EKS, GKE, etc. Leave it empty if this benchmark can be run on any cluster type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MinKubernetesVersion"),": Specifies the cluster's minimum kubernetes version necessary to run this benchmark. Leave it empty if there is no dependency on a particular Kubernetes version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MaxKubernetesVersion"),": Specifies the cluster's maximum Kubernetes version necessary to run this benchmark. Leave it empty if there is no dependency on a particular k8s version.")),(0,a.kt)("p",null,"An example ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterScanBenchmark")," is below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: cis.cattle.io/v1\nkind: ClusterScanBenchmark\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: clusterscan-operator\n    meta.helm.sh/release-namespace: cis-operator-system\n  creationTimestamp: "2020-08-28T18:18:07Z"\n  generation: 1\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: cis-1.5\n  resourceVersion: "203878"\n  selfLink: /apis/cis.cattle.io/v1/clusterscanbenchmarks/cis-1.5\n  uid: 309e543e-9102-4091-be91-08d7af7fb7a7\nspec:\n  clusterProvider: ""\n  minKubernetesVersion: 1.15.0\n')))}u.isMDXComponent=!0}}]);