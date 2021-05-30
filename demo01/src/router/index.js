import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import home from "@/views/index.vue"
import project from "@/views/project.vue"
import life from "@/views/life.vue"

Vue.use(VueRouter)

const routes = [
  {
    name:"home",
    path:"/",
    component:home
  },
  {
    name: "project",
    path: '/project',
    component: () => import("@/views/project.vue")
  },
  {
    name: "life",
    path: '/life',
    component: () => import("@/views/life.vue")
  },
  {
    name:"message",
    path:"/message",
    component:() => import("@/views/message.vue")
  },
  {
    name:"test",
    path:"/test",
    component:() => import("@/views/test.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
