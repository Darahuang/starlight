(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212c2f"],{aa92:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"login"},[a("form",{staticClass:"form-signin mt-5",on:{submit:function(s){return s.preventDefault(),e.login(s)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-bolder text-primary text-center"},[e._v("登入後台管理")]),a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[e._v("Email address")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model.lazy",value:e.user.username,expression:"user.username",modifiers:{lazy:!0}}],staticClass:"form-control",class:{"is-invalid":e.errors.has("email")},attrs:{type:"email",name:"email",id:"inputEmail",placeholder:"Email address",autofocus:""},domProps:{value:e.user.username},on:{change:function(s){return e.$set(e.user,"username",s.target.value)}}}),e.errors.has("email")?a("span",{staticClass:"text-danger"},[e._v("請輸入Email")]):e._e(),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[e._v("Password")]),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("password")},attrs:{type:"password",name:"password",id:"inputPassword",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),e.errors.has("password")?a("span",{staticClass:"text-danger"},[e._v("請輸入密碼")]):e._e(),a("button",{staticClass:"btn btn-lg btn-primary btn-block mt-3",attrs:{type:"submit"}},[e._v("Log in")]),a("p",{ref:"fail",staticClass:"text-danger h6 mt-3"}),a("p",{staticClass:"mt-3 text-deep"},[e._v("© 2020 Starlight* All Rights Reserved")]),a("router-link",{staticClass:"text-primary text-decoration-none link-hover",attrs:{to:"/"}},[a("i",{staticClass:"fas fa-arrow-left"}),e._v(" 回到 Starlight ")])],1)])},r=[],i=(a("99af"),{data:function(){return{user:{username:"",password:""}}},methods:{login:function(){var e=this,s="".concat("https://vue-course-api.hexschool.io","/admin/signin");this.axios.post(s,e.user).then((function(s){if(s.data.success){var a=s.data,t=a.token,r=a.expired;document.cookie="starlightselect=".concat(t,";expires=").concat(new Date(r),";"),e.$router.push("/admin/products")}else{var i=e.$refs.fail;i.textContent="登入失敗"}}))}}}),n=i,o=a("2877"),l=Object(o["a"])(n,t,r,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d212c2f.0d9e1bc8.js.map