"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9364,9596,1353],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=p(n),s=l,c=k["".concat(i,".").concat(s)]||k[s]||m[s]||r;return n?a.createElement(c,o(o({ref:e},d),{},{components:n})):a.createElement(c,o({ref:e},d))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,o[1]=u;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},203:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>d,toc:()=>m,default:()=>s});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),o=n(139),u=["components"],i={id:"buttongroup",title:"ButtonGroup",slug:"/buttongroup"},p=void 0,d={unversionedId:"main/buttongroup",id:"main/buttongroup",isDocsHomePage:!1,title:"ButtonGroup",description:"ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.",source:"@site/docs/main/ButtonGroup.md",sourceDirName:"main",slug:"/buttongroup",permalink:"/docs/next/buttongroup",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/ButtonGroup.md",version:"current",frontMatter:{id:"buttongroup",title:"ButtonGroup",slug:"/buttongroup"},sidebar:"docs",previous:{title:"Button",permalink:"/docs/next/button"},next:{title:"Card",permalink:"/docs/next/card"}},m=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[{value:"ButtonGroup",id:"buttongroup",children:[]}]},{value:"Reference",id:"reference",children:[{value:"ButtonGroup",id:"buttongroup-1",children:[]}]}],k={toc:m};function s(t){var e=t.components,n=(0,l.Z)(t,u);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action."),(0,r.kt)("p",null,"Use a ButtonGroup to offer choices that are closely related but mutually exclusive."),(0,r.kt)("p",null,"This component inherits ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/touchablehighlight.html"},"all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.default,{mdxType:"Usage"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"buttongroup"},"ButtonGroup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#component"},"Component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#activeopacity"},"activeOpacity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#button"},"button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttoncontainerstyle"},"buttonContainerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttonstyle"},"buttonStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#buttons"},"buttons")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabled"},"disabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledselectedstyle"},"disabledSelectedStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledselectedtextstyle"},"disabledSelectedTextStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledstyle"},"disabledStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabledtextstyle"},"disabledTextStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#innerborderstyle"},"innerBorderStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onhideunderlay"},"onHideUnderlay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onpress"},"onPress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onshowunderlay"},"onShowUnderlay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectmultiple"},"selectMultiple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedbuttonstyle"},"selectedButtonStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedindex"},"selectedIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedindexes"},"selectedIndexes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#selectedtextstyle"},"selectedTextStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setopacityto"},"setOpacityTo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#textstyle"},"textStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#underlaycolor"},"underlayColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#vertical"},"vertical"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"buttongroup-1"},"ButtonGroup"),(0,r.kt)("h4",{id:"component"},"Component"),(0,r.kt)("p",null,"Choose other button component such as TouchableOpacity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React Component"),(0,r.kt)("td",{parentName:"tr",align:null},"(ios),(android),(web),TouchableNativeFeedback(")))),(0,r.kt)("p",null,"android),TouchableOpacity(\ndefault),undefined(\n) |"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"activeopacity"},"activeOpacity"),(0,r.kt)("p",null,"Add active opacity to the button in buttongroup."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"button"},"button"),(0,r.kt)("p",null,"Button for the component."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"buttoncontainerstyle"},"buttonContainerStyle"),(0,r.kt)("p",null,"Specify styling for button containers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"buttonstyle"},"buttonStyle"),(0,r.kt)("p",null,"Specify styling for button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"buttons"},"buttons"),(0,r.kt)("p",null,"Array of buttons for component (required), if returning a component, must be an object with { element: componentName }."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any[]"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Specify styling for main button container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabled"},"disabled"),(0,r.kt)("p",null,"Controls if buttons are disabled. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," makes all of them disabled, while using an array only makes those indices disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean or number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledselectedstyle"},"disabledSelectedStyle"),(0,r.kt)("p",null,"Styling for each selected button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledselectedtextstyle"},"disabledSelectedTextStyle"),(0,r.kt)("p",null,"Styling for the text of each selected button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledstyle"},"disabledStyle"),(0,r.kt)("p",null,"Styling for each button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabledtextstyle"},"disabledTextStyle"),(0,r.kt)("p",null,"Styling for the text of each button when disabled."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"innerborderstyle"},"innerBorderStyle"),(0,r.kt)("p",null,"Update the styling of the interior border of the list of buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{ color?: string; width?: number; }"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onhideunderlay"},"onHideUnderlay"),(0,r.kt)("p",null,"Function called on hiding underlay."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onpress"},"onPress"),(0,r.kt)("p",null,"Method to update Button Group Index."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(...args: any[]) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Function")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onshowunderlay"},"onShowUnderlay"),(0,r.kt)("p",null,"Function called on showing underlay."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectmultiple"},"selectMultiple"),(0,r.kt)("p",null,"Allows the user to select multiple buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedbuttonstyle"},"selectedButtonStyle"),(0,r.kt)("p",null,"Specify styling for selected button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedindex"},"selectedIndex"),(0,r.kt)("p",null,"Current selected index of array of buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedindexes"},"selectedIndexes"),(0,r.kt)("p",null,"Current selected indexes from the array of buttons."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number[]"),(0,r.kt)("td",{parentName:"tr",align:null},"[]")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"selectedtextstyle"},"selectedTextStyle"),(0,r.kt)("p",null,"Specify specific styling for text in the selected state."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"setopacityto"},"setOpacityTo"),(0,r.kt)("p",null,"Funtion to set the opacity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"textstyle"},"textStyle"),(0,r.kt)("p",null,"Specify specific styling for text."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"underlaycolor"},"underlayColor"),(0,r.kt)("p",null,"Specify underlayColor for TouchableHighlight."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Color(Primary)")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"vertical"},"vertical"),(0,r.kt)("p",null,"Display the ButtonGroup vertically."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null))}s.isMDXComponent=!0},139:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>d,toc:()=>m,default:()=>s});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),o=n(5607),u=["components"],i={},p=void 0,d={unversionedId:"main/usage/ButtonGroup/ButtonGroup",id:"main/usage/ButtonGroup/ButtonGroup",isDocsHomePage:!1,title:"ButtonGroup",description:"Using components",source:"@site/docs/main/usage/ButtonGroup/ButtonGroup.md",sourceDirName:"main/usage/ButtonGroup",slug:"/main/usage/ButtonGroup/ButtonGroup",permalink:"/docs/next/main/usage/ButtonGroup/ButtonGroup",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/ButtonGroup/ButtonGroup.md",version:"current",frontMatter:{}},m=[{value:"Using components",id:"using-components",children:[]}],k={toc:m};function s(t){var e=t.components,n=(0,l.Z)(t,u);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(o.default,{mdxType:"Snack"}),(0,r.kt)("h3",{id:"using-components"},"Using components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nconst component1 = () => <Text>Hello</Text>\nconst component2 = () => <Text>World</Text>\nconst component3 = () => <Text>ButtonGroup</Text>\n\nrender () {\n  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]\n  const { selectedIndex } = this.state\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}} />\n  )\n}\n")))}s.isMDXComponent=!0},5607:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>u,contentTitle:()=>i,metadata:()=>p,toc:()=>d,default:()=>k});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),o=["components"],u={},i=void 0,p={unversionedId:"main/usage/ButtonGroup/snack/index",id:"main/usage/ButtonGroup/snack/index",isDocsHomePage:!1,title:"index",description:"`SnackPlayer name=RNE ButtonGroup",source:"@site/docs/main/usage/ButtonGroup/snack/index.md",sourceDirName:"main/usage/ButtonGroup/snack",slug:"/main/usage/ButtonGroup/snack/index",permalink:"/docs/next/main/usage/ButtonGroup/snack/index",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/ButtonGroup/snack/index.md",version:"current",frontMatter:{}},d=[],m={toc:d};function k(t){var e=t.components,n=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE ButtonGroup","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BuseState%7D%20from%20'react'%0Aimport%20%7B%20ButtonGroup%20%7D%20from%20'react-native-elements'%0Aimport%20%7B%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default()%20%3D%3E%20%7B%0A%20%20const%20%5BselectedIndex%2C%20setSelectedIndex%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BselectedIndexes%2C%20setSelectedIndexes%5D%20%3D%20useState(%5B0%2C%202%2C%203%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Strings%3C%2FText%3E%0A%20%20%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20%20%20buttons%3D%7B%5B'SIMPLE'%2C%20'BUTTON'%2C%20'GROUP'%5D%7D%0A%20%20%20%20%20%20%20%20selectedIndex%3D%7BselectedIndex%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setSelectedIndex(value)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20%20%20buttons%3D%7B%5B'Multiple'%2C%20'Select'%2C%20'Button'%2C%20'Group'%5D%7D%0A%20%20%20%20%20%20%20%20selectMultiple%0A%20%20%20%20%20%20%20%20selectedIndexes%3D%7BselectedIndexes%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setSelectedIndexes(value)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Components%3C%2FText%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}k.isMDXComponent=!0}}]);