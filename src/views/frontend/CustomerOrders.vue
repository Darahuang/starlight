<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mt-3 bg-transparent text-secondary">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-decoration-none">Home</router-link>
          </li>
          <li class="breadcrumb-item">產品列表</li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ category }}
          </li>
        </ol>
      </nav>
      <div class="row mt-4">
        <div class="col-md-3 mb-3">
          <div class="list-group">
            <a
              href="#所有餐點"
              class="list-group-item list-group-item-action"
              data-toggle="list"
              :class="{ active: category === '所有餐點' }"
              @click.prevent="category = '所有餐點'"
              >所有餐點</a
            >
            <a
              href="#單片蛋糕"
              class="list-group-item list-group-item-action"
              data-toggle="list"
              :class="{ active: category === '單片蛋糕' }"
              @click.prevent="category = '單片蛋糕'"
              >單片蛋糕</a
            >
            <a
              href="#生日蛋糕"
              class="list-group-item list-group-item-action"
              data-toggle="list"
              :class="{ active: category === '生日蛋糕' }"
              @click.prevent="category = '生日蛋糕'"
              >生日蛋糕</a
            >
            <a
              href="#點心&輕食"
              class="list-group-item list-group-item-action"
              data-toggle="list"
              :class="{ active: category === '點心&輕食' }"
              @click.prevent="category = '點心&輕食'"
              >點心&輕食</a
            >
            <a
              href="#節慶限定"
              class="list-group-item list-group-item-action"
              data-toggle="list"
              :class="{ active: category === '節慶限定' }"
              @click.prevent="category = '節慶限定'"
              >節慶限定</a
            >
            <a
              href="#烘焙教學"
              class="list-group-item list-group-item-action"
              data-toggle="list"
              :class="{ active: category === '烘焙教學' }"
              @click.prevent="category = '烘焙教學'"
              >烘焙教學</a
            >
            <router-link
              to="/customize"
              class="list-group-item list-group-item-action"
              >訂製蛋糕</router-link
            >
          </div>
        </div>
        <div class="d-md-none d-block ml-auto mb-2">
          <button
            class="btn btn-warning mr-3"
            type="button"
            @click="show = true"
          >
            <i class="fas fa-th-large"></i>
          </button>
          <button
            class="btn btn-warning mr-3"
            type="button"
            @click="show = false"
          >
            <i class="fas fa-list-ul"></i>
          </button>
        </div>
        <div v-if="show" class="col-md-9" data-aos="fade-up">
          <div class="tab-content">
            <div class="tab-pane active" :id="category">
              <div class="row">
                <div
                  class="col-md-4 mb-4"
                  v-for="item in filterCategory"
                  :key="item.id"
                >
                  <div class="card border-0">
                    <div
                      class="card-image cursor bg-cover"
                      @click="getOneProduct(item.id)"
                      style="height: 200px"
                      :style="{ backgroundImage: `url(${item.imageUrl})` }"
                    ></div>
                    <div
                      class="card-body cursor"
                      @click="getOneProduct(item.id)"
                    >
                      <span
                        class="badge badge-pill badge-accent float-right ml-2 p-1"
                        >{{ item.category }}</span
                      >
                      <h6 class="card-title">
                        <p class="text-primary font-weight-bold">
                          {{ item.title }}
                        </p>
                      </h6>
                      <div
                        class="d-flex justify-content-between align-items-baseline"
                      >
                        <div class="h5" v-if="!item.price">2,800 元</div>
                        <del class="h6 text-secondary" v-if="item.price"
                          >原價{{ item.origin_price | currencyFilter }}元</del
                        >
                        <div class="h6 text-danger" v-if="item.price">
                          特價{{ item.price | currencyFilter }}元
                        </div>
                      </div>
                    </div>
                    <div class="card-footer d-flex">
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm"
                        @click="getOneProduct(item.id)"
                      >
                        <i
                          class="fas fa-spinner fa-spin"
                          v-if="status.loadingItem === item.id"
                        ></i>
                        查看更多
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm ml-auto"
                        @click="addtoCart(item.id, qty)"
                        :disabled="disable"
                      >
                        <i
                          class="fas fa-spinner fa-spin"
                          v-if="status.loadingItem === item.id"
                        ></i>
                        加到購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane active" :id="category">
              <div class="row px-3">
                <div
                  class="col-md-4 mb-4"
                  v-for="item in filterCategory"
                  :key="item.id"
                >
                  <div class="row border">
                    <div class="col-10 d-flex pl-0">
                      <div
                        class="card-image bg-cover"
                        style="width: 120px"
                        :style="{ backgroundImage: `url(${item.imageUrl})` }"
                      ></div>
                      <div class="flex-grow-1 p-3">
                        <h6 class="card-title">
                          <p class="text-primary font-weight-bold">
                            {{ item.title }}
                          </p>
                        </h6>
                        <div
                          class="d-flex justify-content-between align-items-baseline"
                        >
                          <div class="h5" v-if="!item.price">2,800 元</div>
                          <del class="h6" v-if="item.price">{{
                            item.origin_price | currencyFilter
                          }}</del>
                          <div class="h5 text-danger" v-if="item.price">
                            {{ item.price | currencyFilter }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 p-3">
                      <a
                        href="#"
                        class="d-block mb-2"
                        @click.prevent="getOneProduct(item.id)"
                      >
                        <i class="fas fa-info-circle fa-2x"></i>
                      </a>
                      <a
                        href="#"
                        class="d-block"
                        @click.prevent="addtoCart(item.id, qty)"
                        :diabled="disable"
                      >
                        <i class="fas fa-shopping-cart fa-2x"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      products: [],
      saveItems: [],
      localStorageData: JSON.parse(localStorage.getItem('favItems')) || [],
      isLoading: false,
      category: '所有餐點',
      cartNumber: '',
      favNumber: '',
      pagination: {},
      oneProduct: {},
      status: {
        loadingItem: '',
      },
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      show: true,
      disable: false,
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      vm.axios.get(api).then((response) => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
        vm.localStorageData = JSON.parse(localStorage.getItem('favItems'));
        vm.localStorageData.forEach((item) => {
          vm.products.forEach((el) => {
            if (item.id === el.id) {
              // eslint-disable-next-line no-param-reassign
              el.favItem = true;
              vm.saveItems.push(el);
              vm.$bus.$emit('fav', vm.favNumber);
            }
          });
        });
      });
    },
    getOneProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      vm.axios.get(api).then((response) => {
        vm.oneProduct = response.data.product;
        vm.$router.push(`/customer_orders/${id}`);
        vm.status.loadingItem = '';
      });
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
        const delAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${originCartId}`;
        const addAPI = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        const changeCart = {
          product_id: originProductId,
          qty: newQty,
        };
        vm.isLoading = true;
        vm.disable = true;
        vm.axios // 首先移除加入購物車的單筆商品,並將重覆加入的商品合併數量後再傳送到加入購物車的API,再重新取得購物車列表
          .all([
            vm.axios.delete(delAPI),
            vm.axios.post(addAPI, { data: changeCart }),
          ])
          .then(
            vm.axios.spread(() => {
              vm.getCart();
              vm.isLoading = false;
              vm.disable = false;
              vm.$bus.$emit('message:push', '已加入購物車', 'warning');
            }),
          );
      } else {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        vm.isLoading = true;
        const cart = {
          product_id: id,
          qty,
        };
        vm.axios.post(api, { data: cart }).then((response) => {
          vm.isLoading = false;
          vm.getCart();
          vm.$bus.$emit('message:push', response.data.message, 'warning');
        });
      }
    },
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      vm.axios.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.cartNumber = response.data.data.carts.length;
        vm.isLoading = false;
        vm.$bus.$emit('cart', vm.cartNumber);
      });
    },
    backtoCart() {
      const vm = this;
      vm.$router.push('/cart');
    },
  },
  computed: {
    filterCategory() {
      const vm = this;
      let filterOrder = [];
      if (vm.category === '單片蛋糕') {
        filterOrder = vm.products.filter(
          (item) => item.category === '單片蛋糕',
        );
      } else if (vm.category === '生日蛋糕') {
        filterOrder = vm.products.filter(
          (item) => item.category === '生日蛋糕',
        );
      } else if (vm.category === '節慶限定') {
        filterOrder = vm.products.filter(
          (item) => item.category === '節慶限定',
        );
      } else if (vm.category === '點心&輕食') {
        filterOrder = vm.products.filter(
          (item) => item.category === '點心&輕食',
        );
      } else if (vm.category === '所有餐點') {
        filterOrder = vm.products;
      } else if (vm.category === '烘焙教學') {
        filterOrder = vm.products.filter(
          (item) => item.category === '烘焙教學',
        );
      }
      return filterOrder;
    },
    sortOrder() {
      const vm = this;
      let newOrder = [];
      if (vm.orders.length) {
        newOrder = vm.orders.sort((a, b) => {
          const aIsPaid = a.is_paid ? 1 : 0;
          const bIsPaid = b.is_paid ? 1 : 0;
          return bIsPaid - aIsPaid;
        });
      }
      return newOrder;
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
  watch: {
    favoriteItem() {
      const vm = this;
      if (vm.favList.length !== vm.localList.length) {
        vm.favList = [];
        this.save();
      }
    },
  },
};
</script>

<style scoped>
.card:hover {
  box-shadow: 5px 5px 7px rgba(153, 148, 148, 0.4);
}
.card {
  overflow: hidden;
}
.card-image {
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.card-image:hover {
  transform: scale(1.15, 1.15);
}
.cursor {
  cursor: pointer;
}
.bg-cover {
  background-size: cover;
  background-position: center center;
}
.heart {
  position: absolute;
  right: 40px;
  top: 20px;
  z-index: 2;
}
</style>
