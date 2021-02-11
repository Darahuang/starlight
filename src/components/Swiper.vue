<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <section class="py-5">
      <h3 class="text-center text-primary mr-2 mb-5 font-weight-bold">
        <i class="fab fa-pagelines mr-2"></i>猜你喜歡
      </h3>
      <div class="container">
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide v-for="item in products" :key="item.id">
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
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOption: {
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
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.getProducts();
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    getProducts(page = 1) {
      this.$store.dispatch('getProducts', page);
    },
    getOneProduct(id) {
      this.$store.dispatch('getOneProduct', id);
    },
  },
  computed: {
    ...mapState(['isLoading', 'status', 'products']),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped>
@import '~swiper/css/swiper.css';
</style>
