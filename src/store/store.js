import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
import router from '../router';

import backend from './backend';
import coupons from './coupons';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    cart: {
      carts: [],
    },
    products: [],
    allProducts: [],
    oneProduct: {},
    disable: false,
    status: {
      loadingItem: '',
    },
    order: {
      user: {},
    },
    coupon_code: '',
    orderId: '',
    messages: [],
    user: {
      username: '',
      password: '',
    },
    category: [],
    type: '',
    checkOrder: {
      user: {},
    },
    showOrder: false,
    checkId: '',
    collected: JSON.parse(localStorage.getItem('collectedItems')) || [],
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    CARTSTATUS(state, payload) {
      state.disable = payload;
    },
    GET_CART(state, payload) {
      state.cart = payload;
    },
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    GET_ALLPRODUCTS(state, payload) {
      state.allProducts = payload;
    },
    UPDATELOADING(state, payload) {
      state.status.loadingItem = payload;
    },
    GET_ONEPRODUCT(state, payload) {
      state.oneProduct = payload;
    },
    GET_ORDER(state, payload) {
      state.order = payload;
    },
    COUPON(state, val) {
      state.coupon_code = val;
    },
    ORDERID(state) {
      state.orderId = router.currentRoute.params.orderId;
    },
    PRODUCTID(state) {
      state.productId = router.currentRoute.params.id;
    },
    UPDATEMESSAGE(state, { message, status, timestamp }) {
      state.messages.push({
        message,
        status,
        timestamp,
      });
    },
    REMOVEMESSAGE(state, payload) {
      state.messages.splice(payload, 1);
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    CATEGORY(state, payload) {
      const category = new Set();
      payload.forEach((item) => {
        category.add(item.category);
      });
      state.category = Array.from(category);
    },
    CHANGECATEGORY(state, payload) {
      state.type = payload;
    },
    CHECKID(state, val) {
      state.checkId = val;
    },
    SHOWORDER(state, payload) {
      state.showOrder = payload;
    },
    CHECKORDER(state, payload) {
      state.checkOrder = payload;
    },
    ADDCOLLECTEDITEMS(state, payload) {
      state.collected.push(payload);
    },
    REMOVECOLLECTEDITEMS(state, payload) {
      state.collected.splice(payload, 1);
    },
    COLLECTEDITEMS(state, payload) {
      localStorage.setItem('collectedItems', JSON.stringify(payload));
    },
  },
  getters: {
    filterCategory(state) {
      if (state.type) {
        return state.allProducts.filter((item) => state.type === item.category);
      }
      return state.allProducts;
    },
  },
  actions: {
    getCart({ commit }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      commit('LOADING', true);
      axios.get(api).then((response) => {
        commit('GET_CART', response.data.data);
        commit('LOADING', false);
      });
    },
    getProducts({ commit }, payload) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${payload}`;
      commit('LOADING', true);
      axios.get(api).then((response) => {
        commit('GET_PRODUCTS', response.data.products);
        commit('LOADING', false);
      });
    },
    getAllProducts({ commit }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      commit('LOADING', true);
      axios.get(api).then((response) => {
        commit('GET_ALLPRODUCTS', response.data.products);
        commit('CATEGORY', response.data.products);
        commit('LOADING', false);
      });
    },
    getOneProduct({ commit }, payload) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${payload}`;
      commit('UPDATELOADING', payload);
      axios.get(api).then((response) => {
        commit('GET_ONEPRODUCT', response.data.product);
        router.push(`/customer_orders/${payload}`);
        commit('UPDATELOADING', '');
      });
    },
    deleteCartItem({ dispatch, state }, payload) {
      const cartItem = state.cart.carts.find((item) => item.id === payload); // payload是carts內的id不是產品的id,所以要用cart.carts去找
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${payload}`;
      axios.delete(api).then(() => {
        dispatch('getCart');
        const message = `${cartItem.product.title} 已從購物車刪除`;
        const status = 'danger';
        dispatch('updateMessage', { message, status });
      });
    },
    addCouponCode({ dispatch, commit, state }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = { code: state.coupon_code };
      axios.post(api, { data: coupon }).then((response) => {
        commit('COUPON', '');
        dispatch('getCart');
        const { message } = response.data;
        const status = 'warning';
        dispatch('updateMessage', { message, status });
      });
    },
    // 把結帳畫面的購物車數量更新及同樣的產品重複加入購物車時，合併為同一筆資料
    updateQty({ dispatch, commit, state }, { originCartId, originProductId, newQty }) {
      const cartItem = state.allProducts.find((item) => item.id === originProductId);
      const delAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${originCartId}`;
      const addAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const changeCart = {
        product_id: originProductId,
        qty: newQty,
      };
      commit('UPDATELOADING', originProductId);
      commit('LOADING', true);
      commit('CARTSTATUS', true);
      axios
      // 把原有的購物車刪掉,並重新把新的購物車資料傳送到加入購物車的API,再重新取得購物車列表
        .all([
          axios.delete(delAPI),
          axios.post(addAPI, { data: changeCart }),
        ])
        .then(
          axios.spread(() => {
            dispatch('getCart');
            commit('LOADING', false);
            commit('CARTSTATUS', false);
            commit('UPDATELOADING', '');
            const message = `${cartItem.title} 已加入購物車`;
            const status = 'warning';
            dispatch('updateMessage', { message, status });
          }),
        );
    },
    addToCart({ dispatch, commit, state }, { id, qty }) {
      const cartItem = state.allProducts.find((item) => item.id === id);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      commit('LOADING', true);
      commit('CARTSTATUS', true);
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(api, { data: cart }).then(() => {
        commit('LOADING', false);
        commit('CARTSTATUS', false);
        dispatch('getCart');
        const message = `${cartItem.title} 已加入購物車`;
        const status = 'warning';
        dispatch('updateMessage', { message, status });
      });
    },
    getOrder({ commit, state }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${state.orderId}`;
      commit('LOADING', true);
      axios.get(api).then((response) => {
        commit('GET_ORDER', response.data.order);
        commit('LOADING', false);
      });
    },
    pay({ commit, dispatch, state }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${state.orderId}`;
      commit('LOADING', true);
      axios.post(api).then(() => {
        dispatch('getOrder');
        dispatch('getCart');
        commit('LOADING', false);
      });
    },
    updateMessage({ commit, dispatch }, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      commit('UPDATEMESSAGE', { message, status, timestamp });
      dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessageWithTiming({ state, commit }, timestamp) {
      setTimeout(() => {
        state.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            commit('REMOVEMESSAGE', i);
          }
        });
      }, 1000);
    },
    logout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      axios.post(api).then((response) => {
        if (response.data.success) {
          router.push('/login');
        }
      });
    },
    checkorder({ commit }, id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${id}`;
      commit('LOADING', true);
      axios.get(api).then((response) => {
        commit('SHOWORDER', true);
        commit('CHECKORDER', response.data.order);
        commit('LOADING', false);
      });
    },
    addToFavList({ state, commit, dispatch }, payload) {
      const favItem = state.allProducts.find((item) => item.id === payload);
      if (state.collected.find((item) => item.id === payload)) {
        dispatch('deleteFavItem', payload);
      } else {
        commit('ADDCOLLECTEDITEMS', favItem);
        const message = `${favItem.title} 加入收藏清單中!`;
        const status = 'warning';
        dispatch('updateMessage', { message, status });
      }
      commit('COLLECTEDITEMS', state.collected);
    },
    checkFavList({ state, commit, dispatch }, payload) {
      const favItem = state.allProducts.find((item) => item.id === payload);
      if (!state.collected.find((item) => item.id === payload)) {
        commit('ADDCOLLECTEDITEMS', favItem);
        const message = `${favItem.title} 加入收藏清單中!`;
        const status = 'warning';
        dispatch('updateMessage', { message, status });
      }
      commit('COLLECTEDITEMS', state.collected);
    },
    deleteFavItem({ state, commit, dispatch }, payload) {
      const favItem = state.collected.find((item) => item.id === payload);
      const index = state.collected.findIndex((item) => item.id === payload);
      if (index === -1) return;

      // remove the movie from data
      commit('REMOVECOLLECTEDITEMS', index);
      const message = `${favItem.title} 移除收藏清單!`;
      const status = 'danger';
      dispatch('updateMessage', { message, status });
      // update data in local storage
      commit('COLLECTEDITEMS', state.collected);
    },
  },
  modules: {
    backend,
    coupons,
  },

});

export default store;
