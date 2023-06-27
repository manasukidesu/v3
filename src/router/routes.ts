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
        path: "/reative&ref",
        name: "reative&ref",
        component: () => import("../views/Reactive/index.vue"),
    },
    {
        path: "/computed",
        name: "computed",
        component: () => import("../views/Compued/index.vue"),
    },
    {
        path: "/stylebind",
        name: "stylebind",
        component: () => import("../views/StyleBind/index.vue"),
    },
];
export default routes;
