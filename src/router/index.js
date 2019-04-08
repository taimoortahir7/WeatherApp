import Vue from 'vue'
import Router from 'vue-router'
import weather from '@/components/WeatherFinder'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/weather'
  },
  {
    path: '/weather',
    name: 'weather',
    component: weather
  },
  {
    path: '/**',
    name: 'notFound',
    redirect: '/'
  }
  ]
})
