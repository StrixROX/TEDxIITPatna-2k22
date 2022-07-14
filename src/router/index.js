import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home"
    },
  },
  {
    path: '/pastevents',
    name: 'pastevents',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pastevents" */ '../views/PastEventsView.vue'),
    meta: {
      title: "Past Events"
    },
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import(/* webpackChunkName: "partners" */ '../views/ComingSoonView.vue'),
    meta: {
      title: "Coming Soon"
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComingSoonView.vue'),
    meta: {
      title: "Coming Soon"
    },
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "about" */ '../views/TeamView.vue'),
    meta: {
      title: "Team Page"
    },
  },

  // past events
  {
    path: '/pastevents/2021',
    name: 'pastevent_2021',
    component: () => import(/* webpackChunkName: "pastevent_2021" */ '../views/PastEvents/PastEvent.2021.vue'),
    meta: {
      title: "Roar, 2021"
    },
  },
  {
    path: '/pastevents/2019',
    name: 'pastevent_2019',
    component: () => import(/* webpackChunkName: "pastevent_2019" */ '../views/PastEvents/PastEvent.2019.vue'),
    meta: {
      title: "Metamorphosis, 2019"
    },
  },
  {
    path: '/pastevents/2016',
    name: 'pastevent_2016',
    component: () => import(/* webpackChunkName: "pastevent_2016" */ '../views/PastEvents/PastEvent.2016.vue'),
    meta: {
      title: "Shedding Off Feathers, 2016"
    },
  },
  // {
  //   path: '*',
  //   name: 'error404',
  //   component: 
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
