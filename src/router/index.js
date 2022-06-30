// 1.Dependency
import {
    createRouter,
    // createWebHistory,
    createWebHashHistory,
} from "vue-router";

// 2.Components
const V1 = () => import("../views/v1.vue");

// 3.Routes
const routes = [
    { name: "home", path: "/", redirect: "/v1" },
    { name: "v1", path: "/v1", component: V1 },
];

// 4.Build An Instance
const router = createRouter({
    history: createWebHashHistory(), //hash
    // history: createWebHistory(),  //history api
    // base : '/rewrite root',
    routes,
});

export default router;
