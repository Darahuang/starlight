import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/frontend/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/backend/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/backend/Orders.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backend/Coupons.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../components/Layout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/frontend/Index.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/frontend/About.vue'),
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../views/frontend/News.vue'),
      },
      {
        path: '/favlist',
        name: 'FavList',
        component: () => import('../views/frontend/FavList.vue'),
      },
      {
        path: '/customer_orders',
        name: 'CustomerOrders',
        component: () => import('../views/frontend/CustomerOrders.vue'),
      },
      {
        path: '/customer_orders/:id?',
        name: 'OneProduct',
        component: () => import('../views/frontend/OneProduct.vue'),
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../views/frontend/Checkout.vue'),
      },
      {
        path: '/checkout/:orderId',
        name: 'Payment',
        component: () => import('../views/frontend/Payment.vue'),
      },
      {
        path: '/check_orders/:id?',
        name: 'CheckOrders',
        component: () => import('../views/frontend/CheckOrders.vue'),
      },
      {
        path: '/customize',
        name: 'Customize',
        component: () => import('../views/frontend/Customize.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/login',
  },

];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
