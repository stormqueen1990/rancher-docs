"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65737],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||s;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={title:"Creating an EKS Cluster"},o=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks",title:"Creating an EKS Cluster",description:"Amazon EKS provides a managed control plane for your Kubernetes cluster. Amazon EKS runs the Kubernetes control plane instances across multiple Availability Zones to ensure high availability. Rancher provides an intuitive user interface for managing and deploying the Kubernetes clusters you run in Amazon EKS. With this guide, you will use Rancher to quickly and easily launch an Amazon EKS Kubernetes cluster in your AWS account. For more information on Amazon EKS, see this documentation.",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks",permalink:"/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/eks.md",tags:[],version:"2.6",lastUpdatedAt:1675817653,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{title:"Creating an EKS Cluster"},sidebar:"tutorialSidebar",previous:{title:"Setting up Clusters from Hosted Kubernetes Providers",permalink:"/v2.6/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},next:{title:"Creating a GKE Cluster",permalink:"/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"}},l={},c=[{value:"Prerequisites in Amazon Web Services",id:"prerequisites-in-amazon-web-services",level:2},{value:"Amazon VPC",id:"amazon-vpc",level:3},{value:"IAM Policies",id:"iam-policies",level:3},{value:"Create the EKS Cluster",id:"create-the-eks-cluster",level:2},{value:"EKS Cluster Configuration Reference",id:"eks-cluster-configuration-reference",level:2},{value:"Architecture",id:"architecture",level:2},{value:"AWS Service Events",id:"aws-service-events",level:2},{value:"Security and Compliance",id:"security-and-compliance",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Minimum EKS Permissions",id:"minimum-eks-permissions",level:2},{value:"Service Role Permissions",id:"service-role-permissions",level:3},{value:"VPC Permissions",id:"vpc-permissions",level:3},{value:"Syncing",id:"syncing",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Programmatically Creating EKS Clusters",id:"programmatically-creating-eks-clusters",level:2}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Amazon EKS provides a managed control plane for your Kubernetes cluster. Amazon EKS runs the Kubernetes control plane instances across multiple Availability Zones to ensure high availability. Rancher provides an intuitive user interface for managing and deploying the Kubernetes clusters you run in Amazon EKS. With this guide, you will use Rancher to quickly and easily launch an Amazon EKS Kubernetes cluster in your AWS account. For more information on Amazon EKS, see this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html"},"documentation"),"."),(0,a.kt)("h2",{id:"prerequisites-in-amazon-web-services"},"Prerequisites in Amazon Web Services"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Deploying to Amazon AWS will incur charges. For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/eks/pricing/"},"EKS pricing page"),".")),(0,a.kt)("p",null,"To set up a cluster on EKS, you will need to set up an Amazon VPC (Virtual Private Cloud). You will also need to make sure that the account you will be using to create the EKS cluster has the appropriate ",(0,a.kt)("a",{parentName:"p",href:"#minimum-eks-permissions"},"permissions.")," For details, refer to the official guide on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html#eks-prereqs"},"Amazon EKS Prerequisites"),"."),(0,a.kt)("h3",{id:"amazon-vpc"},"Amazon VPC"),(0,a.kt)("p",null,"An Amazon VPC is required to launch the EKS cluster. The VPC enables you to launch AWS resources into a virtual network that you've defined. You can set one up yourself and provide it during cluster creation in Rancher. If you do not provide one during creation, Rancher will create one. For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-public-private-vpc.html"},"Tutorial: Creating a VPC with Public and Private Subnets for Your Amazon EKS Cluster"),"."),(0,a.kt)("h3",{id:"iam-policies"},"IAM Policies"),(0,a.kt)("p",null,"Rancher needs access to your AWS account in order to provision and administer your Kubernetes clusters in Amazon EKS. You'll need to create a user for Rancher in your AWS account and define what that user can access."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a user with programmatic access by following the steps ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html"},"here"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, create an IAM policy that defines what this user has access to in your AWS account. It's important to only grant this user minimal access within your account. The minimum permissions required for an EKS cluster are listed ",(0,a.kt)("a",{parentName:"p",href:"#minimum-eks-permissions"},"here.")," Follow the steps ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/EKS_IAM_user_policies.html"},"here")," to create an IAM policy and attach it to your user.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, follow the steps ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"here")," to create an access key and secret key for this user."))),(0,a.kt)("admonition",{title:"Important:",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It's important to regularly rotate your access and secret keys. See this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#rotating_access_keys_console"},"documentation")," for more information.")),(0,a.kt)("p",null,"For more detailed information on IAM policies for EKS, refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/IAM_policies.html"},"documentation on Amazon EKS IAM Policies, Roles, and Permissions"),"."),(0,a.kt)("h2",{id:"create-the-eks-cluster"},"Create the EKS Cluster"),(0,a.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"Amazon EKS"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,a.kt)("li",{parentName:"ol"},"Fill out the rest of the form. For help, refer to the ",(0,a.kt)("a",{parentName:"li",href:"#eks-cluster-configuration-reference"},"configuration reference.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,a.kt)("h2",{id:"eks-cluster-configuration-reference"},"EKS Cluster Configuration Reference"),(0,a.kt)("p",null,"For the full list of EKS cluster configuration options, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration"},"this page.")),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"The figure below illustrates the high-level architecture of Rancher 2.x. The figure depicts a Rancher Server installation that manages two Kubernetes clusters: one created by RKE and another created by EKS."),(0,a.kt)("figcaption",null,"Managing Kubernetes Clusters through Rancher's Authentication Proxy"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:r(16904).Z,width:"766",height:"792"})),(0,a.kt)("h2",{id:"aws-service-events"},"AWS Service Events"),(0,a.kt)("p",null,"To find information on any AWS Service events, please see ",(0,a.kt)("a",{parentName:"p",href:"https://status.aws.amazon.com/"},"this page"),"."),(0,a.kt)("h2",{id:"security-and-compliance"},"Security and Compliance"),(0,a.kt)("p",null,"By default only the IAM user or role that created a cluster has access to it. Attempting to access the cluster with any other user or role without additional configuration will lead to an error. In Rancher, this means using a credential that maps to a user or role that was not used to create the cluster will cause an unauthorized error. For example, an EKSCtl cluster will not register in Rancher unless the credentials used to register the cluster match the role or user used by EKSCtl. Additional users and roles can be authorized to access a cluster by being added to the aws-auth configmap in the kube-system namespace. For a more in-depth explanation and detailed instructions, please see this ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/amazon-eks-cluster-access/"},"documentation"),"."),(0,a.kt)("p",null,"For more information on security and compliance with your Amazon EKS Kubernetes cluster, please see this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/shared-responsibilty.html"},"documentation"),"."),(0,a.kt)("h2",{id:"tutorial"},"Tutorial"),(0,a.kt)("p",null,"This ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/opensource/managing-eks-clusters-rancher/"},"tutorial")," on the AWS Open Source Blog will walk you through how to set up an EKS cluster with Rancher, deploy a publicly accessible app to test the cluster, and deploy a sample project to track real-time geospatial data using a combination of other open-source software such as Grafana and InfluxDB."),(0,a.kt)("h2",{id:"minimum-eks-permissions"},"Minimum EKS Permissions"),(0,a.kt)("p",null,"These are the minimum set of permissions necessary to access the full functionality of Rancher's EKS driver. You'll need additional permissions for Rancher to provision the ",(0,a.kt)("inlineCode",{parentName:"p"},"Service Role")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"VPC")," resources. If you create these resources ",(0,a.kt)("strong",{parentName:"p"},"before")," you create the cluster, they'll be available when you configure the cluster."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Service Role"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides permissions that allow Kubernetes to manage resources on your behalf. Rancher can create the service role with the following ",(0,a.kt)("a",{parentName:"td",href:"#service-role-permissions"},"Service Role Permissions"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VPC"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides isolated network resources utilised by EKS and worker nodes. Rancher can create the VPC resources with the following ",(0,a.kt)("a",{parentName:"td",href:"#vpc-permissions"},"VPC Permissions"),".")))),(0,a.kt)("p",null,"Resource targeting uses ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," as the ARN of many of the resources created cannot be known before creating the EKS cluster in Rancher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "EC2Permisssions",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RunInstances",\n                "ec2:RevokeSecurityGroupIngress",\n                "ec2:RevokeSecurityGroupEgress",\n                "ec2:DescribeInstanceTypes",\n                "ec2:DescribeRegions",\n                "ec2:DescribeVpcs",\n                "ec2:DescribeTags",\n                "ec2:DescribeSubnets",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeRouteTables",\n                "ec2:DescribeLaunchTemplateVersions",\n                "ec2:DescribeLaunchTemplates",\n                "ec2:DescribeKeyPairs",\n                "ec2:DescribeInternetGateways",\n                "ec2:DescribeImages",\n                "ec2:DescribeAvailabilityZones",\n                "ec2:DescribeAccountAttributes",\n                "ec2:DeleteTags",\n                "ec2:DeleteSecurityGroup",\n                "ec2:DeleteKeyPair",\n                "ec2:CreateTags",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateLaunchTemplateVersion",\n                "ec2:CreateLaunchTemplate",\n                "ec2:CreateKeyPair",\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:AuthorizeSecurityGroupEgress"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "CloudFormationPermisssions",\n            "Effect": "Allow",\n            "Action": [\n                "cloudformation:ListStacks",\n                "cloudformation:ListStackResources",\n                "cloudformation:DescribeStacks",\n                "cloudformation:DescribeStackResources",\n                "cloudformation:DescribeStackResource",\n                "cloudformation:DeleteStack",\n                "cloudformation:CreateStackSet",\n                "cloudformation:CreateStack"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "IAMPermissions",\n            "Effect": "Allow",\n            "Action": [\n                "iam:PassRole",\n                "iam:ListRoles",\n                "iam:ListRoleTags",\n                "iam:ListInstanceProfilesForRole",\n                "iam:ListInstanceProfiles",\n                "iam:ListAttachedRolePolicies",\n                "iam:GetRole",\n                "iam:GetInstanceProfile",\n                "iam:DetachRolePolicy",\n                "iam:DeleteRole",\n                "iam:CreateRole",\n                "iam:AttachRolePolicy"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "KMSPermisssions",\n            "Effect": "Allow",\n            "Action": "kms:ListKeys",\n            "Resource": "*"\n        },\n        {\n            "Sid": "EKSPermisssions",\n            "Effect": "Allow",\n            "Action": [\n                "eks:UpdateNodegroupVersion",\n                "eks:UpdateNodegroupConfig",\n                "eks:UpdateClusterVersion",\n                "eks:UpdateClusterConfig",\n                "eks:UntagResource",\n                "eks:TagResource",\n                "eks:ListUpdates",\n                "eks:ListTagsForResource",\n                "eks:ListNodegroups",\n                "eks:ListFargateProfiles",\n                "eks:ListClusters",\n                "eks:DescribeUpdate",\n                "eks:DescribeNodegroup",\n                "eks:DescribeFargateProfile",\n                "eks:DescribeCluster",\n                "eks:DeleteNodegroup",\n                "eks:DeleteFargateProfile",\n                "eks:DeleteCluster",\n                "eks:CreateNodegroup",\n                "eks:CreateFargateProfile",\n                "eks:CreateCluster"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"service-role-permissions"},"Service Role Permissions"),(0,a.kt)("p",null,"These are permissions that are needed during EKS cluster creation, so Rancher can create a service role on the users' behalf."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "IAMPermisssions",\n      "Effect": "Allow",\n      "Action": [\n        "iam:AddRoleToInstanceProfile",\n        "iam:AttachRolePolicy",\n        "iam:CreateInstanceProfile",\n        "iam:CreateRole",\n        "iam:CreateServiceLinkedRole",\n        "iam:DeleteInstanceProfile",\n        "iam:DeleteRole",\n        "iam:DetachRolePolicy",\n        "iam:GetInstanceProfile",\n        "iam:GetRole",\n        "iam:ListAttachedRolePolicies",\n        "iam:ListInstanceProfiles",\n        "iam:ListInstanceProfilesForRole",\n        "iam:ListRoles",\n        "iam:ListRoleTags",\n        "iam:PassRole",\n        "iam:RemoveRoleFromInstanceProfile"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"When you create an EKS cluster, Rancher creates a service role with the following trust policy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": "sts:AssumeRole",\n      "Principal": {\n        "Service": "eks.amazonaws.com"\n      },\n      "Effect": "Allow",\n      "Sid": ""\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"This role also has two role policy attachments with the following policies' ARNs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"arn:aws:iam::aws:policy/AmazonEKSClusterPolicy\narn:aws:iam::aws:policy/AmazonEKSServicePolicy\n")),(0,a.kt)("h3",{id:"vpc-permissions"},"VPC Permissions"),(0,a.kt)("p",null,"These are permissions that are needed by Rancher to create a Virtual Private Cloud (VPC) and associated resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "VPCPermissions",\n      "Effect": "Allow",\n      "Action": [\n        "ec2:ReplaceRoute",\n        "ec2:ModifyVpcAttribute",\n        "ec2:ModifySubnetAttribute",\n        "ec2:DisassociateRouteTable",\n        "ec2:DetachInternetGateway",\n        "ec2:DescribeVpcs",\n        "ec2:DeleteVpc",\n        "ec2:DeleteTags",\n        "ec2:DeleteSubnet",\n        "ec2:DeleteRouteTable",\n        "ec2:DeleteRoute",\n        "ec2:DeleteInternetGateway",\n        "ec2:CreateVpc",\n        "ec2:CreateSubnet",\n        "ec2:CreateSecurityGroup",\n        "ec2:CreateRouteTable",\n        "ec2:CreateRoute",\n        "ec2:CreateInternetGateway",\n        "ec2:AttachInternetGateway",\n        "ec2:AssociateRouteTable"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"syncing"},"Syncing"),(0,a.kt)("p",null,"The EKS provisioner can synchronize the state of an EKS cluster between Rancher and the provider. For an in-depth technical explanation of how this works, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"},"Syncing.")),(0,a.kt)("p",null,"For information on configuring the refresh interval, refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration#configuring-the-refresh-interval"},"this section.")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If your changes were overwritten, it could be due to the way the cluster data is synced with EKS. Changes shouldn't be made to the cluster from another source, such as in the EKS console, and in Rancher within a five-minute span. For information on how this works and how to configure the refresh interval, refer to ",(0,a.kt)("a",{parentName:"p",href:"#syncing"},"Syncing.")),(0,a.kt)("p",null,"If an unauthorized error is returned while attempting to modify or register the cluster and the cluster was not created with the role or user that your credentials belong to, refer to ",(0,a.kt)("a",{parentName:"p",href:"#security-and-compliance"},"Security and Compliance.")),(0,a.kt)("p",null,"For any issues or troubleshooting details for your Amazon EKS Kubernetes cluster, please see this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/troubleshooting.html"},"documentation"),"."),(0,a.kt)("h2",{id:"programmatically-creating-eks-clusters"},"Programmatically Creating EKS Clusters"),(0,a.kt)("p",null,"The most common way to programmatically deploy EKS clusters through Rancher is by using the Rancher2 Terraform provider. The documentation for creating clusters with Terraform is ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"here.")))}p.isMDXComponent=!0},16904:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-architecture-rancher-api-server-2743dae746c64cd2ad66711908be4108.svg"}}]);