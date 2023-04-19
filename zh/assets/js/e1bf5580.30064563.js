"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5713],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),u=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=t,k=d["".concat(s,".").concat(m)]||d[m]||l[m]||c;return a?r.createElement(k,o(o({ref:n},p),{},{components:a})):r.createElement(k,o({ref:n},p))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=a.length,o=new Array(c);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var u=2;u<c;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},47518:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=a(87462),t=(a(67294),a(3905));const c={title:"\u793a\u4f8b"},o=void 0,i={unversionedId:"reference-guides/backup-restore-configuration/examples",id:"version-2.6/reference-guides/backup-restore-configuration/examples",title:"\u793a\u4f8b",description:"\u672c\u8282\u5305\u542b Backup \u548c Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u793a\u4f8b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/backup-restore-configuration/examples.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/examples",permalink:"/zh/v2.6/reference-guides/backup-restore-configuration/examples",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/backup-restore-configuration/examples.md",tags:[],version:"2.6",lastUpdatedAt:1669187684,formattedLastUpdatedAt:"2022\u5e7411\u670823\u65e5",frontMatter:{title:"\u793a\u4f8b"},sidebar:"tutorialSidebar",previous:{title:"\u5907\u4efd\u5b58\u50a8\u4f4d\u7f6e\u914d\u7f6e",permalink:"/zh/v2.6/reference-guides/backup-restore-configuration/storage-configuration"},next:{title:"Kubernetes \u6982\u5ff5",permalink:"/zh/v2.6/reference-guides/kubernetes-concepts"}},s={},u=[{value:"\u5907\u4efd",id:"\u5907\u4efd",level:2},{value:"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u52a0\u5bc6\u5907\u4efd",id:"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u52a0\u5bc6\u5907\u4efd",level:3},{value:"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u5b9a\u671f\u5907\u4efd",id:"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u5b9a\u671f\u5907\u4efd",level:3},{value:"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u52a0\u5bc6\u7684\u5b9a\u671f\u5907\u4efd",id:"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u52a0\u5bc6\u7684\u5b9a\u671f\u5907\u4efd",level:3},{value:"Minio \u4e2d\u7684\u52a0\u5bc6\u5907\u4efd",id:"minio-\u4e2d\u7684\u52a0\u5bc6\u5907\u4efd",level:3},{value:"\u4f7f\u7528 AWS \u51ed\u8bc1\u5bc6\u6587\u5728 S3 \u4e2d\u5907\u4efd",id:"\u4f7f\u7528-aws-\u51ed\u8bc1\u5bc6\u6587\u5728-s3-\u4e2d\u5907\u4efd",level:3},{value:"\u4f7f\u7528 AWS \u51ed\u8bc1\u5bc6\u6587\u5728 S3 \u4e2d\u8fdb\u884c\u5b9a\u671f\u5907\u4efd",id:"\u4f7f\u7528-aws-\u51ed\u8bc1\u5bc6\u6587\u5728-s3-\u4e2d\u8fdb\u884c\u5b9a\u671f\u5907\u4efd",level:3},{value:"\u4ece\u5177\u6709\u8bbf\u95ee S3 \u7684 IAM \u6743\u9650\u7684 EC2 \u8282\u70b9\u8fdb\u884c\u5907\u4efd",id:"\u4ece\u5177\u6709\u8bbf\u95ee-s3-\u7684-iam-\u6743\u9650\u7684-ec2-\u8282\u70b9\u8fdb\u884c\u5907\u4efd",level:3},{value:"\u8fd8\u539f",id:"\u8fd8\u539f",level:2},{value:"\u4f7f\u7528\u9ed8\u8ba4\u5907\u4efd\u6587\u4ef6\u4f4d\u7f6e\u8fd8\u539f",id:"\u4f7f\u7528\u9ed8\u8ba4\u5907\u4efd\u6587\u4ef6\u4f4d\u7f6e\u8fd8\u539f",level:3},{value:"\u4e3a Rancher \u8fc1\u79fb\u8fdb\u884c\u8fd8\u539f",id:"\u4e3a-rancher-\u8fc1\u79fb\u8fdb\u884c\u8fd8\u539f",level:3},{value:"\u4f7f\u7528\u52a0\u5bc6\u7684\u5907\u4efd\u8fd8\u539f",id:"\u4f7f\u7528\u52a0\u5bc6\u7684\u5907\u4efd\u8fd8\u539f",level:3},{value:"\u4ece Minio \u8fd8\u539f\u52a0\u5bc6\u7684\u5907\u4efd",id:"\u4ece-minio-\u8fd8\u539f\u52a0\u5bc6\u7684\u5907\u4efd",level:3},{value:"\u4f7f\u7528 AWS \u51ed\u8bc1\u5bc6\u6587\u8bbf\u95ee S3 \u4ece\u5907\u4efd\u4e2d\u8fd8\u539f",id:"\u4f7f\u7528-aws-\u51ed\u8bc1\u5bc6\u6587\u8bbf\u95ee-s3-\u4ece\u5907\u4efd\u4e2d\u8fd8\u539f",level:3},{value:"\u4ece\u5177\u6709\u8bbf\u95ee S3 \u7684 IAM \u6743\u9650\u7684 EC2 \u8282\u70b9\u8fdb\u884c\u8fd8\u539f",id:"\u4ece\u5177\u6709\u8bbf\u95ee-s3-\u7684-iam-\u6743\u9650\u7684-ec2-\u8282\u70b9\u8fdb\u884c\u8fd8\u539f",level:3},{value:"\u5728 S3 \u4e2d\u5b58\u50a8\u5907\u4efd\u7684\u51ed\u8bc1\u5bc6\u6587\u793a\u4f8b",id:"\u5728-s3-\u4e2d\u5b58\u50a8\u5907\u4efd\u7684\u51ed\u8bc1\u5bc6\u6587\u793a\u4f8b",level:2},{value:"EncryptionConfiguration \u793a\u4f8b",id:"encryptionconfiguration-\u793a\u4f8b",level:2}],p={toc:u};function l(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u672c\u8282\u5305\u542b Backup \u548c Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u793a\u4f8b\u3002"),(0,t.kt)("p",null,"\u9ed8\u8ba4\u7684\u5907\u4efd\u5b58\u50a8\u4f4d\u7f6e\u662f\u5728\u5b89\u88c5\u6216\u5347\u7ea7 ",(0,t.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator \u65f6\u914d\u7f6e\u7684\u3002"),(0,t.kt)("p",null,"\u53ea\u6709 Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u4f7f\u7528\u521b\u5efa\u5907\u4efd\u65f6\u4f7f\u7528\u7684\u52a0\u5bc6\u914d\u7f6e\u5bc6\u6587\u65f6\uff0c\u624d\u80fd\u8fd8\u539f\u52a0\u5bc6\u7684\u5907\u4efd\u3002"),(0,t.kt)("h2",{id:"\u5907\u4efd"},"\u5907\u4efd"),(0,t.kt)("p",null,"\u672c\u8282\u5305\u542b Backup \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u793a\u4f8b\u3002"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6709\u5173\u914d\u7f6e\u4ee5\u4e0b\u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/backup-configuration"},"\u5907\u4efd\u914d\u7f6e\u53c2\u8003\u9875\u9762"),"\u3002")),(0,t.kt)("h3",{id:"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u52a0\u5bc6\u5907\u4efd"},"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u52a0\u5bc6\u5907\u4efd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: default-location-encrypted-backup\nspec:\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n")),(0,t.kt)("h3",{id:"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u5b9a\u671f\u5907\u4efd"},"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u5b9a\u671f\u5907\u4efd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: default-location-recurring-backup\nspec:\n  resourceSetName: rancher-resource-set\n  schedule: "@every 1h"\n  retentionCount: 10\n')),(0,t.kt)("h3",{id:"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u52a0\u5bc6\u7684\u5b9a\u671f\u5907\u4efd"},"\u5728\u9ed8\u8ba4\u4f4d\u7f6e\u8fdb\u884c\u52a0\u5bc6\u7684\u5b9a\u671f\u5907\u4efd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: default-enc-recurring-backup\nspec:\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n  schedule: "@every 1h"\n  retentionCount: 3\n')),(0,t.kt)("h3",{id:"minio-\u4e2d\u7684\u52a0\u5bc6\u5907\u4efd"},"Minio \u4e2d\u7684\u52a0\u5bc6\u5907\u4efd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: minio-backup\nspec:\n  storageLocation:\n    s3:\n      credentialSecretName: minio-creds\n      credentialSecretNamespace: default\n      bucketName: rancherbackups\n      endpoint: minio.xip.io\n      endpointCA: <base64-encoded-cert>\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n")),(0,t.kt)("h3",{id:"\u4f7f\u7528-aws-\u51ed\u8bc1\u5bc6\u6587\u5728-s3-\u4e2d\u5907\u4efd"},"\u4f7f\u7528 AWS \u51ed\u8bc1\u5bc6\u6587\u5728 S3 \u4e2d\u5907\u4efd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: s3-backup\nspec:\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n")),(0,t.kt)("h3",{id:"\u4f7f\u7528-aws-\u51ed\u8bc1\u5bc6\u6587\u5728-s3-\u4e2d\u8fdb\u884c\u5b9a\u671f\u5907\u4efd"},"\u4f7f\u7528 AWS \u51ed\u8bc1\u5bc6\u6587\u5728 S3 \u4e2d\u8fdb\u884c\u5b9a\u671f\u5907\u4efd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: s3-recurring-backup\nspec:\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n  schedule: "@every 1h"\n  retentionCount: 10\n')),(0,t.kt)("h3",{id:"\u4ece\u5177\u6709\u8bbf\u95ee-s3-\u7684-iam-\u6743\u9650\u7684-ec2-\u8282\u70b9\u8fdb\u884c\u5907\u4efd"},"\u4ece\u5177\u6709\u8bbf\u95ee S3 \u7684 IAM \u6743\u9650\u7684 EC2 \u8282\u70b9\u8fdb\u884c\u5907\u4efd"),(0,t.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u8868\u660e\uff0c\u5982\u679c\u8fd0\u884c ",(0,t.kt)("inlineCode",{parentName:"p"},"rancher-backup")," \u7684\u8282\u70b9\u62e5\u6709\u8fd9\u4e9b",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/backup-configuration#ec2-%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE-s3-%E7%9A%84-iam-%E6%9D%83%E9%99%90"},"\u8bbf\u95ee S3 \u7684\u6743\u9650"),"\uff0c\u5c31\u4e0d\u5fc5\u63d0\u4f9b AWS \u7684\u51ed\u8bc1\u5bc6\u6587\u6765\u521b\u5efa\u5907\u4efd\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: s3-iam-backup\nspec:\n  storageLocation:\n    s3:\n      bucketName: rancher-backups\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n")),(0,t.kt)("h2",{id:"\u8fd8\u539f"},"\u8fd8\u539f"),(0,t.kt)("p",null,"\u672c\u8282\u5305\u542b Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u793a\u4f8b\u3002"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6709\u5173\u914d\u7f6e\u4ee5\u4e0b\u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/restore-configuration"},"\u6062\u590d\u914d\u7f6e\u53c2\u8003\u9875\u9762"),"\u3002")),(0,t.kt)("h3",{id:"\u4f7f\u7528\u9ed8\u8ba4\u5907\u4efd\u6587\u4ef6\u4f4d\u7f6e\u8fd8\u539f"},"\u4f7f\u7528\u9ed8\u8ba4\u5907\u4efd\u6587\u4ef6\u4f4d\u7f6e\u8fd8\u539f"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-default\nspec:\n  backupFilename: default-location-recurring-backup-752ecd87-d958-4d20-8350-072f8d090045-2020-09-26T12-29-54-07-00.tar.gz\n#  encryptionConfigSecretName: test-encryptionconfig\n")),(0,t.kt)("h3",{id:"\u4e3a-rancher-\u8fc1\u79fb\u8fdb\u884c\u8fd8\u539f"},"\u4e3a Rancher \u8fc1\u79fb\u8fdb\u884c\u8fd8\u539f"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  prune: false\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,t.kt)("h3",{id:"\u4f7f\u7528\u52a0\u5bc6\u7684\u5907\u4efd\u8fd8\u539f"},"\u4f7f\u7528\u52a0\u5bc6\u7684\u5907\u4efd\u8fd8\u539f"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-encrypted\nspec:\n  backupFilename: default-test-s3-def-backup-c583d8f2-6daf-4648-8ead-ed826c591471-2020-08-24T20-47-05Z.tar.gz\n  encryptionConfigSecretName: encryptionconfig\n")),(0,t.kt)("h3",{id:"\u4ece-minio-\u8fd8\u539f\u52a0\u5bc6\u7684\u5907\u4efd"},"\u4ece Minio \u8fd8\u539f\u52a0\u5bc6\u7684\u5907\u4efd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-minio\nspec:\n  backupFilename: default-minio-backup-demo-aa5c04b7-4dba-4c48-9ac4-ab7916812eaa-2020-08-30T13-18-17-07-00.tar.gz\n  storageLocation:\n    s3:\n      credentialSecretName: minio-creds\n      credentialSecretNamespace: default\n      bucketName: rancherbackups\n      endpoint: minio.xip.io\n      endpointCA: <base64-encoded-cert>\n  encryptionConfigSecretName: test-encryptionconfig\n")),(0,t.kt)("h3",{id:"\u4f7f\u7528-aws-\u51ed\u8bc1\u5bc6\u6587\u8bbf\u95ee-s3-\u4ece\u5907\u4efd\u4e2d\u8fd8\u539f"},"\u4f7f\u7528 AWS \u51ed\u8bc1\u5bc6\u6587\u8bbf\u95ee S3 \u4ece\u5907\u4efd\u4e2d\u8fd8\u539f"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-s3-demo\nspec:\n  backupFilename: test-s3-recurring-backup-752ecd87-d958-4d20-8350-072f8d090045-2020-09-26T12-49-34-07-00.tar.gz.enc\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  encryptionConfigSecretName: test-encryptionconfig\n")),(0,t.kt)("h3",{id:"\u4ece\u5177\u6709\u8bbf\u95ee-s3-\u7684-iam-\u6743\u9650\u7684-ec2-\u8282\u70b9\u8fdb\u884c\u8fd8\u539f"},"\u4ece\u5177\u6709\u8bbf\u95ee S3 \u7684 IAM \u6743\u9650\u7684 EC2 \u8282\u70b9\u8fdb\u884c\u8fd8\u539f"),(0,t.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u8868\u660e\uff0c\u5982\u679c\u8fd0\u884c ",(0,t.kt)("inlineCode",{parentName:"p"},"rancher-backup")," \u7684\u8282\u70b9\u62e5\u6709\u8fd9\u4e9b",(0,t.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/backup-configuration#ec2-%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE-s3-%E7%9A%84-iam-%E6%9D%83%E9%99%90"},"\u8bbf\u95ee S3 \u7684\u6743\u9650"),"\uff0c\u5c31\u4e0d\u5fc5\u63d0\u4f9b AWS \u7684\u51ed\u8bc1\u5bc6\u6587\u6765\u4ece\u5907\u4efd\u4e2d\u8fd8\u539f\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-s3-demo\nspec:\n  backupFilename: default-test-s3-recurring-backup-84bf8dd8-0ef3-4240-8ad1-fc7ec308e216-2020-08-24T10#52#44-07#00.tar.gz\n  storageLocation:\n    s3:\n      bucketName: rajashree-backup-test\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  encryptionConfigSecretName: test-encryptionconfig\n")),(0,t.kt)("h2",{id:"\u5728-s3-\u4e2d\u5b58\u50a8\u5907\u4efd\u7684\u51ed\u8bc1\u5bc6\u6587\u793a\u4f8b"},"\u5728 S3 \u4e2d\u5b58\u50a8\u5907\u4efd\u7684\u51ed\u8bc1\u5bc6\u6587\u793a\u4f8b"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: creds\ntype: Opaque\ndata:\n  accessKey: <Enter your base64-encoded access key>\n  secretKey: <Enter your base64-encoded secret key>\n")),(0,t.kt)("h2",{id:"encryptionconfiguration-\u793a\u4f8b"},"EncryptionConfiguration \u793a\u4f8b"),(0,t.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u7247\u6bb5\u6f14\u793a\u4e86\u4e24\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u5bc6\u6587\u53ca\u5176\u4e0e\u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u5907\u4efd\u548c\u8fd8\u539f\u7684\u76f8\u5173\u6027\u3002"),(0,t.kt)("p",null,"\u7b2c\u4e00\u4e2a\u793a\u4f8b\u662f\u7528\u4e8e\u52a0\u5bc6\u5907\u4efd\u6587\u4ef6\u7684\u5bc6\u94a5\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cBackup operator \u5c06\u65e0\u6cd5\u8bfb\u53d6\u5bc6\u6587\u52a0\u5bc6\u6587\u4ef6\u3002\u5b83\u53ea\u4f7f\u7528\u5bc6\u6587\u7684\u5185\u5bb9\u3002"),(0,t.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u793a\u4f8b\u662f Kubernetes \u5bc6\u6587\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u52a0\u5bc6\u5b58\u50a8\u5728 etcd \u4e2d\u7684\u5bc6\u6587\u3002",(0,t.kt)("strong",{parentName:"p"},"\u5907\u4efd etcd \u6570\u636e\u5b58\u50a8\u65f6\uff0c\u8bf7\u52a1\u5fc5\u540c\u65f6\u5907\u4efd EncryptionConfiguration"),"\u3002\u5982\u679c\u4f60\u6ca1\u6709\u8fd9\u6837\u505a\uff0c\u800c\u4e14\u5907\u4efd\u6570\u636e\u65f6\u6b63\u5728\u4f7f\u7528\u5bc6\u6587\u52a0\u5bc6\uff0c\u4f60\u5c06\u65e0\u6cd5\u4f7f\u7528\u6062\u590d\u7684\u6570\u636e\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apiserver.config.k8s.io/v1\nkind: EncryptionConfiguration\nresources:\n  - resources:\n      - secrets\n    providers:\n      - aesgcm:\n          keys:\n            - name: key1\n              secret: c2VjcmV0IGlzIHNlY3VyZQ==\n            - name: key2\n              secret: dGhpcyBpcyBwYXNzd29yZA==\n      - aescbc:\n          keys:\n            - name: key1\n              secret: c2VjcmV0IGlzIHNlY3VyZQ==\n            - name: key2\n              secret: dGhpcyBpcyBwYXNzd29yZA==\n      - secretbox:\n          keys:\n            - name: key1\n              secret: YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoxMjM0NTY=\n")))}l.isMDXComponent=!0}}]);