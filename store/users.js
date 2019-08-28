export const state = () => ({
  namme: "users"
});

export const mutations = {
  bye(state) {
    state.name = "goodbye users";
  }
};
