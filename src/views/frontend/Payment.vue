<template>
  <div>
    <CheckoutStep :paid="order.is_paid"></CheckoutStep>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="my-4 row d-flex justify-content-center">
        <form class="col-md-8">
          <table class="table">
            <thead>
              <th>品名</th>
              <th width="25%">數量</th>
              <th width="15%">小計</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td>{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
                <td class="align-middle text-right">
                  {{ item.final_total | currencyFilter }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right text-danger">{{ order.total }}</td>
              </tr>
            </tfoot>
          </table>
          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀況</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">確認付款</span>
                </td>
              </tr>
              <tr v-if="order.is_paid">
                <th>訂單編號</th>
                <td>
                  <input type="text" id="demoInput" v-model="orderId" />
                  <div class="mt-2">
                    <button
                      id="btn"
                      class="btn btn-outline-primary btn-sm mr-2"
                      type="button"
                      @click="copylink"
                    >
                      點選複製
                    </button>
                    <router-link to="/check_orders" class="btn btn-outline-primary btn-sm ml-2"
                      >查看訂單</router-link
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right" v-if="order.is_paid === false">
            <button
              class="btn btn-danger"
              type="button"
              @click="pay"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              確認付款去
            </button>
          </div>
          <div v-if="order.is_paid">
            <router-link to="/customer_orders" class="btn btn-deep mr-2 btn-block"
              >繼續選購商品</router-link
            >
          </div>
        </form>
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
      copy: false,
    };
  },
  methods: {
    getOrder() {
      this.$store.dispatch('getOrder');
    },
    pay() {
      this.$store.dispatch('pay');
    },
    copylink() {
      const vm = this;
      const input = document.querySelector('#demoInput');
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        vm.copy = true;
        const message = '複製成功';
        const status = 'warning';
        vm.$store.dispatch('updateMessage', { message, status });
      }
    },
  },
  created() {
    this.$store.commit('ORDERID');
    this.getOrder();
  },
  computed: {
    ...mapState(['orderId', 'isLoading', 'order']),
  },
};
</script>
