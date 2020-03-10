<template>
    <div class="about">
        <h1>11111</h1>
        <h1>不实时同步{{ one }}</h1>
        <h1>实时同步{{ two }}</h1>
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
        name : 'searchPage' ,
        data () {
            return {
                one : "" ,
                two : ""
            };
        } ,
        components : {} ,
        watch : {} ,
        methods : {
            $searchChange ( value , is ) {
                //is==true 用户输入完成点击确认搜索或者电脑按下回车触发，is==false 用户输入文字就触发
                if ( is ) {
                    //不会实时同步，用户主动完成才同步
                    this.one = value;
                }
                //实时同步用户的输入
                this.two = value;
            } ,
            buttonClick () {
                // setLanguage ( "en-US" )
                // this.eleNotify ( "test" , 0 , 0 );
                this.setOtherInfo ( { setPopupShow : true } );
            }
        } ,
        mounted () {
            this.$emit ( "$tabbarInfo" , 3 , "dot" );
            this.$emit ( "$tabbarInfo" , 2 , "+www" );
            this.$emit ( "$tabbarInfo" , 1 , "" );
            this.$emit ( "$tabbarInfo" , 0 , "hello" );
            // this.$emit ( "$navBarInfo" , "leftType" , "icon" );
            // this.$emit ( "$navBarInfo" , "leftContent" , "arrow-left" );
            this.$emit ( "$navBarInfo" , "centreType" , "search" );
            this.$emit ( "$navBarInfo" , "centreContent" , this.language.searchPageDefault );
            // this.$emit ( "$navBarInfo" , "rightType" , "icon" );
            // this.$emit ( "$navBarInfo" , "rightContent" , "setting-o" );
        }
    }
</script>
