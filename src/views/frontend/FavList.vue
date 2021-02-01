<template>
  <div>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
          <div class="p-3 table-font" v-if="collected.length !== 0">
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
                    <img :src="item.imageUrl" width="100px" height="100px" alt srcset />
                  </td>

                  <td class="align-middle cursor" @click="getOneProduct(item.id)">
                    <span class="link-bg p-2"> {{ item.title }}</span>
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
          <div class="table-width p-3" v-else>
            <div class="text-center">
              <h6 class="text-primary">您的收藏清單目前是空的</h6>
              <router-link to="/customer_orders" class="btn btn-heavy btn-sm" @click="collapse"
                >繼續逛逛</router-link
              >
            </div>
          </div>
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
  },
  computed: {
    ...mapState(['collected', 'cart']),
  },
};
</script>
