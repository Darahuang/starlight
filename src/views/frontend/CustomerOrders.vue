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
            <span v-if="type">{{type}}</span> <span v-else>所有餐點</span>
          </li>
        </ol>
      </nav>
      <div class="row mt-4">
        <div class="col-md-3 mb-3">
          <div class="list-group">
            <a href="#"  class="list-group-item list-group-item-action"
            :class="{'active':type === ''}"
            @click.prevent="changeCategory('')">
              所有餐點
            </a>
            <a href="#" class="list-group-item list-group-item-action"
            v-for="item in category" :key="item"
            :class="{'active':item === type}"
            @click.prevent="changeCategory(item)">
              {{item}}
            </a>
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
                    <div class="item-icon text-primary" @click="addToFavList(item.id)" >
                       <i class="far fa-heart  heart text-danger" v-if="!checkFavStatus(item)"></i>
                       <i class="fas fa-heart  heart text-danger" v-else></i>
                    </div>
                    <div
                      class="card-image cursor bg-cover"
                      @click="getOneProduct(item.id)"
                      style="height: 200px"
                      :style="{ backgroundImage: `url(${item.imageUrl})` }"
                    >
                    </div>
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
                        @click="addtoCart(item.id)"
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
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      paginationData: [],
      page: {},
      show: true,
    };
  },
  methods: {
    getAllProducts() {
      this.$store.dispatch('getAllProducts');
    },
    getOneProduct(id) {
      this.$store.dispatch('getOneProduct', id);
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
    getCart() {
      this.$store.dispatch('getCart');
    },
    changeCategory(text) {
      this.$store.commit('CHANGECATEGORY', text);
    },
    addToFavList(id) {
      this.$store.dispatch('addToFavList', id);
    },
    checkFavStatus(item) {
      const vm = this;
      if (vm.collected === null) {
        vm.collected = [];
      }
      if (vm.collected.find((el) => el.id === item.id)) {
        return true;
      }
      return false;
    },

  },
  computed: {
    ...mapState(['allProducts', 'cart', 'category', 'type', 'isLoading', 'status', 'disable', 'collected']),
    ...mapGetters(['filterCategory']),
  },
  created() {
    this.getAllProducts();
    this.getCart();
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
.item-icon {
  position: absolute;
  right: 10px;
  top:170px;
  z-index: 2;
  width:30px;
  height: 30px;
  font-size: 18px;
  border-radius: 50%;
  background-color: #cbe2d4a8;
  line-height: 30px;
  cursor: default;
}
.heart{
  margin-left: 5px;
}

</style>
