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
                ref="routerViewRef"
                @$tabbarInfo="$tabbarInfo"
                @$navBarInfo="$navBarInfo"
                @$changeTopNavBar="$changeTopNavBar"
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
            };
        } ,
        computed : {
            topNavBarOption () {
                return {
                    leftType : "icon" ,
                    leftContent : "" ,
                    centreType : "text" ,
                    centreContent : this.language[ this.$route.name ] ,
                    rightType : "icon" ,
                    rightContent : ""
                };
            }
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
            $clickLeft () {
                //$clickLeft $clickCenter $searchChange $clickRight 以下四个事件由TopNavBar中emit提交，
                // 再由该MainTabbar页面判断当前路由页面是否有声明该方法，声明则调用
                //从而使TopNavBar的点击事件跟路由页面产生联系
                if ( this.$refs.routerViewRef.$clickLeft ) {
                    this.$refs.routerViewRef.$clickLeft ();
                }
            } ,
            $clickCenter () {
                if ( this.$refs.routerViewRef.$clickCenter ) {
                    this.$refs.routerViewRef.$clickCenter ();
                }
            } ,
            $searchChange ( value , is ) {
                //is==true 用户输入完成点击确认搜索触发，is==false 用户输入文字就触发
                if ( this.$refs.routerViewRef.$searchChange ) {
                    this.$refs.routerViewRef.$searchChange ( value , is );
                }
            } ,
            $clickRight () {
                if ( this.$refs.routerViewRef.$clickRight ) {
                    this.$refs.routerViewRef.$clickRight ();
                }
            } ,
            $changeTopNavBar () {
                //监听路由页面emit事件隐藏或者显示顶部栏
                this.showTopNavBar = !this.showTopNavBar;
            } ,
            $navBarInfo ( key , value ) {
                //监听路由页面emit事件从而更改顶部栏的配置项
                this.$set ( this.topNavBarOption , key , value )
            } ,
            $tabbarInfo ( index , content ) {
                //监听路由页面的emit事件从而更改底部的tabbar信息
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