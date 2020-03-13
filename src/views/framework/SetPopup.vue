<template>
    <van-popup v-model="setPopupShow" position="right" close-on-popstate closeable class="popup-right-content">
        <div class="top-close-partition"><!--不可以删除这个噢--></div>
        <van-cell :title="language.currentLanguage" is-link :value="languageCellValue.name" @click="selectFun('languageSelect')"/>
        <van-cell :title="language.currentThemeColor" is-link @click="selectFun('colorSelect')">
            <span class="color-select-demo"></span>
        </van-cell>
        <CurrencyActionSheet :show="currencyActionSheetShow" :title="currencyActionSheetTitle" :type="currencyActionSheetType"
                             :actionSheetList="currencyActionSheetList" @close="currencyActionSheetCloseFunction"/>
    </van-popup>
</template>

<script>
    import { getLocal } from '@/function'
    
    export default {
        mixins : [ require ( "@/mixin/mymixins" ).default ] ,
        name : "SetPopup" ,
        data () {
            return {
                currencyActionSheetShow : false ,
                currencyActionSheetTitle : "" ,
                currencyActionSheetList : [] ,
                currencyActionSheetType : "" ,
                languageCellValue : {}
            };
        } ,
        components : {
            CurrencyActionSheet : () => import('@/assets/CurrencyActionSheet')
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
            selectFun ( item ) {
                this.currencyActionSheetTitle = this.language[ item ];
                this.currencyActionSheetType = item;
                this.currencyActionSheetList = require ( `@/config/${item}` );
                this.currencyActionSheetShow = true;
                
            } ,
            currencyActionSheetCloseFunction ( value , item ) {
                this.currencyActionSheetShow = false;
                if ( item != null ) {
                    this.languageCellValue = item;
                }
            }
        } ,
        created () {
            let cur_lan = getLocal ( "current_language" , { name : "中文" , subname : "zh-CN" } );
            this.languageCellValue = cur_lan;
        }
    };
</script>