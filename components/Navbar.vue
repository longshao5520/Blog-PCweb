<template>
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
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {};
</script>

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
</style>
