// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    authData: {
      accessToken: null,
      username: null
    }
  },
  mutations: {
    setAuthData(state, data) {
      state.authData = data;
    }
  },
  actions: {
    updateAuthData({ commit }, data) {
      commit('setAuthData', data);
    }
  },
  getters: {
    authData: state => state.authData
  }
});
