(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8464"],{"53d4":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),e("section",{staticClass:"container py-5 bg-cover",staticStyle:{"background-image":"url(https://images.unsplash.com/photo-1502355984-b735cb2550ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"},attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"mx-auto text-center"},[e("div",{staticClass:"bg-deep p-5 my-5"},[e("h5",{staticClass:"text-white pb-3 font-weight-bolder"},[t._v("請輸入訂單號碼：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.id},on:{input:function(s){s.target.composing||(t.id=s.target.value)}}}),e("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"},on:{click:function(s){return t.checkorder(t.id)}}},[t._v(" 查詢訂單 ")])])])])]),t.showOrder?e("section",{staticClass:"container mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"},[t._m(0),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("th",[t._v("Email")]),e("td",[t._v(t._s(t.checkOrder.user.email))])]),e("tr",[e("th",[t._v("姓名")]),e("td",[t._v(t._s(t.checkOrder.user.name))])]),e("tr",[e("th",[t._v("收件人電話")]),e("td",[t._v(t._s(t.checkOrder.user.tel))])]),e("tr",[e("th",[t._v("收件人地址")]),e("td",[t._v(t._s(t.checkOrder.user.address))])]),e("tr",[e("th",[t._v("付款狀況")]),e("td",[t.checkOrder.is_paid?e("span",{staticClass:"text-primary text-success"},[t._v("確認付款")]):e("span",[t._v("尚未付款")])])])])])])]),e("div",{staticClass:"col-md-5"},[t._m(1),t._l(t.checkOrder.products,(function(s){return e("div",{key:s.id,staticClass:"row"},[e("div",{staticClass:"col-4 mb-3"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:s.product.imageUrl,alt:"產品圖片",srcset:"",width:"80px",height:"80px"}})])]),e("div",{staticClass:"col-8"},[e("h6",[t._v(t._s(s.product.title)+" x"+t._s(s.qty))]),e("h6",[t._v("小計"+t._s(t._f("currencyFilter")(s.final_total)))])])])})),e("hr"),e("div",[e("h5",{staticClass:"text-right text-danger"},[t._v("總計"+t._s(t._f("currencyFilter")(t.checkOrder.total)))])])],2)])]):t._e()],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h5",{staticClass:"text-primary font-weight-bolder"},[t._v(" 客戶資料 "),e("i",{staticClass:"fas fa-user ml-2"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h5",{staticClass:"text-primary font-weight-bolder"},[t._v(" 訂單內容 "),e("i",{staticClass:"far fa-list-alt ml-2"})])}],r=e("5530"),c=e("2f62"),o={methods:{checkorder:function(t){this.$store.dispatch("checkorder",t)}},computed:Object(r["a"])(Object(r["a"])({},Object(c["c"])(["checkOrder","isLoading","showOrder"])),{},{id:{get:function(){return this.$store.state.checkId},set:function(t){this.$store.commit("CHECKID",t)}}})},d=o,n=e("2877"),l=Object(n["a"])(d,a,i,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c8464.19af5c80.js.map