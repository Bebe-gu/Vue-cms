import Vue from 'vue'
    //引入路由模块
import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcart from './components/tabbar/shopcart.vue'
import search from './components/tabbar/search.vue'



var router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: home
    }, {
        path: '/member',
        component: member
    }, {
        path: '/shopcart',
        component: shopcart
    }, {
        path: '/search',
        component: search
    }],
    linkActiveClass: 'mui-active'
})

//把路由对象暴露出去

export default router
