"use strict";(self.webpackChunkslim=self.webpackChunkslim||[]).push([[794],{5399:function(e,t,n){n.d(t,{Z:function(){return d}});var a="ErrorMessage_errorMessageBlock__6NGFY",r="ErrorMessage_errorMessageTitle__gIqHi",o="ErrorMessage_errorMessageText__TKpdd",i=n(4668),l=n(184),s=function(e){var t=e.status;return(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("div",{className:i.Z.boo,children:(0,l.jsx)("div",{className:i.Z.face,id:"face"})}),(0,l.jsx)("p",{className:r,children:"Something went wrong..."}),(0,l.jsx)("p",{className:o,children:t})]})},d=s;s.defaultProps={status:{}}},3713:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(2791),r={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"},o=n(184),i=function(e){var t=e.setModalOpen,n=e.overlayClass,i=void 0===n?"overlay":n,l=e.modalClass,s=void 0===l?"modal":l,d=e.children;function c(){document.querySelector("body").classList.remove("no-scroll")}(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&(c(),t(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);var u=function(){c(),t(!1)};return(0,o.jsx)("div",{className:r[i],onClick:function(e){e.target===e.currentTarget&&(c(),t(!1))},children:(0,o.jsxs)("div",{className:r[s],children:[(0,o.jsx)("div",{className:r.mobileClose,children:(0,o.jsx)("span",{onClick:u,className:r.closeM})}),(0,o.jsx)("span",{onClick:u,className:r.closeOther}),d]})})}},9833:function(e,t,n){n.d(t,{Z:function(){return o}});var a={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb Button_btn__cIIwi",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},r=n(184),o=function(e){var t=e.text,n=void 0===t?"+":t,o=e.type,i=void 0===o?"submit":o,l=e.btnClass,s=void 0===l?"btnPlus":l,d=e.handleClick;return(0,r.jsx)("button",{className:a[s],onClick:d,type:i,children:n})}},4834:function(e,t,n){n.d(t,{Z:function(){return a.Z}});var a=n(9833)},5406:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(184),r=function(e){var t=e.children;return(0,a.jsx)("div",{className:"container",children:t})}},6146:function(e,t,n){n.d(t,{Z:function(){return s}});var a="TextField_label__kp4Pv",r="TextField_input__JDykO",o="TextField_span__qcPmc",i=n(184),l=function(e){var t=e.type,n=e.name,l=e.value,s=e.handleChange,d=e.placeholder,c=e.required,u=e.pattern,_=e.title;return(0,i.jsxs)("label",{className:a,children:[(0,i.jsx)("input",{className:r,type:t,name:n,value:l,onChange:s,required:c,pattern:u,title:_}),(0,i.jsx)("span",{className:o,children:d})]})},s=l;l.defaultProps={type:"text",required:!1}},8704:function(e,t,n){n.d(t,{E:function(){return a}});var a={name:{name:"name",type:"text",placeholder:"Name*",title:"The name must be at least 3 characters long",required:!0},email:{name:"email",type:"text",placeholder:"Email*",required:!0},password:{name:"password",type:"password",placeholder:"Password (at least 8 characters)*",required:!0,title:"The password must be at least 8 characters long"},height:{name:"height",type:"text",placeholder:"Height (100-250 cm)*",required:!0,title:"Enter a valid integer from 100 to 250 cm."},age:{name:"age",type:"text",placeholder:"Age (18-100 y)*",required:!0,title:"Enter a valid number from 18 to 100 years."},weight:{name:"weight",type:"text",placeholder:"Current weight (20-250 kg)*",required:!0,title:"Enter a valid integer from 20 to 250 kg."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"Desired weight (20-200 kg)*",required:!0,title:"Enter a valid integer from 20 to 200 kg."},bloodType:{name:"bloodType",type:"text",placeholder:"Blood type*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"Filter by name"}}},1307:function(e,t,n){n.d(t,{Z:function(){return a.Z}});var a=n(6146)},8794:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(1413),r=n(9439),o=n(2791),i=n(1134),l=n(9434),s=n(4805),d="Login_login__yplOB",c="Login_title__3JYIy",u="Login_form__g0qS6",_="Login_wrap__i5y-C",m="Login_imgDesktop__x7s8O",h=n(5406),p=n(1307),f=n(8704),g=n(4834),v=n(5399),x=n(3713),b=n(9146),y=n(8010),N=n(9869),j=n(188),w=n(8724),k=n(184),C=function(){var e=(0,s.useMediaQuery)({query:"(min-resolution: 2dppx)"}),t=(0,l.I0)(),n=(0,o.useState)(!1),C=(0,r.Z)(n,2),M=C[0],Z=C[1],E=(0,l.v9)(N.NH),q=(0,i.cI)({defaultValues:{email:"",password:""}}),F=q.control,L=q.handleSubmit,P=q.reset;(0,o.useEffect)((function(){t((0,j.Bu)())}),[]);return(0,k.jsx)("section",{className:d,children:(0,k.jsxs)(h.Z,{children:[(0,k.jsx)("h2",{className:c,children:"Login"}),(0,k.jsxs)("form",{className:u,onSubmit:L((function(e,n){n.preventDefault(),t((0,w.x4)(e)),Z(!0),P()})),children:[(0,k.jsx)(i.Qr,{control:F,name:"email",rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,k.jsx)(p.Z,(0,a.Z)({value:r,control:F,handleChange:n},f.E.email))}}),(0,k.jsx)(i.Qr,{control:F,name:"password",rules:{required:!0,minLength:8,maxLength:30},render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,k.jsx)(p.Z,(0,a.Z)({value:r,control:F,handleChange:n},f.E.password))}}),(0,k.jsx)("div",{className:_,children:(0,k.jsx)(g.Z,{text:"Sign in",btnClass:"btn"})})]}),!e&&(0,k.jsx)("img",{className:m,src:b,alt:"background"}),e&&(0,k.jsx)("img",{className:m,src:y,alt:"background"}),M&&E&&(0,k.jsx)(x.Z,{setModalOpen:Z,children:(0,k.jsx)(v.Z,{status:E})})]})})},M=function(){return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(C,{})})}},4668:function(e,t){t.Z={container:"NotFound_container__KNX4B",title:"NotFound_title__f917b",txt:"NotFound_txt__VshUQ",booWrapper:"NotFound_booWrapper__2b5FM",boo:"NotFound_boo__bQlpM",floating:"NotFound_floating__P8jYD",face:"NotFound_face__jV+a5",shadow:"NotFound_shadow__wSXLX",floatingShadow:"NotFound_floatingShadow__fkJav"}},9146:function(e,t,n){e.exports=n.p+"static/media/bcgD.06d7e880436282e9dadf.png"},8010:function(e,t,n){e.exports=n.p+"static/media/bcgD@2x.7d5af67d05df6e0bba78.png"}}]);
//# sourceMappingURL=794.d66b7ff1.chunk.js.map