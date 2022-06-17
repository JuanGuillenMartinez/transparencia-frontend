<template>
    <div v-if="!isLoading && !showForm" class="card">
        <div class="card-body">
            <title-tab>Departamentos</title-tab>
            <custom-table
                @row-selected="goToInformation"
                :columns="columns"
                :rows="offices"
            />
        </div>
    </div>
    <div class="card" v-else>
        <div class="card-body">
            <title-tab>Departamentos</title-tab>
            <office-form class="form-add-office" @save-clicked="add" :readonly="false" />
        </div>
    </div>
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
        TitleTab: defineAsyncComponent(() =>
            import("@/components/TitleTab.vue")
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
.form-add-office {
    margin-top: 24px;
}
</style>
