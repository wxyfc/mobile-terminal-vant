<template>
    <van-action-sheet v-model="currencyActionSheetShow" :actions="customList.includes(type)?[]:actionSheetList" @select="onSelectFunction"
                      :title="title" :cancel-text="language.cancel"
                      close-on-popstate close-on-click-action get-container="#app">
        <div v-if="type == 'colorSelect'">
            <van-cell v-for="(colorItem,index) in actionSheetList" :key="index" @click="onSelectFunction(colorItem)">
                <span slot="title">{{ colorItem.name }}</span>
                <span slot="label">{{ colorItem.subname }}</span>
                <span slot="default" class="color-select-demo" :style="{'background-color':colorItem.subname}"></span>
            </van-cell>
        </div>
    </van-action-sheet>
</template>

<script>
    import setLanguage from '@/function/setLanguage'
    import less from '@/less/index.less'

    export default {
        name : "LanguageActionSheet" ,
        data () {
            return {
                actionSheetItem : null ,
                customList : [ "colorSelect" ]
            };
        } ,
        props : {
            show : {
                type : Boolean ,
                default : false
            } ,
            title : {
                type : String ,
                default : ""
            } ,
            actionSheetList : {
                type : Array ,
                default : () => {
                    return [];
                }
            } ,
            type : {
                type : String ,
                default : ""
            }
        } ,
        computed : {
            language () {
                return this.$store.getters.getLanguage;
            } ,
            currencyActionSheetShow : {
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
                if ( this.type == "languageSelect" ) {
                    setLanguage ( item );
                } else if ( this.type == "colorSelect" ) {
                    this.currencyActionSheetShow = false;
                    // less.modifyVars ( {
                    //     '@color-theme' : item.subname ,
                    // } ).then ( () => {
                    // } )
                }
            } ,

        } ,
    };
</script>