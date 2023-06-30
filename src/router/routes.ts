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
    {
        path: "/vfor",
        name: "vfor",
        component: () => import("../views/vfor/index.vue"),
    },
    {
        path: "/vmodel",
        name: "vmodel",
        component: () => import("../views/vmodel/index.vue"),
    },
    {
        path: "/lifecycle",
        name: "lifecycle",
        component: () => import("../views/LifeCycle/index.vue"),
    },
    {
        path: "/watch",
        name: "watch",
        component: () => import("../views/Watch/index.vue"),
    },
    {
        path: "/modelimport",
        name: "modelimport",
        component: () => import("@/views/Model/index.vue"),
    },
    {
        path: "/component",
        name: "component",
        component: () => import("@/views/ComponentView/index.vue"),
    },
];
export default routes;
