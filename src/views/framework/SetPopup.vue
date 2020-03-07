<template>
    <van-popup v-model="setPopupShow" position="right" close-on-popstate closeable class="popup-right-content">
        <div class="top-close-partition"><!--不可以删除这个噢--></div>
        <van-cell :title="language.currentLanguage" is-link :value="languageCellValue.name" @click="LanguageActionSheetShow=true"/>
        <LanguageActionSheet :show="LanguageActionSheetShow" @close="LanguageActionSheetCloseFunction"/>
    </van-popup>
</template>

<script>
    import { getLocal } from '@/function'

    export default {
        mixins : [ require ( "@/mixin/mymixins" ).default ] ,
        name : "SetPopup" ,
        data () {
            return {
                LanguageActionSheetShow : false ,
                languageCellValue : {}
            };
        } ,
        components : {
            LanguageActionSheet : () => import('@/assets/LanguageActionSheet')
        } ,
        computed : {
            setPopupShow : {
                get () {
                    return this.otherInfo.setPopupShow;
                } ,
                set ( v ) {
                    this.setOtherInfo ( { setPopupShow : v } );
                }
            } ,
        } ,
        methods : {
            LanguageActionSheetCloseFunction ( value , item ) {
                this.LanguageActionSheetShow = false;
                this.languageCellValue = item;
            }
        } ,
        created () {
            let cur_lan = getLocal ( "current_language" , { name : "中文" , subname : "zh-CN" } );
            this.languageCellValue = cur_lan;
        }
    };
</script>