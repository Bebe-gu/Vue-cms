<template>
    <div>
        <!-- tapbar区域 -->
        <div class="mui-slider">
            <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==1?'mui-active':'']" v-for="item in titielist" :key="item.id" @click="getImgById(item.id)" :data-id="item.id">
							{{item.title}}
					</a>
                </div>
            </div>
        </div>
        <!-- 图片区域 -->
        <ul>
            <router-link v-for="item in imglist" :key="item.id" tag="li" :to="'/home/photoinfo/'+item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1>{{item.title}}</h1>
                    <p>{{item.describe}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
//npm i babel-plugin-transform-remove-strict-mode -D 取消webpack严格模式

export default {
    data() {
            return {
                //模拟数据
                id: '',
                imglist: [],
                titielist: [{
                    id: 1,
                    title: 'Ins'
                }, {
                    id: 2,
                    title: '明星范'
                }, {
                    id: 3,
                    title: '小清新'
                }, {
                    id: 4,
                    title: '职场达人'
                }, {
                    id: 5,
                    title: '卡哇伊'
                }, {
                    id: 6,
                    title: '夜店风'
                }],
                titleimglist: [{
                    id: 1,
                    img: [{
                        id: 1,
                        title: '「SENCE LA官方」Hi SENCELA花园大花破坏国潮牌男女宽松短袖T恤',
                        img_url: '../../img/t-1-1.jpg',
                        describe: '「SENCE LA官方」Hi SENCELA花园大花破坏国潮牌男女宽松短袖T恤'
                    }, {
                        id: 2,
                        title: '「SENCE LA官方」复古弹幕泰迪印花短袖宽松国潮t恤张云雷同款',
                        img_url: '../../img/t-1-2.jpg',
                        describe: '「SENCE LA官方」复古弹幕泰迪印花短袖宽松国潮t恤张云雷同款'
                    }, {
                        id: 3,
                        title: 'DECESOLO日系原创格纹撞色拼接短袖衬衫男夏季方领亚麻复古五分袖',
                        img_url: '../../img/t-1-3.gif',
                        describe: 'DECESOLO日系原创格纹撞色拼接短袖衬衫男夏季方领亚麻复古五分袖'
                    }, {
                        id: 4,
                        title: 'DECESOLO日系复古抽绳飘带五分袖男原创黑色翻领短袖衬衫oversize',
                        img_url: '../../img/t-1-4.gif',
                        describe: 'DECESOLO日系复古抽绳飘带五分袖男原创黑色翻领短袖衬衫oversize'
                    }, {
                        id: 5,
                        title: 'DECESOLO日系复古格子古巴领短袖衬衫男原创潮牌薄款宽松半袖衬衣',
                        img_url: '../../img/t-1-5.gif',
                        describe: 'DECESOLO日系复古格子古巴领短袖衬衫男原创潮牌薄款宽松半袖衬衣'
                    }, {
                        id: 6,
                        title: 'DECESOLO黑色拼接翻领复古破坏毛边夹克男士薄款纯棉灯芯绒短外套',
                        img_url: '../../img/t-1-6.gif',
                        describe: 'DECESOLO黑色拼接翻领复古破坏毛边夹克男士薄款纯棉灯芯绒短外套'
                    }, {
                        id: 7,
                        title: '「SENCE LA官方」复古水洗做旧破洞直筒宽松牛仔裤国潮牌老爹裤女',
                        img_url: '../../img/t-1-7.jpg',
                        describe: '「SENCE LA官方」复古水洗做旧破洞直筒宽松牛仔裤国潮牌老爹裤女'
                    }, {
                        id: 8,
                        title: '「SENCE LA官方」Hi SENCELA花园小花短袖国潮牌印花男女T恤宽松',
                        img_url: '../../img/t-1-8.gif',
                        describe: '「SENCE LA官方」Hi SENCELA花园小花短袖国潮牌印花男女T恤宽松'
                    }]
                }, {
                    id: 2,
                    img: [{
                        id: 1,
                        title: '「SENCE LA官方」Hi SENCELA花园大花破坏国潮牌男女宽松短袖T恤',
                        img_url: '../../img/t-2-1.jpg',
                        describe: '「SENCE LA官方」Hi SENCELA花园大花破坏国潮牌男女宽松短袖T恤'
                    }, {
                        id: 2,
                        title: '「SENCE LA官方」复古弹幕泰迪印花短袖宽松国潮t恤张云雷同款',
                        img_url: '../../img/t-2-2.jpg',
                        describe: '「SENCE LA官方」复古弹幕泰迪印花短袖宽松国潮t恤张云雷同款'
                    }, {
                        id: 3,
                        title: 'DECESOLO日系原创格纹撞色拼接短袖衬衫男夏季方领亚麻复古五分袖',
                        img_url: '../../img/t-2-3.jpg',
                        describe: 'DECESOLO日系原创格纹撞色拼接短袖衬衫男夏季方领亚麻复古五分袖'
                    }, {
                        id: 4,
                        title: 'DECESOLO日系复古抽绳飘带五分袖男原创黑色翻领短袖衬衫oversize',
                        img_url: '../../img/t-2-4.jpg',
                        describe: 'DECESOLO日系复古抽绳飘带五分袖男原创黑色翻领短袖衬衫oversize'
                    }, {
                        id: 5,
                        title: 'DECESOLO日系复古格子古巴领短袖衬衫男原创潮牌薄款宽松半袖衬衣',
                        img_url: '../../img/t-2-5.jpg',
                        describe: 'DECESOLO日系复古格子古巴领短袖衬衫男原创潮牌薄款宽松半袖衬衣'
                    }, {
                        id: 6,
                        title: 'DECESOLO黑色拼接翻领复古破坏毛边夹克男士薄款纯棉灯芯绒短外套',
                        img_url: '../../img/t-2-6.jpg',
                        describe: 'DECESOLO黑色拼接翻领复古破坏毛边夹克男士薄款纯棉灯芯绒短外套'
                    }, {
                        id: 7,
                        title: '「SENCE LA官方」复古水洗做旧破洞直筒宽松牛仔裤国潮牌老爹裤女',
                        img_url: '../../img/t-2-7.jpg',
                        describe: '「SENCE LA官方」复古水洗做旧破洞直筒宽松牛仔裤国潮牌老爹裤女'
                    }, {
                        id: 8,
                        title: '「SENCE LA官方」Hi SENCELA花园小花短袖国潮牌印花男女T恤宽松',
                        img_url: '../../img/t-2-8.jpg',
                        describe: '「SENCE LA官方」Hi SENCELA花园小花短袖国潮牌印花男女T恤宽松'
                    }]
                }]
            }
        },
        methods: {
            //后台tap栏数据获取方法在这填写
            // this.$http.get('api/getTitleCategory').then(result => {
            //     console.log(result);
            // });
            getImgById(id) {
                var list = this.titleimglist.filter(item => item.id == id)
                for (var i = 0; i < list.length; i++) {
                    this.imglist = list[i].img;
                }
            }
        },
        computed: {
        },
        created() {
            //此处调用获取title的方法

            //此处调用获取title对应图片的方法
            this.getImgById(1);

        },
        mounted() { //vue托管页面加载完毕后的钩子函数
            mui.init();
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
                bounce: true //是否启用回弹
            });

        }
}
</script>
<style lang="scss" scoped>
* {
    touch-action: pan-y;
}

.mui-slider {
    background-color: #fff;
    //box-shadow: 1px 0 1px #eee;
}

ul,
li {
    position: relative;
    background-color: #fff;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: left;
    padding: 5px;
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .info {
        padding: 10px;
        position: absolute;
        bottom: 5px;
        margin-right: 5px;
        background-color: rgba(0, 0, 0, 0.2);
        color: #fff;
        h1 {
            font-size: 14px;
            margin: 0;
            padding: 2px;
        }
        p {
            font-size: 12px;
            color: #fff;
            margin: 0;
        }
    }
}

img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    box-shadow: 2px 0 5px #eee;
}
</style>
