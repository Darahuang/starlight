import Vue from 'vue';
import axios from 'axios';
import $ from 'jquery';

export default {
  namespaced: true,
  strict: true,
  state: {
    products: [],
    pagination: {},
    tempProduct: {},
    isNew: false,
    orders: [],
    tempOrder: {
      user: {},
    },
    status: {
      fileUploading: false,
    },
  },
  mutations: {
    DASHPRODUCTS(state, payload) {
      state.products = payload;
    },
    DASHPROPAGINATION(state, payload) {
      state.pagination = payload;
    },
    DASHORDERS(state, payload) {
      state.orders = payload;
    },
    OPENMODAL(state, { isNew, item }) {
      if (isNew) {
        state.tempProduct = {};
        state.isNew = true;
      } else {
        state.tempProduct = { ...item };
        state.isNew = false;
      }
      $('#productModal').modal('show');
    },
    DELETEMODAL(state, payload) {
      state.tempProduct = payload;
      $('#delProductModal').modal('show');
    },
    OPENORDERMODAL(state, item) {
      state.tempOrder = { ...item };
      $('#orderModal').modal('show');
    },
    FILESTATUS(state, payload) {
      state.status.fileUploading = payload;
    },
    SETIMG(state, payload) {
      Vue.set(state.tempProduct, 'imageUrl', payload);
    },
  },
  actions: {
    getProducts({ commit }, page) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        if (response.data.success) {
          commit('DASHPRODUCTS', response.data.products);
          commit('DASHPROPAGINATION', response.data.pagination);
          commit('LOADING', false, { root: true });
        }
      });
    },
    updateProduct({ state, dispatch }, payload) {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`; // 新增商品
      let httpMethod = 'post';
      if (!state.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${payload.id}`; // 修改商品
        httpMethod = 'put';
      }
      axios[httpMethod](api, { data: payload }).then((response) => {
        if (response.data.success) {
          $('#productModal').modal('hide');
          dispatch('getProducts');
          const { message } = response.data;
          const status = 'warning';
          dispatch('updateMessage', { message, status }, { root: true });
        } else {
          $('#productModal').modal('hide');
          dispatch('getProducts');
          const { message } = response.data;
          const status = 'warning';
          dispatch('updateMessage', { message, status }, { root: true });
        }
      });
    },
    deleteProduct({ dispatch, state }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${state.tempProduct.id}`;
      axios.delete(api).then((response) => {
        if (response.data.success) {
          $('#delProductModal').modal('hide');
          dispatch('getProducts');
          const { message } = response.data;
          const status = 'danger';
          dispatch('updateMessage', { message, status }, { root: true });
        } else {
          $('#delProductModal').modal('hide');
          dispatch('getProducts');
          const { message } = response.data;
          const status = 'warning';
          dispatch('updateMessage', { message, status }, { root: true });
        }
      });
    },
    getOrder({ commit }, payload) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${payload}`;
      commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        commit('DASHORDERS', response.data.orders);
        commit('DASHPROPAGINATION', response.data.pagination);
        commit('LOADING', false, { root: true });
      });
    },
    uploadFile({ commit, dispatch }, payload) {
      commit('FILESTATUS', true);
      const formData = new FormData();
      formData.append('file-to-upload', payload);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      axios
        .post(api, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          commit('FILESTATUS', false);
          if (response.data.success) {
            commit('SETIMG', response.data.imageUrl);
          } else {
            const { message } = response.data;
            const status = 'danger';
            dispatch('updateMessage', { message, status }, { root: true });
          }
        });
    },
  },
};
