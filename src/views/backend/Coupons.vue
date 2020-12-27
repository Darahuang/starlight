<template>
  <div>
    <AlertMessage></AlertMessage>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button
        class="btn btn-primary"
        type="button"
        @click="openCouponModal(true)"
      >
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date | dateFilter }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未起用</span>
          </td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openCouponModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="deleteCouponModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal 新增/編輯優惠券 -->
    <div
      class="modal fade"
      id="couponModal"
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">編輯優惠券</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">名稱</label>
              <input
                type="text"
                id="title"
                class="form-control"
                placeholder="請輸入名稱"
                v-model="copyTempCoupon.title"
              />
            </div>
            <div class="form-group">
              <label for="code">優惠碼</label>
              <input
                type="text"
                id="code"
                class="form-control"
                placeholder="請輸入優惠碼"
                v-model="copyTempCoupon.code"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input
                type="date"
                id="due_date"
                class="form-control"
                v-model="due_date"
              />
            </div>
            <div class="form-group">
              <label for="percent">折扣百分比</label>
              <input
                type="number"
                id="percent"
                class="form-control"
                placeholder="請輸入折扣百分比"
                v-model="copyTempCoupon.percent"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  type="checkbox"
                  id="is_enabled"
                  class="form-check-input"
                  :true-value="1"
                  :false-value="0"
                  v-model="copyTempCoupon.is_enabled"
                />
                <label for="is_enabled" class="form-check-label"
                  >是否啟用</label
                >
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="updateCoupon(copyTempCoupon, due_date)">
              更新優惠券
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--modal 刪除優惠券 -->
    <div
      class="modal fade"
      id="delCouponModal"
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠券</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ copyTempCoupon.title }}</strong>
            (刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteCoupon">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertMessage from '@/components/AlertMessage.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AlertMessage,
  },
  // data() {
  //   return {
  //     due_date: new Date(),
  //   };
  // },
  methods: {
    getCoupons() {
      this.$store.dispatch('coupons/getCoupons');
    },
    openCouponModal(isNew, item) {
      this.$store.commit('coupons/OPENCOUPONMODAL', { isNew, item });
    },
    updateCoupon(item, duedate) {
      const updatedCoupon = item;
      updatedCoupon.due_date = Math.floor(new Date(duedate) / 1000);
      this.$store.dispatch('coupons/updateCoupon', updatedCoupon);
    },
    deleteCouponModal(item) {
      this.$store.commit('coupons/DELETECOUPONMODAL', item);
    },
    deleteCoupon() {
      this.$store.dispatch('coupons/deleteCoupon');
    },
  },
  created() {
    this.getCoupons();
  },
  computed: {
    ...mapState('coupons', ['coupons', 'isNew', 'tempCoupon', 'due_date']),
    ...mapState(['isLoading']),
    copyTempCoupon() {
      return { ...this.tempCoupon };
    },
    due_date: {
      get() {
        return this.$store.state.coupons.due_date;
      },
      set(val) {
        this.$store.commit('coupons/DUEDATE', val);
      },
    },

  },
};
</script>
