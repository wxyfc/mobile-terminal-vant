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
                        'https://img.yzcdn.cn/vant/apple-1.jpg' ,
                        'https://img.yzcdn.cn/vant/apple-2.jpg' ,
                        'https://img.yzcdn.cn/vant/apple-3.jpg' ,
                        'https://img.yzcdn.cn/vant/apple-4.jpg'
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