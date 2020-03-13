<template>
    <van-swipe :autoplay="3000" @change="homeSwipeChange">
        <van-swipe-item v-for="(item, index) in images" :key="index" @click="swipeItemClick($event,item,index)">
            <img class="home-swipe-img" :src="item"/>
        </van-swipe-item>
    </van-swipe>

</template>

<script>
    export default {
        // mixins : [ require ( "@/mixin/mymixins" ).default ] ,
        //命名规范，可以路由跳转的首字母（最好）小写，语言包里要添加相对应的翻译，
        //这种的就是内嵌的子组件，名字（最好）和文件名字一样
        //如果你有命名规范就当我在放屁
        name : "HomeSwipe" ,
        data () {
            return {};
        } ,
        props : {
            images : {
                type : Array ,
                default : () => {
                    return [
                        'http://b-ssl.duitang.com/uploads/item/201806/20/20180620171603_JsPzu.jpeg' ,
                        'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/15/c5/24496183_1376533418350.jpg' ,
                        'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1211/27/c9/16142347_1354014176593.jpg' ,
                        'http://pic.rmb.bdstatic.com/779dcfa065f5769681f721f83f25e885.jpeg'
                    ];
                }
            }
        } ,
        methods : {
            homeSwipeChange ( index ) {
                this.$emit ( "swipe-change" , index )
            } ,
            swipeItemClick ( item , index , e ) {
                this.$emit ( "swipe-item-click" , item , index , e )
            }
        } ,
    };
</script>