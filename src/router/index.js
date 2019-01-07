import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/components/pages/Welcome'
import PageTest from '@/components/pages/PageTest'
import PageUser from '@/components/pages/PageUser'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },{
      path: '/test',
      name: 'PageTest',
      component: PageTest
    },{
      path: '/user/id/:num',
      name: 'PageUser',
      component: PageUser
    },{
      path: '/user/:name',
      name: 'PageUser',
      component: PageUser
    }
  ]
})
