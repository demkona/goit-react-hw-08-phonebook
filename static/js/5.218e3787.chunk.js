(this["webpackJsonpreact-homework-template"]=this["webpackJsonpreact-homework-template"]||[]).push([[5],{153:function(e,a,t){"use strict";var c=function(){};e.exports=c},154:function(e,a,t){e.exports={form:"pages_form__1I4Oh",label:"pages_label__2D4nd",title:"pages_title__1UVfo",titleHome:"pages_titleHome__3wNyF",button:"pages_button__3ytkl"}},156:function(e,a,t){"use strict";var c=t(5),s=t(8),r=t(9),l=t.n(r),i=t(26),o=t.n(i),n=t(1),b=t(2),d=["as","className","type","tooltip"],j={type:o.a.string,tooltip:o.a.bool,as:o.a.elementType},m=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,i=e.className,o=e.type,n=void 0===o?"valid":o,j=e.tooltip,m=void 0!==j&&j,f=Object(s.a)(e,d);return Object(b.jsx)(r,Object(c.a)(Object(c.a)({},f),{},{ref:a,className:l()(i,"".concat(n,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=j;var f=m,O=n.createContext({}),u=t(13),v=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,i=e.className,o=e.type,d=void 0===o?"checkbox":o,j=e.isValid,m=void 0!==j&&j,f=e.isInvalid,p=void 0!==f&&f,x=e.as,h=void 0===x?"input":x,N=Object(s.a)(e,v),y=Object(n.useContext)(O).controlId;return r=Object(u.c)(r,"form-check-input"),Object(b.jsx)(h,Object(c.a)(Object(c.a)({},N),{},{ref:a,type:d,id:t||y,className:l()(i,r,m&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,h=["bsPrefix","className","htmlFor"],N=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.htmlFor,o=Object(s.a)(e,h),d=Object(n.useContext)(O).controlId;return t=Object(u.c)(t,"form-check-label"),Object(b.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:i||d,className:l()(r,t)}))}));N.displayName="FormCheckLabel";var y=N;var w=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],P=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,i=e.bsSwitchPrefix,o=e.inline,d=void 0!==o&&o,j=e.reverse,m=void 0!==j&&j,v=e.disabled,p=void 0!==v&&v,h=e.isValid,N=void 0!==h&&h,P=e.isInvalid,g=void 0!==P&&P,I=e.feedbackTooltip,F=void 0!==I&&I,k=e.feedback,C=e.feedbackType,R=e.className,_=e.style,S=e.title,L=void 0===S?"":S,V=e.type,z=void 0===V?"checkbox":V,T=e.label,E=e.children,G=e.as,H=void 0===G?"input":G,D=Object(s.a)(e,w);r=Object(u.c)(r,"form-check"),i=Object(u.c)(i,"form-switch");var J=Object(n.useContext)(O).controlId,M=Object(n.useMemo)((function(){return{controlId:t||J}}),[J,t]),A=!E&&null!=T&&!1!==T||function(e,a){return n.Children.toArray(e).some((function(e){return n.isValidElement(e)&&e.type===a}))}(E,y),U=Object(b.jsx)(x,Object(c.a)(Object(c.a)({},D),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:N,isInvalid:g,disabled:p,as:H}));return Object(b.jsx)(O.Provider,{value:M,children:Object(b.jsx)("div",{style:_,className:l()(R,A&&r,d&&"".concat(r,"-inline"),m&&"".concat(r,"-reverse"),"switch"===z&&i),children:E||Object(b.jsxs)(b.Fragment,{children:[U,A&&Object(b.jsx)(y,{title:L,children:T}),k&&Object(b.jsx)(f,{type:C,tooltip:F,children:k})]})})})}));P.displayName="FormCheck";var g=Object.assign(P,{Input:x,Label:y}),I=t(6),F=(t(153),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),k=n.forwardRef((function(e,a){var t,r,i=e.bsPrefix,o=e.type,d=e.size,j=e.htmlSize,m=e.id,f=e.className,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,h=void 0!==x&&x,N=e.plaintext,y=e.readOnly,w=e.as,P=void 0===w?"input":w,g=Object(s.a)(e,F),k=Object(n.useContext)(O).controlId;(i=Object(u.c)(i,"form-control"),N)?t=Object(I.a)({},"".concat(i,"-plaintext"),!0):(r={},Object(I.a)(r,i,!0),Object(I.a)(r,"".concat(i,"-").concat(d),d),t=r);return Object(b.jsx)(P,Object(c.a)(Object(c.a)({},g),{},{type:o,size:j,ref:a,readOnly:y,id:m||k,className:l()(f,t,p&&"is-valid",h&&"is-invalid","color"===o&&"".concat(i,"-color"))}))}));k.displayName="FormControl";var C=Object.assign(k,{Feedback:f}),R=t(41),_=Object(R.a)("form-floating"),S=["controlId","as"],L=n.forwardRef((function(e,a){var t=e.controlId,r=e.as,l=void 0===r?"div":r,i=Object(s.a)(e,S),o=Object(n.useMemo)((function(){return{controlId:t}}),[t]);return Object(b.jsx)(O.Provider,{value:o,children:Object(b.jsx)(l,Object(c.a)(Object(c.a)({},i),{},{ref:a}))})}));L.displayName="FormGroup";var V=L,z=t(23),T=["as","bsPrefix","className"],E=["className"];var G=n.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,r=e.className,i=Object(s.a)(e,T);t=Object(u.c)(t,"col");var o=Object(u.a)(),n=Object(u.b)(),b=[],d=[];return o.forEach((function(e){var a,c,s,r=i[e];delete i[e],"object"===typeof r&&null!=r?(a=r.span,c=r.offset,s=r.order):a=r;var l=e!==n?"-".concat(e):"";a&&b.push(!0===a?"".concat(t).concat(l):"".concat(t).concat(l,"-").concat(a)),null!=s&&d.push("order".concat(l,"-").concat(s)),null!=c&&d.push("offset".concat(l,"-").concat(c))})),[Object(c.a)(Object(c.a)({},i),{},{className:l.a.apply(void 0,[r].concat(b,d))}),{as:a,bsPrefix:t,spans:b}]}(e),r=Object(z.a)(t,2),i=r[0],o=i.className,n=Object(s.a)(i,E),d=r[1],j=d.as,m=void 0===j?"div":j,f=d.bsPrefix,O=d.spans;return Object(b.jsx)(m,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:l()(o,!O.length&&f)}))}));G.displayName="Col";var H=G,D=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],J=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,i=e.bsPrefix,o=e.column,d=e.visuallyHidden,j=e.className,m=e.htmlFor,f=Object(s.a)(e,D),v=Object(n.useContext)(O).controlId;i=Object(u.c)(i,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var x=l()(j,i,d&&"visually-hidden",o&&p);return m=m||v,o?Object(b.jsx)(H,Object(c.a)({ref:a,as:"label",className:x,htmlFor:m},f)):Object(b.jsx)(r,Object(c.a)({ref:a,className:x,htmlFor:m},f))}));J.displayName="FormLabel",J.defaultProps={column:!1,visuallyHidden:!1};var M=J,A=["bsPrefix","className","id"],U=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.id,o=Object(s.a)(e,A),d=Object(n.useContext)(O).controlId;return t=Object(u.c)(t,"form-range"),Object(b.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:l()(r,t),id:i||d}))}));U.displayName="FormRange";var q=U,B=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],K=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,i=e.htmlSize,o=e.className,d=e.isValid,j=void 0!==d&&d,m=e.isInvalid,f=void 0!==m&&m,v=e.id,p=Object(s.a)(e,B),x=Object(n.useContext)(O).controlId;return t=Object(u.c)(t,"form-select"),Object(b.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:i,ref:a,className:l()(o,t,r&&"".concat(t,"-").concat(r),j&&"is-valid",f&&"is-invalid"),id:v||x}))}));K.displayName="FormSelect";var Q=K,W=["bsPrefix","className","as","muted"],X=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,o=void 0===i?"small":i,n=e.muted,d=Object(s.a)(e,W);return t=Object(u.c)(t,"form-text"),Object(b.jsx)(o,Object(c.a)(Object(c.a)({},d),{},{ref:a,className:l()(r,t,n&&"text-muted")}))}));X.displayName="FormText";var Y=X,Z=n.forwardRef((function(e,a){return Object(b.jsx)(g,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));Z.displayName="Switch";var $=Object.assign(Z,{Input:g.Input,Label:g.Label}),ee=["bsPrefix","className","children","controlId","label"],ae=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.children,o=e.controlId,n=e.label,d=Object(s.a)(e,ee);return t=Object(u.c)(t,"form-floating"),Object(b.jsxs)(V,Object(c.a)(Object(c.a)({ref:a,className:l()(r,t),controlId:o},d),{},{children:[i,Object(b.jsx)("label",{htmlFor:o,children:n})]}))}));ae.displayName="FloatingLabel";var te=ae,ce=["className","validated","as"],se={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},re=n.forwardRef((function(e,a){var t=e.className,r=e.validated,i=e.as,o=void 0===i?"form":i,n=Object(s.a)(e,ce);return Object(b.jsx)(o,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:l()(t,r&&"was-validated")}))}));re.displayName="Form",re.propTypes=se;a.a=Object.assign(re,{Group:V,Control:C,Floating:_,Check:g,Switch:$,Label:M,Text:Y,Range:q,Select:Q,FloatingLabel:te})},163:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var c=t(23),s=t(1),r=t(156),l=t(152),i=t(20),o=t(21),n=t(154),b=t.n(n),d=t(2);function j(){var e=Object(i.b)(),a=Object(s.useState)(""),t=Object(c.a)(a,2),n=t[0],j=t[1],m=Object(s.useState)(""),f=Object(c.a)(m,2),O=f[0],u=f[1],v=Object(s.useState)(""),p=Object(c.a)(v,2),x=p[0],h=p[1],N=function(e){var a=e.target,t=a.name,c=a.value;switch(t){case"name":return j(c);case"email":return u(c);case"password":return h(c);default:return}};return Object(d.jsx)("div",{children:Object(d.jsxs)(r.a,{onSubmit:function(a){a.preventDefault(),e(o.a.register({name:n,email:O,password:x})),j(""),u(""),h("")},autoComplete:"off",className:b.a.form,children:[Object(d.jsx)(r.a.Group,{className:"mb-3",children:Object(d.jsxs)(r.a.Label,{className:b.a.label,children:["Name",Object(d.jsx)(r.a.Control,{placeholder:"Enter your name",type:"text",name:"name",value:n,onChange:N})]})}),Object(d.jsxs)(r.a.Group,{className:"mb-3",children:[Object(d.jsx)(r.a.Label,{children:"Email address"}),Object(d.jsx)(r.a.Control,{type:"email",value:O,name:"email",placeholder:"Enter email",onChange:N})]}),Object(d.jsxs)(r.a.Group,{className:"mb-3",children:[Object(d.jsx)(r.a.Label,{children:"Password"}),Object(d.jsx)(r.a.Control,{type:"password",name:"password",value:x,onChange:N,placeholder:"Password"})]}),Object(d.jsx)(l.a,{type:"submit",children:"Register"})]})})}}}]);
//# sourceMappingURL=5.218e3787.chunk.js.map