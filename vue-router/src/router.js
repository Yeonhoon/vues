import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)


const About = () => {
  return import(/* webpackChunkName: "about" */ './views/About.vue')
}
// 파라미터 넘기기
const Users = () => {
  return import(/* webpackChunkName: "users" */ './views/Users.vue')
}

const Pb = () => {
  return import(/* webpackChunkName: "users" */ './views/Phonebook.vue')
}
 
const UsersDetail = () => import('./views/UsersDetail.vue')
const UsersEdit = () => import('./views/UsersEdit.vue')

// 함수로 component를 연결하면 속도면에서 차이를 보임.

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-spli tting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // lazy-load: 주소창에 주소가 입력이 됐을 때, 맞는 것만 보여주겠다(SPA)
      component: About
    },
    {
      //경로에 parameter
      path:'/users', //속성이름을  지정해주어 값을 받을수도 있음 :userId
      name:'users',
      beforeEnter:(to, from, next) =>{
        // 라우터가 불러와지기전에 실행되는 함수.
        // console.log("to:", to, "from: ", from)
        // from: 라우터가 어디에서 왔는지
        // to: 라우터가 어디로 가는지
        // next: 라우터를 어디로 이동시킬지 될지 결정
        console.log('beforeEnter')   
        next()    
      },
      component: Users, 
      children: [
        {
          path:":id",
          name:"users-detail",
          component:UsersDetail
        },
        {
          path:":id/edit",
          name:"users-edit",
          component:UsersEdit
        }
      ]
    },
    {
      path:'/redirect',
      redirect: {name:'users'}
    },
    {
      path: '/*', 
      redirect: {name: 'home'}
    },
    {
      path:'/pb',
      name:'phonebook',
      component: Pb
    }
  ]
})
