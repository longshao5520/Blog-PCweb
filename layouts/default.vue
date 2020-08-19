<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      class="navbar-a"
      fixed="top"
    >
      <div class="container">
        <b-navbar-brand to="/" class="nav-title">
          <i class="iconfont iconmaojiaxuanzhongx"></i>
          <span>龙少5520</span>
        </b-navbar-brand>

        <b-nav-toggle target="nav-collapse"></b-nav-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/blogs">博客</b-nav-item>
            <b-nav-item to="/tags">标签</b-nav-item>
            <b-nav-item to="/Timeline">时间轴</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <Nuxt />
    <div class="footer mt-4">
      <b-container class="bv-example-row ">
        <b-row>
          <b-col  class="m-4">
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
            <a
              href="https://cn.vuejs.org/"
              target="view_window"
              class="text-blob"
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
  </div>
</template>

<style lang="less">
.navbar-a {
  padding: 0;
}
.nav-title {
  display: flex;
  justify-content: center;
  align-items: center;
  > i {
    font-size: 2rem;
    margin-right: 10px;
  }
}
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
  .ico{
    font-size: 2rem;
    margin: 0 1rem;
  }
}
</style>
