import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';

window.Vue = Vue;
const i18n = new VueI18n({
  locale: 'zhTw',

});
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhTW,
  },
});

// const getMessage = field => `${field} 格式不正確`;

const validate = (value) => {
  const regex = /^09\d{2}-?\d{3}-?\d{3}$/;
  return regex.test(value);
};

const myValidator = {
  // getMessage,
  validate,
};
Validator.extend('myPhone', myValidator);
