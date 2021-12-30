import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/sign-up",
        name: "Sign up",
        component: () => import("../views/SignUp.vue"),
    },
    {
        path: "/sign-in",
        name: "Sign in",
        component: () => import("../views/SignIn.vue"),
    },
    {
        path: "/sign-out",
        name: "Sign out",
        component: () => import("../views/SignOut.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
