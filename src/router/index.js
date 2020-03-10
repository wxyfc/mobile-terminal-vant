import Vue from 'vue'
import VueRouter from 'vue-router'
import MainTabbar from '@/views/framework/MainTabbar';

Vue.use ( VueRouter )
const routes = [
    {
        path : '/' ,
        redirect : { name : "homePage" } ,
    } , {
        path : '/MainTabbar' ,
        name : 'MainTabbar' ,
        component : MainTabbar ,
        children : [
            {
                path : '/homePage' ,
                name : 'homePage' ,
                component : () => import('@/views/business/mainpage/homepage/HomePage')
            } , {
                path : '/searchPage' ,
                name : 'searchPage' ,
                component : () => import('@/views/business/mainpage/searchpage/SearchPage')
            } , {
                path : '/shoppingCart' ,
                name : 'shoppingCart' ,
                component : () => import('@/views/business/mainpage/shoppingcart/ShoppingCart')
            } , {
                path : '/my' ,
                name : 'my' ,
                component : () => import('@/views/business/mainpage/my/My')
            }
        ]
        // } , {
        //     path : '/home2' ,
        //     name : 'home2' ,
        //     component : () => import('@/views/framework/Home')
    }
]

export default new VueRouter ( {
    mode : 'history' ,
    routes
} )
