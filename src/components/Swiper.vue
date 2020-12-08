<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <section class="py-5">
      <h3 class="text-center text-primary mr-2 mb-5 font-weight-bold">
        <i class="fab fa-pagelines mr-2"></i>猜你喜歡
      </h3>
      <div class="swiper-container container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in products" :key="item.id">
            <div class="row justify-content-center">
              <div class="col mb-3">
                <div class="bg-white">
                  <a href="#" @click.prevent="getOneProduct(item.id)">
                    <div
                      class="bg-cover position-relative"
                      style="height: 250px"
                      :style="{ backgroundImage: `url(${item.imageUrl})` }"
                    >
                      <div
                        class="card-info card-body w-100 d-flex justify-content-center align-items-center"
                      >
                        <h6 class="nav-link p-0 mb-3 text-white">
                          {{ item.title }}
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Swiper from '../../node_modules/swiper/swiper-bundle';

export default {
  data() {
    return {
    };
  },
  mounted() {
    this.initSwiper();
    this.getProducts();
  },
  methods: {
    initSwiper() {
      // eslint-disable-next-line no-new
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 2500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      });
    },
    getProducts(page = 1) {
      this.$store.dispatch('getProducts', page);
    },
    getOneProduct(id) {
      this.$store.dispatch('getOneProduct', id);
    },
  },
  computed: {
    ...mapState(['isLoading', 'status', 'products']),
  },
};
</script>

<style scoped>
@import "../../node_modules/swiper/swiper-bundle.css";

.bg-cover {
  background-size: cover;
  background-position: center center;
}
.card-info {
  opacity: 0;
  position: absolute;
  background-color: rgba(88, 85, 85, 0.3);
  top: 0;
  bottom: 0;
  transition: all 0.5s;
}
.card-info:hover {
  opacity: 1;
}
</style>
