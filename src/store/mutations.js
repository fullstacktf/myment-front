export default {
  changeUserState(state) {
    state.userLogged = true;
  },
  change(state) {
    state.locationAdded = !state.locationAdded;
  },
  falsed(state) {
    state.tagsAdded = false;
  },
  taggated(state) {
    state.tagsAdded = !state.tagsAdded;
  },
  ideasfetch(state, response) {
    state.ideas = response;
  },
};
