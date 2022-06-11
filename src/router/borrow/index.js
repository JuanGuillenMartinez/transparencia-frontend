export default {
    name: "BorrowIndexRoute",
    component: () =>
        import(
            /* webpackChunkName: subseccion-index-route */ "@/views/borrow/BorrowIndex.vue"
        ),
    // children: [
    //     {
    //         name: "SubseccionListRoute",
    //         path: ":id/grupos",
    //         props: true,
    //         component: () =>
    //             import(
    //                 /* webpackChunkName: subseccion-information-route */ "@/views/folderGroup/FolderGroupList.vue"
    //             ),
    //     },
    //     // {
    //     //     name: "OfficeInformationRoute",
    //     //     path: ":id",
    //     //     props: true,
    //     //     component: () =>
    //     //         import(
    //     //             /* webpackChunkName: subseccion-information-route */ "@/views/office/OfficeInformation.vue"
    //     //         ),
    //     // },
    // ],
};
