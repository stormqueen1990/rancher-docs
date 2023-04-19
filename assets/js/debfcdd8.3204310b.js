"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={title:"Kubernetes Concepts"},a=void 0,i={unversionedId:"reference-guides/kubernetes-concepts",id:"version-2.0-2.4/reference-guides/kubernetes-concepts",title:"Kubernetes Concepts",description:"This page explains concepts related to Kubernetes that are important for understanding how Rancher works. The descriptions below provide a simplified interview of Kubernetes components. For more details, refer to the official documentation on Kubernetes components.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/kubernetes-concepts.md",sourceDirName:"reference-guides",slug:"/reference-guides/kubernetes-concepts",permalink:"/v2.0-v2.4/reference-guides/kubernetes-concepts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/kubernetes-concepts.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Kubernetes Concepts"},sidebar:"tutorialSidebar",previous:{title:"OpenLDAP Configuration Reference",permalink:"/v2.0-v2.4/reference-guides/configure-openldap/openldap-config-reference"},next:{title:"User Settings",permalink:"/v2.0-v2.4/pages-for-subheaders/user-settings"}},l={},c=[{value:"About Docker",id:"about-docker",level:2},{value:"About Kubernetes",id:"about-kubernetes",level:2},{value:"What is a Kubernetes Cluster?",id:"what-is-a-kubernetes-cluster",level:2},{value:"Roles for Nodes in Kubernetes Clusters",id:"roles-for-nodes-in-kubernetes-clusters",level:2},{value:"etcd Nodes",id:"etcd-nodes",level:3},{value:"Controlplane Nodes",id:"controlplane-nodes",level:3},{value:"Worker Nodes",id:"worker-nodes",level:3},{value:"About Helm",id:"about-helm",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page explains concepts related to Kubernetes that are important for understanding how Rancher works. The descriptions below provide a simplified interview of Kubernetes components. For more details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/"},"official documentation on Kubernetes components.")),(0,o.kt)("h2",{id:"about-docker"},"About Docker"),(0,o.kt)("p",null,"Docker is the container packaging and runtime standard. Developers build container images from Dockerfiles and distribute container images from Docker registries. ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com"},"Docker Hub")," is the most popular public registry. Many organizations also set up private Docker registries. Docker is primarily used to manage containers on individual nodes."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Although Rancher 1.6 supported Docker Swarm clustering technology, it is no longer supported in Rancher 2.x due to the success of Kubernetes.")),(0,o.kt)("h2",{id:"about-kubernetes"},"About Kubernetes"),(0,o.kt)("p",null,"Kubernetes is the container cluster management standard. YAML files specify containers and other resources that form an application. Kubernetes performs functions such as scheduling, scaling, service discovery, health check, secret management, and configuration management."),(0,o.kt)("h2",{id:"what-is-a-kubernetes-cluster"},"What is a Kubernetes Cluster?"),(0,o.kt)("p",null,"A cluster is a group of computers that work together as a single system."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"Kubernetes Cluster")," is a cluster that uses the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes container-orchestration system")," to deploy, maintain, and scale Docker containers, allowing your organization to automate application operations."),(0,o.kt)("h2",{id:"roles-for-nodes-in-kubernetes-clusters"},"Roles for Nodes in Kubernetes Clusters"),(0,o.kt)("p",null,"Each computing resource in a Kubernetes cluster is called a ",(0,o.kt)("em",{parentName:"p"},"node"),". Nodes can be either bare-metal servers or virtual machines. Kubernetes classifies nodes into three types: ",(0,o.kt)("em",{parentName:"p"},"etcd")," nodes, ",(0,o.kt)("em",{parentName:"p"},"control plane")," nodes, and ",(0,o.kt)("em",{parentName:"p"},"worker")," nodes."),(0,o.kt)("p",null,"A Kubernetes cluster consists of at least one etcd, controlplane, and worker node."),(0,o.kt)("h3",{id:"etcd-nodes"},"etcd Nodes"),(0,o.kt)("p",null,"Rancher uses etcd as a data store in both single node and high-availability installations. In Kubernetes, etcd is also a role for nodes that store the cluster state."),(0,o.kt)("p",null,"The state of a Kubernetes cluster is maintained in ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#etcd"},"etcd."),"  The etcd nodes run the etcd database."),(0,o.kt)("p",null,"The etcd database component is a distributed key-value store used as Kubernetes storage for all cluster data, such as cluster coordination and state management. It is recommended to run etcd on multiple nodes so that there's always a backup available for failover."),(0,o.kt)("p",null,"Although you can run etcd on just one node, etcd requires a majority of nodes, a quorum, to agree on updates to the cluster state. The cluster should always contain enough healthy etcd nodes to form a quorum. For a cluster with n members, a quorum is (n/2)+1. For any odd-sized cluster, adding one node will always increase the number of nodes necessary for a quorum."),(0,o.kt)("p",null,"Three etcd nodes is generally sufficient for smaller clusters and five etcd nodes for large clusters."),(0,o.kt)("h3",{id:"controlplane-nodes"},"Controlplane Nodes"),(0,o.kt)("p",null,"Controlplane nodes run the Kubernetes API server, scheduler, and controller manager. These nodes take care of routine tasks to ensure that your cluster maintains your configuration. Because all cluster data is stored on your etcd nodes, control plane nodes are stateless. You can run control plane on a single node, although three or more nodes are recommended for redundancy. Additionally, a single node can share the control plane and etcd roles."),(0,o.kt)("h3",{id:"worker-nodes"},"Worker Nodes"),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/"},"worker node")," runs the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubelets:")," An agent that monitors the state of the node, ensuring your containers are healthy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Workloads:")," The containers and pods that hold your apps, as well as other types of deployments.")),(0,o.kt)("p",null,"Worker nodes also run storage and networking drivers, and ingress controllers when required. You create as many worker nodes as necessary to run your  ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/workloads-and-pods"},"workloads"),"."),(0,o.kt)("h2",{id:"about-helm"},"About Helm"),(0,o.kt)("p",null,"For high-availability installations of Rancher, Helm is the tool used to install Rancher on a Kubernetes cluster."),(0,o.kt)("p",null,"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh"},"https://helm.sh/"),"."),(0,o.kt)("p",null,"For more information on service accounts and cluster role binding, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes documentation.")))}d.isMDXComponent=!0}}]);