import Vue from 'vue'
import Router from 'vue-router'
import MovieTab from '../view/movie/Tab'
import MovieSubject from '../view/movie/MovieSubject'
import About from '../view/About/About'
import Search from '../view/movie/Search'

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
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/movie/subject/:id',
      name: 'MovieSubject',
      component: MovieSubject
    },
    {
      path: '/movie/search',
      name: 'SearchMovie',
      component: Search
    }
  ]
})
