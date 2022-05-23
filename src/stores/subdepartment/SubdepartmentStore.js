import { defineStore } from "pinia";
import { getAll, get, post } from "@/helpers/Request";
import { useFolderGroupStore } from "../folderGroup/FolderGroupStore";
const baseUrl = "/subdepartments";
export const useSubdepartmentStore = defineStore("subdepartment", {
    state: () => {
        return {
            list: [],
            isLoading: true,
            finded: {},
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
            await this.all();
            this.isLoading = false;
            return response;
        },
        async folderGroups(subdepartmentId) {
            const folderGroupStore = useFolderGroupStore()
            this.isLoading = true;
            const response = await get(`${baseUrl}/${subdepartmentId}/groups`);
            folderGroupStore.list = response.data;
            this.isLoading = false;
            return response;
        }
    },
});
