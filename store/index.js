import Vue from "vue";
import Vuex from "vuex";
import axios from "@nuxtjs/axios";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      cates: []
    },
    mutations: {
      saveCates(state, cates) {
        state.cates = cates;
      }
    },
    actions: {
      async getCates(context, axios) {
        await axios.$get("cates").then(res => {
          context.commit("saveCates", res.data);
        });
      }
    }
  });

export default store;
