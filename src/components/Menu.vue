<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand shadow-none bg-transparent text-primary" to="/"
          ><span class="logo-font">Starlight</span></router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav align-items-center w-100">
            <li class="nav-item" @click="collapse">
              <router-link class="nav-link link-hover" to="/about">
                關於我們
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item ml-1" @click="collapse">
              <router-link class="nav-link link-hover" to="/news">最新消息</router-link>
            </li>
            <li class="nav-item ml-1" @click="collapse">
              <router-link class="nav-link link-hover" to="/customer_orders">餐點介紹</router-link>
            </li>
            <li class="nav-item ml-1" @click="collapse">
              <router-link class="nav-link link-hover" to="/customize">訂製蛋糕</router-link>
            </li>
            <li class="nav-item ml-1" @click="collapse">
              <router-link class="nav-link link-hover" to="/check_orders">查看訂單</router-link>
            </li>
          </ul>
          <div class="d-flex justify-content-end align-items-center">
            <div class="position-relative" v-if="collected.length !== 0">
              <router-link
                to="/favlist"
                class="nav-link link-hover text-secondary h5 text-center mb-0"
              >
                <i class="fas fa-heart"></i>
                <span class="badge badge-danger badge-position" v-if="collected.length">{{
                  collected.length
                }}</span>
              </router-link>
            </div>
            <div class="dropdown" v-else>
              <a
                class="nav-link link-hover text-secondary h5 text-center mb-0 ml-1"
                href="#"
                role="button"
                id="cart"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-heart"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="cart">
                <div class="table-width p-3">
                  <div class="text-center">
                    <h6 class="text-primary">您的收藏清單目前是空的</h6>
                    <router-link to="/customer_orders" class="btn btn-heavy btn-sm"
                      >繼續逛逛</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="position-relative" v-if="cart.total !== 0">
              <router-link
                to="/checkout"
                class="nav-link link-hover text-secondary h5 text-center mb-0"
              >
                <i class="fas fa-shopping-cart"></i>
                <span v-if="cart.carts.length" class="badge badge-danger badge-position">
                  {{ cart.carts.length }}</span
                >
              </router-link>
            </div>
            <div class="dropdown" v-else>
              <a
                class="nav-link link-hover text-secondary h5 text-center mb-0 ml-1"
                href="#"
                role="button"
                id="cart"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-shopping-cart"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="cart">
                <div class="table-width p-3">
                  <div class="text-center">
                    <h6 class="text-primary">您的購物車目前是空的</h6>
                    <router-link to="/customer_orders" class="btn btn-heavy btn-sm"
                      >繼續逛逛</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <router-link to="/login" class="nav-link link-hover text-secondary h5 mb-0">
              <i class="fas fa-cog"></i>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import $ from 'jquery';

export default {
  methods: {
    deleteCartItem(id) {
      this.$store.dispatch('deleteCartItem', id);
    },
    deleteFavItem(id) {
      this.$store.dispatch('deleteFavItem', id);
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const target = vm.cart.carts.filter((items) => items.product_id === id); // 過濾是否有相同產品重覆加入購物車
      if (target.length > 0) {
        const sameCartItem = target[0];
        const originCartId = sameCartItem.id; // 購物車id
        const orginQty = sameCartItem.qty;
        const newQty = orginQty + qty;
        const originProductId = sameCartItem.product.id; // 產品id
        vm.$store.dispatch('updateQty', { originCartId, originProductId, newQty });
      } else {
        vm.$store.dispatch('addToCart', { id, qty });
      }
    },
    collapse() {
      if ($(window).width() < 992) {
        // 當視窗小於992時才運作
        $('.navbar-toggler').click();
      }
    },
  },
  computed: {
    ...mapState(['cart', 'collected']),
  },
  created() {
    $('.navbar-toggler').click();
  },
};
</script>
