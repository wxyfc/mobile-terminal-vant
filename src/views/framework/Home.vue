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
        }
    }
</script>
