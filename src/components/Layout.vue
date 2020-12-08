<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="flex-grow-1">
      <Menu></Menu>
      <AlertMessage></AlertMessage>
      <router-view></router-view>
      <button class="btn float-right" id="gotopBtn" @click="gotop">
        <i class="fas fa-arrow-alt-circle-up fa-2x"></i>
      </button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import $ from 'jquery';

import Menu from './Menu.vue';
import Footer from './Footer.vue';
import AlertMessage from './AlertMessage.vue';

export default {
  components: {
    Menu,
    Footer,
    AlertMessage,
  },
  methods: {
    gotop() {
      $('html, body').animate({ scrollTop: 0 }, 1500);
    },
  },
  created() {
    // 偵測頁面往下滑超過 400px 就讓 Gotop 按鈕出現
    function showBtnCondition() {
      if ($(this).scrollTop() > 400) {
        $('#gotopBtn').fadeIn();
      } else {
        $('#gotopBtn').fadeOut();
      }
    }
    $(window).scroll(showBtnCondition);
  },
};
</script>

<style scoped>
.btn:hover,
.btn:focus {
  color: #f0d22c;
}

</style>
