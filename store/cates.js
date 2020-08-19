const state = () => ({cates: []})

const mutations = {
  saveCates(state, cates) {
    state.cates = cates;
  }
}

export default {namespaced: true, state, mutations}
