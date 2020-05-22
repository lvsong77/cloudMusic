import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('views/login/Login')
const Mine = () => import('views/mine/Mine')
const Discovery = () => import('views/discovery/Discovery')
const Village = () => import('views/village/Village')
const Video = () => import('views/video/Video')
const DailySongs = () => import('views/discovery/childComps/dailySongs/DailySongs')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/discovery',
    component: Discovery,
  },
  {
    path: '/daily_songs',
    component: DailySongs
  },
  {
    path: '/village',
    component: Village
  },
  {
    path: '/video',
    component: Video
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
