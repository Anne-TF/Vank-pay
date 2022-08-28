import { RouteRecordRaw } from 'vue-router';
import { Screen } from 'quasar';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('../Auth/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/AuthPage.vue') }
        ],
        meta: {
            fullAuth: false,
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
            fullAuth: false
        }
    },
    {
        path: '/forgot-password',
        component: () => import('../Auth/layouts/AuthLayout.vue'),
        children: [
            { path: '', component: () => import('../Auth/pages/ForgotPassword.vue') }
        ],
        meta: {
            fullAuth: false,
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
            fullAuth: false,
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
            fullAuth: false,
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
            fullAuth: false,
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
            preAuth: true,
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
            fullAuth: false,
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft'
        }
    },
    {
        path: '/',
        component: () => import('../app/layouts/AppLayout.vue'),
        children: Screen.gt.md ? [] : [
            { path: '', component: () => import('../Balance/pages/MainBalanceView.vue') }
        ],
        meta: {
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft',
            fullAuth: true,
            hideMobileMenu: false
        }
    },
    {
        path: '/currency',
        component: () => import('../app/layouts/MobileMainLayout.vue'),
        children: [
            { path: ':currency', component: () => import('../Balance/pages/_CurrencyDetail.vue') }
        ],
        meta: {
            fullAuth: true,
            hideMobileMenu: true,
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft'
        }
    },
    {
        path: '/cards',
        component: () => import('../app/layouts/MobileMainLayout.vue'),
        children: [
            { path: ':card', component: () => import('../Balance/pages/_CardDetail.vue') }
        ],
        meta: {
            fullAuth: true,
            hideMobileMenu: true,
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft'
        }
    },
    {
        path: '/settings',
        component: () => import('../app/layouts/DesktopMainLayout.vue'),
        children: [
            { path: '', component: () => import('../Settings/pages/SettingsOptions.vue') },
            { path: 'profile', component: () => import('../Settings/pages/MyProfile.vue') },
            { path: 'security', component: () => import('../Settings/pages/SecuritySettings.vue') },
            { path: 'security/change-password', component: () => import('../Settings/pages/ChangePassword.vue') },
            { path: 'security/sms-auth', component: () => import('../Settings/pages/SMSAuthentication.vue') },
            { path: 'security/sms-auth/change-phone', component: () => import('../Settings/pages/ChangePhoneVerification.vue') },
            { path: 'security/email-auth', component: () => import('../Settings/pages/EmailAuthentication.vue') },
            { path: 'security/email-auth/change-email', component: () => import('../Settings/pages/ChangeEmailVerification.vue') },
            { path: 'security/authy-auth', component: () => import('../Settings/pages/AuthyAuthentication.vue') },
            { path: 'security/authy-auth/change-authy', component: () => import('../Settings/pages/ChangeAuthyVerification.vue') }
        ],
        meta: {
            fullAuth: true,
            hideMobileMenu: true,
            enterAnimation: 'animated slideInRight',
            leaveAnimation: 'animated slideOutLeft'
        }
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('../app/pages/ErrorNotFound.vue')
    }
];

export default routes;
