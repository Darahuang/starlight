<template>
  <div>
    <div class="container" data-aos="fade-up">
      <h2 class="text-center text-primary py-3 font-weight-bolder">
        <i class="fab fa-pagelines mr-2"></i>Starlight簡介
      </h2>
      <div class="timeline-section">
        <div class="row timeline-pointer">
          <div class="col-sm-6">
            <h3 class="text-heavy">成立</h3>
            <p class="h6 line-height">
              Starlight，成立的初衷是希望以讓大家能透過品嘗甜點感受到幸福和滿足感,以嚴選台灣當地的新鮮食材，精準而完整地呈現出優質材料的本來味道來傳遞我們的理念。
              <br />
            </p>
          </div>
          <div class="col-sm-6">
            <div
              class="box bg-cover"
              style="
                background-image: url(https://images.unsplash.com/photo-1566931078679-a6421435f314?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
              "
            ></div>
          </div>
        </div>
        <div class="row my-5 flex-row-reverse timeline-pointer">
          <div class="col-sm-6">
            <h3 class="text-heavy">理念</h3>
            <p class="h6 line-height">
              「沒有多餘的糖、沒有假的奶油、沒有人工香精，要做出會呼吸的幸福甜點」-這是從開店就不變的宗旨，主廚在開始研發新的甜點時，奶油與砂糖就變得斤斤計較了，在研發一款新甜點，這些環節都變得非常重要，我們希望享受甜點是不分男女老少的，是吃來無負擔的。
            </p>
          </div>
          <div class="col-sm-6">
            <div
              class="box bg-cover"
              style="
                background-image: url(https://images.unsplash.com/photo-1549398164-0963221d3dcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
              "
            ></div>
          </div>
        </div>
        <div class="row my-5 timeline-pointer">
          <div class="col-sm-6">
            <h3 class="text-heavy">堅持</h3>
            <p class="h6 line-height">
              我們堅持使用嚴選的天然發酵奶油，取代市面上常見的酥油、乳瑪琳、人造奶油
              等...
              及使用進口頂級麵粉以及台灣在地生產有機食材，融入我們的甜點及飲品中，
              拒絕使用任何人工香精等添加物，嚴選健康的食材是我們的堅持，希望讓每個人品嚐美味的同時也能減少負擔。。
            </p>
          </div>
          <div class="col-sm-6">
            <div
              class="box bg-cover"
              style="
                background-image: url(https://images.unsplash.com/photo-1592600310408-7e46d52a2917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="container" data-aos="fade-up">
        <h2 class="text-center py-3 text-primary font-weight-bolder">
          <i class="fab fa-pagelines mr-2"></i>Starlight資訊
        </h2>
        <div class="row">
          <div class="col-md-6 p-3">
            <p>
              <span class="mr-2 text-primary">
                <i class="fas fa-phone"></i>
              </span>
              <span>聯絡電話：0912-345678</span>
            </p>
            <p>
              <span class="mr-2 text-primary">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>地址：112台北市北投區大業路516巷2-22</span>
            </p>
            <p>
              <span class="mr-2 text-primary">
                <i class="fas fa-envelope"></i>
              </span>
              <span>信箱：starlight@gmail.com</span>
            </p>
            <p>
              <span class="mr-2 text-primary">
                <i class="fas fa-user"></i>
              </span>
              <span>聯絡人：黃先生</span>
            </p>
            <p>
              <span class="mr-2 text-primary">
                <i class="fas fa-clock"></i>
              </span>
              <span>營業時間：11：00 ~ 18：00 每週一公休</span>
            </p>
          </div>
          <div class="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.102242784396!2d121.49487031547368!3d25.13223398392636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzU2LjAiTiAxMjHCsDI5JzQ5LjQiRQ!5e0!3m2!1szh-TW!2stw!4v1596835756468!5m2!1szh-TW!2stw"
              width="100%"
              height="350"
              frameborder="0"
              style="border: 0"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe>
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
      localStorageData: JSON.parse(localStorage.getItem('favItems')) || [],
    };
  },
};
</script>

<style scoped>
.line-height {
  line-height: 1.5rem;
}

.box {
  height: 250px;
}

.bg-cover {
  background-position: center;
  background-size: cover;
}

.timeline-section {
  position: relative;
}

.timeline-section::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 3px;
  transform: translateX(-50%);
  background-color: #ccc;
}
.timeline-pointer {
  position: relative;
}
.timeline-pointer::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid #ccc;
  transform: translateX(-50%);
  background-color: #ccc;
  z-index: 10;
}
@media (max-width: 576px) {
  .timeline-section::after,
  .timeline-pointer::after {
    display: none;
  }
}
</style>
