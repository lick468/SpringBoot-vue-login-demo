import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import index from '@/components/index/index'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  //路由模式
  // hash     默认          路径带 # 符号              如 http://localhost:8080/#/login
  // history  需要手动设置   路径不带 # 符号            如 http://localhost:8080/login
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/index',
      name : 'index',
      component : index
    },
    {
      path:'/login',
      name : 'login',
      component : login
    }
  ]
})
