import Vue from "vue";
import Vuex from "vuex";
import cates from "./cates";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {},
    modules: {
      cates
    }
  });

export default store;
