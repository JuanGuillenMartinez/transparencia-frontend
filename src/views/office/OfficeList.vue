<template>
    <custom-table
        v-if="!isLoading && !showForm"
        @row-selected="goToInformation"
        :columns="columns"
        :rows="offices"
    />
    <office-form @save-clicked="add" v-else :readonly="false" />
    <div class="button-group">
        <float-button
            v-if="!showForm"
            :float="false"
            @button-clicked="openForm"
            icon="fa fa-plus"
            color-class="btn-primary"
        />
        <float-button
            v-if="showForm"
            :float="false"
            @button-clicked="closeForm"
            icon="fa fa-close"
            color-class="btn-danger"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapStores } from "pinia";
import { useOfficeStore } from "@/stores/office/OfficeStore";
import columnHeaders from "@/helpers/TableHeaders/Office";
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
    components: {
        OfficeTable: defineAsyncComponent(() =>
            import("@/components/office/OfficeTable.vue")
        ),
        CustomTable: defineAsyncComponent(() =>
            import("@/components/Table.vue")
        ),
        FloatButton: defineAsyncComponent(() =>
            import("@/components/FloatButton.vue")
        ),
        OfficeForm: defineAsyncComponent(() =>
            import("@/components/office/OfficeForm.vue")
        ),
    },
    data() {
        return {
            showForm: false,
        };
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
        openForm() {
            this.showForm = true;
        },
        closeForm() {
            this.showForm = false;
        },
        async add(object) {
            const response = await this.officeStore.add(object);
            toast(response.message);
            console.log(response.success);
            this.closeForm();
        },
    },
    async created() {
        await this.officeStore.all();
    },
};
</script>

<style>
.button-group {
    display: grid;
    position: fixed;
    row-gap: 2px;
    right: 12px;
    bottom: 12px;
}
</style>
