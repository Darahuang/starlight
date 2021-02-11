<template>
  <div>
    <AlertMessage></AlertMessage>
    <loading :active.sync="isLoading"></loading>
    <div class="table-responsive">
      <table class="table mt-4">
        <thead>
          <tr>
            <th class="d-none d-lg-table-cell">購買時間</th>
            <th class="d-none d-lg-table-cell">Email</th>
            <th>購買品項</th>
            <th>應付金額</th>
            <th>是否付款</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody v-if="orders.length">
          <tr
            v-for="(item, key) in sortOrder"
            :key="key"
            :class="{ 'text-secondary': !item.is_paid }"
          >
            <td class="d-none d-lg-table-cell">
              {{ item.create_at | dateFilter }}
            </td>
            <td class="d-none d-lg-table-cell">{{ item.user.email }}</td>
            <td>
              <ul class="list-unstyled">
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} {{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">{{ item.total | currencyFilter }}</td>
            <td>
              <strong v-if="item.is_paid" class="text-success">已付款</strong>
              <span v-else class="text-muted">未付款</span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openOrderModal(item)"
              >
                編輯
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :childPagination="pagination" @emitPage="getOrder"></Pagination>
    <!--Modal 編輯訂單  -->
    <div
      class="modal fade"
      id="orderModal"
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">訂單資訊</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="name">姓名</label>
              <input
                type="text"
                class="form-control"
                name="name"
                id="name"
                v-model="copyTempOrder.user.name"
                placeholder="請輸入姓名"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('name') }"
              />
              <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                v-model="copyTempOrder.user.email"
                placeholder="請輸入Email"
                v-validate="'required|email'"
                :class="{ 'is-invalid': errors.has('email') }"
              />
              <span class="text-danger" v-if="errors.has('email')">{{
                errors.first('email')
              }}</span>
            </div>
            <div class="form-group">
              <label for="tel">電話</label>
              <input
                type="tel"
                class="form-control"
                name="tel"
                id="tel"
                v-model="copyTempOrder.user.tel"
                placeholder="請輸入電話"
                v-validate="'required|myPhone'"
                :class="{ 'is-invalid': errors.has('tel') }"
              />
              <span class="text-danger" v-if="errors.has('tel')">請輸入電話</span>
            </div>
            <div class="form-group">
              <label for="address">地址</label>
              <input
                type="text"
                class="form-control"
                name="address"
                id="address"
                v-model="copyTempOrder.user.address"
                placeholder="請輸入地址"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('name') }"
              />
              <span class="text-danger" v-if="errors.has('address')">請輸入地址</span>
            </div>
            <div class="form-group">
              <label for="address">應付金額</label>
              <input
                type="number"
                class="form-control"
                id="address"
                placeholder="請輸入標題"
                v-model="copyTempOrder.total"
              />
            </div>
            <div class="form-group">
              <label for="is_paid">付款狀態:</label>
              <span v-if="copyTempOrder.is_paid">已付款</span>
              <div v-else class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="is_paid"
                  v-model="copyTempOrder.is_paid"
                  :true-value="1"
                  :false-value="0"
                />
                <span>未付款</span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateOrder(copyTempOrder)">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination.vue';
import AlertMessage from '@/components/AlertMessage.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Pagination,
    AlertMessage,
  },
  methods: {
    getOrder(page = 1) {
      this.$store.dispatch('backend/getOrder', page);
    },
    openOrderModal(item) {
      this.$store.commit('backend/OPENORDERMODAL', item);
    },
    updateOrder(item) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${item.id}`;
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.axios.put(api, { data: item }).then((response) => {
            if (response.data.success) {
              $('#orderModal').modal('hide');
              const { message } = response.data;
              const status = 'warning';
              vm.$store.dispatch('updateMessage', { message, status });
              vm.getOrder();
            }
          });
        } else {
          $('#orderModal').modal('hide');
          vm.getOrder();
        }
      });
    },
  },
  computed: {
    ...mapState('backend', ['orders', 'pagination', 'tempOrder']),
    ...mapState(['isLoading']),
    copyTempOrder() {
      return JSON.parse(JSON.stringify(this.tempOrder));
    },
    copyOrders() {
      return [...this.orders];
    },
    sortOrder() {
      const vm = this;
      let newOrder = [];
      if (vm.copyOrders.length) {
        newOrder = [...vm.copyOrders].sort((a, b) => {
          const aIsPaid = a.is_paid ? 1 : 0;
          const bIsPaid = b.is_paid ? 1 : 0;
          return bIsPaid - aIsPaid;
        });
      }
      return newOrder;
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
