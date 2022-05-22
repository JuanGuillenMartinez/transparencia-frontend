<template>
    <CustomTable :columns="columns" :rows="rows" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
    components: {
        CustomTable: defineAsyncComponent(() =>
            import("@/components/Table.vue")
        ),
    },
    props: {
        rows: {
            type: Array,
            default: [],
        },
    },
    computed: {
        columns() {
            return [
                {
                    label: "ID",
                    field: "id",
                    width: "3%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "Nombre",
                    field: "nombre",
                    width: "10%",
                    sortable: true,
                },
            ];
        },
    },
};
</script>

<style></style>
