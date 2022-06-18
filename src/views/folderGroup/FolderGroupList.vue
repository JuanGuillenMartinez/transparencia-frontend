<template>
    <div class="list-container">
        <div class="card">
            <div class="card-body">
                <title-tab>Carpetas</title-tab>
                <div class="folder-group">
                    <custom-table
                        @row-selected="searchDocuments"
                        :columns="tableHeaders"
                        :rows="folderGroupList"
                    />
                    <CButton class="btn-custom" color="success" @click="showGroupForm = true"
                        >Agregar</CButton
                    >
                </div>
            </div>
        </div>
        <div v-if="folderIsSelected" class="folder-group-information">
            <div class="card">
                <div class="card-body">
                    <title-tab>Legajos</title-tab>
                    <div class="document-list">
                        <custom-table
                            @row-selected="showModalInformation"
                            :columns="folderHeaders"
                            :rows="folderList"
                        />
                    </div>
                    <CButton class="btn-custom" color="success" @click="showDocumentForm = true"
                        >Agregar documento</CButton
                    >
                </div>
            </div>
        </div>
    </div>
    <custom-modal
        title="Registrar Serie de Documentos"
        title-close="Cerrar"
        @close-form="showGroupForm = false"
        :visible="showGroupForm"
    >
        <folder-group-form @save-clicked="saveFormGroup" />
    </custom-modal>
    <custom-modal
        title="Registrar Documentos"
        title-close="Cerrar"
        @close-form="showDocumentForm = false"
        :visible="showDocumentForm"
    >
        <folder-form :readonly="false" @save-clicked="saveDocument" />
    </custom-modal>
    <custom-modal
        title="Información del documento"
        title-close="Cerrar"
        @close-form="showModal = false"
        :visible="showModal"
    >
        <document-information :properties="information" />
    </custom-modal>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapStores } from "pinia";
import { useSubdepartmentStore } from "@/stores/subdepartment/SubdepartmentStore";
import { useFolderGroupStore } from "@/stores/folderGroup/FolderGroupStore";
import { useFolderStore } from "@/stores/folder/FolderStore";
import { CButton } from "@coreui/vue";
import TitleTab from "@/components/TitleTab.vue";
export default {
    components: {
        CustomTable: defineAsyncComponent(() =>
            import("@/components/Table.vue")
        ),
        DocumentInformation: defineAsyncComponent(() =>
            import("@/components/folder/DocumentInformation.vue")
        ),
        CustomModal: defineAsyncComponent(() =>
            import("@/components/CustomModal.vue")
        ),
        FolderGroupForm: defineAsyncComponent(() =>
            import("@/components/folderGroup/FolderGroupForm.vue")
        ),
        FolderForm: defineAsyncComponent(() =>
            import("@/components/folder/FolderForm.vue")
        ),
        TitleTab: defineAsyncComponent(() =>
            import("@/components/TitleTab.vue")
        ),
        CButton,
    },
    data() {
        return {
            documentIsSelected: false,
            showModal: false,
            information: {},
            showGroupForm: false,
            showDocumentForm: false,
            folderIdSelected: 0,
            folderIsSelected: false,
        };
    },
    props: {
        id: Number,
    },
    computed: {
        ...mapStores(
            useSubdepartmentStore,
            useFolderGroupStore,
            useFolderStore
        ),
        folderGroupList() {
            return this.folderGroupStore.list;
        },
        tableHeaders() {
            return this.folderGroupStore.tableHeaders;
        },
        folderHeaders() {
            return this.folderStore.tableHeaders;
        },
        folderList() {
            return this.folderStore.listFinded;
        },
    },
    methods: {
        async searchDocuments(row) {
            this.folderIsSelected = true;
            this.folderIdSelected = row.id;
            await this.folderStore.searchByFolder(row.id);
        },
        showModalInformation(selected) {
            selected.folder_information.legajo = selected.legajo;
            selected.folder_information.subserie = selected.subserie;
            this.information = selected.folder_information;
            this.showModal = true;
        },
        async saveFormGroup(object) {
            this.showGroupForm = false;
            object.subdepartment_id = this.id;
            const response = await this.folderGroupStore.add(object);
        },
        async saveDocument(object) {
            object.folder_group_id = this.folderIdSelected;
            await this.folderStore.add(object);
            this.showDocumentForm = false;
        },
    },
    async mounted() {
        await this.subdepartmentStore.folderGroups(this.id);
    },
};
</script>

<style scoped>
.list-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 12px;
    margin: 12px;
}
/* .folder-group-information {
    display: grid;
    grid-template-rows: 1fr 1fr;
} */
.btn-custom {
    margin-top: 12px;
}
</style>
