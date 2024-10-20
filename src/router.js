import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/home.vue"
import About from "./pages/about.vue"
import Inner from "./pages/inner.vue"
import EPAGE from "./pages/404.vue"

const router = createRouter({
    history: createWebHistory("/"),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/inner/:name",
            name: "Inner",
            component: Inner,
            props:true
        },
        {
            path: "/inner/:name",
            name: "Inner",
            component: Inner,
            props:true
        },
        {
            path:"/:catchAll(.*)",
            component: EPAGE,
            name: "Not Found",
        }
    ]


})

export default router