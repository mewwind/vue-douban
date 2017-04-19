import Vue from 'vue';
import Router from 'vue-router';
import MovieTab from '../view/movie/Tab';

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
		{
			path: '/movie/home',
			name: 'MovieHome',
			component: MovieTab,
			alias: '/'
	    },
  	]
})
