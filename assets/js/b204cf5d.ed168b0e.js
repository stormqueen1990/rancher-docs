"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3254],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46176:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Template Enforcement"},i=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",title:"Template Enforcement",description:"This section describes how template administrators can enforce templates in Rancher, restricting the ability of users to create clusters without a template.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Template Enforcement"},sidebar:"tutorialSidebar",previous:{title:"Creating and Revising Templates",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates"},next:{title:"Overriding Template Settings",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings"}},l={},u=[{value:"Requiring New Clusters to Use an RKE Template",id:"requiring-new-clusters-to-use-an-rke-template",level:2},{value:"Disabling RKE Template Enforcement",id:"disabling-rke-template-enforcement",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how template administrators can enforce templates in Rancher, restricting the ability of users to create clusters without a template."),(0,r.kt)("p",null,"By default, any standard user in Rancher can create clusters. But when RKE template enforcement is turned on,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only an administrator has the ability to create clusters without a template."),(0,r.kt)("li",{parentName:"ul"},"All standard users must use an RKE template to create a new cluster."),(0,r.kt)("li",{parentName:"ul"},"Standard users cannot create a cluster without using a template.")),(0,r.kt)("p",null,"Users can only create new templates if the administrator ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions#allowing-a-user-to-create-templates"},"gives them permission.")),(0,r.kt)("p",null,"After a cluster is created with an RKE template, the cluster creator cannot edit settings that are defined in the template. The only way to change those settings after the cluster is created is to ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#updating-a-cluster-created-with-an-rke-template"},"upgrade the cluster to a new revision")," of the same template. If cluster creators want to change template-defined settings, they would need to contact the template owner to get a new revision of the template. For details on how template revisions work, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#updating-a-template"},"documentation on revising templates.")),(0,r.kt)("h2",{id:"requiring-new-clusters-to-use-an-rke-template"},"Requiring New Clusters to Use an RKE Template"),(0,r.kt)("p",null,"You might want to require new clusters to use a template to ensure that any cluster launched by a ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"standard user")," will use the Kubernetes and/or Rancher settings that are vetted by administrators."),(0,r.kt)("p",null,"To require new clusters to use an RKE template, administrators can turn on RKE template enforcement with the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Global")," view, click the ",(0,r.kt)("strong",{parentName:"li"},"Settings")," tab."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster-template-enforcement")," setting. Click the vertical ",(0,r.kt)("strong",{parentName:"li"},"\u22ee")," and click ",(0,r.kt)("strong",{parentName:"li"},"Edit.")),(0,r.kt)("li",{parentName:"ol"},"Set the value to ",(0,r.kt)("strong",{parentName:"li"},"True")," and click ",(0,r.kt)("strong",{parentName:"li"},"Save."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," All clusters provisioned by Rancher must use a template, unless the creator is an administrator."),(0,r.kt)("h2",{id:"disabling-rke-template-enforcement"},"Disabling RKE Template Enforcement"),(0,r.kt)("p",null,"To allow new clusters to be created without an RKE template, administrators can turn off RKE template enforcement with the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Global")," view, click the ",(0,r.kt)("strong",{parentName:"li"},"Settings")," tab."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster-template-enforcement")," setting. Click the vertical ",(0,r.kt)("strong",{parentName:"li"},"\u22ee")," and click ",(0,r.kt)("strong",{parentName:"li"},"Edit.")),(0,r.kt)("li",{parentName:"ol"},"Set the value to ",(0,r.kt)("strong",{parentName:"li"},"False")," and click ",(0,r.kt)("strong",{parentName:"li"},"Save."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," When clusters are provisioned by Rancher, they don't need to use a template."))}p.isMDXComponent=!0}}]);