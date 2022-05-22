<template>
    <custom-table
        v-if="!isLoading"
        @row-selected="goToInformation"
        :columns="columns"
        :rows="offices"
    />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapStores } from "pinia";
import { useOfficeStore } from "@/stores/office/OfficeStore";
import columnHeaders from "@/helpers/TableHeaders/Office";
export default {
    components: {
        OfficeTable: defineAsyncComponent(() =>
            import("@/components/office/OfficeTable.vue")
        ),
        CustomTable: defineAsyncComponent(() =>
            import("@/components/Table.vue")
        ),
    },
    computed: {
        ...mapStores(useOfficeStore),
        columns() {
            return columnHeaders;
        },
        offices() {
            return this.officeStore.list;
        },
        isLoading() {
            return this.officeStore.isLoading;
        },
    },
    methods: {
        goToInformation(selected) {
            const id = selected.id;
            this.$router.push({
                name: "OfficeInformationRoute",
                params: { id },
            });
        },
    },
    async created() {
        await this.officeStore.all();
    },
};
</script>

<style></style>
