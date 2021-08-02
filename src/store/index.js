import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  getters: {},
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
});
