<template>
    <div class="home">
        <HomeSwipe @swipe-change="swipeChange" @swipe-item-click="swipeItemClick"/>
        <h1>this is home点击顶部就会+1的数字{{ titleClick}}</h1>
        <van-button type="default" @click="buttonClick">{{ language.name }}</van-button>
    </div>
</template>

<script>
    import setLanguage from '@/function/setLanguage'
    
    export default {
        mixins : [ require ( "@/mixin/mymixins" ).default ] ,
        name : 'homePage' ,
        data () {
            return {
                titleClick : 0
            };
        } ,
        components : {
            HomeSwipe : () => import('./HomeSwipe')
        } ,
        watch : {} ,
        methods : {
            swipeChange ( index ) {
                // this.$log ( index );
            } ,
            swipeItemClick ( item , index , e ) {
                // this.$log ( { item , index , e } );
            } ,
            $clickCenter () {
                this.titleClick++;
            } ,
            buttonClick () {
                // this.eleNotify ( "test" , 0 , 0 );
                this.setOtherInfo ( { setPopupShow : true } );
            }
        } ,
        mounted () {
            this.$emit ( "$tabbarInfo" , 3 , "dot" );
            this.$emit ( "$tabbarInfo" , 2 , "+1" );
            this.$emit ( "$tabbarInfo" , 1 , "" );
            this.$emit ( "$tabbarInfo" , 0 , "" );
            // this.$emit ( "$navBarInfo" , "leftType" , "text" );
            // this.$emit ( "$navBarInfo" , "leftContent" , "左侧返回home" );
            this.$emit ( "$navBarInfo" , "centreType" , "text" );
            this.$emit ( "$navBarInfo" , "centreContent" , this.language[ this.$options.name ] );
            // this.$emit ( "$navBarInfo" , "rightType" , "text" );
            // this.$emit ( "$navBarInfo" , "rightContent" , "右侧内容home" );
        }
    }
</script>
