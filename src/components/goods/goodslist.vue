<template>
    <div>
        <ul class="list_content mui-clearfix">
            <li v-for="item in datalist" :key="item.id">
                <router-link class="list_box" :to="'/home/goodsinfo/'+item.id">
                    <div>
                        <span class="hot"></span>
                        <a href="#"><img :src="item.img_url"></a>
                    </div>
                    <p class="title">{{item.title}}</p>
                    <p><span class="new_price">¥{{item.now_price}}</span>&#12288;
                        <span>¥<del>{{item.old_price}}</del></span>
                    </p>
                    <small class="count">库存：{{item.count}}件</small>
                </router-link>
            </li>
        </ul>
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
                datalist: [{
                        id: 1,
                        title: "美的（Midea）电压力锅5升双胆电高压锅 一键排气 七段调压 开盖收汁 WQC50A5",
                        img_url: "/img/pic1.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 289,
                        now_price: 199,
                        count:100
                    },

                    {
                        id: 2,
                        title: "【音箱加湿器套装版】OPPO K1 光感屏幕指纹 水滴屏拍照手机 6G+64G 墨玉黑 全网通 移动联通电信4G 双卡双待手机",
                        img_url: "/img/pic2.jpg ",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 1399,
                        now_price: 1199,
                        count:88
                    },

                    {
                        id: 3,
                        title: "微星(msi)GF75 17.3英寸轻薄游戏笔记本电脑(九代i7-9750H 8G 512G NVMe SSDGTX1650",
                        img_url: "/img/pic3.jpg ",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 8199,
                        now_price: 7599,
                        count:28
                    },

                    {
                        id: 4,
                        title: "小米生态链素士电吹风机家用吹风机恒温负离子大功率发廊速干护发巧小米红吹风筒H3S红色（2代）",
                        img_url: "/img/pic4.jpg ",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 259,
                        now_price: 219,
                        count:201
                    },                  {
                        id: 5,
                        title: "华为充电宝/移动电源 SuperCharge 22.5w 4.5V5A快充版 曜石黑 适用于华为Mate20/P30系列等手机",
                        img_url: "/img/pic5.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 269,
                        now_price: 119,
                        count:109
                    }, {
                        id: 6,
                        title: "美的（Midea）移动空调1.5匹 家用厨房空调冷暖一体机便携立式免排水免安装 KYR-35/N1Y-PD2",
                        img_url: "/img/pic6.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 2789,
                        now_price: 2399,
                        count:107
                    }, {
                        id: 7,
                        title: "华为（HUAWEI）路由器Q2 Pro分布式子母路由/全千兆/自研凌霄芯片/5G双频智能 1母1子【适用于3-4房的平层】",
                        img_url: "/img/pic7.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 899,
                        now_price: 699,
                        count:190
                    }, {
                        id: 8,
                        title: "Apple Mini DisplayPort 转 VGA 转换器",
                        img_url: "/img/pic8.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 289,
                        now_price: 199,
                        count:1000
                    }, {
                        id: 9,
                        title: "2019新品科沃斯Ecovacs 扫地机器人T5 Fun全自动扫拖一体智能家用吸尘器激光导航规划T5 智慧扫拖 革新升级5",
                        img_url: "/img/pic9.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 289,
                        now_price: 199,
                        count:70
                    }, {
                        id: 10,
                        title: "TCL 55A860U 55英寸32核人工智能 AI超智慧 7.9mm超薄4K超高清液晶电视机 自营家电（银色）",
                        img_url: "/img/pic10.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 2368,
                        now_price: 2999,
                        count:1000
                    }, {
                        id: 11,
                        title: "乐尔康全自动按摩椅家用多功能零重力太空舱SL轨迹全身揉捏推拿电动按摩沙发 金色音乐款",
                        img_url: "/img/pic11.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 4180,
                        now_price: 2530,
                        count:1001
                    }, {
                        id: 12,
                        title: "联想(Lenovo)小新Air英特尔酷睿i5 13.3英寸超轻薄笔记本电脑(I5-8265U 8G 512G SSD MX25",
                        img_url: "/img/pic12.jpg",
                        sliderImg: [{
                            id: 1,
                            picName: 'pic1-slider-1.jpg',
                            pic_url: '/img/pic1-slider-1.jpg'
                        }, {
                            id: 2,
                            picName: 'pic1-slider-2.jpg',
                            pic_url: '/img/pic1-slider-2.jpg'
                        }],
                        infoImg: {
                            id: 1,
                            picName: 'pic1-info',
                            pic_url: '/img/pic1-info.jpg'
                        },
                        old_price: 5799,
                        now_price: 5299,
                        count:98
                    }
                ]
            }
        },
        // created: {
        //     //this.getList();
        // },
        methods: {
            //获取后台数据
            // getList() {
            // this.$http.get('').then(result => {
            //     console.log(result);
            //     if (result.body.status===0) {
            //      this.datalist=result;
            //     }else{
            //      Toast('获取数据失败');
            //     }
            // })
            // }
        }
}
</script>
<style lang="scss" scoped>
.list_content {
    margin: 0;
    padding: 5px;
    list-style: none;
    background-color: #fff;
    li {
        padding: 5px;
        width: 50%;
        float: left;
        list-style: none;
        .list_box {
            position: relative;
            padding: 10px;
            text-align: center;
            border: 1px solid #ccc;
            box-shadow: 0px 0px 5px #ccc;
            display: block;
            p {
                &:nth-of-type(2) {
                    margin: 0;
                }
            }
            img {
                display: block;
                width: 100%;
                height: 100%;
                padding-bottom: 5px;
            }
            .count {
                font-size: 12px;
            }
            .hot {
                position: absolute;
                right: 5px;
                bottom: 15px;
                display: block;
                background: url('../../img/hot.png') no-repeat;
                width: 32px;
                height: 32px;
            }
        }
    }
    .title {
        margin: 10px;
        font-size: 14px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .new_price {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
}
</style>
