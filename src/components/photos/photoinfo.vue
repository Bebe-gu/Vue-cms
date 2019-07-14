<template>
    <div>
        <div class="thumbs"> <img class="preview-img" v-for="(item, index) in imglist" :src="item.src" height="100" @click="$preview.open(index, imglist)" :key="item.src">
        </div>
        <h1>详细搭配区域</h1>
    </div>
</template>
<script>
    import thumbslist from '../../lib/data/photoThumsData.js'
export default {
    data() {
            return {
                id: this.$route.params.id,
                imglist: [],
                thumbslist
            };
        },

        created() {
            //console.log(this.getImgInfoById());
            this.getImgInfoById();
        },
        methods: {
            //获取图片详情，需后台
            getImgInfoById() {
                var list = this.thumbslist.filter(item => item.id == this.id)
                for (var i = 0; i < list.length; i++) {
                    this.imglist = list[i].img;
                    //console.log(list[i].img);
                }
            }
        },
        computed: {

        }
}
</script>
<style lang="scss" scoped>
.thumbs {
    padding: 5px;
    text-align: justify;
    img {}
}
</style>
