import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '@/views/Register';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
