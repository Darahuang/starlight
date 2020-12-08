<template>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="col-md">
          <span
            class="badge badge-pill step py-3 bg-deep"
            :class="{ 'bg-accent': total,  }"

            >1.填寫訂購資料</span
          >
        </div>
        <div class="col-md">
          <span
            class="badge badge-pill bg-deep step py-3 font-weight-bold"
            :class="{ 'bg-accent': paid === false }"
            >2.金流付款</span
          >
        </div>
        <div class="col-md">
          <span
            class="badge badge-pill bg-deep step py-3"
            :class="{ 'bg-accent': paid === true }"
            >3.完成！</span
          >
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
<style scoped>
.step {
  width: 350px;
}

</style>
