<template>
    <div class="list-container">
        <div class="folder-group">
            <custom-table
                @row-selected="searchDocuments"
                :columns="tableHeaders"
                :rows="folderGroupList"
            />
        </div>
        <div class="folder-group-information">
            <div class="document-list">
                <custom-table
                    @row-selected="selectDocument"
                    :columns="folderHeaders"
                    :rows="folderList"
                />
            </div>
            <div class="document-information">
                <document-information
                    v-if="documentIsSelected"
                    :properties="documentInformation"
                />
            </div>
        </div>
    </div>
    <CButton
        color="primary"
        @click="
            () => {
                visibleLiveDemo = true;
            }
        "
        >Launch demo modal</CButton
    >
    <custom-modal :visible="visibleLiveDemo" />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapStores } from "pinia";
import { useSubdepartmentStore } from "@/stores/subdepartment/SubdepartmentStore";
import { useFolderGroupStore } from "@/stores/folderGroup/FolderGroupStore";
import { useFolderStore } from "@/stores/folder/FolderStore";
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
    },
    data() {
        return {
            documentIsSelected: false,
            visibleLiveDemo: false,
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
        documentInformation() {
            return this.folderStore.selected.folder_information;
        },
    },
    methods: {
        async searchDocuments(row) {
            await this.folderStore.searchByFolder(row.id);
        },
        selectDocument(selected) {
            this.documentIsSelected = true;
            this.folderStore.selected = selected;
        },
    },
    async mounted() {
        await this.subdepartmentStore.folderGroups(this.id);
    },
};
</script>

<style>
.list-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.folder-group-information {
    display: grid;
    grid-template-rows: 1fr 1fr;
}
</style>
