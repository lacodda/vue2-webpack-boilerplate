import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/App.vue';
import routes from './routes';
import 'styles/index.scss';

Vue.use(VueRouter);
const router = new VueRouter({ routes });
Vue.component('navbar', () => import('components/Navbar.vue'));

export default new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
