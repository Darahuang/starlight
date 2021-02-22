<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center" v-if="collected.length !== 0">
        <div class="col-md-8">
          <div class="p-3 table-font">
            <h2 class="text-center text-primary py-3 font-weight-bolder">
              <i class="fab fa-pagelines mr-2"></i>收藏清單
            </h2>
            <table class="table">
              <thead>
                <tr>
                  <th width="20%" class="d-md-table-cell d-none text-center"></th>
                  <th>商品名稱</th>
                  <th class="text-center">加入購物車</th>
                  <th>單價</th>
                  <th>刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in collected" :key="index">
                  <td
                    class="align-middle cursor d-md-table-cell d-none text-center"
                    @click="getOneProduct(item.id)"
                  >
                    <img
                      :src="item.imageUrl"
                      class="tab-hover cart-image"
                      alt="產品圖片"
                      srcset
                    />
                  </td>

                  <td class="align-middle cursor" @click="getOneProduct(item.id)">
                    <span class="link-hover"> {{ item.title }}</span>
                  </td>
                  <td class="align-middle text-center">
                    <a href="#" class="d-block" @click.prevent="addtoCart(item.id, (qty = 1))">
                      <i class="fas fa-shopping-cart fa-2x"></i>
                    </a>
                  </td>
                  <td class="align-middle text-right">
                    {{ item.price | currencyFilter }}
                  </td>
                  <td class="align-middle text-right">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click="deleteFavItem(item.id)"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div v-else class="row justify-content-center">
        <div
          class="col-md-8 text-center bg-height bg-cover d-flex flex-column justify-content-center align-items-center"
          style="
            background-image: url(https://images.unsplash.com/photo-1576021257863-743c50564725?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
          "
        >
          <p class="text-primary font-weight-bolder h6">收藏清單中目前沒有商品</p>
          <button type="button" class="btn btn-accent" @click="toCustomerOrders">繼續逛逛</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    deleteFavItem(id) {
      this.$store.dispatch('deleteFavItem', id);
    },
    getOneProduct(id) {
      this.$store.dispatch('getOneProduct', id);
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const target = vm.cart.carts.filter((items) => items.product_id === id);
      if (target.length > 0) {
        const sameCartItem = target[0];
        const originCartId = sameCartItem.id;
        const orginQty = sameCartItem.qty;
        const newQty = orginQty + qty;
        const originProductId = sameCartItem.product.id;
        vm.$store.dispatch('updateQty', { originCartId, originProductId, newQty });
      } else {
        vm.$store.dispatch('addToCart', { id, qty });
      }
    },
    toCustomerOrders() {
      const vm = this;
      vm.$router.push('/customer_orders');
    },
  },
  computed: {
    ...mapState(['collected', 'cart']),
  },
};
</script>
