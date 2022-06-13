import { defineStore } from "pinia";
import { getAll, get, post } from "@/helpers/Request";
import headers from "@/helpers/TableHeaders/FolderGroup";
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
        async availables() {
            this.isLoading = true;
            const response = await get(`/available/folder-groups`);
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
