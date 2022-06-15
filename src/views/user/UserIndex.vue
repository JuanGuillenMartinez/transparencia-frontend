<template>
    <h1>vista de usuarios</h1>
    <div class="list-container">
        <div class="user-group">
            <custom-table
                @row-selected="setSelectedItem"
                :columns="personStore.columns"
                :rows="personStore.list"
            />
            <CButton color="success" @click="showGroupForm = true"
                >Agregar</CButton
            >
        </div>
        <!-- <div v-if="folderIsSelected" class="folder-group-information">
            <div class="document-list">
                <custom-table
                    @row-selected="showModalInformation"
                    :columns="folderHeaders"
                    :rows="folderList"
                />
            </div>
            <CButton color="success" @click="showDocumentForm = true"
                >Agregar documento</CButton
            >
        </div> -->
    </div>

    <!-- <custom-modal
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
    </custom-modal> -->
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
            import("@/components/CustomModal.vue")
        ),
        FolderGroupForm: defineAsyncComponent(() =>
            import("@/components/folderGroup/FolderGroupForm.vue")
        ),
        FolderForm: defineAsyncComponent(() =>
            import("@/components/folder/FolderForm.vue")
        ),
        CButton,
    },
    data() {
        return {
            selectedItem: {},
        };
    },
    methods: {
        setSelectedItem(rowClicked) {
            console.log(rowClicked);
            this.selectedItem = rowClicked;
        }
    },
    computed: {
        ...mapStores(usePersonStore),
    },
    async created() {
        await this.personStore.all();
    }
};
</script>

<style></style>
