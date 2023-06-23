import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: import.meta.env.DEV
        ? createWebHashHistory(import.meta.env.BASE_URL)
        : createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
