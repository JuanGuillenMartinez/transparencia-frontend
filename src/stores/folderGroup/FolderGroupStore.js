import { defineStore } from "pinia";
import { getAll, get, post, deleteRequest, put } from "@/helpers/Request";
import headers from "@/helpers/TableHeaders/FolderGroup";
import { useSubdepartmentStore } from "../subdepartment/SubdepartmentStore";
const baseUrl = "/folder-groups";
export const useFolderGroupStore = defineStore("folderGroup", {
    state: () => {
        return {
            list: [],
            isLoading: true,
            finded: {},
            tableHeaders: headers,
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
        async add(object, subdepartmentId) {
            const subdepartmentStore = useSubdepartmentStore();            
            this.isLoading = true;
            const response = await post(baseUrl, object);
            await subdepartmentStore.folderGroups(subdepartmentId);
            this.isLoading = false;
            return response;
        },
        async availables() {
            this.isLoading = true;
            const response = await get(`/available/folder-groups`);
            this.isLoading = false;
            return response;
        },
        async updateRow(properties, subdepartmentId) {
            const subdepartmentStore = useSubdepartmentStore();
            this.isLoading = true;
            const response = await put(
                `${baseUrl}/${properties.id}`,
                properties
            );
            await subdepartmentStore.folderGroups(subdepartmentId);
            this.isLoading = false;
            return response;
        },
        async deleteRow(properties, subdepartmentId) {
            const subdepartmentStore = useSubdepartmentStore();
            this.isLoading = true;
            const response = await deleteRequest(`${baseUrl}/${properties.id}`);
            await subdepartmentStore.folderGroups(subdepartmentId);
            this.isLoading = false;
            return response;
        },
        async folders() {
            // this.isLoading = true;
            // const response = await get();
            // await this.all();
            // this.isLoading = false;
            // return response;
        },
    },
});
