import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/components/App.vue';
import routes from '@/routes';
import ui from '@/ui';

Vue.use(VueRouter);
Vue.use(ui);
const router = new VueRouter({ routes });

export default new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
