import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import HelloWorld from 'components/HelloWorld'

Axios.defaults.baseURL = 'http://47.96.29.109/vueProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
