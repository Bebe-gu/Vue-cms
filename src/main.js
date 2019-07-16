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

import Vuex from 'vuex'
Vue.use(Vuex)

//获取本地存储的购物车数据
var cart = JSON.parse(localStorage.getItem('cart') || '[]');
var checkAllStatus = JSON.parse(localStorage.getItem('checkAllStatus') || 'true');
//Vuex实例
var store = new Vuex.Store({
    state: { //this.$store.state.xxx
        cart: cart,
        checkAllStatus: checkAllStatus
    },
    mutations: { //this.$store.commit('function',xx)
        addToCart(state, goodsinfo) { //点击加入购物车,保存商品信息
                var flag = false; //假设没有新加入的商品
                state.cart.some(item => {
                    if (item.id == goodsinfo.id) {
                        item.count += parseInt(goodsinfo.count);
                        flag = true;
                        return true;
                    }
                })
                if (!flag) { //添加到购物车
                    state.cart.push(goodsinfo);
                }
                //保存到本地存储
                localStorage.setItem('cart', JSON.stringify(state.cart));
            },
            updateGoodsInfo(state, goodsinfo) { //修改购物车商品数量值
                state.cart.some(item => {
                        if (item.id == goodsinfo.id) {
                            item.count = parseInt(goodsinfo.count);
                            return true;
                        }
                    })
                    //保存最近修改的购物车数据
                localStorage.setItem('cart', JSON.stringify(state.cart));
            },
            deleteStoreCart(state, id) {
                state.cart.some((item, index) => {
                        if (item.id == id) {
                            state.cart.splice(index, 1);
                        }
                    })
                    //保存到本地存储
                localStorage.setItem('cart', JSON.stringify(state.cart));
            },
            //更新选中状态
            updateGoodsChecked(state, info) {
                state.cart.some(item => {
                    if (item.id == info.id) {
                        item.checked = info.checked;
                    }
                })
                localStorage.setItem('cart', JSON.stringify(state.cart));
            },
            //全选/反选切换
            updateGettersGoodsChecked(state, boolean) {
                state.cart.forEach(item => {
                    item.checked = boolean;
                   // console.log('----' + item.checked);

                });
                state.checkAllStatus.status = boolean;


                // state.checkAllStatus = boolean;
                localStorage.setItem('checkAllStatus', JSON.stringify(state.checkAllStatus));

                localStorage.setItem('cart', JSON.stringify(state.cart));
            },

    },
    getters: { //this.$store.getters.xxx
        //获取购物车总数量
        getAllCount(state) {
                var sum = 0;
                state.cart.forEach(item => {
                    sum += item.count;
                })
                return sum;
            },
            //获取购物车的选择状态
            getGoodsChecked(state) {
                var temp = {}
                state.cart.forEach(item => {
                    temp[item.id] = item.checked;
                })

                return temp;
            },
            //获取选中数量和计算商品价格
            getGoodsSumAndTotal(state) {
                var temp = {
                    sum: 0,
                    total: 0
                }
                state.cart.forEach(item => {
                    if (item.checked) {
                        temp.sum += item.count;
                        temp.total += (item.price * 100) * temp.sum / 100;
                    }
                })
                return temp;
            }

    }
})


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
    router,
    store
})
