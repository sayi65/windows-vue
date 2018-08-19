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
      path: '/addWorktime',
      name: 'addWorktime',
      component: require('@/components/AddWorkPage').default
    },
    {
      path: '/employeelist',
      name: 'employeelist',
      component: require('@/components/EmployeeList').default
    },
    {
      path: '/employeedetail',
      name: 'employeedetail',
      component: require('@/components/EmployeeDetail').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
