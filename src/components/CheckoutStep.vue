<template>
  <div>
    <div class="container my-5" v-if="total !== 0">
      <div class="row justify-content-center text-center align-items-center">
        <div class="col-md-3">
          <div
            class="bg-deep font-weight-bold rounded d-none d-md-block mr-md-2 mb-2 py-2"
            :class="{ 'bg-accent': total, 'd-block': total }"
          >
            Step1.填寫訂購資料
          </div>
        </div>
        <div class="col-md-3">
          <div
            class="bg-deep font-weight-bold rounded d-none d-md-block mr-md-2 mb-2 py-2"
            :class="{ 'bg-accent': paid === false, 'd-block': paid === false }"
          >
            Step2.金流付款
          </div>
        </div>
        <div class="col-md-3">
          <div
            class="bg-deep font-weight-bold rounded d-none d-md-block mr-md-2 mb-2 py-2"
            :class="{ 'bg-accent': paid === true, 'd-block': paid === true }"
          >
            Step3.完成！
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['total', 'paid'],
};
</script>
