<template>
  <div class="login">
    <form class="form-signin mt-5" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-bolder text-primary text-center">登入後台管理</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        name="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        autofocus
        v-validate="'required|email'"
        :class="{ 'is-invalid': errors.has('email') }"
        v-model.lazy="user.username"
      />
      <span class="text-danger" v-if="errors.has('email')">請輸入Email</span>
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        name="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        v-validate="'required'"
        :class="{ 'is-invalid': errors.has('password') }"
        v-model="user.password"
      />
      <span class="text-danger" v-if="errors.has('password')">請輸入密碼</span>
      <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Log in</button>
      <p ref="fail" class="text-danger h6 mt-3"></p>
      <p class="mt-3 text-deep">&copy; 2020 Starlight* All Rights Reserved</p>
      <router-link to="/" class="text-primary text-decoration-none link-hover">
        <i class="fas fa-arrow-left"></i> 回到 Starlight
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.axios.post(api, vm.user).then((response) => {
            if (response.data.success) {
              vm.$router.push('/admin/products');
            } else {
              const text = this.$refs.fail; // 取得p元素
              text.textContent = '登入失敗';
            }
          });
        }
      });
    },
  },
};
</script>
