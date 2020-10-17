<template>
  <div class="d-flex flex-column min-vh-100 ">
    <div class="flex-grow-1">
      <Menu></Menu>
      <AlertMessage></AlertMessage>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Menu from './Menu.vue';
import Footer from './Footer.vue';
import AlertMessage from './AlertMessage.vue';

export default {
  components: {
    Menu,
    Footer,
    AlertMessage,
  },

};
</script>

<style scoped>

</style>
