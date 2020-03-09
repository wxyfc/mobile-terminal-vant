<template>
    <div class="home">
        <h1>this is home</h1>
        <van-button type="default" @click="buttonClick">{{ language.name }}</van-button>
    </div>
</template>

<script>
    import setLanguage from '@/function/setLanguage'

    export default {
        mixins : [ require ( "@/mixin/mymixins" ).default ] ,
        name : 'home' ,
        data () {
            return {};
        } ,
        components : {} ,
        watch : {} ,
        methods : {
            buttonClick () {
                // setLanguage ( "en-US" )
                // this.eleNotify ( "test" , 0 , 0 );
                this.setOtherInfo ( { setPopupShow : true } );
            }
        } ,
        mounted () {
            this.$emit ( "$tabbarInfo" , 0 , "dot" );
            this.$emit ( "$tabbarInfo" , 1 , "" );
            this.$emit ( "$navBarInfo" , "leftType" , "text" );
            this.$emit ( "$navBarInfo" , "leftContent" , "左侧返回home" );
            this.$emit ( "$navBarInfo" , "centreType" , "text" );
            this.$emit ( "$navBarInfo" , "centreContent" , "中间内容home" );
            this.$emit ( "$navBarInfo" , "rightType" , "text" );
            this.$emit ( "$navBarInfo" , "rightContent" , "右侧内容home" );
        }
    }
</script>
