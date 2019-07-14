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
                    <p><span class="new_price"><small>¥</small>{{item.now_price}}</span>&#12288;
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
import datalist from '../../lib/data/goodsListData.js'
export default {
    data() {
            return {
                datalist
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
