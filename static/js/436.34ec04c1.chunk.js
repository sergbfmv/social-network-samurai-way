"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[436],{7436:function(e,s,a){a.r(s),a.d(s,{default:function(){return y}});var D=a(8155),n=a(1413),i=(a(2791),"Dialogs_dialogs__oe96H"),r="Dialogs_dialogsItems__zeEWD",B="Dialogs_messages__Cg2l+",t="Dialogs_sendMessageForm__clW9h",l="Dialogs_messageArea__J5uoV",o="Dialogs_sendMessageBtn__7vpHy",g="Dialogs_error__fLVDP",u="DialogItem_dialog__gU34-",c="DialogItem_active__wvgh9",d=a(1523),m=a(184),_=function(e){var s="/dialogs/"+e.id;return(0,m.jsx)("div",{className:u,children:(0,m.jsx)(d.OL,{activeClassName:c,to:s,children:e.name})})},h="Message_message__rjHQQ",f=function(e){return(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("img",{src:"https://media.istockphoto.com/id/1300845620/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-icon-flat-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek=",alt:"avatar"}),e.message]})},v=a(5705),j=function(e){var s=(0,v.TA)({initialValues:{message:""},validate:function(e){var s={};return e.message||(s.message="\u0421annot be empty"),s},onSubmit:function(a){e.sendMessage(a.message),s.resetForm()}});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{className:t,onSubmit:s.handleSubmit,children:[(0,m.jsx)("textarea",(0,n.Z)((0,n.Z)({placeholder:"Enter message",className:s.errors.message?g+" "+l:l},s.getFieldProps("message")),{},{name:"message",onBlur:s.handleBlur,value:s.values.message})),(0,m.jsx)("button",{className:o,disabled:!s.isValid||s.values.message.length<1,children:"Send"})]}),(0,m.jsx)("span",{style:{color:"red"},children:s.errors.message})]})},x=a(364),E=a(7781),p=a(5987),C=a(9271),k=["isAuth"],b=function(e){return{isAuth:e.auth.isAuth}};var y=(0,E.qC)((function(e){return(0,x.$j)(b)((function(s){var a=s.isAuth,D=(0,p.Z)(s,k);return a?(0,m.jsx)(e,(0,n.Z)({},D)):(0,m.jsx)(C.l_,{to:"/login"})}))}),(0,x.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendMessageClick:function(s){e((0,D.$)(s))}}})))((function(e){var s=e.dialogsPage,a=s.messages.map((function(e){return(0,m.jsx)(f,{message:e.message,id:e.id},e.id)})),D=s.dialogs.map((function(e){return(0,m.jsx)(_,{name:e.name,id:e.id},e.id)}));return(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("div",{className:r,children:D}),(0,m.jsxs)("div",{className:B,children:[a,(0,m.jsx)(j,{sendMessage:function(s){e.onSendMessageClick(s)}})]})]})}))}}]);
//# sourceMappingURL=436.34ec04c1.chunk.js.map