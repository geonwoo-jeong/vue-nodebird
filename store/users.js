export const state = () => ({
  me: null,
  followerList: [
    {
      id: 1,
      nickName: "Jeong"
    },
    {
      id: 2,
      nickName: "saber"
    },
    {
      id: 3,
      nickName: "sakura"
    }
  ],
  followingList: [
    {
      id: 1,
      nickName: "Jeong"
    },
    {
      id: 2,
      nickName: "saber"
    },
    {
      id: 3,
      nickName: "sakura"
    }
  ]
});

export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickName(state, payload) {
    state.me.nickName = payload.nickName;
  },
  addFollower(state, payload) {
    state.followerList.push(payload);
  },
  addFollowing(state, payload) {
    state.followingList.push(payload);
  },
  removeFollower(state, payload) {
    const index = state.followerList.findIndex(v => v.id === payload.id);
    state.followerList.splice(index, 1);
  },
  removeFollowing(state, payload) {
    const index = state.followingList.findIndex(v => v.id === payload.id);
    state.followingList.splice(index, 1);
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
  },
  addFollowing({ commit }, payload) {
    commit("addFollowing", payload);
  },
  addFollower({ commit }, payload) {
    commit("addFollower", payload);
  },
  removeFollowing({ commit }, payload) {
    commit("removeFollowing", payload);
  },
  removeFollower({ commit }, payload) {
    commit("removeFollower", payload);
  }
};
