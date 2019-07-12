<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max="maxnum" data-numbox-step='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="numchange" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        //接收父组件传过来的最大库存
        props:["maxnum"],
        mounted() {
            //初始化组件
            mui('.mui-numbox').numbox();
        }, 
        created() {

        },
        methods:{
            numchange(){
                //子组件传值给父组件方法
                this.$emit("getnum",parseInt(this.$refs.numbox.value));
                   
            }
        }
}
</script>
<style lang="scss" scoped>
.mui-numbox {
    float: right;
    width: 130px;
    height: 30px;
    border-radius: 0px;
    border: none !important;
    border-radius:5px;
    line-height: 30px;
        background-color: #f9f9f9;
    .mui-input-numbox {
        border-top: 1px solid #eee !important;
        border-bottom: 1px solid #eee !important;
        border-left: none !important;
        border-right: none !important;
        width:48px;
    }
    .mui-btn-numbox-minus {
        width: 40px;
        height: 30px;
        border: none;
    }
}
</style>
