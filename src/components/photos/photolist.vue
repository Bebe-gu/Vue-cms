<template>
    <div style="min-height: calc(100%+1px);">
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
import {titielist,titleimglist} from '../../lib/data/photoListData.js'
export default {
    data() {
            return {
                //模拟数据
                id: '',
                imglist: [],
                titielist,
                titleimglist
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
