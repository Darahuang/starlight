<template>
  <div>
    <button class="btn  float-right margin" id="gotopBtn" @click="gotop">
      <i class="fas fa-arrow-alt-circle-up fa-2x"></i>
    </button>
    <footer>
      <div class="bg-white mt-5  footer-height">
        <div class="text-center text-deep">
          <img
            src="../assets/imgs/logo.svg"
            class="img-fluid"
            alt
            srcset
            style="width: 150px; height: 150px"
          />
          <p>© 2020 Starlight* All Rights Reserved</p>
          <div>
            <ul class="list-unstyled d-flex justify-content-center">
              <li class="mr-2">
                <a href="# " class="text-info">
                  <i class="fab fa-facebook-square fa-2x"></i>
                </a>
              </li>
              <li class="mr-2">
                <a href="#">
                  <i class="fab fa-instagram instagram fa-2x"></i>
                </a>
              </li>
              <li class="mr-2">
                <a href="#" class="text-success">
                  <i class="fab fa-line fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-slight py-3">
          <div class="text-center">
            <span>資料、圖片來源皆來自網路，僅用來做為學習用途。</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
.btn:hover, .btn:focus{
  color:#f0d22c ;
}
.margin{
  margin-right: 250px;
}
.instagram {
  color: transparent;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: -webkit-radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
}
</style>

<script>
import $ from 'jquery';

export default {
  methods: {
    gotop() {
      $('html, body').animate({ scrollTop: 0 }, 1500);
    },
  },
  created() {
    // 偵測頁面往下滑超過 400px 就讓 Gotop 按鈕出現
    function showBtnCondition() {
      if ($(this).scrollTop() > 400) {
        $('#gotopBtn').fadeIn();
      } else {
        $('#gotopBtn').fadeOut();
      }
    }
    $(window).scroll(showBtnCondition);
  },
};
</script>
