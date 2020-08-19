<template>
  <div class="footer mt-4">
    <b-container class="bv-example-row ">
      <b-row>
        <b-col class="m-4">
          <font-awesome-icon :icon="['fab', 'github']" class="ico" />
          <font-awesome-icon :icon="['fab', 'weibo']" class="ico" />
          <font-awesome-icon :icon="['fab', 'qq']" class="ico" />
          <font-awesome-icon :icon="['fab', 'weixin']" class="ico" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <span>Design and Development of</span>
          <router-link to="/" class="text-blob">
            <i class="iconfont iconmaojiaxuanzhongx"></i> 龙少5520
          </router-link>
          <span>Supported by</span>
          <a href="https://cn.vuejs.org/" target="view_window" class="text-blob"
            >Nuxtjs</a
          >
          <br />© 2020 - YQL520
          <a
            href="http://www.beian.miit.gov.cn/"
            target="view_window"
            class="text-blob"
            >豫ICP备19009859号</a
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.footer {
  text-align: center;
  line-height: 2rem;
  padding-top: 2rem;
  padding-bottom: 5rem;
  color: #777777;
  background: #efefef;
  a {
    text-decoration: none;
    color: #555555;
  }
  .text-blob {
    font-weight: bold;
  }
  .ico {
    font-size: 2rem;
    margin: 0 1rem;
  }
}
</style>
