import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
const Login = () =>import('../views/Login.vue')
const Home = () =>import('../views/Home.vue')
const Welcome = () =>import('../components/Welcome.vue')
const Users = () => import('../components/user/Users.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home,
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        component:Welcome
      },
      {
        path:'/users'
        ,component:Users
      }

    ]
  }
]

const router = new VueRouter({
  routes
})


// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{ 
  if(to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token') 
  if(!tokenStr) return next('/login')
  next()
})

export default router
