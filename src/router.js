import { createRouter, createWebHistory } from 'vue-router';
//import HelloWorld from './components/HelloWorld.vue'
import Home from './views/MainLanding.vue';
import Work from './views/MainWorks.vue';
import Skills from './views/MainSkills.vue';
import contact from './views/MainContact.vue';
import notfound from './views/MainErrorPage.vue';
import ngl from './views/MainNGL.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		//redirect / to /portfolio
		{
			path: '/',
			redirect: '/portfolio'
		},

		{
			path: '/portfolio',
			name: 'homepg',
			component: Home,
			props: true
		},
		{
			path: '/portfolio/work',
			name: 'work',
			component: Work,
			props: true
		},
		{
			path: '/portfolio/skills',
			name: 'skills',
			component: Skills,
			props: true
		},
		{
			path: '/portfolio/contact',
			name: 'contact',
			component: contact,
			props: true
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'notfound',
			component: notfound,
			props: true
		}
	]
});
