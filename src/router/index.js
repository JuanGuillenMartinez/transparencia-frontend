import { createRouter, createWebHistory } from "vue-router";
// import OfficeView from "@/views/office/OfficeIndex.vue";
// import HomeRouter from "@/router/home/index";
import OfficeRouter from "@/router/office/index";
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
