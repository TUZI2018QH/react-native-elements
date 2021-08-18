"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6103],{6165:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(9756),l=a(7294),r=a(6010),i=a(95),s=a(6742);const o="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";var v=a(4973);function p(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(o,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var E=a(571),h=["sidebar","toc","children"];const b=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,n.Z)(e,h),c=t&&t.items.length>0;return l.createElement(i.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},c&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":c,"col--9 col--offset-1":!c})},s),a&&l.createElement("div",{className:"col col--2"},l.createElement(E.Z,{toc:a})))))}},3146:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),l=a(6010),r=a(3905),i=a(4973),s=a(6742),o=a(3018),c=a(637),m=a(1217),d=a(6146);const u="blogPostTitle_GeHD",g="blogPostData_291c",v="blogPostDetailsFull_3kfx";const p=function(e){var t,a,p,E=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=e.children,b=e.frontMatter,f=e.metadata,_=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=f.date,T=f.formattedDate,I=f.permalink,w=f.tags,L=f.readingTime,P=f.title,x=f.editUrl,C=b.author,y=b.image,M=b.keywords,R=b.author_url||b.authorURL,A=b.author_title||b.authorTitle,B=b.author_image_url||b.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:M,image:y}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(p=Z?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:u},Z?P:n.createElement(s.Z,{to:I},P)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},T),L&&n.createElement(n.Fragment,null," \xb7 ",E(L))),n.createElement("div",{className:"avatar margin-vert--md"},B&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:R},n.createElement("img",{src:B,alt:C})),n.createElement("div",{className:"avatar__intro"},C&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:R},C)),n.createElement("small",{className:"avatar__subtitle"},A)))))),n.createElement("div",{className:"markdown"},n.createElement(r.Zo,{components:c.Z},h)),(w.length>0||_)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(t={},t[v]=Z,t))},w.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var t=e.label,a=e.permalink;return n.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:x})),!Z&&_&&n.createElement("div",{className:"col text--right"},n.createElement(s.Z,{to:f.permalink,"aria-label":"Read more about "+P},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4147:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(7294),l=a(6165),r=a(3146),i=a(4973),s=a(6742);const o=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(3018);const m=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,s=t.metadata,m=s.title,d=s.description,u=s.nextItem,g=s.prevItem,v=i.hide_table_of_contents;return n.createElement(l.Z,{title:m,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:a,toc:!v&&t.toc?t.toc:void 0},n.createElement(r.Z,{frontMatter:i,metadata:s,isBlogPostPage:!0},n.createElement(t,null)),(u||g)&&n.createElement(o,{nextItem:u,prevItem:g}))}},6146:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(4973),r=a(2122),i=a(9756),s=a(6010);const o="iconEdit_2_ui";var c=["className"];const m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:(e,t,a)=>{a.d(t,{r:()=>o,Z:()=>c});var n=a(7294),l=a(6010);const r=function(e,t,a){var l=(0,n.useState)(void 0),r=l[0],i=l[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,s=!1,o=document.getElementsByClassName(e);l<o.length&&!s;){var c=o[l],m=c.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),c.classList.add(t),i(c),s=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E";var s="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}const c=function(e){var t=e.toc;return r(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);