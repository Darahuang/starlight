(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d3d983c"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center mt-3"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.childPagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.childPagination.current_page-1)}}},[t._v("Previous")])]),t._l(t.childPagination.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.childPagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.childPagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.childPagination.current_page+1)}}},[t._v("Next")])])],2)])])},o=[],i={props:["childPagination"],methods:{updatePage:function(t){this.$emit("emitPage",t)}}},r=i,c=a("2877"),l=Object(c["a"])(r,s,o,!1,null,null,null);e["a"]=l.exports},"56a6":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-alert"},t._l(t.messages,(function(e,s){return a("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v(" "+t._s(e.message)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(s)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},o=[],i=a("5530"),r=a("2f62"),c={methods:{updateMessage:function(t,e){this.$store.dispatch("updateMessage",{message:t,status:e})},removeMessage:function(t){this.$store.commit("REMOVEMESSAGE",t)},removeMessageWithTiming:function(t){this.$store.dispatch("removeMessageWithTiming",t)}},computed:Object(i["a"])({},Object(r["c"])(["messages"]))},l=c,n=a("2877"),d=Object(n["a"])(l,s,o,!1,null,null,null);e["a"]=d.exports},"61bc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AlertMessage"),a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新的產品")])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table mt-4 table-hover"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right d-none d-md-table-cell"},[t._v(" "+t._s(t._f("currencyFilter")(e.origin_price))+" ")]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currencyFilter")(e.price)))]),a("td",{staticClass:"d-none d-md-table-cell"},[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",[a("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.openModal(!1,e)}}},[t._v(" 編輯 ")]),a("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.deleteModal(e)}}},[t._v(" 刪除 ")])])])])})),0)])]),a("Pagination",{attrs:{childPagination:t.pagination},on:{emitPage:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[t._m(2),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v(" 或 上傳圖片 "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.copyTempProduct.imageUrl,alt:"產品圖片"}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyTempProduct.title,expression:"copyTempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.copyTempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.copyTempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyTempProduct.category,expression:"copyTempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.copyTempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.copyTempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyTempProduct.unit,expression:"copyTempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.copyTempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.copyTempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyTempProduct.origin_price,expression:"copyTempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.copyTempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.copyTempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyTempProduct.price,expression:"copyTempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.copyTempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.copyTempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.copyTempProduct.description,expression:"copyTempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.copyTempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.copyTempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.copyTempProduct.content,expression:"copyTempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.copyTempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.copyTempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyTempProduct.is_enabled,expression:"copyTempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.copyTempProduct.is_enabled)?t._i(t.copyTempProduct.is_enabled,null)>-1:t._q(t.copyTempProduct.is_enabled,1)},on:{change:function(e){var a=t.copyTempProduct.is_enabled,s=e.target,o=s.checked?1:0;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&t.$set(t.copyTempProduct,"is_enabled",a.concat([i])):r>-1&&t.$set(t.copyTempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.copyTempProduct,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.updateProduct(t.copyTempProduct)}}},[t._v(" 確認 ")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(3),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteProduct()}}},[t._v("確認刪除")])])])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{staticClass:"d-none d-md-table-cell"},[t._v("原價")]),a("th",[t._v("售價")]),a("th",{staticClass:"d-none d-md-table-cell"},[t._v("是否啟用")]),a("th",[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=a("5530"),r=a("1799"),c=a("56a6"),l=a("2f62"),n={components:{Pagination:r["a"],AlertMessage:c["a"]},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.dispatch("backend/getProducts",t)},openModal:function(t,e){this.$store.commit("backend/OPENMODAL",{isNew:t,item:e})},updateProduct:function(t){this.$store.dispatch("backend/updateProduct",t)},deleteModal:function(t){this.$store.commit("backend/DELETEMODAL",t)},deleteProduct:function(){this.$store.dispatch("backend/deleteProduct")},uploadFile:function(){var t=this,e=t.$refs.files.files[0];t.$store.dispatch("backend/uploadFile",e)}},created:function(){this.getProducts()},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(l["c"])("backend",["products","pagination","isNew","status","tempProduct"])),Object(l["c"])(["isLoading"])),{},{copyTempProduct:function(){return Object(i["a"])({},this.tempProduct)}})},d=n,u=a("2877"),p=Object(u["a"])(d,s,o,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-6d3d983c.0b9dda26.js.map