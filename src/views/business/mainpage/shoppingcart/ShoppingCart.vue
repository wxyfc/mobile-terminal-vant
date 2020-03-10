<template>
    <div class="shoppingCart">
        <h1>11111</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>This is an shoppingCart page</h1>
        <h1>2222</h1>
    </div>
</template>
<script>
    import setLanguage from '@/function/setLanguage'

    export default {
        mixins : [ require ( "@/mixin/mymixins" ).default ] ,
        name : 'shoppingCart' ,
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
            this.$emit ( "$tabbarInfo" , 3 , "dota" );
            this.$emit ( "$tabbarInfo" , 2 , "" );
            this.$emit ( "$tabbarInfo" , 1 , "dot" );
            this.$emit ( "$tabbarInfo" , 0 , "+11" );
            // this.$emit ( "$navBarInfo" , "leftType" , "icon" );
            // this.$emit ( "$navBarInfo" , "leftContent" , "arrow-left" );
            this.$emit ( "$navBarInfo" , "centreType" , "text" );
            this.$emit ( "$navBarInfo" , "centreContent" , this.language[ this.$options.name ] );
            // this.$emit ( "$navBarInfo" , "rightType" , "icon" );
            // this.$emit ( "$navBarInfo" , "rightContent" , "setting-o" );
        }
    }
</script>
