import axios from 'axios';
import config from '../server.config.json';
export default {
  getUrl() {
    return;
  },
  getUserState(context) {
    return false;
  },
  getIdeas(context) {
    const url = 'http://localhost:4000/activities/ideas';
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
        console.log(ideas[0]);
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
      .then(data => {
        context.commit('locations', data);
      });
  },
};
