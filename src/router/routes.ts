import HomeView from "../views/indexView.vue";
const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFindView.vue"),
    },
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
    },
    {
        path: "/reative",
        name: "reative",
        component: () => import("../views/Reactive/index.vue"),
    },
];
export default routes;
