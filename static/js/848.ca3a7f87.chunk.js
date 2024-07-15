"use strict";(self.webpackChunkslim=self.webpackChunkslim||[]).push([[848],{5399:function(e,r,t){t.d(r,{Z:function(){return c}});var a="ErrorMessage_errorMessageBlock__6NGFY",n="ErrorMessage_errorMessageTitle__gIqHi",s="ErrorMessage_errorMessageText__TKpdd",l=t(4668),o=t(184),i=function(e){var r=e.status;return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("div",{className:l.Z.boo,children:(0,o.jsx)("div",{className:l.Z.face,id:"face"})}),(0,o.jsx)("p",{className:n,children:"Something went wrong..."}),(0,o.jsx)("p",{className:s,children:r})]})},c=i;i.defaultProps={status:{}}},3713:function(e,r,t){t.d(r,{Z:function(){return l}});var a=t(2791),n={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"},s=t(184),l=function(e){var r=e.setModalOpen,t=e.overlayClass,l=void 0===t?"overlay":t,o=e.modalClass,i=void 0===o?"modal":o,c=e.children;function d(){document.querySelector("body").classList.remove("no-scroll")}(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&(d(),r(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[r]);var u=function(){d(),r(!1)};return(0,s.jsx)("div",{className:n[l],onClick:function(e){e.target===e.currentTarget&&(d(),r(!1))},children:(0,s.jsxs)("div",{className:n[i],children:[(0,s.jsx)("div",{className:n.mobileClose,children:(0,s.jsx)("span",{onClick:u,className:n.closeM})}),(0,s.jsx)("span",{onClick:u,className:n.closeOther}),c]})})}},9833:function(e,r,t){t.d(r,{Z:function(){return s}});var a={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb Button_btn__cIIwi",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},n=t(184),s=function(e){var r=e.text,t=void 0===r?"+":r,s=e.type,l=void 0===s?"submit":s,o=e.btnClass,i=void 0===o?"btnPlus":o,c=e.handleClick;return(0,n.jsx)("button",{className:a[i],onClick:c,type:l,children:t})}},4834:function(e,r,t){t.d(r,{Z:function(){return a.Z}});var a=t(9833)},8704:function(e,r,t){t.d(r,{E:function(){return a}});var a={name:{name:"name",type:"text",placeholder:"Name*",title:"The name must be at least 3 characters long",required:!0},email:{name:"email",type:"text",placeholder:"Email*",required:!0},password:{name:"password",type:"password",placeholder:"Password (at least 8 characters)*",required:!0,title:"The password must be at least 8 characters long"},height:{name:"height",type:"text",placeholder:"Height (100-250 cm)*",required:!0,title:"Enter a valid integer from 100 to 250 cm."},age:{name:"age",type:"text",placeholder:"Age (18-100 y)*",required:!0,title:"Enter a valid number from 18 to 100 years."},weight:{name:"weight",type:"text",placeholder:"Current weight (20-250 kg)*",required:!0,title:"Enter a valid integer from 20 to 250 kg."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"Desired weight (20-200 kg)*",required:!0,title:"Enter a valid integer from 20 to 200 kg."},bloodType:{name:"bloodType",type:"text",placeholder:"Blood type*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"Filter by name"}}},2566:function(e,r,t){t.d(r,{Z:function(){return l}});var a="TextFieldDefault_input__TN7oB",n=t(184),s=function(e){var r=e.type,t=e.name,s=e.value,l=e.handleChange,o=e.placeholder,i=e.required,c=e.pattern,d=e.title,u=e.disabled;return(0,n.jsx)("label",{children:(0,n.jsx)("input",{className:a,type:r,name:t,value:s,onChange:l,placeholder:o,required:i,pattern:c,title:d,disabled:u})})},l=s;s.defaultProps={type:"text",required:!1}},7858:function(e,r,t){t.d(r,{Z:function(){return v}});var a=t(1413),n=t(9439),s=t(9434),l=t(2791),o=t(6382),i={container_sidebar:"SideBar_container_sidebar__YEww0",sum:"SideBar_sum__Jv1xj",title_sidebar:"SideBar_title_sidebar__7GDyI",list_sidebar:"SideBar_list_sidebar__NYb3c",item_sidebar:"SideBar_item_sidebar__lDXgx",text_sidebar_food:"SideBar_text_sidebar_food__Pg58D",food:"SideBar_food__eIk0d",menuGroupList:"SideBar_menuGroupList__Xvf-8",menuGroupItems:"SideBar_menuGroupItems__PYGmW",block_sum:"SideBar_block_sum__hMZB0"},c=t(2566),d=t(8704),u=t(6730),m=t(9869),h=t(8712),_=function(e){return e.dairyCalendar.date},f=t(184),v=function(){var e=(0,s.v9)(_),r=(0,s.v9)(m.U6),t=(0,s.v9)(u.M7),v=(0,s.v9)(u.SP),y=(0,s.v9)(u.vO),x=(0,s.v9)(u.TW),p=(0,s.v9)(u.jj),j=(0,s.v9)(u.Wm),g=(0,s.v9)(u.oj),b=(0,s.v9)(u.EI),N=(0,s.v9)(u.Dk),D=(0,s.I0)(),P=(0,l.useState)([]),w=(0,n.Z)(P,2),M=w[0],C=w[1];(0,l.useEffect)((function(){e&&(D((0,h.Wd)({date:e})),D((0,h.YL)()))}),[D,e]),(0,l.useEffect)((function(){r&&C(r)}),[r]);return(0,f.jsxs)("div",{className:i.container_sidebar,children:[(0,f.jsxs)("div",{className:i.block_sum,children:[(0,f.jsxs)("div",{className:i.sum,children:[(0,f.jsx)("h3",{className:i.title_sidebar,children:"Average for the entire period"}),(0,f.jsxs)("ul",{className:i.list_sidebar,children:[(0,f.jsxs)("li",{className:i.item_sidebar,children:[(0,f.jsx)("p",{className:i.text_sidebar_sum,children:"It's left"}),(0,f.jsx)("span",{className:i.data,children:N.kcalLeft?Math.floor(N.kcalLeft)+" kcal":p?Math.floor(p)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:i.item_sidebar,children:[(0,f.jsx)("p",{className:i.text_sidebar,children:"It was consumed"}),(0,f.jsx)("span",{className:i.data,children:N.kcalConsumed?Math.floor(N.kcalConsumed)+" kcal":j?Math.floor(j)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:i.item_sidebar,children:[(0,f.jsx)("p",{className:i.text_sidebar,children:"Daily norm"}),(0,f.jsx)("span",{className:i.data,children:N.dailyRate?Math.floor(N.dailyRate)+" kcal":g?Math.floor(g)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:i.item_sidebar,children:[(0,f.jsx)("p",{className:i.text_sidebar,children:"% of the norm"}),(0,f.jsx)("span",{className:i.data,children:N.percentsOfDailyRate?Math.floor(100*N.percentsOfDailyRate)+" %":b?Math.floor(b)+" %":"0 %"})]})]})]}),(0,f.jsxs)("div",{className:i.sum,children:[(0,f.jsxs)("h3",{className:i.title_sidebar,children:["Summary for ",e]}),(0,f.jsxs)("ul",{className:i.list_sidebar,children:[(0,f.jsxs)("li",{className:i.item_sidebar,children:[(0,f.jsx)("p",{className:i.text_sidebar_sum,children:"It's left"}),(0,f.jsx)("span",{className:i.data,children:t?Math.floor(t)+" kcal":p?Math.floor(p)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:i.item_sidebar,children:[(0,f.jsx)("p",{className:i.text_sidebar,children:"It was consumed"}),(0,f.jsx)("span",{className:i.data,children:v?Math.floor(v)+" kcal":j?Math.floor(j)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:i.item_sidebar,children:[(0,f.jsx)("p",{className:i.text_sidebar,children:"Daily norm"}),(0,f.jsx)("span",{className:i.data,children:y?Math.floor(y)+" kcal":g?Math.floor(g)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:i.item_sidebar,children:[(0,f.jsx)("p",{className:i.text_sidebar,children:"% of the norm"}),(0,f.jsx)("span",{className:i.data,children:x?Math.floor(x)+" %":b?Math.floor(b)+" %":"0 %"})]})]})]})]}),(0,f.jsxs)("div",{className:i.food,children:[(0,f.jsx)("h3",{className:i.title_sidebar,children:"Not recommended food"}),(null===r||void 0===r?void 0:r.length)>0&&(0,f.jsx)(c.Z,(0,a.Z)({handleChange:function(e){var t=r.filter((function(r){return r.toLowerCase().includes(e.target.value.toLowerCase())}));C(t)}},d.E.filter)),(null===r||void 0===r?void 0:r.length)>0&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ol",{className:i.menuGroupList,children:M.map((function(e){return(0,f.jsx)("li",{className:i.menuGroupItems,children:e},(0,o.x0)())}))})}),0===(null===r||void 0===r?void 0:r.length)&&(0,f.jsx)("p",{className:i.text_sidebar_food,children:"Not recommended will be here."})]})]})}},848:function(e,r,t){t.r(r),t.d(r,{default:function(){return qe}});var a,n,s,l=t(1413),o=t(9439),i=t(4805),c=t(2791),d=t(9434),u="DairyPage_wrapper__INA+u",m="DairyPage_overlay__EsMgn",h="DairyPage_itemBlock__-apXm",_="DairyPage_btn__LEm1h",f=t(7858),v=t(4834),y=t(1134),x=t(5970),p="DiaryAddProductForm_form__72n0e",j="DiaryAddProductForm_btn__Z0Nm7",g="DiaryAddProductForm_overlayLabel__2pr0E",b="DiaryAddProductForm_errorOverlay__oJw8d",N="DiaryAddProductForm_errorMessage__qgNon",D=t(9833),P=t(3713),w=t(5399),M="DiaryChooseProductList_overlay__5XlnC",C="DiaryChooseProductList_headTitle__LPGci",k="DiaryChooseProductList_list__ccqab",S="DiaryChooseProductList_item__IKqKE",I="DiaryChooseProductList_wrapper__FUGQF",O="DiaryChooseProductList_title__Fgj-Y",L="DiaryChooseProductList_weight__h+CuP",F="DiaryChooseProductList_kcal__eIhYW",E=t(5748),Z="LoaderMini_loader__7crKR",B=t(184),q=function(){return(0,B.jsx)("div",{className:Z,children:(0,B.jsx)(E.iT,{height:"50",width:"50",color:"#fc842d",secondaryColor:"transparent"})})},T=function(e){return e.product.items},W=function(e){return e.product.loading},A=function(e){return e.product.error},G=function(e){return e.product.message},R=t(8712);function Q(e){var r=e.handleClickClose,t=e.setModalOpen,a=(0,d.I0)(),n=(0,i.useMediaQuery)({maxWidth:767}),s=(0,c.useState)(!1),u=(0,o.Z)(s,2),m=u[0],h=u[1],_=(0,d.v9)(T),f=(0,d.v9)((function(e){return e.dairyCalendar})),v=(0,d.v9)(W);return(0,B.jsx)(B.Fragment,{children:!0===v?(0,B.jsx)(q,{}):(0,B.jsx)(B.Fragment,{children:!m&&(0,B.jsxs)("div",{className:M,children:[(0,B.jsx)("h2",{className:C,children:"Select a product:"}),(0,B.jsx)("ul",{className:k,children:_.map((function(e){var s=e._id,o=e.title,i=e.calories,c=e.weight;return(0,B.jsxs)("li",{className:S,onClick:function(){return e=s,a((0,R.sL)((0,l.Z)((0,l.Z)({},f),{},{productId:e}))),h(!1),r(!1),void(n&&(t(!1),document.querySelector("body").classList.remove("no-scroll")));var e},children:[(0,B.jsxs)("p",{className:O,children:[" ",o]}),(0,B.jsxs)("div",{className:I,children:[(0,B.jsxs)("p",{className:L,children:[c," g"]}),(0,B.jsxs)("p",{className:F,children:[i," kcal"]})]})]},s)}))})]})})})}var J=["title","titleId"];function X(){return X=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},X.apply(this,arguments)}function Y(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function z(e,r){var t=e.title,l=e.titleId,o=Y(e,J);return c.createElement("svg",X({width:12,height:12,fill:"#f84147",id:"icon-warning",viewBox:"0 0 32 32",ref:r,"aria-labelledby":l},o),t?c.createElement("title",{id:l},t):null,a||(a=c.createElement("path",{d:"M16 2.899l13.409 26.726h-26.819l13.409-26.726zM16 0c-0.69 0-1.379 0.465-1.903 1.395l-13.659 27.222c-1.046 1.86-0.156 3.383 1.978 3.383h27.166c2.134 0 3.025-1.522 1.978-3.383h0l-13.659-27.222c-0.523-0.93-1.213-1.395-1.903-1.395v0z"})),n||(n=c.createElement("path",{d:"M18 26c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"})),s||(s=c.createElement("path",{d:"M16 22c-1.105 0-2-0.895-2-2v-6c0-1.105 0.895-2 2-2s2 0.895 2 2v6c0 1.105-0.895 2-2 2z"})))}var V,U=c.forwardRef(z),K=(t.p,t(2566)),H=t(1286),$=t(1284),ee=function(e){var r=e.setModalOpen,t=(0,d.I0)(),a=(0,c.useState)(!1),n=(0,o.Z)(a,2),s=n[0],l=n[1],u=(0,i.useMediaQuery)({maxWidth:767}),m=(0,i.useMediaQuery)({minWidth:768}),h=(0,d.v9)(A),_=(0,y.cI)({defaultValues:{query:"",weight:""}}),f=_.control,v=_.handleSubmit,M=_.reset,C=_.formState.errors;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("form",{className:p,onSubmit:v((function(e,r){if(r.preventDefault(),t((0,H.A)(e.query)),t((0,$.nr)(Number(e.weight))),!0===s)return l(!1),l(!0),void M();l(!s),M()})),children:[(0,B.jsxs)("div",{className:g,children:[(0,B.jsx)(y.Qr,{control:f,name:"query",render:function(e){var r=e.field,t=r.onChange,a=r.value;return(0,B.jsx)(K.Z,{value:a,placeholder:"Product name",name:"query",control:f,handleChange:t})},rules:{required:"Enter the name of the product"}}),(0,B.jsx)(x.B,{errors:C,name:"query",render:function(e){var r=e.message;return(0,B.jsxs)("div",{className:b,children:[(0,B.jsx)(U,{}),(0,B.jsx)("p",{className:N,children:r})]})}})]}),(0,B.jsxs)("div",{className:g,children:[(0,B.jsx)(y.Qr,{control:f,name:"weight",render:function(e){var r=e.field,t=r.onChange,a=r.value;return(0,B.jsx)(K.Z,{value:a,placeholder:"Weight (g)",name:"weight",pattern:"[0-9]+",control:f,handleChange:t})},rules:{required:"Enter the product weight"}}),(0,B.jsx)(x.B,{errors:C,name:"weight",render:function(e){var r=e.message;return(0,B.jsxs)("div",{className:b,children:[(0,B.jsx)(U,{}),(0,B.jsx)("p",{className:N,children:r})]})}})]}),(0,B.jsxs)("div",{className:j,children:[u&&(0,B.jsx)(D.Z,{text:"Add",btnClass:"btn"}),m&&(0,B.jsx)(D.Z,{text:"+",btnClass:"btnPlus"})]})]}),s&&h&&(0,B.jsx)(P.Z,{setModalOpen:l,children:(0,B.jsx)(w.Z,{status:h.data.message})}),s&&(0,B.jsx)(Q,{setModalOpen:r,handleClickClose:function(e){l(e)}})]})},re={form:"DiaryCreateProductForm_form__mpG9o",btn:"DiaryCreateProductForm_btn__dJSjR",overlayLabel:"DiaryCreateProductForm_overlayLabel__ij84d",errorOverlay:"DiaryCreateProductForm_errorOverlay__0wfIG",errorMessage:"DiaryCreateProductForm_errorMessage__Cy3WI",title:"DiaryCreateProductForm_title__BhefZ",text_message:"DiaryCreateProductForm_text_message__haHA8"},te=t(9869),ae=t(3017),ne=function(){var e,r=(0,d.I0)(),t=(0,c.useState)(null),a=(0,o.Z)(t,2),n=a[0],s=a[1],l=(0,i.useMediaQuery)({maxWidth:767}),u=(0,i.useMediaQuery)({minWidth:768}),m=(0,d.v9)(te.Vg),h=(0,d.v9)(G),_=function(){s(null)};(0,c.useEffect)((function(){if(h){s(h);var e=setTimeout(_,5e3);return function(){clearTimeout(e)}}}),[h]);var f=(0,d.v9)(te.PR).userData;if(f&&Object.keys(f).length>0)e=f.bloodType;else{var v=JSON.parse(localStorage.getItem("user_".concat(m,"_userData")));e=v&&Object.keys(v).length>0?v.bloodType:{bloodType:null}}var p=(0,y.cI)({defaultValues:{query:"",calories:""}}),j=p.control,g=p.handleSubmit,b=p.reset,N=p.formState.errors,P=function(e){for(var r={},t=0;t<5;t++)t===parseInt(e)?r[t]=!1:r[t]=!0,0===t&&(r[t]=null);return r};return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)("div",{className:re.wrapper,children:[(0,B.jsx)("h3",{className:re.title,children:"Add a new product to the database"}),(0,B.jsxs)("form",{className:re.form,onSubmit:g((function(t,a){a.preventDefault();var n={weight:100,title:t.query,calories:t.calories,groupBloodNotAllowed:P(e),userId:m};r((0,H.x)(n)),r((0,ae.J)()),b()})),children:[(0,B.jsxs)("div",{className:re.overlayLabel,children:[(0,B.jsx)(y.Qr,{control:j,name:"query",render:function(e){var r=e.field,t=r.onChange,a=r.value;return(0,B.jsx)(K.Z,{value:a,placeholder:"Product Name",name:"query",control:j,handleChange:t})}}),(0,B.jsx)(x.B,{errors:N,name:"query",render:function(e){var r=e.message;return(0,B.jsxs)("div",{className:re.errorOverlay,children:[(0,B.jsx)(U,{}),(0,B.jsx)("p",{className:re.errorMessage,children:r})]})}})]}),(0,B.jsxs)("div",{className:re.overlayLabel,children:[(0,B.jsx)(y.Qr,{control:j,name:"calories",render:function(e){var r=e.field,t=r.onChange,a=r.value;return(0,B.jsx)(K.Z,{value:a,placeholder:"kcal/100 g",name:"calories",pattern:"[0-9]+",control:j,handleChange:t})}}),(0,B.jsx)(x.B,{errors:N,name:"calories",render:function(e){var r=e.message;return(0,B.jsxs)("div",{className:re.errorOverlay,children:[(0,B.jsx)(U,{}),(0,B.jsx)("p",{className:re.errorMessage,children:r})]})}})]}),n&&l&&(0,B.jsx)("p",{className:re.text_message,children:n}),(0,B.jsxs)("div",{className:re.btn,children:[l&&(0,B.jsx)(D.Z,{text:"Add",btnClass:"btn"}),u&&(0,B.jsx)(D.Z,{text:"+",btnClass:"btnPlus"})]})]}),n&&u&&(0,B.jsx)("p",{className:re.text_message,children:n})]})})},se=t(9513),le=t.n(se),oe=t(2426),ie=t.n(oe),ce=(t(8639),"DiaryDate\u0421alendar_btnInput__d0154"),de="DiaryDate\u0421alendar_dateOverlay__0WzDh",ue=function(){var e=(0,d.I0)(),r=(0,d.v9)((function(e){return e.dairyCalendar.date})),t=(0,c.useState)(!1),a=(0,o.Z)(t,2),n=a[0],s=a[1],l=(0,c.useState)(new Date),i=(0,o.Z)(l,2),u=i[0],m=i[1];(0,c.useEffect)((function(){e(r?(0,$.As)(r):(0,$.As)(ie()(new Date).format("yyyy-MM-DD")))}),[]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("button",{className:ce,onClick:function(e){e.preventDefault(),s(!n)},children:ie()(r).format("DD-MM-yyyy")}),n&&(0,B.jsx)("div",{className:de,children:(0,B.jsx)(le(),{selected:u,onChange:function(r){m(r),s(!n),e((0,$.As)(ie()(r).format("yyyy-MM-DD"))),e((0,R.Wd)({date:ie()(r).format("yyyy-MM-DD")}))},maxDate:new Date,inline:!0})})]})},me={list:"DiaryProductsList_list__Jc0Rv"},he="DiaryProductsListItem_item__9H0W0",_e="DiaryProductsListItem_myBloodIconFalse__cWmn-",fe="DiaryProductsListItem_myBloodIconTrue__gzeHT",ve="DiaryProductsListItem_wrapper__yx7FO",ye="DiaryProductsListItem_title__4RWxm",xe="DiaryProductsListItem_weight__PWfjZ",pe="DiaryProductsListItem_kcal__L0c3T",je="DiaryProductsListItem_btnRemove__ZDqSi",ge=["title","titleId"];function be(){return be=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},be.apply(this,arguments)}function Ne(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function De(e,r){var t=e.title,a=e.titleId,n=Ne(e,ge);return c.createElement("svg",be({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":a},n),t?c.createElement("title",{id:a},t):null,V||(V=c.createElement("path",{d:"m1 1 12 12M1 13 13 1",stroke:"#9B9FAA",strokeWidth:2})))}var Pe=c.forwardRef(De),we=(t.p,t(9135)),Me=t(6730),Ce=function(){var e,r=(0,d.I0)(),t=(0,d.v9)(Me.Ni),a=(0,d.v9)(te.Vg),n=(0,d.v9)(te.PR).userData;if(n&&Object.keys(n).length>0)e=n.bloodType;else{var s=JSON.parse(localStorage.getItem("user_".concat(a,"_userData")));e=s&&Object.keys(s).length>0?s.bloodType:{bloodType:null}}var l=function(r){return!r[e]};return(0,B.jsx)(B.Fragment,{children:t&&t.map((function(e){var t=e.id,a=e.title,n=e.weight,s=e.kcal,o=e.groupBloodNotAllowed;return(0,B.jsxs)("li",{className:he,children:[l(o)&&(0,B.jsx)(we.EXY,{className:fe,title:"The product is suitable for your blood type"}),!l(o)&&(0,B.jsx)(we.EXY,{className:_e,title:"The product is not suitable for your blood type"}),(0,B.jsx)("p",{className:ye,children:a}),(0,B.jsxs)("div",{className:ve,children:[(0,B.jsxs)("p",{className:xe,children:[n," g"]}),(0,B.jsxs)("p",{className:pe,children:[Math.round(s)," kcal"]})]}),(0,B.jsx)("button",{className:je,type:"button",onClick:function(){return function(e){r((0,R.gr)(e))}(t)},children:(0,B.jsx)(Pe,{})})]},t)}))})},ke=function(){var e=(0,d.v9)(Me.Cp);if(!0!==(0,d.v9)(W))return(0,B.jsx)(B.Fragment,{children:!0===e?(0,B.jsx)(q,{}):(0,B.jsx)("div",{className:me.overlay,children:(0,B.jsx)("ul",{className:me.list,children:(0,B.jsx)(Ce,{})})})})},Se=t(1087),Ie="GreetingForm_wrapper__JQQab",Oe="GreetingForm_title__Kdygm",Le="GreetingForm_text__xa0dR",Fe="GreetingForm_btn__IDzco",Ee="GreetingForm_btnGreeting__D3Zes";function Ze(){var e=(0,d.v9)(te.vW);return(0,B.jsxs)("div",{className:Ie,children:[(0,B.jsxs)("h1",{className:Oe,children:["Good day, ",e]}),(0,B.jsx)("p",{className:Le,children:"Our app offers you to follow a diet and calculate calories. Go to the calculator section and calculate the diet."}),(0,B.jsx)("div",{className:Fe,children:(0,B.jsx)(Se.rU,{to:"/calculator-calories",className:Ee,children:"Calculate the diet"})})]})}var Be=t(3579);var qe=function(){var e=(0,d.I0)(),r=(0,c.useState)(!1),t=(0,o.Z)(r,2),a=t[0],n=t[1],s=(0,i.useMediaQuery)({maxWidth:767}),y=(0,i.useMediaQuery)({minWidth:767}),x=(0,d.v9)(te.PR)._id,p=(0,d.v9)(te.U6),j=0===(null===p||void 0===p?void 0:p.length),g=function(e,r){if(!e)return!1;if(e){var t=JSON.parse(localStorage.getItem("unregisteredUser"));return!t||!(!t||!r)&&(localStorage.setItem("user_".concat(r,"_userData"),JSON.stringify(t)),!1)}}(j,x);(0,c.useEffect)((function(){if(!g&&x){var r=JSON.parse(localStorage.getItem("user_".concat(x,"_userData")));e((0,Be.w)((0,l.Z)({_id:x},r))),localStorage.removeItem("unregisteredUser")}}),[e,g,x]);return(0,B.jsxs)("main",{className:u,children:[j&&(0,B.jsx)(Ze,{}),!j&&(0,B.jsxs)("div",{className:m,children:[(0,B.jsxs)("div",{children:[(0,B.jsx)(ue,{}),(0,B.jsxs)("div",{className:h,children:[y&&(0,B.jsx)(ee,{}),(0,B.jsx)(ke,{})]})]}),s&&(0,B.jsx)("div",{className:_,children:(0,B.jsx)(v.Z,{text:"+",btnClass:"btnPlus",type:"button",handleClick:function(){document.querySelector("body").classList.add("no-scroll"),n(!0)}})}),(0,B.jsx)(ne,{}),a&&(0,B.jsx)(P.Z,{setModalOpen:n,overlayClass:"overlayDairyPage",modalClass:"modalDairyPage",children:(0,B.jsx)(ee,{setModalOpen:n})})]}),(0,B.jsx)(f.Z,{})]})}},6730:function(e,r,t){t.d(r,{Cp:function(){return s},Dk:function(){return a},EI:function(){return h},M7:function(){return l},Ni:function(){return n},SP:function(){return o},TW:function(){return c},Wm:function(){return u},jj:function(){return d},oj:function(){return m},vO:function(){return i}});var a=function(e){return e.dayProduct.periodSummary},n=function(e){return e.dayProduct.eatenProducts},s=function(e){return e.dayProduct.loading},l=function(e){var r,t,a=e.dayProduct;return null===a||void 0===a||null===(r=a.aboutDay)||void 0===r||null===(t=r.daySummary)||void 0===t?void 0:t.kcalLeft},o=function(e){var r,t,a=e.dayProduct;return null===a||void 0===a||null===(r=a.aboutDay)||void 0===r||null===(t=r.daySummary)||void 0===t?void 0:t.kcalConsumed},i=function(e){var r,t,a=e.dayProduct;return null===a||void 0===a||null===(r=a.aboutDay)||void 0===r||null===(t=r.daySummary)||void 0===t?void 0:t.dailyRate},c=function(e){var r,t,a=e.dayProduct;return null===a||void 0===a||null===(r=a.aboutDay)||void 0===r||null===(t=r.daySummary)||void 0===t?void 0:t.percentsOfDailyRate},d=function(e){var r,t=e.dayProduct;return null===t||void 0===t||null===(r=t.aboutDay)||void 0===r?void 0:r.kcalLeft},u=function(e){var r,t=e.dayProduct;return null===t||void 0===t||null===(r=t.aboutDay)||void 0===r?void 0:r.kcalConsumed},m=function(e){var r,t=e.dayProduct;return null===t||void 0===t||null===(r=t.aboutDay)||void 0===r?void 0:r.dailyRate},h=function(e){var r,t=e.dayProduct;return null===t||void 0===t||null===(r=t.aboutDay)||void 0===r?void 0:r.percentsOfDailyRate}},4668:function(e,r){r.Z={container:"NotFound_container__KNX4B",title:"NotFound_title__f917b",txt:"NotFound_txt__VshUQ",booWrapper:"NotFound_booWrapper__2b5FM",boo:"NotFound_boo__bQlpM",floating:"NotFound_floating__P8jYD",face:"NotFound_face__jV+a5",shadow:"NotFound_shadow__wSXLX",floatingShadow:"NotFound_floatingShadow__fkJav"}}}]);
//# sourceMappingURL=848.ca3a7f87.chunk.js.map