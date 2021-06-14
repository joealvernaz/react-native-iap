(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[360],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1416:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={},l={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"\u26a0\ufe0f Most of users experiencing issues are caused by:",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/troubleshooting.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},u=[{value:"Common issues",id:"common-issues",children:[{value:"getProducts returns empty array",id:"getproducts-returns-empty-array",children:[]},{value:"<code>getAvailablePurchases()</code> returns empty array",id:"getavailablepurchases-returns-empty-array",children:[]},{value:"I&#39;m usind <code>react-native&lt;0.60</code> and the module is not working as expected (throws error)",id:"im-usind-react-native060-and-the-module-is-not-working-as-expected-throws-error",children:[]},{value:"Invalid productId in iOS.",id:"invalid-productid-in-ios",children:[]}]}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u26a0\ufe0f Most of users experiencing issues are caused by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A device simulator, use a real device for testing!"),(0,i.kt)("li",{parentName:"ul"},"The sandbox environment of the project not being configured properly (",(0,i.kt)("a",{parentName:"li",href:"https://www.iaphub.com/docs/set-up-android/configure-sandbox-testing"},"Configure android sandbox"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.iaphub.com/docs/set-up-ios/configure-sandbox-testing/"},"Configure ios sandbox"),")"),(0,i.kt)("li",{parentName:"ul"},"An incorrect usage of the library")),(0,i.kt)("h2",{id:"common-issues"},"Common issues"),(0,i.kt)("h3",{id:"getproducts-returns-empty-array"},"getProducts returns empty array"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please double check if you've called ",(0,i.kt)("inlineCode",{parentName:"li"},"initConnection"),"."),(0,i.kt)("li",{parentName:"ul"},"Please wait for max 24 hours to fetch your iap products if you've just uploaded them. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/1065"},"Related to issue"),"."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"iOS"),", from ios version ",(0,i.kt)("inlineCode",{parentName:"li"},">=13"),", we seem to use ",(0,i.kt)("inlineCode",{parentName:"li"},"StoreKit")," to fix this issue as ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/58020258/requesting-an-in-app-purchase-in-ios-13-fails/58065711#58065711"},"mentioned in stackoverflow"),"."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"android"),", please double check ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/124#issuecomment-386593185"},"issue comment here")," and see if you've missed something.")),(0,i.kt)("h3",{id:"getavailablepurchases-returns-empty-array"},(0,i.kt)("inlineCode",{parentName:"h3"},"getAvailablePurchases()")," returns empty array"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getAvailablePurchases()")," is used only when you purchase a non-consumable product. This can be restored only."),(0,i.kt)("p",null,"If you want to find out if a user subscribes the product, you should check the receipt which you should store in your own database."),(0,i.kt)("p",null,"Apple suggests you handle this in your own backend to do things like what you are trying to achieve."),(0,i.kt)("h3",{id:"im-usind-react-native060-and-the-module-is-not-working-as-expected-throws-error"},"I'm usind ",(0,i.kt)("inlineCode",{parentName:"h3"},"react-native<0.60")," and the module is not working as expected (throws error)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native link")," script isn't perfect and sometimes breaks.\nPlease try ",(0,i.kt)("inlineCode",{parentName:"p"},"unlink")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," again, or try manual install."),(0,i.kt)("h3",{id:"invalid-productid-in-ios"},"Invalid productId in iOS."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Please try below and make sure you've done all the steps:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},'Completed an effective "Agreements, Tax, and Banking."'),(0,i.kt)("li",{parentName:"ol"},'Setup sandbox testing account in "Users and Roles."'),(0,i.kt)("li",{parentName:"ol"},'Signed into iOS device with sandbox account in "Settings / iTunes & App Stores".'),(0,i.kt)("li",{parentName:"ol"},"Set up three In-App Purchases with the following status:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ready to Submit"),(0,i.kt)("li",{parentName:"ul"},"Missing Metadata"),(0,i.kt)("li",{parentName:"ul"},"Waiting for Review"))),(0,i.kt)("li",{parentName:"ol"},'Enable "In-App Purchase" in Xcode "Capabilities" and in Apple Developer -> "App ID" setting.'),(0,i.kt)("li",{parentName:"ol"},"Clean up builds:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delete the app on device"),(0,i.kt)("li",{parentName:"ul"},"Restart device"),(0,i.kt)("li",{parentName:"ul"},"Quit \u201cstore\u201d related processes in Activity Monitor"),(0,i.kt)("li",{parentName:"ul"},"Development Provisioning Profile -> Clean -> Build."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Related issues ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/issues/256"},"#256")," , ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/issues/263"},"#263"),"."))))}c.isMDXComponent=!0}}]);