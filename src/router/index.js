import { createRouter, createWebHistory } from "vue-router";
import OfficeRouter from "@/router/office/index";
import SubseccionRouter from "@/router/subseccion/index";

const routes = [
    // {
    //     path: "/",
    //     name: "home",
    //     component: HomeView,
    // },
    {
        path: "/dependencias",
        ...OfficeRouter,
    },
    {
        path: "/subsecciones",
        ...SubseccionRouter,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
