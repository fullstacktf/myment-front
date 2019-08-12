import axios from 'axios';
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
        console.log(ideas[0]);
        context.commit('ideasfetch', ideas.ideas);
      });
  },
};
