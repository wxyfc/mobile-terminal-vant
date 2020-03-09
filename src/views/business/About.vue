<template>
    <div class="about">
        <h1>11111</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>This is an about page</h1>
        <h1>2222</h1>
    </div>
</template>
<script>
    import setLanguage from '@/function/setLanguage'

    export default {
        mixins : [ require ( "@/mixin/mymixins" ).default ] ,
        name : 'about' ,
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
            this.$emit ( "$tabbarInfo" , 1 , "111" );
            this.$emit ( "$tabbarInfo" , 0 , "" )
            this.$emit ( "$navBarInfo" , "leftType" , "icon" );
            this.$emit ( "$navBarInfo" , "leftContent" , "arrow-left" );
            this.$emit ( "$navBarInfo" , "centreType" , "search" );
            this.$emit ( "$navBarInfo" , "centreContent" , "中间内容搜索框" );
            this.$emit ( "$navBarInfo" , "rightType" , "icon" );
            this.$emit ( "$navBarInfo" , "rightContent" , "setting-o" );
        }
    }
</script>
