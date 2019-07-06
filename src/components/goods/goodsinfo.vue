<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in getsliderImg" :key="item.id">
                <img :src="item.pic_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 商品标题 -->
        <p class="title" v-for="list in getListById" :key="list.id">{{list.title}}</p>
        <!-- 客户自选参数 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <div class="choose">
                    <span>已选</span>
                    <span>900P人气性价比,1个</span>
                </div>
                <div><span class="text">本商品支持保障服务，点击可选服务</span></div>
                <span class="icon"></span>
            </li>
            <li class="mui-table-view-cell">
                <div class="sendAddress">
                    <span>送至</span>
                    <span>北京朝阳区三环到四环之间</span>
                    <p class="time"><span><small><span class="nowgoods">现货</span>23:10前下单，预计明天(07月07日)送达
                        </small>
                        </span>
                    </p>
                    <span>运费</span>
                    <span>包邮</span>
                </div>
                <span class="icon"></span>
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
        </div>
        <!-- 购物车购买 -->
        <ul class="cart">
            <li><a href="" class="chat"><i class="mui-icon mui-icon-chat"></i><span class="mui-tab-label">联系客服</span></a></li>
            <li><a href="" class="inshop"><i class="mui-icon mui-icon-extra mui-icon-extra-computer"></i><span class="mui-tab-label">进店</span></a></li>
            <li><a href="" class="incart">加入购物车</a></li>
            <li><a href="" class="skill">立即秒杀</a></li>
        </ul>
    </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                list: [],
                id: this.$route.params.id,
                datalist: [{
                        id: 1,
                        title: "美的（Midea）电压力锅5升双胆电高压锅 一键排气 七段调压 开盖收汁 WQC50A5",
                        img_url: "./img/pic1.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }, {
                            id: 3,
                            picName: 'pic1-slider-3.jpg',
                            pic_url: './img/pic1-slider-3.jpg'
                        }, {
                            id: 4,
                            picName: 'pic1-slider-4.jpg',
                            pic_url: './img/pic1-slider-4.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 289,
                        now_price: 199
                    },

                    {
                        id: 2,
                        title: "【音箱加湿器套装版】OPPO K1 光感屏幕指纹 水滴屏拍照手机 6G+64G 墨玉黑 全网通 移动联通电信4G 双卡双待手机",
                        img_url: "./img/pic2.jpg ",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 1399,
                        now_price: 1199
                    },

                    {
                        id: 3,
                        title: "微星(msi)GF75 17.3英寸轻薄游戏笔记本电脑(九代i7-9750H 8G 512G NVMe SSDGTX1650",
                        img_url: "./img/pic3.jpg ",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 8199,
                        now_price: 7599
                    },

                    {
                        id: 4,
                        title: "小米生态链素士电吹风机家用吹风机恒温负离子大功率发廊速干护发巧小米红吹风筒H3S红色（2代）",
                        img_url: "./img/pic4.jpg ",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 259,
                        now_price: 219
                    },

                    {
                        id: 5,
                        title: "华为充电宝/移动电源 SuperCharge 22.5w 4.5V5A快充版 曜石黑 适用于华为Mate20/P30系列等手机",
                        img_url: "./img/pic5.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 269,
                        now_price: 119
                    }, {
                        id: 6,
                        title: "美的（Midea）移动空调1.5匹 家用厨房空调冷暖一体机便携立式免排水免安装 KYR-35/N1Y-PD2",
                        img_url: "./img/pic6.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 2789,
                        now_price: 2399
                    }, {
                        id: 7,
                        title: "华为（HUAWEI）路由器Q2 Pro分布式子母路由/全千兆/自研凌霄芯片/5G双频智能 1母1子【适用于3-4房的平层】",
                        img_url: "./img/pic7.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 899,
                        now_price: 699
                    }, {
                        id: 8,
                        title: "Apple Mini DisplayPort 转 VGA 转换器",
                        img_url: "./img/pic8.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 289,
                        now_price: 199
                    }, {
                        id: 9,
                        title: "2019新品科沃斯Ecovacs 扫地机器人T5 Fun全自动扫拖一体智能家用吸尘器激光导航规划T5 智慧扫拖 革新升级5",
                        img_url: "./img/pic9.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 289,
                        now_price: 199
                    }, {
                        id: 10,
                        title: "TCL 55A860U 55英寸32核人工智能 AI超智慧 7.9mm超薄4K超高清液晶电视机 自营家电（银色）",
                        img_url: "./img/pic10.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 2368,
                        now_price: 2999
                    }, {
                        id: 11,
                        title: "乐尔康全自动按摩椅家用多功能零重力太空舱SL轨迹全身揉捏推拿电动按摩沙发 金色音乐款",
                        img_url: "./img/pic11.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 4180,
                        now_price: 2530
                    }, {
                        id: 12,
                        title: "联想(Lenovo)小新Air英特尔酷睿i5 13.3英寸超轻薄笔记本电脑(I5-8265U 8G 512G SSD MX25",
                        img_url: "./img/pic12.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: './img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: './img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: './img/pic1-info.jpg'
                        },
                        old_price: 5799,
                        now_price: 5299
                    }
                ]
            }
        },
        created() {
            console.log(this.getInfoImg.pic_url);
        },
        methods: {

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
        }
}
</script>
<style lang="scss" scoped>


.mui-table-view-cell {
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
        img {
            width: 100%;
            height: 100%;
            //background-size: cover;
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
    margin-top: 5px;
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
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
    }
}

.cart {
    position: relative;
    margin: 0;
    padding: 0;
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
