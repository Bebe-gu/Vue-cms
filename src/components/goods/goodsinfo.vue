<template>
    <div style="margin-bottom: 50px;min-height: calc(100%+1px);">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in getsliderImg" :key="item.id">
                <div class="img-box">
                    <img :src="item.pic_url" alt="">
                </div>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 商品标题 -->
        <p class="title">{{getListById[0].title}}</p>
        <!-- 客户自选参数 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <div class="title-price"> <small>¥</small>{{getListById[0].now_price}} <span class="icon-text">专属优惠</span>
                </div>
                <span class="old-price">价格：<del>¥{{getListById[0].old_price}}</del></span>
                <div class="choose">
                    <span>已选</span>
                    <span>数量：{{num}}个</span>
                </div>
                <div><span class="text">本商品支持保障服务，点击可选服务</span></div>
                <span class="icon" @click="popupVisible=true"></span>
            </li>
            <!-- 地址选择 -->
            <li class="mui-table-view-cell">
                <div class="sendAddress">
                    <span>送至</span>
                    <span id='address'>{{address}}</span>
                    <p class="time"><span><small><span class="nowgoods">现货</span>23:10前下单，预计明天(07月07日)送达
                        </small>
                        </span>
                    </p>
                    <span>运费</span>
                    <span>包邮</span>
                </div>
                <!-- picker -->
                <span class="icon" @click="showCityPicker"></span>
            </li>
        </ul>
        <!-- 商品详情页 -->
        <div class="subtitle">
            <h3>"下单立减100 活动加送蓝牙耳机+手环+抽大奖"</h3>
        </div>
        <div class="detail">
            <div class="detail_title">
                <h3>商品详情</h3>
            </div>
            <img :src="getInfoImg.pic_url" alt="">
            <!-- <p class="more">加载更多</p> -->
        </div>
        <!-- 购物车购买 -->
        <ul class="cart mui-clearfix" ref="cart">
            <li><a href="" class="chat"><i class="mui-icon mui-icon-chat"></i><span class="mui-tab-label">联系客服</span></a></li>
            <li><a href="" class="inshop"><i class="mui-icon mui-icon-extra mui-icon-extra-computer"></i><span class="mui-tab-label">进店</span></a></li>
            <li><a class="incart" @click="popupVisible=true">加入购物车</a></li>
            <li><a class="skill">立即购买</a></li>
        </ul>
        <!-- 商品规格参数选择  数量-->
        <mt-popup v-model="popupVisible" position="bottom" style="width: 100%;" :lockScroll='true'>
            <div class="popup overlayer" @scroll.prevent @touchmove.prevent>
                <div class="items mui-clearfix">
                    <div class="header ">
                        <div class="img-wrap">
                            <!-- 此处修改了vue-preview 源文件css依赖photoswipe中的z-index值 大于popup的z-index -->
                            <img class="preview-img" v-for="(item, index) in getListById[0].img_url" :src="item.src" height="100" @click="$preview.open(index, getListById[0].img_url)" :key="item.src">
                        </div>
                        <div class="main">
                            <div class="price-wrap"><span class="price">  ¥{{getListById[0].now_price}} </span> </div>
                            <div class="stock">库存 {{getListById[0].count}} 件</div>
                            <div class="sku-info"> 请选择: <span>颜色分类</span> </div>
                        </div>
                        <a class="sku-close" @click="popupVisible=false">x</a>
                    </div>
                    <div class="body">
                        <div class="number-wrap">
                            <div class="number-line">
                                <label for="number">购买数量</label><span class="J_limitTxt limit-txt"></span>
                                <numbox @getnum="getselectnum" :maxnum="defaultCount"></numbox>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer"><a @click="addToShopCart">加入购物车</a><a @click="popupVisible=false">立刻购买</a>
                </div>
            </div>
        </mt-popup>
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <span class="add_num" ref="popone" id="popone" v-show="flag">+{{num}}</span>
        </transition>
    </div>
