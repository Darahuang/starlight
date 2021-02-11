<template>
  <div>
    <Header></Header>
    <loading :active.sync="isLoading"></loading>
    <section class="text-primary">
      <div class="container bg-slight py-md-5 py-4 my-5">
        <div class="row">
          <div class="col-md-4 text-center">
            <div class="mb-2">
              <i class="fas fa-birthday-cake fa-3x"></i>
            </div>
            <h3>嚴選的品項</h3>
            <p>為您把關品質</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="mb-2">
              <i class="fas fa-coffee fa-3x"></i>
            </div>
            <h3>多樣化的選擇</h3>
            <p>滿足顧客不同的需求</p>
          </div>
          <div class="col-md-4 text-center">
            <div class="mb-2">
              <i class="fas fa-truck-moving fa-3x"></i>
            </div>
            <h3>快速送達</h3>
            <p>讓您即時收到商品</p>
          </div>
        </div>
      </div>
    </section>
    <Swiper></Swiper>
    <section class="container mt-5" data-aos="fade-up">
      <div class="info clearfix mb-2">
        <h3 class="text-center text-primary mr-2 mb-3 font-weight-bold">
          <i class="fab fa-pagelines mr-2"></i>最新消息
        </h3>
        <router-link
          to="/news"
          class="d-flex align-items-center text-decoration-none h6 bg-primary text-white px-3 py-1 text-center float-right mb-3"
          ><p class="mt-0 mb-0">更多</p>
          <i class="fas fa-arrow-alt-circle-right ml-2 arrow fa-2x"></i
          ><i class="far fa-arrow-alt-circle-right ml-2 arrow-hover fa-2x"></i
        ></router-link>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="(item, index) in events.slice(0, 3)" :key="index">
          <router-link to="/news" class="text-decoration-none">
            <div class="card mb-5">
              <div
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
                class="bg-cover card-image card-height"
              ></div>
              <div class="card-body">
                <span class="badge badge-accent float-right ml-2 py-1 px-3">期間限定</span>
                <h5 class="card-title font-weight-bolder">{{ item.event }}</h5>
                <div>
                  <p class="card-text"><i class="fas fa-clock mr-2"></i>{{ item.date }}</p>
                  <p class="h6 card-text">
                    {{ item.content }}
                    <i class="fas fa-heart ml-2"></i>
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <section class="py-5" data-aos="fade-up">
      <div class="container custom-gutters">
        <div class="info clearfix mb-2">
          <h3 class="text-center text-primary mr-2 mb-3 font-weight-bold">
            <i class="fab fa-pagelines mr-2"></i>精選商品
          </h3>
          <router-link
            to="/customer_orders"
            class="d-flex align-items-center float-right text-decoration-none h6 bg-primary text-white text-center mb-3 px-3 py-1"
            ><p class="mt-0 mb-0">更多</p>
            <i class="far fa-arrow-alt-circle-right ml-2 arrow fa-2x"></i>
            <i class="fas fa-arrow-alt-circle-right ml-2 arrow-hover fa-2x"></i>
          </router-link>
        </div>
        <div class="row">
          <div class="col-md-3 col-6 mb-4" v-for="item in products" :key="item.id">
            <div class="card">
              <div
                class="cursor bg-cover selectedImg"
                @click="getOneProduct(item.id)"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
              <div class="card-body">
                <a
                  class="card-title text-decoration-none"
                  href="#"
                  @click.prevent="getOneProduct(item.id)"
                >
                  <h6 class="text-primary font-weight-bold">
                    {{ item.title }}
                  </h6>
                </a>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h5" v-if="!item.price">2,800 元</div>
                  <del class="h6 text-secondary" v-if="item.price">{{
                    item.origin_price | currencyFilter
                  }}</del>
                  <div class="h5 text-danger" v-if="item.price">
                    {{ item.price | currencyFilter }}
                  </div>
                </div>
                <div class="cart mt-3">
                  <button
                    type="button"
                    class="btn btn-sm ml-auto text-primary bg-white p-2 rounded-circle"
                    @click="addtoCart(item.id)"
                    :disabled="disable"
                  >
                    <i class="fas fa-shopping-cart cart-size"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-5">
      <div class="mb-md-5">
        <h3 class="text-center text-primary mr-2 mb-3 font-weight-bold">
          <i class="fab fa-pagelines mr-2"></i>訂製蛋糕
        </h3>
        <div class="info clearfix">
          <router-link
            to="/customize"
            class="d-flex align-items-center float-right text-decoration-none h6 bg-primary text-white text-center px-3 py-1 mb-3"
            ><p class="mt-0 mb-0">更多</p>
            <i class="fas fa-arrow-alt-circle-right ml-2 arrow fa-2x"></i
            ><i class="far fa-arrow-alt-circle-right ml-2 arrow-hover fa-2x"></i
          ></router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" data-aos="fade-right">
          <router-link to="/customize">
            <div
              class="bg-cover customize-height position-relative"
              style="
                background-image: url(https://images.pexels.com/photos/4686823/pexels-photo-4686823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
              "
            >
              <div class="card-body card-info d-flex justify-content-center align-items-center">
                <h6 class="nav-link p-0 mb-3 text-white">查看更多</h6>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-5">
          <div class="ml-3">
            <h5>來訂製專屬您的蛋糕</h5>
            <p>把平日不敢表達的感謝或是愛意,透過訂製蛋糕來表示吧!</p>
            <div class="mt-4">
              <h6 class="mb-3 text-deep font-weight-bold">
                <i class="fas fa-chevron-right mr-2"></i>Step1 提供想製作的圖片及報價
              </h6>
              <h6 class="mb-3 text-deep font-weight-bold">
                <i class="fas fa-chevron-right mr-2"></i>Step2 確認製作蛋糕時間並付款
              </h6>
              <h6 class="text-deep font-weight-bold">
                <i class="fas fa-chevron-right mr-2"></i>Step3 領取的您客製化造型蛋糕
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-5">
      <div class="mb-5">
        <h3 class="text-center text-primary mr-2 mb-3 font-weight-bold">
          <i class="fab fa-pagelines mr-2"></i>接收各種優惠
        </h3>
      </div>
      <div class="row">
        <div class="col">
          <div
            class="bg-cover bg-fixed"
            style="
              background-image: url(https://images.unsplash.com/photo-1579372786545-d24232daf58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
            "
          >
            <div class="p-md-5 p-3">
              <div class="p-3 text-center w-md-50 mx-auto z-index bg-red">
                <div class="email d-flex">
                  <label for="email" class="material-icons email-icon text-white">email</label>
                  <input
                    type="email"
                    class="bg-transparent text-white email-input w-100"
                    name="email"
                    v-validate="'required|email'"
                    :class="{ 'is-invalid': errors.has('email') }"
                    v-model.lazy="email"
                  />
                  <button
                    class="btn btn-accent rounded-0 d-flex align-items-center"
                    type="button"
                    @click="subscribe"
                  >
                    <i class="material-icons">arrow_forward</i>
                  </button>
                </div>
                <p class="text-danger mt-3 font-weight-bolder" v-if="errors.has('email')">
                  請輸入Email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-5" data-aos="fade-up">
      <div class="row">
        <div class="col-md-4">
          <router-link to="/about" class="text-decoration-none">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.unsplash.com/photo-1543685823-10e976e165d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80);
                "
                class="bg-cover card-image card-height d-flex align-items-center justify-content-center"
              >
                <span class="bg-slight p-3 h6 card-spacing">關於我們</span>
              </div>
              <!-- <div class="card-body card-info d-flex justify-content-center align-items-center">
                <h6 class="text-white">關於我們</h6>
              </div> -->
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/customer_orders" class="text-decoration-none">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.unsplash.com/photo-1587918899471-ab5a546c54a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
                "
                class="bg-cover card-image card-height d-flex align-items-center justify-content-center"
              >
                <span class="bg-slight p-3 h6 card-spacing">餐點介紹</span>
              </div>
              <!-- <div class="card-body card-info d-flex justify-content-center align-items-center">
                <h6 class="text-white">餐點介紹</h6>
              </div> -->
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/check_orders" class="text-decoration-none">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.unsplash.com/photo-1499744937866-d7e566a20a61?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80);
                "
                class="bg-cover card-image card-height d-flex align-items-center justify-content-center"
              >
                <span class="bg-slight p-3 h6 card-spacing">訂單查詢</span>
              </div>
              <!-- <div class="card-body card-info d-flex justify-content-center align-items-center">
                <h6 class="text-white">訂單查詢</h6>
              </div> -->
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Swiper from '@/components/Swiper.vue';
import { mapState } from 'vuex';
import events from '../../assets/js/events';

export default {
  components: {
    Header,
    Swiper,
  },
  data() {
    return {
      email: '',
      events,
    };
  },
  methods: {
    subscribe() {
      const vm = this;
      vm.$validator.validate().then((result) => {
        if (result) {
          const message = '訂閱成功';
          const status = 'warning';
          vm.$store.dispatch('updateMessage', { message, status });
        } else {
          const message = '訂閱失敗';
          const status = 'warning';
          vm.$store.dispatch('updateMessage', { message, status });
        }
      });
    },
    getCart() {
      this.$store.dispatch('getCart');
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const target = vm.cart.carts.filter((items) => items.product_id === id);
      if (target.length > 0) {
        const previousCart = target[0];
        const originCartId = previousCart.id;
        const orginQty = previousCart.qty;
        const newQty = orginQty + qty;
        const originProductId = previousCart.product.id;
        vm.$store.dispatch('updateQty', { originCartId, originProductId, newQty });
      } else {
        vm.$store.dispatch('addToCart', { id, qty });
      }
    },
    getProducts(page = 2) {
      this.$store.dispatch('getProducts', page);
    },
    getOneProduct(id) {
      this.$store.dispatch('getOneProduct', id);
    },
  },
  created() {
    this.getCart();
    this.getProducts();
  },
  computed: {
    ...mapState(['isLoading', 'cart', 'products', 'disable']),
  },
};
</script>
