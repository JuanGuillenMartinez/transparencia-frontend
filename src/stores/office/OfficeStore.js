import { defineStore } from "pinia";
import { getAll, get } from "@/helpers/Request";
const baseUrl = "/offices";
export const useOfficeStore = defineStore("office", {
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
            return response.message;
        },
        async find(id) {
            this.isLoading = true;
            const response = await get(baseUrl + "/" + id);
            const { data } = response;
            this.finded = data;
            this.isLoading = false;
            return response.message;
        },
    },
});
