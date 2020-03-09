<template>
    <div>
        <div v-if="showTopNavBar">
            <TopNavBar
                    :option="topNavBarOption"
                    @$clickLeft="$clickLeft"
                    @$clickCenter="$clickCenter"
                    @$clickRight="$clickRight"
                    @$searchChange="$searchChange"
            />
            <div class="bavbar-handler-top"><!--不可以删除这个噢--></div>
        </div>
        <router-view
                @$tabbarInfo="$tabbarInfo"
                @$navBarInfo="$navBarInfo"
        />
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
            SetPopup : () => import('./SetPopup') ,
            TopNavBar : () => import('./TopNavBar')
        } ,
        data () {
            return {
                showTopNavBar : true ,
                tabbarList : false ,
                topNavBarOption : {
                    leftType : "icon" ,
                    leftContent : "" ,
                    centreType : "title" ,
                    centreContent : "" ,
                    rightType : "icon" ,
                    rightContent : ""
                }
            };
        } ,
        created () {
            //修改tabbar.json数组可修改底部导航栏数目，数组为空则没有底部导航栏，已处理导航栏在底部重叠的问题。
            //调用$tabbarInfo可修改底部导航，index为修改底部导航的索引，content为修改的内容，content=="dot"时则显示为红点，其他按照原内容显示
            let list = false;
            try {
                list = require ( "@/config/tabbar" );
                if ( !!list && list.length >= 1 ) {
                    this.tabbarList = list;
                }
            } catch ( e ) {
            }
        } ,
        methods : {
            changeTopNavBar () {
                this.showTopNavBar = !this.showTopNavBar;
            } ,
            $clickLeft () {
                this.$log ( 111 );
            } ,
            $clickCenter () {
                this.$log ( 222 );
            } ,
            $searchChange ( value , is ) {
                //is==true 用户输入完成点击确认搜索触发，is==false 用户输入文字就触发
                this.$log ( { value , is } );
            } ,
            $clickRight () {
                this.$log ( 333 );
            } ,
            $navBarInfo ( key , value ) {
                this.$set ( this.topNavBarOption , key , value )
            } ,
            $tabbarInfo ( index , content ) {
                if ( this.tabbarList ) {
                    this.tabbarInfoSuccess ( index , content );
                } else {
                    this.tabbarInfoError ( index , content );
                }
            } ,
            tabbarInfoSuccess ( index , content ) {
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