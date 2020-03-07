<template>
    <van-action-sheet v-model="languageActionSheetShow" :actions="actionSheetList" @select="onSelectFunction"
                      :title="language.languageActionSheetTitle" :cancel-text="language.cancel"
                      close-on-popstate close-on-click-action get-container="#app"/>
</template>

<script>
    import setLanguage from '@/function/setLanguage'

    export default {
        // mixins : [ require ( "@/mixin/mymixins" ).default ] ,
        name : "LanguageActionSheet" ,
        data () {
            return {
                actionSheetList : require ( "@/config/languageSelect" ) ,
                actionSheetItem : null
            };
        } ,
        props : {
            show : {
                type : Boolean ,
                default : false
            }
        } ,
        computed : {
            language () {
                return this.$store.getters.getLanguage;
            } ,
            languageActionSheetShow : {
                get () {
                    return this.show;
                } ,
                set ( v ) {
                    this.$emit ( "close" , v , this.actionSheetItem )
                }
            } ,
        } ,
        methods : {
            onSelectFunction ( item ) {
                this.actionSheetItem = item;
                setLanguage ( item );
            }
        } ,
    };
</script>