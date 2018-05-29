import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'
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

const router = new Router({
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

Vue.use(VueAnalytics, {
  id: 'UA-120027011-1',
  router,
})

export default router
