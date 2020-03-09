import store from '@/store';
import { setLocal } from "./index";

export default function ( language = { name : "中文" , subname : "zh-CN" } ) {
    let _language = {};
    try {
        _language = require ( `@/language/${language.subname }` );
        setLocal ( "current_language" , language );
    } catch ( e ) {
        _language = {};
    }
    store.dispatch ( "upVuex" , {
        mutations : "setLanguage" ,
        value : _language
    } );
}