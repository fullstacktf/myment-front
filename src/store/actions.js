export default {
  getUserState(context) {
    return false;
  },
  getIdeas(context) {
    const url = 'http://localhost:3000/activities/ideas';
    const data = { category: 'food' };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())

      .catch(err => {
        console.log('ERROR: no ideas received', err);
      })
      .then(ideas => {
        context.commit('ideasfetch', ideas);
      });
  },
  getLocations(context) {
    const url = 'http://localhost:3000/locations/countries';
    const data = {};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())

      .catch(err => {
        console.log('ERROR: no locations received', err);
      })
      .then(locations => {
        context.commit('locationsfetch', locations);
      });
  },
  getLeisureTags(context) {
    const url = 'http://localhost:3000/tags/leisure';
    const data = {};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())

      .catch(err => {
        console.log('ERROR: no leisure tags received', err);
      })
      .then(leisuretags => {
        context.commit('leisuretagsfetch', leisuretags);
      });
  },

  getLodgingTags(context) {
    const url = 'http://localhost:3000/tags/lodging';
    const data = {};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())

      .catch(err => {
        console.log('ERROR: no lodging tags received', err);
      })
      .then(lodgingtags => {
        context.commit('lodgingtagsfetch', lodgingtags);
      });
  },

  getFoodTags(context) {
    const url = 'http://localhost:3000/tags/food';
    const data = {};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())

      .catch(err => {
        console.log('ERROR: no food tags received', err);
      })
      .then(foodtags => {
        context.commit('foodtagsfetch', foodtags);
      });
  },
  sendTags(context) {
    const url = 'http://localhost:3000/tags/send';
    const data = {};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())

      .catch(err => {
        console.log('ERROR: no tags sended', err);
      })
      .then(tags => {
        context.commit('tagstosendfetch', tags);
      });
  },
};
