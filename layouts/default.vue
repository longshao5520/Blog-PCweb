<template>
  <div>
    <Navbar></Navbar>
    <Nuxt />
    <Footer></Footer>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackTop from "../components/BackTop";
export default {
  components: {
    Navbar,
    Footer,
    BackTop
  }
};
</script>

<style lang="less"></style>
