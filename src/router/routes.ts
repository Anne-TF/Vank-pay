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
            requiredAuth: false

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
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft'
        }
    },
    {
        path: '/verify-email',
        component: () => import('../Auth/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/VerifyEmail.vue') }
        ],
        meta: {
            requiredAuth: false,
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft'
        }
    },
    {
        path: '/password-reset',
        component: () => import('../Auth/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/PasswordReset.vue') }
        ],
        meta: {
            requiredAuth: false,
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft'
        }
    },
    {
        path: '/validate-email',
        component: () => import('../Auth/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/ValidateEmail.vue') }
        ],
        meta: {
            requiredAuth: false,
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft'
        }
    },
    {
        path: '/two-factor-auth',
        component: () => import('../Auth/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/TwoFactorAuthentication.vue') }
        ],
        meta: {
            requiredAuth: false,
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft'
        }
    },
    {
        path: '/account-created',
        component: () => import('../Auth/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/AccountCreated.vue') }
        ],
        meta: {
            requiredAuth: false,
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
