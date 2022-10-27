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
    {
        name: "home",
        path: "/",
        redirect: (to) => {
            return { path: "/v1", query: to.query };
        },
    },
    { name: "v1", path: "/v1", component: V1 },
];

// 4.Build An Instance
const router = createRouter({
    history: createWebHashHistory(), //hash
    // history: createWebHistory(),  //history api
    // base : '/rewrite root',
    routes,
});

// 5.Token hook
const originQuery = new URLSearchParams(location.search);
const globalToken = originQuery.get("__token");
if (globalToken) localStorage.setItem("TITAN_TOKEN", globalToken);

router.beforeEach((to, from, next) => {
    const token = to.query.__token;
    if (token) localStorage.setItem("TITAN_TOKEN", token);
    next();
});

export default router;
