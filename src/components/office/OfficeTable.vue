<template>
    <CustomTable :columns="columns" :rows="rows" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import officeHeaders from "@/helpers/TableHeaders/Office"
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
            return officeHeaders;
        },
    },
};
</script>

<style></style>
