"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup"},i=void 0,s={unversionedId:"pages-for-subheaders/installation-requirements",id:"version-2.5/pages-for-subheaders/installation-requirements",title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/installation-requirements.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/installation-requirements",permalink:"/zh/v2.5/pages-for-subheaders/installation-requirements",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/installation-requirements.md",tags:[],version:"2.5",lastUpdatedAt:1677279620,formattedLastUpdatedAt:"2023\u5e742\u670824\u65e5",frontMatter:{title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup"},sidebar:"tutorialSidebar",previous:{title:"Installing/Upgrading Rancher",permalink:"/zh/v2.5/pages-for-subheaders/installation-and-upgrade"},next:{title:"Installing Docker",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/installation-requirements/install-docker"}},o={},u=[{value:"Kubernetes Compatibility with Rancher",id:"kubernetes-compatibility-with-rancher",level:2},{value:"Operating Systems and Container Runtime Requirements",id:"operating-systems-and-container-runtime-requirements",level:2},{value:"RKE Specific Requirements",id:"rke-specific-requirements",level:3},{value:"K3s Specific Requirements",id:"k3s-specific-requirements",level:3},{value:"RancherD Specific Requirements",id:"rancherd-specific-requirements",level:3},{value:"RKE2 Specific Requirements",id:"rke2-specific-requirements",level:3},{value:"Installing Docker",id:"installing-docker",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"CPU and Memory",id:"cpu-and-memory",level:2},{value:"RKE and Hosted Kubernetes",id:"rke-and-hosted-kubernetes",level:3},{value:"K3s Kubernetes",id:"k3s-kubernetes",level:3},{value:"RancherD",id:"rancherd",level:3},{value:"RKE2 Kubernetes",id:"rke2-kubernetes",level:3},{value:"Docker",id:"docker",level:3},{value:"Ingress",id:"ingress",level:2},{value:"Ingress for RKE2",id:"ingress-for-rke2",level:3},{value:"Ingress for EKS",id:"ingress-for-eks",level:3},{value:"Disks",id:"disks",level:2},{value:"Networking Requirements",id:"networking-requirements",level:2},{value:"Node IP Addresses",id:"node-ip-addresses",level:3},{value:"Port Requirements",id:"port-requirements",level:3},{value:"RancherD on SELinux Enforcing CentOS 8 or RHEL 8 Nodes",id:"rancherd-on-selinux-enforcing-centos-8-or-rhel-8-nodes",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page describes the software, hardware, and networking requirements for the nodes where the Rancher server will be installed. The Rancher server can be installed on a single node or a high-availability Kubernetes cluster."),(0,a.kt)("admonition",{title:"Important:",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you install Rancher on a Kubernetes cluster, requirements are different from the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"node requirements for downstream user clusters,")," which will run your apps and services.")),(0,a.kt)("p",null,"The Rancher UI works best in Firefox or Chromium based browsers (Chrome, Edge, Opera, Brave, etc)."),(0,a.kt)("p",null,"See our page on ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/best-practices/rancher-server/tips-for-running-rancher"},"best practices")," for a list of recommendations for running a Rancher server in production."),(0,a.kt)("h2",{id:"kubernetes-compatibility-with-rancher"},"Kubernetes Compatibility with Rancher"),(0,a.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. Consult the ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-5-16/"},"Rancher support matrix")," to ensure that your intended version of Kubernetes is supported."),(0,a.kt)("h2",{id:"operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,a.kt)("p",null,"All supported operating systems are 64-bit x86. Rancher should work with any modern Linux distribution."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-5-16/"},"Rancher support matrix")," lists which OS and Docker versions were tested for each Rancher version."),(0,a.kt)("p",null,"Docker is required for nodes that will run RKE clusters. It is not required for RKE2 or K3s clusters."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ntp")," (Network Time Protocol) package should be installed. This prevents errors with certificate validation that can occur when the time is not synchronized between the client and server."),(0,a.kt)("p",null,"Some distributions of Linux may have default firewall rules that block communication with Helm. We recommend disabling firewalld. For Kubernetes 1.19 and 1.20, firewalld must be turned off."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you don't feel comfortable doing so you might check suggestions in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/28840"},"respective issue"),". Some users were successful ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/28840#issuecomment-787404822"},"creating a separate firewalld zone with a policy of ACCEPT for the Pod CIDR"),".")),(0,a.kt)("p",null,"If you plan to run Rancher on ARM64, see ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},"Running on ARM64 (Experimental).")),(0,a.kt)("h3",{id:"rke-specific-requirements"},"RKE Specific Requirements"),(0,a.kt)("p",null,"For the container runtime, RKE should work with any modern Docker version."),(0,a.kt)("p",null,"Note that the following sysctl setting must be applied:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"net.bridge.bridge-nf-call-iptables=1\n")),(0,a.kt)("h3",{id:"k3s-specific-requirements"},"K3s Specific Requirements"),(0,a.kt)("p",null,"For the container runtime, K3s should work with any modern version of Docker or containerd."),(0,a.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-5-16/"},"Rancher support matrix"),". To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script."),(0,a.kt)("p",null,"If you are installing Rancher on a K3s cluster with ",(0,a.kt)("strong",{parentName:"p"},"Raspbian Buster"),", follow ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#enabling-legacy-iptables-on-raspbian-buster"},"these steps")," to switch to legacy iptables."),(0,a.kt)("p",null,"If you are installing Rancher on a K3s cluster with Alpine Linux, follow ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#additional-preparation-for-alpine-linux-setup"},"these steps")," for additional setup."),(0,a.kt)("h3",{id:"rancherd-specific-requirements"},"RancherD Specific Requirements"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.")),(0,a.kt)("p",null,"At this time, only Linux OSes that leverage systemd are supported."),(0,a.kt)("p",null,"To install RancherD on SELinux Enforcing CentOS 8 or RHEL 8 nodes, some ",(0,a.kt)("a",{parentName:"p",href:"#rancherd-on-selinux-enforcing-centos-8-or-rhel-8-nodes"},"additional steps")," are required."),(0,a.kt)("p",null,"Docker is not required for RancherD installs."),(0,a.kt)("h3",{id:"rke2-specific-requirements"},"RKE2 Specific Requirements"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The RKE2 install is available as of v2.5.6.")),(0,a.kt)("p",null,"For details on which OS versions were tested with RKE2, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-5-16/"},"Rancher support matrix"),"."),(0,a.kt)("p",null,"Docker is not required for RKE2 installs."),(0,a.kt)("p",null,"The Ingress should be deployed as DaemonSet to ensure your load balancer can successfully route traffic to all nodes. Currently, RKE2 deploys nginx-ingress as a deployment by default, so you will need to deploy it as a DaemonSet by following ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher#5-configure-nginx-to-be-a-daemonset"},"these steps.")),(0,a.kt)("h3",{id:"installing-docker"},"Installing Docker"),(0,a.kt)("p",null,"Docker is required for Helm chart installs, and it can be installed by following the steps in the official ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation.")," Rancher also provides ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/installation-requirements/install-docker"},"scripts")," to install Docker with one command."),(0,a.kt)("p",null,"Docker is not required for RancherD installs."),(0,a.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,a.kt)("p",null,"The following sections describe the CPU, memory, and disk requirements for the nodes where the Rancher server is installed."),(0,a.kt)("h2",{id:"cpu-and-memory"},"CPU and Memory"),(0,a.kt)("p",null,"Hardware requirements scale based on the size of your Rancher deployment. Provision each individual node according to the requirements. The requirements are different depending on if you are installing Rancher in a single container with Docker, or if you are installing Rancher on a Kubernetes cluster."),(0,a.kt)("h3",{id:"rke-and-hosted-kubernetes"},"RKE and Hosted Kubernetes"),(0,a.kt)("p",null,"These CPU and memory requirements apply to each host in the Kubernetes cluster where the Rancher server is installed."),(0,a.kt)("p",null,"These requirements apply to RKE Kubernetes clusters, as well as to hosted Kubernetes clusters such as EKS."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,a.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,a.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,a.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,a.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Small"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 150"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 1500"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 300"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 3000"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Large"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 5000"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 10,000"),(0,a.kt)("td",{parentName:"tr",align:null},"16"),(0,a.kt)("td",{parentName:"tr",align:null},"64 GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 2000"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 20,000"),(0,a.kt)("td",{parentName:"tr",align:null},"32"),(0,a.kt)("td",{parentName:"tr",align:null},"128 GB")))),(0,a.kt)("p",null,"Every use case and environment is different. Please ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"contact Rancher")," to review yours."),(0,a.kt)("h3",{id:"k3s-kubernetes"},"K3s Kubernetes"),(0,a.kt)("p",null,"These CPU and memory requirements apply to each host in a ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"K3s Kubernetes cluster where the Rancher server is installed.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,a.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,a.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,a.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,a.kt)("th",{parentName:"tr",align:null},"RAM"),(0,a.kt)("th",{parentName:"tr",align:null},"Database Size"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Small"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 150"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 1500"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,a.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 300"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 3000"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,a.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Large"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 5000"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"32 GB"),(0,a.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 10,000"),(0,a.kt)("td",{parentName:"tr",align:null},"16"),(0,a.kt)("td",{parentName:"tr",align:null},"64 GB"),(0,a.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 2000"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 20,000"),(0,a.kt)("td",{parentName:"tr",align:null},"32"),(0,a.kt)("td",{parentName:"tr",align:null},"128 GB"),(0,a.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")))),(0,a.kt)("p",null,"Every use case and environment is different. Please ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"contact Rancher")," to review yours."),(0,a.kt)("h3",{id:"rancherd"},"RancherD"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.")),(0,a.kt)("p",null,"These CPU and memory requirements apply to each instance with RancherD installed. Minimum recommendations are outlined here."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,a.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,a.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,a.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,a.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Small"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"5 GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"9 GB")))),(0,a.kt)("h3",{id:"rke2-kubernetes"},"RKE2 Kubernetes"),(0,a.kt)("p",null,"These CPU and memory requirements apply to each instance with RKE2 installed. Minimum recommendations are outlined here."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,a.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,a.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,a.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,a.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Small"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"5 GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"9 GB")))),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("p",null,"These CPU and memory requirements apply to a host with a ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"single-node")," installation of Rancher."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,a.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,a.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,a.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,a.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Small"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"4 GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Medium"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"8 GB")))),(0,a.kt)("h2",{id:"ingress"},"Ingress"),(0,a.kt)("p",null,"Each node in the Kubernetes cluster that Rancher is installed on should run an Ingress."),(0,a.kt)("p",null,"The Ingress should be deployed as DaemonSet to ensure your load balancer can successfully route traffic to all nodes."),(0,a.kt)("p",null,"For RKE, K3s and RancherD installations, you don't have to install the Ingress manually because it is installed by default."),(0,a.kt)("p",null,"For hosted Kubernetes clusters (EKS, GKE, AKS) and RKE2  installations, you will need to set up the ingress."),(0,a.kt)("h3",{id:"ingress-for-rke2"},"Ingress for RKE2"),(0,a.kt)("p",null,"Currently, RKE2 deploys nginx-ingress as a deployment by default, so you will need to deploy it as a DaemonSet by following ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher#5-configure-nginx-to-be-a-daemonset"},"these steps.")),(0,a.kt)("h3",{id:"ingress-for-eks"},"Ingress for EKS"),(0,a.kt)("p",null,"For an example of how to deploy an nginx-ingress-controller with a LoadBalancer service, refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks#5-install-an-ingress"},"this section.")),(0,a.kt)("h2",{id:"disks"},"Disks"),(0,a.kt)("p",null,"Rancher performance depends on etcd in the cluster performance. To ensure optimal speed, we recommend always using SSD disks to back your Rancher management Kubernetes cluster. On cloud providers, you will also want to use the minimum size that allows the maximum IOPS. In larger clusters, consider using dedicated storage devices for etcd data and wal directories."),(0,a.kt)("h2",{id:"networking-requirements"},"Networking Requirements"),(0,a.kt)("p",null,"This section describes the networking requirements for the node(s) where the Rancher server is installed."),(0,a.kt)("h3",{id:"node-ip-addresses"},"Node IP Addresses"),(0,a.kt)("p",null,"Each node used should have a static IP configured, regardless of whether you are installing Rancher on a single node or on an HA cluster. In case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated."),(0,a.kt)("h3",{id:"port-requirements"},"Port Requirements"),(0,a.kt)("p",null,"To operate properly, Rancher requires a number of ports to be open on Rancher nodes and on downstream Kubernetes cluster nodes. ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/installation-requirements/port-requirements"},"Port Requirements")," lists all the necessary ports for Rancher and Downstream Clusters for the different cluster types."),(0,a.kt)("h2",{id:"rancherd-on-selinux-enforcing-centos-8-or-rhel-8-nodes"},"RancherD on SELinux Enforcing CentOS 8 or RHEL 8 Nodes"),(0,a.kt)("p",null,"Before installing Rancher on SELinux Enforcing CentOS 8 nodes or RHEL 8 nodes, you must install ",(0,a.kt)("inlineCode",{parentName:"p"},"container-selinux")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"iptables"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo yum install iptables\nsudo yum install container-selinux\n")))}d.isMDXComponent=!0}}]);