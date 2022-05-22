<template>
    <office-form :readonly="true" :object="office" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapStores } from "pinia";
import { useOfficeStore } from "@/stores/office/OfficeStore";
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
    components: {
        OfficeForm: defineAsyncComponent(() =>
            import("@/components/office/OfficeForm.vue")
        ),
    },
    props: {
        id: Number,
    },
    computed: {
        ...mapStores(useOfficeStore),
        office() {
            return this.officeStore.finded;
        },
    },
    async mounted() {
        await this.officeStore.find(this.id);
    },
};
</script>

<style></style>
