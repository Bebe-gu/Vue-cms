<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id"><img :src="item.url" alt=""></mt-swipe-item>
        </mt-swipe>
        <!-- 分类列表 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="/img/menu1.png" alt="">
                    <div class="mui-media-body">家电数码</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href="#">
                    <img src="/img/menu2.png" alt="">
                    <div class="mui-media-body">手机充值</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href="#">
                    <img src="/img/menu3.png" alt="">
                    <div class="mui-media-body">蔬果配送</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href="#">
                    <img src="/img/menu4.png" alt="">
                    <div class="mui-media-body">实惠超市</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="/img/menu5.png" alt="">
                    <div class="mui-media-body">潮装搭配</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href="#">
                    <img src="/img/menu6.png" alt="">
                    <div class="mui-media-body">拼团限购</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href="#">
                    <img src="/img/menu7.png" alt="">
                    <div class="mui-media-body">拍拍二手</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <a href="#">
                    <img src="/img/menu8.png" alt="">
                    <div class="mui-media-body">美容美妆</div>
                </a>
            </li>
        </ul>
        <!-- 中间轮播 -->
        <mt-swipe :auto="3000" :show-indicators="false" class="middle-swipe">
            <mt-swipe-item><img src="/img/10banner-620X1501.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="/img/lppz600-150.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
        <!-- 推荐商品 -->
        <section class="floor mui-clearfix">
            <h2>
         <a class="title">推荐商品</a>
         <a href="" class="more" dd_name="更多">更多</a>
             </h2>
            <a href="" dd_name=""><img class="" src="/img/DHC-h51.jpg"></a>
            <a href=""><img class="" src="/img/liangpinpuzih53.jpg"></a>
            <a href=""><img class="" src="/img/doujiangjih52.jpg"></a>
        </section>
        <!-- 优惠商品 -->
        <section class="floor mui-clearfix">
            <h2>
         <a class="title">优惠商品</a>
         <a href="" class="more" dd_name="更多">更多</a>
             </h2>
            <a href="" dd_name=""><img class="" src="../../img/h5-k1-1008-nbewxj2015.jpg"></a>
            <a href=""><img class="" src="/img/h5-k3-1008-xsqxk.jpg"></a>
            <a href=""><img class="" src="/img/h5-k2-1008-slbdmj.jpg"></a>
        </section>
    </div>
</template>
<script>
import {
    Toast
}
from 'mint-ui'

export default {
    data() {
            return {
                //轮播图模拟数据
                lunbotuList: [{
                        id: 1,
                        url: '/img/banner1.jpg'
                    }, {
                        id: 2,
                        url: '/img/banner2.jpg'
                    }, {
                        id: 3,
                        url: '/img/banner3.jpg'
                    }, {
                        id: 4,
                        url: '/img/banner4.jpg'
                    }, {
                        id: 5,
                        url: '/img/banner5.jpg'
                    }, {
                        id: 6,
                        url: '/img/banner6.jpg'
                    }

                ]
            }
        },
        // created() {
        //     this.getLunbo();
        // },
        methods: {
            //后台获取
            // getLunbo() {

                // this.$http.get('api/getlunbo').then(result => {
                //     console.log(result);
                //     // if (result.body.status === 0) {
                //     //     this.lunbotuList = result.body.message
                //     //     Toast('加载轮播图数据OK');
                //     // } else {
                //     //     Toast('加载轮播图数据失败');
                //     // }
                // });
            // }
        }
}
</script>
<style lang="scss" scoped>
.middle-swipe {
    width: 100% !important;
    height: 97px !important;
    padding: 0px 5px 0 5px;
}

.floor {
    display: block;
    padding: 5px 5px 0 5px;
    h2 {
        margin: 0;
        padding: 0 10px;
        line-height: 44px;
        height: 44px;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #eee;
        font-size: 18px;
        .title {
            color: #000;
        }
        .more {
            font-size: 16px;
            color: #fe435d;
            text-align: right;
        }
    }
    a {
        float: left;
        display: block;
        width: 50%;
        height: 100%;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
        &:nth-child(3) {
            border-left: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }
        &:nth-child(4) {
            border-left: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }
    }
}

.mui-table-view.mui-grid-view {
    width: none;
    margin-bottom: 5px; 
    background-color: #fff;
    overflow: hidden;
    .mui-table-view-cell {
        .mui-media-body {
            font-size: 14px;
        }
        border: none;
        padding: 0;
        img {
            width: 47px;
            height: 47px;
        }
    }
}

.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        img {
            width: 100%;
            height: 100%;
            background-size: cover;
        }
    }
}
</style>
