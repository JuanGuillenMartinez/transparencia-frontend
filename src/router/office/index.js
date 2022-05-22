export default {
    name: "OfficeIndexRoute",
    component: () =>
        import(
            /* webpackChunkName: office-index-route */ "@/views/office/OfficeIndex.vue"
        ),
    children: [
        {
            name: "OfficeListRoute",
            path: "todos",
            props: true,
            component: () =>
                import(
                    /* webpackChunkName: office-information-route */ "@/views/office/OfficeList.vue"
                ),
        },
        {
            name: "OfficeInformationRoute",
            path: ":id",
            props: true,
            component: () =>
                import(
                    /* webpackChunkName: office-information-route */ "@/views/office/OfficeInformation.vue"
                ),
        },
    ],
};
