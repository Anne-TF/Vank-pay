// @ts-ignore
import { route, store } from 'quasar/wrappers';
import {
    createMemoryHistory,
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router';

import routes from './routes';
import { useAuthStore } from '../stores/auth';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function(/* { store } */)
{
    /* const createHistory = process.env.SERVER
        ? createMemoryHistory
        : process.env.VUE_ROUTER_MODE === 'history'
            ? createWebHistory
            : createWebHashHistory;*/

    const Router = createRouter({
        scrollBehavior: () => ({ left: 0, top: 0 }),
        routes,

        // Leave this as is and make changes in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        history: createWebHistory()
    });

    Router.beforeEach(async(to) =>
    {
        // See if any of the matched routes has meta "fullAuth"
        const authStore = useAuthStore();

        if (to.matched.some(_route => _route.meta.preAuth) || to.matched.some(_route => _route.meta.fullAuth))
        {

            // Yes this route requires preauthentication or full authentication. See if the user is authenticated.
            if (!authStore.PreAuth && !authStore.FullAuth)
            {
                // User is not authenticated, we dont allow access.
                await Router.push('/login');
            }

            // route requires full auth and user is preauthenticathed so we push it to the two factor auth screen
            else if (
                to.matched.some(_route => _route.meta.fullAuth) && !authStore.FullAuth && authStore.PreAuth
            )
            {
                await Router.push('/two-factor-auth');
            }
            // user is full authenticated and its trying to go to a preAuth route
            else if (!authStore.PreAuth && authStore.FullAuth && to.matched.some(_route => _route.meta.preAuth))
            {
                await Router.push('/');
            }
        }
    });

    return Router;
});
