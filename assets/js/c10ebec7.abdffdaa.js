"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1604,215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),k=r,u=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>l,Z:()=>o});var a=n(2263),r=n(3919);function l(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var l=void 0===a?{}:a,o=l.forcePrependBaseUrl,i=void 0!==o&&o,p=l.absolute,c=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(l,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},3789:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>m,toc:()=>s,default:()=>u});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o=n(4996),i=n(7764),p=["components"],c={id:"icon",title:"Icon"},d=void 0,m={unversionedId:"icon",id:"version-3.4.2/icon",isDocsHomePage:!1,title:"Icon",description:"Icons are visual indicators usually used to describe action or intent.",source:"@site/versioned_docs/version-3.4.2/icon.md",sourceDirName:".",slug:"/icon",permalink:"/docs/icon",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/icon.md",version:"3.4.2",frontMatter:{id:"icon",title:"Icon"},sidebar:"version-3.4.2/docs",previous:{title:"Header",permalink:"/docs/header"},next:{title:"Image",permalink:"/docs/image"}},s=[{value:"Available Icon Sets",id:"available-icon-sets",children:[]},{value:"Custom Icon Fonts",id:"custom-icon-fonts",children:[]},{value:"Usage",id:"usage",children:[]}],k={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Icons are visual indicators usually used to describe action or intent."),(0,l.kt)("img",{alt:"Icon",src:(0,o.Z)("img/icons.png")}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Hint: use ",(0,l.kt)("strong",{parentName:"p"},"reverse")," to make your icon look like a button")),(0,l.kt)("h2",{id:"available-icon-sets"},"Available Icon Sets"),(0,l.kt)("p",null,"The icon sets in React Native Elements are made possible through\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons"},"react-native-vector-icons"),"."),(0,l.kt)("p",null,"The current list of available icons sets are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://ant.design/components/icon/"},"antdesign")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.entypo.com/"},"entypo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://evil-icons.io/"},"evilicon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://feathericons.com/"},"feather")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fontawesome.com/v4.7.0/"},"font-awesome")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fontawesome.com/"},"font-awesome-5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.fontisto.com/icons"},"fontisto")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://zurb.com/playground/foundation-icon-fonts-3"},"foundation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://ionicons.com/"},"ionicon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://material.io/tools/icons"},"material")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://materialdesignicons.com/"},"material-community")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://octicons.github.com/"},"octicon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://simplelineicons.github.io/"},"simple-line-icon")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://weloveiconfonts.com/"},"zocial"))),(0,l.kt)("h2",{id:"custom-icon-fonts"},"Custom Icon Fonts"),(0,l.kt)("p",null,"Register your own custom icons by calling\n",(0,l.kt)("inlineCode",{parentName:"p"},"registerCustomIconType('customid', customFont)"),". Create a custom font by\nfollowing the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#custom-fonts"}," instructions for creating a custom font here"),".\nAlso, you can use ",(0,l.kt)("a",{parentName:"p",href:"http://fontello.com/"},"Fontello")," to generate custom icon\nfonts."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Icon } from 'react-native-elements'\n\n<Icon\n  name='rowing' />\n\n<Icon\n  name='g-translate'\n  color='#00aced' />\n\n<Icon\n  name='sc-telegram'\n  type='evilicon'\n  color='#517fa4'\n/>\n\n<Icon\n  reverse\n  name='ios-american-football'\n  type='ionicon'\n  color='#517fa4'\n/>\n\n<Icon\n  raised\n  name='heartbeat'\n  type='font-awesome'\n  color='#f50'\n  onPress={() => console.log('hello')} />\n")),(0,l.kt)("hr",null),(0,l.kt)(i.default,{mdxType:"Props"}),(0,l.kt)("hr",null))}u.isMDXComponent=!0},7764:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>s});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o=["components"],i={},p=void 0,c={unversionedId:"props/icon",id:"version-3.4.2/props/icon",isDocsHomePage:!1,title:"icon",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/icon.md",sourceDirName:"props",slug:"/props/icon",permalink:"/docs/props/icon",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/icon.md",version:"3.4.2",frontMatter:{}},d=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>brand</code>",id:"brand",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>Component</code>",id:"component",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>disabledStyle</code>",id:"disabledstyle",children:[]},{value:"<code>iconProps</code>",id:"iconprops",children:[]},{value:"<code>iconStyle</code>",id:"iconstyle",children:[]},{value:"<code>name</code>",id:"name",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>raised</code>",id:"raised",children:[]},{value:"<code>reverse</code>",id:"reverse",children:[]},{value:"<code>reverseColor</code>",id:"reversecolor",children:[]},{value:"<code>size</code>",id:"size",children:[]},{value:"<code>solid</code>",id:"solid",children:[]},{value:"<code>type</code>",id:"type",children:[]},{value:"<code>underlayColor</code>",id:"underlaycolor",children:[]}]}],m={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#brand"},(0,l.kt)("inlineCode",{parentName:"a"},"brand"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#color"},(0,l.kt)("inlineCode",{parentName:"a"},"color"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#component"},(0,l.kt)("inlineCode",{parentName:"a"},"Component"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabled"},(0,l.kt)("inlineCode",{parentName:"a"},"disabled"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disabledstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"disabledStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#iconprops"},(0,l.kt)("inlineCode",{parentName:"a"},"iconProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#iconstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"iconStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("inlineCode",{parentName:"a"},"name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onlongpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onLongPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onpress"},(0,l.kt)("inlineCode",{parentName:"a"},"onPress"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#raised"},(0,l.kt)("inlineCode",{parentName:"a"},"raised"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#reverse"},(0,l.kt)("inlineCode",{parentName:"a"},"reverse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#reversecolor"},(0,l.kt)("inlineCode",{parentName:"a"},"reverseColor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#size"},(0,l.kt)("inlineCode",{parentName:"a"},"size"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#solid"},(0,l.kt)("inlineCode",{parentName:"a"},"solid"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#type"},(0,l.kt)("inlineCode",{parentName:"a"},"type"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#underlaycolor"},(0,l.kt)("inlineCode",{parentName:"a"},"underlayColor")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"brand"},(0,l.kt)("inlineCode",{parentName:"h3"},"brand")),(0,l.kt)("p",null,"Uses the brands font (FontAwesome5 only)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h3"},"color")),(0,l.kt)("p",null,"color of icon (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"black")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"component"},(0,l.kt)("inlineCode",{parentName:"h3"},"Component")),(0,l.kt)("p",null,"update React Native Component (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"React Native component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"View if no onPress method is defined, TouchableHighlight if onPress method is defined")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"add styling to container holding icon (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabled"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabled")),(0,l.kt)("p",null,"Disables onPress events (optional). Only works when ",(0,l.kt)("inlineCode",{parentName:"p"},"onPress")," has a handler."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"disabledstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"disabledStyle")),(0,l.kt)("p",null,"Style for the button when disabled (optional). Only works when ",(0,l.kt)("inlineCode",{parentName:"p"},"onPress")," has a\nhandler."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"{{ backgroundColor: '#D1D5D8' }}"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"iconprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"iconProps")),(0,l.kt)("p",null,"provide all props from react-native Icon component"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"https://github.com/oblador/react-native-vector-icons#icon-component"},"...Icon props"),"}"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"iconstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"iconStyle")),(0,l.kt)("p",null,"additional styling to icon (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited style")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"name"},(0,l.kt)("inlineCode",{parentName:"h3"},"name")),(0,l.kt)("p",null,"name of icon (required)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onlongpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onLongPress")),(0,l.kt)("p",null,"onLongPress method for button (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onpress"},(0,l.kt)("inlineCode",{parentName:"h3"},"onPress")),(0,l.kt)("p",null,"onPress method for button (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"function"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"raised"},(0,l.kt)("inlineCode",{parentName:"h3"},"raised")),(0,l.kt)("p",null,"adds box shadow to button (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"reverse"},(0,l.kt)("inlineCode",{parentName:"h3"},"reverse")),(0,l.kt)("p",null,"reverses color scheme (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"reversecolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"reverseColor")),(0,l.kt)("p",null,"specify reverse icon color (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"white")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"size"},(0,l.kt)("inlineCode",{parentName:"h3"},"size")),(0,l.kt)("p",null,"size of icon (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"26")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"solid"},(0,l.kt)("inlineCode",{parentName:"h3"},"solid")),(0,l.kt)("p",null,"Uses the solid font (FontAwesome5 only)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},"type")),(0,l.kt)("p",null,"type of icon set. ",(0,l.kt)("a",{parentName:"p",href:"#available-icon-sets"},"Supported sets here"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"material")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"underlaycolor"},(0,l.kt)("inlineCode",{parentName:"h3"},"underlayColor")),(0,l.kt)("p",null,"underlayColor for press event"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"icon color")))))}s.isMDXComponent=!0}}]);