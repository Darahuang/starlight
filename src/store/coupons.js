import axios from 'axios';
import $ from 'jquery';

export default {
  namespaced: true,
  strict: true,
  state: {
    coupons: [],
    due_date: new Date(),
    tempCoupon: {},
    isNew: false,
  },
  mutations: {
    COUPONS(state, payload) {
      state.coupons = payload;
    },
    DUEDATE(state, payload) {
      state.due_date = payload;
      const timestamp = Math.floor(new Date(state.due_date) / 1000);
      state.tempCoupon.due_date = timestamp;
    },
    OPENCOUPONMODAL(state, { isNew, item }) {
      if (isNew) {
        state.tempCoupon = {};
        state.isNew = true;
      } else {
        state.tempCoupon = { ...item };
        state.isNew = false;
        const dateAndTime = new Date(state.tempCoupon.due_date * 1000).toISOString().split('T');
        const index = 0;
        state.due_date = dateAndTime[index];
      }
      $('#couponModal').modal('show');
    },
    DELETECOUPONMODAL(state, payload) {
      state.tempCoupon = payload;
      $('#delCouponModal').modal('show');
    },
    UPDATETITLE(state, payload) {
      state.tempCoupon.title = payload;
    },
    UPDATECODE(state, payload) {
      state.tempCoupon.code = payload;
    },
    UPDATEPERCENT(state, payload) {
      state.tempCoupon.percent = payload;
    },
    UPDATEENABLE(state, payload) {
      state.tempCoupon.is_enabled = payload;
    },
  },
  actions: {
    getCoupons({ commit }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons`;
      commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        commit('COUPONS', response.data.coupons);
        commit('LOADING', false, { root: true });
      });
    },
    updateCoupon({ state, dispatch }) {
      if (state.isNew) {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
        axios.post(api, { data: state.tempCoupon }).then((response) => {
          $('#couponModal').modal('hide');
          dispatch('getCoupons');
          const { message } = response.data;
          const status = 'warning';
          dispatch('updateMessage', { message, status }, { root: true });
        });
      } else {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${state.tempCoupon.id}`;
        state.due_date = new Date(state.tempCoupon.due_date * 1000);
        axios.put(api, { data: state.tempCoupon }).then((response) => {
          $('#couponModal').modal('hide');
          dispatch('getCoupons');
          const { message } = response.data;
          const status = 'warning';
          dispatch('updateMessage', { message, status }, { root: true });
        });
      }
    },
    deleteCoupon({ state, dispatch }) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${state.tempCoupon.id}`;
      axios.delete(api).then((response) => {
        if (response.data.success) {
          $('#delCouponModal').modal('hide');
          dispatch('getCoupons');
          const { message } = response.data;
          const status = 'danger';
          dispatch('updateMessage', { message, status }, { root: true });
        } else {
          $('#delCouponModal').modal('hide');
          dispatch('getCoupons');
          const { message } = response.data;
          const status = 'warning';
          dispatch('updateMessage', { message, status }, { root: true });
        }
      });
    },
  },
};
