export default {
  changeUserState(state) {
    state.userLogged != true;
  },
  changeTagAdded(state) {
    state.tagAdded = true;
  },
  changeLocationAdded(state) {
    state.locationAdded = true;
  },
};
