import Vue from 'vue'
import app from './App.vue'
import router from './router.js'

import './lib/mui/css/mui.css'

import {
    Header, Tabbar, TabItem, Button
}
from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
