import Vue from 'vue'
    //引入配置路由
import VueRouter from 'vue-router'
    //导入路由文件
Vue.use(VueRouter)

import VueResource from 'vue-resource'

Vue.use(VueResource)
// Vue.http.options.emulateJSON = true


import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import {
    Header, Button,Swipe, SwipeItem
}
from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from './router.js'
import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
     router

})
