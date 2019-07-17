<template>
    <div class="app-container">
        <!-- header 区域 -->
        <header class="mui-bar mui-bar-nav">
            <span class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack" v-show="flag"></span>
            <h1 class="mui-title">Vue商城</h1>
        </header>
        <!-- router-view区域 -->
        <transition>
            <router-view></router-view>
        </transition>
        <!-- tabbar区域 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-vue" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-vue" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
            <router-link class="mui-tab-item-vue" to="/shopcart">
                <span class="mui-icon mui-icon-contact mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-vue" to="/member">
                <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
            return {
                flag: false
            }
        },
        created() {
            this.flag = this.$route.path === '/home' ? false : true;
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        },
        watch: {
            '$route.path': function(newVal, oldVal) {
                //console.log('test');
                if (newVal === '/home') {
                    this.flag = false;
                } else {
                    this.flag = true;
                }
            }
        }
}
</script>
<style lang="scss" scoped>
* {
    touch-action: pan-y;
}

.app-container {
    padding-top: 45px;
    // //overflow-x: hidden;
    // overflow-y: scroll;
    overflow:auto;
    //在移动端上，在你用overflow-y:scorll属性的时候，你会发现滚动的效果很木，很慢，这时候可以使用-webkit-overflow-scrolling:touch这个属性，让滚动条产生滚动回弹的效果，就像ios原生的滚动条一样流畅。
    //webkit-overflow-scrolling:touch属性的下一层子元素上，将height加1%或1px。从而主动触发scrollbar。   给每个组件根部<div>加上min-height:calc(100%+1px); 解决ios滚动回弹遮挡页面顶部和底部问题

    -webkit-overflow-scrolling:touch;
    padding-bottom: 50px;
    height: 100vh;
    min-height: 100vh;

}

.v-enter {
    opacity: 0;
    transform: translateX(100%);
    position: absolute;
}

.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.2s ease;
}

.mui-bar {
    webkit-box-shadow: 0 0 1px rgba(146, 146, 146, .3);
    box-shadow: 0 0 1px rgba(146, 146, 146, .3);
}

//解决Mui类名和mui.JS冲突问题
.mui-bar-tab .mui-tab-item-vue {
    display: table-cell;
    overflow: hidden;
    width: 100%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-vue.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-vue .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-vue .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
