import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('@/pages/Home.vue'),
		},
		{
			path: '/about',
			name: 'About',
			component: () => import('@/pages/About.vue'),
		},
		{
			path: '/contact',
			name: 'Contact',
			component: () => import('@/pages/Contact.vue'),
		},
	],
})

export default router
