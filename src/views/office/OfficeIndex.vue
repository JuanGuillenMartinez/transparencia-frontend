<template>
    <OfficeTable />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapStores } from 'pinia';
import { useOfficeStore } from '@/stores/office/OfficeStore';
export default {
    components: {
        OfficeTable: defineAsyncComponent(() =>
            import("@/components/office/OfficeTable.vue")
        ),
    },
    computed: {
        ...mapStores(useOfficeStore),
    },
    created() {
        this.officeStore.all();
    }
};
</script>

<style></style>
