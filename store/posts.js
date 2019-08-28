export const state = () => ({
  namme: "posts"
});

export const mutations = {
  bye(state) {
    state.name = "goodbye posts";
  }
};
