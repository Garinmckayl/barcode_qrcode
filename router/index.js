import Vue from 'vue'
import Router from 'vue-router'
import Barcode from '../components/Barcode'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Barcode',
      component: Barcode
    }
  ]
})
