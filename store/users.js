export const state = () => ({
  me: null,
  follwerList: [],
  followingList: []
});

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickName(state, payload) {
    state.me.nickName = payload.nickName;
  }
};

export const actions = {
  signUp({ commit }, payload) {
    commit("setMe", payload);
  },
  logIn({ commit }, payload) {
    commit("setMe", payload);
  },
  logOut({ commit }, payload) {
    commit("setMe", null);
  },
  changeNickName({ commit }, payload) {
    commit("changeNickName", payload);
  }
};
