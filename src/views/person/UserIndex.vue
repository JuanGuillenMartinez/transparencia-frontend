<template>
    <div class="card">
        <div class="card-body">
        <title-tab class="title-employees"><h1>Empleados</h1></title-tab>
            <div class="list-container">
                <div class="user-group">
                    <custom-table
                        @row-selected="openInformationForm"
                        :columns="personStore.columns"
                        :rows="personStore.list"
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="modals">
        <custom-modal
            id="modal-update"
            :visible="showInformationForm"
            @close-modal="showInformationForm = false"
        >
            <template v-slot:title> Información del empleado </template>
            <template v-slot:body>
                <person-form
                    :readonly="formIsReadonly"
                    @save-clicked="add"
                    @update-clicked="update"
                    @delete-clicked="deleteRow"
                    :object="selectedItem"
                />
            </template>
            <template v-slot:footer>
                <button
                    @click="showInformationForm = false"
                    class="btn btn-danger"
                >
                    Cerrar
                </button>
            </template>
        </custom-modal>
    </div>
    <float-button @click="openAddForm"
        ><i class="fa-solid fa-plus"></i
    ></float-button>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapStores } from "pinia";
import { CButton } from "@coreui/vue";
import { usePersonStore } from "@/stores/PersonStore";

export default {
    components: {
        CustomTable: defineAsyncComponent(() =>
            import("@/components/Table.vue")
        ),
        DocumentInformation: defineAsyncComponent(() =>
            import("@/components/folder/DocumentInformation.vue")
        ),
        CustomModal: defineAsyncComponent(() =>
            import("@/components/Modal.vue")
        ),
        FolderGroupForm: defineAsyncComponent(() =>
            import("@/components/folderGroup/FolderGroupForm.vue")
        ),
        FolderForm: defineAsyncComponent(() =>
            import("@/components/folder/FolderForm.vue")
        ),
        PersonForm: defineAsyncComponent(() =>
            import("@/components/person/PersonForm.vue")
        ),
        FloatButton: defineAsyncComponent(() =>
            import("@/components/IconButton.vue")
        ),
        TitleTab: defineAsyncComponent(() =>
            import("@/components/TitleTab.vue")
        ),
        CButton,
    },
    data() {
        return {
            selectedItem: {},
            showInformationForm: false,
            formIsReadonly: true,
        };
    },
    methods: {
        openInformationForm(rowClicked) {
            this.selectedItem = rowClicked;
            this.formIsReadonly = true;
            this.showInformationForm = true;
        },
        openAddForm() {
            this.selectedItem = {};
            this.formIsReadonly = false;
            this.showInformationForm = true;
        },
        async update(properties) {
            const response = await this.personStore.updateRow(properties);
            this.showInformationForm = false;
        },
        async add(properties) {
            const response = await this.personStore.add(properties);
            this.showInformationForm = false;
        },
        async deleteRow(properties) {
            const response = await this.personStore.deleteRow(properties.id);
            console.log(response);
            this.showInformationForm = false;
        },
    },
    computed: {
        ...mapStores(usePersonStore),
    },
    async created() {
        await this.personStore.all();
    },
};
</script>

<style scoped>
/* .title-employees {
    margin-bottom: 12px;
} */
</style>
