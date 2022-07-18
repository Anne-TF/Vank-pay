// @ts-ignore
import { route } from 'quasar/wrappers';
import {
    createMemoryHistory,
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router';

import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function(/* { store, ssrContext } */)
{
    const createHistory = process.env.SERVER
        ? createMemoryHistory
        : process.env.VUE_ROUTER_MODE === 'history'
            ? createWebHistory
            : createWebHashHistory;

    const Router = createRouter({
        scrollBehavior: () => ({ left: 0, top: 0 }),
        routes,

        // Leave this as is and make changes in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        history: createHistory(process.env.VUE_ROUTER_BASE)
    });

    Router.beforeEach(async(to) =>
    {
        // See if any of the matched routes has meta "requiresAuth"
        if (to.matched.some(_route => _route.meta.requiredAuth))
        {
            /*  // Yes this route requires authentication. See if the user is authenticated.
            if (!store.getters['auth/isAuthenticated'])
            {
                // User is authenticated, we allow access.
                await Router.push('/');
            } */
            await Router.push('/login');
        }
        /* else
        {
            if (store.getters['auth/isAuthenticated'])
            {
                await Router.push({ path: '/available-services' });
            }
        } */
    });

    return Router;
});
