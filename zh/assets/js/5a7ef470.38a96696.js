"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Creating a Huawei CCE Cluster"},l=void 0,o={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei",title:"Creating a Huawei CCE Cluster",description:"You can use Rancher to create a cluster hosted in Huawei Cloud Container Engine (CCE). Rancher has already implemented and packaged the cluster driver for CCE, but by default, this cluster driver is inactive. In order to launch CCE clusters, you will need to enable the CCE cluster driver. After enabling the cluster driver, you can start provisioning CCE clusters.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Creating a Huawei CCE Cluster"},sidebar:"tutorialSidebar",previous:{title:"Creating a Tencent TKE Cluster",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent"},next:{title:"Launching Kubernetes with Rancher",permalink:"/zh/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"}},s={},u=[{value:"Prerequisites in Huawei",id:"prerequisites-in-huawei",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Create the CCE Cluster",id:"create-the-cce-cluster",level:2},{value:"Huawei CCE Configuration",id:"huawei-cce-configuration",level:2},{value:"Node Configuration",id:"node-configuration",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use Rancher to create a cluster hosted in Huawei Cloud Container Engine (CCE). Rancher has already implemented and packaged the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"},"cluster driver")," for CCE, but by default, this cluster driver is ",(0,a.kt)("inlineCode",{parentName:"p"},"inactive"),". In order to launch CCE clusters, you will need to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers#activating-deactivating-cluster-drivers"},"enable the CCE cluster driver"),". After enabling the cluster driver, you can start provisioning CCE clusters."),(0,a.kt)("h2",{id:"prerequisites-in-huawei"},"Prerequisites in Huawei"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to CCE will incur charges.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find your project ID in Huawei CCE portal. See the CCE documentation on how to ",(0,a.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/en-us/usermanual-iam/en-us_topic_0066738518.html"},"manage your projects"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create an ",(0,a.kt)("a",{parentName:"p",href:"https://support.huaweicloud.com/en-us/usermanual-iam/en-us_topic_0079477318.html"},"Access Key ID and Secret Access Key"),"."))),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Huawei CCE service doesn't support the ability to create clusters with public access through their API. You are required to run Rancher in the same VPC as the CCE clusters that you want to provision."),(0,a.kt)("h2",{id:"create-the-cce-cluster"},"Create the CCE Cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"Huawei CCE"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Project Id"),", Access Key ID as ",(0,a.kt)("strong",{parentName:"li"},"Access Key")," and Secret Access Key ",(0,a.kt)("strong",{parentName:"li"},"Secret Key"),". Then Click ",(0,a.kt)("strong",{parentName:"li"},"Next: Configure cluster"),". Fill in the cluster configuration. For help filling out the form, refer to ",(0,a.kt)("a",{parentName:"li",href:"#huawei-cce-configuration"},"Huawei CCE Configuration.")),(0,a.kt)("li",{parentName:"ol"},"Fill the following node configuration of the cluster. For help filling out the form, refer to ",(0,a.kt)("a",{parentName:"li",href:"#node-configuration"},"Node Configuration.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create")," to create the CCE cluster.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,a.kt)("h2",{id:"huawei-cce-configuration"},"Huawei CCE Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Settings"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cluster Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Which type or node you want to include into the cluster, ",(0,a.kt)("inlineCode",{parentName:"td"},"VirtualMachine")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"BareMetal"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description"),(0,a.kt)("td",{parentName:"tr",align:null},"The description of the cluster.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Master Version"),(0,a.kt)("td",{parentName:"tr",align:null},"The Kubernetes version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Management Scale Count"),(0,a.kt)("td",{parentName:"tr",align:null},"The max node count of the cluster. The options are 50, 200 and 1000. The larger of the scale count, the more the cost.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"High Availability"),(0,a.kt)("td",{parentName:"tr",align:null},"Enable master node high availability. The cluster with high availability enabled will have more cost.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Container Network Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"The network mode used in the cluster. ",(0,a.kt)("inlineCode",{parentName:"td"},"overlay_l2")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"vpc-router")," is supported in ",(0,a.kt)("inlineCode",{parentName:"td"},"VirtualMachine")," type and ",(0,a.kt)("inlineCode",{parentName:"td"},"underlay_ipvlan")," is supported in ",(0,a.kt)("inlineCode",{parentName:"td"},"BareMetal")," type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Container Network CIDR"),(0,a.kt)("td",{parentName:"tr",align:null},"Network CIDR for the cluster.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VPC Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The VPC name which the cluster is going to deploy into. Rancher will create one if it is blank.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Subnet Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The Subnet name which the cluster is going to deploy into. Rancher will create one if it is blank.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"External Server"),(0,a.kt)("td",{parentName:"tr",align:null},"This option is reserved for the future we can enable CCE cluster public access via API. For now, it is always disabled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cluster Label"),(0,a.kt)("td",{parentName:"tr",align:null},"The labels for the cluster.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Highway Subnet"),(0,a.kt)("td",{parentName:"tr",align:null},"This option is only supported in ",(0,a.kt)("inlineCode",{parentName:"td"},"BareMetal")," type. It requires you to select a VPC with high network speed for the bare metal machines.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you are editing the cluster in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml")," instead of the Rancher UI, note that cluster configuration directives must be nested under the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive in ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". For more information, refer to the section on ",(0,a.kt)("a",{parentName:"p",href:"cluster-provisioning/rke-clusters/options/#config-file-structure-in-rancher-v2-3-0"},"the config file structure.")),(0,a.kt)("h2",{id:"node-configuration"},"Node Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Settings"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Zone"),(0,a.kt)("td",{parentName:"tr",align:null},"The available zone at where the node(s) of the cluster is deployed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Billing Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"The bill mode for the cluster node(s). In ",(0,a.kt)("inlineCode",{parentName:"td"},"VirtualMachine")," type, only ",(0,a.kt)("inlineCode",{parentName:"td"},"Pay-per-use")," is supported. in ",(0,a.kt)("inlineCode",{parentName:"td"},"BareMetal"),", you can choose ",(0,a.kt)("inlineCode",{parentName:"td"},"Pay-per-use")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"Yearly/Monthly"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Validity Period"),(0,a.kt)("td",{parentName:"tr",align:null},"This option only shows in ",(0,a.kt)("inlineCode",{parentName:"td"},"Yearly/Monthly")," bill mode. It means how long you want to pay for the cluster node(s).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Auto Renew"),(0,a.kt)("td",{parentName:"tr",align:null},"This option only shows in ",(0,a.kt)("inlineCode",{parentName:"td"},"Yearly/Monthly")," bill mode. It means that the cluster node(s) will renew the ",(0,a.kt)("inlineCode",{parentName:"td"},"Yearly/Monthly")," payment automatically or not.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Data Volume Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Data volume type for the cluster node(s). ",(0,a.kt)("inlineCode",{parentName:"td"},"SATA"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"SSD")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"SAS")," for this option.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Data Volume Size"),(0,a.kt)("td",{parentName:"tr",align:null},"Data volume size for the cluster node(s)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Root Volume Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Root volume type for the cluster node(s). ",(0,a.kt)("inlineCode",{parentName:"td"},"SATA"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"SSD")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"SAS")," for this option.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Root Volume Size"),(0,a.kt)("td",{parentName:"tr",align:null},"Root volume size for the cluster node(s)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node Flavor"),(0,a.kt)("td",{parentName:"tr",align:null},"The node flavor of the cluster node(s). The flavor list in Rancher UI is fetched from Huawei Cloud. It includes all the supported node flavors.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node Count"),(0,a.kt)("td",{parentName:"tr",align:null},"The node count of the cluster")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node Operating System"),(0,a.kt)("td",{parentName:"tr",align:null},"The operating system for the cluster node(s). Only ",(0,a.kt)("inlineCode",{parentName:"td"},"EulerOS 2.2")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"CentOS 7.4")," are supported right now.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSH Key Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The ssh key for the cluster node(s)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EIP"),(0,a.kt)("td",{parentName:"tr",align:null},"The public IP options for the cluster node(s). ",(0,a.kt)("inlineCode",{parentName:"td"},"Disabled")," means that the cluster node(s) are not going to bind a public IP. ",(0,a.kt)("inlineCode",{parentName:"td"},"Create EIP")," means that the cluster node(s) will bind one or many newly created Eips after provisioned and more options will be shown in the UI to set the to-create EIP parameters. And ",(0,a.kt)("inlineCode",{parentName:"td"},"Select Existed EIP")," means that the node(s) will bind to the EIPs you select.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EIP Count"),(0,a.kt)("td",{parentName:"tr",align:null},"This option will only be shown when ",(0,a.kt)("inlineCode",{parentName:"td"},"Create EIP")," is selected. It means how many EIPs you want to create for the node(s).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EIP Type"),(0,a.kt)("td",{parentName:"tr",align:null},"This option will only be shown when ",(0,a.kt)("inlineCode",{parentName:"td"},"Create EIP")," is selected. The options are ",(0,a.kt)("inlineCode",{parentName:"td"},"5_bgp")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"5_sbgp"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EIP Share Type"),(0,a.kt)("td",{parentName:"tr",align:null},"This option will only be shown when ",(0,a.kt)("inlineCode",{parentName:"td"},"Create EIP")," is selected. The only option is ",(0,a.kt)("inlineCode",{parentName:"td"},"PER"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EIP Charge Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"This option will only be shown when ",(0,a.kt)("inlineCode",{parentName:"td"},"Create EIP")," is selected. The options are pay by ",(0,a.kt)("inlineCode",{parentName:"td"},"BandWidth")," and pay by ",(0,a.kt)("inlineCode",{parentName:"td"},"Traffic"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EIP Bandwidth Size"),(0,a.kt)("td",{parentName:"tr",align:null},"This option will only be shown when ",(0,a.kt)("inlineCode",{parentName:"td"},"Create EIP")," is selected. The BandWidth of the EIPs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authentication Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"It means enabling ",(0,a.kt)("inlineCode",{parentName:"td"},"RBAC")," or also enabling ",(0,a.kt)("inlineCode",{parentName:"td"},"Authenticating Proxy"),". If you select ",(0,a.kt)("inlineCode",{parentName:"td"},"Authenticating Proxy"),", the certificate which is used for authenticating proxy will be also required.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Node Label"),(0,a.kt)("td",{parentName:"tr",align:null},"The labels for the cluster node(s). Invalid labels can prevent upgrades or can prevent Rancher from starting. For details on label syntax requirements, see the ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"Kubernetes documentation."))))))}p.isMDXComponent=!0}}]);