</template>
<script>
import {
    Toast
}
from 'mint-ui';
import numbox from '../subcomponents/numbox.vue'
    //import pickercity from '../../components/subcomponents/pickercity.vue'
import cityData from '../../lib/data/mui-city.js'
import datalist from '../../lib/data/goodsInfoData.js'
export default {
    data() {
            return {
                cartbottom: '',
                num: 1,
                defaultCount: 0,
                popupVisible: false,
                list: [],
                id: this.$route.params.id,
                msrc: '',
                badgePositionLeft: 0,
                popupVisible: false,
                flag: false,
                address: '北京朝阳区三环到四环之间',
                cityData,
                datalist,
                poponetop: 0
            }
        },
        created() {
            //小图
            this.msrc = this.getListById[0].img_url[0].msrc;
            this.defaultCount = this.getListById[0].count;
            //this.inputMoneyListern(event);
            //console.log(this.defaultCount);
            //console.log(this.getListById[0]);
        },
        mounted() {
            //页面加载完毕后动态设置popone+1的距离和徽标一致
            //解决购物车动画不同尺寸位置错误问题
            this.$nextTick(function() {
                //徽标左边距离
                var badgeleft = document.getElementById('badge').getBoundingClientRect().left;
                var badgetop = document.getElementById('badge').getBoundingClientRect().top;
                //将徽标左距离赋给popone+1的左距离
                var poponetop = document.getElementById('popone').style.top;
                this.poponetop = poponetop;
                document.getElementById('popone').style.left = badgeleft + "px";
                document.getElementById('popone').style.top = badgetop + "px";
                //console.log('徽标:' + badgeleft + '---数字：' + poponeLeft);
                console.log(badgetop);
            });
        },
        methods: {
            //可用ajxa从后台接口获取数据
            //显示城市选择
            showCityPicker() {
                    var adressStr = '';
                    var _getParam = function(obj, param) {
                        return obj[param] || '';
                    };
                    var picker = new mui.PopPicker({
                        layer: 3
                    });
                    picker.setData(this.cityData);
                    picker.show(function(selectItems) {
                        document.getElementById('address').innerText = _getParam(selectItems[0], 'text') + " " + _getParam(selectItems[1], 'text') + " " + _getParam(selectItems[2], 'text');
                        //返回 false 可以阻止选择框的关闭
                    });
                    //15s后销毁picker组件,防止卡顿
                    setTimeout(function() {
                        picker.dispose();
                    }, 30000)
                },
                addToShopCart() {
                    this.popupVisible = false;
                    this.flag = true;
                    //保存到store中的购物车商品信息 id 数量,价格,选中状态
                    var goodsinfo = {
                            id: this.id,
                            title: this.getListById[0].title,
                            msrc: this.msrc,
                            count: this.num,
                            maxnum: this.getListById[0].count,
                            price: this.getListById[0].now_price,
                            checked: true
                        }
                        //调用store 加入方法
                    this.$store.commit('addToCart', goodsinfo);
                    //购物车动画
                }, beforeEnter(el) {
                    el.style.transform = "translate(0,0)";
                }, enter(el, done) {
                    el.offsetWidth;
                    el.style.transform = `translate(0,-30px)`;
                    el.style.transition = "all 2s ease";
                    Toast({
                        message: '加入购物车成功',
                        position: 'middle',
                        duration: 2000
                    });
                    done();
                }, afterEnter(el) {
                    this.flag = !this.flag;
                }, getselectnum(num) { //定义接收子组件数据的处理方法
                    //赋值给自己data num  数量选择检测
                    this.num = num;
                    if (num > this.getListById[0].count) {
                        this.num = this.defaultCount;
                        Toast({
                            message: '该商品最多购买' + this.defaultCount + '件',
                            position: 'middle',
                            duration: 3000
                        });
                    }
                }
        },
        computed: {
            getListById() {
                    return this.datalist.filter(item => item.id == this.id)
                },
                getsliderImg() {
                    var arr = [];
                    var list = this.datalist.filter(item => item.id == this.id)
                    for (var i = 0; i < list.length; i++) {
                        return arr = list[i].sliderImg;
                    }
                },
                getInfoImg() {
                    var arr = [];
                    var list = this.datalist.filter(item => item.id == this.id)
                    for (var i = 0; i < list.length; i++) {
                        return arr = list[i].infoImg;
                    }
                }
        },
        components: {
            //pickercity,
            numbox
        },
        watch: {
            'poponetop': function(val, oldVal) {
                console.log(val + '-----' + oldVal);
            }
        }
}
</script>
<style lang="scss" scoped>
.add_num {
    position: fixed;
    padding: 2px 3px;
    color: #ff0000;
    font-weight: 700;
    bottom: 30px;
    right: 130px;
    display: block;
    font-size: 18px;
    pointer-events: none;
    z-index: 30;
}

