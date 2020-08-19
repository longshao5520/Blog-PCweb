<template>
  <div>
    <Navbar></Navbar>
    <Nuxt />
    <Footer></Footer>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackTop from "@/components/BackTop";
import { mapMutations } from "vuex";

export default {
  components: {
    Navbar,
    Footer,
    BackTop
  },
  methods: {
    ...mapMutations("cates", ["saveCates"])
  },
  created() {
    this.$axios.$get("cates").then(res => {
      this.saveCates(res.data);
    });
  }
};
</script>

<style lang="less"></style>
