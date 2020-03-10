import router from '@/router'
import store from '@/store';
//路由拦截器细节处理
router.beforeEach ( ( to , from , next ) => {
    //修改网页标题
    let title = store.state.language[ to.name ];
    document.title = title;
    //调整滚动布局0
    window.scroll ( 0 , 0 )
    next ()
} )