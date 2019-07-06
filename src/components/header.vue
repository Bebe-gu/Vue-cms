<template>
    <header class="mui-bar mui-bar-nav">
        <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="" @click.native="$router.back(-1)"></router-link>
        <h1 class="mui-title">Vue商城</h1>
    </header>
</template>

<script>

</script>

<style lang="scss" scoped>
.mui-bar {
    webkit-box-shadow: 0 0 1px rgba(146, 146, 146, .3);
    box-shadow: 0 0 1px rgba(146, 146, 146, .3);
}
</style>
