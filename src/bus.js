import Vue from 'vue';

Vue.prototype.$bus = new Vue();
// vm.$bus.$emit('message:push', message, status)
// message: 要顯示的訊息內容
// status: 樣式，預設值為 warning
// 因為Event Bus 可以做到跨元件溝通,如果沒有標示，會不清楚有哪些方法可以使用喔

// vm.$bus.$emit('getCart') 按下加入購物車後,去執行取得購物車列表

// vm.$bus.$emit('cart', vm.cartNumber)把購物車數量送到Header.vue
