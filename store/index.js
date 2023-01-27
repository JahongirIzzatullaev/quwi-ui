export const state = () => ({
  projectsList: [],
});

export const mutations = {
  setProjectsList: (state, payload) => {
    state.projectsList = payload;
  },
};
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },
  projectsList(state) {
    return state.projectsList;
  },
};
export const actions = {
  getProjects({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get("projects")
        .then((resp) => {
          commit("setProjectsList", resp.data?.projects);
          resolve(resp);
        })
        .catch((err) => reject(err))
        .finally(() => {});
    });
  },
};
