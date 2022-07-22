import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('../Auth/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/AuthPage.vue') }
        ],
        meta: {
            requiredAuth: false,
            enterAnimation: 'animated fadeInLeft',
            leaveAnimation: 'animated slideOutRight'
        }
    },
    {
        path: '/sign-up',
        component: () => import('../Auth/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/AuthPage.vue') }
        ],
        meta: {
            requiredAuth: false,
            enterAnimation: 'animated slideInLeft',
            leaveAnimation: 'animated slideOutRight'
        }
    },
    {
        path: '/forgot-password',
        component: () => import('../Auth/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/ForgotPassword.vue') }
        ],
        meta: {
            requiredAuth: false,
            hasAnimation: true,
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft'
        }
    },
    {
        path: '/',
        component: () => import('../app/layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('../app/pages/IndexPage.vue') }
        ],
        meta: { requiredAuth: true }
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('../app/pages/ErrorNotFound.vue')
    }
];

export default routes;
