<template>
  <div>
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse navbar-collapse"
    >
      <div class="sidebar-sticky pt-3">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-md-4 mb-1 text-muted"
        >
          <span>管理員</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item" @click="collapse">
            <router-link class="nav-link link-hover" to="/admin/products">
              <i class="fas fa-box-open mr-1"></i>產品列表
            </router-link>
          </li>
          <li class="nav-item" @click="collapse">
            <router-link class="nav-link link-hover" to="/admin/orders">
              <i class="far fa-list-alt mr-1"></i> 訂單列表
            </router-link>
          </li>
          <li class="nav-item" @click="collapse">
            <router-link class="nav-link link-hover" to="/admin/coupons">
              <i class="fas fa-ticket-alt mr-1"></i> 優惠券
            </router-link>
          </li>
        </ul>
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>模擬功能</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item" @click="collapse">
            <router-link class="nav-link link-hover" to="/customer_orders">
              <i class="fa fa-list mr-1 feather" aria-hidden="true"></i>模擬訂單
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  methods: {
    collapse() {
      if ($(window).width() < 768) { // 當視窗小於768時才運作
        $('.navbar-toggler').click();
      }
    },
  },
};
</script>
