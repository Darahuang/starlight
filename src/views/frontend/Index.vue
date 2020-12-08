<template>
  <div>
    <Header></Header>
    <loading :active.sync="isLoading"></loading>
    <section class="text-primary">
      <div class="container bg-slight py-5 my-5">
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
      <div class="info clearfix">
        <h3 class="text-center text-primary mr-2 mb-3 font-weight-bold">
          <i class="fab fa-pagelines mr-2"></i>最新消息
        </h3>
        <router-link
          to="/news"
          class="block text-decoration-none h6 bg-primary text-white p-1 text-center float-right mb-3"
          >More info<i class="fas fa-arrow-alt-circle-right ml-2 full fa-2x"></i
          ><i class="far fa-arrow-alt-circle-right ml-2 notfull fa-2x"></i
        ></router-link>
      </div>
      <div class="row">
        <div class="col-md-4">
          <router-link to="/news" class="text-decoration-none">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.pexels.com/photos/2679968/pexels-photo-2679968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
                "
                class="bg-cover card-image card-height"
              ></div>
              <div class="card-body">
                <span class="badge badge-accent float-right ml-2 py-1 px-3"
                  >期間限定</span
                >
                <h5 class="card-title font-weight-bolder">
                  萬聖節限定
                </h5>
                <div>
                  <p class="card-text">
                    <i class="fas fa-clock mr-2"></i>9月28,2020
                  </p>
                  <p class="h6 card-text">
                    南瓜限定特製餐點
                    <i class="fas fa-heart ml-2"></i>
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/news" class="text-decoration-none">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.unsplash.com/photo-1572928899385-6dc3b05531ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
                "
                class="bg-cover card-image card-height"
              ></div>
              <div class="card-body">
                <span class="badge badge-accent float-right ml-2 py-1 px-3"
                  >期間限定</span
                >
                <h5 class="card-title font-weight-bolder">
                  中秋節限定
                </h5>
                <div>
                  <p class="card-text">
                    <i class="fas fa-clock mr-2"></i>8月18,2020
                  </p>
                  <p class="h6 card-text">
                    中秋限定禮盒
                    <i class="fas fa-heart ml-2"></i>
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="news" class="text-decoration-none">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.pexels.com/photos/2312124/pexels-photo-2312124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
                "
                class="bg-cover card-image card-height"
              ></div>
              <div class="card-body">
                <span class="badge badge-accent float-right ml-2 py-1 px-3"
                  >期間限定</span
                >
                <h5 class="card-title font-weight-bolder">
                  歡慶父親節
                </h5>
                <div>
                  <p class="card-text">
                    <i class="fas fa-clock mr-2"></i>7月18,2020
                  </p>
                  <p class="h6 card-text">
                    與爸爸享用甜點打88折
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
      <div class="container">
        <div class="info clearfix">
          <h3 class="text-center text-primary mr-2 mb-3 font-weight-bold">
            <i class="fab fa-pagelines mr-2"></i>精選商品
          </h3>
          <router-link
            to="/customer_orders"
            class="block float-right text-decoration-none h6 bg-primary text-white text-center mb-3 p-1"
            >More items<i
              class="fas fa-arrow-alt-circle-right ml-2 full fa-2x"
            ></i
            ><i class="far fa-arrow-alt-circle-right ml-2 notfull fa-2x"></i
          ></router-link>
        </div>
        <div class="row">
          <div
            class="col-md-3 col-6 mb-3"
            v-for="item in products"
            :key="item.id"
          >
            <div class="card">
              <div
                class="card-image cursor bg-cover"
                @click="getOneProduct(item.id)"
                style="height: 200px"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
              <div class="card-body" style="height: 150px">
                <a
                  class="card-title text-decoration-none"
                  href="#"
                  @click.prevent="getOneProduct(item.id)"
                >
                  <h6 class="text-primary font-weight-bold">
                    {{ item.title }}
                  </h6>
                </a>
                <div
                  class="d-flex justify-content-between align-items-baseline"
                >
                  <div class="h5" v-if="!item.price">2,800 元</div>
                  <del class="h6 text-secondary" v-if="item.price"
                    >原價{{ item.origin_price }}元</del
                  >
                  <div class="h6 text-danger" v-if="item.price">
                    特價{{ item.price }}元
                  </div>
                </div>
                <div class="cart mt-3">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm ml-auto"
                    @click="addtoCart(item.id)"
                    :disabled="disable"
                  >
                    加到購物車
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
            class="block float-right text-decoration-none h6 bg-primary text-white text-center p-1 mb-3"
            >More info<i
              class="fas fa-arrow-alt-circle-right ml-2 full fa-2x"
            ></i
            ><i class="far fa-arrow-alt-circle-right ml-2 notfull fa-2x"></i
          ></router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6" data-aos="fade-right">
          <router-link to="/customize">
            <div
              class="bg-cover bg-height position-relative"
              style="
                background-image: url(https://images.pexels.com/photos/4686823/pexels-photo-4686823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
              "
            >
              <div
                class="card-body card-info d-flex justify-content-center align-items-center"
              >
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
                <i class="fas fa-chevron-right mr-2"></i>Step1
                提供想製作的圖片及報價
              </h6>
              <h6 class="mb-3 text-deep font-weight-bold">
                <i class="fas fa-chevron-right mr-2"></i>Step2
                確認製作蛋糕時間並付款
              </h6>
              <h6 class="text-deep font-weight-bold">
                <i class="fas fa-chevron-right mr-2"></i>Step3
                領取的您客製化造型蛋糕
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
                  <label
                    for="email"
                    class="material-icons email-icon text-white"
                    >email</label
                  >
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
                <p
                  class="text-danger mt-3 font-weight-bolder"
                  v-if="errors.has('email')"
                >
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
          <router-link to="/about">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.unsplash.com/photo-1543685823-10e976e165d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=80);
                "
                class="bg-cover card-image card-height"
              ></div>
              <div
                class="card-body card-info d-flex justify-content-center align-items-center"
              >
                <h6 class="nav-link p-0 mb-3 text-white">關於我們</h6>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/customer_orders">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.unsplash.com/photo-1587918899471-ab5a546c54a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
                "
                class="bg-cover card-image card-height"
              ></div>
              <div
                class="card-body card-info d-flex justify-content-center align-items-center"
              >
                <h6 class="nav-link p-0 mb-3 text-white">餐點介紹</h6>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-4">
          <router-link to="/check_orders">
            <div class="card mb-5">
              <div
                style="
                  background-image: url(https://images.unsplash.com/photo-1586810165616-94c631fc2f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
                "
                class="bg-cover card-image card-height"
              ></div>
              <div
                class="card-body card-info d-flex justify-content-center align-items-center"
              >
                <h6 class="nav-link p-0 mb-3 text-white">訂單查詢</h6>
              </div>
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

export default {
  components: {
    Header,
    Swiper,
  },
  data() {
    return {
      email: '',
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
      const target = vm.cart.carts.filter((items) => items.product_id === id); // 過濾是否有相同產品重覆加入購物車
      if (target.length > 0) {
        const previousCart = target[0]; // 原先的購物車
        const originCartId = previousCart.id; // 原先的購物車id
        const orginQty = previousCart.qty;
        const newQty = orginQty + qty;
        const originProductId = previousCart.product.id; // 產品id
        vm.$store.dispatch('updateQty', { originCartId, originProductId, newQty });
      } else {
        vm.$store.dispatch('addToCart', { id, qty });
      }
    },
    getProducts(page = 3) {
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

<style scoped>
.bg-cover {
  background-size: cover;
  background-position: center center;
}

.email {
  position: relative;
  padding-left: 40px;
}

.email-icon {
  position: absolute;
  top: 5px;
  left: 40px;
}
.email-input {
  border: none;
  outline: none;
  border-bottom: 3px solid #fff;
  background: none;
  padding-left: 40px;
}
@media (max-width: 767.98px) {
  .email {
    padding-left: 0px;
  }
  .email-icon {
    position: absolute;
    top: 5px;
    left: 10px;
  }
}
.bg-height {
  height: 300px;
  z-index: 1;
}
@media (max-width: 767.98px) {
  .bg-height {
    height: 200px;
  }
}
.bg-fixed {
  background-attachment: fixed;
}

@media (min-width: 767.98px) {
  .margin-md-nt {
    margin-top: -30px;
    margin-bottom: -30px;
  }
  .w-md-50 {
    width: 60%;
  }
}
.notfull {
  display: inline;
}
.full {
  display: none;
}
.info a:hover i.full {
  display: inline;
}
.info a:hover i.notfull {
  display: none;
}
.cursor {
  cursor: pointer;
}
.cart {
  display: none;
}
.card:hover .cart {
  display: block;
  text-align: center;
}
.card {
  transition: all 1s;
  overflow: hidden;
}
.card:hover {
  box-shadow: 5px 5px 7px rgba(153, 148, 148, 0.4);
}
.card-image {
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.card-image:hover {
  transform: scale(1.15, 1.15);
}
.card-info {
  opacity: 0;
  position: absolute;
  background-color: rgba(88, 85, 85, 0.5);
  top: 0;
  bottom: 0;
  width: 100%;
  transition: all 0.5s;
}
.card-info:hover {
  opacity: 1;
}
.card-height {
  height: 250px;
}
@media (max-width: 767.98px) {
  .card-height {
    height: 150px;
  }
}
.block {
  display: block;
  width: 150px;
}
</style>
