<template>
    <div class="app-container">
        <!-- header 区域 -->
        <header class="mui-bar mui-bar-nav">
            <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="" @click.native="$router.back(-1)"></router-link>
            <h1 class="mui-title">Vue商城</h1>
        </header>
        <!-- router-view区域 -->
        <transition>
            <router-view></router-view>
        </transition>
        <!-- tabbar区域 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcart">
                <span class="mui-icon mui-icon-contact mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
             <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
        </nav>
       
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.app-container {
    padding-top: 45px;
    overflow-x: hidden;
    padding-bottom:50px;
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
    transition: all 0.5s ease;
}

.mui-bar {
    webkit-box-shadow: 0 0 1px rgba(146, 146, 146, .3);
    box-shadow: 0 0 1px rgba(146, 146, 146, .3);
}

</style>
