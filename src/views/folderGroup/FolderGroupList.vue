<template>
    <div class="list-container">
        <div class="folder-group">
            <custom-table @row-selected="searchDocuments" :columns="tableHeaders" :rows="folderGroupList" />
        </div>
        <div class="folder-group-information">
            <div class="document-list">
                <custom-table :columns="folderHeaders" :rows="folderList" />
            </div>
            <div class="document-information">
                aqui va la tabla de informacion del documento
            </div>
        </div>
    </div>
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
            await this.folderStore.searchByFolder(row.id);
        }
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
