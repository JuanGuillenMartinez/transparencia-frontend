import { createRouter, createWebHistory } from "vue-router";
import OfficeView from "@/views/office/OfficeIndex.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: OfficeView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