.popup {
    width: 100%;
    min-height: 375px;
    max-height: 475px;
    background-color: #fff;
    .items {
        padding: 10px;
        .header {
            padding: 10px 0 20px 126px;
            position: relative;
            .img-wrap {
                width: 100px;
                height: 100px;
                position: absolute;
                top: -28px;
                left: 10px;
                border-radius: 4px;
                overflow: hidden;
                border: 1px solid rgba(0, 0, 0, .1);
                padding: 1px;
                background-color: #fff;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .main {
                color: #051b28;
                font-size: 13px;
                line-height: 18px;
                padding-right: 20px;
                .price-wrap {
                    width: 210px;
                    .price {
                        font-family: arial;
                        font-size: 16px;
                        color: #FF0036;
                        word-wrap: break-word;
                    }
                }
            }
            .sku-close {
                position: absolute;
                top: 6px;
                right: 10px;
            }
            .popupclose {
                position: absolute;
                top: 6px;
                right: 10px;
            }
        }
        .body {
            .number-wrap {
                label {
                    padding-left: 10px;
                    color: #666;
                    font-size: 13px;
                    font-weight: 400;
                }
                .limit-txt {
                    color: #666;
                    font-size: 12px;
                }
                .number-line {
                    border-bottom: 1px solid rgba(0, 0, 0, .1);
                    border-top: 1px solid rgba(0, 0, 0, .1);
                    padding: 10px 0px;
                    line-height: 30px;
                    .number {
                        height: 36px;
                        width: 100px;
                        border-radius: 3px;
                        float: right;
                        button {
                            vertical-align: middle;
                            float: left;
                            border: none;
                            outline: 0;
                            line-height: 0px;
                            height: 34px;
                            width: 30px;
                            font-size: 24px;
                            border: 1px solid #f5f5f5;
                            background-color: #f5f5f5;
                            padding: 0;
                        }
                        input[type=number] {
                            padding: 0;
                            float: left;
                            line-height: 32px;
                            height: 34px;
                            width: 36px;
                            text-align: center;
                            font-size: 13px;
                            font-weight: 700;
                            border: 1px solid #f5f5f5;
                            background-color: #f5f5f5;
                            box-sizing: border-box;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            -o-appearance: none;
                            appearance: none;
                            margin: 0;
                            vertical-align: middle;
                        }
                        .decrease {
                            border-right: 1px solid #fff;
                        }
                        .increase {
                            border-left: 1px solid #fff;
                        }
                        .disabled {
                            color: #cfcfcf;
                        }
                    }
                }
            }
        }
    }
    .footer {
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: 0;
        text-align: center;
        a {
            float: left;
            width: 50%;
            color: #fff;
            background-color: #FF0036;
            display: block;
            line-height: 50px;
            &:nth-of-type(1) {
                background-color: #ffbc00;
            }
        }
    }
}

