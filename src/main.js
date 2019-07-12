import Vue from 'vue'
    //引入配置路由
import VueRouter from 'vue-router'
    //导入路由文件
Vue.use(VueRouter)

import VueResource from 'vue-resource'

Vue.use(VueResource)

//图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


Vue.http.options.emulateJSON = true;

//设置请求路径
Vue.http.options.root = 'http://xxxx.com';

//npm i moment -S 格式化时间 
import momet from 'moment'
    //定义全局时间过滤器
Vue.filter('dateFormat', function(dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(pattern);
});

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import './lib/mui/css/mui.picker.css'
import './lib/mui/css/mui.poppicker.css'

import mui from './lib/mui/js/mui.js'
import './lib/mui/js/mui.picker.js'
import './lib/mui/js/mui.poppicker.js' 

// import {
//     Header, Button, Swipe, SwipeItem,Lazyload
// }
// from 'mint-ui';

// Vue.component(Button.name, Button);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(Lazyload);

import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

import router from './router.js'
import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router

})
