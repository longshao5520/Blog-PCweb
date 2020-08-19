<template>
  <b-container style="margin-top: 60px; min-height: calc(100vh - 21.6rem);">
    <b-row>
      <Sidebar></Sidebar>
      <b-col md="9">
        时间轴
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Sidebar
  },
  head() {
    return {
      title: "时间轴 - "
    };
  }
};
</script>

<style></style>
