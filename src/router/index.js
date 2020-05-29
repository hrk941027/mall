import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

const Login = () => import('views/login/Login')


// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },

]

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})


//路由导航守卫（）
router.beforeEach((to,from,next)  =>{
  // to 将要访问的路径
  //from 代表从哪个路径跳转而来
  //next是一个函数   next()   next("/login")强制跳转

  //1.首先判断用户访问的是不是登录页，如果访问的是登录页，就直接放行，如果没有被return出去就不是登录页,那么说明是一个有权限的页面，那么就要拿到用户的token，根据是否有token再发生强制跳转
  if(to.path === '/login') return next(); 
  //2.获取token
  const tokenStr = window.sessionStorage.getItem('token')
  //如果不存在token值，就强制跳转登录页
  if(!tokenStr) return next('/login') 

  next()
})


// 4.导出
export default router
