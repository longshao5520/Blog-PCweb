<template>
  <transition
    enter-active-class="animate__animated animate__bounceInRight"
    leave-active-class="animate__animated animate__bounceOutDown"
  >
    <div class="scrollTop" v-show="showTop" @click="gotop">
      <i>top</i>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      scrollTop: 0
    };
  },
  computed: {
    showTop: function() {
      let value = this.scrollTop > 300 ? true : false;
      return value;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollTop);
  },
  methods: {
    gotop() {
      let back = setInterval(() => {
        if (document.documentElement.scrollTop || document.body.scrollTop) {
          document.documentElement.scrollTop -= 50;
          document.body.scrollTop -= 50;
        } else {
          clearInterval(back);
        }
      }, 20);
    },
    getScrollTop() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    }
  }
};
</script>
<style scoped>
.scrollTop {
  position: fixed;
  right: 3%;
  bottom: 5%;
  background-color: #666;
  color: white;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 50%;
  text-align: center;
  font-size: 1.3rem;
  cursor: pointer;
  z-index: 5;
}
</style>
