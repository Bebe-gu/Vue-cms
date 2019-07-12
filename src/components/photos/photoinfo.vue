<template>
    <div>
        <div class="thumbs"> <img class="preview-img" v-for="(item, index) in imglist" :src="item.src" height="100" @click="$preview.open(index, imglist)" :key="item.src">
        </div>
        <h1>详细搭配区域</h1>
    </div>
</template>
<script>
export default {
    data() {
            return {
                id: this.$route.params.id,
                imglist: [],
                thumbslist: [{
                    id: 1,
                    img: [{
                        src: '../../img/t-1-1.jpg',
                        msrc: '../../img/t-1-1.jpg',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-1-2.jpg',
                        msrc: '../../img/t-1-2.jpg',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-1-3.gif',
                        src: '../../img/t-1-3.gif',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-1-4.gif',
                        msrc: '../../img/t-1-3.gif',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-1-5.gif',
                        msrc: '../../img/t-1-3.gif',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-1-6.gif',
                        msrc: '../../img/t-1-3.gif',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-1-7.jpg',
                        msrc: '../../img/t-1-3.gif',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-1-8.gif',
                        msrc: '../../img/t-1-3.gif',
                        w: 600,
                        h: 400
                    }]
                }, {
                    id: 2,
                    img: [{
                        src: '../../img/t-2-1.jpg',
                        msrc: '../../img/t-2-1.jpg',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-2-2.jpg',
                        msrc: '../../img/t-2-1.jpg',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-2-3.jpg',
                        msrc: '../../img/t-2-1.jpg',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-2-4.jpg',
                        msrc: '../../img/t-2-1.jpg',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-2-5.jpg',
                        msrc: '../../img/t-2-1.jpg',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-2-6.jpg',
                        msrc: '../../img/t-2-1.jpg',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-2-7.jpg',
                        msrc: '../../img/t-2-1.jpg',
                        w: 600,
                        h: 400
                    }, {
                        src: '../../img/t-2-8.jpg',
                        msrc: '../../img/t-2-1.jpg',
                        w: 600,
                        h: 400
                    }]
                }]
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