.mui-table-view-cell {
    padding: 10px 15px;
    .icon {
        content: "";
        position: absolute;
        right: 15px;
        top: 22px;
        width: 15px;
        height: 3px;
        background-image: url('../../img/point.png');
        background-repeat: no-repeat;
        background-size: 15px;
        background-position: 0 0;
    }
    .title-price {
        color: #ff0036;
        font-weight: bold;
        font-size: 24px;
        padding: 5px 0;
        position: relative;
        .icon-text {
            background-color: #fb6878;
            color: #FFF;
            font-size: 12px;
            padding: 0px 2px;
            position: absolute;
            margin-left: 5px;
            bottom: 8px;
            height: 18px;
        }
    }
    .old-price {
        font-size: 12px;
        color: #999;
    }
    .choose {
        span {
            &:nth-child(1) {
                font-size: 12px;
                color: #999;
            }
            &:nth-child(2) {
                padding-left: 10px;
                font-size: 14px;
                color: #333;
            }
        }
    }
    .sendAddress {
        span {
            &:nth-child(1) {
                font-size: 12px;
                color: #999;
            }
            &:nth-child(2),
            &:nth-child(5) {
                padding-left: 10px;
                font-size: 14px;
                color: #333;
            }
            &:nth-child(4) {
                font-size: 12px;
                color: #999;
            }
        }
        .time {
            padding-left: 38px;
        }
        .nowgoods {
            padding-right: 3px !important;
            font-size: 12px !important;
            color: #e4393c !important;
        }
    }
    .text {
        font-size: 12px;
        color: #999;
        padding-left: 38px;
    }
}

.mint-swipe {
    height: 370px;
    width: 100%;
    .mint-swipe-item {
        width: 100%;
        height: 100%;
        .img-box {
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
                //background-size: cover;
            }
        }
    }
}

.title {
    border-top: 1px solid #eee;
    box-shadow: 0 0 3px #eee;
    margin: 0;
    padding: 10px;
    margin-bottom: 5px;
    text-align: center;
    //font-size: 16px;
    color: #000;
    font-weight: bold;
    background-color: #fff;
}

.subtitle {
    text-align: center;
    margin-top: 4px;
    padding: 10px;
    background-color: #fff;
    font-size: 16px;
    h3 {
        font-size: 14px;
    }
}

.detail {
    background-color: #fff;
    margin-top: 5px;
    .detail_title {
        border-left: 5px solid red;
        padding: 10px;
        h3 {
            font-size: 14px;
        }
    }
    img {
        width: 100%;
        height: 100%;
        display: block;
        background-size: cover;
    }
    // .more {
    //     text-align: center;
    //    margin:0;
    // }
}

.cart {
    box-shadow: 1px 0 1px #eee;
    position: fixed;
    margin: 0;
    padding: 0;
    bottom: 50px;
    width: 100%;
    li {
        margin: 0;
        padding: 0;
        background-color: #fff;
        height: 50px;
        line-height: 50px;
        text-align: center;
        list-style: none;
        float: left;
        &:nth-of-type(4) {
            padding: 0 10px;
            background-color: #f10000;
            width: 30%;
        }
        &:nth-of-type(3) {
            padding: 0 10px;
            background-color: #ffbc00;
            width: 30%;
        }
        &:nth-of-type(2) {
            width: 20%;
        }
        &:nth-of-type(1) {
            width: 20%;
        }
        a {
            display: block;
            width: 100%;
            height: 100%;
        }
        .chat {
            position: relative;
            span {
                position: absolute;
                left: 10px;
                bottom: -10px;
            }
        }
        .inshop {
            position: relative;
            span {
                left: 22px;
                bottom: -10px;
                position: absolute;
            }
        }
        .incart {
            color: #fff;
        }
        .skill {
            color: #fff;
        }
    }
}

.mui-icon {
    position: absolute;
    left: 25px;
    top: 8px;
    font-size: 20px;
}

.mui-tab-label {
    position: absolute;
    font-size: 12px;
}
</style>
