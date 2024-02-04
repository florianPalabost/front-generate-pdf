<script setup lang="ts">
    import { RouteRecordRaw, RouterLink } from 'vue-router';
    import { routes } from '@/router';

    import { StringHelper } from '@/utils/StringHelper';

    export interface RouteAppHeader {
        path: string;
        name: string;
    }

    const routeList: RouteAppHeader[] = routes.map((route: RouteRecordRaw) => {
        return { path: route.path, name: StringHelper.ucFirst(route.name as string) } as RouteAppHeader;
    });
</script>
<template>
    <header class="">
        <nav class="flex items-center justify-between flex-wrap bg-slate-500 p-6">
            <div class="w-full flex items-center flex-shrink-0 text-white mr-6">
                <RouterLink to="/" class="font-semibold text-xl">Home</RouterLink>
                <div class="w-full block flex-grow lg-flex lg:items-center lg:w-auto" id="navbarNavAltMarkup">
                    <div class="text-sm lg:flex-grow ml-5">
                        <RouterLink
                            v-for="currentRoute in routeList"
                            :key="currentRoute.name"
                            :to="currentRoute.path"
                            class="mt-4 lg-inline-block lg:mt-O hover:text-white mr-4"
                            >{{ currentRoute.name }}</RouterLink
                        >
                    </div>
                </div>
                <span class="navbar-text me-auto fs-2"> Vue Tracker </span>
            </div>
        </nav>
    </header>
</template>
<style scoped></style>
