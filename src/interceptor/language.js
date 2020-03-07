import Vue from 'vue';
import router from '@/router'
import { getLocal , setLocal } from '@/function'
import setLanguage from '@/function/setLanguage'

router.beforeEach ( ( to , from , next ) => {
    // setLocal ( "current_language" , { name : "中文" , subname : "zh-CN" } );
    if ( Vue.prototype.$language === null ) {
        let cur_lan = getLocal ( "current_language" , { name : "中文" , subname : "zh-CN" } );
        Vue.prototype.$language = cur_lan;
        setLanguage ( cur_lan );
    }
    next ()
} )