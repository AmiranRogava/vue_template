import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/home.vue"
import About from "./pages/about.vue"
import Product from "./pages/product.vue"
import EPAGE from "./pages/404.vue"
import Cart from "./pages/cart.vue"

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
            path: "/product/:id/:name",
            name: "Product",
            component: Product,
            props:true
        },
        {
            path: "/cart",
            name: "Cart",
            component: Cart,
     
        },
        {
            path:"/:catchAll(.*)",
            component: EPAGE,
            name: "Not Found",
        }
    ]


})

export default router