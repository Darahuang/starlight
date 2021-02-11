<template>
  <div>
    <div class="container" data-aos="fade-up">
      <h2 class="text-center text-primary py-3 font-weight-bolder">
        <i class="fab fa-pagelines mr-2"></i>最新消息
      </h2>
      <div class="row">
        <div class="col-md-4" v-for="item in events" :key="item">
          <div class="card mb-5">
            <div
              style="height: 250px"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
              class="bg-cover card-image cursor"
            ></div>
            <div class="card-body">
              <span class="badge badge-accent float-right ml-2 py-1 px-3">期間限定</span>
              <h5 class="card-title text-primary font-weight-bolder">{{ item.event }}</h5>
              <div>
                <p class="text-heavy card-text"><i class="fas fa-clock mr-2"></i>{{ item.date }}</p>
                <p class="h6 text-heavy card-text">
                  {{ item.content }}
                  <i class="fas fa-heart ml-2"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import events from '../../assets/js/events';

export default {
  data() {
    return {
      events,
    };
  },
};
</script>
