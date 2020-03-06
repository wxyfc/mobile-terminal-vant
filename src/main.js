import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import "./less/index.less"
import { fetchPost , fetchGet } from './http/http';

Vue.prototype.$Post = fetchPost;
Vue.prototype.$Get = fetchGet;

Vue.config.productionTip = false
Vue.use ( Vant );

new Vue ( {
    router ,
    store ,
    render : h => h ( App )
} ).$mount ( '#app' )
