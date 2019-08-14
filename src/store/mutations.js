export default {
  changeUserState(state) {
    state.userLogged = true;
  },
  postcountry(state, country) {
    state.selectedCountry = country;
  },
  postcity(state, city) {
    state.selectedCity = city;
  },
  postzone(state, zone) {
    state.selectedZone = zone;
  },
  change(state) {
    state.locationAdded = !state.locationAdded;
  },
  falsed(state) {
    state.tagsAdded = false;
  },
  taggated(state) {
    state.tagsAdded = true;
  },
  ideasfetch(state, response) {
    state.ideas = response;
  },
  locationsfetch(state, response) {
    state.places = [response];
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
