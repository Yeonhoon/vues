import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
// import Todo from '../views/Todo.vue'



Vue.use(VueRouter)


const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const Todo = () => import(/* webpackChunkName: "about" */ '../views/TodoMain.vue')
const Workout = () => import(/* webpackChunkName: "about" */ '../components/Workout.vue')
const WorkoutUser = () => import(/* webpackChunkName: "about" */ '../components/WorkoutUser.vue')
const UserEdit = () => import(/* webpackChunkName: "about" */ '../components/UserEdit.vue')

const Temp = () => import(/* webpackChunkName: "about" */ '../components/Temp.vue')
const Temp2 = () => import(/* webpackChunkName: "about" */ '../components/Temp2.vue')
const Users = () => import(/* webpackChunkName: "about" */ '../views/Users.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path:'/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path:'/workout',
    name: 'Workout',
    component :  Workout,
    // 하위 경로 만들기
    children:[
      {
        path: ':id',
        name: 'user_id',
        component: WorkoutUser
      },
      {
        path: ':id/edit',
        name: 'user-edit',
        component: UserEdit
        
      }
    ]
  },
  {
    path:'/temp',
    name:'Temp',
    component: Temp,
    children:[
      {
        path: ':id',
        name: "temp2",
        component: Temp2
      },
      {
        path: ':id/edit',
        name: 'tempEdit',
        component: UserEdit
      }
    ]
      
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
