import Vue from 'vue';
import Router from 'vue-router';

import Landing from './views/Landing_page/LandingPage.vue';
import Home from './views/Home_view/Home.vue';
import Short from './views/Short_generator/ShortGenerator.vue';
import IdeaAdd from './views/Idea_adder/IdeaAdder.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },

    {
      path: '/short',
      name: 'Short',
      component: Short,
    },
    {
      path: '/idea-add',
      name: 'IdeaAdd',
      component: IdeaAdd,
    },
  ],
});
