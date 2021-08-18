"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7569,1750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>D,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},A=Object.keys(e);for(r=0;r<A.length;r++)a=A[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)a=A[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},D=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,A=e.originalType,c=e.parentName,D=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,p=d["".concat(c,".").concat(u)]||d[u]||l[u]||A;return a?r.createElement(p,o(o({ref:t},D),{},{components:a})):r.createElement(p,o({ref:t},D))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var A=a.length,o=new Array(A);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<A;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2416:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>D,toc:()=>l,default:()=>u});var r=a(2122),n=a(9756),A=(a(7294),a(3905)),o=a(9172),i=["components"],c={},s=void 0,D={unversionedId:"main/usage/Avatar/Avatar",id:"main/usage/Avatar/Avatar",isDocsHomePage:!1,title:"Avatar",description:"",source:"@site/docs/main/usage/Avatar/Avatar.md",sourceDirName:"main/usage/Avatar",slug:"/main/usage/Avatar/Avatar",permalink:"/docs/next/main/usage/Avatar/Avatar",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Avatar/Avatar.md",version:"current",frontMatter:{}},l=[],d={toc:l};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,A.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,A.kt)(o.default,{mdxType:"Snack"}))}u.isMDXComponent=!0},9172:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>s,toc:()=>D,default:()=>d});var r=a(2122),n=a(9756),A=(a(7294),a(3905)),o=["components"],i={},c=void 0,s={unversionedId:"main/usage/Avatar/snack/index",id:"main/usage/Avatar/snack/index",isDocsHomePage:!1,title:"index",description:"`SnackPlayer name=RNE Avatar",source:"@site/docs/main/usage/Avatar/snack/index.md",sourceDirName:"main/usage/Avatar/snack",slug:"/main/usage/Avatar/snack/index",permalink:"/docs/next/main/usage/Avatar/snack/index",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Avatar/snack/index.md",version:"current",frontMatter:{}},D=[],l={toc:D};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,A.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("div",{className:"snack-player","data-snack-name":"RNE Avatar","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Avatar%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20AvatarData%20%3D%20%7B%0A%20%20image_url%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20AvatarData%5B%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20image_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2F6MWH9Xi_.jpg'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20image_url%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F36.jpg'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20image_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2019%2F11%2F03%2F20%2F11%2Fportrait-4599553__340.jpg'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20image_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F09%2F17%2F20%2F03%2Fprofile-449912__340.jpg'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20image_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2020%2F09%2F18%2F05%2F58%2Flights-5580916__340.jpg'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20image_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F11%2F21%2F12%2F42%2Fbeard-1845166_1280.jpg'%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Atype%20AvatarComponentProps%20%3D%20%7B%7D%3B%0A%0AArray.prototype.chunk%20%3D%20function%20(%20n%20)%20%7B%0A%20%20%20%20if%20(%20!this.length%20)%20%7B%0A%20%20%20%20%20%20%20%20return%20%5B%5D%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20%5B%20this.slice(%200%2C%20n%20)%20%5D.concat(%20this.slice(n).chunk(n)%20)%3B%0A%7D%3B%0A%0Aconst%20Avatars%3A%20React.FunctionComponent%3CAvatarComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EImage%20Avatars%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%7BdataList.chunk(3).map((chunk%2C%20chunkIndex)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7Bl.image_url%20%3F%20%7B%20uri%3A%20l.image_url%20%7D%20%3A%20%7B%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EIcon%20Avatars%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'pencil'%2C%20type%3A%20'font-awesome'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%236733b9'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'rowing'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%2300a7f7'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'heartbeat'%2C%20type%3A%20'font-awesome'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%23eb1561'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'extension'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'material'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'%23cdde20'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'grey'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderStyle%3A%20'solid'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'apartment'%2C%20type%3A%20'material'%2C%20color%3A%20'%23009688'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'grey'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderStyle%3A%20'solid'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'backup'%2C%20type%3A%20'material'%2C%20color%3A%20'%23ff5606'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'grey'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderStyle%3A%20'solid'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3ELetter%20Avatars%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Fc%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'%233d4db7'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22P%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'coral'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Rd%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'purple'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EBadged%20Avatars%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'adb'%2C%20type%3A%20'material'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'orange'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar.Accessory%20size%3D%7B24%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B64%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F57.jpg'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Bj%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'grey'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar.Accessory%20size%3D%7B23%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FAvatar%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)%0A%0Aexport%20default%20Avatars%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);