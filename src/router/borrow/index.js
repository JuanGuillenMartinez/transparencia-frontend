export default {
    name: "BorrowIndexRoute",
    component: () =>
        import(
            /* webpackChunkName: subseccion-index-route */ "@/views/borrow/BorrowIndex.vue"
        ),
    children: [
        {
            name: "BorrowListRoute",
            path: ":id",
            props: true,
            component: () =>
                import(
                    /* webpackChunkName: subseccion-information-route */ "@/views/borrow/BorrowInformation.vue"
                ),
        },
        // {
        //     name: "OfficeInformationRoute",
        //     path: ":id",
        //     props: true,
        //     component: () =>
        //         import(
        //             /* webpackChunkName: subseccion-information-route */ "@/views/office/OfficeInformation.vue"
        //         ),
        // },
    ],
};
