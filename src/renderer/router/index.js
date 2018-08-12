import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'worktingpage',
      component: require('@/components/WorkingPage').default
    },
    {
      path: '/empliyeelist',
      name: 'empliyeelist',
      component: require('@/components/EmployeeList').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
