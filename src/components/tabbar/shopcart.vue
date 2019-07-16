<template>
    <div>
        <div class="cartMain">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell" v-for="(item,index) in cart" :key="item.id">
                    <div class="mui-slider-right mui-disabled">
                        <a class="mui-btn mui-btn-red" @click="deleteCart(item.id,index)">删除</a>
                    </div>
                    <div class="mui-slider-handle">
                        <div class="cart-left">
                            <div class=" mui-checkbox">
                                <input name="checkbox" value="Item 1" type="checkbox" ref="checkbox" @change="checked(item.id,$store.getters.getGoodsChecked[item.id])" v-model="$store.getters.getGoodsChecked[item.id]">
                            </div>
                        </div>
                        <div class="cart-image">
                            <img :src="item.msrc" alt="">
                        </div>
                        <div class="cart-right">
                            <p>{{item.title}}</p>
                            <p class="maxnum">库存：<span id="maxnum">{{item.maxnum}}</span></p>
                            <p class="cart-price"><span>￥{{item.price}}</span>
                                <cartnumbox :initcount="item.count" :maxnum="item.maxnum" :goodsid="item.id" @getnum="getnum"></cartnumbox>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="cartFooter" v-if="cart.length">
            <div class="mui-input-row mui-checkbox mui-left">
                <label>全选</label>
                <input name="checkbox" value="Item 1" type="checkbox" style="left:15px !important;top:10px !important;" @change="checkAll" ref="checkAll" v-model="$store.state.checkAllStatus">
            </div>
            <div class="total">合计：<span>￥ {{$store.getters.getGoodsSumAndTotal.total}}</span></div>
            <div class="toTotal"><a>去结算<span>({{$store.getters.getGoodsSumAndTotal.sum}})件</span></a></div>
        </div>
        <div class="test">{{this.$store.getters.getGoodsChecked}}</div>
        <div>{{this.$store.state.checkAllStatus}}</div>
    </div>
</template>
<script>
import cartnumbox from '../../components/subcomponents/cartnumbox.vue'
import {
    Toast
}
from 'mint-ui';
export default {
    data() {
            return {
                cart: '',
                value: [],
                options: ['全选'],
                ischecked: 0,
                checkedSum: 0
                    //checkAllStatus: true
            }
        },
        created() {

        },
        methods: {
            //全选
            checkAll() {
                    var obj = this.$store.getters.getGoodsChecked;
                    this.ischecked = Object.values(obj);
                    this.checkedSum = Object.keys(obj).length;

                    if (this.$refs.checkAll.checked) {
                        for (var i = 0; i < this.ischecked.length; i++) {
                            this.ischecked[i] = true;
                        }
                        this.$store.commit('updateGettersGoodsChecked', true);
                    } else {
                        for (var i = 0; i < this.ischecked.length; i++) {
                            this.ischecked[i] = false;
                        }
                        this.$store.commit('updateGettersGoodsChecked', false);
                    }
                    console.log('选中状态' + this.$refs.checkAll.checked);
                },
                //单个选择
                checked(id, value) {
                    console.log(id + '------' + value);
                    if (!value) {
                        this.$store.state.checkAllStatus = false;
                        localStorage.setItem('checkAllStatus', JSON.stringify(false));
                    }
                    this.$store.commit('updateGoodsChecked', {
                        id, checked: value
                    });
                    //获取商品所有列表的checked状态
                    var obj = this.$store.getters.getGoodsChecked;
                    //将对象的checked值转换存入一个新数组
                    this.ischecked = Object.values(obj);
                    var arr = [];
                    for (let i in this.ischecked) {
                        arr.push(this.ischecked[i]);
                    }
                    //every判断数组的每一项的选中状态
                    var result=arr.every(item => {
                       return item == true;
                    })
                    //赋值给全选按钮
                    if (result) {
                         this.$store.state.checkAllStatus = true;
                    }else{
                         this.$store.state.checkAllStatus = false;
                    }
                    //本地存储状态
                    localStorage.setItem('checkAllStatus', JSON.stringify(result));

                    console.log('所有选中状态：' + result);
                    console.log(arr);

                },
                getnum(num, maxnum) { //定义接收子组件数据的处理方法
                    //赋值给自己data num  数量选择检测
                    // this.num = num;
                    if (num > maxnum) {
                        this.num = maxnum;
                        Toast({
                            message: '该商品最多购买' + maxnum + '件',
                            position: 'middle',
                            duration: 3000
                        });
                    }
                },
                //删除购物车数据store和cart本地数据
                deleteCart(id, index) {
                    this.cart.splice(index, 1);
                    this.$store.commit('deleteStoreCart', id);
                }
        },
        computed: {

        },
        components: {
            cartnumbox
        },
        mounted() {
            //页面加载完毕获取本地存储的cart数据
            this.$nextTick(function() {
                var cart = JSON.parse(localStorage.getItem('cart') || '[]');
                this.cart = cart;
                // var checkAllStatus = JSON.parse(localStorage.getItem('checkAllStatus') || '[]');
                // this.checkAllStatus = checkAllStatus;
                //console.log(this.cart);
            });

        },
        watch: {

        }
}
</script>
<style lang="scss" scoped>
.cartMain {
    margin-bottom: 50px;
    .mint-checklist-title {
        margin: 0 !important;
    }
    .mui-slider-handle {
        display: flex;
        width: 100%;
        .cart-left {
            display: flex;
            flex-direction: column-reverse;
            align-self: center;
            width: 10%;
            position: relative;
            .mui-checkbox input[type='checkbox'] {
                position: static;
                display: inline-block;
                width: 28px;
                height: 26px;
                border: 0;
                outline: 0 !important;
                background-color: transparent;
                -webkit-appearance: none;
            }
        }
        .cart-image {
            display: flex;
            flex-direction: column-reverse;
            align-self: center;
            padding: 0 5px;
            width: 20%;
            img {
                vertical-align: middle;
                width: 100%;
            }
        }
        .cart-right {
            padding: 0 5px;
            width: 70%;
            .maxnum {
                padding-top: 5px;
                font-size: 12px;
            }
            .cart-price {
                padding-top: 5px;
                height: 30px;
                line-height: 30px;
                span {
                    font-weight: bold;
                    color: #ff0000;
                }
            }
        }
    }
}

.cartFooter {
    position: fixed;
    width: 100%;
    bottom: 50px;
    height: 50px;
    left: 0;
    line-height: 50px;
    font-size: 14px;
    display: flex;
    background-color: #fff;
    box-shadow: 1px 0 1px #eee;
    label {
        font-size: 16px;
        padding-right: 10px;
    }
    .total {
        span {
            color: #ff0000;
            font-weight: bold;
        }
    }
    .toTotal {
        position: absolute;
        right: 0;
        a {
            color: #fff;
            padding: 0 10px;
            display: block;
            width: 100%;
            font-size: 16px;
            background-color: #ff5500;
        }
        span {
            font-size: 14px;
        }
    }
}
</style>
