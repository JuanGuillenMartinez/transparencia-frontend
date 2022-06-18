import { createRouter, createWebHistory } from "vue-router";
import OfficeRouter from "@/router/office/index";
import SubseccionRouter from "@/router/subseccion/index";
import BorrowRouter from "@/router/borrow/index";
import UserRouter from "@/router/user/index";
import HomeView from "@/views/home/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/dependencias",
        ...OfficeRouter,
    },
    {
        path: "/subsecciones",
        ...SubseccionRouter,
    },
    {
        path: "/prestamos",
        ...BorrowRouter,
    },
    {
        path: "/empleados",
        ...UserRouter,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
