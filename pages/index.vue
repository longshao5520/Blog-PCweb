<template>
  <div>
    <div class="main">
      <div class="head">
        <div class="headPortrait">
          <img
            src="http://img.yql520.com/blog_public/img/%E5%A4%B4%E5%83%8F.png"
            class="logo img-responsive"
          />
        </div>
        <div class="domainName">
          <h1><span>longshao5520</span></h1>
          <h2><span>Node.js developer</span></h2>
          <!-- <h3><span>QQ: 1790120845</span></h3>
          <h3><span>Email: longshao5520@outlook.com</span></h3> -->
          <i class="el-icon-arrow-down"></i>
        </div>
      </div>
    </div>
    <b-container class="bv-example-row pt-4 pb-4">
      <b-row class="justify-content-md-center">
        <h1 class="pb-4 m-4" style="text-align: center;">My Project</h1>
      </b-row>
      <b-row>
        <b-col>
          <b-card no-body class="overflow-hidden m-2" style="max-width: 100%;">
            <b-row no-gutters>
              <b-col md="12">
                <a
                  href="https://conchbrain.club/"
                  target="view_window"
                  class="cardimg"
                  :style="{
                    backgroundImage:
                      'url(https://corehome.oss-accelerate.aliyuncs.com/images/projects/conchbrain.jpg)'
                  }"
                ></a>
              </b-col>
              <b-col>
                <b-card-body title="海螺大脑俱乐部">
                  <b-card-text class="m-4">
                    你为什么不问问神奇的魔法海螺呢？
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: ""
    };
  }
};
</script>

<style lang="less">
.main {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    #a0ffe6,
    #81f5ff,
    #ffffdd,
    #ffd5e5,
    #ffffdd,
    #81f5ff,
    #a0ffe6
  );
  background-size: 1400% 300%;
  animation: mymove 15s ease infinite;
  z-index: -1;
}
@keyframes mymove {
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 25% 75%;
  }
  50% {
    background-position: 50% 100%;
  }
  75% {
    background-position: 75% 25%;
  }
  100% {
    background-position: 100% 0%;
  }
}
.head {
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .headPortrait {
    width: 200px;
    height: 200px;
    border: 2px solid #666666;
    border-radius: 50%;
    padding: 6px;
    position: relative;
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      border: 1px solid #666666;
      left: 0;
      top: 0;
      box-sizing: border-box;
      border-radius: 50%;
      animation: wave 2s infinite linear;
    }
    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: haha1 10s linear infinite;
    }
  }
  .domainName {
    width: 100%;
    text-align: center;
    color: #666666;
    margin-top: 2rem;
    > h1 {
      font-family: "Kaushan Script", cursive;
      margin-bottom: 1.5rem;
      font-weight: bold;
    }
    > h2 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }
    > h3 {
      font-size: 1.25rem;
      margin-bottom: 1.25rem;
    }
    > i {
      margin-top: 3rem;
      font-size: 50px;
    }
  }
}

@keyframes wave {
  to {
    transform: scale(1.5);
    opacity: 0;
  }
}
@keyframes haha1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

.cardimg {
  display: block;
  height: 300px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-out;
  &:hover {
    background-size: 110% 140%;
  }
}
</style>
