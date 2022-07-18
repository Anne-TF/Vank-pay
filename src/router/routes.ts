import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('../app/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/Login.vue') }
        ],
        meta: { requiredAuth: false }
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
