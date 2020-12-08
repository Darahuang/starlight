<template>
  <div>
    <CheckoutStep  :total="cart.total"></CheckoutStep>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="my-4 row justify-content-center" v-if="cart.total !== 0">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <button
                type="button"
                class="btn btn-link text-decoration-none"
                data-toggle="collapse"
                data-target="#cartInfo"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                購物車資訊
                <i class="fas fa-caret-down"></i>
              </button>
            </div>
            <div class="collapse show" id="cartInfo">
              <div class="card-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th></th>
                      <th>商品名稱</th>
                      <th>數量</th>
                      <th width="15%">單價</th>
                      <th>刪除</th>
                    </tr>
                  </thead>
                  <tbody v-for="item in cart.carts" :key="item.id">
                    <tr>
                      <td class="align-middle">
                        <img
                          :src="item.product.imageUrl"
                          width="60px"
                          height="60px"
                          alt
                          srcset
                        />
                      </td>
                      <td class="align-middle">
                        {{ item.product.title }}
                        <div class="text-heavy" v-if="item.coupon">
                          已套用折扣碼
                        </div>
                      </td>
                      <td class="align-middle">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend" id="button-addon3">
                            <button
                              class="btn btn-outline-primary btn-sm"
                              type="button"
                              @click="
                                changeQty(
                                  item.id,
                                  item.product.id,
                                  item.qty,
                                  false
                                )
                              "
                            >
                              -
                            </button>
                            <input
                              type="text"
                              class="form-control qty-input text-center"
                              placeholder=""
                              v-model.number="item.qty"
                              aria-label="Example text with two button addons"
                              aria-describedby="button-addon3"
                            />
                            <div class="input-group-append" id="button-addon4">
                              <button
                                class="btn btn-outline-primary btn-sm"
                                type="button"
                                @click="
                                  changeQty(
                                    item.id,
                                    item.product.id,
                                    item.qty,
                                    true
                                  )
                                "
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-right">
                        {{ item.final_total | currencyFilter }}
                      </td>
                      <td class="align-middle text-right">
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="deleteCartItem(item.id)"
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot class="bg-light">
                    <tr>
                      <td colspan="4" class="text-right border-top-0">總計</td>
                      <td class="h5 text-danger border-top-0">
                        {{ cart.final_total }}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div class="text-primary my-3">
            <i class="fa fa-star mr-2" aria-hidden="true"></i>
            <span>
              輸入折扣碼「
              <span class="text-danger">anniversary</span>」，享受9折優惠，
              一起慶祝周年慶吧！
            </span>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入折扣碼"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="coupon_code"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                @click="addCouponCode"
              >
                使用折扣碼
              </button>
            </div>
          </div>
          <h2 class="text-center my-4 text-primary font-weight-bolder">
            訂單資訊
          </h2>
          <form @submit.prevent="createOrder">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                v-model.lazy="form.user.email"
                placeholder="請輸入Email"
                v-validate="'required|email'"
                :class="{ 'is-invalid': errors.has('email') }"
              />
              <span class="text-danger" v-if="errors.has('email')"
                >請輸入Email</span
              >
            </div>
            <div class="form-group">
              <label for="name">姓名</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                v-model.lazy="form.user.name"
                placeholder="請輸入姓名"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('name') }"
              />
              <span class="text-danger" v-if="errors.has('name')"
                >請輸入姓名</span
              >
            </div>
            <div class="form-group">
              <label for="tel">電話</label>
              <input
                type="text"
                class="form-control"
                name="tel"
                id="tel"
                v-model.lazy="form.user.tel"
                placeholder="請輸入電話"
                v-validate="'required|myPhone'"
                :class="{ 'is-invalid': errors.has('tel') }"
              />
              <span class="text-danger" v-if="errors.has('tel')"
                >請輸入電話</span
              >
            </div>
            <div class="form-group">
              <label for="address">地址</label>
              <input
                type="text"
                class="form-control"
                name="address"
                id="address"
                v-model.lazy="form.user.address"
                placeholder="請輸入地址"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('name') }"
              />
              <span class="text-danger" v-if="errors.has('address')"
                >請輸入地址</span
              >
            </div>
            <div class="form-group">
              <label for="comment">備註(選填)</label>
              <textarea
                name
                id="comment"
                cols="5"
                rows="5"
                class="form-control"
                v-model.lazy="form.message"
              ></textarea>
            </div>
            <div class="d-flex justify-content-between mt-4">
              <button
                class="btn btn-outline-primary"
                type="button"
                @click="back"
              >
               回到上一頁
              </button>
              <button class="btn btn-primary">送出訂單</button>
            </div>
          </form>
        </div>
      </div>
      <div v-else class="row my-5">
        <div class="col-md-12 text-center bg-height bg-cover row justify-content-start align-items-center" style="background-image:url(https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80)">
          <p class="text-primary font-weight-bolder ml-5 h6">
            您的購物車內還沒有任何商品！
            <button
              type="button"
              class="btn btn-accent"
              @click="toCustomerOrders"
            >
              繼續逛逛
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckoutStep from '@/components/CheckoutStep.vue';
import { mapState } from 'vuex';

export default {
  components: {
    CheckoutStep,
  },
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch('getCart');
    },
    back() {
      const vm = this;
      vm.$router.back();
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.axios.post(api, { data: vm.form }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`/checkout/${response.data.orderId}`);
            }
          });
        }
      });
    },
    deleteCartItem(id) {
      this.$store.dispatch('deleteCartItem', id);
    },
    toCustomerOrders() {
      const vm = this;
      vm.$router.push('/customer_orders');
    },
    changeQty(originCartId, originProductId, qty, isTrue) {
      const vm = this;
      // this.$store.commit('LOADING', true);
      let newQty;
      if (isTrue === true) {
        // 如果為true,數量+1
        newQty = qty + 1;
      } else if (qty === 1) {
        // 數量最小值為1
        newQty = 1;
      } else {
        newQty = qty - 1; // 如果為false,數量-1
      }
      vm.$store.dispatch('updateQty', { originCartId, originProductId, newQty });
    },
    addCouponCode() {
      this.$store.dispatch('addCouponCode');
    },
  },
  created() {
    const vm = this;
    vm.getCart();
  },
  computed: {
    ...mapState(['cart', 'isLoading']),
    coupon_code: {
      get() {
        return this.$store.state.coupon_code;
      },
      set(val) {
        this.$store.commit('COUPON', val);
      },
    },
  },
};
</script>
<style scoped>
.step {
  width: 50px;
  height: 50px;
}
.qty-input {
  width: 45px;
  border-radius: 0px;
}
.bg-cover {
  background-size: cover;
  background-position: top center;
}
.bg-height{
  height: 400px;
}
</style>
