import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'styles/index.scss';

Vue.use(VueRouter);
const router = new VueRouter({});

export default new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
