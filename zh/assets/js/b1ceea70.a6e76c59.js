"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73134],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},18642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Launching Catalog Apps"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/helm-charts-in-rancher/launching-apps",id:"version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/launching-apps",title:"Launching Catalog Apps",description:"Within a project, when you want to deploy applications from catalogs, the applications available in your project will be based on the scope of the catalogs.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/launching-apps.md",sourceDirName:"how-to-guides/new-user-guides/helm-charts-in-rancher",slug:"/how-to-guides/new-user-guides/helm-charts-in-rancher/launching-apps",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/launching-apps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/launching-apps.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"Launching Catalog Apps"},sidebar:"tutorialSidebar",previous:{title:"Multi-Cluster Apps",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/multi-cluster-apps"},next:{title:"Tutorial: Example Custom Chart Creation",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/tutorial"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Launching a Catalog App",id:"launching-a-catalog-app",level:2},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Using a questions.yml file",id:"using-a-questionsyml-file",level:3},{value:"Key Value Pairs for Native Helm Charts",id:"key-value-pairs-for-native-helm-charts",level:3},{value:"Key Value Pairs",id:"key-value-pairs",level:3},{value:"YAML files",id:"yaml-files",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("Tabs"),h=u("TabItem"),m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Within a project, when you want to deploy applications from catalogs, the applications available in your project will be based on the ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher#catalog-scopes"},"scope of the catalogs"),"."),(0,r.kt)("p",null,"If your application is using ingresses, you can program the ingress hostname to an external DNS by setting up a ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns"},"Global DNS entry"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#launching-a-catalog-app"},"Launching a catalog app")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuration-options"},"Configuration options"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"When Rancher deploys a catalog app, it launches an ephemeral instance of a Helm service account that has the permissions of the user deploying the catalog app. Therefore, a user cannot gain more access to the cluster through Helm or a catalog application than they otherwise would have."),(0,r.kt)("p",null,"To launch an app from a catalog in Rancher, you must have at least one of the following permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"project-member role")," in the target cluster, which gives you the ability to create, read, update, and delete the workloads"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner role")," for the cluster that include the target project")),(0,r.kt)("p",null,"Before launching an app, you'll need to either ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/built-in"},"enable a built-in global catalog")," or ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs"},"add your own custom catalog.")),(0,r.kt)("h2",{id:"launching-a-catalog-app"},"Launching a Catalog App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view, open the project that you want to deploy an app to.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the main navigation bar, choose ",(0,r.kt)("strong",{parentName:"p"},"Apps"),". In versions before v2.2.0, choose ",(0,r.kt)("strong",{parentName:"p"},"Catalog Apps")," on the main navigation bar. Click ",(0,r.kt)("strong",{parentName:"p"},"Launch"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the app that you want to launch, and then click ",(0,r.kt)("strong",{parentName:"p"},"View Now"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Configuration Options")," enter a ",(0,r.kt)("strong",{parentName:"p"},"Name"),". By default, this name is also used to create a Kubernetes namespace for the application."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you would like to change the ",(0,r.kt)("strong",{parentName:"li"},"Namespace"),", click ",(0,r.kt)("strong",{parentName:"li"},"Customize")," and enter a new name."),(0,r.kt)("li",{parentName:"ul"},"If you want to use a different namespace that already exists, click ",(0,r.kt)("strong",{parentName:"li"},"Customize"),", and then click ",(0,r.kt)("strong",{parentName:"li"},"Use an existing namespace"),". Choose a namespace from the list."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select a ",(0,r.kt)("strong",{parentName:"p"},"Template Version"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete the rest of the ",(0,r.kt)("strong",{parentName:"p"},"Configuration Options"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For native Helm charts (i.e., charts from the ",(0,r.kt)("strong",{parentName:"li"},"Helm Stable")," or ",(0,r.kt)("strong",{parentName:"li"},"Helm Incubator")," catalogs), answers are provided as key value pairs in the ",(0,r.kt)("strong",{parentName:"li"},"Answers")," section."),(0,r.kt)("li",{parentName:"ul"},"Keys and values are available within ",(0,r.kt)("strong",{parentName:"li"},"Detailed Descriptions"),"."),(0,r.kt)("li",{parentName:"ul"},"When entering answers, you must format them using the syntax rules found in ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/using_helm/#the-format-and-limitations-of---set"},"Using Helm: The format and limitations of --set"),", as Rancher passes them as ",(0,r.kt)("inlineCode",{parentName:"li"},"--set")," flags to Helm. For example, when entering an answer that includes two values separated by a comma (i.e., ",(0,r.kt)("inlineCode",{parentName:"li"},"abc, bcd"),"), wrap the values with double quotes (i.e., ",(0,r.kt)("inlineCode",{parentName:"li"},'"abc, bcd"'),")."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the files in ",(0,r.kt)("strong",{parentName:"p"},"Preview"),". When you're satisfied, click ",(0,r.kt)("strong",{parentName:"p"},"Launch"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result"),": Your application is deployed to your chosen namespace. You can view the application status from the project's ",(0,r.kt)("strong",{parentName:"p"},"Workloads")," view or ",(0,r.kt)("strong",{parentName:"p"},"Apps")," view. In versions before v2.2.0, this is the ",(0,r.kt)("strong",{parentName:"p"},"Catalog Apps")," view."),(0,r.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,r.kt)("p",null,"For each Helm chart, there are a list of desired answers that must be entered in order to successfully deploy the chart. When entering answers, you must format them using the syntax rules found in ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/#the-format-and-limitations-of---set"},"Using Helm: The format and limitations of \u2013set"),", as Rancher passes them as ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," flags to Helm."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For example, when entering an answer that includes two values separated by a comma (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"abc, bcd"),"), it is required to wrap the values with double quotes (i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},'"abc, bcd"'),").")),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(h,{value:"UI",mdxType:"TabItem"},(0,r.kt)("h3",{id:"using-a-questionsyml-file"},"Using a questions.yml file"),(0,r.kt)("p",null,"If the Helm chart that you are deploying contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"questions.yml")," file, Rancher's UI will translate this file to display an easy to use UI to collect the answers for the questions."),(0,r.kt)("h3",{id:"key-value-pairs-for-native-helm-charts"},"Key Value Pairs for Native Helm Charts"),(0,r.kt)("p",null,"For native Helm charts (i.e., charts from the ",(0,r.kt)("strong",{parentName:"p"},"Helm Stable")," or ",(0,r.kt)("strong",{parentName:"p"},"Helm Incubator")," catalogs or a ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config#custom-helm-chart-repository"},"custom Helm chart repository"),"), answers are provided as key value pairs in the ",(0,r.kt)("strong",{parentName:"p"},"Answers")," section. These answers are used to override the default values.")),(0,r.kt)(h,{value:"Editing YAML Files",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.1.0")),(0,r.kt)("p",null,"If you do not want to input answers using the UI, you can choose the ",(0,r.kt)("strong",{parentName:"p"},"Edit as YAML")," option."),(0,r.kt)("p",null,"With this example YAML:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"outer:\n  inner: value\nservers:\n- port: 80\n  host: example\n")),(0,r.kt)("h3",{id:"key-value-pairs"},"Key Value Pairs"),(0,r.kt)("p",null,"You can have a YAML file that translates these fields to match how to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/blob/master/docs/using_helm.md#the-format-and-limitations-of---set"},"format custom values so that it can be used with ",(0,r.kt)("inlineCode",{parentName:"a"},"--set")),"."),(0,r.kt)("p",null,"These values would be translated to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"outer.inner=value\nservers[0].port=80\nservers[0].host=example\n")),(0,r.kt)("h3",{id:"yaml-files"},"YAML files"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,r.kt)("p",null,"You can directly paste that YAML formatted structure into the YAML editor. By allowing custom values to be set using a YAML formatted structure, Rancher has the ability to easily customize for more complicated input values (e.g. multi-lines, array and JSON objects)."))))}d.isMDXComponent=!0}}]);