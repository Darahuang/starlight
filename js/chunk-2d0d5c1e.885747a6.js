(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5c1e"],{"703b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[0!==t.collected.length?s("div",{staticClass:"row d-flex justify-content-center"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"p-3 table-font"},[t._m(0),s("table",{staticClass:"table"},[t._m(1),s("tbody",t._l(t.collected,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"align-middle cursor d-md-table-cell d-none text-center",on:{click:function(s){return t.getOneProduct(e.id)}}},[s("img",{staticClass:"tab-hover cart-image",attrs:{src:e.imageUrl,alt:"產品圖片",srcset:""}})]),s("td",{staticClass:"align-middle cursor",on:{click:function(s){return t.getOneProduct(e.id)}}},[s("span",{staticClass:"link-hover"},[t._v(" "+t._s(e.title))])]),s("td",{staticClass:"align-middle text-center"},[s("a",{staticClass:"d-block",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.addtoCart(e.id,t.qty=1)}}},[s("i",{staticClass:"fas fa-shopping-cart fa-2x"})])]),s("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(t._f("currencyFilter")(e.price))+" ")]),s("td",{staticClass:"align-middle text-right"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.deleteFavItem(e.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])])])})),0)])])])]):s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8 text-center bg-height bg-cover d-flex flex-column justify-content-center align-items-center",staticStyle:{"background-image":"url(https://images.unsplash.com/photo-1576021257863-743c50564725?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}},[s("p",{staticClass:"text-primary font-weight-bolder h6"},[t._v("收藏清單中目前沒有商品")]),s("button",{staticClass:"btn btn-accent",attrs:{type:"button"},on:{click:t.toCustomerOrders}},[t._v("繼續逛逛")])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"text-center text-primary py-3 font-weight-bolder"},[s("i",{staticClass:"fab fa-pagelines mr-2"}),t._v("收藏清單 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"d-md-table-cell d-none text-center",attrs:{width:"20%"}}),s("th",[t._v("商品名稱")]),s("th",{staticClass:"text-center"},[t._v("加入購物車")]),s("th",[t._v("單價")]),s("th",[t._v("刪除")])])])}],c=(s("4de4"),s("5530")),r=s("2f62"),n={methods:{deleteFavItem:function(t){this.$store.dispatch("deleteFavItem",t)},getOneProduct:function(t){this.$store.dispatch("getOneProduct",t)},addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this,a=s.cart.carts.filter((function(e){return e.product_id===t}));if(a.length>0){var i=a[0],c=i.id,r=i.qty,n=r+e,l=i.product.id;s.$store.dispatch("updateQty",{originCartId:c,originProductId:l,newQty:n})}else s.$store.dispatch("addToCart",{id:t,qty:e})},toCustomerOrders:function(){var t=this;t.$router.push("/customer_orders")}},computed:Object(c["a"])({},Object(r["c"])(["collected","cart"]))},l=n,o=s("2877"),d=Object(o["a"])(l,a,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d5c1e.885747a6.js.map