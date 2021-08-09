import { createStore } from 'vuex';
import { auth, userCollection } from '../includes/firebase';

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
  actions: {
    async register({ commit }, payload) {
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email,
        // eslint-disable-next-line comma-dangle
        payload.password
      );

      await userCollection.doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      userCred.user.updateProfile({
        displayName: payload.name,
      });

      commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit('toggleAuth');
      }
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);
      commit('toggleAuth');
    },
    async signout({ commit }) {
      await auth.signOut();
      commit('toggleAuth');
    },
  },
});
