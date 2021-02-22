<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container" data-aos="fade-up">
      <div class="row mt-md-4 flex-sm-row-reverse">
        <div class="col-md-8">
          <div class="text-center bg-cover">
            <img
              :src="oneProduct.imageUrl"
              class="img-fluid mt-md-4 productImg"
              alt="產品圖片"
              srcset
            />
          </div>
        </div>
        <div class="col-md-4">
          <div>
            <h1 class="h4 my-4 font-weight-bolder text-primary">
              {{ oneProduct.title }}
            </h1>
            <span class="tag bg-accent p-2 rounded">
              {{ oneProduct.category }}
            </span>
            <div class="my-4">
              <p class="line-height">{{ oneProduct.description }}</p>
            </div>
            <div class="d-flex align-items-end mt-3">
              <del v-if="oneProduct.price"
                >原價{{ oneProduct.origin_price | currencyFilter }}元</del
              >
              <div class="mb-0 ml-auto h4 text-danger">
                <small>特價</small>
                <strong v-if="oneProduct.price">{{ oneProduct.price | currencyFilter }}元</strong>
              </div>
            </div>
            <div class="input-group mt-4">
              <select class="form-control" v-model="num">
                <option v-for="num in 10" :value="num" :key="num">
                  選購 {{ num }}{{ oneProduct.unit }}
                </option>
              </select>
            </div>
            <div class="text-secondary text-nowrap mt-3 text-right">
              小計
              <strong v-if="num" class="h3">{{ (num * oneProduct.price) | currencyFilter }}</strong
              >元
            </div>
            <hr />
            <div class="d-flex justify-content-between">
              <button
                class="btn btn-outline-primary mr-3"
                type="button"
                :disabled="checkFavStatus(oneProduct)"
                @click="checkFavList(oneProduct.id)"
              >
                <i class="fas fa-heart text-danger"></i>
                <span v-if="!checkFavStatus(oneProduct)" class="ml-1">加入收藏</span>
                <span v-else class="ml-1">已加入收藏</span>
              </button>
              <button
                class="btn btn-primary"
                type="button"
                @click="addtoCart(oneProduct.id, num)"
                :disabled="disable"
              >
                <i class="fas fa-shopping-cart"></i>
                <span class="ml-1">加入購物車</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <div class="list-group list-group-horizontal" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action active list-group-item-deep h6"
              id="list-home-list"
              data-toggle="list"
              href="#details"
              role="tab"
              aria-controls="home"
              >注意事項</a
            >
            <a
              class="list-group-item list-group-item-action list-group-item-deep h6"
              id="list-profile-list"
              data-toggle="list"
              href="#order"
              role="tab"
              aria-controls="profile"
              >訂購需知</a
            >
            <a
              class="list-group-item list-group-item-action list-group-item-deep h6"
              id="list-messages-list"
              data-toggle="list"
              href="#delivery"
              role="tab"
              aria-controls="messages"
              >宅配需知</a
            >
          </div>
        </div>
        <div class="col-12">
          <div class="tab-content p-2" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="details"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <h6 class="text-primary font-weight-bold">商品注意事項</h6>
              <p class="line-height white-space">{{ oneProduct.content }}</p>
            </div>
            <div
              class="tab-pane fade"
              id="order"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              <h6 class="text-primary font-weight-bold">訂購需知</h6>
              <ul class="list-inline">
                <li class="mb">取貨日(到貨日)為訂購日+3天</li>
                <li class="mb">門市自取請留意公休日及特殊節日</li>
                <li class="mb">食品因保存期限及衛生考量，恕不適用七天鑑賞期。</li>
                <li class="mb">
                  付款後若需更動訂單（如：改期、取消或調整數量），請於取貨日前三日告知。
                </li>
                <li class="text-danger mb font-weight-bold">
                  逢節慶期間(如母親節蛋糕、中秋節、新春禮盒等)的商品因採限量預購，訂單成立後無法變更取貨日期，且不接受退換貨，下單前請特別注意。
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="delivery"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              <h6 class="text-primary font-weight-bold">宅配需知</h6>
              <p class="line-height">
                宅配一定有風險，下單前請三思，運送過程可能會因車體晃動、路面不平等而有碰撞的狀態，風險須自行承擔，黑貓已公告不受理蛋糕類的毀壞補償，除非嚴重人為因素的變形，黑貓宅配才會視狀況退還"運費"，可以接受者再下單。
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4 class="text-primary font-weight-bold">相關商品</h4>
      <div class="row">
        <div
          class="col-md-4 cursor mb-3 mb-md-0"
          v-for="item in relatedCategory.slice(0, 3)"
          :key="item.id"
          @click="getOneProduct(item.id)"
        >
          <div class="card border-0">
            <div
              class="card-image bg-cover relatedImg"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
            <div class="text-white related-info d-flex justify-content-center align-items-center">
              <h6 class="font-weight-bold">More info</h6>
            </div>
          </div>
          <div class="text-center text-primary mt-2">
            <h6>{{ item.title }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      id: '',
      num: 1,
    };
  },
  methods: {
    getOneProduct(id) {
      this.$store.dispatch('getOneProduct', id);
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
        vm.$store.dispatch('updateQty', {
          originCartId,
          originProductId,
          newQty,
        });
      } else {
        vm.$store.dispatch('addToCart', { id, qty });
      }
    },
    getCart() {
      this.$store.dispatch('getCart');
    },
    getAllProducts() {
      this.$store.dispatch('getAllProducts');
    },
    checkFavList(id) {
      const vm = this;
      const favItem = vm.allProducts.find((item) => item.id === id);
      if (!vm.collected.find((item) => item.id === id)) {
        vm.collected.push(favItem);
        const message = `${favItem.title} 加入收藏清單中!`;
        const status = 'warning';
        vm.$store.dispatch('updateMessage', { message, status });
      }
      localStorage.setItem('collectedItems', JSON.stringify(vm.collected));
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
  created() {
    this.id = this.$route.params.id;
    this.getOneProduct(this.id);
    this.getCart();
    this.getAllProducts();
  },
  computed: {
    ...mapState(['oneProduct', 'cart', 'allProducts', 'disable', 'isLoading', 'collected']),
    relatedCategory() {
      const vm = this;
      let relatedItem = [];
      relatedItem = vm.allProducts.filter(
        (item) => item.title !== vm.oneProduct.title && item.category === vm.oneProduct.category,
      );
      relatedItem.sort(() => Math.random() - 0.5);
      return relatedItem;
    },
  },
};
</script>
