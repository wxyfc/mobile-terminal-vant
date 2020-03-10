<template>
    <van-nav-bar fixed>
        <van-icon v-if="option.leftType==='icon'" :name="option.leftContent" slot="left" @click="$clickLeft"></van-icon>
        <span v-else-if="option.leftType==='text'" slot="left" @click="$clickLeft">{{ option.leftContent }}</span>
        <span v-if="option.centreType==='text'" slot="title" @click="$clickCenter">{{ option.centreContent }}</span>
        <van-search v-else-if="option.centreType==='search'" slot="title" v-model="searchContent" :placeholder="option.centreContent" @search="$searchChange"></van-search>
        <van-icon v-if="option.rightType==='icon'" :name="option.rightContent" slot="right" @click="$clickRight"></van-icon>
        <span v-else-if="option.rightType==='text'" slot="right" @click="$clickRight">{{ option.rightContent }}</span>
    </van-nav-bar>
</template>

<script>
    export default {
        mixins : [ require ( "@/mixin/mymixins" ).default ] ,
        name : "TopNavBar" ,
        data () {
            return {
                searchContent : ""
            };
        } ,
        props : {
            option : {
                //顶部栏配置项
                type : Object ,
                default : () => {
                    return {
                        leftType : "icon" ,
                        leftContent : "" ,
                        centreType : "title" ,
                        centreContent : "" ,
                        rightType : "icon" ,
                        rightContent : ""
                    };
                }
            } ,
            fixed : {
                //固定在顶部
                type : Boolean ,
                default : true
            }
        } ,
        watch : {
            searchContent : {
                deep : true ,
                // immediate : true ,//不要第一次
                handler ( newv , oldv ) {
                    this.$emit ( "$searchChange" , newv , false )
                }
            }
        } ,
        methods : {
            $searchChange ( value ) {
                //手机点击确认搜索，键盘按下回车键才会触发
                this.$emit ( "$searchChange" , value , true )
            } ,
            $clickLeft () {
                if ( this.option.leftContent === "arrow-left" || this.option.leftContent.includes ( "返回" ) ) {
                    this.$router.go ( -1 )
                }
                this.$emit ( "$clickLeft" )
            } ,
            $clickCenter () {
                this.$emit ( "$clickCenter" )
            } ,
            $clickRight () {
                this.$emit ( "$clickRight" )
            }
        } ,
        mounted () {
        } ,
    };
</script>