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
  locationsfetch(state, response) {
    state.locations = response;
  },
  tagstosendfetch(state, response) {
    state.tagsToSend = response;
  },

  leisuretagsfetch(state, response) {
    state.leisureTags = response;
  },

  lodgingtagsfetch(state, response) {
    state.lodgingTags = response;
  },

  foodtagsfetch(state, response) {
    state.foodTags = response;
  },
};
