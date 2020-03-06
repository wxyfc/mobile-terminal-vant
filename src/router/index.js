import Vue from 'vue'
import VueRouter from 'vue-router'
import MainTabbar from '@/views/framework/MainTabbar';

Vue.use ( VueRouter )
MainTabbar
const routes = [
    {
        path : '/' ,
        redirect : { name : "home" } ,
    } , {
        path : '/MainTabbar' ,
        name : 'MainTabbar' ,
        component : MainTabbar ,
        children : [
            {
                path : '/home' ,
                name : 'home' ,
                component : () => import('@/views/framework/Home')
            } , {
                path : '/about' ,
                name : 'about' ,
                component : () => import('@/views/business/About')
            }
        ]
    } , {
        path : '/home2' ,
        name : 'home2' ,
        component : () => import('@/views/framework/Home')
    }
]

export default new VueRouter ( {
    mode : 'history' ,
    routes
} )
