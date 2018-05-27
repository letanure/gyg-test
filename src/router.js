import Vue from 'vue'
import Router from 'vue-router'
import {
  BaseLayout,
  MainHeader
} from '@/views/layout/'
import {
  ErrorPage,
  HomePage,
  SearchPage
} from '@/views/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'HomePage',
          components: {
            header: MainHeader,
            main: HomePage,
          },
        },
        {
          path: 'search',
          name: 'SearchPage',
          components: {
            header: MainHeader,
            main: SearchPage,
          },
        },
        {
          path: 'error',
          components: {
            header: MainHeader,
            main: ErrorPage,
          },
        },
        {
          path: '*',
          redirect: 'error',
        },
      ],
    },
  ],
})
