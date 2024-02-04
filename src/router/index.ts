import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

/**
 * Retrieves the routes for all modules.
 *
 * @return {Promise<Array<Array<RouteRecordRaw>>>} An array of arrays containing the routes for each module.
 */
async function getModuleRoutes(): Promise<Array<Array<RouteRecordRaw>>> {
    const modulesRoutes: Array<Array<RouteRecordRaw>> = [];
    const modules = import.meta.glob('../modules/*/router.ts', { import: 'default', eager: true });

    if (!modules) {
        return [];
    }

    const modulesArr = Object.values(modules);

    modulesArr.forEach((module: unknown) => {
        modulesRoutes.push(module as Array<RouteRecordRaw>);
    });

    return modulesRoutes;
}

const moduleRoutes = await getModuleRoutes();

export const routes: readonly RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    ...moduleRoutes.flat()
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
