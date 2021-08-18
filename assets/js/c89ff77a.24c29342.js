"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6402,2733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),k=l,g=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4691:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>c,toc:()=>s,default:()=>k});var a=n(2122),l=n(9756),i=(n(7294),n(3905)),r=n(6470),o=["components"],p={id:"dialog",title:"Dialog"},d=void 0,c={unversionedId:"dialog",id:"version-3.4.2/dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. You can wrap any component with a simple Dialog component to display quick information to the user.",source:"@site/versioned_docs/version-3.4.2/dialog.md",sourceDirName:".",slug:"/dialog",permalink:"/docs/dialog",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/dialog.md",version:"3.4.2",frontMatter:{id:"dialog",title:"Dialog"}},s=[{value:"Usage",id:"usage",children:[]}],m={toc:s};function k(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. You can wrap any component with a simple Dialog component to display quick information to the user."),(0,i.kt)("div",{className:"component-preview component-preview--grid component-preview--grid-3"},(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/img/dialog/dialog--simple.jpg",alt:"Simple Dialog"}),(0,i.kt)("figcaption",null,"Simple")),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/img/dialog/dialog--multi.jpg",alt:"Multi Action Dialog"}),(0,i.kt)("figcaption",null,"Multi Action")),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/img/dialog/dialog--noaction.jpg",alt:"Buttonless Dialog"}),(0,i.kt)("figcaption",null,"No Action"))),(0,i.kt)("div",{className:"component-preview component-preview--grid component-preview--grid-3"},(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/img/dialog/dialog--loading.gif",alt:"Loading Dialog"}),(0,i.kt)("figcaption",null,"Loading")),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/img/dialog/dialog--custom1.gif",alt:"Custom Multi Action"}),(0,i.kt)("figcaption",null,"Custom Multi Action")),(0,i.kt)("figure",null,(0,i.kt)("img",{src:"/img/dialog/dialog--custom2.gif",alt:"Custom No Action"}),(0,i.kt)("figcaption",null,"Custom No Action"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport { View, Text } from \'react-native\';\nimport { Dialog, Button } from \'react-native-elements\';\n\nconst DialogExample = () => {\n  const [visible1, setVisible1] = useState(false);\n  const [visible2, setVisible2] = useState(false);\n  const [visible3, setVisible3] = useState(false);\n\n  const toggleDialog1 = () => {\n    setVisible1(!visible1);\n  };\n  const toggleDialog2 = () => {\n    setVisible2(!visible2);\n  };\n  const toggleDialog3 = () => {\n    setVisible3(!visible3);\n  };\n\n  return (\n    <View>\n      <Button title="Open Simple Dialog" onPress={toggleDialog1} />\n      <Button\n        title="Open Mutli Action Dialog"\n        onPress={toggleDialog2}\n        buttonStyle={styles.button}\n      />\n      <Button\n        title="Open Loading Dialog"\n        onPress={toggleDialog3}\n        buttonStyle={styles.button}\n      />\n      // Simple Dialog\n      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>\n        <Dialog.Title title="Dialog Title" />\n        <Text>Dialog body text. Add relevant information here.</Text>\n      </Dialog>\n      // Multi-Action Dialog\n      <Dialog isVisible={visible2} onBackdropPress={toggleDialog2}>\n        <Dialog.Title title="Dialog Title" />\n        <Text>Dialog body text. Add relevant information here.</Text>\n        <Dialog.Actions>\n          <Dialog.Button\n            title="ACTION 1"\n            onPress={() => console.log(\'Primary Action Clicked!\')}\n          />\n          <Dialog.Button\n            title="ACTION 2"\n            onPress={() => console.log(\'Secondary Action Clicked!\')}\n          />\n        </Dialog.Actions>\n      </Dialog>\n      // Loading Dialog\n      <Dialog isVisible={visible3} onBackdropPress={toggleDialog3}>\n        <Dialog.Loading />\n      </Dialog>\n    </View>\n  );\n};\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Web-platform specific note:"),(0,i.kt)("p",{parentName:"blockquote"},"You ",(0,i.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,i.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,i.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,i.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,i.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Dialog ModalComponent={Modal} ... />\n...\n")),(0,i.kt)("hr",null),(0,i.kt)(r.default,{mdxType:"Props"}),(0,i.kt)("hr",null))}k.isMDXComponent=!0},6470:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>d,toc:()=>c,default:()=>m});var a=n(2122),l=n(9756),i=(n(7294),n(3905)),r=["components"],o={},p=void 0,d={unversionedId:"props/dialog",id:"version-3.4.2/props/dialog",isDocsHomePage:!1,title:"dialog",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/dialog.md",sourceDirName:"props",slug:"/props/dialog",permalink:"/docs/props/dialog",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/dialog.md",version:"3.4.2",frontMatter:{}},c=[{value:"Props",id:"props",children:[]},{value:"Child Components",id:"child-components",children:[{value:"Dialog.Title",id:"dialogtitle",children:[]},{value:"Dialog.Loading",id:"dialogloading",children:[]},{value:"Dialog.Actions",id:"dialogactions",children:[]},{value:"Dialog.Button",id:"dialogbutton",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>isVisible</code>",id:"isvisible",children:[]},{value:"<code>loadingStyle</code>",id:"loadingstyle",children:[]},{value:"<code>loadingProps</code>",id:"loadingprops",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleStyle</code>",id:"titlestyle",children:[]},{value:"<code>titleProps</code>",id:"titleprops",children:[]},{value:"<code>onBackdropPress</code>",id:"onbackdroppress",children:[]},{value:"<code>overlayStyle</code>",id:"overlaystyle",children:[]},{value:"<code>theme</code>",id:"theme",children:[]},{value:"<code>children</code>",id:"children",children:[]}]}],s={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Also receives all\n",(0,i.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/docs/overlay#props"},"Overlay")," props except ",(0,i.kt)("inlineCode",{parentName:"p"},"fullscreen"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#isvisible"},(0,i.kt)("inlineCode",{parentName:"a"},"isVisible"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#loadingStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"loadingStyle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#loadingProps"},(0,i.kt)("inlineCode",{parentName:"a"},"loadingProps"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#onBackdropPress"},(0,i.kt)("inlineCode",{parentName:"a"},"onBackdropPress"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overlayStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"overlayStyle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#theme"},(0,i.kt)("inlineCode",{parentName:"a"},"theme"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#children"},(0,i.kt)("inlineCode",{parentName:"a"},"children")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"child-components"},"Child Components"),(0,i.kt)("h3",{id:"dialogtitle"},"Dialog.Title"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#title"},(0,i.kt)("inlineCode",{parentName:"a"},"title"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#titleStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"titleStyle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#titleProps"},(0,i.kt)("inlineCode",{parentName:"a"},"titleProps")))),(0,i.kt)("h3",{id:"dialogloading"},"Dialog.Loading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#loadingStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"loadingStyle"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#loadingProps"},(0,i.kt)("inlineCode",{parentName:"a"},"loadingProps")))),(0,i.kt)("h3",{id:"dialogactions"},"Dialog.Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#children"},(0,i.kt)("inlineCode",{parentName:"a"},"children")))),(0,i.kt)("h3",{id:"dialogbutton"},"Dialog.Button"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Receives all ",(0,i.kt)("a",{parentName:"p",href:"/docs/props/button#props"},"Button")," props.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"isvisible"},(0,i.kt)("inlineCode",{parentName:"h3"},"isVisible")),(0,i.kt)("p",null,"If true, the dialog is visible"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadingstyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"loadingStyle")),(0,i.kt)("p",null,"Add additional styling for loading component (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"View style (object)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loadingprops"},(0,i.kt)("inlineCode",{parentName:"h3"},"loadingProps")),(0,i.kt)("p",null,"Add additional props for ActivityIndicator component (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"{",(0,i.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/activityindicator#props"},"...ActivityIndicator props"),"}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Internal object")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h3"},"title")),(0,i.kt)("p",null,"Dialog title (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"titlestyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"titleStyle")),(0,i.kt)("p",null,"Add additional styling for title component (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Text style (object)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"titleprops"},(0,i.kt)("inlineCode",{parentName:"h3"},"titleProps")),(0,i.kt)("p",null,"Add additional props for Text component (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"{",(0,i.kt)("a",{parentName:"td",href:"https://reactnative.dev/docs/text#props"},"...Text props"),"}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onbackdroppress"},(0,i.kt)("inlineCode",{parentName:"h3"},"onBackdropPress")),(0,i.kt)("p",null,"Handler for backdrop press"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"overlaystyle"},(0,i.kt)("inlineCode",{parentName:"h3"},"overlayStyle")),(0,i.kt)("p",null,"Add dditional styling to the internal Overlay component (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"View Style (object)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Internal Style")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"theme"},(0,i.kt)("inlineCode",{parentName:"h3"},"theme")),(0,i.kt)("p",null,"Provides a theme to the dialog. (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Theme(Primary)")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"children"},(0,i.kt)("inlineCode",{parentName:"h3"},"children")),(0,i.kt)("p",null,"Enclosed components. (optional)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"React Element"),(0,i.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);