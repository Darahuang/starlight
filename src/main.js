import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue';
import router from './router';
import './bus';
import './validate';
import currencyFilter from './filters/currencyFilter';
import dateFilter from './filters/dateFilter';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.component('Loading', Loading);

Vue.filter('currencyFilter', currencyFilter);
Vue.filter('dateFilter', dateFilter);

axios.defaults.withCredentials = true;

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});

new Vue({
  router,
  created() {
    AOS.init({
      duration: 1500,
      once: true,
    });
  },
  render: (h) => h(App),
}).$mount('#app');
