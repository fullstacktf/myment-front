import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Landing',
			component: () => import('./views/Landing_page/LandingPage.vue')
		},
		{
			path: '/home',
			name: 'Home',
			component: () => import('./views/Home_page/HomePage.vue')
		},

		{
			path: '/short',
			name: 'Short',
			component: () => import('./views/Short_generator/ShortGenerator.vue')
		},
		{
			path: '/idea-add',
			name: 'IdeaAdd',
			component: () => import('./views/Idea_adder/IdeaAdder.vue')
		}
	]
});
