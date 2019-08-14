import config from '../server.config.json';
export default {
  getUrl() {
    return;
  },
  getUserState(context) {
    return false;
  },
  sendCountry(context, country) {
    context.commit('postcountry', country);
  },
  sendCity(context, city) {
    context.commit('postcity', city);
  },
  sendZone(context, zone) {
    context.commit('postzone', zone);
  },
  getIdeas(context, zone, city, country, tags) {
    const url = 'http://localhost:4000/activities/all';
    const data = {
      zone: zone,
      city: city,
      country: country,
      tags: tags,
    };
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
    const url = 'http://' + config.url + ':' + config.port;
    const dir = '/locations/places';
    const data = {};
    fetch(url + dir, {
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
    const url = 'http://' + config.url + ':' + config.port;
    const dir = '/tags/category';
    const data = { category: 'leisure' };
    fetch(url + dir, {
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
    const url = 'http://' + config.url + ':' + config.port;
    const dir = '/tags/category';
    const data = { category: 'lodging' };
    fetch(url + dir, {
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
    const url = 'http://' + config.url + ':' + config.port;
    const dir = '/tags/category';
    const data = { category: 'food' };
    fetch(url + dir, {
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
