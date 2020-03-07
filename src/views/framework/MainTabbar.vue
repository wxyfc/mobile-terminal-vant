<template>
    <div>
        <router-view/>
        <SetPopup/>
        <div v-if="tabbarList.length>=1" class="tabbar-handler-bottom">
            <van-tabbar route>
                <van-tabbar-item v-for="item in tabbarList" :replace="item.replace" :key="item.path"
                                 :to="item.path" :icon="item.icon" :dot="item.dot" :info="item.info">
                    {{ language[item.title]||item.title }}
                </van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        mixins : [ require ( "@/mixin/mymixins" ).default ] ,
        name : "MainTabbar" ,
        components : {
            SetPopup : () => import('./SetPopup')
        } ,
        data () {
            return {
                tabbarList : []
            };
        } ,
        created () {
            //修改tabbar.json数组可修改底部导航栏数目，数组为空则没有底部导航栏，已处理导航栏在底部重叠的问题。
            //调用$tabbarInfo可修改底部导航，index为修改底部导航的索引，content为修改的内容，content=="dot"时则显示为红点，其他按照原内容显示
            let list = require ( "@/config/tabbar" );
            if ( !!list && list.length >= 1 ) {
                this.tabbarList = list;
                Vue.prototype.$tabbarInfo = this.tabbarInfoFunction;
            } else {
                Vue.prototype.$tabbarInfo = this.tabbarInfoError;
            }
        } ,
        methods : {
            tabbarInfoFunction ( index , content ) {
                if ( content == "dot" ) {
                    this.$set ( this.tabbarList[ index ] , "dot" , true )
                } else {
                    this.$set ( this.tabbarList[ index ] , "dot" , false )
                    this.$set ( this.tabbarList[ index ] , "info" , content )
                }
            } ,
            tabbarInfoError ( index , content ) {
                let message = `底部tabbar没有开启\n请不要使用$tabbarInfo\nindex:${index}     content:${content}`
                this.$notify ( { duration : 0 , message } );
            }
        }
    };
</script>