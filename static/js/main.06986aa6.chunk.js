(window["webpackJsonpmy-app-1"]=window["webpackJsonpmy-app-1"]||[]).push([[0],{10:function(e,t,r){"use strict";r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return u}));var a=r(11),n=r(135);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var c=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"5deaa5a9-bfea-4e80-bac8-d313181506e0"}}),i={setUsers:function(e,t){return c.get("/users?count=".concat(e,"&page=").concat(t))},setFollow:function(e){return c.post("/follow/".concat(e))},setUnfollow:function(e){return c.delete("/follow/".concat(e))}},s={getUserProfile:function(e){return c.get("/profile/".concat(e))},editMyProfile:function(e){return c.put("/profile",e)},getUserStatus:function(e){return c.get("/profile/status/".concat(e))},setStatus:function(e){return c.put("/profile/status",{status:e})},setProfilePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},u={setAuthData:function(){return c.get("/auth/me")},logIn:function(e){return c.post("/auth/login",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))},logOut:function(){return c.delete("/auth/login")},getCaptcha:function(){return c.get("/security/get-captcha-url")}}},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r(27),n=r(11);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(91),s=[{name:"Name1",id:"n1",path:"name1",avatar:i,messages:[{text:"Name1 Message1",id:"m2"},{text:"Name1 Message2",id:"m1"},{text:"Name1 Message3",id:"m2"},{text:"Name1 Message4",id:"m2"},{text:"Name1 Message4",id:"m2"},{text:"Name1 Message4",id:"m1"},{text:"Name1 Message4",id:"m1"},{text:"Name1 Message4",id:"m2"},{text:"Name1 Message4",id:"m2"},{text:"Name1 Message5",id:"m1"}]},{name:"Name2",id:"n2",path:"name2",avatar:i,messages:[{text:"Name 2 Message1",id:"m1"},{text:"Name 2 Message3",id:"m2"},{text:"Name 2 Message2",id:"m1"},{text:"Name 2 Message4",id:"m2"},{text:"Name 2 Message4",id:"m2"},{text:"Name 2 Message4",id:"m1"},{text:"Name 2 Message4",id:"m1"},{text:"Name 2 Message4",id:"m2"},{text:"Name 2 Message4",id:"m2"},{text:"Name 2 Message5",id:"m1"}]},{name:"Name3",id:"n3",path:"name3",avatar:i,messages:[{text:"Name 3 Message3",id:"m2"},{text:"Name 3 Message1",id:"m1"},{text:"Name 3 Message2",id:"m1"},{text:"Name 3 Message4",id:"m2"},{text:"Name 3 Message4",id:"m1"},{text:"Name 3 Message4",id:"m2"},{text:"Name 3 Message4",id:"m2"},{text:"Name 3 Message4",id:"m1"},{text:"Name 3 Message4",id:"m2"},{text:"Name 3 Message5",id:"m1"}]},{name:"Name4",id:"n4",path:"name4",avatar:i,messages:[{text:"Name4 Message1",id:"m1"},{text:"Name4 Message2",id:"m1"},{text:"Name4 Message3",id:"m2"},{text:"Name4 Message4",id:"m2"},{text:"Name4 Message4",id:"m2"},{text:"Name4 Message4",id:"m1"},{text:"Name4 Message4",id:"m1"},{text:"Name4 Message4",id:"m2"},{text:"Name4 Message4",id:"m2"},{text:"Name4 Message5",id:"m1"}]},{name:"Name5",id:"n5",path:"name5",avatar:i,messages:[{text:"Name5 Message3",id:"m2"},{text:"Name5 Message2",id:"m1"},{text:"Name5 Message1",id:"m1"},{text:"Name5 Message4",id:"m2"},{text:"Name5 Message4",id:"m1"},{text:"Name5 Message4",id:"m2"},{text:"Name5 Message4",id:"m2"},{text:"Name5 Message4",id:"m1"},{text:"Name5 Message4",id:"m2"},{text:"Name5 Message5",id:"m1"}]}];t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var r={text:t.newMessage,id:t.messageId};return e.map((function(e){return e.id===t.dialogId?c({},e,{messages:[].concat(Object(a.a)(e.messages),[r])}):e}));default:return e}};var u="network/dialogs/ADD-MESSAGE",l=function(e,t,r){return{type:u,dialogId:e,messageId:t,newMessage:r}}},136:function(e,t,r){e.exports=r.p+"static/media/top.aa23ee31.png"},138:function(e,t,r){e.exports=r.p+"static/media/unlogged.b4e8b423.png"},139:function(e,t,r){e.exports=r.p+"static/media/network_logo.8cc71f22.jpg"},142:function(e,t,r){e.exports={Error404:"Error404_Error404__w63JI"}},143:function(e,t,r){e.exports=r.p+"static/media/preloader.7db1e6a6.svg"},144:function(e,t,r){e.exports=r.p+"static/media/error.27135139.png"},15:function(e,t,r){e.exports={navigationContaiter:"Navbar_navigationContaiter__3rols",navigation:"Navbar_navigation__rTp4V",item:"Navbar_item__3M6iT",active:"Navbar_active__m6KE2"}},172:function(e,t,r){e.exports=r(297)},23:function(e,t,r){e.exports={header:"Header_header__2eWKZ",header_wrapper:"Header_header_wrapper__1wdpD",login:"Header_login__18tMh",loggedIn_wraper:"Header_loggedIn_wraper__2X7lI",loggedIn:"Header_loggedIn__vUrEQ",loggedIn_click:"Header_loggedIn_click__FGkHR",logOut:"Header_logOut__2_jOF",logOut_hide:"Header_logOut_hide__30yi8"}},28:function(e,t,r){e.exports={loginForm:"Login_loginForm__Xenfu",authField:"Login_authField__2xaZv",submitButton:"Login_submitButton__2nfSp",loginError:"Login_loginError__1cwlD",legend:"Login_legend__1K72-",captcha:"Login_captcha__zrM0e"}},297:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(46),c=r.n(o),i=r(14),s=r(40),u=r(41),l=r(44),p=r(42),m=r(45),d=r(33),f=r(21),g=r(11),b=r(7),h=r.n(b),O=r(19),v=r(10),y=r(34),E=r(9);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={id:null,login:null,email:null,captchaUrl:null,captchaCheck:!1,isAuth:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:case M:return j({},e,{},t.data);default:return e}},P="network/auth/SET_AUTH_DATA",N=function(e){return{type:P,data:e}},k=function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var r,a,n,o,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.setAuthData();case 3:0===(r=e.sent).data.resultCode&&(a=r.data.data,n=a.id,o=a.login,c=a.email,t(N({id:n,login:o,email:c,isAuth:!0}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(Object(E.c)({error:e.t0}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},M="SET_CAPTCHA_MODE",S=function(e){return{type:M,data:e}};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D={initialized:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return I({},e,{initialized:!0});default:return e}},L="network/app/INITIALIZATION_SUCCESS",A=r(37),U=r.n(A),F=r(136),R=r.n(F),H=r(15),G=r.n(H),z=function(){return n.a.createElement("section",{className:G.a.navigationContaiter},n.a.createElement("nav",{className:G.a.navigation},n.a.createElement("div",{className:G.a.item},n.a.createElement(i.c,{to:"/profile",activeClassName:G.a.active},"Profile")),n.a.createElement("div",{className:G.a.item},n.a.createElement(i.c,{to:"/users",activeClassName:G.a.active},"Users")),n.a.createElement("div",{className:G.a.item},n.a.createElement(i.c,{to:"/dialogs",activeClassName:G.a.active},"Messages")),n.a.createElement("div",{className:G.a.item},n.a.createElement(i.c,{to:"/news",activeClassName:G.a.active},"News")),n.a.createElement("div",{className:G.a.item},n.a.createElement(i.c,{to:"/music",activeClassName:G.a.active},"Music")),n.a.createElement("div",{className:G.a.item},n.a.createElement(i.c,{to:"/settings",activeClassName:G.a.active},"Settings"))))},Y=function(){return n.a.createElement("div",null,"Music")},B=function(){return n.a.createElement("div",null,"Settings")},K=function(){return n.a.createElement("div",null,"News")},W=r(23),Z=r.n(W),J=r(91),Q=r.n(J),X=r(138),q=r.n(X),V=r(139),$=r.n(V),ee=r(140),te=function(e){function t(){var e,r;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={isDisplayed:!1},r.handleClickOutside=function(){return r.setState({isDisplayed:!1})},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isDisplayed,r=this.props,a=r.login,o=r.isAuth,c=r.logOut,s=t?Z.a.logOut:"".concat(Z.a.logOut," ").concat(Z.a.logOut_hide),u=t?Z.a.loggedIn+" "+Z.a.loggedIn_click:Z.a.loggedIn,l=function(){return e.setState({isDisplayed:!t})};return n.a.createElement("header",{className:Z.a.header},n.a.createElement("div",{className:Z.a.header_wrapper},n.a.createElement(i.b,{to:"/profile"},n.a.createElement("img",{alt:"Logo",src:$.a})),o?n.a.createElement("div",{className:Z.a.loggedIn_wraper},n.a.createElement("div",{className:u,onClick:l},n.a.createElement("span",null,a),n.a.createElement("img",{src:Q.a,alt:"profile"})),n.a.createElement("span",{onClick:function(){c(),l()},className:s},"LogOut")):n.a.createElement("div",{className:Z.a.login},n.a.createElement(i.b,{to:"/login"},"Login"),n.a.createElement("img",{src:q.a,alt:"profile"}))))}}]),t}(n.a.Component),re=Object(ee.a)(te),ae=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(re,this.props)}}]),t}(n.a.Component),ne=Object(f.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logOut:function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.logOut();case 3:0===e.sent.data.resultCode&&t(N({id:null,login:null,email:null,captcha:null,isAuth:!1})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(Object(E.c)({error:e.t0}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})(ae),oe=r(131),ce=r(132),ie=r(60),se=r(28),ue=r.n(se),le=r(74),pe=Object(ce.a)({form:"login"})((function(e){var t=e.handleSubmit,r=e.error,a=e.captchaCheck,o=e.captchaUrl;return n.a.createElement("form",{className:ue.a.loginForm,onSubmit:t},n.a.createElement("fieldset",null,n.a.createElement("legend",{className:ue.a.legend},"Authorization form"),n.a.createElement("div",{className:ue.a.authField},n.a.createElement(oe.a,{name:"email",type:"email",component:le.a,placeholder:"email",validate:[ie.c,ie.a]})),n.a.createElement("div",{className:ue.a.authField},n.a.createElement(oe.a,{name:"password",type:"password",component:le.a,placeholder:"Password",validate:[ie.c]})),n.a.createElement("div",{className:ue.a.authField},n.a.createElement(oe.a,{name:"rememberMe",component:"input",type:"checkbox"}),"Remember me"),a&&n.a.createElement("div",{className:ue.a.captcha},n.a.createElement("span",null,"Please, correct you login or password",n.a.createElement("br",null),"and enter untibot symbols"),n.a.createElement("br",null),n.a.createElement("img",{src:o,alt:"captcha"}),n.a.createElement(oe.a,{name:"captcha",component:"input",type:"text"}))),r&&n.a.createElement("p",{className:ue.a.loginError},r),n.a.createElement("button",{type:"submit",value:"Submit",className:ue.a.submitButton},"Login"))})),me=Object(f.b)((function(e){var t=e.auth;return{isAuth:t.isAuth,captchaCheck:t.captchaCheck,captchaUrl:t.captchaUrl}}),{logIn:function(e){return function(){var t=Object(O.a)(h.a.mark((function t(r,a){var n,o,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.logIn(e);case 3:if(0!==(n=t.sent).data.resultCode){t.next=9;break}r(k()),a().auth.captchaCheck&&r(S({captchaCheck:!1,captchaUrl:null})),t.next=20;break;case 9:if(o=n.data.messages.length>0?n.data.messages[0]:"Error is undefined",10!==n.data.resultCode){t.next=19;break}return r(Object(y.a)("login",{_error:o})),t.next=15,v.a.getCaptcha();case 15:c=t.sent,r(S({captchaCheck:!0,captchaUrl:c.data.url})),t.next=20;break;case 19:r(Object(y.a)("login",{_error:o}));case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),r(Object(E.c)({error:t.t0}));case 25:case"end":return t.stop()}}),t,null,[[0,22]])})));return function(e,r){return t.apply(this,arguments)}}()}})((function(e){var t=e.logIn,r=e.isAuth,a=e.captchaCheck,o=e.captchaUrl;if(r)return n.a.createElement(d.a,{to:"/profile"});return n.a.createElement(pe,{onSubmit:function(e){t(e)},captchaCheck:a,captchaUrl:o})})),de=r(142),fe=r.n(de),ge=Object(d.g)((function(e){return n.a.createElement("div",{className:fe.a.Error404},n.a.createElement("h3",null,"No match for ",n.a.createElement("code",null,'"',e.location.pathname,'"'),". Please, check URL."))})),be=r(97),he=r(55),Oe=r(144),ve=r.n(Oe),ye=r(38),Ee=r.n(ye),we=function(e){var t=Object(a.useState)(!1),r=Object(he.a)(t,2),o=r[0],c=r[1],i=Object(a.useState)(!1),s=Object(he.a)(i,2),u=s[0],l=s[1],p=Object(a.useState)(""),m=Object(he.a)(p,2),d=m[0],f=m[1],g=Object(a.useState)(!1),b=Object(he.a)(g,2),h=b[0],O=b[1],v=e.delay?e.delay:1;Object(a.useEffect)((function(){e.errorMessage?(f(e.errorMessage),l(!0),O(!0)):(O(!1),setTimeout((function(){f(""),l(!1)}),1e3*v))}),[e.errorMessage,v]);var y=h?Ee.a.commonError:Ee.a.commonError+" "+Ee.a.hideError,E=e.delay?{transition:"".concat(e.delay,"s")}:{};return u?n.a.createElement("div",{className:y,onMouseOver:function(){return c(!0)},onMouseLeave:function(){return c(!1)},onClick:e.onClick,style:E},n.a.createElement("img",{src:ve.a,alt:"error icon"}),n.a.createElement("div",{className:Ee.a.messages},n.a.createElement("span",null,"Something went wrone..."),n.a.createElement("span",{className:Ee.a.errorMessage},d)),o&&n.a.createElement("div",{className:Ee.a.hint},e.hint)):n.a.createElement(n.a.Fragment,null)},je=n.a.lazy((function(){return r.e(4).then(r.bind(null,317))})),_e=n.a.lazy((function(){return r.e(5).then(r.bind(null,318))})),xe=n.a.lazy((function(){return r.e(3).then(r.bind(null,316))})),Pe=function(e){return n.a.createElement(a.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(e,null))},Ne=function(e){function t(){var e,r;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={toTop:!1},r.scrollHandler=function(e){window.pageYOffset>300&&!r.state.toTop&&r.setState({toTop:!0}),window.pageYOffset<=300&&r.state.toTop&&r.setState({toTop:!1})},r.srollToTop=function(){var e=window.pageYOffset/2,t=setInterval((function(){window.scrollBy(0,-e),window.pageYOffset-e<=0&&(clearInterval(t),window.scrollTo(0,0))}),100)},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),document.addEventListener("scroll",this.scrollHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.scrollHandler)}},{key:"render",value:function(){var e=this.props,t=e.error,r=e.resetError,a=t?t.message:null;if(!this.props.initialized)return n.a.createElement(be.a,null);var o=this.state.toTop?U.a.visible:U.a.hidden;return n.a.createElement("div",{className:U.a.app_wrapper},n.a.createElement(ne,null),n.a.createElement(we,{errorMessage:a,hint:"Click to hide",onClick:r}),n.a.createElement("section",{className:U.a.app},n.a.createElement(z,null),n.a.createElement("section",{className:U.a.mainPage_content},n.a.createElement("div",{className:"".concat(U.a.toTop," ").concat(o),onClick:this.srollToTop},n.a.createElement("img",{src:R.a,alt:"arrow"}),n.a.createElement("span",null,"Top")),n.a.createElement(d.d,null,n.a.createElement(d.a,{exact:!0,from:"/",to:"/profile"}),n.a.createElement(d.b,{path:"/login",component:me}),n.a.createElement(d.b,{path:"/profile/:userId?",exact:!0,render:function(){return Pe(xe)}}),n.a.createElement(d.b,{path:"/dialogs/:name?",exact:!0,render:function(){return Pe(je)}}),n.a.createElement(d.b,{path:"/users",exact:!0,render:function(){return Pe(_e)}}),n.a.createElement(d.b,{path:"/music",exact:!0,component:Y}),n.a.createElement(d.b,{path:"/settings",exact:!0,component:B}),n.a.createElement(d.b,{path:"/news",exact:!0,component:K}),n.a.createElement(d.b,{component:ge})))))}}]),t}(n.a.Component),ke=Object(f.b)((function(e){return{initialized:e.app.initialized,error:e.errors.error}}),{initializeApp:function(){return function(e){try{var t=e(k());Promise.all([t]).then((function(){e({type:L})}))}catch(r){e(Object(E.c)({error:r}))}}},resetError:E.b})(Ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=r(8),Se=r(145),Ce=r(146),Ie=r(133),De=r(130),Te=r(98),Le={},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;arguments.length>1&&arguments[1];return e},Ue=r(99),Fe=Object(Me.combineReducers)({profilePage:Te.c,dialogsPage:De.b,sideBar:Ae,usersPage:Ue.a,app:T,auth:x,form:Ie.a,errors:E.a}),Re=Object(Me.createStore)(Fe,Object(Ce.composeWithDevTools)(Object(Me.applyMiddleware)(Se.a)));c.a.render(n.a.createElement(i.a,null,n.a.createElement(f.a,{store:Re},n.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},37:function(e,t,r){e.exports={app:"App_app__15g8s",mainPage_content:"App_mainPage_content__3Qq10",toTop:"App_toTop__YFwAO",visible:"App_visible___7_09",hidden:"App_hidden__OSH6O"}},38:function(e,t,r){e.exports={commonError:"CommonError_commonError__cxVMK",hideError:"CommonError_hideError__1rBE1",messages:"CommonError_messages__2gStQ",errorMessage:"CommonError_errorMessage__2Is8I",hint:"CommonError_hint__2vO9X"}},39:function(e,t,r){e.exports=r.p+"static/media/cvetok-lepestki.8810c4d2.jpg"},60:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var a=function(e){return e&&0!==e.length?void 0:"Field is required"},n=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}},o=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"":"Invalid email address"}},74:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l}));var a=r(48),n=r(0),o=r.n(n),c=r(94),i=r.n(c),s=function(e){e.input;var t=e.meta,r=(e.child,Object(a.a)(e,["input","meta","child"])),n=t.touched&&t.error;return o.a.createElement("div",{className:i.a.formControle+" "+(n?i.a.error:"")},o.a.createElement("div",null,r.children),n&&o.a.createElement("span",null,t.error))},u=function(e){var t=e.input,r=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,r)))},l=function(e){var t=e.input,r=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,r)))}},9:function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l}));var a=r(11);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={error:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return o({},e,{},t.payload);case u:return{error:null};default:return e}};var i="SET_ERROR",s=function(e){return{type:i,payload:e}},u="RESET_ERROR",l=function(){return{type:u}}},91:function(e,t,r){e.exports=r.p+"static/media/avatar.18685b60.png"},94:function(e,t,r){e.exports={formControle:"FormControle_formControle__21Yy6",error:"FormControle_error__frwee"}},97:function(e,t,r){"use strict";var a=r(11),n=r(48),o=r(0),c=r.n(o),i=r(143),s=r.n(i);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}t.a=function(e){var t=e.className,r=void 0===t?null:t,o=e.width,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:void 0===o?"40px":o},Object(n.a)(e,["className","width"]));return c.a.createElement("img",{src:s.a,alt:"preloader",style:i,className:r})}},98:function(e,t,r){"use strict";r.d(t,"f",(function(){return y})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return _})),r.d(t,"g",(function(){return N})),r.d(t,"b",(function(){return S})),r.d(t,"a",(function(){return I}));var a=r(7),n=r.n(a),o=r(19),c=r(27),i=r(11),s=r(10),u=r(39),l=r.n(u),p=r(34),m=r(9);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={postsData:[{name:"Pavel",message:"Hi. I am fine. Thank you!",like:15,id:"Pavel",profileImage:l.a},{name:"Yuriy",message:"Hello! How are you",like:10,id:"Yuriy",profileImage:l.a},{name:"Katya",message:"Would you like a cup of tee?",like:17,id:"Katya",profileImage:l.a},{name:"Masha",message:"No, i'd like a glass of juice.",like:17,id:"Masha",profileImage:l.a},{name:"EasyMan",message:"Ok. Here it is!",like:17,id:"EasyMan",profileImage:l.a}],userProfile:{photos:{},status:""},profileProgress:{profileIsLoading:!1,statusIsLoading:!1,profileIsEditing:!1}};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return f({},e,{userProfile:f({},e.userProfile,{},t.userProfile)});case E:return f({},e,{profileProgress:f({},e.profileProgress,{profileIsEditing:t.isEditing})});case x:return f({},e,{userProfile:f({},e.userProfile,{status:t.status})});case k:return f({},e,{profileProgress:f({},e.profileProgress,{statusIsLoading:t.loading})});case C:var r={name:"Kolya",message:t.postText,like:null,id:Math.random(),profileImage:l.a};return f({},e,{postsData:[].concat(Object(c.a)(e.postsData),[r])});case b:return f({},e,{profileProgress:f({},e.profileProgress,{profileIsLoading:t.loading})});default:return e}};var b="network/profile/TOGGLE_PROFILE_LOADING",h=function(e){return{type:b,loading:e}},O="network/profile/SET_USER_PROFILE",v=function(e){return{type:O,userProfile:e}},y=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(h(!0)),t.next=4,s.b.getUserProfile(e);case 4:a=t.sent,r(v(a.data)),r(h(!1)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r(Object(m.c)({error:t.t0}));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},E="network/profile/PROFILE_IS_EDITING",w=function(e){return{type:E,isEditing:e}},j=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r,a){var o,c,i,u;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=a().auth.id,r(w(!0)),t.next=5,s.b.editMyProfile(e);case 5:if(0!==(c=t.sent).data.resultCode){t.next=14;break}return t.next=9,s.b.getUserProfile(o);case 9:i=t.sent,r(v(i.data)),r(w(!1)),t.next=18;break;case 14:return u=c.data.messages.length>0?c.data.messages[0]:"Error is undefined",r(Object(p.a)("editProfile",{_error:u})),r(w(!1)),t.abrupt("return",Promise.reject("error"));case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),r(Object(m.c)({error:t.t0}));case 23:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(e,r){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r,a){var o,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=a().auth.id,r(w(!0)),t.next=5,s.b.setProfilePhoto(e);case 5:if(0!==t.sent.data.resultCode){t.next=12;break}return t.next=9,s.b.getUserProfile(o);case 9:c=t.sent,r(v(c.data)),r(w(!1));case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),r(Object(m.c)({error:t.t0}));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,r){return t.apply(this,arguments)}}()},x="network/profile/SET_USER_STATUS",P=function(e){return{type:x,status:e}},N=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.b.getUserStatus(e);case 3:a=t.sent,r(P(a.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(Object(m.c)({error:t.t0}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},k="network/profile/TOGGLE_STATUS_LOADING",M=function(e){return{type:k,loading:e}},S=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(M(!0)),t.next=4,s.b.setStatus(e);case 4:0===t.sent.data.resultCode&&(r(P(e)),r(M(!1))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r(Object(m.c)({error:t.t0}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},C="network/profile/ADD-POST",I=function(e){return{type:C,postText:e}}},99:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return w}));var a=r(7),n=r.n(a),o=r(19),c=r(11),i=r(27),s=r(10),u=r(9);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={users:[],totalUsersCount:0,pageSize:4,currentPage:336,isLoading:!1,followInProgress:!1,pagesCount:null},d="network/users/TOGGLE_FOLLOW_PROGRESS",f=function(e,t){return{type:d,userId:e,value:t}},g="network/users/TOGGLE_FOLLOW",b=function(e,t){return{type:g,userId:e,isFollowed:t}},h=function(e,t){return function(){var r=Object(o.a)(n.a.mark((function r(a){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a(f(e,!0)),o=t?s.c.setFollow(e):s.c.setUnfollow(e),r.next=5,o;case 5:0===r.sent.data.resultCode&&(a(b(e,t)),a(f(e,!1))),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),a(Object(u.c)({error:r.t0}));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},O="network/users/TOGGLE_USER_LOADING",v=function(e){return{type:O,isLoading:e}},y="network/users/SET_USERS",E=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3?arguments[3]:void 0;return{type:y,users:e,totalCount:t,currentPage:r,inList:a}},w=function(e,t){return function(){var r=Object(o.a)(n.a.mark((function r(a,o){var c,i,l,p,m;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c=o().usersPage.pageSize,a(v(!0)),r.next=5,s.c.setUsers(c,e);case 5:i=r.sent,l=i.data,p=l.items,m=l.totalCount,a(E(p,m,e,t)),a(v(!1)),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),a(v(!1)),a(Object(u.c)({error:r.t0}));case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var r=t.inList?[].concat(Object(i.a)(t.users),Object(i.a)(e.users)):Object(i.a)(t.users);return p({},e,{users:Object(i.a)(r),totalUsersCount:t.totalCount,currentPage:t.currentPage,pagesCount:Math.ceil(t.totalCount/e.pageSize)});case g:return p({},e,{users:e.users.map((function(e){return e.id===t.userId?p({},e,{followed:t.isFollowed}):e}))});case O:return p({},e,{isLoading:t.isLoading});case d:return p({},e,{users:e.users.map((function(e){return e.id===t.userId?p({},e,{followInProgress:t.value}):e}))});default:return e}}}},[[172,1,2]]]);
//# sourceMappingURL=main.06986aa6.chunk.js.map