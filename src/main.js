import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import request from '@/utils/request'
import db from '@/utils/localstorage'

import '@/utils/install'

import VueApexCharts from 'vue-apexcharts'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import moment from 'moment'

moment.locale('zh-cn');

Vue.config.productionTip = false;

Vue.use(db);

Vue.use(Antd);

Vue.component('apexchart', VueApexCharts);


Vue.use({
    install(Vue) {
        Vue.prototype.$db = db
    }
});
Vue.prototype.$moment = moment;

Vue.prototype.$post = request.post;
Vue.prototype.$get = request.get;
Vue.prototype.$put = request.put;
Vue.prototype.$delete = request.delete;
Vue.prototype.$export = request.export;
Vue.prototype.$download = request.download;
Vue.prototype.$upload = request.upload;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
