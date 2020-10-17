<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <section
      class="container py-5 bg-cover mt-5"
      data-aos="fade-up"
      style="
        background-image: url(https://images.unsplash.com/photo-1502355984-b735cb2550ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
      "
    >
      <div class="row">
        <div class="mx-auto text-center">
          <div class="bg-deep p-5 my-5">
            <h5 class="text-white pb-3 font-weight-bolder">請輸入訂單號碼：</h5>
            <input type="text" class="form-control" v-model="id" />
            <button
              class="btn btn-primary mt-4"
              @click="checkorder(id)"
              type="button"
            >
              查詢訂單
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="container mt-3" v-if="order">
      <div class="row">
        <div class="col-md-7">
          <h5 class="text-primary font-weight-bolder">
            客戶資料
            <i class="fas fa-user ml-2"></i>
          </h5>
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <th>Email</th>
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
                    <span v-else class="text-primary">確認付款</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-5">
          <h5 class="text-primary font-weight-bolder">
            訂單內容
            <i class="far fa-list-alt ml-2"></i>
          </h5>
          <div class="row" v-for="item in order.products" :key="item.id">
            <div class="col-3 mb-3">
              <div class="img">
                <img
                  :src="item.product.imageUrl"
                  alt
                  srcset
                  width="80px"
                  height="80px"
                />
              </div>
            </div>
            <div class="col-9">
              <h6>{{ item.product.title }} x{{ item.qty }}</h6>
              <h6>小計{{ item.final_total | currencyFilter }}</h6>
            </div>
          </div>
          <hr />
          <div>
            <h3 class="text-right text-primary">
              總計{{ order.total | currencyFilter }}
            </h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      order: {},
      id: '',
      isLoading: false,
    };
  },
  methods: {
    checkorder(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${id}`;
      vm.isLoading = true;
      vm.axios.get(api).then((response) => {
        vm.order = response.data.order;
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.checkorder();
  },
};
</script>

<style scoped>
.bg-cover {
  background-size: cover;
  background-position: center center;
}
</style>
