import Vue from 'vue'
    //引入路由模块
import VueRouter from 'vue-router'
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcart from './components/tabbar/shopcart.vue'
import search from './components/tabbar/search.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'



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
    },{
        path: '/home/goodslist',
        component: goodslist
    },{
        path: '/home/goodsinfo/:id',
        component: goodsinfo
    },{
        path: '/home/photolist',
        component: photolist
    },{
        path: '/home/photoinfo/:id',
        component: photoinfo
    }],
    linkActiveClass: 'mui-active'
})

//把路由对象暴露出去

export default router
