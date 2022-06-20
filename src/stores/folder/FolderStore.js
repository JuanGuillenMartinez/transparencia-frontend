import { defineStore } from "pinia";
import { getAll, get, post, deleteRequest, put } from "@/helpers/Request";
import headers from "@/helpers/TableHeaders/Folder"
import { useFolderGroupStore } from "../folderGroup/FolderGroupStore";
import { useSubdepartmentStore } from "../subdepartment/SubdepartmentStore";
const baseUrl = "/folders";
export const useFolderStore = defineStore("folder", {
    state: () => {
        return {
            list: [],
            listFinded: [],
            isLoading: true,
            finded: {},
            tableHeaders: headers,
            selected: {},
        };
    },
    actions: {
        async all() {
            this.isLoading = true;
            const response = await getAll(baseUrl);
            const { data } = response;
            this.list = data;
            this.isLoading = false;
            return response;
        },
        async find(id) {
            this.isLoading = true;
            const response = await get(baseUrl + "/" + id);
            const { data } = response;
            this.finded = data;
            this.isLoading = false;
            return response;
        },
        async add(object) {
            this.isLoading = true;
            const response = await post(baseUrl, object);
            await this.searchByFolder(object.folder_group_id);
            this.isLoading = false;
            return response;
        },
        async searchByFolder(id) {
            this.isLoading = true;
            const response = await get(`/folder-groups/${id}/folders`);
            this.listFinded = response.data;
            this.isLoading = false;
            return response;
        },
        async deleteRow(id, subdepartmentId) {
            const subdepartmentStore = useSubdepartmentStore();
            this.isLoading = true;
            const response = await deleteRequest(`${baseUrl}/${id}`);
            await subdepartmentStore.folderGroups(subdepartmentId);
            this.isLoading = false;
            return response;
        },
        async updateRow(properties, subdepartmentId) {
            const subdepartmentStore = useSubdepartmentStore();
            this.isLoading = true;
            const response = await put(`${baseUrl}/${properties.id}`, properties);
            await subdepartmentStore.folderGroups(subdepartmentId);
            this.isLoading = false;
            return response;
        }
    },
});
